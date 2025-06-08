'use client';

import React, { useState, useEffect } from 'react';
import TourCard from './TourCard';
import TourFilters from './TourFilters';
import { allToursData } from '@/data/centralizedData';
import { DetailedTour } from '@/data/centralizedData';

const AllToursContent = () => {
  const [filteredTours, setFilteredTours] = useState<DetailedTour[]>(allToursData);
  const [filters, setFilters] = useState({
    category: 'all',
    difficulty: 'all',
    duration: 'all',
    season: 'all'
  });

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let filtered = allToursData;

    if (filters.category !== 'all') {
      filtered = filtered.filter(tour => tour.category === filters.category);
    }

    if (filters.difficulty !== 'all') {
      filtered = filtered.filter(tour => tour.difficulty.toLowerCase().includes(filters.difficulty));
    }

    if (filters.duration !== 'all') {
      filtered = filtered.filter(tour => {
        const days = parseInt(tour.duration);
        switch (filters.duration) {
          case 'short': return days <= 3;
          case 'medium': return days >= 4 && days <= 7;
          case 'long': return days >= 8;
          default: return true;
        }
      });
    }

    if (filters.season !== 'all') {
      filtered = filtered.filter(tour => 
        tour.season.toLowerCase().includes(filters.season)
      );
    }

    setFilteredTours(filtered);
  }, [filters]);

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      category: 'all',
      difficulty: 'all',
      duration: 'all',
      season: 'all'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">All Tours</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Discover all our carefully crafted adventures across Kyrgyzstan. 
            From nomadic experiences to mountain treks, find your perfect journey.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <TourFilters 
              filters={filters}
              onFilterChange={handleFilterChange}
              onClearFilters={clearFilters}
              totalTours={filteredTours.length}
            />
          </div>

          {/* Tours Grid */}
          <div className="lg:w-3/4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 lg:mb-8 gap-4">
              <h2 className="text-2xl font-bold text-gray-900">
                {filteredTours.length} {filteredTours.length === 1 ? 'Tour' : 'Tours'} Found
              </h2>
              <div className="text-gray-600 text-sm sm:text-base">
                Showing all available adventures
              </div>
            </div>

            {filteredTours.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.5-.9-6.1-2.4" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No tours found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your filters to see more results.</p>
                <button 
                  onClick={clearFilters}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                {filteredTours.map((tour) => (
                  <TourCard key={tour.id} tour={tour} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllToursContent;