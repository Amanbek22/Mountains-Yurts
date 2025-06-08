import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AllToursContent from '@/components/AllToursContent';
import { siteConfig } from '@/lib/seo';

// ============================================
// SEO METADATA - CUSTOMIZE FOR ALL TOURS PAGE
// ============================================
export const metadata: Metadata = {
  title: 'All Tours | Kyrgyzstan Adventures & Cultural Experiences',
  description: 'Browse all our Kyrgyzstan tours and adventures. From 1-day treks to 12-day expeditions, cultural experiences to challenging climbs. Find your perfect Central Asia adventure.',
  keywords: [
    'Kyrgyzstan tours list',
    'all tours Kyrgyzstan',
    'Central Asia adventures',
    'Kyrgyzstan travel packages',
    'nomadic tours',
    'mountain trekking Kyrgyzstan',
    'cultural tours Central Asia',
    'adventure travel packages',
    'Kyrgyzstan tour operator',
    'small group tours',
  ],
  openGraph: {
    title: 'All Tours | Kyrgyzstan Adventures & Cultural Experiences',
    description: 'Browse all our Kyrgyzstan tours and adventures. From 1-day treks to 12-day expeditions, find your perfect Central Asia adventure.',
    url: `${siteConfig.url}/tours`,
    images: [
      {
        url: `${siteConfig.url}/images/og-tours.jpg`, // TODO: Add tours page OG image
        width: 1200,
        height: 630,
        alt: 'Collection of Kyrgyzstan tours and adventures',
      },
    ],
  },
  twitter: {
    title: 'All Tours | Kyrgyzstan Adventures & Cultural Experiences',
    description: 'Browse all our Kyrgyzstan tours and adventures. From 1-day treks to 12-day expeditions, find your perfect Central Asia adventure.',
    images: [`${siteConfig.url}/images/og-tours.jpg`],
  },
  alternates: {
    canonical: '/tours',
  },
};

export default function AllToursPage() {
  return (
    <>
      {/* Structured data for tours collection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Kyrgyzstan Tours Collection',
            description: 'Complete collection of tours and adventures in Kyrgyzstan',
            url: `${siteConfig.url}/tours`,
            mainEntity: {
              '@type': 'ItemList',
              name: 'Kyrgyzstan Tours',
              description: 'All available tours in Kyrgyzstan',
            },
          }),
        }}
      />
      
      <Header />
      <main>
        <AllToursContent />
      </main>
      <Footer />
    </>
  );
}