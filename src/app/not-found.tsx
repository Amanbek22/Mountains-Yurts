import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Page Not Found | Nomad Soul Tours',
  description: 'The page you are looking for could not be found. Explore our Kyrgyzstan tours and adventures.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-16 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center px-4">
          <div className="mb-8">
            <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Page Not Found</h2>
            <p className="text-gray-600 mb-8">
              The page you are looking for might have been removed, had its name changed, 
              or is temporarily unavailable.
            </p>
          </div>
          
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Go to Homepage
            </Link>
            <div>
              <Link
                href="/tours"
                className="inline-block text-blue-600 hover:text-blue-700 font-medium"
              >
                Browse All Tours
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}