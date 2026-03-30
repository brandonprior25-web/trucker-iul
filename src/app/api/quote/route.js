import nodemailer from 'nodemailer';

// Validate environment variables at startup
function getTransporter() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    throw new Error('Missing required SMTP environment variables.');
  }

  const port = parseInt(SMTP_PORT || '587', 10);
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    requireTLS: port === 587,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
}

function sanitize(value) {
  if (typeof value !== 'string') return '';
  return value.replace(/</g, '&lt;').replace(/>/g, '&gt;').trim();
}

function buildEmailHtml(data) {
  const { firstName, lastName, email, phone, ageRange, state, coverageInterest, preferredContactTime, notes } = data;
  const fullName = `${sanitize(firstName)} ${sanitize(lastName)}`;
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
  <title>New Quote Request</title>
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
    .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
    .notes-box { background: #f4f6f9; border-radius: 10px; padding: 14px; font-size: 14px; color: #555; line-height: 1.6; white-space: pre-wrap; border: 1px solid #e8ecf0; }
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
      <h1>New Quote Request</h1>
      <p>Family First Life Network</p>
      <span class="badge">Action Required</span>
    </div>

    <div class="body">
      <p style="color:#555; font-size:14px; margin:0 0 24px; line-height:1.6;">
        A new lead has submitted a quote request through the website. Their information is below.
        Please follow up within one business day.
      </p>

      <!-- Contact Info -->
      <div class="section-title">Contact Information</div>
      <div class="grid" style="margin-bottom:20px;">
        <div class="field">
          <label>Full Name</label>
          <value>${fullName}</value>
        </div>
        <div class="field">
          <label>Email Address</label>
          <value><a href="mailto:${sanitize(email)}">${sanitize(email)}</a></value>
        </div>
        <div class="field">
          <label>Phone Number</label>
          <value>${phone ? sanitize(phone) : '<span style="color:#aaa">Not provided</span>'}</value>
        </div>
        <div class="field">
          <label>State</label>
          <value>${sanitize(state)}</value>
        </div>
      </div>

      <!-- Coverage Details -->
      <div class="section-title">Coverage Details</div>
      <div class="grid" style="margin-bottom:20px;">
        <div class="field">
          <label>Age Range</label>
          <value>${sanitize(ageRange)}</value>
        </div>
        <div class="field">
          <label>Coverage Interest</label>
          <value>${sanitize(coverageInterest)}</value>
        </div>
      </div>

      <!-- Contact Preferences -->
      <div class="section-title">Contact Preferences</div>
      <div class="field" style="margin-bottom:20px;">
        <label>Preferred Contact Time</label>
        <value>${sanitize(preferredContactTime)}</value>
      </div>

      <!-- Notes -->
      ${notes && notes.trim() ? `
      <div class="section-title">Additional Notes</div>
      <div class="notes-box" style="margin-bottom:20px;">${sanitize(notes)}</div>
      ` : ''}

      <!-- Action -->
      <div class="action-box">
        <p>Ready to respond? Click below to email this lead directly.</p>
        <a href="mailto:${sanitize(email)}?subject=Your Life Insurance Quote — Family First Life Network&body=Hi ${sanitize(firstName)},%0A%0AThank you for reaching out to Family First Life Network!%0A%0A" class="action-btn">
          Reply to ${sanitize(firstName)}
        </a>
      </div>
    </div>

    <div class="footer">
      <p>Family First Life Network — brandonaioinsurance@gmail.com</p>
      <p class="timestamp">Submitted: ${timestamp}</p>
    </div>
  </div>
</body>
</html>
  `.trim();
}

function buildPlainText(data) {
  const { firstName, lastName, email, phone, ageRange, state, coverageInterest, preferredContactTime, notes } = data;
  return `
NEW QUOTE REQUEST — Family First Life Network
=============================================

CONTACT INFORMATION
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || 'Not provided'}
State: ${state}

COVERAGE DETAILS
Age Range: ${ageRange}
Coverage Interest: ${coverageInterest}

CONTACT PREFERENCES
Preferred Time: ${preferredContactTime}

ADDITIONAL NOTES
${notes || 'None provided'}

---
Submitted via truckeriul.com
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

    const { firstName, lastName, email, phone, ageRange, state, coverageInterest, preferredContactTime, notes, consent } = body;

    // Server-side validation
    if (!firstName?.trim() || !lastName?.trim()) {
      return Response.json({ success: false, message: 'Name is required.' }, { status: 400 });
    }
    if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ success: false, message: 'Valid email is required.' }, { status: 400 });
    }
    if (!ageRange?.trim()) {
      return Response.json({ success: false, message: 'Age range is required.' }, { status: 400 });
    }
    if (!state?.trim()) {
      return Response.json({ success: false, message: 'State is required.' }, { status: 400 });
    }
    if (!coverageInterest?.trim()) {
      return Response.json({ success: false, message: 'Coverage interest is required.' }, { status: 400 });
    }
    if (!preferredContactTime?.trim()) {
      return Response.json({ success: false, message: 'Preferred contact time is required.' }, { status: 400 });
    }
    if (!consent) {
      return Response.json({ success: false, message: 'Consent is required.' }, { status: 400 });
    }

    const recipientEmail = process.env.CONTACT_EMAIL || 'brandonaioinsurance@gmail.com';
    const fromAddress = process.env.SMTP_FROM || `Family First Life Network <${process.env.SMTP_USER}>`;

    let transporter;
    try {
      transporter = getTransporter();
    } catch (err) {
      console.error('Transporter creation failed:', err.message);
      return Response.json(
        { success: false, message: 'Email service configuration error. Please contact us directly.' },
        { status: 500 }
      );
    }

    await transporter.sendMail({
      from: fromAddress,
      to: recipientEmail,
      replyTo: email,
      subject: `New Quote Request — ${firstName} ${lastName} (${state})`,
      text: buildPlainText(body),
      html: buildEmailHtml(body),
    });

    // Send confirmation to user
    try {
      await transporter.sendMail({
        from: fromAddress,
        to: email,
        subject: 'We received your quote request — Family First Life Network',
        text: `Hi ${firstName},\n\nThank you for reaching out to Family First Life Network! We've received your quote request and will be in touch within one business day.\n\nIn the meantime, feel free to learn more about how IUL works at our website.\n\nBest,\nFamily First Life Network\nbrandonaioinsurance@gmail.com`,
        html: `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /><style>body{font-family:Arial,sans-serif;background:#f4f6f9;padding:20px;}
.container{max-width:580px;margin:0 auto;background:#fff;border-radius:14px;overflow:hidden;}
.header{background:#1e3a5f;padding:28px;text-align:center;}
.header h1{color:#d4960c;margin:0;font-size:20px;font-weight:800;}
.body{padding:28px;}
.body p{color:#555;font-size:14px;line-height:1.7;margin:0 0 14px;}
.cta{display:inline-block;background:#d4960c;color:#fff;font-size:14px;font-weight:700;padding:10px 24px;border-radius:8px;text-decoration:none;margin-top:4px;}
.footer{background:#f8fafc;padding:16px 28px;text-align:center;border-top:1px solid #eee;}
.footer p{font-size:12px;color:#9ca3af;margin:0;}</style>
</head>
<body>
<div class="container">
<div class="header"><h1>Family First Life Network</h1></div>
<div class="body">
<p>Hi ${sanitize(firstName)},</p>
<p>Thank you for reaching out! We've received your quote request and will be in touch within <strong>one business day</strong> — often much sooner.</p>
<p>We'll review your information, compare options across our carrier partners, and reach out at your preferred contact time to walk you through what we found.</p>
<p>In the meantime, feel free to learn more about how Indexed Universal Life works:</p>
<a href="https://truckeriul.com/services" class="cta">Learn About IUL</a>
<p style="margin-top:20px;">Talk soon,<br/><strong>Family First Life Network</strong><br/>brandonaioinsurance@gmail.com</p>
</div>
<div class="footer"><p>You're receiving this because you submitted a quote request at truckeriul.com</p></div>
</div>
</body>
</html>
        `,
      });
    } catch (confirmErr) {
      // Confirmation email failure is non-critical — log it but still return success
      console.warn('Confirmation email failed to send:', confirmErr.message);
    }

    return Response.json({ success: true, message: 'Quote request sent successfully.' });
  } catch (err) {
    console.error('Quote API error:', err);
    return Response.json(
      { success: false, message: 'Failed to send your request. Please try again or email us directly.' },
      { status: 500 }
    );
  }
}
