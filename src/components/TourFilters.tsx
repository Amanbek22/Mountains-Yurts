'use client';

import React, { useState } from 'react';
import { Filter, X, ChevronDown, ChevronUp } from 'lucide-react';

interface TourFiltersProps {
  filters: {
    category: string;
    difficulty: string;
    duration: string;
    season: string;
  };
  onFilterChange: (filterType: string, value: string) => void;
  onClearFilters: () => void;
  totalTours: number;
}

const TourFilters: React.FC<TourFiltersProps> = ({
  filters,
  onFilterChange,
  onClearFilters,
  totalTours
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const filterOptions = {
    category: [
      { value: 'all', label: 'All Categories' },
      { value: 'cultural', label: 'Cultural' },
      { value: 'adventure', label: 'Adventure' },
      { value: 'nature', label: 'Nature' },
      { value: 'winter', label: 'Winter Sports' },
      { value: 'trekking', label: 'Trekking' }
    ],
    difficulty: [
      { value: 'all', label: 'All Levels' },
      { value: 'easy', label: 'Easy' },
      { value: 'moderate', label: 'Moderate' },
      { value: 'challenging', label: 'Challenging' }
    ],
    duration: [
      { value: 'all', label: 'Any Duration' },
      { value: 'short', label: '1-3 Days' },
      { value: 'medium', label: '4-7 Days' },
      { value: 'long', label: '8+ Days' }
    ],
    season: [
      { value: 'all', label: 'All Seasons' },
      { value: 'spring', label: 'Spring' },
      { value: 'summer', label: 'Summer' },
      { value: 'autumn', label: 'Autumn' },
      { value: 'winter', label: 'Winter' }
    ]
  };

  const hasActiveFilters = Object.values(filters).some(filter => filter !== 'all');

  const getActiveFiltersCount = () => {
    return Object.values(filters).filter(filter => filter !== 'all').length;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg lg:sticky lg:top-24">
      {/* Mobile Filter Toggle Button */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-4 border-b border-gray-200"
        >
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-blue-600" />
            <span className="text-lg font-semibold text-gray-900">Filters</span>
            {hasActiveFilters && (
              <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                {getActiveFiltersCount()}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            {hasActiveFilters && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onClearFilters();
                }}
                className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1 mr-2"
              >
                <X className="h-4 w-4" />
                Clear
              </button>
            )}
            {isOpen ? (
              <ChevronUp className="h-5 w-5 text-gray-400" />
            ) : (
              <ChevronDown className="h-5 w-5 text-gray-400" />
            )}
          </div>
        </button>
      </div>

      {/* Desktop Header */}
      <div className="hidden lg:flex items-center justify-between p-6 pb-6">
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
        </div>
        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1"
          >
            <X className="h-4 w-4" />
            Clear
          </button>
        )}
      </div>

      {/* Filter Content */}
      <div className={`${isOpen ? 'block' : 'hidden'} lg:block px-4 pb-4 lg:px-6 lg:pb-6 lg:pt-0`}>
        <div className="space-y-6">
          {/* Category Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Category
            </label>
            <div className="space-y-2">
              {filterOptions.category.map((option) => (
                <label key={option.value} className="flex items-center">
                  <input
                    type="radio"
                    name="category"
                    value={option.value}
                    checked={filters.category === option.value}
                    onChange={(e) => onFilterChange('category', e.target.value)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <span className="ml-2 text-sm text-gray-700">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Difficulty Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Difficulty Level
            </label>
            <div className="space-y-2">
              {filterOptions.difficulty.map((option) => (
                <label key={option.value} className="flex items-center">
                  <input
                    type="radio"
                    name="difficulty"
                    value={option.value}
                    checked={filters.difficulty === option.value}
                    onChange={(e) => onFilterChange('difficulty', e.target.value)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <span className="ml-2 text-sm text-gray-700">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Duration Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Duration
            </label>
            <div className="space-y-2">
              {filterOptions.duration.map((option) => (
                <label key={option.value} className="flex items-center">
                  <input
                    type="radio"
                    name="duration"
                    value={option.value}
                    checked={filters.duration === option.value}
                    onChange={(e) => onFilterChange('duration', e.target.value)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <span className="ml-2 text-sm text-gray-700">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Season Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Best Season
            </label>
            <div className="space-y-2">
              {filterOptions.season.map((option) => (
                <label key={option.value} className="flex items-center">
                  <input
                    type="radio"
                    name="season"
                    value={option.value}
                    checked={filters.season === option.value}
                    onChange={(e) => onFilterChange('season', e.target.value)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <span className="ml-2 text-sm text-gray-700">{option.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">{totalTours}</div>
            <div className="text-sm text-gray-600">Tours Available</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourFilters;