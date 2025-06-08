'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      country: "United Kingdom",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "This was the adventure of a lifetime! The nomadic experience was so authentic, and our guide Aibek shared incredible stories about Kyrgyz culture. The landscapes are absolutely breathtaking."
    },
    {
      id: 2,
      name: "Michael Chen",
      country: "USA",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "Song-Kul lake exceeded all my expectations. The horseback journey was challenging but rewarding, and sleeping in a yurt under the stars was magical. Highly recommend Nomad Soul Tours!"
    },
    {
      id: 3,
      name: "Emma Schmidt",
      country: "Germany",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "The winter tour was incredible! I never imagined Kyrgyzstan could be so beautiful in winter. The team was professional, friendly, and made sure we were comfortable throughout the journey."
    },
    {
      id: 4,
      name: "David Martinez",
      country: "Spain",
      image: "https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "As a digital nomad, I appreciated how well-organized everything was. The combination of adventure and cultural immersion was perfect. Already planning my next trip with Nomad Soul Tours! As a digital nomad, I appreciated how well-organized everything was. The combination of adventure and cultural immersion was perfect. Already planning my next trip with Nomad Soul Tours!"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Guests Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real experiences from travelers who discovered the magic of Kyrgyzstan with us
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>
              
              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 h-8 w-8 text-orange-200" />
                <p className="text-gray-700 text-lg leading-relaxed pl-6">
                  {testimonial.text}
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.country}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;