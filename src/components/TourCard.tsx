'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Users, Star } from 'lucide-react';
import { DetailedTour } from '@/data/centralizedData';

interface TourCardProps {
  tour: DetailedTour;
}

const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  const getDifficultyColor = (difficulty: string) => {
    if (difficulty.toLowerCase().includes('easy')) return 'text-green-600 bg-green-100';
    if (difficulty.toLowerCase().includes('moderate')) return 'text-yellow-600 bg-yellow-100';
    if (difficulty.toLowerCase().includes('challenging')) return 'text-red-600 bg-red-100';
    return 'text-gray-600 bg-gray-100';
  };

  return (
    <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
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
        <div className="absolute top-4 left-4">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(tour.difficulty)}`}>
            {tour.difficulty}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{tour.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{tour.description}</p>
        
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
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
  );
};

export default TourCard;