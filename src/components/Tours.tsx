'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Users, Star } from 'lucide-react';
import { allToursData } from '@/data/centralizedData';

const Tours = () => {
  // Get only the first 3 tours for the homepage
  const featuredTours = allToursData.slice(0, 3);

  return (
    <section id="tours" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Popular Tours</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Carefully crafted adventures that showcase the best of Kyrgyzstan's 
            natural beauty and cultural heritage
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredTours.map((tour) => (
            <article key={tour.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <Image 
                  src={tour.image} 
                  alt={tour.title}
                  width={600}
                  height={300}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-semibold">{tour.rating}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  <Link href={`/tours/${tour.id}`} className="hover:text-blue-600 transition-colors">
                    {tour.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{tour.description}</p>
                
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{tour.groupSize}</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-orange-600">{tour.price}</span>
                  <Link 
                    href={`/tours/${tour.id}`}
                    className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Link 
            href="/tours"
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
          >
            View All Tours
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Tours;