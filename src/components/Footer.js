import Link from 'next/link';

const carriers = [
  'Americo',
  'Transamerica',
  'American Amicable',
  'Mutual of Omaha',
  'Aetna',
  'Core Bridge',
  'Ethos',
];

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/quote', label: 'Get a Quote' },
  { href: '/contact', label: 'Contact' },
];

const productLinks = [
  { href: '/services', label: 'Indexed Universal Life' },
  { href: '/services', label: 'IUL for Truckers' },
  { href: '/quote', label: 'Get a Free Quote' },
];

const legalLinks = [
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/disclaimer', label: 'Disclaimer' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: '#0d2545', color: '#ffffff' }}>
      <style>{`
        .footer-link {
          font-family: Epilogue, sans-serif;
          font-weight: 300;
          font-size: 0.88rem;
          color: rgba(255,255,255,0.45);
          text-decoration: none;
          transition: color 0.2s ease;
          display: inline-block;
        }
        .footer-link:hover {
          color: #ffffff;
        }
        .footer-email {
          font-family: Epilogue, sans-serif;
          font-size: 0.8rem;
          font-weight: 300;
          color: rgba(255,255,255,0.65);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .footer-email:hover {
          color: rgba(255,255,255,0.9);
        }
        .footer-bottom-link {
          font-family: Epilogue, sans-serif;
          font-weight: 300;
          font-size: 0.65rem;
          color: rgba(255,255,255,0.32);
          text-decoration: none;
          transition: color 0.2s ease;
          letter-spacing: 0.04em;
        }
        .footer-bottom-link:hover {
          color: rgba(255,255,255,0.6);
        }
        .footer-section-label {
          font-family: Epilogue, sans-serif;
          font-size: 0.68rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: #c8960c;
          margin-bottom: 1.25rem;
        }
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 540px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      {/* Main grid */}
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '5rem 2rem 3.5rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '3rem',
        }}
        className="footer-grid"
      >
        {/* Column 1 — Brand */}
        <div style={{ gridColumn: 'span 1' }}>
          <Link
            href="/"
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: '1.5rem',
              fontWeight: 600,
              color: '#ffffff',
              textDecoration: 'none',
              display: 'block',
              lineHeight: 1.2,
              marginBottom: '1rem',
            }}
          >
            Family First Life Network
          </Link>
          <p
            style={{
              fontFamily: 'Epilogue, sans-serif',
              fontWeight: 300,
              fontSize: '0.88rem',
              color: 'rgba(255,255,255,0.55)',
              lineHeight: 1.8,
              marginBottom: '1.5rem',
              maxWidth: '260px',
            }}
          >
            Helping truck drivers and working families secure their financial future with
            Indexed Universal Life insurance.
          </p>
          <a
            href="mailto:brandonaioinsurance@gmail.com"
            className="footer-email"
          >
            brandonaioinsurance@gmail.com
          </a>
        </div>

        {/* Column 2 — Navigation */}
        <div>
          <p className="footer-section-label">Navigation</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {navLinks.map(({ href, label }) => (
              <li key={href} style={{ marginBottom: '0.6rem' }}>
                <Link href={href} className="footer-link">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Products */}
        <div>
          <p className="footer-section-label">Products</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0' }}>
            {productLinks.map(({ href, label }) => (
              <li key={label} style={{ marginBottom: '0.6rem' }}>
                <Link href={href} className="footer-link">
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <p className="footer-section-label">Legal</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {legalLinks.map(({ href, label }) => (
              <li key={href} style={{ marginBottom: '0.6rem' }}>
                <Link href={href} className="footer-link">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 — Carriers */}
        <div>
          <p className="footer-section-label">Our Carriers</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {carriers.map((carrier) => (
              <li
                key={carrier}
                style={{
                  fontFamily: 'Epilogue, sans-serif',
                  fontWeight: 300,
                  fontSize: '0.88rem',
                  color: 'rgba(255,255,255,0.45)',
                  padding: '0.55rem 0',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                {carrier}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          backgroundColor: '#091c38',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '1.75rem 2rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
          }}
        >
          <p
            style={{
              fontFamily: 'Epilogue, sans-serif',
              fontWeight: 300,
              fontSize: '0.65rem',
              color: 'rgba(255,255,255,0.32)',
              letterSpacing: '0.04em',
              margin: 0,
            }}
          >
            &copy; {currentYear} Family First Life Network. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {legalLinks.map(({ href, label }) => (
              <Link key={href} href={href} className="footer-bottom-link">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Disclaimer text */}
      <div
        style={{
          backgroundColor: '#091c38',
          borderTop: '1px solid rgba(255,255,255,0.04)',
          padding: '1.5rem 2rem',
          maxWidth: '1280px',
          margin: '0 auto',
        }}
      >
        <p
          style={{
            fontFamily: 'Epilogue, sans-serif',
            fontWeight: 300,
            fontSize: '0.65rem',
            color: 'rgba(255,255,255,0.2)',
            lineHeight: 1.8,
            letterSpacing: '0.02em',
            margin: 0,
          }}
        >
          Insurance products are offered through Family First Life Network, an independent life insurance agency. Policy
          benefits, features, and availability may vary by state and carrier. This website is for informational purposes
          only and does not constitute financial, legal, or tax advice. Please review all policy documents carefully
          before purchasing. Not all products available in all states.
        </p>
      </div>
    </footer>
  );
}
