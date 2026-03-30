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

const iulBenefits = [
  {
    title: 'Permanent, Lifelong Coverage',
    body: 'Unlike term insurance, IUL never expires. Your family is protected for life as long as the policy is in force.',
  },
  {
    title: 'Tax-Deferred Cash Value Growth',
    body: 'Your premiums build equity inside the policy that grows tax-deferred and can be accessed tax-free in retirement.',
  },
  {
    title: '0% Floor on Market Losses',
    body: 'Cash value is linked to an index like the S&P 500. Good years earn gains. Bad years, your balance holds steady.',
  },
  {
    title: 'Tax-Free Retirement Income',
    body: 'Access your accumulated cash value through policy loans — with no income tax owed, ever.',
  },
  {
    title: 'Living Benefit Riders',
    body: 'Critical, chronic, and terminal illness riders let you access your death benefit while still alive to cover major expenses.',
  },
  {
    title: 'Flexible Premium Structure',
    body: 'Pay more in good months to accelerate growth. Pay less when things are tight. Your policy moves with your life.',
  },
];

const whoIts = [
  {
    icon: '🚛',
    title: 'For Truckers',
    body: 'Most financial products ignore the reality of life on the road. IUL is permanent, portable, and builds real retirement wealth — no employer required.',
  },
  {
    icon: '👨‍👩‍👧',
    title: 'For Families',
    body: 'Protect your income, secure your children\'s future, and build a tax-free nest egg — all inside a single policy that lasts your lifetime.',
  },
  {
    icon: '🏗️',
    title: 'For the Self-Employed',
    body: 'No 401(k) match, no pension. An IUL\'s cash value is your self-funded retirement account — tax-advantaged and entirely yours.',
  },
];

const truckerBenefits = [
  {
    num: '01',
    title: 'On-Road Coverage, No Asterisks',
    body: 'We work with carriers who fully underwrite CDL and OTR drivers — no occupational exclusions, no fine print that voids your coverage when you\'re behind the wheel.',
  },
  {
    num: '02',
    title: 'No Medical Exam Options',
    body: 'Several of our carrier partners offer simplified or guaranteed issue policies that require only health questions — no blood draws, no nurse visits, no time off the road.',
  },
  {
    num: '03',
    title: 'Income Replacement for Your Family',
    body: 'A tax-free death benefit sized to replace your income means your spouse and kids can keep the house, pay the bills, and stay on track — without your paycheck.',
  },
  {
    num: '04',
    title: 'A Retirement Plan You Actually Own',
    body: 'Most truckers have no pension and no employer 401(k). An IUL\'s cash value is your self-funded retirement account — portable, tax-advantaged, and entirely yours.',
  },
];

const steps = [
  {
    number: '01',
    title: 'Get Your Free Quote',
    description: 'Fill out our short form in under three minutes. Tell us about yourself, your family, and what you\'re looking for.',
  },
  {
    number: '02',
    title: 'We Shop the Market',
    description: 'We compare options across seven A-rated carriers to find the right policy for your age, health, and situation.',
  },
  {
    number: '03',
    title: 'Review Your Options',
    description: 'We walk you through your options in plain English. No jargon, no pressure. You ask questions, we give straight answers.',
  },
  {
    number: '04',
    title: 'Get Covered',
    description: 'Once you choose, we handle the paperwork. Many policies issue the same day. Your family is protected from day one.',
  },
];

const testimonials = [
  {
    quote: 'I always thought life insurance was something you just bought and forgot about. My agent showed me how the cash value in my IUL had grown to over $40,000 in six years. That money is mine to use whenever I need it.',
    name: 'Marcus T.',
    role: 'Owner-Operator, TX — 14 years OTR',
  },
  {
    quote: 'Roy drives coast-to-coast and we have three kids. After we set up our IUL policies, I finally stopped lying awake worrying. Knowing we have coverage — with living benefits too — changed everything for our family.',
    name: 'Diane & Roy K.',
    role: 'Company Driver Family, Texas',
  },
  {
    quote: 'The process was simple and fast. Within a week I had coverage I could actually understand. No confusing jargon, no pressure. My family is protected and I\'m building something for retirement at the same time.',
    name: 'Terrell M.',
    role: 'Lease Operator, Southeast Region',
  },
];

