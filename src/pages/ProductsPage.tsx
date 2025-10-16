import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, Grid2x2 as Grid, List, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';
import WeighbridgePage from '../components/WeighbridgePage';
import IndustrialScalesPage from '../components/IndustrialScalesPage';
import RetailScalesPage from '../components/RetailScalesPage';
import FieldScalesPage from '../components/FieldScalesPage';
import PrecisionScalesPage from '../components/PrecisionScalesPage';
import IndicatorsPage from '../components/IndicatorsPage';
import WeighingSoftwarePage from '../components/WeighingSoftwarePage';
import AccessoriesPage from '../components/AccessoriesPage';
import PersonalDigitalAssistantsPage from '../components/PersonalDigitalAssistantsPage';

const categoryDescriptions: { [key: string]: string } = {
  'WEIGHBRIDGES': 'Heavy-duty weighing solutions for trucks and large vehicles with advanced digital indicators and comprehensive software integration.',
  'INDUSTRIAL SCALES': 'Rugged scales for industrial applications including platform scales, floor scales, and heavy-duty weighing systems.',
  'RETAIL SCALES': 'Precision scales for retail and commercial applications with PLU functionality and receipt printing capabilities.',
  'FIELD SCALES': 'Portable weighing solutions for field operations including tea collection, milk collection, and agricultural applications.',
  'PRECISION SCALES': 'High-precision laboratory and analytical scales for medical, pharmaceutical, and research applications.',
  'INDICATORS': 'Digital displays and control systems for weighing equipment with advanced connectivity and data management.',
  'PERSONAL DIGITAL ASSISTANTS': 'Mobile devices for data collection and field operations with advanced connectivity and rugged design.',
  'WEIGHING SOFTWARE': 'Automated software solutions including SMARTWEIGH and PIMAPP for data management and ERP integration.',
  'ACCESSORIES CONSUMABLES AND SPARES': 'Load cells, junction boxes, printers, and other essential components for weighing systems.'
};

const categoryImages: { [key: string]: string } = {
  'WEIGHBRIDGES': '/images/WhatsApp Image 2025-09-30 at 21.31.21_992705e9.jpg',
  'INDUSTRIAL SCALES': '/images/WhatsApp Image industrial scales.jpg',
  'RETAIL SCALES': '/images/Screenshot_26-8-2025_2165_.jpeg',
  'FIELD SCALES': '/images/XK315.jpg',
  'PRECISION SCALES': '/images/Screenshot_26-8-2025_21621_.jpeg',
  'INDICATORS': '/images/new fly.jpg',
  'PERSONAL DIGITAL ASSISTANTS': '/images/Screenshot_26-8-2025_21744_.jpeg',
  'WEIGHING SOFTWARE': '/images/Screenshot_26-8-2025_21832_.jpeg',
  'ACCESSORIES CONSUMABLES AND SPARES': '/images/WhatsApp Image 2025-10-01 at 03.22.01_e2866457.jpg'
};

