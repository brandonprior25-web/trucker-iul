import './globals.css';
import Script from 'next/script';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID || 'YOUR_PIXEL_ID';

export const metadata = {
  metadataBase: new URL('https://truckeriul.com'),
  title: {
    default: 'Trucker IUL | Life Insurance for Truck Drivers | Family First Life Network',
    template: '%s | Trucker IUL',
  },
  description:
    'IUL life insurance built for truck drivers and working families. Protect your family, build tax-free wealth, and ride with confidence. Get a free quote today.',
  keywords: [
    'trucker life insurance',
    'IUL for truck drivers',
    'indexed universal life',
    'CDL driver insurance',
    'Family First Life',
    'life insurance for truckers',
    'tax-free retirement',
    'owner operator life insurance',
    'working family life insurance',
  ],
  authors: [{ name: 'Family First Life Network' }],
  creator: 'Family First Life Network',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://truckeriul.com',
    siteName: 'Trucker IUL — Family First Life Network',
    title: 'Trucker IUL | Life Insurance for Truck Drivers',
    description:
      'IUL life insurance built for truck drivers and working families. Protect your family, build tax-free wealth, and ride with confidence.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Trucker IUL — Family First Life Network',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trucker IUL | Life Insurance for Truck Drivers',
    description: 'Life insurance built for the road. IUL policies for truck drivers and working families.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;600&family=Epilogue:wght@300;700&display=swap"
          rel="stylesheet"
        />
        {/* Facebook Pixel */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${FB_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
      </head>
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
