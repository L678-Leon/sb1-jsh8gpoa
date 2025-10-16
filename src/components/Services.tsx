import React from 'react';
import { Wrench, Clock, Settings, Users, Award, Truck } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Installation Services",
      description: "Professional installation and configuration services for all weighing solutions."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Maintenance Services",
      description: "Comprehensive maintenance services to ensure optimal performance."
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Technical Support",
      description: "Professional technical support services for all our solutions."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Training Services",
      description: "Professional training programs for your team."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Custom Solutions",
      description: "Tailored solutions designed to meet specific business needs."
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "On-Site Service",
      description: "On-site support and service for all locations."
    }
  ];

  const benefits = [
    "Efficiency",
    "Freedom to Choose", 
    "Improved Profits",
    "Timely Deliveries",
    "Effective Customer Care"
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional support services designed to maximize your weighing solution investment
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center text-white mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-black mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Our Promise Section */}
        <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-3xl p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Our Promise to You</h3>
              <p className="text-red-100 text-lg leading-relaxed mb-8">
                We are committed to delivering exceptional value through our comprehensive services. 
                Our promise is built on five core pillars that drive everything we do.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span className="text-lg font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our service team"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="bg-red-600 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-black">24/7 Support</div>
                    <div className="text-sm text-gray-600">Always Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;