import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-xl font-serif font-bold">
                <span className="text-red-600">Scales</span>
                <span className="text-white"> & Software (</span>
                <span className="text-red-600">K</span>
                <span className="text-white">) Ltd</span>
              </h3>
              <p className="text-sm text-gray-300">Precision Weighing Solutions</p>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              East Africa's trusted partner in precision weighing solutions since 2005. 
              We provide comprehensive weighing equipment and software solutions for retail, 
              industrial, and medical applications.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-red-600 p-2 rounded-full hover:bg-red-700 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-600 p-2 rounded-full hover:bg-gray-700 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-red-600 p-2 rounded-full hover:bg-red-700 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-red-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-red-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-red-400 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-red-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-red-400 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-red-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-red-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  The Filing Room (ground Floor),<br />
                  Near Panari Hotel, Mombasa Rd.<br />
                  Nairobi, Kenya
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-red-400 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  +254-722-303505<br />
                  +254-738-829064
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-red-400 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  info@scale-software.co.ke<br />
                  sales@scale-software.co.ke<br />
                  sales1@scale-software.co.ke
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Scales & Software (K) Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;