'use client';

import Link from 'next/link';
import { useState } from 'react';

const carriers = [
  {
    name: 'Americo',
    description: 'Flexible IUL with strong living benefits',
    rating: 'A',
  },
  {
    name: 'Transamerica',
    description: 'Established protection with index growth options',
    rating: 'A',
  },
  {
    name: 'American Amicable',
    description: 'Simplified underwriting, fast approvals',
    rating: 'A-',
  },
  {
    name: 'Mutual of Omaha',
    description: 'Industry leader with guaranteed issue options',
    rating: 'A+',
  },
  {
    name: 'Aetna',
    description: 'Trusted nationwide coverage with competitive premiums',
    rating: 'A',
  },
  {
    name: 'Core Bridge',
    description: 'Innovative IUL design with flexible premiums',
    rating: 'A-',
  },
  {
    name: 'Ethos',
    description: 'Tech-forward, no-exam life insurance solutions',
    rating: 'A',
  },
];

const iuLBenefits = [
  {
    title: 'Death Benefit',
    description:
      'Permanent, tax-free payout to your beneficiaries. Doesn\'t expire, doesn\'t disappear when you change jobs.',
  },
  {
    title: 'Cash Value Growth',
    description:
      'Every premium builds equity inside the policy. It\'s yours to keep — and it compounds year after year.',
  },
  {
    title: 'Market Upside, Zero Downside',
    description:
      'Interest credits based on index performance with a guaranteed 0% floor. Good years grow. Bad years hold.',
  },
  {
    title: 'Tax-Free Retirement Income',
    description:
      'Access accumulated cash value through policy loans — no income tax owed. A powerful supplement to any retirement plan.',
  },
  {
    title: 'Living Benefits',
    description:
      'Critical, chronic, or terminal illness riders let you access your death benefit while still alive to cover major expenses.',
  },
  {
    title: 'Flexible Premiums',
    description:
      'Pay more in good months to accelerate growth. Pay less when freight is slow. Your policy flexes with your life.',
  },
  {
    title: 'Policy Loans',
    description:
      'Borrow against your cash value with no credit check, no required repayment schedule. Your policy, your terms.',
  },
  {
    title: 'Portability',
    description:
      'This policy belongs to you — not your employer. Switch companies, go owner-operator, or retire. Coverage stays with you.',
  },
];

const whoItIsFor = [
  {
    title: 'Truck Drivers with Families',
    body: 'Permanent protection that term insurance can\'t provide, plus a cash value safety net between loads.',
  },
  {
    title: 'Owner-Operators Building Equity',
    body: 'An IUL\'s cash value is another asset you own — accessible in an emergency, growing tax-deferred, passing to your family tax-free.',
  },
  {
    title: 'Workers Without Employer Retirement Plans',
    body: 'No pension. No 401(k) match. An IUL can serve as your primary retirement vehicle — tax-free income in your 60s and 70s.',
  },
  {
    title: 'Families Wanting Living Benefits',
    body: 'A heart attack, stroke, or critical illness can devastate a family financially. Living benefit riders let you access your death benefit while still alive.',
  },
];