const productImages: { [key: string]: string } = {
  'WEIGHBRIDGE 1': '/images/Screenshot_25-8-2025_162257_.jpeg',
  'WEIGHBRIDGE 2': '/images/Screenshot_25-8-2025_162257_.jpeg',
  'WEIGHBRIDGE 3': '/images/Weighbridge1-scaled.jpg',
  'WEIGHBRIDGE 4': '/images/weighbridge A.jpg',
  'MOBILE WEIGHBRIDGE': '/images/MOBILE WEIGHBRIDGE.jpg',
  'XK3190-A12+': '/images/Screenshot_26-8-2025_21629_.jpeg',
  'XK3190-A12': '/images/Screenshot_26-8-2025_21646_.jpeg',
  'XK3190-A12+E': '/images/Screenshot_26-8-2025_21659_.jpeg',
  'XK3190-DS1': '/images/Screenshot_26-8-2025_2165_.jpeg',
  'XK3190-DS2': '/images/Screenshot_26-8-2025_21721_.jpeg',
  'XK3190-DS3': '/images/Screenshot_26-8-2025_21733_.jpeg',
  'XK3190-DS10': '/images/Screenshot_26-8-2025_21744_.jpeg',
  'XK315A1-2': '/images/XK315.jpg',
  'BDI620': '/images/Screenshot_26-8-2025_21816_.jpeg',
  'LP7510': '/images/Screenshot_28-8-2025_14751_.jpeg',
  'LP7520': '/images/Screenshot_28-8-2025_14833_.jpeg',
  'YAOHUA A27E': '/images/Screenshot_28-8-2025_32012_.jpeg',
  'YAOHUA A12E': '/images/Screenshot_28-8-2025_32026_.jpeg',
  'YAOHUA D2008E': '/images/Screenshot_28-8-2025_32034_.jpeg',
  'YAOHUA T71E': '/images/Screenshot_28-8-2025_32042_.jpeg',
  'YAOHUA T72E': '/images/Screenshot_28-8-2025_32057_.jpeg',
  'YAOHUA A9P': '/images/Screenshot_28-8-2025_32123_.jpeg',
  'YAOHUA XK3190-C8': '/images/Screenshot_28-8-2025_32133_.jpeg',
  'YAOHUA BDI640': '/images/Screenshot_28-8-2025_32149_.jpeg',
  'SB721': '/images/Screenshot_26-8-2025_1025_.jpeg',
  'ACS-688': '/images/Screenshot_26-8-2025_1051_.jpeg',
  'TCS-A': '/images/Screenshot_26-8-2025_1124_.jpeg',
  'TCS-B': '/images/Screenshot_26-8-2025_1147_.jpeg',
  'SB-51': '/images/Screenshot_28-8-2025_14850_.jpeg',
  'ACS-830': '/images/Screenshot_28-8-2025_14919_.jpeg',
  'ACS-831': '/images/Screenshot_28-8-2025_1493_.jpeg',
  'ACS-832': '/images/Screenshot_28-8-2025_14931_.jpeg',
  'TCS-602': '/images/Screenshot_28-8-2025_15053_.jpeg',
  'TCS-ZC1': '/images/Screenshot_28-8-2025_15121_.jpeg',
  'TCS-C': '/images/Screenshot_28-8-2025_1516_.jpeg',
  'PLATFORM SCALE 1': '/images/Screenshot_25-8-2025_165915_.jpeg',
  'PLATFORM SCALE 2': '/images/Screenshot_25-8-2025_165834_.jpeg',
  'PLATFORM SCALE 3': '/images/Screenshot_25-8-2025_165915_.jpeg',
  'PLATFORM SCALE 4': '/images/Screenshot_25-8-2025_17058_.jpeg',
  'PLATFORM SCALE 5': '/images/Screenshot_25-8-2025_17058_.jpeg',
  'PLATFORM SCALE 6': '/images/Screenshot_25-8-2025_17118_.jpeg',
  'PLATFORM SCALE 7': '/images/Screenshot_25-8-2025_17131_.jpeg',
  'PLATFORM SCALE 8': '/images/Screenshot_25-8-2025_17146_.jpeg',
  'FLOOR SCALE 1': '/images/Screenshot_25-8-2025_22241_.jpeg',
  'FLOOR SCALE 2': '/images/Screenshot_25-8-2025_16579_.jpeg',
  'TEA COLLECTION SCALE': '/images/WhatsApp Image 2025-09-12 at 15.41.27_16846bac fs.jpg',
  'MILK COLLECTION SCALE': '/images/WhatsApp Image 2025-09-30 at 11.24.11_8a59f1b7.jpg',
  'AGRICULTURAL SCALES': '/images/WhatsApp Image 2025-09-30 at 12.17.39_51beee33.jpg',
  'PORTABLE SCALES': '/images/WhatsApp Image 2025-09-30 at 13.39.59_9be18ec5.jpg',
  'YH-T7E': '/images/Screenshot_26-8-2025_14141_.jpeg',
  'YH-T8E': '/images/Screenshot_26-8-2025_141420_.jpeg',
  'YH-T9E': '/images/Screenshot_26-8-2025_141439_.jpeg',
  'ANALYTICAL SCALES': '/images/Screenshot_26-8-2025_141457_.jpeg',
  'SMARTWEIGH': '/images/Screenshot_26-8-2025_21832_.jpeg',
  'PIMAPP': '/images/Screenshot_26-8-2025_21844_.jpeg',
  'ACCESSORIES AND SPARES': '/images/WhatsApp Image accessories.jpg',
  'YAOHUA BDI640 PDA': '/images/Screenshot_28-8-2025_32149_.jpeg'
};

const ProductsPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showCategoryPage, setShowCategoryPage] = useState<string | null>(null);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = selectedCategory === 'ALL' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  const uniqueCategories = useMemo(() => ['ALL', ...categories], []);

  if (showCategoryPage === 'WEIGHBRIDGES') {
    return <WeighbridgePage onBack={() => setShowCategoryPage(null)} />;
  }

  if (showCategoryPage === 'INDUSTRIAL SCALES') {
    return <IndustrialScalesPage onBack={() => setShowCategoryPage(null)} />;
  }

  if (showCategoryPage === 'RETAIL SCALES') {
    return <RetailScalesPage onBack={() => setShowCategoryPage(null)} />;
  }

  if (showCategoryPage === 'FIELD SCALES') {
    return <FieldScalesPage onBack={() => setShowCategoryPage(null)} />;
  }

  if (showCategoryPage === 'PRECISION SCALES') {
    return <PrecisionScalesPage onBack={() => setShowCategoryPage(null)} />;
  }

  if (showCategoryPage === 'INDICATORS') {
    return <IndicatorsPage onBack={() => setShowCategoryPage(null)} />;
  }

  if (showCategoryPage === 'WEIGHING SOFTWARE') {
    return <WeighingSoftwarePage onBack={() => setShowCategoryPage(null)} />;
  }

  if (showCategoryPage === 'ACCESSORIES CONSUMABLES AND SPARES') {
    return <AccessoriesPage onBack={() => setShowCategoryPage(null)} />;
  }

  if (showCategoryPage === 'PERSONAL DIGITAL ASSISTANTS') {
    return <PersonalDigitalAssistantsPage onBack={() => setShowCategoryPage(null)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Products
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive weighing solutions for every industry
          </p>
        </div>

        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>

            <div className="flex gap-2">
              <div className="relative">
                <button
                  onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                  className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Filter className="w-5 h-5" />
                  <span>{selectedCategory === 'ALL' ? 'All Categories' : selectedCategory}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {showCategoryDropdown && (
                  <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg border border-gray-200 z-50 max-h-96 overflow-y-auto">
                    {uniqueCategories.map((category) => (
                      <button
                        key={category}
                        onClick={() => {
                          setSelectedCategory(category);
                          setShowCategoryDropdown(false);
                        }}
                        className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors ${
                          selectedCategory === category ? 'bg-red-50 text-red-600' : 'text-gray-700'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex gap-1 border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 ${viewMode === 'grid' ? 'bg-red-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'} transition-colors`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 ${viewMode === 'list' ? 'bg-red-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'} transition-colors`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {selectedCategory === 'ALL' && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Product Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <div
                  key={category}
                  className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => setShowCategoryPage(category)}
                >
                  <div className="relative h-64 overflow-hidden bg-gray-50">
                    <img
                      src={categoryImages[category] || '/images/placeholder.jpg'}
                      alt={category}
                      className="w-full h-full object-contain p-4 transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                    <h3 className="absolute bottom-4 left-4 right-4 text-xl font-bold text-white">
                      {category}
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 line-clamp-3">
                      {categoryDescriptions[category]}
                    </p>
                    <button className="mt-4 text-red-600 font-semibold hover:text-red-700 transition-colors">
                      View Products �
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedCategory !== 'ALL' && filteredProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {selectedCategory}
            </h2>
            <div className={
              viewMode === 'grid'
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                : 'space-y-6'
            }>
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}
                >
                  <div
                    className={`relative overflow-hidden cursor-pointer group ${
                      viewMode === 'list' ? 'w-64' : 'h-64'
                    }`}
                    onClick={() => setSelectedImage(productImages[product.name] || '/images/placeholder.jpg')}
                  >
                    <img
                      src={productImages[product.name] || '/images/placeholder.jpg'}
                      alt={product.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Click to enlarge
                      </span>
                    </div>
                  </div>
                  <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <div className="mb-2">
                      <span className="text-sm text-red-600 font-semibold">{product.category}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{product.description}</p>
                    {(product.specifications || product.features || product.dimensions) && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {(product.specifications || product.features || product.dimensions || []).slice(0, 3).map((spec, index) => (
                          <span
                            key={index}
                            className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    )}
                    <button
                      onClick={() => navigate('/contact', { state: { product: product.name } })}
                      className="w-full px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
                    >
                      Book a Consultation
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedCategory !== 'ALL' && filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No products found matching your criteria.</p>
          </div>
        )}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <img
              src={selectedImage}
              alt="Product"
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors"
            >
              �
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
