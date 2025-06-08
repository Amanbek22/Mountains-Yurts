import React from 'react';
import { Heart, Users, Mountain } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Who We Are</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We bring you closer to the heart of nomadic life through authentic experiences 
            and deep connections with Kyrgyz culture
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Heart className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Passion</h3>
                <p className="text-gray-600">
                  Born and raised in Kyrgyzstan, our guides share genuine stories and 
                  hidden gems that only locals know.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Small Groups</h3>
                <p className="text-gray-600">
                  We believe in intimate experiences. Our small group tours ensure 
                  personal attention and authentic connections.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-orange-100 p-3 rounded-full">
                <Mountain className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Sustainable Tourism</h3>
                <p className="text-gray-600">
                  We respect the environment and support local communities, 
                  ensuring tourism benefits everyone.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://dwc.kg/wp-content/uploads/2023/10/scale_1200-1.jpeg"
              alt="Local Kyrgyz guide with horses"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-2 md:-right-5 bg-white p-6 rounded-lg shadow-lg">
              <p className="text-2xl font-bold text-orange-600">500+</p>
              <p className="text-gray-600">Happy Travelers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;