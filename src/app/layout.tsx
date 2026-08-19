import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import { BUSINESS_INFO } from '@/lib/data';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Coffee Land | Brooklyn Coffee Shop & Café',
  description: BUSINESS_INFO.metaDescription,
  keywords: [
    'Coffee Land Brooklyn',
    'Brooklyn coffee shop',
    'Grand Ave coffee',
    '450 Grand Ave',
    'Brooklyn café',
    'Avocado toast Brooklyn',
    'Specialty coffee Brooklyn',
    'Brooklyn breakfast café',
    'Takeout coffee Brooklyn',
  ],
  authors: [{ name: 'Coffee Land' }],
  openGraph: {
    title: 'Coffee Land | Brooklyn Coffee Shop & Café',
    description: BUSINESS_INFO.shortDescription,
    url: 'https://coffeelandbrooklyn.com',
    siteName: 'Coffee Land',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=85',
        width: 1200,
        height: 630,
        alt: 'Coffee Land - Brooklyn Neighborhood Coffee Shop',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Coffee Land | Brooklyn Coffee Shop & Café',
    description: BUSINESS_INFO.shortDescription,
    images: ['https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=85'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://coffeelandbrooklyn.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CafeOrCoffeeShop',
    name: BUSINESS_INFO.name,
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=85',
    telephone: BUSINESS_INFO.phone,
    url: 'https://coffeelandbrooklyn.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.street,
      addressLocality: BUSINESS_INFO.city,
      addressRegion: BUSINESS_INFO.state,
      postalCode: BUSINESS_INFO.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.6865,
      longitude: -73.9602,
    },
    priceRange: BUSINESS_INFO.priceRange,
    servesCuisine: ['Coffee', 'Breakfast', 'Bakery', 'American'],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: BUSINESS_INFO.rating.toString(),
      reviewCount: BUSINESS_INFO.reviewCount.toString(),
      bestRating: '5',
      worstRating: '1',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '07:00',
        closes: '18:00',
      },
    ],
    hasMenu: '#menu',
    paymentAccepted: 'Cash, Credit Card, Apple Pay',
  };

  return (
    <html lang="en" translate="no" className={`${playfair.variable} ${plusJakarta.variable} ${cormorant.variable} notranslate`}>
      <head>
        <meta name="google" content="notranslate" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-cream-50 text-espresso-900 font-sans antialiased selection:bg-caramel-200 selection:text-espresso-950">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-espresso-900 focus:text-cream-50 focus:rounded-md focus:shadow-lg"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