const faqs = [
  {
    q: 'Is IUL insurance right for everyone?',
    a: 'Not necessarily. IUL is best for people who want permanent coverage, a long-term time horizon (10+ years), and the cash value growth and flexibility that term insurance doesn\'t offer. During a consultation, we\'ll be upfront if a different product is a better fit.',
  },
  {
    q: 'How much does IUL cost?',
    a: 'Premiums vary based on your age, health, coverage amount, and the carrier. Generally, IUL premiums are higher than term insurance but lower than traditional whole life. The key difference is that part of that premium builds cash value that you own.',
  },
  {
    q: 'Can I get approved if I drive a truck?',
    a: 'Yes. We work specifically with carriers that offer favorable underwriting for CDL drivers, owner-operators, and OTR professionals. Your occupation may be noted but it does not automatically disqualify you or significantly increase your rate.',
  },
  {
    q: 'What happens to my policy if I stop paying premiums?',
    a: 'One of the advantages of IUL is flexibility. If you face a difficult financial period, the accumulated cash value can be used to keep the policy in force — essentially paying premiums from your own policy, subject to sufficient cash value.',
  },
  {
    q: 'How is IUL different from investing in index funds?',
    a: 'Index funds offer direct market investment — money can grow significantly, but it can also lose value. IUL is insurance with a cash value component linked to index performance with a guaranteed floor. It\'s designed to complement a 401(k), not replace it.',
  },
  {
    q: 'How quickly can I get coverage?',
    a: 'Some policies can be issued the same day you apply, particularly with carriers like Ethos that specialize in fast approval. Others may take 1-2 weeks. We\'ll be transparent about expected timelines for each option we present.',
  },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid rgba(30,58,95,0.1)' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1.5rem 0',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          gap: '1rem',
        }}
      >
        <span
          style={{
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontWeight: 600,
            fontSize: '1.25rem',
            color: '#0d2545',
          }}
        >
          {q}
        </span>
        <span
          style={{
            flexShrink: 0,
            width: '28px',
            height: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid rgba(30,58,95,0.2)',
            color: '#c8960c',
            fontSize: '1rem',
            transition: 'transform 0.25s ease, color 0.25s ease',
            transform: open ? 'rotate(180deg)' : 'none',
          }}
        >
          {/* Chevron down SVG */}
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path d="M1 1.5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
      <div
        style={{
          overflow: 'hidden',
          maxHeight: open ? '400px' : '0',
          transition: 'max-height 0.35s ease',
        }}
      >
        <p
          style={{
            fontFamily: 'Epilogue, sans-serif',
            fontWeight: 300,
            fontSize: '0.95rem',
            color: '#3a5270',
            lineHeight: 1.8,
            margin: '0 0 1.5rem 0',
            paddingRight: '2rem',
          }}
        >
          {a}
        </p>
      </div>
    </div>
  );
}

