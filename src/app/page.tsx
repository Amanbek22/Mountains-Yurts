import { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Tours from '@/components/Tours';
import Testimonials from '@/components/Testimonials';
import Gallery from '@/components/Gallery';
import BookingForm from '@/components/BookingForm';
import Footer from '@/components/Footer';
import { siteConfig } from '@/lib/seo';

// ============================================
// SEO METADATA - CUSTOMIZE FOR HOME PAGE
// ============================================
export const metadata: Metadata = {
  title: 'Explore Kyrgyzstan | Authentic Nomadic Adventures',
  description: 'Discover the untouched beauty of Kyrgyzstan with authentic nomadic experiences, horseback treks, and cultural adventures. Expert local guides and small group tours starting from $120.',
  keywords: [
    'Kyrgyzstan tours',
    'nomadic experiences',
    'Central Asia travel',
    'horseback trekking',
    'cultural tours Kyrgyzstan',
    'adventure travel Central Asia',
    'Tien Shan mountains',
    'Song-Kul lake tours',
    'authentic travel experiences',
    'small group tours Kyrgyzstan',
    'Bishkek tours',
    'Silk Road tours',
    'Kyrgyzstan travel',
    'Kyrgyzstan tourism',
    'Kyrgyzstan travel agency',
    'Kyrgyzstan travel agency',
  ],
  openGraph: {
    title: 'Explore Kyrgyzstan | Authentic Nomadic Adventures',
    description: 'Discover the untouched beauty of Kyrgyzstan with authentic nomadic experiences, horseback treks, and cultural adventures.',
    url: siteConfig.url,
    images: [
      {
        url: `${siteConfig.url}/images/og-home.jpg`, // TODO: Add home page OG image
        width: 1200,
        height: 630,
        alt: 'Kyrgyzstan nomadic adventures and mountain landscapes',
      },
    ],
  },
  twitter: {
    title: 'Explore Kyrgyzstan | Authentic Nomadic Adventures',
    description: 'Discover the untouched beauty of Kyrgyzstan with authentic nomadic experiences, horseback treks, and cultural adventures.',
    images: [`${siteConfig.url}/images/og-home.jpg`],
  },
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return (
    <>
      {/* Structured data for the home page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: siteConfig.name,
            url: siteConfig.url,
            description: siteConfig.description,
            potentialAction: {
              '@type': 'SearchAction',
              target: `${siteConfig.url}/tours?search={search_term_string}`,
              'query-input': 'required name=search_term_string',
            },
          }),
        }}
      />
      
      <Header />
      <main>
        <Hero />
        <About />
        <Tours />
        <Testimonials />
        <Gallery />
        <BookingForm />
      </main>
      <Footer />
    </>
  );
}