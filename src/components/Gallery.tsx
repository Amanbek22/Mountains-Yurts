'use client';

import React from 'react';

const Gallery = () => {
  const images = [
    {
      id: 1,
      url: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQsSgyKjlDZrOGAITsMEsNb77y1LTYmP8vXO3cdQ1cyZ3NJFbnW8h8AWcnN-Peom8eh9ou86qHIBrKn6IXvTP2avGdfXVG21jeCI5s7AA",
      alt: "Tien Shan mountains"
    },
    {
      id: 2,
      url: "https://trvlland.com/wp-content/uploads/2021/09/kyrgyzstan_yurts_songkul-1024x576.jpg",
      alt: "Traditional yurt"
    },
    {
      id: 3,
      url: "https://central-asia.guide/wp-content/uploads/2023/05/Kyrgyz-horse-tours-1024x682.jpg",
      alt: "Horseback riding"
    },
    {
      id: 4,
      url: "https://horsetours.ge/files/products/iHLDeZH5fBkeJ0MXWzGiX1vRWiT7Tw.JPG",
      alt: "Local guide with horses"
    },
    {
      id: 5,
      url: "https://triptokyrgyzstan.com/sites/default/files/styles/blog/public/images/2019-03/712a9bdda17970ce77e1fdc0990fbeb5.jpeg.webp?itok=iy7xUTTI",
      alt: "Mountain lake reflection"
    },
    {
      id: 6,
      url: "https://kyrgyzstan-tourism.com/wp-content/uploads/2019/03/Food_in-yurta.jpg",
      alt: "Traditional food"
    },
    {
      id: 7,
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/20/ff/88/nomadic-yurt-among-snowy.jpg?w=1200&h=-1&s=1",
      alt: "Son kol"
    },
    
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience Kyrgyzstan</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A glimpse into the incredible landscapes, culture, and adventures waiting for you
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div 
              key={image.id} 
              className={`relative group overflow-hidden rounded-lg ${
                index === 0 || index === 3 ? 'md:row-span-2' : ''
              }`}
            >
              <img 
                src={image.url} 
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;