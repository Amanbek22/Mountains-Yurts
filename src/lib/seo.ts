import { Metadata } from 'next';

// ============================================
// SEO CONFIGURATION - CUSTOMIZE THESE VALUES
// ============================================

export const siteConfig = {
  // Basic site information
  name: 'Nomad Soul Tours',
  description: 'Discover the untouched beauty of Kyrgyzstan with authentic nomadic experiences, horseback treks, and cultural adventures. Expert local guides and small group tours.',
  url: 'https://nomadsoultours.com', // TODO: Replace with your actual domain
  
  // Social media and contact
  social: {
    twitter: '@nomadsoultours', // TODO: Replace with your Twitter handle
    facebook: 'nomadsoultours', // TODO: Replace with your Facebook page
    instagram: 'nomadsoultours', // TODO: Replace with your Instagram handle
    youtube: 'nomadsoultours', // TODO: Replace with your YouTube channel
  },
  
  // Business information
  business: {
    name: 'Nomad Soul Tours',
    email: 'info@nomadsoultours.kg',
    phone: '+996 555 123 456',
    address: 'Bishkek, Kyrgyzstan',
    coordinates: {
      latitude: 42.8746,
      longitude: 74.5698,
    },
  },
  
  // Default images for social sharing
  images: {
    default: '/images/og-default.jpg', // TODO: Add your default OG image
    logo: '/images/logo.png', // TODO: Add your logo
  },
};

// Default metadata for all pages
export const defaultMetadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'Kyrgyzstan tours',
    'nomadic experiences',
    'Central Asia travel',
    'horseback trekking',
    'cultural tours',
    'adventure travel',
    'Tien Shan mountains',
    'Song-Kul lake',
    'authentic travel',
    'small group tours',
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.images.default,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    site: siteConfig.social.twitter,
    creator: siteConfig.social.twitter,
    images: [siteConfig.images.default],
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
  verification: {
    google: '', // TODO: Add your Google Search Console verification code
    yandex: '', // TODO: Add your Yandex verification code
    yahoo: '', // TODO: Add your Yahoo verification code
    other: {
      // TODO: Add other verification codes as needed
      // 'facebook-domain-verification': '',
      // 'pinterest-site-verification': '',
    },
  },
};

// Generate metadata for tour pages
export function generateTourMetadata(tour: {
  title: string;
  description: string;
  image: string;
  price: string;
  duration: string;
  difficulty: string;
  id: string;
}): Metadata {
  const title = `${tour.title} - ${tour.duration} Adventure`;
  const description = `${tour.description} Starting from ${tour.price}. ${tour.difficulty} difficulty level. Book your Kyrgyzstan adventure today!`;
  const url = `${siteConfig.url}/tours/${tour.id}`;

  return {
    title,
    description,
    keywords: [
      tour.title.toLowerCase(),
      'Kyrgyzstan tour',
      tour.difficulty.toLowerCase(),
      'adventure travel',
      'nomadic experience',
      'Central Asia',
    ],
    alternates: {
      canonical: `/tours/${tour.id}`,
    },
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      images: [
        {
          url: tour.image,
          width: 1200,
          height: 630,
          alt: tour.title,
        },
      ],
    },
    twitter: {
      title,
      description,
      images: [tour.image],
    },
  };
}

// Generate structured data for tours
export function generateTourStructuredData(tour: {
  title: string;
  description: string;
  image: string;
  price: string;
  duration: string;
  rating: number;
  id: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: tour.title,
    description: tour.description,
    image: tour.image,
    url: `${siteConfig.url}/tours/${tour.id}`,
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
      telephone: siteConfig.business.phone,
      email: siteConfig.business.email,
    },
    offers: {
      '@type': 'Offer',
      price: tour.price.replace(/[^\d]/g, ''),
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: tour.rating,
      bestRating: 5,
      worstRating: 1,
      ratingCount: Math.floor(Math.random() * 50) + 10, // TODO: Replace with actual review count
    },
    duration: tour.duration,
    touristType: 'Adventure Travelers',
    itinerary: {
      '@type': 'ItemList',
      name: `${tour.title} Itinerary`,
    },
  };
}

// Generate structured data for the organization
export function generateOrganizationStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: siteConfig.business.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.images.logo}`,
    description: siteConfig.description,
    telephone: siteConfig.business.phone,
    email: siteConfig.business.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bishkek',
      addressCountry: 'KG',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.business.coordinates.latitude,
      longitude: siteConfig.business.coordinates.longitude,
    },
    sameAs: [
      `https://twitter.com/${siteConfig.social.twitter.replace('@', '')}`,
      `https://facebook.com/${siteConfig.social.facebook}`,
      `https://instagram.com/${siteConfig.social.instagram}`,
      `https://youtube.com/${siteConfig.social.youtube}`,
    ],
    serviceArea: {
      '@type': 'Country',
      name: 'Kyrgyzstan',
    },
    areaServed: 'Kyrgyzstan',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Kyrgyzstan Tours',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'TouristTrip',
            name: 'Cultural Tours',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'TouristTrip',
            name: 'Adventure Tours',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'TouristTrip',
            name: 'Trekking Tours',
          },
        },
      ],
    },
  };
}