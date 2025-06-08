'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const scrollToSection = (sectionId: string) => {
    if (pathname !== '/') {
      // If not on home page, navigate to home first
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link 
              href="/"
              className="text-2xl font-bold text-orange-600 hover:text-orange-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Mountains & Yurts
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-orange-600 transition-colors">Home</Link>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-orange-600 transition-colors">About</button>
            <Link href="/tours" className="text-gray-700 hover:text-orange-600 transition-colors">Tours</Link>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-orange-600 transition-colors">Reviews</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-orange-600 transition-colors">Contact</button>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 py-4">
            <nav className="flex flex-col space-y-4 px-4">
              <Link href="/" className="text-gray-700 hover:text-orange-600 transition-colors text-left" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-orange-600 transition-colors text-left">About</button>
              <Link href="/tours" className="text-gray-700 hover:text-orange-600 transition-colors text-left" onClick={() => setIsMenuOpen(false)}>Tours</Link>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-orange-600 transition-colors text-left">Reviews</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-orange-600 transition-colors text-left">Contact</button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;