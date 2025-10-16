import React, { useState, useMemo } from 'react';
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

// Category image mappings
const categoryImages: { [key: string]: string } = {
  'WEIGHBRIDGES': '/images/NEW.jpg',
  'INDUSTRIAL SCALES': '/images/WhatsApp Image industrial scales.jpg',
  'RETAIL SCALES': '/images/Screenshot_26-8-2025_21549_.jpeg',
  'FIELD SCALES': '/images/XK315.jpg',
  'PRECISION SCALES': '/images/Screenshot_26-8-2025_21621_.jpeg',
  'INDICATORS': '/images/Screenshot_26-8-2025_1025_.jpeg',
  'PERSONAL DIGITAL ASSISTANTS': '/images/Screenshot_26-8-2025_21721_.jpeg',
  'WEIGHING SOFTWARE': '/images/Screenshot_26-8-2025_21816_.jpeg',
  'ACCESSORIES CONSUMABLES AND SPARES': '/images/WhatsApp Image 2025-10-01 at 03.22.01_e2866457.jpg',
};

// Product image mappings - update specific products
const productImageMappings: { [key: string]: string } = {
  'XK315 (Field Scale)': '/images/XK315.jpg',
  'XK315': '/images/XK315.jpg',
  'xk315-field-scale': '/images/XK315.jpg',
  'CLASS 1 - Steel Weighbridge SBP/M Model': '/images/WhatsApp Image 2025-09-30 at 21.31.21_992705e9.jpg',
  'class1-steel-weighbridge-sbp-m': '/images/WhatsApp Image 2025-09-30 at 21.31.21_992705e9.jpg',
  'Steel Weighbridge SBP/M Model': '/images/WhatsApp Image 2025-09-30 at 21.31.21_992705e9.jpg',
  'CLASS 1 - Transportable Weighbridge': '/images/Screenshot_25-8-2025_165755_.jpeg',
  'class1-transportable-weighbridge': '/images/Screenshot_25-8-2025_165755_.jpeg',
  'Transportable Weighbridge': '/images/Screenshot_25-8-2025_165755_.jpeg',
  'Carrier Bags': '/images/Screenshot_28-8-2025_32057_.jpeg',
  'Carrier Bag': '/images/Screenshot_28-8-2025_32057_.jpeg',
  'carrier-bags': '/images/Screenshot_28-8-2025_32057_.jpeg',
  'PDA Screen': '/images/Screenshot_28-8-2025_32123_.jpeg',
  'pda-screen': '/images/Screenshot_28-8-2025_32123_.jpeg',
  'Charger Battery (PDA)': '/images/WhatsApp Image 2025-09-26 at 12.10.41_f604aada.jpg',
  'charger-battery-pda': '/images/WhatsApp Image 2025-09-26 at 12.10.41_f604aada.jpg',
  'PDA Charger Battery': '/images/WhatsApp Image 2025-09-26 at 12.10.41_f604aada.jpg',
};

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState({ src: '', title: '' });
  const [selectedCategoryPage, setSelectedCategoryPage] = useState<string | null>(null);

  // Category page components mapping
  const categoryPageComponents = {
    'WEIGHBRIDGES': WeighbridgePage,
    'INDUSTRIAL SCALES': IndustrialScalesPage,
    'RETAIL SCALES': RetailScalesPage,
    'FIELD SCALES': FieldScalesPage,
    'PRECISION SCALES': PrecisionScalesPage,
    'INDICATORS': IndicatorsPage,
    'PERSONAL DIGITAL ASSISTANTS': PersonalDigitalAssistantsPage,
    'WEIGHING SOFTWARE': WeighingSoftwarePage,
    'ACCESSORIES CONSUMABLES AND SPARES': AccessoriesPage,
  };

  // Filter products based on category and search term
  const filteredProducts = useMemo(() => {
    let filtered = products;

    if (selectedCategory !== 'ALL') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [selectedCategory, searchTerm]);

  // Show category-specific page if selected
  if (selectedCategoryPage && categoryPageComponents[selectedCategoryPage as keyof typeof categoryPageComponents]) {
    const CategoryComponent = categoryPageComponents[selectedCategoryPage as keyof typeof categoryPageComponents];
    return <CategoryComponent onBack={() => setSelectedCategoryPage(null)} />;
  }

  const handleImageClick = (imageSrc: string, title: string) => {
    setModalImage({ src: imageSrc, title });
    setModalOpen(true);
  };

  const getProductImage = (product: { id: string; name: string; image: string }) => {
    // Check specific mappings first
    if (productImageMappings[product.name]) {
      return productImageMappings[product.name];
    }
    if (productImageMappings[product.id]) {
      return productImageMappings[product.id];
    }
    // Return the product's default image
    return product.image;
  };

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
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      >
        <div 
          className="relative max-w-7xl max-h-[90vh] mx-4"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute -top-12 right-0 text-white hover:text-gray-300 text-xl font-bold z-10"
          >
            ✕ Close
          </button>
          <img
            src={imageSrc}
            alt={title}
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-lg">
            <h3 className="text-white text-xl font-bold">{title}</h3>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-black mb-2">Our Products</h1>
          <p className="text-gray-600">Comprehensive weighing solutions for every industry</p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
              />
            </div>

            {/* Filters and View Toggle */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <Filter className="h-4 w-4" />
                <span>Filters</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
              </button>

              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white shadow' : 'hover:bg-gray-200'}`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-white shadow' : 'hover:bg-gray-200'}`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Filter Dropdown */}
          {showFilters && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <h3 className="text-sm font-medium text-gray-700 mb-3">Categories</h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory('ALL')}
                  className={`px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === 'ALL'
                      ? 'bg-red-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  All Categories
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-red-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-8 text-center">Product Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => {
              const categoryProducts = products.filter(p => p.category === category);
              const categoryImage = categoryImages[category] || '/images/Screenshot_26-8-2025_21235_.jpeg';
              
              return (
                <div
                  key={category}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-200"
                >
                  <div className="h-48 relative bg-gray-50 cursor-pointer" onClick={(e) => {
                    e.stopPropagation();
                    handleImageClick(categoryImage, category);
                  }}>
                    <img
                      src={categoryImage}
                      alt={category}
                      className="w-full h-full object-contain p-3 hover:opacity-80 transition-opacity"
                      onError={(e) => { e.currentTarget.src = '/images/Screenshot_26-8-2025_21235_.jpeg'; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
                      <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg">{category}</h3>
                      <p className="text-gray-200 text-sm drop-shadow-lg">{categoryProducts.length} Products</p>
                    </div>
                  </div>
                  <div className="p-6 cursor-pointer" onClick={() => setSelectedCategoryPage(category)}>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {categoryDescriptions[category]}
                    </p>
                    <button className="text-red-600 font-medium hover:text-red-700 transition-colors">
                      View Products →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Products Results */}
        {(selectedCategory !== 'ALL' || searchTerm) && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-black">
                {searchTerm ? `Search Results for "${searchTerm}"` : selectedCategory}
              </h3>
              <span className="text-gray-600">{filteredProducts.length} products found</span>
            </div>

            {/* Products Grid/List */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {filteredProducts.map((product) => {
                const productImage = getProductImage(product);
                
                return (
                  <div
                    key={product.id}
                    className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-200 ${
                      viewMode === 'list' ? 'flex' : ''
                    }`}
                  >
                    <div className={`${viewMode === 'list' ? 'w-1/3' : 'h-48'} relative bg-gray-50`}>
                      <img
                        src={productImage}
                        alt={product.name}
                        className="w-full h-full object-contain p-4 cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => handleImageClick(productImage, product.name)}
                        onError={(e) => { e.currentTarget.src = '/images/Screenshot_26-8-2025_21235_.jpeg'; }}
                      />
                    </div>
                    <div className={`p-6 ${viewMode === 'list' ? 'w-2/3' : ''}`}>
                      <div className="mb-2">
                        <span className="inline-block px-2 py-1 bg-red-100 text-red-700 text-xs font-medium rounded">
                          {product.category}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-black mb-3">{product.name}</h4>
                      <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                      
                      {product.features && (
                        <div className="space-y-2 mb-4">
                          <h5 className="text-sm font-semibold text-black">Key Features:</h5>
                          <ul className="space-y-1">
                            {product.features.slice(0, 3).map((feature, index) => (
                              <li key={index} className="flex items-start space-x-2 text-sm text-gray-600">
                                <div className="w-1 h-1 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <a
                        href="https://calendly.com/your-calendly-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-200 text-sm"
                      >
                        Book a Consultation
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="h-16 w-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
                <p className="text-gray-500">Try adjusting your search terms or filters</p>
              </div>
            )}
          </div>
        )}
      </div>

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

export default ProductsPage;