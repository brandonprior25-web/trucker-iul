'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const ageRanges = [
  '18 – 24',
  '25 – 34',
  '35 – 44',
  '45 – 54',
  '55 – 64',
  '65+',
];

const coverageOptions = [
  'Indexed Universal Life (IUL)',
  "I'm not sure — help me decide",
];

const contactTimes = [
  'Morning (8 AM – 12 PM)',
  'Afternoon (12 PM – 4 PM)',
  'Evening (4 PM – 7 PM)',
  'Weekends only',
  'Email only — do not call',
];

const states = [
  'Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut',
  'Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa',
  'Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan',
  'Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire',
  'New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio',
  'Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota',
  'Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia',
  'Wisconsin','Wyoming',
];

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  ageRange: '',
  state: '',
  coverageInterest: '',
  preferredContactTime: '',
  notes: '',
  consent: false,
};

const initialErrors = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  ageRange: '',
  state: '',
  coverageInterest: '',
  preferredContactTime: '',
  consent: '',
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

const sectionHeadStyle = {
  fontFamily: 'Epilogue, sans-serif',
  fontWeight: 700,
  fontSize: '0.68rem',
  textTransform: 'uppercase',
  letterSpacing: '0.22em',
  color: '#6a7f96',
  margin: '0 0 2rem 0',
  paddingBottom: '0.75rem',
  borderBottom: '1px solid rgba(30,58,95,0.1)',
};