const initialQuickForm = { name: '', phone: '', email: '', coverage: '' };

export default function HomePage() {
  const [quickForm, setQuickForm] = useState(initialQuickForm);
  const [quickStatus, setQuickStatus] = useState('idle');

  const handleQuickChange = (e) => {
    const { name, value } = e.target;
    setQuickForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleQuickSubmit = async (e) => {
    e.preventDefault();
    if (!quickForm.name || !quickForm.email) return;
    setQuickStatus('loading');
    try {
      const res = await fetch('/api/quick-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...quickForm, source: 'homepage-quick-form' }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setQuickStatus('success');
        setQuickForm(initialQuickForm);
      } else {
        setQuickStatus('error');
      }
    } catch {
      setQuickStatus('error');
    }
  };

  return (
    <>
      {/* ─── HERO ─── */}
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '100vh' }} className="hero-grid">
        {/* Left — white */}
        <div
          style={{
            backgroundColor: '#ffffff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: 'clamp(6rem, 10vw, 8rem) clamp(2rem, 5vw, 5rem) clamp(4rem, 6vw, 5rem)',
          }}
        >
          <p className="section-label" style={{ marginBottom: '1.5rem' }}>
            Family First Life Network
          </p>
          <h1
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontWeight: 600,
              fontSize: 'clamp(3rem, 5vw, 5rem)',
              lineHeight: 1.08,
              color: '#0d2545',
              margin: 0,
            }}
          >
            Protect Your Family.
            <br />
            Build Wealth While
            <br />
            You Drive.
          </h1>

          <span className="rule-divider" style={{ margin: '1.75rem 0', backgroundColor: '#c8960c' }} />

          <p
            style={{
              fontFamily: 'Epilogue, sans-serif',
              fontWeight: 300,
              fontSize: '1rem',
              color: '#6a7f96',
              lineHeight: 1.8,
              maxWidth: '420px',
              margin: '0 0 2.5rem 0',
            }}
          >
            Indexed Universal Life insurance built for truck drivers and working families.
            Permanent protection, tax-free growth, and living benefits — all in one policy.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <Link href="/quote" className="btn-primary">
              Get My Free Quote
            </Link>
            <a href="#how-it-works" className="btn-secondary">
              See How It Works
            </a>
          </div>
        </div>

        {/* Right — navy dark with quick form */}
        <div
          style={{
            backgroundColor: '#0d2545',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: 'clamp(6rem, 10vw, 8rem) clamp(2rem, 5vw, 5rem) clamp(4rem, 6vw, 5rem)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Subtle diagonal pattern */}
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

          <div style={{ position: 'relative' }}>
            <p className="section-label" style={{ color: 'rgba(255,255,255,0.4)', marginBottom: '1.25rem' }}>
              Quick Quote
            </p>
            <h2
              style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontWeight: 600,
                fontSize: '1.9rem',
                color: '#ffffff',
                margin: '0 0 2.5rem 0',
                lineHeight: 1.2,
              }}
            >
              Get your personalized
              <br />
              quote in minutes.
            </h2>

            {quickStatus === 'success' ? (
              <div
                style={{
                  borderTop: '1px solid rgba(255,255,255,0.15)',
                  paddingTop: '2rem',
                }}
              >
                <p
                  style={{
                    fontFamily: 'Epilogue, sans-serif',
                    fontWeight: 300,
                    fontSize: '1rem',
                    color: 'rgba(255,255,255,0.75)',
                    lineHeight: 1.8,
                  }}
                >
                  Thank you. We&#39;ll be in touch within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleQuickSubmit} noValidate>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                  <div>
                    <label
                      htmlFor="qf-name"
                      style={{
                        display: 'block',
                        fontFamily: 'Epilogue, sans-serif',
                        fontSize: '0.68rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.18em',
                        color: 'rgba(255,255,255,0.4)',
                        marginBottom: '0.5rem',
                      }}
                    >
                      Full Name
                    </label>
                    <input
                      id="qf-name"
                      name="name"
                      type="text"
                      required
                      value={quickForm.name}
                      onChange={handleQuickChange}
                      placeholder="John Smith"
                      style={{
                        width: '100%',
                        background: 'transparent',
                        border: 'none',
                        borderBottom: '1px solid rgba(255,255,255,0.2)',
                        padding: '0.6rem 0',
                        fontFamily: 'Epilogue, sans-serif',
                        fontWeight: 300,
                        fontSize: '1rem',
                        color: '#ffffff',
                        outline: 'none',
                        boxSizing: 'border-box',
                      }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="qf-phone"
                      style={{
                        display: 'block',
                        fontFamily: 'Epilogue, sans-serif',
                        fontSize: '0.68rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.18em',
                        color: 'rgba(255,255,255,0.4)',
                        marginBottom: '0.5rem',
                      }}
                    >
                      Phone
                    </label>
                    <input
                      id="qf-phone"
                      name="phone"
                      type="tel"
                      value={quickForm.phone}
                      onChange={handleQuickChange}
                      placeholder="(555) 000-0000"
                      style={{
                        width: '100%',
                        background: 'transparent',
                        border: 'none',
                        borderBottom: '1px solid rgba(255,255,255,0.2)',
                        padding: '0.6rem 0',
                        fontFamily: 'Epilogue, sans-serif',
                        fontWeight: 300,
                        fontSize: '1rem',
                        color: '#ffffff',
                        outline: 'none',
                        boxSizing: 'border-box',
                      }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="qf-email"
                      style={{
                        display: 'block',
                        fontFamily: 'Epilogue, sans-serif',
                        fontSize: '0.68rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.18em',
                        color: 'rgba(255,255,255,0.4)',
                        marginBottom: '0.5rem',
                      }}
                    >
                      Email
                    </label>
                    <input
                      id="qf-email"
                      name="email"
                      type="email"
                      required
                      value={quickForm.email}
                      onChange={handleQuickChange}
                      placeholder="john@example.com"
                      style={{
                        width: '100%',
                        background: 'transparent',
                        border: 'none',
                        borderBottom: '1px solid rgba(255,255,255,0.2)',
                        padding: '0.6rem 0',
                        fontFamily: 'Epilogue, sans-serif',
                        fontWeight: 300,
                        fontSize: '1rem',
                        color: '#ffffff',
                        outline: 'none',
                        boxSizing: 'border-box',
                      }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="qf-coverage"
                      style={{
                        display: 'block',
                        fontFamily: 'Epilogue, sans-serif',
                        fontSize: '0.68rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.18em',
                        color: 'rgba(255,255,255,0.4)',
                        marginBottom: '0.5rem',
                      }}
                    >
                      Coverage Type
                    </label>
                    <select
                      id="qf-coverage"
                      name="coverage"
                      value={quickForm.coverage}
                      onChange={handleQuickChange}
                      style={{
                        width: '100%',
                        background: 'transparent',
                        border: 'none',
                        borderBottom: '1px solid rgba(255,255,255,0.2)',
                        padding: '0.6rem 0',
                        fontFamily: 'Epilogue, sans-serif',
                        fontWeight: 300,
                        fontSize: '1rem',
                        color: quickForm.coverage ? '#ffffff' : 'rgba(255,255,255,0.4)',
                        outline: 'none',
                        appearance: 'none',
                        WebkitAppearance: 'none',
                        cursor: 'pointer',
                        boxSizing: 'border-box',
                      }}
                    >
                      <option value="" style={{ color: '#0d2545' }}>Select coverage type</option>
                      <option value="IUL" style={{ color: '#0d2545' }}>Indexed Universal Life (IUL)</option>
                      <option value="Not sure" style={{ color: '#0d2545' }}>Not sure — help me decide</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={quickStatus === 'loading'}
                    className="btn-gold"
                    style={{ marginTop: '0.5rem' }}
                  >
                    {quickStatus === 'loading' ? 'Sending...' : 'Send My Quote Request'}
                  </button>

                  {quickStatus === 'error' && (
                    <p style={{ fontFamily: 'Epilogue, sans-serif', fontSize: '0.8rem', color: '#e88', fontWeight: 300 }}>
                      Something went wrong. Please try the full{' '}
                      <Link href="/quote" style={{ color: '#ffffff' }}>quote form</Link>.
                    </p>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ─── CARRIERS GRID ─── */}
      <section style={{ backgroundColor: '#ffffff', borderBottom: '1px solid rgba(30,58,95,0.08)', padding: 'clamp(3rem, 5vw, 4.5rem) 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ marginBottom: '2rem' }} className="reveal">
            <p className="section-label" style={{ color: '#6a7f96', marginBottom: '0.5rem' }}>
              Trusted Carriers We Work With
            </p>
            <p
              style={{
                fontFamily: 'Epilogue, sans-serif',
                fontWeight: 300,
                fontSize: '0.92rem',
                color: '#6a7f96',
                margin: 0,
              }}
            >
              We shop across top-rated carriers to find the best fit for your situation.
            </p>
          </div>

          <div
            className="reveal-group carriers-home-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1px',
              backgroundColor: 'rgba(30,58,95,0.08)',
            }}
          >
            {carriers.map((carrier) => (
              <div
                key={carrier.name}
                className="carrier-card"
                style={{
                  backgroundColor: '#ffffff',
                  padding: '1.5rem 1.75rem',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <p
                    style={{
                      fontFamily: '"Cormorant Garamond", Georgia, serif',
                      fontWeight: 600,
                      fontSize: '1.1rem',
                      color: '#0d2545',
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
                      fontSize: '0.65rem',
                      color: '#c8960c',
                      border: '1px solid rgba(200,150,12,0.3)',
                      padding: '0.15rem 0.45rem',
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
                    fontSize: '0.78rem',
                    color: '#6a7f96',
                    margin: 0,
                    lineHeight: 1.6,
                  }}
                >
                  {carrier.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) { .carriers-home-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (max-width: 540px) { .carriers-home-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* ─── IUL FEATURE SECTION ─── */}
      <section style={{ backgroundColor: '#f4f7fb', padding: 'clamp(5rem, 8vw, 7rem) 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="reveal" style={{ marginBottom: '3.5rem', textAlign: 'center', maxWidth: '680px', margin: '0 auto 3.5rem' }}>
            <p className="section-label" style={{ color: '#6a7f96', marginBottom: '0.75rem' }}>
              Our Product
            </p>
            <h2
              style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontWeight: 600,
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                color: '#0d2545',
                margin: '0 0 0.5rem 0',
              }}
            >
              Indexed Universal Life Insurance
            </h2>
            <span
              style={{
                display: 'block',
                width: '48px',
                height: '2px',
                backgroundColor: '#c8960c',
                margin: '1.25rem auto',
              }}
            />
          </div>

          {/* Two column: explanation + benefits */}
          <div
            className="iul-two-col reveal"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '5rem',
              alignItems: 'start',
              marginBottom: '4rem',
            }}
          >
            {/* Left: explanation */}
            <div>
              <h3
                style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontWeight: 600,
                  fontSize: '1.7rem',
                  color: '#0d2545',
                  margin: '0 0 1.25rem 0',
                }}
              >
                What Is an IUL Policy?
              </h3>
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
                An Indexed Universal Life policy is permanent life insurance — it doesn&#39;t expire
                after 20 years. It stays in force for your entire life, as long as premiums are paid
                or the policy has enough cash value to sustain itself.
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
                What makes IUL unique is the cash value component. A portion of every premium goes
                into an account that earns interest based on how a market index performs — like the
                S&P 500. If the index goes up, your cash value gets credited with a portion of those
                gains. If the index goes down, your cash value stays flat. You never lose value due
                to market performance.
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
                Over time, that cash value grows and can be accessed as tax-free income through
                policy loans in retirement — making IUL one of the most powerful retirement
                strategies available for working families who don&#39;t have access to a pension
                or employer match.
              </p>
              <p
                style={{
                  fontFamily: 'Epilogue, sans-serif',
                  fontWeight: 300,
                  fontSize: '1rem',
                  color: '#3a5270',
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                Unlike a 401(k) or IRA, IUL cash value grows tax-deferred, is not subject to
                contribution limits in the same way, and provides a death benefit to your family
                on top of everything else.
              </p>
            </div>

            {/* Right: benefits list */}
            <div>
              <h3
                style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontWeight: 600,
                  fontSize: '1.7rem',
                  color: '#0d2545',
                  margin: '0 0 1.5rem 0',
                }}
              >
                What Your Policy Includes
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {iulBenefits.map((benefit, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '24px 1fr',
                      gap: '0.75rem',
                      padding: '0.9rem 0',
                      borderBottom: '1px solid rgba(30,58,95,0.08)',
                      alignItems: 'start',
                    }}
                  >
                    <span
                      style={{
                        color: '#c8960c',
                        fontFamily: 'Epilogue, sans-serif',
                        fontWeight: 700,
                        fontSize: '1rem',
                        lineHeight: 1.6,
                      }}
                    >
                      —
                    </span>
                    <div>
                      <p
                        style={{
                          fontFamily: 'Epilogue, sans-serif',
                          fontWeight: 700,
                          fontSize: '0.85rem',
                          color: '#0d1f35',
                          margin: '0 0 0.2rem 0',
                        }}
                      >
                        {benefit.title}
                      </p>
                      <p
                        style={{
                          fontFamily: 'Epilogue, sans-serif',
                          fontWeight: 300,
                          fontSize: '0.85rem',
                          color: '#6a7f96',
                          lineHeight: 1.7,
                          margin: 0,
                        }}
                      >
                        {benefit.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Who is IUL for? — 3 cards */}
          <div
            className="reveal-group who-iul-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1px',
              backgroundColor: 'rgba(30,58,95,0.08)',
              marginBottom: '3rem',
            }}
          >
            {whoIts.map((item, idx) => (
              <div
                key={idx}
                className="card-hover"
                style={{
                  backgroundColor: '#ffffff',
                  padding: 'clamp(2rem, 3.5vw, 2.5rem)',
                }}
              >
                <p
                  style={{
                    fontSize: '1.75rem',
                    margin: '0 0 1rem 0',
                    lineHeight: 1,
                  }}
                >
                  {item.icon}
                </p>
                <h3
                  style={{
                    fontFamily: '"Cormorant Garamond", Georgia, serif',
                    fontWeight: 600,
                    fontSize: '1.35rem',
                    color: '#0d2545',
                    margin: '0 0 0.75rem 0',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'Epilogue, sans-serif',
                    fontWeight: 300,
                    fontSize: '0.88rem',
                    color: '#6a7f96',
                    lineHeight: 1.8,
                    margin: 0,
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <div className="reveal" style={{ textAlign: 'center' }}>
            <Link href="/quote" className="btn-primary">
              Get Your IUL Quote
            </Link>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) { .iul-two-col { grid-template-columns: 1fr !important; gap: 3rem !important; } }
          @media (max-width: 768px) { .who-iul-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* ─── TRUCKER SECTION ─── */}
      <section
        style={{
          backgroundColor: '#0d2545',
          padding: 'clamp(5rem, 8vw, 7rem) 2rem',
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
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
          <div className="reveal" style={{ maxWidth: '640px', marginBottom: '4rem' }}>
            <p className="section-label" style={{ color: 'rgba(255,255,255,0.4)', marginBottom: '1rem' }}>
              Built for Truckers
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
              Built for the Road.
              <br />
              Designed for Your Family.
            </h2>
            <p
              style={{
                fontFamily: 'Epilogue, sans-serif',
                fontWeight: 300,
                fontSize: '1rem',
                color: 'rgba(255,255,255,0.65)',
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              Most financial products are designed for people who sit in an office from 9 to 5.
              The Trucker IUL is built around your reality — the road, the schedule, and the family waiting at home.
            </p>
          </div>

          <div className="reveal-group" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            {truckerBenefits.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '80px 1fr',
                  gap: '2rem',
                  padding: '2.25rem 0',
                  borderBottom: '1px solid rgba(255,255,255,0.1)',
                  alignItems: 'start',
                }}
                className="trucker-benefit"
              >
                <span
                  style={{
                    fontFamily: '"Cormorant Garamond", Georgia, serif',
                    fontWeight: 300,
                    fontSize: '3rem',
                    color: '#c8960c',
                    lineHeight: 1,
                    opacity: 0.7,
                  }}
                >
                  {item.num}
                </span>
                <div>
                  <h3
                    style={{
                      fontFamily: '"Cormorant Garamond", Georgia, serif',
                      fontWeight: 600,
                      fontSize: '1.5rem',
                      color: '#ffffff',
                      margin: '0 0 0.6rem 0',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'Epilogue, sans-serif',
                      fontWeight: 300,
                      fontSize: '0.92rem',
                      color: 'rgba(255,255,255,0.55)',
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

          <div className="reveal" style={{ marginTop: '3.5rem' }}>
            <Link href="/quote" className="btn-outline-white">
              Get Your Trucker Quote
            </Link>
          </div>
        </div>

        <style>{`
          @media (max-width: 600px) {
            .trucker-benefit { grid-template-columns: 1fr !important; gap: 0.5rem !important; }
          }
        `}</style>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section
        id="how-it-works"
        style={{ backgroundColor: '#eaf0f8', padding: 'clamp(5rem, 8vw, 7rem) 2rem' }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="reveal" style={{ marginBottom: '4rem' }}>
            <p className="section-label" style={{ color: '#6a7f96', marginBottom: '0.75rem' }}>
              Process
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
              How It Works
            </h2>
          </div>

          <div
            className="reveal-group steps-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '3rem',
            }}
          >
            {steps.map((step, idx) => (
              <div key={idx}>
                <span
                  style={{
                    fontFamily: '"Cormorant Garamond", Georgia, serif',
                    fontWeight: 300,
                    fontSize: '4.5rem',
                    color: '#c8960c',
                    lineHeight: 1,
                    display: 'block',
                    marginBottom: '1rem',
                    opacity: 0.8,
                  }}
                >
                  {step.number}
                </span>
                <h3
                  style={{
                    fontFamily: '"Cormorant Garamond", Georgia, serif',
                    fontWeight: 600,
                    fontSize: '1.3rem',
                    color: '#0d2545',
                    margin: '0 0 0.75rem 0',
                  }}
                >
                  {step.title}
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
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) { .steps-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (max-width: 540px) { .steps-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section style={{ backgroundColor: '#f4f7fb', padding: 'clamp(5rem, 8vw, 7rem) 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="reveal" style={{ marginBottom: '3.5rem' }}>
            <p className="section-label" style={{ color: '#6a7f96', marginBottom: '0.75rem' }}>
              Client Stories
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
              What Our Clients Say
            </h2>
          </div>

          <div
            className="reveal-group testimonials-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1px',
              backgroundColor: 'rgba(30,58,95,0.08)',
            }}
          >
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="card-hover"
                style={{
                  backgroundColor: '#ffffff',
                  padding: 'clamp(2rem, 4vw, 2.5rem)',
                }}
              >
                <p
                  style={{
                    fontFamily: '"Cormorant Garamond", Georgia, serif',
                    fontWeight: 300,
                    fontSize: '1.2rem',
                    color: '#0d1f35',
                    lineHeight: 1.7,
                    margin: '0 0 2rem 0',
                    fontStyle: 'italic',
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div style={{ borderTop: '1px solid rgba(30,58,95,0.08)', paddingTop: '1.25rem' }}>
                  <p
                    style={{
                      fontFamily: 'Epilogue, sans-serif',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      color: '#0d2545',
                      margin: '0 0 0.2rem 0',
                    }}
                  >
                    {t.name}
                  </p>
                  <p
                    style={{
                      fontFamily: 'Epilogue, sans-serif',
                      fontWeight: 300,
                      fontSize: '0.78rem',
                      color: '#6a7f96',
                      margin: 0,
                    }}
                  >
                    {t.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) { .testimonials-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section style={{ backgroundColor: '#0d2545', padding: 'clamp(5rem, 8vw, 7rem) 2rem' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }} className="reveal">
          <p className="section-label" style={{ color: 'rgba(255,255,255,0.4)', marginBottom: '1.25rem' }}>
            Take the First Step
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
            Ready to Protect What
            <br />
            Matters Most?
          </h2>
          <p
            style={{
              fontFamily: 'Epilogue, sans-serif',
              fontWeight: 300,
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.65)',
              lineHeight: 1.8,
              margin: '0 0 2.5rem 0',
            }}
          >
            Get your free, no-obligation quote today. We do the legwork across seven
            top carriers — you make the call.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
            <Link href="/quote" className="btn-gold">
              Get a Free Quote
            </Link>
            <Link href="/contact" className="btn-outline-white">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