export default function ServicesPage() {
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
          <p className="section-label" style={{ color: 'rgba(255,255,255,0.4)', marginBottom: '1.25rem' }}>
            Indexed Universal Life Insurance
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
            More Than Life Insurance.
            <br />
            A Financial Strategy.
          </h1>
          <p
            style={{
              fontFamily: 'Epilogue, sans-serif',
              fontWeight: 300,
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.65)',
              lineHeight: 1.8,
              margin: 0,
              maxWidth: '540px',
            }}
          >
            IUL is the only insurance product that protects your family, grows your wealth
            tax-free, and gives you access to living benefits — all in one policy.
          </p>
        </div>
      </section>

      {/* ─── WHAT IS IUL ─── */}
      <section style={{ backgroundColor: '#ffffff', padding: 'clamp(5rem, 8vw, 7rem) 2rem' }}>
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '5rem',
            alignItems: 'start',
          }}
          className="services-two-col"
        >
          <div className="reveal">
            <p className="section-label" style={{ color: '#6a7f96', marginBottom: '0.75rem' }}>
              The Basics
            </p>
            <h2
              style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontWeight: 600,
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                color: '#0d2545',
                margin: '0 0 0.75rem 0',
              }}
            >
              What Is an Indexed
              <br />
              Universal Life Policy?
            </h2>
            <span className="rule-divider" />
            <p
              style={{
                fontFamily: 'Epilogue, sans-serif',
                fontWeight: 300,
                fontSize: '1rem',
                color: '#3a5270',
                lineHeight: 1.8,
                margin: '1.5rem 0 1rem 0',
              }}
            >
              Indexed Universal Life — or IUL — is a type of permanent life insurance. It doesn&#39;t
              expire after 20 years. It stays in force for your entire life, as long as premiums are
              paid or the policy has sufficient cash value.
            </p>
            <p
              style={{
                fontFamily: 'Epilogue, sans-serif',
                fontWeight: 300,
                fontSize: '1rem',
                color: '#3a5270',
                lineHeight: 1.8,
                margin: '0 0 1rem 0',
              }}
            >
              What makes IUL unique is how the cash value grows. Instead of earning a fixed interest
              rate, your cash value is credited based on the performance of a stock market index —
              like the S&P 500. If the index goes up, you earn a portion of those gains. If the
              index goes down, your cash value stays flat. You never lose value due to market performance.
            </p>
            <p
              style={{
                fontFamily: 'Epilogue, sans-serif',
                fontWeight: 300,
                fontSize: '1rem',
                color: '#3a5270',
                lineHeight: 1.8,
                margin: '0 0 2.5rem 0',
              }}
            >
              Over time, that cash value can be accessed tax-free through policy loans — making
              it one of the most powerful retirement income strategies available for working families.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <Link href="/quote" className="btn-primary">
                Get My IUL Quote
              </Link>
              <Link href="/contact" className="btn-secondary">
                Ask a Question
              </Link>
            </div>
          </div>

          {/* Step-by-step explainer */}
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '1px', backgroundColor: 'rgba(30,58,95,0.08)' }}>
            {[
              {
                n: '1',
                title: 'You pay your premium',
                body: 'A portion covers the cost of insurance. The rest goes into your policy\'s cash value account.',
              },
              {
                n: '2',
                title: 'Cash value is linked to an index',
                body: 'At the end of each policy year, interest is credited based on how the chosen index performed — with a cap on the upside and a 0% floor on the downside.',
              },
              {
                n: '3',
                title: 'Cash value grows over time',
                body: 'Year after year, your cash value compounds — growing in good market years and holding steady in bad ones.',
              },
              {
                n: '4',
                title: 'Access it tax-free in retirement',
                body: 'When you\'re ready to retire, you take tax-free policy loans against your cash value. Your family still receives the death benefit.',
              },
            ].map((item) => (
              <div
                key={item.n}
                style={{
                  backgroundColor: '#f4f7fb',
                  padding: '1.75rem 2rem',
                  display: 'grid',
                  gridTemplateColumns: '36px 1fr',
                  gap: '1.25rem',
                  alignItems: 'start',
                }}
              >
                <span
                  style={{
                    fontFamily: '"Cormorant Garamond", Georgia, serif',
                    fontWeight: 600,
                    fontSize: '1.5rem',
                    color: '#c8960c',
                    lineHeight: 1,
                    paddingTop: '2px',
                  }}
                >
                  {item.n}
                </span>
                <div>
                  <p
                    style={{
                      fontFamily: 'Epilogue, sans-serif',
                      fontWeight: 700,
                      fontSize: '0.88rem',
                      color: '#0d2545',
                      margin: '0 0 0.35rem 0',
                    }}
                  >
                    {item.title}
                  </p>
                  <p
                    style={{
                      fontFamily: 'Epilogue, sans-serif',
                      fontWeight: 300,
                      fontSize: '0.88rem',
                      color: '#3a5270',
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHO IT'S FOR ─── */}
      <section style={{ backgroundColor: '#f4f7fb', padding: 'clamp(5rem, 8vw, 7rem) 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="reveal" style={{ marginBottom: '3.5rem' }}>
            <p className="section-label" style={{ color: '#6a7f96', marginBottom: '0.75rem' }}>
              Is It Right for You?
            </p>
            <h2
              style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontWeight: 600,
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                color: '#0d2545',
                margin: 0,
              }}
            >
              Who Is IUL For?
            </h2>
          </div>

          <div
            className="reveal-group who-grid"
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', backgroundColor: 'rgba(30,58,95,0.08)' }}
          >
            {whoItIsFor.map((item, idx) => (
              <div
                key={idx}
                className="card-hover"
                style={{
                  backgroundColor: '#ffffff',
                  padding: 'clamp(2rem, 3.5vw, 2.5rem)',
                  display: 'grid',
                  gridTemplateColumns: '32px 1fr',
                  gap: '1.5rem',
                  alignItems: 'start',
                }}
              >
                <span
                  style={{
                    fontFamily: '"Cormorant Garamond", Georgia, serif',
                    fontWeight: 300,
                    fontSize: '2rem',
                    color: '#c8960c',
                    lineHeight: 1,
                  }}
                >
                  {idx + 1}
                </span>
                <div>
                  <h3
                    style={{
                      fontFamily: '"Cormorant Garamond", Georgia, serif',
                      fontWeight: 600,
                      fontSize: '1.4rem',
                      color: '#0d2545',
                      margin: '0 0 0.65rem 0',
                    }}
                  >
                    {item.title}
                  </h3>
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
              </div>
            ))}
          </div>

          <div
            className="reveal"
            style={{
              marginTop: '1px',
              backgroundColor: '#eaf0f8',
              padding: '1.75rem 2rem',
              borderTop: '1px solid rgba(30,58,95,0.08)',
            }}
          >
            <p
              style={{
                fontFamily: 'Epilogue, sans-serif',
                fontWeight: 300,
                fontSize: '0.88rem',
                color: '#3a5270',
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              <strong style={{ fontWeight: 700, color: '#0d2545' }}>A note on transparency:</strong>{' '}
              IUL is a powerful tool, but it&#39;s not right for every situation. If you have a
              short-term coverage need or a limited budget, we&#39;ll always tell you the truth
              about what fits your situation best.
            </p>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) { .who-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* ─── BENEFITS GRID ─── */}
      <section style={{ backgroundColor: '#eaf0f8', padding: 'clamp(5rem, 8vw, 7rem) 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="reveal" style={{ marginBottom: '3.5rem' }}>
            <p className="section-label" style={{ color: '#6a7f96', marginBottom: '0.75rem' }}>
              Policy Features
            </p>
            <h2
              style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontWeight: 600,
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                color: '#0d2545',
                margin: 0,
              }}
            >
              What Your Policy Includes
            </h2>
          </div>

          <div
            className="reveal-group benefits-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1px',
              backgroundColor: 'rgba(30,58,95,0.08)',
            }}
          >
            {iuLBenefits.map((benefit, idx) => (
              <div
                key={idx}
                className="card-hover"
                style={{
                  backgroundColor: '#ffffff',
                  padding: 'clamp(1.75rem, 3vw, 2.25rem)',
                }}
              >
                <h3
                  style={{
                    fontFamily: '"Cormorant Garamond", Georgia, serif',
                    fontWeight: 600,
                    fontSize: '1.35rem',
                    color: '#0d2545',
                    margin: '0 0 0.75rem 0',
                  }}
                >
                  {benefit.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'Epilogue, sans-serif',
                    fontWeight: 300,
                    fontSize: '0.88rem',
                    color: '#3a5270',
                    lineHeight: 1.8,
                    margin: 0,
                  }}
                >
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 1024px) { .benefits-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (max-width: 600px) { .benefits-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* ─── CARRIERS ─── */}
      <section style={{ backgroundColor: '#0d2545', padding: 'clamp(5rem, 8vw, 7rem) 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="reveal" style={{ marginBottom: '3.5rem' }}>
            <p className="section-label" style={{ color: 'rgba(255,255,255,0.4)', marginBottom: '0.75rem' }}>
              Our Partners
            </p>
            <h2
              style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontWeight: 600,
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                color: '#ffffff',
                margin: '0 0 0.75rem 0',
              }}
            >
              Carrier Partners
            </h2>
            <p
              style={{
                fontFamily: 'Epilogue, sans-serif',
                fontWeight: 300,
                fontSize: '0.92rem',
                color: 'rgba(255,255,255,0.5)',
                margin: 0,
              }}
            >
              We shop across top-rated carriers to find the best fit for your situation.
            </p>
          </div>

          <div
            className="reveal-group carriers-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1px',
              backgroundColor: 'rgba(255,255,255,0.08)',
            }}
          >
            {carriers.map((carrier, idx) => (
              <div
                key={idx}
                className="carrier-card"
                style={{
                  backgroundColor: '#1e3a5f',
                  padding: 'clamp(1.75rem, 3vw, 2.25rem)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <p
                    style={{
                      fontFamily: '"Cormorant Garamond", Georgia, serif',
                      fontWeight: 600,
                      fontSize: '1.3rem',
                      color: '#ffffff',
                      margin: 0,
                      lineHeight: 1.2,
                    }}
                  >
                    {carrier.name}
                  </p>
                  <span
                    style={{
                      fontFamily: 'Epilogue, sans-serif',
                      fontWeight: 700,
                      fontSize: '0.62rem',
                      color: '#c8960c',
                      border: '1px solid rgba(200,150,12,0.4)',
                      padding: '0.15rem 0.4rem',
                      flexShrink: 0,
                      marginLeft: '0.5rem',
                    }}
                  >
                    {carrier.rating}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: 'Epilogue, sans-serif',
                    fontWeight: 300,
                    fontSize: '0.8rem',
                    color: 'rgba(255,255,255,0.45)',
                    margin: 0,
                    lineHeight: 1.6,
                  }}
                >
                  {carrier.description}
                </p>
              </div>
            ))}
            <div
              style={{
                backgroundColor: '#2a4a6f',
                padding: 'clamp(1.75rem, 3vw, 2.25rem)',
              }}
            >
              <p
                style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontWeight: 600,
                  fontSize: '1.3rem',
                  color: '#ffffff',
                  margin: '0 0 0.5rem 0',
                }}
              >
                Why 7 Carriers?
              </p>
              <p
                style={{
                  fontFamily: 'Epilogue, sans-serif',
                  fontWeight: 300,
                  fontSize: '0.8rem',
                  color: 'rgba(255,255,255,0.45)',
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                More options means better pricing and a policy that fits your health and lifestyle.
              </p>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) { .carriers-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (max-width: 540px) { .carriers-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* ─── FAQ ─── */}
      <section style={{ backgroundColor: '#ffffff', padding: 'clamp(5rem, 8vw, 7rem) 2rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="reveal" style={{ marginBottom: '3rem' }}>
            <p className="section-label" style={{ color: '#6a7f96', marginBottom: '0.75rem' }}>
              FAQ
            </p>
            <h2
              style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontWeight: 600,
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                color: '#0d2545',
                margin: 0,
              }}
            >
              Frequently Asked Questions
            </h2>
          </div>

          <div className="reveal" style={{ borderTop: '1px solid rgba(30,58,95,0.1)' }}>
            {faqs.map((faq, idx) => (
              <FaqItem key={idx} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section style={{ backgroundColor: '#eaf0f8', padding: 'clamp(5rem, 8vw, 7rem) 2rem' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }} className="reveal">
          <p className="section-label" style={{ color: '#6a7f96', marginBottom: '1rem' }}>
            Ready to Start?
          </p>
          <h2
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontWeight: 600,
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              color: '#0d2545',
              margin: '0 0 1rem 0',
            }}
          >
            See What an IUL Could Look Like
            <br />
            for Your Family
          </h2>
          <p
            style={{
              fontFamily: 'Epilogue, sans-serif',
              fontWeight: 300,
              fontSize: '1rem',
              color: '#3a5270',
              lineHeight: 1.8,
              margin: '0 0 2.5rem 0',
              maxWidth: '520px',
            }}
          >
            Every family is different. Get a personalized quote and we&#39;ll show you exactly
            what coverage looks like — cost, cash value projections, and benefits — tailored
            to your age, health, and goals.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <Link href="/quote" className="btn-primary">
              Get My Free Quote
            </Link>
            <Link href="/contact" className="btn-secondary">
              Talk to an Agent
            </Link>
          </div>
          <p
            style={{
              fontFamily: 'Epilogue, sans-serif',
              fontWeight: 300,
              fontSize: '0.78rem',
              color: '#6a7f96',
              margin: '1.25rem 0 0 0',
            }}
          >
            No commitment. No pressure. Just real information for real people.
          </p>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) { .services-two-col { grid-template-columns: 1fr !important; gap: 3rem !important; } }
      `}</style>
    </>
  );
}
