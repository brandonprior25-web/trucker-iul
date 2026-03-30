import nodemailer from 'nodemailer';

function getTransporter() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    throw new Error('Missing required SMTP environment variables.');
  }

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: parseInt(SMTP_PORT || '587', 10),
    secure: parseInt(SMTP_PORT || '587', 10) === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });
}

function sanitize(value) {
  if (typeof value !== 'string') return '';
  return value.replace(/</g, '&lt;').replace(/>/g, '&gt;').trim();
}

function buildEmailHtml(data) {
  const { name, email, subject, message } = data;
  const timestamp = new Date().toLocaleString('en-US', {
    timeZone: 'America/Chicago',
    dateStyle: 'full',
    timeStyle: 'short',
  });

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Contact Message</title>
  <style>
    body { font-family: Inter, Arial, sans-serif; background: #f4f6f9; margin: 0; padding: 20px; color: #333; }
    .container { max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(30,58,95,0.10); }
    .header { background: #1e3a5f; padding: 32px; text-align: center; }
    .header h1 { color: #d4960c; margin: 0; font-size: 22px; font-weight: 800; }
    .header p { color: #94b4d4; margin: 8px 0 0; font-size: 14px; }
    .badge { display: inline-block; background: #d4960c; color: #fff; font-size: 12px; font-weight: 700; padding: 4px 12px; border-radius: 20px; margin-top: 12px; }
    .body { padding: 32px; }
    .section-title { font-size: 13px; font-weight: 700; color: #1e3a5f; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 12px; border-bottom: 2px solid #f0f0f0; padding-bottom: 8px; }
    .field { margin-bottom: 14px; }
    .field label { display: block; font-size: 12px; font-weight: 600; color: #777; margin-bottom: 3px; text-transform: uppercase; letter-spacing: 0.05em; }
    .field value { display: block; font-size: 15px; color: #1e3a5f; font-weight: 500; }
    .field a { color: #d4960c; text-decoration: none; }
    .message-box { background: #f4f6f9; border-radius: 10px; padding: 16px; font-size: 14px; color: #555; line-height: 1.7; white-space: pre-wrap; border: 1px solid #e8ecf0; margin-bottom: 20px; }
    .action-box { background: #1e3a5f; border-radius: 12px; padding: 20px; text-align: center; margin-top: 24px; }
    .action-box p { color: #94b4d4; font-size: 13px; margin: 0 0 12px; }
    .action-btn { display: inline-block; background: #d4960c; color: #fff; font-size: 14px; font-weight: 700; padding: 10px 24px; border-radius: 8px; text-decoration: none; }
    .footer { background: #f8fafc; padding: 20px 32px; text-align: center; border-top: 1px solid #eef0f3; }
    .footer p { font-size: 12px; color: #9ca3af; margin: 0; }
    .timestamp { font-size: 11px; color: #9ca3af; margin-top: 4px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Contact Message</h1>
      <p>Family First Life Network</p>
      <span class="badge">New Message</span>
    </div>

    <div class="body">
      <p style="color:#555; font-size:14px; margin:0 0 24px; line-height:1.6;">
        Someone has sent a message through the contact form on your website. Details are below.
      </p>

      <!-- Contact Info -->
      <div class="section-title">From</div>
      <div style="margin-bottom:20px; display:grid; grid-template-columns:1fr 1fr; gap:16px;">
        <div class="field">
          <label>Name</label>
          <value>${sanitize(name)}</value>
        </div>
        <div class="field">
          <label>Email</label>
          <value><a href="mailto:${sanitize(email)}">${sanitize(email)}</a></value>
        </div>
      </div>

      <!-- Subject -->
      <div class="section-title">Subject</div>
      <div class="field" style="margin-bottom:20px;">
        <value style="font-size:16px;">${sanitize(subject)}</value>
      </div>

      <!-- Message -->
      <div class="section-title">Message</div>
      <div class="message-box">${sanitize(message)}</div>

      <!-- Action -->
      <div class="action-box">
        <p>Click below to reply directly to ${sanitize(name)}.</p>
        <a href="mailto:${sanitize(email)}?subject=Re: ${sanitize(subject)}&body=Hi ${sanitize(name)},%0A%0AThank you for reaching out to Family First Life Network.%0A%0A" class="action-btn">
          Reply to ${sanitize(name)}
        </a>
      </div>
    </div>

    <div class="footer">
      <p>Family First Life Network — brandonaioinsurance@gmail.com</p>
      <p class="timestamp">Received: ${timestamp}</p>
    </div>
  </div>
</body>
</html>
  `.trim();
}

function buildPlainText(data) {
  const { name, email, subject, message } = data;
  return `
NEW CONTACT MESSAGE — Family First Life Network
================================================

FROM
Name: ${name}
Email: ${email}

SUBJECT
${subject}

MESSAGE
${message}

---
Sent via truckeriul.com contact form
  `.trim();
}

export async function POST(request) {
  try {
    let body;
    try {
      body = await request.json();
    } catch {
      return Response.json(
        { success: false, message: 'Invalid request format.' },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = body;

    // Server-side validation
    if (!name?.trim()) {
      return Response.json({ success: false, message: 'Name is required.' }, { status: 400 });
    }
    if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ success: false, message: 'A valid email address is required.' }, { status: 400 });
    }
    if (!subject?.trim()) {
      return Response.json({ success: false, message: 'Subject is required.' }, { status: 400 });
    }
    if (!message?.trim() || message.trim().length < 10) {
      return Response.json({ success: false, message: 'Message must be at least 10 characters.' }, { status: 400 });
    }

    // Honeypot / basic spam protection — reject if message is too long
    if (message.length > 5000) {
      return Response.json({ success: false, message: 'Message is too long.' }, { status: 400 });
    }

    const recipientEmail = process.env.CONTACT_EMAIL || 'brandonaioinsurance@gmail.com';
    const fromAddress = process.env.SMTP_FROM || `Family First Life Network <${process.env.SMTP_USER}>`;

    let transporter;
    try {
      transporter = getTransporter();
    } catch (err) {
      console.error('Transporter creation failed:', err.message);
      return Response.json(
        { success: false, message: 'Email service configuration error. Please contact us directly at brandonaioinsurance@gmail.com' },
        { status: 500 }
      );
    }

    // Send notification to agent
    await transporter.sendMail({
      from: fromAddress,
      to: recipientEmail,
      replyTo: email,
      subject: `Contact Form: ${subject} — from ${name}`,
      text: buildPlainText(body),
      html: buildEmailHtml(body),
    });

    // Send confirmation to sender
    try {
      await transporter.sendMail({
        from: fromAddress,
        to: email,
        subject: 'We got your message — Family First Life Network',
        text: `Hi ${name},\n\nThank you for reaching out to Family First Life Network! We've received your message and will get back to you within one business day.\n\nIf you have an urgent question, please email us directly at brandonaioinsurance@gmail.com.\n\nBest,\nFamily First Life Network`,
        html: `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /><style>
body{font-family:Arial,sans-serif;background:#f4f6f9;padding:20px;}
.container{max-width:580px;margin:0 auto;background:#fff;border-radius:14px;overflow:hidden;}
.header{background:#1e3a5f;padding:28px;text-align:center;}
.header h1{color:#d4960c;margin:0;font-size:20px;font-weight:800;}
.body{padding:28px;}
.body p{color:#555;font-size:14px;line-height:1.7;margin:0 0 14px;}
.cta{display:inline-block;background:#d4960c;color:#fff;font-size:14px;font-weight:700;padding:10px 24px;border-radius:8px;text-decoration:none;}
.footer{background:#f8fafc;padding:16px 28px;text-align:center;border-top:1px solid #eee;}
.footer p{font-size:12px;color:#9ca3af;margin:0;}
</style></head>
<body>
<div class="container">
<div class="header"><h1>Family First Life Network</h1></div>
<div class="body">
<p>Hi ${sanitize(name)},</p>
<p>Thank you for reaching out! We've received your message and will get back to you within <strong>one business day</strong>.</p>
<p>If you haven't already, you can start a quote request while you wait:</p>
<a href="https://truckeriul.com/quote" class="cta">Get a Free Quote</a>
<p style="margin-top:20px;">Best,<br/><strong>Family First Life Network</strong><br/><a href="mailto:brandonaioinsurance@gmail.com" style="color:#d4960c;">brandonaioinsurance@gmail.com</a></p>
</div>
<div class="footer"><p>You're receiving this because you contacted us at truckeriul.com</p></div>
</div>
</body>
</html>
        `,
      });
    } catch (confirmErr) {
      console.warn('Confirmation email failed:', confirmErr.message);
    }

    return Response.json({ success: true, message: 'Message sent successfully.' });
  } catch (err) {
    console.error('Contact API error:', err);
    return Response.json(
      { success: false, message: 'Failed to send your message. Please try again or email us directly at brandonaioinsurance@gmail.com' },
      { status: 500 }
    );
  }
}
