import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TourDetail from '@/components/TourDetail';
import StructuredData from '@/components/SEO/StructuredData';
import { generateTourMetadata, generateTourStructuredData } from '@/lib/seo';
import { allToursData } from '@/data/centralizedData';

type Props = {
  params: { tourId: string }
}

// Generate static params for all tours (for static generation)
export async function generateStaticParams() {
  return allToursData.map((tour) => ({
    tourId: tour.id,
  }));
}

// Generate metadata for each tour page
// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const tour = allToursData.find((t) => t.id === params.tourId);
  
//   if (!tour) {
//     return {
//       title: 'Tour Not Found',
//       description: 'The requested tour could not be found.',
//     };
//   }

//   return generateTourMetadata(tour);
// }

export default function TourPage({ params }: Props) {
  const tour = allToursData.find((t) => t.id === params.tourId);

  if (!tour) {
    notFound();
  }

  return (
    <>
      {/* Structured data for the specific tour */}
      <StructuredData data={generateTourStructuredData(tour)} />
      
      <Header />
      <main>
        <TourDetail tourId={params.tourId} />
      </main>
      <Footer />
    </>
  );
}