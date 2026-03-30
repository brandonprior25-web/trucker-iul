'use client';

import { useState } from 'react';
import Link from 'next/link';

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const initialErrors = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const labelStyle = {
  display: 'block',
  fontFamily: 'Epilogue, sans-serif',
  fontSize: '0.68rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.18em',
  color: '#6a7f96',
  marginBottom: '0.5rem',
};

const errorStyle = {
  fontFamily: 'Epilogue, sans-serif',
  fontWeight: 300,
  fontSize: '0.78rem',
  color: '#c0392b',
  marginTop: '0.4rem',
  display: 'block',
};

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState(initialErrors);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [serverMessage, setServerMessage] = useState('');

  const validate = () => {
    const newErrors = { ...initialErrors };
    let valid = true;

    if (!form.name.trim()) {
      newErrors.name = 'Please enter your full name.';
      valid = false;
    }

    if (!form.email.trim()) {
      newErrors.email = 'Please enter your email address.';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address.';
      valid = false;
    }

    if (!form.subject.trim()) {
      newErrors.subject = 'Please enter a subject.';
      valid = false;
    }

    if (!form.message.trim()) {
      newErrors.message = 'Please enter your message.';
      valid = false;
    } else if (form.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    setServerMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        setForm(initialForm);
      } else {
        setStatus('error');
        setServerMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setServerMessage('Network error. Please check your connection and try again.');
    }
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
          <p className="section-label" style={{ color: 'rgba(255,255,255,0.4)', marginBottom: '1.25rem' }}>
            Reach Out
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
            Get in Touch
          </h1>
          <p
            style={{
              fontFamily: 'Epilogue, sans-serif',
              fontWeight: 300,
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.65)',
              lineHeight: 1.8,
              margin: 0,
              maxWidth: '480px',
            }}
          >
            Have a question about IUL, want to know what coverage costs, or just not sure
            where to start? Send us a message and we&#39;ll be back in touch — usually within
            one business day.
          </p>
        </div>
      </section>

      {/* ─── CONTACT CONTENT ─── */}
      <section style={{ backgroundColor: '#f4f7fb', padding: 'clamp(5rem, 8vw, 7rem) 2rem' }}>
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: '4rem',
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          {/* Left — contact details */}
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '1px', backgroundColor: 'rgba(30,58,95,0.08)' }}>
            {/* Email */}
            <div style={{ backgroundColor: '#ffffff', padding: '2rem' }}>
              <p className="section-label" style={{ color: '#6a7f96', marginBottom: '0.75rem' }}>
                Email Us
              </p>
              <a
                href="mailto:brandonaioinsurance@gmail.com"
                style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  color: '#0d2545',
                  textDecoration: 'none',
                  borderBottom: '1px solid rgba(13,37,69,0.2)',
                  paddingBottom: '2px',
                  wordBreak: 'break-all',
                  transition: 'border-color 0.2s ease',
                }}
              >
                brandonaioinsurance@gmail.com
              </a>
              <p
                style={{
                  fontFamily: 'Epilogue, sans-serif',
                  fontWeight: 300,
                  fontSize: '0.85rem',
                  color: '#6a7f96',
                  lineHeight: 1.7,
                  margin: '0.75rem 0 0 0',
                }}
              >
                Send your questions, request a quote, or just say hello.
              </p>
            </div>

            {/* Hours */}
            <div style={{ backgroundColor: '#ffffff', padding: '2rem' }}>
              <p className="section-label" style={{ color: '#6a7f96', marginBottom: '1rem' }}>
                Business Hours
              </p>
              {[
                { day: 'Monday – Friday', hours: '9:00 AM – 6:00 PM CT' },
                { day: 'Saturday', hours: '10:00 AM – 3:00 PM CT' },
                { day: 'Sunday', hours: 'By appointment' },
              ].map((row, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '0.5rem 0',
                    borderBottom: '1px solid rgba(30,58,95,0.06)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'Epilogue, sans-serif',
                      fontWeight: 700,
                      fontSize: '0.82rem',
                      color: '#0d1f35',
                    }}
                  >
                    {row.day}
                  </span>
                  <span
                    style={{
                      fontFamily: 'Epilogue, sans-serif',
                      fontWeight: 300,
                      fontSize: '0.82rem',
                      color: '#6a7f96',
                    }}
                  >
                    {row.hours}
                  </span>
                </div>
              ))}
              <p
                style={{
                  fontFamily: 'Epilogue, sans-serif',
                  fontWeight: 300,
                  fontSize: '0.78rem',
                  color: '#6a7f96',
                  lineHeight: 1.7,
                  margin: '1rem 0 0 0',
                }}
              >
                We understand truckers keep different hours. Reach out via email anytime
                and we&#39;ll respond as soon as possible.
              </p>
            </div>

            {/* Service Area */}
            <div style={{ backgroundColor: '#ffffff', padding: '2rem' }}>
              <p className="section-label" style={{ color: '#6a7f96', marginBottom: '0.75rem' }}>
                Service Area
              </p>
              <p
                style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontWeight: 600,
                  fontSize: '1.3rem',
                  color: '#0d2545',
                  margin: '0 0 0.5rem 0',
                }}
              >
                All 50 States
              </p>
              <p
                style={{
                  fontFamily: 'Epilogue, sans-serif',
                  fontWeight: 300,
                  fontSize: '0.85rem',
                  color: '#3a5270',
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                Whether you&#39;re parked in Texas, rolling through Montana, or home in Ohio —
                we can help. Everything is handled remotely.
              </p>
            </div>

            {/* Quote CTA */}
            <div style={{ backgroundColor: '#0d2545', padding: '2rem' }}>
              <p className="section-label" style={{ color: 'rgba(255,255,255,0.4)', marginBottom: '0.75rem' }}>
                Skip the Form?
              </p>
              <p
                style={{
                  fontFamily: 'Epilogue, sans-serif',
                  fontWeight: 300,
                  fontSize: '0.88rem',
                  color: 'rgba(255,255,255,0.65)',
                  lineHeight: 1.7,
                  margin: '0 0 1.25rem 0',
                }}
              >
                Get a personalized IUL quote — free, no obligation, and we won&#39;t pressure
                you into anything.
              </p>
              <Link href="/quote" className="btn-gold" style={{ fontSize: '0.65rem', padding: '0.75rem 1.5rem' }}>
                Start My Free Quote
              </Link>
            </div>
          </div>

          {/* Right — form */}
          <div className="reveal">
            <div style={{ marginBottom: '2.5rem' }}>
              <p className="section-label" style={{ color: '#6a7f96', marginBottom: '0.75rem' }}>
                Send a Message
              </p>
              <h2
                style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontWeight: 600,
                  fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                  color: '#0d2545',
                  margin: 0,
                }}
              >
                We&#39;d Love to Hear From You
              </h2>
            </div>

            {/* Success */}
            {status === 'success' && (
              <div
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(30,58,95,0.1)',
                  padding: '2rem',
                  marginBottom: '2rem',
                }}
              >
                <p
                  style={{
                    fontFamily: '"Cormorant Garamond", Georgia, serif',
                    fontWeight: 600,
                    fontSize: '1.4rem',
                    color: '#0d2545',
                    margin: '0 0 0.5rem 0',
                  }}
                >
                  Message sent.
                </p>
                <p
                  style={{
                    fontFamily: 'Epilogue, sans-serif',
                    fontWeight: 300,
                    fontSize: '0.9rem',
                    color: '#3a5270',
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  Thank you for reaching out. We&#39;ll be in touch within one business day.
                </p>
              </div>
            )}

            {/* Error */}
            {status === 'error' && (
              <div
                style={{
                  backgroundColor: '#fff5f5',
                  border: '1px solid rgba(192,57,43,0.2)',
                  padding: '1.25rem 1.5rem',
                  marginBottom: '1.5rem',
                }}
              >
                <p
                  style={{
                    fontFamily: 'Epilogue, sans-serif',
                    fontWeight: 300,
                    fontSize: '0.88rem',
                    color: '#c0392b',
                    margin: 0,
                  }}
                >
                  {serverMessage || 'Something went wrong. Please try again or email us directly at brandonaioinsurance@gmail.com'}
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem' }} className="form-two-col">
                <div>
                  <label htmlFor="name" style={labelStyle}>
                    Full Name <span style={{ color: '#c0392b' }}>*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className={`form-input${errors.name ? ' form-input-error' : ''}`}
                  />
                  {errors.name && <span style={errorStyle}>{errors.name}</span>}
                </div>

                <div>
                  <label htmlFor="email" style={labelStyle}>
                    Email Address <span style={{ color: '#c0392b' }}>*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`form-input${errors.email ? ' form-input-error' : ''}`}
                  />
                  {errors.email && <span style={errorStyle}>{errors.email}</span>}
                </div>
              </div>

              <div>
                <label htmlFor="subject" style={labelStyle}>
                  Subject <span style={{ color: '#c0392b' }}>*</span>
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="e.g., Question about IUL for truckers"
                  className={`form-input${errors.subject ? ' form-input-error' : ''}`}
                />
                {errors.subject && <span style={errorStyle}>{errors.subject}</span>}
              </div>

              <div>
                <label htmlFor="message" style={labelStyle}>
                  Message <span style={{ color: '#c0392b' }}>*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us what&#39;s on your mind. We&#39;ll respond with honest, straightforward information — no pressure."
                  className={`form-input${errors.message ? ' form-input-error' : ''}`}
                  style={{ resize: 'none' }}
                />
                {errors.message && <span style={errorStyle}>{errors.message}</span>}
              </div>

              <div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary"
                  style={{ opacity: status === 'loading' ? 0.6 : 1, cursor: status === 'loading' ? 'not-allowed' : 'pointer' }}
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
                <p
                  style={{
                    fontFamily: 'Epilogue, sans-serif',
                    fontWeight: 300,
                    fontSize: '0.72rem',
                    color: '#6a7f96',
                    margin: '1rem 0 0 0',
                    lineHeight: 1.7,
                  }}
                >
                  By submitting this form, you agree to our{' '}
                  <Link href="/privacy-policy" style={{ color: '#0d2545', textDecoration: 'underline' }}>
                    Privacy Policy
                  </Link>
                  . We will never sell your information.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section style={{ backgroundColor: '#0d2545', padding: 'clamp(5rem, 8vw, 7rem) 2rem' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }} className="reveal">
          <h2
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontWeight: 600,
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              color: '#ffffff',
              margin: '0 0 1rem 0',
              lineHeight: 1.1,
            }}
          >
            Not Sure What You Need?
            <br />
            Start With a Quote.
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
            Our quote form takes less than 3 minutes. No commitment, no pressure.
          </p>
          <Link href="/quote" className="btn-gold">
            Get My Free Quote
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 600px) { .form-two-col { grid-template-columns: 1fr !important; gap: 2rem !important; } }
      `}</style>
    </>
  );
}
