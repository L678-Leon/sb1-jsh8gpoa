import React, { useState } from 'react';
import { ArrowLeft, Package, ChevronDown, ChevronUp, Info } from 'lucide-react';

interface AccessoriesPageProps {
  onBack: () => void;
}

interface ExpandableSection {
  [key: string]: boolean;
}

const accessories = {
  weighbridge: [
    {
      id: 'cpd-m-load-cells',
      name: 'CPD-M Load Cells',
      image: '/images/Screenshot_26-8-2025_14141_.jpeg',
      description: 'Premium Italian-made load cells with electronic memory calibration data.',
      features: [
        'Made in ITALY',
        'Electronic memory calibration',
        '17-4 PH stainless steel',
        'IP68/69K connectors',
        'Continuous diagnostics'
      ]
    },
    {
      id: 'zswfg-adss-load-cells',
      name: 'ZSWFG-ADSS Load Cells',
      image: '/images/Screenshot_26-8-2025_141420_.jpeg',
      description: 'Digital sensor with double shake column structure, 10t to 50t capacity.',
      features: [
        'Capacity 10t to 50t',
        'Double shake column',
        'OIML C5 approved',
        'Stainless steel',
        'Anti-rotation design'
      ]
    },
    {
      id: 'eds-load-cells',
      name: 'EDS Load Cells',
      image: '/images/Screenshot_26-8-2025_141439_.jpeg',
      description: 'High-quality load cells for weighbridge applications.',
      features: [
        'High accuracy',
        'Durable construction',
        'Weather resistant',
        'Easy installation',
        'Long service life'
      ]
    },
    {
      id: 'junction-box',
      name: 'Junction Box',
      image: '/images/Screenshot_26-8-2025_141457_.jpeg',
      description: 'Essential component for weighbridge load cell connections.',
      features: [
        'Weatherproof construction',
        'Multiple connections',
        'Signal management',
        'Easy maintenance',
        'Durable housing'
      ]
    },
    {
      id: 'other-weighbridge-accessories',
      name: 'Other Weighbridge Accessories',
      image: '/images/Screenshot_28-8-2025_14751_.jpeg',
      description: 'Comprehensive range of weighbridge accessories and spare parts.',
      features: [
        'Complete accessory range',
        'Genuine spare parts',
        'Maintenance supplies',
        'Upgrade components',
        'Technical support'
      ]
    }
  ],
  industrial: [
    {
      id: 'load-cells-shear-beam',
      name: 'Load Cells Shear Beam',
      image: '/images/Screenshot_28-8-2025_14833_.jpeg',
      description: 'Shear beam load cells for industrial applications.',
      features: [
        'Shear beam design',
        'High precision',
        'Industrial grade',
        'Overload protection',
        'Easy installation'
      ]
    },
    {
      id: 'single-point-load-cell',
      name: 'Single Point Load Cell',
      image: '/images/Screenshot_28-8-2025_14850_.jpeg',
      description: 'Single point load cells for platform scales.',
      features: [
        'Single point design',
        'Accurate measurement',
        'Compact size',
        'Easy integration',
        'Reliable performance'
      ]
    },
    {
      id: 'connectors',
      name: 'Connectors',
      image: '/images/Screenshot_28-8-2025_14919_.jpeg',
      description: 'High-quality electrical connectors for weighing systems.',
      features: [
        'Waterproof design',
        'Secure connections',
        'Corrosion resistant',
        'Easy installation',
        'Multiple configurations'
      ]
    },
    {
      id: 'platform-leveling-foot',
      name: 'Platform Leveling Foot',
      image: '/images/Screenshot_28-8-2025_14931_.jpeg',
      description: 'Adjustable leveling feet for scale platforms.',
      features: [
        'Adjustable height',
        'Stable support',
        'Corrosion resistant',
        'Easy adjustment',
        'Durable construction'
      ]
    },
    {
      id: 's-type-load-cell',
      name: 'S-Type Load Cell',
      image: '/images/Screenshot_28-8-2025_1493_.jpeg',
      description: 'S-type load cells for tension and compression applications.',
      features: [
        'S-type design',
        'Tension/compression',
        'High accuracy',
        'Robust construction',
        'Versatile applications'
      ]
    }
  ],
  counter: [
    {
      id: 'mainboard-counter',
      name: 'Mainboard (Counter)',
      image: '/images/Screenshot_28-8-2025_31851_.jpeg',
      description: 'Main circuit board for counter scales.',
      features: [
        'Advanced processing',
        'Multiple connectivity',
        'Reliable operation',
        'Easy replacement',
        'Quality components'
      ]
    },
    {
      id: 'keypad',
      name: 'Keypad',
      image: '/images/Screenshot_28-8-2025_31915_.jpeg',
      description: 'Replacement keypads for various scale models.',
      features: [
        'Durable membrane',
        'Water resistant',
        'Easy replacement',
        'Multiple configurations',
        'Long service life'
      ]
    },
    {
      id: 'charger-counter',
      name: 'Charger (Counter)',
      image: '/images/Screenshot_28-8-2025_32012_.jpeg',
      description: 'Power adapters and chargers for counter scales.',
      features: [
        'Reliable power delivery',
        'Multiple voltage options',
        'Safety certified',
        'Compact design',
        'Universal compatibility'
      ]
    }
  ],
  field: [
    {
      id: 'mainboard-field',
      name: 'Mainboard (Field)',
      image: '/images/Screenshot_28-8-2025_32026_.jpeg',
      description: 'Circuit boards for field scale applications.',
      features: [
        'Rugged construction',
        'Weather resistant',
        'Advanced functionality',
        'Easy installation',
        'Quality components'
      ]
    },
    {
      id: 'batteries',
      name: 'Batteries',
      image: '/images/Screenshot_28-8-2025_32042_.jpeg',
      description: 'High-capacity rechargeable batteries for portable scales.',
      features: [
        'High capacity',
        'Long lasting',
        'Rechargeable',
        'Multiple sizes',
        'Quality cells'
      ]
    },
    {
      id: 'screen-field',
      name: 'Screen (Field)',
      image: '/images/Screenshot_28-8-2025_32034_.jpeg',
      description: 'Replacement displays for field scales.',
      features: [
        'High visibility',
        'Weather resistant',
        'Easy replacement',
        'Multiple sizes',
        'LED backlight'
      ]
    },
    {
      id: 'carrier-bags',
      name: 'Carrier Bags',
      image: '/images/WhatsApp Image bags.jpg',
      description: 'Durable carrying cases for portable scales.',
      features: [
        'Durable construction',
        'Weather protection',
        'Easy transport',
        'Multiple sizes',
        'Secure storage'
      ]
    }
  ],
  pda: [
    {
      id: 'charger-battery-pda',
      name: 'Charger Battery (PDA)',
      image: '/images/WhatsApp Image 2025-09-30 at 21.38.15_5a733061.jpg',
      description: 'Power solutions for PDA devices.',
      features: [
        'Fast charging',
        'Long battery life',
        'Universal compatibility',
        'Safety certified',
        'Portable design'
      ]
    },
    {
      id: 'pda-screen',
      name: 'PDA Screen',
      image: '/images/Screenshot_28-8-2025_32123_.jpeg',
      description: 'Replacement screens for PDA devices.',
      features: [
        'High resolution',
        'Touch sensitive',
        'Durable glass',
        'Easy replacement',
        'Multiple sizes'
      ]
    },
    {
      id: 'motherboard-pda',
      name: 'Motherboard (PDA)',
      image: '/images/Screenshot_28-8-2025_32149_.jpeg',
      description: 'Main circuit boards for PDA devices.',
      features: [
        'Advanced processing',
        'Multiple connectivity',
        'Reliable operation',
        'Easy replacement',
        'Quality components'
      ]
    },
    {
      id: 'nfc-scanner',
      name: 'NFC Scanner',
      image: '/images/Screenshot_28-8-2025_32133_.jpeg',
      description: 'NFC scanning modules for PDA devices.',
      features: [
        'Contactless scanning',
        'Fast data transfer',
        'Easy integration',
        'Reliable performance',
        'Universal compatibility'
      ]
    }
  ],
  other: [
    {
      id: 'test-weights-a',
      name: 'Test Weights A',
      image: '/images/Screenshot_28-8-2025_15053_.jpeg',
      description: 'Precision test weights for calibration (1mg-200g range).',
      features: [
        'Precision weights',
        'OIML certified',
        'Range: 1mg-200g',
        'High accuracy',
        'Durable construction'
      ]
    },
    {
      id: 'test-weights-b',
      name: 'Test Weights B',
      image: '/images/Screenshot_28-8-2025_1516_.jpeg',
      description: 'Heavy-duty test weights for industrial calibration (200g-20kg).',
      features: [
        'Heavy-duty weights',
        'Range: 200g-20kg',
        'Industrial grade',
        'OIML certified',
        'Precise calibration'
      ]
    },
    {
      id: 'thermal-rolls',
      name: 'Thermal Rolls',
      image: '/images/Screenshot_28-8-2025_15121_.jpeg',
      description: 'High-quality thermal paper rolls for receipt printing.',
      features: [
        'High-quality paper',
        'Clear printing',
        'Long lasting',
        'Multiple sizes',
        'Fade resistant'
      ]
    }
  ]
};

