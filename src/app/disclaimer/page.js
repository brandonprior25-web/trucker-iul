import Link from 'next/link';

export const metadata = {
  title: 'Disclaimer | Family First Life Network',
  description:
    'Insurance disclaimer for Family First Life Network. Read important disclosures about our services, licensing, and the nature of the information provided on this website.',
};

export default function DisclaimerPage() {
  const effectiveDate = 'January 1, 2025';

  const sectionHeadStyle = {
    fontFamily: '"Cormorant Garamond", Georgia, serif',
    fontWeight: 600,
    fontSize: '1.6rem',
    color: '#0f0e0c',
    margin: '0 0 1rem 0',
    lineHeight: 1.2,
  };

  const bodyStyle = {
    fontFamily: 'Epilogue, sans-serif',
    fontWeight: 300,
    fontSize: '1rem',
    color: '#6a6560',
    lineHeight: 1.8,
    margin: '0 0 1rem 0',
  };

  return (
    <>
      {/* ─── HERO ─── */}
      <section
        style={{
          backgroundColor: '#0f0e0c',
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
            Disclaimer
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
            Last Updated: {effectiveDate}
          </p>
        </div>
      </section>

      {/* ─── CONTENT ─── */}
      <section style={{ backgroundColor: '#f7f5f2', padding: 'clamp(5rem, 8vw, 7rem) 2rem' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          {/* Notice box */}
          <div
            style={{
              backgroundColor: '#f0ede8',
              borderLeft: '2px solid #0f0e0c',
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
                color: '#0f0e0c',
                marginBottom: '0.5rem',
              }}
            >
              Important Notice
            </p>
            <p
              style={{
                fontFamily: 'Epilogue, sans-serif',
                fontWeight: 300,
                fontSize: '0.92rem',
                color: '#6a6560',
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              Please read this disclaimer carefully before using this website or relying on any
              information presented on it. By accessing this website, you acknowledge and agree
              to the terms of this disclaimer.
            </p>
          </div>

          {/* Sections */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>

            {/* 1 */}
            <div style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '2.5rem' }}>
              <h2 style={sectionHeadStyle}>1. General Information Only</h2>
              <p style={bodyStyle}>
                The information provided on this website — familyfirstlifenetwork.com — is for
                general informational and educational purposes only. It is not intended to
                constitute, and should not be construed as, professional financial advice, tax
                advice, legal advice, investment advice, or any other type of professional advice.
              </p>
              <p style={bodyStyle}>
                While we strive to provide accurate and current information, insurance products,
                rates, and regulations change frequently. The content on this website may not
                reflect the most current developments in insurance law, carrier offerings, or
                state regulations. Always verify information directly with a licensed insurance
                professional and with the relevant carrier before making any insurance decision.
              </p>
            </div>

            {/* 2 */}
            <div style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '2.5rem' }}>
              <h2 style={sectionHeadStyle}>2. Not Financial or Investment Advice</h2>
              <p style={bodyStyle}>
                Nothing on this website constitutes financial or investment advice. Life insurance
                products, including Indexed Universal Life (IUL) policies, are insurance products
                — they are not securities, investment contracts, or investment products regulated
                by the Securities and Exchange Commission (SEC) or FINRA.
              </p>
              <p style={bodyStyle}>
                Any references to potential cash value growth, index-linked interest crediting, or
                tax-advantaged benefits are general descriptions of how IUL products typically work.
                Actual results will vary based on the specific policy, carrier, premium payments,
                index performance, policy charges, and other factors. Past index performance does
                not guarantee future results.
              </p>
              <p style={bodyStyle}>
                We strongly recommend consulting with a qualified financial planner, tax professional,
                or attorney before making any significant financial decisions, including purchasing
                life insurance.
              </p>
            </div>

            {/* 3 */}
            <div style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '2.5rem' }}>
              <h2 style={sectionHeadStyle}>3. Licensing and State Authorization</h2>
              <p style={bodyStyle}>
                Family First Life Network operates as an independent insurance agency. Our agents
                are licensed to sell life insurance in certain states. Licensure requirements vary
                by state, and not all agents or products may be available in all states.
              </p>
              <p style={bodyStyle}>
                The mention of specific states on this website does not imply that we are currently
                licensed to sell insurance in those states. Before engaging our services, please
                confirm that we are properly licensed to serve clients in your state of residence.
                You may verify an insurance agent&#39;s license through your state&#39;s
                Department of Insurance.
              </p>
              <p style={bodyStyle}>
                If we are not yet licensed in your state at the time of your inquiry, we will
                inform you and, where possible, refer you to a licensed professional in your area.
              </p>
            </div>

            {/* 4 */}
            <div style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '2.5rem' }}>
              <h2 style={sectionHeadStyle}>4. Product Availability and Features</h2>
              <p style={bodyStyle}>
                Insurance products referenced on this website — including those offered by Americo,
                Transamerica, American Amicable, Mutual of Omaha, Aetna, Core Bridge, and Ethos —
                are subject to state-specific approval and availability. Not all products or
                features are available in all states. Product features, riders, benefit amounts,
                and underwriting criteria may vary significantly by state and carrier.
              </p>
              <p style={bodyStyle}>
                References to specific product features such as &quot;living benefits,&quot; &quot;zero loss
                floor,&quot; &quot;tax-free loans,&quot; or &quot;same-day coverage&quot; are general descriptions that
                may not apply to all policies or carriers. You should review the complete policy
                contract, including all riders, exclusions, limitations, and fees, before
                purchasing any insurance product.
              </p>
            </div>

            {/* 5 */}
            <div style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '2.5rem' }}>
              <h2 style={sectionHeadStyle}>5. No Guarantee of Premium Rates or Approval</h2>
              <p style={bodyStyle}>
                Any premium amounts, coverage examples, or cost estimates referenced on this
                website are illustrative only and are not binding quotes. Actual premium rates are
                determined by the carrier based on your individual underwriting information,
                including age, health status, occupation, state of residence, and the specific
                policy selected.
              </p>
              <p style={bodyStyle}>
                Submitting a quote request on this website does not guarantee approval for
                coverage or any specific premium rate. All applications are subject to carrier
                underwriting review and approval. We make no representation that any applicant
                will be approved for coverage.
              </p>
            </div>

            {/* 6 */}
            <div style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '2.5rem' }}>
              <h2 style={sectionHeadStyle}>6. Important Disclosures Regarding Indexed Universal Life (IUL)</h2>
              <p style={bodyStyle}>
                Indexed Universal Life insurance policies contain specific features, risks, and
                costs that you should understand before purchasing:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', backgroundColor: 'rgba(0,0,0,0.08)', marginTop: '1rem' }}>
                {[
                  {
                    head: 'IUL is life insurance, not an investment.',
                    body: 'The cash value component of an IUL is a feature of an insurance contract, not a securities investment. IUL policies are regulated as insurance products, not as securities.',
                  },
                  {
                    head: 'Caps and participation rates limit upside.',
                    body: 'While IUL policies credit interest based on index performance, they typically include caps (maximum interest credits) and/or participation rates that limit how much of the index gains you receive.',
                  },
                  {
                    head: 'Policy charges apply.',
                    body: 'IUL policies have internal costs including cost of insurance charges, administrative fees, and surrender charges. These charges are deducted from your policy and can affect cash value growth.',
                  },
                  {
                    head: 'Surrender charges may apply.',
                    body: 'Withdrawing cash value or surrendering the policy in the early years may result in surrender charges and may result in receiving less than you paid in premiums.',
                  },
                  {
                    head: 'Policy loans have costs and risks.',
                    body: 'Loans against policy cash value may accrue interest and, if not repaid, will reduce the death benefit. If the policy lapses while a loan is outstanding, the loan may become a taxable distribution.',
                  },
                  {
                    head: 'Tax treatment depends on individual circumstances.',
                    body: 'The tax treatment of life insurance, including tax-deferred growth and tax-free death benefits, is subject to applicable federal and state tax law and may change. Consult a qualified tax professional for advice specific to your situation.',
                  },
                  {
                    head: 'Coverage can lapse.',
                    body: 'If premiums are not sufficient to cover policy costs and charges, the policy may lapse — even if premiums have been paid consistently. Regular policy reviews are important.',
                  },
                ].map((item) => (
                  <div
                    key={item.head}
                    style={{
                      backgroundColor: '#ffffff',
                      padding: '1.25rem 1.5rem',
                    }}
                  >
                    <p
                      style={{
                        fontFamily: 'Epilogue, sans-serif',
                        fontWeight: 700,
                        fontSize: '0.82rem',
                        color: '#0f0e0c',
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
                        color: '#6a6560',
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

            {/* 7 */}
            <div style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '2.5rem' }}>
              <h2 style={sectionHeadStyle}>7. No Professional Relationship Created</h2>
              <p style={bodyStyle}>
                Visiting this website, submitting a form, or exchanging emails with us does not
                create a formal insurance agent-client relationship, financial advisor relationship,
                attorney-client relationship, or any other professional relationship. A formal
                relationship is established only when you have signed applicable disclosure forms
                and we have confirmed in writing that we are acting as your agent for a specific
                policy application.
              </p>
            </div>

            {/* 8 */}
            <div style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '2.5rem' }}>
              <h2 style={sectionHeadStyle}>8. Third-Party Information and Links</h2>
              <p style={bodyStyle}>
                This website may reference or link to third-party websites, organizations, or
                publications for informational purposes. Family First Life Network is not
                responsible for the accuracy, completeness, or reliability of third-party
                information and does not endorse any products, services, or organizations
                referenced.
              </p>
            </div>

            {/* 9 */}
            <div style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '2.5rem' }}>
              <h2 style={sectionHeadStyle}>9. Testimonials and Client Stories</h2>
              <p style={bodyStyle}>
                Any testimonials, client stories, or case studies presented on this website
                represent individual experiences. They are not guarantees of future results or
                outcomes. Individual results will vary based on personal circumstances, policy
                terms, carrier, and other factors. Testimonials may be composite representations
                based on real client experiences.
              </p>
            </div>

            {/* 10 */}
            <div style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '2.5rem' }}>
              <h2 style={sectionHeadStyle}>10. Limitation of Liability</h2>
              <p style={bodyStyle}>
                To the fullest extent permitted by applicable law, Family First Life Network, its
                agents, employees, and affiliates shall not be liable for any direct, indirect,
                incidental, special, consequential, or punitive damages arising from your use of
                this website or reliance on any information contained herein. This includes,
                without limitation, any decisions to purchase or not purchase insurance based on
                information found on this website.
              </p>
            </div>

            {/* 11 */}
            <div style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '2.5rem' }}>
              <h2 style={sectionHeadStyle}>11. Questions</h2>
              <p style={bodyStyle}>
                If you have questions about this disclaimer or our services, please contact us:
              </p>
              <div
                style={{
                  backgroundColor: '#0f0e0c',
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
            <Link href="/privacy-policy" className="btn-secondary">
              View Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
