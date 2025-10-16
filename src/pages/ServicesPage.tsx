import React from 'react';
import { Wrench, Clock, Settings, Users, Award, Truck, CheckCircle, Phone } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: <Wrench className="h-10 w-10" />,
      title: "Installation Services",
      description: "Professional installation and configuration services for all weighing solutions.",
      features: [
        "Site assessment and preparation",
        "Professional equipment installation",
        "System configuration and calibration",
        "Compliance with local regulations",
        "Post-installation testing and verification"
      ]
    },
    {
      icon: <Clock className="h-10 w-10" />,
      title: "Maintenance Services",
      description: "Comprehensive maintenance services to ensure optimal performance.",
      features: [
        "Preventive maintenance programs",
        "Regular calibration services",
        "Performance optimization",
        "Wear and tear assessments",
        "Scheduled service visits"
      ]
    },
    {
      icon: <Settings className="h-10 w-10" />,
      title: "Technical Support",
      description: "Professional technical support services for all our solutions.",
      features: [
        "24/7 technical helpdesk",
        "Remote diagnostics and troubleshooting",
        "On-site technical assistance",
        "System upgrades and updates",
        "Emergency repair services"
      ]
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Training Services",
      description: "Professional training programs for your team.",
      features: [
        "Operator training programs",
        "Maintenance staff training",
        "Safety and compliance training",
        "Custom training modules",
        "Certification programs"
      ]
    },
    {
      icon: <Award className="h-10 w-10" />,
      title: "Custom Solutions",
      description: "Tailored solutions designed to meet specific business needs.",
      features: [
        "Custom system design",
        "Integration with existing systems",
        "Specialized applications",
        "Industry-specific solutions",
        "Scalable implementations"
      ]
    },
    {
      icon: <Truck className="h-10 w-10" />,
      title: "On-Site Service",
      description: "On-site support and service for all locations.",
      features: [
        "Mobile service units",
        "Field service technicians",
        "Emergency response teams",
        "Regional service coverage",
        "Rapid response guarantee"
      ]
    }
  ];

  const benefits = [
    "Efficiency in every solution we deliver",
    "Freedom to Choose the best options for your needs", 
    "Improved Profits through optimized operations",
    "Timely Deliveries that meet your schedules",
    "Effective Customer Care that exceeds expectations"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-serif font-bold mb-6">Our Services</h1>
          <p className="text-xl font-light max-w-3xl mx-auto leading-relaxed">
            Professional support services designed to maximize your weighing solution investment
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Services Grid */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border-t-4 border-red-600">
                <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center text-white mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold text-black mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
              </div>
            ))}
          </div>
        </section>

        {/* Service Areas */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-black mb-4">Service Coverage</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive service coverage across East Africa
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center border-t-4 border-red-600">
              <h3 className="text-2xl font-serif font-bold text-black mb-4">Kenya</h3>
              <p className="text-gray-600 mb-4">Complete coverage across all counties with local service teams</p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Nairobi & Central Kenya</li>
                <li>• Western Kenya Region</li>
                <li>• Coastal Region</li>
                <li>• Northern Kenya</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center border-t-4 border-gray-600">
              <h3 className="text-2xl font-serif font-bold text-black mb-4">Uganda</h3>
              <p className="text-gray-600 mb-4">Strategic partnerships and service centers</p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Kampala & Central</li>
                <li>• Western Region</li>
                <li>• Eastern Region</li>
                <li>• Northern Region</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center border-t-4 border-red-600">
              <h3 className="text-2xl font-serif font-bold text-black mb-4">Rwanda</h3>
              <p className="text-gray-600 mb-4">Growing presence with dedicated service support</p>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Kigali Region</li>
                <li>• Southern Province</li>
                <li>• Western Province</li>
                <li>• Northern Province</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white rounded-xl shadow-lg p-12">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-red-600 p-3 rounded-full mr-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl font-serif font-bold text-black">Get Service Support</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Need immediate service support? Contact our technical team for rapid response.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center p-6 bg-red-50 rounded-lg">
              <h3 className="text-xl font-serif font-semibold text-black mb-4">Emergency Service</h3>
              <p className="text-gray-600 mb-4">24/7 emergency response for critical systems</p>
              <div className="space-y-2">
                <p className="font-semibold text-black">0722-303505</p>
                <p className="text-sm text-gray-600">Available 24/7</p>
              </div>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-serif font-semibold text-black mb-4">Scheduled Service</h3>
              <p className="text-gray-600 mb-4">Plan your maintenance and service visits</p>
              <div className="space-y-2">
                <p className="font-semibold text-black">info@scale-software.co.ke
</p>
                <p className="text-sm text-gray-600">Response within 4 hours</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServicesPage;