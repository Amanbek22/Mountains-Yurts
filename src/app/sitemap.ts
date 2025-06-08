import { MetadataRoute } from 'next';
import { allToursData } from '@/data/centralizedData';
import { siteConfig } from '@/lib/seo';

// Generate sitemap for better SEO
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/tours`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ];

  // Dynamic tour pages
  const tourPages = allToursData.map((tour) => ({
    url: `${baseUrl}/tours/${tour.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...tourPages];
}