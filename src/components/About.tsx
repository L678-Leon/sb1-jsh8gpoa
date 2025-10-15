import React from 'react';
import { Target, Eye, Heart, History } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">About Scales & Software (K) Ltd</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            East Africa's trusted partner for precision weighing solutions since 2005
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <img
              src="/images/group 1.jpg"
              alt="Our company facility"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <History className="h-8 w-8 text-red-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Our Story</h3>
                <p className="text-gray-600 leading-relaxed">
                  Established in 2005, Scales & Software (K) Ltd has grown to become East Africa's most trusted partner in weighing technology. We serve businesses across multiple industries with reliable solutions.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Target className="h-8 w-8 text-red-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Our Expertise</h3>
                <p className="text-gray-600 leading-relaxed">
                  With nearly two decades of experience, we provide complete solutions across multiple weighing categories. Our team ensures reliable performance and customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-2xl text-center">
            <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-black mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To deliver innovative, reliable weighing solutions that enhance business efficiency and profitability for our clients across East Africa.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl text-center">
            <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Eye className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-black mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be East Africa's leading weighing solutions provider, recognized for excellence, innovation, and exceptional customer service.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl text-center">
            <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-black mb-4">Core Values</h3>
            <ul className="text-gray-600 space-y-2 text-left">
              <li>• Precision & Accuracy</li>
              <li>• Customer Excellence</li>
              <li>• Innovation & Quality</li>
              <li>• Integrity & Trust</li>
              <li>• Continuous Improvement</li>
            </ul>
          </div>
        </div>
      </div>

    </section>
  );
};

export default About;