const AccessoriesPage: React.FC<AccessoriesPageProps> = ({ onBack }) => {
  const [expandedSections, setExpandedSections] = useState<ExpandableSection>({});
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState({ src: '', title: '' });

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const handleImageClick = (imageSrc: string, title: string) => {
    setModalImage({ src: imageSrc, title });
    setModalOpen(true);
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

  const SubcategorySection = ({ 
    title, 
    subcategory, 
    color 
  }: { 
    title: string; 
    subcategory: keyof typeof accessories; 
    color: string; 
  }) => {
    const items = accessories[subcategory];
    const isExpanded = expandedSections[subcategory];

    return (
      <div className="mb-8">
        <button
          onClick={() => toggleSection(subcategory)}
          className={`w-full ${color} text-white p-6 rounded-t-xl flex items-center justify-between hover:opacity-90 transition-opacity`}
        >
          <h3 className="text-2xl font-bold">{title}</h3>
          {isExpanded ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
        </button>
        
        {isExpanded && (
          <div className="bg-white border border-gray-200 rounded-b-xl p-6 shadow-lg">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((item) => (
                <div key={item.id} className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-56 object-contain rounded-lg mb-3 cursor-pointer hover:opacity-80 transition-opacity bg-white"
                    onClick={() => handleImageClick(item.image, item.name)}
                    onError={(e) => { e.currentTarget.src = '/images/Screenshot_26-8-2025_21235_.jpeg'; }}
                  />
                  <h4 className="text-lg font-bold text-black mb-2">{item.name}</h4>
                  <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                  <div className="space-y-1">
                    {item.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center text-xs text-gray-600">
                        <div className="w-1 h-1 bg-red-600 rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-red-600 hover:text-red-700 mb-4 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Products</span>
          </button>
          <div className="flex items-center space-x-4">
            <div className="bg-red-600 p-3 rounded-full">
              <Package className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-black">ACCESSORIES CONSUMABLES AND SPARES</h1>
              <p className="text-gray-600 mt-1">Complete Range of Accessories & Spare Parts</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="mb-12">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-black mb-4">Product Overview</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              SCALES & SOFTWARE (K) LTD provides a comprehensive range of accessories, consumables, and spare parts 
              for all weighing systems. From load cells to spare parts, we ensure your equipment operates at peak performance.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h4 className="font-bold text-red-600 mb-2">🟥 Weighbridge Accessories</h4>
                <p className="text-sm text-gray-600">Load cells, junction boxes, and weighbridge components</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                <h4 className="font-bold text-orange-600 mb-2">🟧 Industrial Accessories</h4>
                <p className="text-sm text-gray-600">Industrial scale components and hardware</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h4 className="font-bold text-yellow-600 mb-2">🟨 Counter Scale Parts</h4>
                <p className="text-sm text-gray-600">Mainboards, keypads, and chargers</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-bold text-green-600 mb-2">🟩 Field Scale Parts</h4>
                <p className="text-sm text-gray-600">Field scale components and accessories</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-bold text-blue-600 mb-2">🟦 PDA Accessories</h4>
                <p className="text-sm text-gray-600">PDA components and replacement parts</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h4 className="font-bold text-purple-600 mb-2">🟪 Test weights</h4>
                <p className="text-sm text-gray-600">Test weights and consumables</p>
              </div>
            </div>
          </div>
        </div>

        {/* Accessories Categories */}
        <div className="space-y-4">
          <SubcategorySection 
            title="🟥 Weighbridge Accessories" 
            subcategory="weighbridge" 
            color="bg-red-600" 
          />
          <SubcategorySection 
            title="🟧 Industrial Scale Accessories" 
            subcategory="industrial" 
            color="bg-orange-600" 
          />
          <SubcategorySection 
            title="🟨 Counter Scale Accessories" 
            subcategory="counter" 
            color="bg-yellow-600" 
          />
          <SubcategorySection 
            title="🟩 Field Scale Accessories" 
            subcategory="field" 
            color="bg-green-600" 
          />
          <SubcategorySection 
            title="🟦 PDA Accessories" 
            subcategory="pda" 
            color="bg-blue-600" 
          />
          <SubcategorySection 
            title="🟪 Test Weights & Consumables" 
            subcategory="other" 
            color="bg-purple-600" 
          />
        </div>

        {/* Technical Support Notice */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 shadow-sm">
          <div className="flex items-start space-x-3">
            <Info className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <h4 className="text-lg font-bold text-blue-900 mb-2">Technical Support Available</h4>
              <p className="text-blue-800">
                For specific part numbers, compatibility information, or bulk orders, 
                please contact our technical team. All accessories come with installation 
                guidance and technical support.
              </p>
            </div>
          </div>
        </div>
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

export default AccessoriesPage;