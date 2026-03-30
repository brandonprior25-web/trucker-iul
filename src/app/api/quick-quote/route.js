import nodemailer from 'nodemailer';

function sanitize(value) {
  if (typeof value !== 'string') return '';
  return value.replace(/</g, '&lt;').replace(/>/g, '&gt;').trim();
}

function getTransporter() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) throw new Error('Missing SMTP config');
  const port = parseInt(SMTP_PORT || '587', 10);
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    requireTLS: port === 587,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
    tls: { rejectUnauthorized: false },
  });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, email, coverage } = body;

    if (!name?.trim() || !email?.trim()) {
      return Response.json({ success: false, message: 'Name and email are required.' }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ success: false, message: 'Valid email is required.' }, { status: 400 });
    }

    const timestamp = new Date().toLocaleString('en-US', {
      timeZone: 'America/Chicago', dateStyle: 'full', timeStyle: 'short',
    });

    const html = `
<!DOCTYPE html>
<html><head><meta charset="UTF-8"/>
<style>
body{font-family:Arial,sans-serif;background:#f4f6f9;padding:20px;}
.container{max-width:580px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;}
.header{background:#0d2545;padding:28px;text-align:center;}
.header h1{color:#c8960c;margin:0;font-size:20px;}
.header p{color:rgba(255,255,255,0.6);margin:6px 0 0;font-size:13px;}
.badge{display:inline-block;background:#c8960c;color:#fff;font-size:11px;font-weight:700;padding:3px 10px;border-radius:20px;margin-top:10px;}
.body{padding:28px;}
.field{margin-bottom:16px;border-bottom:1px solid #f0f0f0;padding-bottom:16px;}
.field label{display:block;font-size:11px;font-weight:700;color:#888;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;}
.field value{display:block;font-size:15px;color:#0d2545;font-weight:500;}
.field a{color:#c8960c;}
.action{background:#0d2545;border-radius:10px;padding:18px;text-align:center;margin-top:20px;}
.action p{color:rgba(255,255,255,0.6);font-size:12px;margin:0 0 10px;}
.btn{display:inline-block;background:#c8960c;color:#fff;font-size:13px;font-weight:700;padding:9px 22px;border-radius:6px;text-decoration:none;}
.footer{background:#f8fafc;padding:16px 28px;text-align:center;border-top:1px solid #eee;}
.footer p{font-size:11px;color:#aaa;margin:0;}
</style></head>
<body>
<div class="container">
  <div class="header">
    <h1>Quick Quote Request</h1>
    <p>Family First Life Network — truckeriul.com</p>
    <span class="badge">New Lead</span>
  </div>
  <div class="body">
    <p style="color:#555;font-size:14px;line-height:1.6;margin:0 0 20px;">A visitor submitted the homepage quick quote form. Follow up ASAP — these leads are hot.</p>
    <div class="field"><label>Name</label><value>${sanitize(name)}</value></div>
    <div class="field"><label>Email</label><value><a href="mailto:${sanitize(email)}">${sanitize(email)}</a></value></div>
    <div class="field"><label>Phone</label><value>${phone ? sanitize(phone) : '<span style="color:#aaa">Not provided</span>'}</value></div>
    <div class="field" style="border:none;padding:0;"><label>Coverage Interest</label><value>${coverage ? sanitize(coverage) : 'Not specified'}</value></div>
    <div class="action">
      <p>Reply directly to this lead:</p>
      <a href="mailto:${sanitize(email)}?subject=Your IUL Quote — Family First Life Network&body=Hi ${sanitize(name)},%0A%0AThank you for your interest!" class="btn">Reply to ${sanitize(name)}</a>
    </div>
  </div>
  <div class="footer"><p>Submitted ${timestamp} via truckeriul.com homepage</p></div>
</div>
</body></html>`;

    const transporter = getTransporter();
    const recipientEmail = process.env.CONTACT_EMAIL || 'brandonaioinsurance@gmail.com';
    const fromAddress = process.env.SMTP_FROM || `Family First Life Network <${process.env.SMTP_USER}>`;

    await transporter.sendMail({
      from: fromAddress,
      to: recipientEmail,
      replyTo: email,
      subject: `Quick Quote: ${name} — Homepage Lead`,
      html,
    });

    // Auto-reply to lead
    try {
      await transporter.sendMail({
        from: fromAddress,
        to: email,
        subject: 'We received your quote request — Family First Life Network',
        html: `<!DOCTYPE html><html><head><meta charset="UTF-8"/>
<style>body{font-family:Arial,sans-serif;background:#f4f6f9;padding:20px;}
.c{max-width:560px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;}
.h{background:#0d2545;padding:24px;text-align:center;}.h h1{color:#c8960c;margin:0;font-size:18px;}
.b{padding:24px;}.b p{color:#555;font-size:14px;line-height:1.7;margin:0 0 12px;}
.btn{display:inline-block;background:#c8960c;color:#fff;font-size:13px;font-weight:700;padding:9px 22px;border-radius:6px;text-decoration:none;}
.f{background:#f8fafc;padding:14px 24px;text-align:center;border-top:1px solid #eee;}
.f p{font-size:11px;color:#aaa;margin:0;}</style></head>
<body><div class="c">
<div class="h"><h1>Family First Life Network</h1></div>
<div class="b">
<p>Hi ${sanitize(name)},</p>
<p>Thanks for reaching out! We received your quote request and will be in touch shortly.</p>
<p>Want to give us more details in the meantime? Fill out our full quote form:</p>
<a href="https://truckeriul.com/quote" class="btn">Complete Your Quote</a>
<p style="margin-top:18px;">Talk soon,<br/><strong>Family First Life Network</strong><br/>brandonaioinsurance@gmail.com</p>
</div>
<div class="f"><p>You submitted a quote request at truckeriul.com</p></div>
</div></body></html>`,
      });
    } catch (_) { /* non-critical */ }

    return Response.json({ success: true });
  } catch (err) {
    console.error('Quick quote error:', err);
    return Response.json({ success: false, message: 'Failed to send. Please try the full form.' }, { status: 500 });
  }
}
