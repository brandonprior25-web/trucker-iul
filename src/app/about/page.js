import Link from 'next/link';

export const metadata = {
  title: 'About Us | Family First Life Network',
  description:
    'Independent life insurance agents affiliated with Family First Life — one of the largest IMOs in the US. IUL specialists serving truck drivers and working families in all 50 states.',
};

const values = [
  {
    title: 'Independence',
    description:
      'We are never captive to one company. As independent agents through the FFL network, we shop 7+ top-rated carriers and recommend only what genuinely fits your situation.',
  },
  {
    title: 'Transparency',
    description:
      'No jargon, no pressure, no fine print surprises. We walk through every detail of a policy until you fully understand what you have — and why you have it.',
  },
  {
    title: 'Specialization',
    description:
      'We focus exclusively on IUL for truck drivers and working families. Going deep on one niche means better outcomes, sharper advice, and real expertise where it counts.',
  },
  {
    title: 'Accessibility',
    description:
      'Truckers keep different hours, and so do we. Reach out anytime — by email or the quote form — and we will respond promptly, no matter where you are on the road.',
  },
];

const stats = [
  {
    number: '37K+',
    label: 'FFL Agents Nationwide',
    sub: 'One of the largest independent agent networks in the US',
  },
  {
    number: '$800M+',
    label: 'In Annual Premiums',
    sub: 'Families protected across all 50 states every year',
  },
  {
    number: '2013',
    label: 'Founded',
    sub: 'Built from the ground up to serve working American families',
  },
];

const whyIUL = [
  {
    title: 'Truck drivers rarely have employer-sponsored benefits',
    body:
      'Most owner-operators and even company drivers lack the group life insurance, 401(k) matching, and disability coverage that office workers take for granted. An IUL fills that gap with permanent protection and tax-advantaged growth you own completely.',
  },
  {
    title: 'Your family depends on your income — and your life',
    body:
      'One serious accident can end a career. Without a policy in place, that means a spouse and children absorbing the full financial impact of that loss. An IUL provides a death benefit that replaces income, pays off debt, and keeps your family stable.',
  },
  {
    title: 'You deserve a retirement strategy that works for you',
    body:
      'IUL builds cash value tied to a market index — with a floor that protects against losses. Over time, that cash value can be accessed tax-free for retirement income, a home purchase, your kids\' education, or an emergency. It is the closest thing to a self-funded benefit package an independent worker can own.',
  },
  {
    title: 'Time matters more than people realize',
    body:
      'Premiums are based on age and health at the time of application. The longer you wait, the more you pay — or the harder it becomes to qualify. The best time to get covered was yesterday. The second best time is now.',
  },
];

