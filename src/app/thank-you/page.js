'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function ThankYouPage() {
  useEffect(() => {
    // Fire Meta Pixel Lead conversion event
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Lead');
    }
  }, []);

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#f4f7fb',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '8rem 2rem 4rem',
      }}
    >
      <div style={{ maxWidth: '560px', width: '100%', textAlign: 'center' }}>
        {/* Checkmark */}
        <div
          style={{
            width: '64px',
            height: '64px',
            border: '1px solid rgba(30,58,95,0.15)',
            backgroundColor: '#eaf0f8',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 2rem',
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0d2545" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <p
          style={{
            fontFamily: 'Epilogue, sans-serif',
            fontWeight: 700,
            fontSize: '0.68rem',
            textTransform: 'uppercase',
            letterSpacing: '0.25em',
            color: '#c8960c',
            marginBottom: '1rem',
          }}
        >
          Quote Request Received
        </p>

        <h1
          style={{
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontWeight: 600,
            fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
            color: '#0d2545',
            margin: '0 0 1.25rem 0',
            lineHeight: 1.1,
          }}
        >
          We&apos;re On It.
        </h1>

        <p
          style={{
            fontFamily: 'Epilogue, sans-serif',
            fontWeight: 300,
            fontSize: '1rem',
            color: '#3a5270',
            lineHeight: 1.8,
            margin: '0 0 0.75rem 0',
          }}
        >
          Thank you for reaching out. We&apos;ve received your information and will be in touch within one business day — often much sooner.
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
          Check your inbox — we&apos;ve sent a confirmation with next steps. In the meantime, feel free to learn more about how IUL works.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
          <Link href="/" className="btn-primary">Back to Home</Link>
          <Link href="/services" className="btn-secondary">Learn About IUL</Link>
        </div>
      </div>
    </div>
  );
}
