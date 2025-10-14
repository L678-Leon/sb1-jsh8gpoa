import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b-2 border-red-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="/images/WhatsApp Image 2025-07-30 at 16.20.25_66323b2c.jpg"
                alt="Scales & Software Logo"
                className="h-12 w-12 mr-3 rounded-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div className="h-12 w-12 mr-3 bg-red-600 rounded-full items-center justify-center overflow-hidden hidden">
                <span className="text-white font-bold text-lg">S&S</span>
              </div>
              <div>
                <h1 className="text-xl font-serif font-bold">
                  <span className="text-red-600">Scales</span>
                  <span className="text-black"> & Software (</span>
                  <span className="text-red-600">K</span>
                  <span className="text-black">) Ltd</span>
                </h1>
                <p className="text-xs text-red-500">Your Trusted Weighing Partner</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors ${
                isActive('/') 
                  ? 'text-red-700 border-b-2 border-red-600' 
                  : 'text-black hover:text-red-600'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`font-medium transition-colors ${
                isActive('/about') 
                  ? 'text-red-700 border-b-2 border-red-600' 
                  : 'text-black hover:text-red-600'
              }`}
            >
              About Us
            </Link>
            <Link 
              to="/products" 
              className={`font-medium transition-colors ${
                isActive('/products') 
                  ? 'text-red-700 border-b-2 border-red-600' 
                  : 'text-black hover:text-red-600'
              }`}
            >
              Products
            </Link>
            <Link
              to="/services"
              className={`font-medium transition-colors ${
                isActive('/services')
                  ? 'text-red-700 border-b-2 border-red-600'
                  : 'text-black hover:text-red-600'
              }`}
            >
              Services
            </Link>
            <Link
              to="/projects"
              className={`font-medium transition-colors ${
                isActive('/projects')
                  ? 'text-red-700 border-b-2 border-red-600'
                  : 'text-black hover:text-red-600'
              }`}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className={`font-medium transition-colors ${
                isActive('/contact')
                  ? 'text-red-700 border-b-2 border-red-600'
                  : 'text-black hover:text-red-600'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black hover:text-red-600 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <Link
                to="/"
                className={`block px-3 py-2 font-medium ${
                  isActive('/') ? 'text-red-700 bg-red-100' : 'text-black hover:text-red-600'
                }`}
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`block px-3 py-2 font-medium ${
                  isActive('/about') ? 'text-red-700 bg-red-100' : 'text-black hover:text-red-600'
                }`}
                onClick={toggleMenu}
              >
                About Us
              </Link>
              <Link
                to="/products"
                className={`block px-3 py-2 font-medium ${
                  isActive('/products') ? 'text-red-700 bg-red-100' : 'text-black hover:text-red-600'
                }`}
                onClick={toggleMenu}
              >
                Products
              </Link>
              <Link
                to="/services"
                className={`block px-3 py-2 font-medium ${
                  isActive('/services') ? 'text-red-700 bg-red-100' : 'text-black hover:text-red-600'
                }`}
                onClick={toggleMenu}
              >
                Services
              </Link>
              <Link
                to="/projects"
                className={`block px-3 py-2 font-medium ${
                  isActive('/projects') ? 'text-red-700 bg-red-100' : 'text-black hover:text-red-600'
                }`}
                onClick={toggleMenu}
              >
                Projects
              </Link>
              <Link
                to="/contact"
                className={`block px-3 py-2 font-medium ${
                  isActive('/contact') ? 'text-red-700 bg-red-100' : 'text-black hover:text-red-600'
                }`}
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;