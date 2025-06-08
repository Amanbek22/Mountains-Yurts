import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { defaultMetadata, generateOrganizationStructuredData } from '@/lib/seo';
import StructuredData from '@/components/SEO/StructuredData';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import SocialButtons from '@/components/SocialButtons';

// ============================================
// FONT CONFIGURATION - CUSTOMIZE AS NEEDED
// ============================================
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap', // Improves loading performance
  variable: '--font-inter',
});

// Export metadata for SEO
export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Preconnect to external domains for better performance */}
        <link rel="preconnect" href="https://images.pexels.com" />
        <link rel="dns-prefetch" href="https://images.pexels.com" />
        
        {/* Favicon and app icons - TODO: Replace with your actual icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        
        {/* Structured data for the organization */}
        <StructuredData data={generateOrganizationStructuredData()} />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        <SocialButtons />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}