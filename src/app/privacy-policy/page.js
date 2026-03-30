import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | Family First Life Network',
  description:
    'Privacy Policy for Family First Life Network. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  const effectiveDate = 'January 1, 2025';

  const sectionHeadStyle = {
    fontFamily: '"Cormorant Garamond", Georgia, serif',
    fontWeight: 600,
    fontSize: '1.6rem',
    color: '#0d2545',
    margin: '0 0 1rem 0',
    lineHeight: 1.2,
  };

  const bodyStyle = {
    fontFamily: 'Epilogue, sans-serif',
    fontWeight: 300,
    fontSize: '1rem',
    color: '#3a5270',
    lineHeight: 1.8,
    margin: '0 0 1rem 0',
  };

  const subHeadStyle = {
    fontFamily: 'Epilogue, sans-serif',
    fontWeight: 700,
    fontSize: '0.88rem',
    color: '#0d2545',
    margin: '1.25rem 0 0.5rem 0',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
  };

  return (
    <>
      {/* ─── HERO ─── */}
      <section
        style={{
          backgroundColor: '#0d2545',
          paddingTop: 'clamp(7rem, 12vw, 10rem)',
          paddingBottom: 'clamp(4rem, 7vw, 6rem)',
          paddingLeft: '2rem',
          paddingRight: '2rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'repeating-linear-gradient(45deg, rgba(255,255,255,0.02) 0, rgba(255,255,255,0.02) 1px, transparent 0, transparent 50%)',
            backgroundSize: '24px 24px',
            pointerEvents: 'none',
          }}
        />
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
          <p
            style={{
              fontFamily: 'Epilogue, sans-serif',
              fontWeight: 700,
              fontSize: '0.68rem',
              textTransform: 'uppercase',
              letterSpacing: '0.25em',
              color: 'rgba(255,255,255,0.4)',
              marginBottom: '1.25rem',
            }}
          >
            Legal
          </p>
          <h1
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontWeight: 600,
              fontSize: 'clamp(3rem, 5vw, 5rem)',
              color: '#ffffff',
              margin: '0 0 1.25rem 0',
              lineHeight: 1.08,
            }}
          >
            Privacy Policy
          </h1>
          <p
            style={{
              fontFamily: 'Epilogue, sans-serif',
              fontWeight: 300,
              fontSize: '0.88rem',
              color: 'rgba(255,255,255,0.4)',
              margin: 0,
            }}
          >
            Effective Date: {effectiveDate}
          </p>
        </div>
      </section>

      {/* ─── CONTENT ─── */}
      <section style={{ backgroundColor: '#f7f5f2', padding: 'clamp(5rem, 8vw, 7rem) 2rem' }}>
        <div
          style={{
            maxWidth: '780px',
            margin: '0 auto',
          }}
        >
          {/* Summary box */}
          <div
            style={{
              backgroundColor: '#f0ede8',
              borderLeft: '2px solid #0d2545',
              padding: '1.5rem 2rem',
              marginBottom: '4rem',
            }}
          >
            <p
              style={{
                fontFamily: 'Epilogue, sans-serif',
                fontWeight: 700,
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.18em',
                color: '#0d2545',
                marginBottom: '0.5rem',
              }}
            >
              Summary
            </p>
            <p
              style={{
                fontFamily: 'Epilogue, sans-serif',
                fontWeight: 300,
                fontSize: '0.92rem',
                color: '#3a5270',
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              We only collect what we need to provide you with insurance information and quotes. We do not
              sell your personal information. You can contact us at any time to request deletion of your data.
            </p>
          </div>

          {/* Sections */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>

            {/* 1 */}
            <div style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '2.5rem' }}>
              <h2 style={sectionHeadStyle}>1. Who We Are</h2>
              <p style={bodyStyle}>
                Family First Life Network is an independent life insurance agency operating as part of the
                Family First Life network. We are licensed insurance agents operating within the United States.
                Our primary place of business is online, serving clients in all 50 states.
              </p>
              <p style={bodyStyle}>
                If you have questions about this Privacy Policy or our data practices, please contact us at{' '}
                <a
                  href="mailto:brandonaioinsurance@gmail.com"
                  style={{ color: '#0d2545', fontWeight: 700, textDecoration: 'underline' }}
                >
                  brandonaioinsurance@gmail.com
                </a>
                .
              </p>
            </div>

            {/* 2 */}
            <div style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '2.5rem' }}>
              <h2 style={sectionHeadStyle}>2. Information We Collect</h2>
              <p style={bodyStyle}>
                We collect information you voluntarily provide to us through our website forms, email
                correspondence, and other communications. This includes:
              </p>

              <p style={subHeadStyle}>a. Information You Provide Directly</p>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '0 0 1.5rem 0',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.4rem',
                }}
              >
                {[
                  'Full name',
                  'Email address',
                  'Phone number (when provided)',
                  'Age range',
                  'State of residence',
                  'Coverage interests and preferences',
                  'Preferred contact times',
                  'Any additional notes or health information you voluntarily share',
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      fontFamily: 'Epilogue, sans-serif',
                      fontWeight: 300,
                      fontSize: '0.95rem',
                      color: '#3a5270',
                      lineHeight: 1.7,
                      paddingLeft: '1.25rem',
                      position: 'relative',
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        left: 0,
                        color: '#6a7f96',
                        fontFamily: '"Cormorant Garamond", Georgia, serif',
                      }}
                    >
                      —
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <p style={subHeadStyle}>b. Automatically Collected Information</p>
              <p style={bodyStyle}>
                When you visit our website, we may automatically collect certain technical information,
                including:
              </p>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '0 0 1rem 0',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.4rem',
                }}
              >
                {[
                  'IP address',
                  'Browser type and version',
                  'Device type (desktop, mobile, tablet)',
                  'Pages visited and time spent on pages',
                  'Referring URL (the website that sent you to ours)',
                  'Date and time of your visit',
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      fontFamily: 'Epilogue, sans-serif',
                      fontWeight: 300,
                      fontSize: '0.95rem',
                      color: '#3a5270',
                      lineHeight: 1.7,
                      paddingLeft: '1.25rem',
                      position: 'relative',
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        left: 0,
                        color: '#6a7f96',
                        fontFamily: '"Cormorant Garamond", Georgia, serif',
                      }}
                    >
                      —
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p style={bodyStyle}>
                This information is collected through standard server logs and may be collected through
                cookies or similar technologies (see Section 7 — Cookies).
              </p>
            </div>

            {/* 3 */}
            <div style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '2.5rem' }}>
              <h2 style={sectionHeadStyle}>3. How We Use Your Information</h2>
              <p style={bodyStyle}>
                We use the information we collect for the following purposes:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                  {
                    head: 'To provide insurance quotes and information',
                    body:
                      'We use your information to research available life insurance products that may be appropriate for your situation and to communicate those options to you.',
                  },
                  {
                    head: 'To respond to your inquiries',
                    body:
                      'When you contact us through our website, we use your information to reply to your questions and requests.',
                  },
                  {
                    head: 'To communicate with you',
                    body:
                      'With your consent, we may follow up with you via email or phone regarding your quote request or to provide relevant information about life insurance.',
                  },
                  {
                    head: 'To improve our website',
                    body:
                      'We use aggregate, anonymized data about how visitors use our website to improve its design, content, and usability.',
                  },
                  {
                    head: 'To comply with legal obligations',
                    body:
                      'We may use and retain your information to the extent required by applicable law, regulation, or legal process.',
                  },
                ].map((item) => (
                  <div
                    key={item.head}
                    style={{
                      backgroundColor: '#ffffff',
                      padding: '1.25rem 1.5rem',
                      borderLeft: '1px solid rgba(0,0,0,0.1)',
                    }}
                  >
                    <p
                      style={{
                        fontFamily: 'Epilogue, sans-serif',
                        fontWeight: 700,
                        fontSize: '0.82rem',
                        color: '#0d2545',
                        margin: '0 0 0.35rem 0',
                      }}
                    >
                      {item.head}
                    </p>
                    <p
                      style={{
                        fontFamily: 'Epilogue, sans-serif',
                        fontWeight: 300,
                        fontSize: '0.9rem',
                        color: '#3a5270',
                        lineHeight: 1.8,
                        margin: 0,
                      }}
                    >
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 4 */}
            <div style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '2.5rem' }}>
              <h2 style={sectionHeadStyle}>4. How We Share Your Information</h2>
              <p
                style={{
                  fontFamily: 'Epilogue, sans-serif',
                  fontWeight: 700,
                  fontSize: '1rem',
                  color: '#0d2545',
                  lineHeight: 1.8,
                  margin: '0 0 1rem 0',
                }}
              >
                We do not sell your personal information.
              </p>
              <p style={bodyStyle}>
                We do not share your personal information with third parties for their marketing purposes.
                We may share your information in the following limited circumstances:
              </p>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.4rem',
                }}
              >
                {[
                  {
                    head: 'Insurance carriers',
                    body:
                      'In the course of obtaining a quote or applying for coverage on your behalf, we may share relevant information with our carrier partners (Americo, Transamerica, American Amicable, Mutual of Omaha, Aetna, Core Bridge, and Ethos). This is done solely to obtain quotes or process applications at your request.',
                  },
                  {
                    head: 'Service providers',
                    body:
                      'We may use third-party service providers (such as email delivery services) who process your information on our behalf. These providers are contractually obligated to keep your information confidential.',
                  },
                  {
                    head: 'Legal requirements',
                    body:
                      'We may disclose your information if required to do so by law or in response to a valid legal request (such as a subpoena or court order).',
                  },
                  {
                    head: 'Business transfers',
                    body:
                      'If our business is acquired or merged, your information may be transferred as part of that transaction. We will notify you of such a change by posting a notice on our website.',
                  },
                ].map((item) => (
                  <li
                    key={item.head}
                    style={{
                      fontFamily: 'Epilogue, sans-serif',
                      fontWeight: 300,
                      fontSize: '0.95rem',
                      color: '#3a5270',
                      lineHeight: 1.7,
                      paddingLeft: '1.25rem',
                      position: 'relative',
                      marginBottom: '0.75rem',
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        left: 0,
                        color: '#6a7f96',
                        fontFamily: '"Cormorant Garamond", Georgia, serif',
                      }}
                    >
                      —
                    </span>
                    <strong style={{ color: '#0d2545', fontWeight: 700 }}>{item.head}:</strong>{' '}
                    {item.body}
                  </li>
                ))}
              </ul>
            </div>

            {/* 5 */}
            <div style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '2.5rem' }}>
              <h2 style={sectionHeadStyle}>5. Data Retention</h2>
              <p style={bodyStyle}>
                We retain your personal information for as long as necessary to fulfill the purposes
                described in this Privacy Policy, unless a longer retention period is required or
                permitted by law. Typically, we retain contact and quote request information for up
                to 3 years following last contact. You may request deletion of your information at
                any time by emailing us at{' '}
                <a
                  href="mailto:brandonaioinsurance@gmail.com"
                  style={{ color: '#0d2545', fontWeight: 700, textDecoration: 'underline' }}
                >
                  brandonaioinsurance@gmail.com
                </a>
                .
              </p>
            </div>

            {/* 6 */}
            <div style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '2.5rem' }}>
              <h2 style={sectionHeadStyle}>6. Data Security</h2>
              <p style={bodyStyle}>
                We take reasonable technical and organizational measures to protect your personal
                information against unauthorized access, disclosure, alteration, or destruction.
                Our website uses SSL/TLS encryption for data transmission. Form submissions are
                transmitted over encrypted connections.
              </p>
              <p style={bodyStyle}>
                However, no method of transmission over the internet or electronic storage is 100%
                secure. While we strive to protect your information, we cannot guarantee its
                absolute security.
              </p>
            </div>

            {/* 7 */}
            <div style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '2.5rem' }}>
              <h2 style={sectionHeadStyle}>7. Cookies and Tracking Technologies</h2>
              <p style={bodyStyle}>
                Our website may use cookies — small text files stored on your device — and similar
                tracking technologies. Cookies help us understand how visitors use our site and
                improve your experience.
              </p>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '0 0 1rem 0',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.4rem',
                }}
              >
                {[
                  {
                    head: 'Essential cookies',
                    body: 'Required for the website to function properly (e.g., maintaining form state).',
                  },
                  {
                    head: 'Analytics cookies',
                    body:
                      'Help us understand how visitors interact with our website (e.g., Google Analytics, if used).',
                  },
                ].map((item) => (
                  <li
                    key={item.head}
                    style={{
                      fontFamily: 'Epilogue, sans-serif',
                      fontWeight: 300,
                      fontSize: '0.95rem',
                      color: '#3a5270',
                      lineHeight: 1.7,
                      paddingLeft: '1.25rem',
                      position: 'relative',
                      marginBottom: '0.5rem',
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        left: 0,
                        color: '#6a7f96',
                        fontFamily: '"Cormorant Garamond", Georgia, serif',
                      }}
                    >
                      —
                    </span>
                    <strong style={{ color: '#0d2545', fontWeight: 700 }}>{item.head}:</strong>{' '}
                    {item.body}
                  </li>
                ))}
              </ul>
              <p style={bodyStyle}>
                You can control cookies through your browser settings. Note that disabling cookies
                may affect the functionality of certain parts of our website.
              </p>
            </div>

            {/* 8 */}
            <div style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '2.5rem' }}>
              <h2 style={sectionHeadStyle}>8. Your Rights and Choices</h2>
              <p style={bodyStyle}>
                Depending on your location, you may have the following rights with respect to your
                personal information:
              </p>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '0 0 1rem 0',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                }}
              >
                {[
                  { head: 'Access', body: 'You have the right to request a copy of the personal information we hold about you.' },
                  { head: 'Correction', body: 'You have the right to request that we correct inaccurate information.' },
                  { head: 'Deletion', body: 'You have the right to request deletion of your personal information, subject to certain exceptions.' },
                  { head: 'Opt-out of communications', body: 'You can opt out of receiving marketing emails from us by clicking "unsubscribe" in any email we send, or by emailing us directly.' },
                  { head: 'Data portability', body: 'You may request a copy of your information in a portable format.' },
                ].map((item) => (
                  <li
                    key={item.head}
                    style={{
                      fontFamily: 'Epilogue, sans-serif',
                      fontWeight: 300,
                      fontSize: '0.95rem',
                      color: '#3a5270',
                      lineHeight: 1.7,
                      paddingLeft: '1.25rem',
                      position: 'relative',
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        left: 0,
                        color: '#6a7f96',
                        fontFamily: '"Cormorant Garamond", Georgia, serif',
                      }}
                    >
                      —
                    </span>
                    <strong style={{ color: '#0d2545', fontWeight: 700 }}>{item.head}:</strong>{' '}
                    {item.body}
                  </li>
                ))}
              </ul>
              <p style={bodyStyle}>
                To exercise any of these rights, please contact us at{' '}
                <a
                  href="mailto:brandonaioinsurance@gmail.com"
                  style={{ color: '#0d2545', fontWeight: 700, textDecoration: 'underline' }}
                >
                  brandonaioinsurance@gmail.com
                </a>
                . We will respond to your request within 30 days.
              </p>
            </div>

            {/* 9 */}
            <div style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '2.5rem' }}>
              <h2 style={sectionHeadStyle}>9. California Residents — CCPA</h2>
              <p style={bodyStyle}>
                If you are a California resident, the California Consumer Privacy Act (CCPA) provides
                you with additional rights. Under the CCPA, you have the right to:
              </p>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '0 0 1rem 0',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.4rem',
                }}
              >
                {[
                  'Know what personal information we collect, use, disclose, and sell (we do not sell personal information).',
                  'Request deletion of your personal information.',
                  'Non-discrimination for exercising your CCPA rights.',
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      fontFamily: 'Epilogue, sans-serif',
                      fontWeight: 300,
                      fontSize: '0.95rem',
                      color: '#3a5270',
                      lineHeight: 1.7,
                      paddingLeft: '1.25rem',
                      position: 'relative',
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        left: 0,
                        color: '#6a7f96',
                        fontFamily: '"Cormorant Garamond", Georgia, serif',
                      }}
                    >
                      —
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p style={bodyStyle}>
                To submit a CCPA request, email us at{' '}
                <a
                  href="mailto:brandonaioinsurance@gmail.com"
                  style={{ color: '#0d2545', fontWeight: 700, textDecoration: 'underline' }}
                >
                  brandonaioinsurance@gmail.com
                </a>{' '}
                with the subject line &quot;CCPA Request.&quot;
              </p>
            </div>

            {/* 10 */}
            <div style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '2.5rem' }}>
              <h2 style={sectionHeadStyle}>10. Children&#39;s Privacy</h2>
              <p style={bodyStyle}>
                Our website is not directed to children under the age of 18, and we do not knowingly
                collect personal information from children under 18. If you believe we have
                inadvertently collected information from a child under 18, please contact us
                immediately so we can delete it.
              </p>
            </div>

            {/* 11 */}
            <div style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '2.5rem' }}>
              <h2 style={sectionHeadStyle}>11. Third-Party Links</h2>
              <p style={bodyStyle}>
                Our website may contain links to third-party websites. We are not responsible for
                the privacy practices of those websites and encourage you to review their privacy
                policies. This Privacy Policy applies only to our website and services.
              </p>
            </div>

            {/* 12 */}
            <div style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '2.5rem' }}>
              <h2 style={sectionHeadStyle}>12. Changes to This Policy</h2>
              <p style={bodyStyle}>
                We may update this Privacy Policy from time to time to reflect changes in our
                practices or for legal, operational, or regulatory reasons. When we make material
                changes, we will update the effective date at the top of this page. We encourage
                you to review this Privacy Policy periodically.
              </p>
            </div>

            {/* 13 */}
            <div style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '2.5rem' }}>
              <h2 style={sectionHeadStyle}>13. Contact Us</h2>
              <p style={bodyStyle}>
                If you have questions, concerns, or requests related to this Privacy Policy or our
                data practices, please contact us:
              </p>
              <div
                style={{
                  backgroundColor: '#0d2545',
                  padding: '2rem',
                  marginTop: '1.25rem',
                }}
              >
                <p
                  style={{
                    fontFamily: '"Cormorant Garamond", Georgia, serif',
                    fontWeight: 600,
                    fontSize: '1.25rem',
                    color: '#ffffff',
                    margin: '0 0 0.5rem 0',
                  }}
                >
                  Family First Life Network
                </p>
                <a
                  href="mailto:brandonaioinsurance@gmail.com"
                  style={{
                    fontFamily: 'Epilogue, sans-serif',
                    fontWeight: 300,
                    fontSize: '0.88rem',
                    color: 'rgba(255,255,255,0.65)',
                    textDecoration: 'none',
                  }}
                >
                  brandonaioinsurance@gmail.com
                </a>
              </div>
            </div>

          </div>

          {/* Bottom nav */}
          <div
            style={{
              marginTop: '4rem',
              paddingTop: '2rem',
              borderTop: '1px solid rgba(0,0,0,0.1)',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem',
            }}
          >
            <Link href="/" className="btn-secondary">
              Back to Home
            </Link>
            <Link href="/disclaimer" className="btn-secondary">
              View Disclaimer
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
