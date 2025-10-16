import React, { useState } from 'react';
import { ArrowLeft, ShoppingCart, ChevronDown, ChevronUp, Info } from 'lucide-react';

interface RetailScalesPageProps {
  onBack: () => void;
}

interface ExpandableSection {
  [key: string]: boolean;
}

const RetailScalesPage: React.FC<RetailScalesPageProps> = ({ onBack }) => {
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
    dimensions,
    image,
    bgColor = "bg-red-600"
  }: {
    id: string;
    title: string;
    overview: string;
    features: string[];
    specifications: string[];
    dimensions?: string[];
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
          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-8 mb-6">
            {/* Left Column - Image */}
            <div>
              <img
                src={image}
                alt={title}
                className="w-full h-full object-contain p-4 rounded-lg shadow-md mb-4 bg-gray-50"
                onError={(e) => {
                  e.currentTarget.src = '/images/default-placeholder.jpg';
                }}
              />
            </div>

            {/* Right Column - Key Features and Overview */}
            <div>
              <p className="text-gray-700 leading-relaxed">{overview}</p>
              <h4 className="text-xl font-bold text-black mb-4 flex items-center">
                <Info className="h-5 w-5 mr-2 text-red-600" />
                Key Features
              </h4>
              <div className="space-y-3">
                {features.slice(0, 6).map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Learn More Button */}
          <button
            onClick={() => toggleSection(id)}
            className="w-full bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 text-black font-medium py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 border border-gray-200"
          >
            <span>Learn More - Complete Specifications</span>
            {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>

          {/* Expandable Detailed Specifications */}
          {isExpanded && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Complete Features */}
                <div>
                  <h5 className="text-lg font-bold text-black mb-4">Complete Feature Set</h5>
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg border border-gray-200">
                    <ul className="space-y-3">
                      {features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Complete Specifications */}
                <div>
                  <h5 className="text-lg font-bold text-black mb-4">Technical Specifications</h5>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                    <ul className="space-y-3">
                      {specifications.map((spec, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 font-mono text-sm">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Dimensions */}
              {dimensions && (
                <div className="mt-6">
                  <h5 className="text-lg font-bold text-black mb-4">Available Models & Dimensions</h5>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
                    <ul className="space-y-3">
                      {dimensions.map((dimension, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 font-mono text-sm">{dimension}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
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
              <ShoppingCart className="h-8 w-8 text-white" />
            </div>

            {/* Overview */}
            <div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-black mb-4">Product Overview</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  SCALES & SOFTWARE (K) LTD provides the ideal choice for retail scales which are quick, easy to install, and calibrate.
                </p>
                <p className="text-lg text-gray-700 mb-8">Available models:</p>
                <div className="bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-xl border border-red-200">
                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                      <h4 className="font-bold text-red-600">A) MEPL SCALE</h4>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                      <h4 className="font-bold text-red-600">B) KSP SCALE</h4>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                      <h4 className="font-bold text-red-600">C) SM-5300X</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div> {/* closes overview wrapper */}
          </div> {/* closes header flex wrapper */}
        </div> {/* closes max-w container */}
      </div> {/* closes header bg wrapper */}

      {/* MEPL Scale */}
      <ExpandableCard
        id="mepl-scale"
        title="A) MEPL SCALE"
        overview="Advanced retail scale with comprehensive PLU functionality and OIML approval. Features auto unit price clear, accumulation, and give change functions with extended battery life."
        image="/images/Screenshot_26-8-2025_21530_.jpeg"
        features={[
          "50 direct PLU and 99 indirect PLU",
          "Application: Auto unit price clear",
          "Application: Accumulation",
          "Application: Give change",
          "Application: kg/100g shift",
          "Battery provides up to 70 hours of continuous use (without backlight)",
          "OIML approval from Delta (Approval No.: DK0199.172)"
        ]}
        specifications={[
          "Display: 20mm digit display, white LED backlight",
          "Capacities: 15kg or 30kg",
          "Pan size: 240 x 370mm",
          "Keyboard: 75 keys (mechanical switch)",
          "Housing: ABS plastic",
          "Max. Divisions: 3,000e; 2x3,000; 6,000d",
          "Gross weight: 8.6kg",
          "ADC update: ≤ 1/10 second",
          "Operating Temp: -10°C ~ +40°C",
          "Power: AC adapter (12V/500mA), internal rechargeable battery (6V/4Ah)"
        ]}
      />

      {/* KSP Scale */}
      <ExpandableCard
        id="ksp-scale"
        title="B) KSP SCALE"
        overview="Dual-side LCD display retail scale with comprehensive PLU functionality and water-splash proof design. Features stainless steel platter and anti-cockroach device."
        image="/images/Screenshot_26-8-2025_21549_.jpeg"
        bgColor="bg-gray-800"
        features={[
          "18mm Dual-side LCD Display (customer and vendor sides)",
          "Single-range division",
          "Auto zero point tracking",
          "Tare function",
          "Give change function",
          "96 PLU for unit price (M1-M6 direct, P10-P99 indirect)",
          "Low power and charging status indication",
          "Energy-saving function",
          "Anti-cockroach device",
          "Adjustable, nonskid rubber feet",
          "Water-splash proof in-use cover",
          "Stainless steel platter"
        ]}
        specifications={[
          "Power Source: 6V Rechargeable Battery (160h w/o backlight)",
          "Power Source: 220V ±10%, 50Hz/60Hz",
          "Operating Temp: 0°C ~ +40°C",
          "Humidity: <80%",
          "Dimensions: Scale 300x330x120mm (W x D x H)",
          "Dimensions: Platter 300x240mm (W x D)"
        ]}
        dimensions={[
          "KSP/KSPL-6: 30Kg, Division (1/3000) 2g",
          "KSP/KSPL-15: 15Kg, Division (1/3000) 5g",
          "KSP/KSPL-30: 30Kg, Division (1/3000) 2g"
        ]}
      />

      {/* SM-5300X */}
      <ExpandableCard
        id="sm-5300x"
        title="C) SM-5300X"
        overview="Advanced retail scale with video playback capabilities for in-store promotions and high-resolution label printing. Features scalable configuration with future-ready solutions."
        image="/images/Screenshot_26-8-2025_2165_.jpeg"
        bgColor="bg-gray-800"
        features={[
          "Easy-to-use, function-oriented user interface",
          "Scalable configuration with future-ready solutions",
          "Video playback for in-store promotions and advertisements",
          "High-resolution 300 dpi label printing"
        ]}
        specifications={[
          "High-resolution 300 dpi label printing",
          "Video playback capability",
          "Function-oriented user interface",
          "Scalable configuration system",
          "Future-ready solutions"
        ]}
      />

      {/* Technical Support Notice */}
      <div className="mt-12 max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 shadow-sm">
        <div className="flex items-start space-x-3">
          <Info className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
          <div>
            <h4 className="text-lg font-bold text-blue-900 mb-2">Technical Consultation Available</h4>
            <p className="text-blue-800">
              For detailed technical specifications, custom configurations, or engineering consultations, please contact our technical team. 
              All specifications are subject to site conditions and regulatory requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetailScalesPage;