export default function AboutPage() {
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
            Our Story
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
            About Family First Life Network
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
            Independent agents. Real advocacy. Built to serve the families that keep America moving.
          </p>
        </div>
      </section>

      {/* ─── MISSION ─── */}
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
          className="about-two-col"
        >
          <div className="reveal">
            <p className="section-label" style={{ color: '#6a7f96', marginBottom: '0.75rem' }}>
              Our Mission
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
              We Believe Every Family Deserves Real Protection
            </h2>
            <span className="rule-divider" />
            <p style={{ fontFamily: 'Epilogue, sans-serif', fontWeight: 300, fontSize: '1rem', color: '#3a5270', lineHeight: 1.8, margin: '1.5rem 0 1rem 0' }}>
              Family First Life was founded in 2013 by Shawn Meaike — a former state social worker who spent over a decade watching working families fall through the cracks. His mission was straightforward: build an organization where independent agents could truly put clients first, without the conflicts of interest that come with being tied to a single carrier.
            </p>
            <p style={{ fontFamily: 'Epilogue, sans-serif', fontWeight: 300, fontSize: '1rem', color: '#3a5270', lineHeight: 1.8, margin: '0 0 1rem 0' }}>
              That mission resonated. FFL has grown to over 37,000 licensed agents across all 50 states and now protects hundreds of thousands of American families annually. Our affiliation with that network means we bring the reach and carrier access of a national organization — with the personal commitment of a local agent who knows your name.
            </p>
            <p style={{ fontFamily: 'Epilogue, sans-serif', fontWeight: 300, fontSize: '1rem', color: '#3a5270', lineHeight: 1.8, margin: 0 }}>
              We focus specifically on Indexed Universal Life insurance for truck drivers and working families — people who are often underserved by traditional financial planning but who have the most to gain from building real, permanent protection.
            </p>
          </div>

          <div className="reveal">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', backgroundColor: 'rgba(30,58,95,0.08)' }}>
              {stats.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: idx % 2 === 0 ? '#f4f7fb' : '#eaf0f8',
                    padding: '2.5rem 2rem',
                    borderLeft: '3px solid #c8960c',
                  }}
                >
                  <span
                    style={{
                      fontFamily: '"Cormorant Garamond", Georgia, serif',
                      fontWeight: 600,
                      fontSize: '3.5rem',
                      color: '#0d2545',
                      display: 'block',
                      lineHeight: 1,
                      marginBottom: '0.5rem',
                    }}
                  >
                    {item.number}
                  </span>
                  <p style={{ fontFamily: 'Epilogue, sans-serif', fontWeight: 700, fontSize: '0.8rem', color: '#0d2545', margin: '0 0 0.25rem 0', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    {item.label}
                  </p>
                  <p style={{ fontFamily: 'Epilogue, sans-serif', fontWeight: 300, fontSize: '0.85rem', color: '#6a7f96', margin: 0, lineHeight: 1.6 }}>
                    {item.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY IUL MATTERS ─── */}
      <section style={{ backgroundColor: '#eaf0f8', padding: 'clamp(5rem, 8vw, 7rem) 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="reveal" style={{ marginBottom: '3.5rem', maxWidth: '640px' }}>
            <p className="section-label" style={{ color: '#6a7f96', marginBottom: '0.75rem' }}>
              Why Coverage Matters
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
              The Realities That Drive This Work
            </h2>
            <p style={{ fontFamily: 'Epilogue, sans-serif', fontWeight: 300, fontSize: '1rem', color: '#3a5270', lineHeight: 1.8, margin: 0 }}>
              Most people know life insurance is important. Very few take action before it&apos;s too late. Here is why that gap matters — especially if you drive for a living.
            </p>
          </div>

          <div
            className="reveal"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1px',
              backgroundColor: 'rgba(30,58,95,0.08)',
            }}
          >
            {whyIUL.map((item, idx) => (
              <div
                key={idx}
                className="card-hover"
                style={{ backgroundColor: '#ffffff', padding: '2.5rem' }}
              >
                <span
                  style={{
                    fontFamily: '"Cormorant Garamond", Georgia, serif',
                    fontWeight: 600,
                    fontSize: '2rem',
                    color: '#c8960c',
                    display: 'block',
                    marginBottom: '0.75rem',
                    lineHeight: 1,
                  }}
                >
                  0{idx + 1}
                </span>
                <h3
                  style={{
                    fontFamily: '"Cormorant Garamond", Georgia, serif',
                    fontWeight: 600,
                    fontSize: '1.4rem',
                    color: '#0d2545',
                    margin: '0 0 0.75rem 0',
                    lineHeight: 1.3,
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontFamily: 'Epilogue, sans-serif', fontWeight: 300, fontSize: '0.9rem', color: '#3a5270', lineHeight: 1.8, margin: 0 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) { .why-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* ─── VALUES ─── */}
      <section style={{ backgroundColor: '#ffffff', padding: 'clamp(5rem, 8vw, 7rem) 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="reveal" style={{ marginBottom: '3.5rem' }}>
            <p className="section-label" style={{ color: '#6a7f96', marginBottom: '0.75rem' }}>
              Our Values
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
              What We Stand For
            </h2>
          </div>

          <div
            className="reveal values-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1px',
              backgroundColor: 'rgba(30,58,95,0.08)',
            }}
          >
            {values.map((value, idx) => (
              <div
                key={idx}
                className="card-hover"
                style={{ backgroundColor: '#f4f7fb', padding: 'clamp(2rem, 3.5vw, 2.5rem)' }}
              >
                <span
                  style={{
                    display: 'block',
                    width: '32px',
                    height: '2px',
                    backgroundColor: '#c8960c',
                    marginBottom: '1.25rem',
                  }}
                />
                <h3
                  style={{
                    fontFamily: '"Cormorant Garamond", Georgia, serif',
                    fontWeight: 600,
                    fontSize: '1.5rem',
                    color: '#0d2545',
                    margin: '0 0 1rem 0',
                  }}
                >
                  {value.title}
                </h3>
                <p style={{ fontFamily: 'Epilogue, sans-serif', fontWeight: 300, fontSize: '0.9rem', color: '#3a5270', lineHeight: 1.8, margin: 0 }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 1024px) { .values-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (max-width: 600px) { .values-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* ─── FFL NETWORK ─── */}
      <section style={{ backgroundColor: '#f4f7fb', padding: 'clamp(5rem, 8vw, 7rem) 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}
            className="about-two-col reveal"
          >
            <div>
              <p className="section-label" style={{ color: '#6a7f96', marginBottom: '0.75rem' }}>Our Network</p>
              <h2
                style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontWeight: 600,
                  fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                  color: '#0d2545',
                  margin: '0 0 0.75rem 0',
                }}
              >
                Part of the Family First Life Network
              </h2>
              <span className="rule-divider" />
              <p style={{ fontFamily: 'Epilogue, sans-serif', fontWeight: 300, fontSize: '1rem', color: '#3a5270', lineHeight: 1.8, margin: '1.5rem 0 1rem 0' }}>
                Family First Life is one of the largest and fastest-growing Insurance Marketing Organizations (IMOs) in the United States, affiliated with Integrity Marketing Group — a national leader in life and health insurance distribution. FFL&apos;s model is built around one principle: agents who are free to do right by their clients produce better outcomes for everyone.
              </p>
              <p style={{ fontFamily: 'Epilogue, sans-serif', fontWeight: 300, fontSize: '1rem', color: '#3a5270', lineHeight: 1.8, margin: 0 }}>
                For you as a client, our FFL affiliation means access to 7+ top-rated carriers, no captive product obligations, and the support of a network that manages over $800 million in annual premiums — while still working with an agent who picks up the phone and knows your file.
              </p>
            </div>

            <div style={{ backgroundColor: '#0d2545', padding: '3rem' }}>
              <p className="section-label" style={{ color: 'rgba(255,255,255,0.4)', marginBottom: '1.5rem' }}>
                What This Means for You
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {[
                  {
                    label: 'No Captive Contracts',
                    body: 'We are never required to push one company\'s product. Every recommendation is based on your needs — not a sales quota.',
                  },
                  {
                    label: '20+ Carrier Relationships',
                    body: 'The FFL network has relationships with over 20 A-rated carriers. We access the best of them to find your ideal fit.',
                  },
                  {
                    label: 'National Reach, Personal Service',
                    body: 'Licensed in all 50 states and backed by a 37,000-agent network — but you will always work directly with your agent.',
                  },
                ].map((item, i) => (
                  <div key={i} style={{ borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none', paddingBottom: i < 2 ? '1.5rem' : '0' }}>
                    <p style={{ fontFamily: 'Epilogue, sans-serif', fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#c8960c', margin: '0 0 0.4rem 0' }}>
                      {item.label}
                    </p>
                    <p style={{ fontFamily: 'Epilogue, sans-serif', fontWeight: 300, fontSize: '0.88rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, margin: 0 }}>
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── AGENT BIO ─── */}
      <section style={{ backgroundColor: '#ffffff', padding: 'clamp(5rem, 8vw, 7rem) 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="reveal" style={{ marginBottom: '3rem' }}>
            <p className="section-label" style={{ color: '#6a7f96', marginBottom: '0.75rem' }}>The Agent</p>
            <h2
              style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontWeight: 600,
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                color: '#0d2545',
                margin: 0,
              }}
            >
              Who You Are Working With
            </h2>
          </div>

          <div
            className="reveal agent-bio-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '300px 1fr',
              gap: '4rem',
              alignItems: 'start',
              borderTop: '1px solid rgba(30,58,95,0.08)',
              paddingTop: '3rem',
            }}
          >
            <div>
              <div
                style={{
                  width: '100%',
                  aspectRatio: '1 / 1.15',
                  backgroundColor: '#eaf0f8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  marginBottom: '1.25rem',
                }}
              >
                <span style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: '5rem', fontWeight: 600, color: '#6a7f96', lineHeight: 1 }}>
                  B
                </span>
                <span style={{ fontFamily: 'Epilogue, sans-serif', fontWeight: 300, fontSize: '0.75rem', color: '#6a7f96', letterSpacing: '0.1em' }}>
                  Photo Coming Soon
                </span>
              </div>
              <p style={{ fontFamily: 'Epilogue, sans-serif', fontWeight: 700, fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#6a7f96' }}>
                Licensed Insurance Agent
              </p>
            </div>

            <div>
              <h3
                style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontWeight: 600,
                  fontSize: '2.5rem',
                  color: '#0d2545',
                  margin: '0 0 0.25rem 0',
                }}
              >
                Brandon Prior
              </h3>
              <p style={{ fontFamily: 'Epilogue, sans-serif', fontWeight: 300, fontSize: '0.88rem', color: '#6a7f96', margin: '0 0 2rem 0' }}>
                Independent Life Insurance Agent | IUL Specialist — All 50 States
              </p>
              <p style={{ fontFamily: 'Epilogue, sans-serif', fontWeight: 300, fontSize: '1rem', color: '#3a5270', lineHeight: 1.8, margin: '0 0 1rem 0' }}>
                Brandon got into life insurance because he saw firsthand what happens when a working family is left without a plan. Growing up around hard-working people — the kind who drive long hauls, work overtime, and put everything into providing for the people they love — he understood that those families were the ones most likely to fall through the cracks of the traditional financial system.
              </p>
              <p style={{ fontFamily: 'Epilogue, sans-serif', fontWeight: 300, fontSize: '1rem', color: '#3a5270', lineHeight: 1.8, margin: '0 0 1rem 0' }}>
                As an independent agent through the Family First Life network, Brandon has access to seven top-rated carriers and shops the full market for every client. That independence means he is never locked into pushing one company&apos;s product — his only obligation is finding the right fit for your family&apos;s actual situation. He specializes in IUL for truck drivers, owner-operators, and working families who want permanent protection that builds real value over time.
              </p>
              <p style={{ fontFamily: 'Epilogue, sans-serif', fontWeight: 300, fontSize: '1rem', color: '#3a5270', lineHeight: 1.8, margin: '0 0 2rem 0' }}>
                His approach is built on honesty. He will explain everything clearly, answer every question straight, and never pressure anyone into a decision they are not confident in. If an IUL is not the right fit for you right now, he will say that too. The relationship matters more than the policy.
              </p>
              <a
                href="mailto:brandonaioinsurance@gmail.com"
                style={{
                  fontFamily: 'Epilogue, sans-serif',
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.18em',
                  color: '#0d2545',
                  textDecoration: 'none',
                  borderBottom: '1px solid rgba(13,37,69,0.25)',
                  paddingBottom: '2px',
                  transition: 'border-color 0.2s ease, color 0.2s ease',
                }}
              >
                brandonaioinsurance@gmail.com
              </a>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) { .agent-bio-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* ─── CTA ─── */}
      <section style={{ backgroundColor: '#0d2545', padding: 'clamp(5rem, 8vw, 7rem) 2rem' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }} className="reveal">
          <p className="section-label" style={{ color: 'rgba(255,255,255,0.4)', marginBottom: '1.25rem' }}>
            Ready to Start?
          </p>
          <h2
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontWeight: 600,
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              color: '#ffffff',
              margin: '0 0 1.25rem 0',
              lineHeight: 1.1,
            }}
          >
            Let&apos;s Find the Right Coverage for Your Family
          </h2>
          <p style={{ fontFamily: 'Epilogue, sans-serif', fontWeight: 300, fontSize: '1rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, margin: '0 0 2.5rem 0' }}>
            No pressure, no jargon. Just a straightforward conversation about what protection looks like for your situation.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
            <Link href="/quote" className="btn-gold">Get a Free Quote</Link>
            <Link href="/contact" className="btn-outline-white">Ask a Question</Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .about-two-col { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </>
  );
}