export default function QuotePage() {
  const router = useRouter();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState(initialErrors);
  const [status, setStatus] = useState('idle'); // idle | loading | error
  const [serverMessage, setServerMessage] = useState('');

  const validate = () => {
    const newErrors = { ...initialErrors };
    let valid = true;

    if (!form.firstName.trim()) { newErrors.firstName = 'First name is required.'; valid = false; }
    if (!form.lastName.trim()) { newErrors.lastName = 'Last name is required.'; valid = false; }
    if (!form.email.trim()) {
      newErrors.email = 'Email address is required.'; valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address.'; valid = false;
    }
    if (form.phone && !/^[\d\s\-().+]{7,15}$/.test(form.phone)) {
      newErrors.phone = 'Please enter a valid phone number.'; valid = false;
    }
    if (!form.ageRange) { newErrors.ageRange = 'Please select your age range.'; valid = false; }
    if (!form.state) { newErrors.state = 'Please select your state.'; valid = false; }
    if (!form.coverageInterest) { newErrors.coverageInterest = 'Please select your coverage interest.'; valid = false; }
    if (!form.preferredContactTime) { newErrors.preferredContactTime = 'Please select a preferred contact time.'; valid = false; }
    if (!form.consent) { newErrors.consent = 'You must agree to be contacted to receive your quote.'; valid = false; }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setForm((prev) => ({ ...prev, [name]: newValue }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      const firstErrorField = document.querySelector('[data-error="true"]');
      if (firstErrorField) firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setStatus('loading');
    setServerMessage('');

    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        router.push('/thank-you');
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
            Free — No Obligation
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
            Get Your Free IUL
            <br />
            Quote Today
          </h1>
          <p
            style={{
              fontFamily: 'Epilogue, sans-serif',
              fontWeight: 300,
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.65)',
              lineHeight: 1.8,
              margin: '0 0 2rem 0',
              maxWidth: '480px',
            }}
          >
            Fill out the short form below and we&#39;ll put together personalized options
            for your family. No pressure, no spam. Just real information.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
            {['Takes under 3 minutes', 'Your info stays private', 'Response within 24 hours'].map((item, i) => (
              <span
                key={i}
                style={{
                  fontFamily: 'Epilogue, sans-serif',
                  fontWeight: 300,
                  fontSize: '0.8rem',
                  color: 'rgba(255,255,255,0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <span style={{ width: '4px', height: '4px', backgroundColor: '#c8960c', display: 'inline-block', flexShrink: 0 }} />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FORM ─── */}
      <section style={{ backgroundColor: '#f4f7fb', padding: 'clamp(5rem, 8vw, 7rem) 2rem' }}>
        <div
          style={{
            maxWidth: '860px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '0',
          }}
        >
          {/* Error banner */}
          {status === 'error' && (
            <div
              style={{
                backgroundColor: '#fff5f5',
                border: '1px solid rgba(192,57,43,0.2)',
                padding: '1.25rem 1.5rem',
                marginBottom: '2rem',
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
                {serverMessage || 'Please try again or email us directly at brandonaioinsurance@gmail.com'}
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            {/* Section 1 */}
            <div style={{ backgroundColor: '#ffffff', padding: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1px' }}>
              <p style={sectionHeadStyle}>01 — Personal Information</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem 3rem' }} className="form-two-col">
                <div data-error={!!errors.firstName}>
                  <label htmlFor="firstName" style={labelStyle}>
                    First Name <span style={{ color: '#c0392b' }}>*</span>
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    className={`form-input${errors.firstName ? ' form-input-error' : ''}`}
                  />
                  {errors.firstName && <span style={errorStyle}>{errors.firstName}</span>}
                </div>

                <div data-error={!!errors.lastName}>
                  <label htmlFor="lastName" style={labelStyle}>
                    Last Name <span style={{ color: '#c0392b' }}>*</span>
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    autoComplete="family-name"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Smith"
                    className={`form-input${errors.lastName ? ' form-input-error' : ''}`}
                  />
                  {errors.lastName && <span style={errorStyle}>{errors.lastName}</span>}
                </div>

                <div data-error={!!errors.email}>
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

                <div data-error={!!errors.phone}>
                  <label htmlFor="phone" style={labelStyle}>
                    Phone{' '}
                    <span style={{ color: '#c0c0c0', fontWeight: 300, textTransform: 'none', letterSpacing: 0 }}>
                      (optional)
                    </span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(555) 000-0000"
                    className={`form-input${errors.phone ? ' form-input-error' : ''}`}
                  />
                  {errors.phone && <span style={errorStyle}>{errors.phone}</span>}
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div style={{ backgroundColor: '#ffffff', padding: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1px' }}>
              <p style={sectionHeadStyle}>02 — Coverage Details</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem 3rem' }} className="form-two-col">
                <div data-error={!!errors.ageRange}>
                  <label htmlFor="ageRange" style={labelStyle}>
                    Age Range <span style={{ color: '#c0392b' }}>*</span>
                  </label>
                  <select
                    id="ageRange"
                    name="ageRange"
                    value={form.ageRange}
                    onChange={handleChange}
                    className={`form-input${errors.ageRange ? ' form-input-error' : ''}`}
                  >
                    <option value="">Select your age range</option>
                    {ageRanges.map((r) => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>
                  {errors.ageRange && <span style={errorStyle}>{errors.ageRange}</span>}
                </div>

                <div data-error={!!errors.state}>
                  <label htmlFor="state" style={labelStyle}>
                    State of Residence <span style={{ color: '#c0392b' }}>*</span>
                  </label>
                  <select
                    id="state"
                    name="state"
                    value={form.state}
                    onChange={handleChange}
                    className={`form-input${errors.state ? ' form-input-error' : ''}`}
                  >
                    <option value="">Select your state</option>
                    {states.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  {errors.state && <span style={errorStyle}>{errors.state}</span>}
                </div>

                <div style={{ gridColumn: '1 / -1' }} data-error={!!errors.coverageInterest}>
                  <label htmlFor="coverageInterest" style={labelStyle}>
                    Coverage Interest <span style={{ color: '#c0392b' }}>*</span>
                  </label>
                  <select
                    id="coverageInterest"
                    name="coverageInterest"
                    value={form.coverageInterest}
                    onChange={handleChange}
                    className={`form-input${errors.coverageInterest ? ' form-input-error' : ''}`}
                  >
                    <option value="">What type of coverage are you looking for?</option>
                    {coverageOptions.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                  {errors.coverageInterest && <span style={errorStyle}>{errors.coverageInterest}</span>}
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div style={{ backgroundColor: '#ffffff', padding: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1px' }}>
              <p style={sectionHeadStyle}>03 — Contact Preferences</p>
              <div style={{ marginBottom: '2.5rem' }} data-error={!!errors.preferredContactTime}>
                <label htmlFor="preferredContactTime" style={labelStyle}>
                  Best Time to Reach You <span style={{ color: '#c0392b' }}>*</span>
                </label>
                <select
                  id="preferredContactTime"
                  name="preferredContactTime"
                  value={form.preferredContactTime}
                  onChange={handleChange}
                  className={`form-input${errors.preferredContactTime ? ' form-input-error' : ''}`}
                >
                  <option value="">Select a preferred time</option>
                  {contactTimes.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
                {errors.preferredContactTime && <span style={errorStyle}>{errors.preferredContactTime}</span>}
              </div>

              <div>
                <label htmlFor="notes" style={labelStyle}>
                  Additional Notes{' '}
                  <span style={{ color: '#c0c0c0', fontWeight: 300, textTransform: 'none', letterSpacing: 0 }}>
                    (optional)
                  </span>
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  value={form.notes}
                  onChange={handleChange}
                  placeholder="Tell us anything that might help — your occupation, health conditions, budget range, or specific questions. The more we know, the better we can help."
                  className="form-input"
                  style={{ resize: 'none' }}
                />
              </div>
            </div>

            {/* Consent */}
            <div
              style={{
                backgroundColor: '#eaf0f8',
                padding: 'clamp(2rem, 4vw, 3rem)',
                marginBottom: '1px',
              }}
              data-error={!!errors.consent}
            >
              <label
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  cursor: 'pointer',
                }}
              >
                <div style={{ position: 'relative', flexShrink: 0, marginTop: '3px' }}>
                  <input
                    type="checkbox"
                    name="consent"
                    id="consent"
                    checked={form.consent}
                    onChange={handleChange}
                    style={{
                      position: 'absolute',
                      opacity: 0,
                      width: '20px',
                      height: '20px',
                      cursor: 'pointer',
                    }}
                  />
                  <div
                    style={{
                      width: '20px',
                      height: '20px',
                      border: `1px solid ${form.consent ? '#0d2545' : errors.consent ? '#c0392b' : 'rgba(30,58,95,0.25)'}`,
                      backgroundColor: form.consent ? '#0d2545' : 'transparent',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    {form.consent && (
                      <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
                        <path d="M1 4l3 3 6-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                </div>
                <span
                  style={{
                    fontFamily: 'Epilogue, sans-serif',
                    fontWeight: 300,
                    fontSize: '0.88rem',
                    color: '#3a5270',
                    lineHeight: 1.8,
                  }}
                >
                  <strong style={{ fontWeight: 700, color: '#0d2545' }}>I agree to be contacted</strong> by Family First Life Network regarding my insurance quote request. I understand I may be contacted by email and/or phone. I can opt out at any time. By submitting this form, I agree to the{' '}
                  <Link href="/privacy-policy" style={{ color: '#0d2545', textDecoration: 'underline' }}>
                    Privacy Policy
                  </Link>{' '}
                  and{' '}
                  <Link href="/disclaimer" style={{ color: '#0d2545', textDecoration: 'underline' }}>
                    Disclaimer
                  </Link>
                  . <span style={{ color: '#c0392b' }}>*</span>
                </span>
              </label>
              {errors.consent && <span style={{ ...errorStyle, marginTop: '0.75rem', marginLeft: '2.5rem' }}>{errors.consent}</span>}
            </div>

            {/* Submit */}
            <div style={{ backgroundColor: '#ffffff', padding: 'clamp(2rem, 4vw, 3rem)' }}>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary"
                style={{
                  width: '100%',
                  opacity: status === 'loading' ? 0.6 : 1,
                  cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                  fontSize: '0.75rem',
                  padding: '1.1rem 2rem',
                }}
              >
                {status === 'loading' ? 'Submitting Your Request...' : 'Submit My Quote Request'}
              </button>
              <p
                style={{
                  fontFamily: 'Epilogue, sans-serif',
                  fontWeight: 300,
                  fontSize: '0.72rem',
                  color: '#6a7f96',
                  margin: '1rem 0 0 0',
                  textAlign: 'center',
                  lineHeight: 1.7,
                }}
              >
                Your information is encrypted and will never be sold to third parties.
              </p>
            </div>
          </form>

          {/* What happens next */}
          <div
            style={{
              backgroundColor: '#eaf0f8',
              padding: 'clamp(2rem, 4vw, 3rem)',
              marginTop: '2rem',
            }}
          >
            <p style={{ ...sectionHeadStyle, marginBottom: '1.5rem' }}>What Happens After You Submit?</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {[
                { step: '01', text: 'We receive your request and review your information.' },
                { step: '02', text: 'We shop our 7 carrier partners for the best options that fit your age, state, and coverage needs.' },
                { step: '03', text: 'We reach out at your preferred time to walk you through what we found. No pressure, just information.' },
                { step: '04', text: "If you like what you see, we handle the application. If not, no hard feelings — the quote is always free." },
              ].map((item, i) => (
                <div
                  key={item.step}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '48px 1fr',
                    gap: '1.25rem',
                    padding: '1.25rem 0',
                    borderBottom: i < 3 ? '1px solid rgba(30,58,95,0.08)' : 'none',
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
                    {item.step}
                  </span>
                  <p
                    style={{
                      fontFamily: 'Epilogue, sans-serif',
                      fontWeight: 300,
                      fontSize: '0.9rem',
                      color: '#3a5270',
                      lineHeight: 1.8,
                      margin: '0.25rem 0 0 0',
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) { .form-two-col { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}
