'use client';

import React from 'react';
import { Mail, MessageCircle, Instagram, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Nomad Soul Tours</h3>
            <p className="text-gray-300 mb-6 max-w-lg">
              Your gateway to authentic Kyrgyz adventures. We create unforgettable 
              experiences that connect you with the heart of nomadic culture and 
              the pristine beauty of Central Asia.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
             
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/#tours" className="hover:text-white transition-colors">Our Tours</a></li>
              <li><a href="/#testimonials" className="hover:text-white transition-colors">Reviews</a></li>
              <li><a href="/#booking" className="hover:text-white transition-colors">Book Now</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5 text-orange-400" />
                <div>
                  <a href="mailto:info@nomadsoultours.kg" className="hover:text-white transition-colors">
                    een9.aman@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MessageCircle className="h-5 w-5 mt-0.5 text-orange-400" />
                <div>
                  <a href="https://wa.me/996707629617" className="hover:text-white transition-colors">
                    WhatsApp: +996 707 629 617
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5 text-orange-400" />
                <div>
                  <a href="tel:+996707629617" className="hover:text-white transition-colors">
                    +996 707 629 617
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-orange-400" />
                <div>
                  <span>Bishkek, Kyrgyzstan</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Nomad Soul Tours. All rights reserved.
            </p>
            <div className="text-gray-400 text-sm">
              <span>Explore responsibly • Support local communities</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;