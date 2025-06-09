'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Check, ArrowLeft, Calendar, Users, Star, MapPin } from 'lucide-react';
import { allToursData } from '@/data/centralizedData';

interface TourDetailProps {
  tourId: string;
}

const TourDetail: React.FC<TourDetailProps> = ({ tourId }) => {
  const router = useRouter();
  const tour = allToursData.find(t => t.id === tourId);

  const handleBookingClick = () => {
    window.open('https://wa.me/996707629617', '_blank');
  };

  if (!tour) {
    return <div>Tour not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Back button */}
      <button
        onClick={() => router.back()}
        className="flex items-center text-blue-400 hover:text-blue-600 mb-8"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to Tours
      </button>

      {/* Tour header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{tour.title}</h1>
        <p className="text-2xl text-gray-600 mb-6">{tour.subtitle}</p>
        <div className="flex flex-wrap gap-4 text-gray-600">
          <div className="flex items-center">
            <span className="font-semibold mr-2">Duration:</span>
            {tour.duration}
          </div>
          <div className="flex items-center">
            <span className="font-semibold mr-2">Group Size:</span>
            {tour.groupSize}
          </div>
          <div className="flex items-center">
            <span className="font-semibold mr-2">Difficulty:</span>
            {tour.difficulty}
          </div>
          <div className="flex items-center">
            <span className="font-semibold mr-2">Season:</span>
            {tour.season}
          </div>
        </div>
      </div>

      {/* Main image */}
      <div className="relative h-[500px] mb-12 rounded-xl overflow-hidden">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Tour content */}
      <div className="grid md:grid-cols-3 gap-12">
        {/* Main content */}
        <div className="md:col-span-2 space-y-12">
          {/* Description */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Tour Description</h2>
            <p className="text-gray-700 leading-relaxed">{tour.description}</p>
          </section>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-blue-600" />
              <span className="text-gray-700">{tour.duration}</span>
            </div>
            <div className="flex items-center gap-3">
              <Users className="h-5 w-5 text-blue-600" />
              <span className="text-gray-700">{tour.groupSize}</span>
            </div>
            <div className="flex items-center gap-3">
              <Star className="h-5 w-5 text-yellow-500 fill-current" />
              <span className="text-gray-700">{tour.rating} rating</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-green-600" />
              <span className="text-gray-700">{tour.difficulty}</span>
            </div>
          </div>

          {/* Highlights */}
          <section>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Tour Highlights</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {tour.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Itinerary */}
          <section>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Daily Itinerary</h3>
            <div className="space-y-6">
              {tour.itinerary.map((day, index) => (
                <div key={index} className="border-l-4 border-orange-600 pl-6 pb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                      {day.day}
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900">{day.title}</h4>
                  </div>
                  <p className="text-gray-700">{day.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Gallery */}
          <section>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Photo Gallery</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {tour.gallery.map((image, index) => (
                <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src={image}
                    alt={`${tour.title} - Photo ${index + 1}`}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Price card */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="text-center mb-6">
              <div className="text-3xl font-bold text-orange-600 mb-2">{tour.price}</div>
              <div className="text-gray-600">per person</div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Duration:</span>
                <span className="font-semibold">{tour.duration}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Group Size:</span>
                <span className="font-semibold">{tour.groupSize}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Difficulty:</span>
                <span className="font-semibold">{tour.difficulty}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Best Season:</span>
                <span className="font-semibold">{tour.season}</span>
              </div>
            </div>

            <button onClick={handleBookingClick} className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg hover:bg-orange-700 transition-colors">
              Book Now
            </button>
          </div>

          {/* Included/Not Included */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">What's Included</h3>
            <ul className="space-y-3">
              {tour.included.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Not Included</h3>
            <ul className="space-y-3">
              {tour.notIncluded.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0">×</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetail;