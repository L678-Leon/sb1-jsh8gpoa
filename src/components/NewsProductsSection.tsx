import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  image: string;
}

interface Product {
  id: number;
  name: string;
  description: string;
  keyBenefits: string[];
  image: string;
  category: string;
  isNew?: boolean;
}

const NewsProductsSection = () => {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  // Company News Data
  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: "2025 East Africa Weighing Excellence Awards",
      description: "Scales & Software (K) Ltd recognized as the leading weighing solutions provider in East Africa for outstanding service delivery and innovation.",
      date: "2025-01-15",
      category: "Achievement",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 2,
      title: "Scales & Software Shines at Interweighing 2024",
      description: "Our team showcased cutting-edge weighing technology at the international trade fair, attracting global attention to our innovative solutions.",
      date: "2024-11-28",
      category: "Exhibition",
      image: "https://images.pexels.com/photos/5632381/pexels-photo-5632381.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 3,
      title: "Weighbridge Installation Success",
      description: "Successfully completed major weighbridge installation project, enhancing weighing accuracy and operational efficiency for our client.",
      date: "2024-09-15",
      category: "Project Completion",
      image: "/images/WhatsApp Image 2025-09-12 at 15.37.23_cc8694bf news 3.jpg"
    },
    {
      id: 4,
      title: "Year-End Recap: Record Breaking Performance",
      description: "2024 marked our most successful year with 40% growth in client satisfaction and expansion across three new regions in East Africa.",
      date: "2024-12-31",
      category: "Annual Report",
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  // New Products Data
  const products: Product[] = [
    {
      id: 1,
      name: "SWELL V710 PDA",  
      description: "Latest Android 11 PDA with IP68 sealing, 6.3\" HD+ display, and 5000 mAh battery for field operations.",
      keyBenefits: ["Android 11 OS", "IP68 Waterproof", "6.3\" HD+ Display", "5000 mAh Battery"],
      image: "/images/Screenshot_26-8-2025_21744_.jpeg",
      category: "Personal Digital Assistants",
      isNew: true
    },
    {
      id: 2,
      name: "DD1010iFLYNET Indicator",
      description: "Advanced weighbridge indicator with 624 MHz processor and 5.7\" touch screen color display.",
      keyBenefits: ["624 MHz Processor", "5.7\" Touch Screen", "Ethernet Port", "SD Card Expansion"],
      image: "/images/Screenshot_26-8-2025_1025_.jpeg",
      category: "Weighbridge Indicators",
      isNew: true
    },
    {
      id: 3,
      name: "CPD-M Digital Load Cells",
      description: "Premium Italian-made load cells with electronic memory calibration and stainless steel construction.",
      keyBenefits: ["Made in Italy", "Electronic Memory", "Stainless Steel", "Lightning Protection"],
      image: "/images/Screenshot_26-8-2025_21235_.jpeg",
      category: "Load Cells",
      isNew: true
    },
    {
      id: 4,
      name: "SMARTWEIGH AI Software",
      description: "AI-powered weighing software with predictive analytics and comprehensive data management.",
      keyBenefits: ["AI Analytics", "Predictive Maintenance", "Real-time Monitoring", "ERP Integration"],
      image: "/images/Screenshot_26-8-2025_21816_.jpeg",
      category: "Weighing Software",
      isNew: true
    }
  ];

  // Auto-advance slideshows
  useEffect(() => {
    const newsInterval = setInterval(() => {
      setCurrentNewsIndex((prev) => (prev + 1) % newsItems.length);
    }, 6000);

    const productInterval = setInterval(() => {
      setCurrentProductIndex((prev) => (prev + 1) % products.length);
    }, 6500);

    return () => {
      clearInterval(newsInterval);
      clearInterval(productInterval);
    };
  }, [newsItems.length, products.length]);

  const nextNews = () => {
    setCurrentNewsIndex((prev) => (prev + 1) % newsItems.length);
  };

  const prevNews = () => {
    setCurrentNewsIndex((prev) => (prev - 1 + newsItems.length) % newsItems.length);
  };

  const nextProduct = () => {
    setCurrentProductIndex((prev) => (prev + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentProductIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section 
      ref={ref}
      className={`py-10 relative z-10 transition-all duration-700 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Left Column - New Release (Products) */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-serif font-bold text-gray-900">New Release</h2>
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
                  <button className="text-gray-500 hover:text-gray-700 text-sm font-medium flex items-center">
                    More <ArrowRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>

            {/* Products Slideshow */}
            <div className="relative overflow-hidden h-80">
              <div 
                className="flex transition-transform duration-500 ease-in-out h-full"
                style={{ transform: `translateX(-${currentProductIndex * 100}%)` }}
              >
                {products.map((product) => (
                  <div key={product.id} className="w-full flex-shrink-0 p-4 flex">
                    <div className="w-1/2 pr-4">
                      <div className="relative">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-40 object-cover rounded-lg"
                        />
                        {product.isNew && (
                          <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
                            NEW
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="w-1/2 pl-4">
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
              {products.map((_, index) => (
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

          {/* Right Column - Company News */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-serif font-bold text-gray-900">Company News</h2>
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
                  <button className="text-gray-500 hover:text-gray-700 text-sm font-medium flex items-center">
                    More <ArrowRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>

            {/* News Content */}
            <div className="p-4">
              <div className="flex space-x-3 mb-4">
                <img
                  src={newsItems[currentNewsIndex].image}
                  alt={newsItems[currentNewsIndex].title}
                  className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-orange-100 text-orange-700">
                      news
                    </span>
                  </div>
                  <h3 className="text-base font-serif font-bold text-gray-900 mb-2 leading-tight">
                    {newsItems[currentNewsIndex].title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {formatDate(newsItems[currentNewsIndex].date)}
                  </p>
                </div>
              </div>

              {/* News List */}
              <div className="space-y-3">
                {newsItems.slice(1, 4).map((news) => (
                  <div key={news.id} className="border-b border-gray-100 pb-2 last:border-b-0">
                    <h4 className="text-sm font-medium text-gray-900 mb-1 leading-tight">
                      {news.title}
                    </h4>
                    <p className="text-xs text-gray-500">
                      {formatDate(news.date)}
                    </p>
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
        </div>
      </div>
    </section>
  );
};

export default NewsProductsSection;