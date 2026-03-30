'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/quote', label: 'Quote' },
  { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: '64px',
        backgroundColor: 'rgba(255,255,255,0.97)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: scrolled
          ? '1px solid rgba(30,58,95,0.1)'
          : '1px solid rgba(30,58,95,0.06)',
        transition: 'border-color 0.25s ease',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 2rem',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontSize: '1.35rem',
            fontWeight: 600,
            letterSpacing: '0.05em',
            color: '#0d2545',
            textDecoration: 'none',
            flexShrink: 0,
            lineHeight: 1,
          }}
        >
          Family First Life Network
        </Link>

        <nav
          style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}
          className="nav-desktop"
        >
          <div
            style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }}
            className="hidden-mobile"
          >
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`nav-link${isActive(href) ? ' active' : ''}`}
                style={{
                  fontFamily: 'Epilogue, system-ui, sans-serif',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.18em',
                  color: isActive(href) ? '#c8960c' : '#3a5270',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
              >
                {label}
              </Link>
            ))}
          </div>

          <Link
            href="/quote"
            className="btn-primary"
            style={{ padding: '0.65rem 1.4rem', fontSize: '0.68rem' }}
          >
            Get Started
          </Link>

          {/* Hamburger — visible below 1000px */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.4rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
            }}
            className="hamburger-btn"
          >
            <span
              style={{
                display: 'block',
                width: '22px',
                height: '1.5px',
                backgroundColor: '#0d2545',
                transformOrigin: 'center',
                transition: 'transform 0.25s ease, opacity 0.25s ease',
                transform: menuOpen ? 'translateY(6.5px) rotate(45deg)' : 'none',
              }}
            />
            <span
              style={{
                display: 'block',
                width: '22px',
                height: '1.5px',
                backgroundColor: '#0d2545',
                transition: 'opacity 0.25s ease',
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: 'block',
                width: '22px',
                height: '1.5px',
                backgroundColor: '#0d2545',
                transformOrigin: 'center',
                transition: 'transform 0.25s ease, opacity 0.25s ease',
                transform: menuOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none',
              }}
            />
          </button>
        </nav>
      </div>

      {/* Mobile overlay menu */}
      <div
        style={{
          position: 'fixed',
          top: '64px',
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '#ffffff',
          zIndex: 40,
          display: 'flex',
          flexDirection: 'column',
          padding: '3rem 2rem',
          transition: 'opacity 0.25s ease, visibility 0.25s ease',
          opacity: menuOpen ? 1 : 0,
          visibility: menuOpen ? 'visible' : 'hidden',
        }}
      >
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: '2.2rem',
                fontWeight: 600,
                color: isActive(href) ? '#c8960c' : '#0d2545',
                textDecoration: 'none',
                padding: '0.6rem 0',
                borderBottom: '1px solid rgba(30,58,95,0.07)',
                transition: 'color 0.2s ease',
              }}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div style={{ marginTop: '2.5rem' }}>
          <Link href="/quote" className="btn-primary">
            Get My Free Quote
          </Link>
        </div>
        <div style={{ marginTop: 'auto', paddingTop: '2rem' }}>
          <p style={{
            fontFamily: 'Epilogue, sans-serif',
            fontSize: '0.75rem',
            color: '#6a7f96',
            letterSpacing: '0.05em',
          }}>
            brandonaioinsurance@gmail.com
          </p>
        </div>
      </div>

      <style>{`
        @media (min-width: 1000px) {
          .hamburger-btn { display: none !important; }
          .hidden-mobile { display: flex !important; }
        }
        @media (max-width: 999px) {
          .hidden-mobile { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
