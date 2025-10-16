import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import { BackgroundBeamsWithCollision } from '../components/ui/background-beams-with-collision';
import { Gallery4 } from '../components/ui/gallery4';
import { GlowingEffectDemo } from '../components/ui/glowing-effect-demo';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Image Modal Component
const ImageModal = ({ 
  isOpen, 
  onClose, 
  imageSrc, 
  title 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  imageSrc: string; 
  title: string; 
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="relative max-w-7xl max-h-[90vh] mx-4"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute -top-12 right-0 text-white hover:text-gray-300 text-xl font-bold z-10 flex items-center space-x-2"
          >
            <span>✕ Close</span>
          </button>
          <img
            src={imageSrc}
            alt={title}
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-lg">
            <h3 className="text-white text-xl font-bold">{title}</h3>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// Categories array defined locally
const categories = [
  'WEIGHBRIDGES',
  'INDUSTRIAL SCALES', 
  'RETAIL SCALES',
  'FIELD SCALES',
  'PRECISION SCALES',
  'INDICATORS',
  'PERSONAL DIGITAL ASSISTANTS',
  'WEIGHING SOFTWARE',
  'ACCESSORIES CONSUMABLES AND SPARES'
];

const categoryImages: { [key: string]: string } = {
  'WEIGHBRIDGES': '/images/NEW.jpg',
  'INDUSTRIAL SCALES': '/images/WhatsApp Image industrial scales.jpg',
  'RETAIL SCALES': '/images/Screenshot_26-8-2025_21549_.jpeg',
  'FIELD SCALES': '/images/Screenshot_26-8-2025_21440_.jpeg',
  'PRECISION SCALES': '/images/Screenshot_26-8-2025_21621_.jpeg',
  'INDICATORS': '/images/Screenshot_26-8-2025_1025_.jpeg',
  'PERSONAL DIGITAL ASSISTANTS': '/images/Screenshot_26-8-2025_21721_.jpeg',
  'WEIGHING SOFTWARE': '/images/Screenshot_26-8-2025_21816_.jpeg',
  'ACCESSORIES CONSUMABLES AND SPARES': '/images/WhatsApp Image 2025-10-01 at 03.22.01_e2866457.jpg',
};

// Category descriptions
const categoryDescriptions: { [key: string]: string } = {
  'WEIGHBRIDGES': 'Heavy-duty weighing solutions for trucks and large vehicles with advanced digital indicators and comprehensive software integration.',
  'INDUSTRIAL SCALES': 'Rugged scales for industrial applications including platform scales, floor scales, and heavy-duty weighing systems.',
  'RETAIL SCALES': 'Precision scales for retail and commercial applications with PLU functionality and receipt printing capabilities.',
  'FIELD SCALES': 'Portable weighing solutions for field operations including tea collection, milk collection, and agricultural applications.',
  'PRECISION SCALES': 'High-precision laboratory and analytical scales for medical, pharmaceutical, and research applications.',
  'INDICATORS': 'Digital displays and control systems for weighing equipment with advanced connectivity and data management.',
  'PERSONAL DIGITAL ASSISTANTS': 'Mobile devices for data collection and field operations with advanced connectivity and rugged design.',
  'WEIGHING SOFTWARE': 'Automated software solutions including SMARTWEIGH and PIMAPP for data management and ERP integration.',
  'ACCESSORIES CONSUMABLES AND SPARES': 'Load cells, junction boxes, spare parts, and consumables for all weighing systems including test weights and thermal rolls.',
};

// Generate solution categories
const generateSolutionCategories = () => {
  return categories.map((category) => {
    const urlCategory = category.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
    
    return {
      id: urlCategory,
      title: category,
      description: categoryDescriptions[category] || `Professional ${category.toLowerCase()} solutions for East African businesses.`,
      href: "/products",
      image: categoryImages[category] || '/images/Screenshot_26-8-2025_21235_.jpeg'
    };
  });
};

const solutionCategories = generateSolutionCategories();

// Company News Data
const newsItems = [
  {
    id: 1,
    title: "EAGC Kenya Members Breakfast Meeting",
    description: "Scales & software representative contributing during EAGC Kenya Members Breakfast meeting at Swiss-Bel Hotel in Nairobi 1st Sep 2025",
    date: "2025-09-26",
    category: "Event",
    image: "/images/WhatsApp Image 2025-09-12 at 15.27.09_339150d4  news 1.jpg"
  },
  {
    id: 2,
    title: "Farmers Agricultural Open Day",
    description: "Scales and software exhibition stand @pwani university during the farmers agricultural open day on 7th Aug. 2025",
    date: "2025-09-26",
    category: "Exhibition",
    image: "/images/WhatsApp Image 2025-09-12 at 15.34.16_30bda9ab news 2.jpg"
  },
  {
    id: 3,
    title: "Weighbridge Installation",
    description: "Ongoing weighbridge installation by skilled technical team from scales and software @ the soon to be launched soit sugar factory 2025",
    date: "2025-09-26",
    category: "Installation",
    image: "/images/WhatsApp Image 2025-09-12 at 15.37.23_cc8694bf news 3.jpg"
  }
];

// New Releases Products
const newReleaseProducts = [
  {
    id: 1,
    name: "DD2060X-Series",
    description: "Innovative weighbridge indicator with 12.1\" touchscreen, ERP integration, voice control, and camera connectivity for automated weighbridge environments.",
    keyBenefits: ["12.1\" Touchscreen", "Voice Control", "ANPR Camera", "Cloud Automation"],
    image: "/images/Screenshot_8-10-2025_155133_www.weightron.com.jpeg",
    category: "Indicators",
    isNew: true
  },
  {
    id: 2,
    name: "Indicators Fly Net",
    description: "Advanced indicator system with fly net protection for outdoor weighing applications and enhanced durability.",
    keyBenefits: ["Fly Net Protection", "Outdoor Rated", "Advanced Display", "Weather Resistant"],
    image: "/images/new fly.jpg",
    category: "Indicators",
    isNew: true
  },
  {
    id: 3,
    name: "XK 315",
    description: "Versatile weighing indicator suitable for both field scales and indicator applications with advanced functionality.",
    keyBenefits: ["Dual Purpose", "Advanced Features", "Durable Design", "Field Ready"],
    image: "/images/XK315.jpg",
    category: "Field Scales",
    isNew: true
  },
];

const HomePage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState({ src: '', title: '' });
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [newsAutoPaused, setNewsAutoPaused] = useState(false);
  const [productAutoPaused, setProductAutoPaused] = useState(false);

  // Auto-advance slideshows
  useEffect(() => {
    let newsInterval: NodeJS.Timeout;
    if (!newsAutoPaused) {
      newsInterval = setInterval(() => {
        setCurrentNewsIndex((prev) => (prev + 1) % newsItems.length);
      }, 8000); // Increased to 8 seconds for better reading time
    }

    let productInterval: NodeJS.Timeout;
    if (!productAutoPaused) {
      productInterval = setInterval(() => {
        setCurrentProductIndex((prev) => (prev + 1) % newReleaseProducts.length);
      }, 8500); // Increased to 8.5 seconds for better reading time
    }

    return () => {
      if (newsInterval) clearInterval(newsInterval);
      if (productInterval) clearInterval(productInterval);
    };
  }, [newsAutoPaused, productAutoPaused]);

  const handleImageClick = (imageSrc: string, title: string) => {
    setModalImage({ src: imageSrc, title });
    setModalOpen(true);
  };

  const nextNews = () => {
    setCurrentNewsIndex((prev) => (prev + 1) % newsItems.length);
    setNewsAutoPaused(true); // Pause auto-advance when user manually navigates
  };

  const prevNews = () => {
    setCurrentNewsIndex((prev) => (prev - 1 + newsItems.length) % newsItems.length);
    setNewsAutoPaused(true); // Pause auto-advance when user manually navigates
  };

  const nextProduct = () => {
    setCurrentProductIndex((prev) => (prev + 1) % newReleaseProducts.length);
    setProductAutoPaused(true); // Pause auto-advance when user manually navigates
  };

  const prevProduct = () => {
    setCurrentProductIndex((prev) => (prev - 1 + newReleaseProducts.length) % newReleaseProducts.length);
    setProductAutoPaused(true); // Pause auto-advance when user manually navigates
  };

  return (
    <div>
      <Hero />
      
      {/* Comprehensive Weighing Solutions Section */}
      <div className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Gallery4 
            title="Complete Solution Categories"
            description="Comprehensive weighing solutions for every industry and application across East Africa"
            items={solutionCategories} 
          />
        </div>
      </div>
      
      {/* Company News and New Release Section */}
      <BackgroundBeamsWithCollision className="bg-gradient-to-b from-white to-gray-50 h-auto min-h-[32rem]">
        <div className="relative z-10 py-6">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8">
              
              {/* Company News Section */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="p-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-serif font-bold text-red-600">Company News</h2>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={prevNews}
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                        aria-label="Previous news"
                      >
                        <ChevronLeft className="h-5 w-5 text-gray-600" />
                      </button>
                      <button
                        onClick={nextNews}
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                        aria-label="Next news"
                      >
                        <ChevronRight className="h-5 w-5 text-gray-600" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* News Slideshow */}
                <div className="relative overflow-hidden" style={{ height: '500px' }}>
                  <div
                    className="flex transition-transform duration-500 ease-in-out h-full"
                    style={{ transform: `translateX(-${currentNewsIndex * 100}%)` }}
                  >
                    {newsItems.map((news) => (
                      <div key={news.id} className="w-full flex-shrink-0 p-4 flex flex-col h-full">
                        <div className="mb-4 bg-white rounded-lg p-2" style={{ height: '240px' }}>
                          <img
                            src={news.image}
                            alt={news.title}
                            className="w-full h-full object-contain rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                            onClick={() => handleImageClick(news.image, news.title)}
                            onError={(e) => { e.currentTarget.src = '/images/Screenshot_26-8-2025_21235_.jpeg'; }}
                          />
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg flex-shrink-0">
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-orange-100 text-orange-700">
                                {news.category}
                              </span>
                            </div>
                            <h3 className="text-base font-serif font-bold text-gray-900 mb-2 leading-tight">
                              {news.title}
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed mb-4">
                              {news.description}
                            </p>
                            <p className="text-xs text-gray-500">
                              {new Date(news.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })}
                            </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* News Indicators */}
                <div className="flex justify-center space-x-2 p-4">
                  {newsItems.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentNewsIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentNewsIndex ? 'bg-red-600' : 'bg-gray-300'
                      }`}
                      aria-label={`Go to news ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* New Releases Section */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="p-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-serif font-bold text-red-600">New Releases</h2>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={prevProduct}
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                        aria-label="Previous product"
                      >
                        <ChevronLeft className="h-5 w-5 text-gray-600" />
                      </button>
                      <button
                        onClick={nextProduct}
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                        aria-label="Next product"
                      >
                        <ChevronRight className="h-5 w-5 text-gray-600" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Products Slideshow */}
                <div className="relative overflow-hidden" style={{ height: '500px' }}>
                  <div
                    className="flex transition-transform duration-500 ease-in-out h-full"
                    style={{ transform: `translateX(-${currentProductIndex * 100}%)` }}
                  >
                    {newReleaseProducts.map((product) => (
                      <div key={product.id} className="w-full flex-shrink-0 p-4 flex flex-col h-full">
                        <div className="mb-4" style={{ height: '240px' }}>
                          <div className="relative h-full">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-contain rounded-lg cursor-pointer hover:opacity-80 transition-opacity bg-gray-50 p-4"
                              onClick={() => handleImageClick(product.image, product.name)}
                              onError={(e) => {
                                e.currentTarget.src = '/images/Screenshot_26-8-2025_21235_.jpeg';
                              }}
                            />
                            {product.isNew && (
                              <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
                                NEW
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg flex-shrink-0">
                          <div className="mb-3">
                            <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-700">
                              {product.category}
                            </span>
                          </div>
                          <h3 className="text-base font-serif font-bold text-gray-900 mb-2">
                            {product.name}
                          </h3>
                          <p className="text-gray-600 text-xs leading-relaxed mb-3">
                            {product.description}
                          </p>
                          <div className="space-y-2">
                            {product.keyBenefits.slice(0, 3).map((benefit, index) => (
                              <div key={index} className="flex items-center text-xs text-gray-600">
                                <div className="w-1 h-1 bg-red-600 rounded-full mr-2 flex-shrink-0"></div>
                                {benefit}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Product Indicators */}
                <div className="flex justify-center space-x-2 p-4">
                  {newReleaseProducts.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentProductIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentProductIndex ? 'bg-red-600' : 'bg-gray-300'
                      }`}
                      aria-label={`Go to product ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
      
      {/* Our Services Section with Animated Background */}
      <BackgroundBeamsWithCollision className="bg-gradient-to-b from-gray-50 to-white h-auto min-h-[28rem]">
        <div className="relative z-10 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Our Services
              </h2>
              <p className="text-lg text-white max-w-3xl mx-auto">
                Professional support services designed to maximize your weighing solution investment
              </p>
            </div>

            {/* Interactive Services Grid with Glowing Effects */}
            <GlowingEffectDemo />
          </div>
        </div>
      </BackgroundBeamsWithCollision>
      
      {/* Image Modal */}
      <ImageModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        imageSrc={modalImage.src}
        title={modalImage.title}
      />
    </div>
  );
};

export default HomePage;