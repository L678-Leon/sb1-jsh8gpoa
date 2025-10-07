import React, { useState } from 'react';
import { ArrowLeft, Smartphone, ChevronDown, ChevronUp, Info } from 'lucide-react';

interface PersonalDigitalAssistantsPageProps {
  onBack: () => void;
}

interface ExpandableSection {
  [key: string]: boolean;
}

const PersonalDigitalAssistantsPage: React.FC<PersonalDigitalAssistantsPageProps> = ({ onBack }) => {
  const [expandedSections, setExpandedSections] = useState<ExpandableSection>({});

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const ExpandableCard = ({
    id,
    title,
    overview,
    features,
    specifications,
    bgColor = "bg-red-600"
  }: {
    id: string;
    title: string;
    overview: string;
    features: string[];
    specifications: string[];
    image: string;
    bgColor?: string;
  }) => {
    const isExpanded = expandedSections[id];

    return (
      <div className="mb-12 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 max-w-4xl mx-auto">
        <div className={`${bgColor} text-white p-8`}>
          <h3 className="text-2xl font-bold">{title}</h3>
        </div>

        <div className="p-8">
          <div className="grid lg:grid-cols-2 gap-8 mb-6">
            <div>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h4 className="font-bold text-black mb-4 flex items-center">
                  <Info className="h-5 w-5 mr-2 text-red-600" />
                  Overview
                </h4>
                <p className="text-gray-700 leading-relaxed">{overview}</p>
              </div>
            </div>

            <div>
              <div className="bg-red-50 p-6 rounded-lg">
                <h4 className="font-bold text-black mb-4">Key Features</h4>
                <ul className="space-y-2">
                  {features.slice(0, 5).map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <button
            onClick={() => toggleSection(id)}
            className="w-full bg-gray-100 hover:bg-gray-200 text-black font-semibold py-3 px-6 rounded-lg flex items-center justify-between transition-colors"
          >
            <span>Technical Specifications</span>
            {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>

          {isExpanded && (
            <div className="mt-6 bg-gray-50 p-6 rounded-lg">
              <h4 className="font-bold text-black mb-4">Detailed Specifications</h4>
              <ul className="space-y-3">
                {specifications.map((spec, index) => (
                  <li key={index} className="flex items-start border-b border-gray-200 pb-2">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  };

  const pdaProducts = [
    {
      id: 'swell-v710',
      title: 'SWELL V710 PDA',
      overview: 'Professional-grade handheld device designed for mobile data collection and field operations. Features rugged construction for demanding environments.',
      features: [
        'Android operating system',
        'Thermal printer support',
        'Barcode scanning',
        '4G connectivity',
        'Long battery life',
        'Rugged design',
        'GPS tracking',
        'WiFi enabled'
      ],
      specifications: [
        'OS: Android',
        'Display: High-resolution touchscreen',
        'Connectivity: 4G, WiFi, Bluetooth',
        'Battery: Long-lasting rechargeable',
        'Scanner: 1D/2D barcode support',
        'Printer: Built-in thermal printer',
        'Storage: Expandable memory',
        'Durability: IP65 rated'
      ],
      image: '/images/Screenshot_26-8-2025_21721_.jpeg'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={onBack}
          className="mb-8 flex items-center text-red-600 hover:text-red-700 font-semibold transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Products
        </button>

        <div className="mb-12">
          <div className="flex items-center mb-4">
            <Smartphone className="h-8 w-8 text-red-600 mr-3" />
            <h1 className="text-4xl font-bold text-black">Personal Digital Assistants</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-4xl">
            Mobile data collection devices for field operations with integrated printing and scanning capabilities.
          </p>
        </div>

        {pdaProducts.map(product => (
          <ExpandableCard
            key={product.id}
            {...product}
          />
        ))}
      </div>
    </div>
  );
};

export default PersonalDigitalAssistantsPage;
