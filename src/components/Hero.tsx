import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap } from 'lucide-react';
import { Component as ImageAutoSlider } from './ui/image-auto-slider';

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white pt-4">
      {/* Product Image Slider - positioned below navbar with spacing */}
      <div className="mt-2">
        <ImageAutoSlider />
      </div>
      
      <div className="relative overflow-hidden pt-2">
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
          <div className="w-full">
            {/* Main Content */}
            <div className="space-y-4 text-center mb-8">
              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-6xl mx-auto">
                  <span className="text-red-600">Scales</span>
                  <span className="text-black"> & Software</span>
                  <span className="text-black"> (</span>
                  <span className="text-red-600">K</span>
                  <span className="text-black">) Ltd</span>
                </h1>
                
                <div className="space-y-4">
                  <p className="text-lg md:text-xl lg:text-2xl text-black leading-relaxed max-w-5xl mx-auto font-bold">
                    Transforming businesses across East Africa with cutting-edge weighing technology, 
                    comprehensive software solutions, and unmatched precision since 2005.
                  </p>
                  
                  <div className="space-y-3 text-sm md:text-base max-w-4xl mx-auto">
                    <p className="leading-relaxed text-black font-bold">
                      From dairy cooperatives in rural Kenya to major industrial operations spanning Uganda and Rwanda, 
                      we deliver innovative weighing solutions that enhance business efficiency and profitability.
                    </p>
                    
                    <p className="leading-relaxed text-black font-bold">
                      Our comprehensive range includes weighbridges, industrial scales, retail solutions, precision laboratory equipment, 
                      and intelligent software systems - all backed by 24/7 technical support and maintenance services.
                    </p>
                    
                    <div className="flex flex-wrap justify-center gap-4 pt-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                        <span className="font-bold text-sm text-black">OIML Certified Equipment</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                        <span className="font-bold text-sm text-black">ISO 9001:2015 Quality Standards</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                        <span className="font-bold text-sm text-black">Licensed Under Weights & Measures Act</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Row */}
              <div className="flex flex-wrap justify-center gap-6 py-4">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-black">19+</div>
                  <div className="text-sm text-black font-bold">Years Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-black">1000+</div>
                  <div className="text-sm text-black font-bold">Satisfied Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-black">24/7</div>
                  <div className="text-sm text-black font-bold">Expert Support</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-black">8</div>
                  <div className="text-sm text-black font-bold">Product Categories</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-3 pt-3">
                <Link
                  to="/products"
                  className="group inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-xl hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Explore Solutions
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center px-6 py-3 bg-white text-black font-semibold rounded-xl border-2 border-black hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  Book Consultation
                  <Zap className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Additional Stats Section */}
            <div className="text-center mt-12">
              <p className="text-lg text-black font-bold mb-4">Trusted by Over 1000+ Companies Across East Africa</p>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-black font-bold">
                <span>🏭 Industrial Solutions</span>
                <span>🥛 Dairy Cooperatives</span>
                <span>🚛 Weighbridge Systems</span>
                <span>🔬 Laboratory Equipment</span>
                <span>📱 Digital Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;