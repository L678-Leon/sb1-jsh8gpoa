import React, { useState } from 'react';
import { ArrowLeft, Factory, ChevronDown, ChevronUp, Info } from 'lucide-react';

interface IndustrialScalesPageProps {
  onBack: () => void;
}

interface ExpandableSection {
  [key: string]: boolean;
}

const IndustrialScalesPage: React.FC<IndustrialScalesPageProps> = ({ onBack }) => {
  const [expandedSections, setExpandedSections] = useState<ExpandableSection>({});

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  // Error handling for broken images - fallback to placeholder
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800';
    target.alt = 'Industrial scale product image - placeholder';
  };

  const ExpandableCard = ({ 
    id, 
    title, 
    overview, 
    features, 
    specifications,
    dimensions,
    image,
    imageAlt,
    bgColor = "bg-red-600"
  }: {
    id: string;
    title: string;
    overview: string;
    features: string[];
    specifications: string[];
    dimensions?: string[];
    image: string;
    imageAlt: string;
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
                alt={imageAlt}
                className="w-full h-full object-contain p-4 rounded-lg shadow-md mb-4 transition-transform duration-300 hover:scale-105 bg-gray-50"
                onError={(e) => { e.currentTarget.src = '/images/default-placeholder.jpg'; }}
                loading="lazy"
              />
            </div>
            
            {/* Right Column - Key Features and overview */}
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
              {/* Two Column Detailed Layout */}
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

              {/* Dimensions if available */}
              {dimensions && (
                <div className="mt-6">
                  <h5 className="text-lg font-bold text-black mb-4">Available Dimensions</h5>
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
              <Factory className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-black">INDUSTRIAL SCALES</h1>
              <p className="text-gray-600 mt-1">Comprehensive Technical Specifications & Product Information</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="mb-16">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-black mb-4">Product Overview</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              SCALES & SOFTWARE (K) LTD offers your ideal choice for rugged and durable industrial scales for indoor and outdoor use. 
              Heavy-duty design, factory calibration, quick connections and easy operation.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              We have 5 categories of industrial scales:
            </p>
            <div className="bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-xl border border-red-200">
              <div className="grid md:grid-cols-5 gap-4 text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-red-600">A) PURE MILD STEEL</h4>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-red-600">B) PURE STAINLESS STEEL</h4>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-red-600">C) FOLDABLE SCALE</h4>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-red-600">D) PALLET TRUCK SCALE</h4>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-red-600">E) CATTLE WEIGHER</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Industrial Scales Images Section */}
        <div className="mb-12">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-black mb-6 text-center">Industrial Scales Categories</h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              <div className="text-center">
                <img
                  src="/images/WhatsApp Image 2025-10-08 at 12.49.44_80f417c4.jpg"
                  alt="Pure Mild Steel Industrial Scale"
                  className="w-full h-32 object-contain p-2 rounded-lg shadow-md mb-3 transition-transform duration-300 hover:scale-105 bg-gray-50"
                  onError={handleImageError}
                  loading="lazy"
                />
                <h4 className="text-sm font-bold text-black">Pure Mild Steel</h4>
                <p className="text-xs text-gray-600">Industrial Scale</p>
              </div>
              <div className="text-center">
                <img
                  src="/images/Screenshot_25-8-2025_22241_.jpeg"
                  alt="Pure Stainless Steel Industrial Scale"
                  className="w-full h-32 object-contain p-2 rounded-lg shadow-md mb-3 transition-transform duration-300 hover:scale-105 bg-gray-50"
                  onError={handleImageError}
                  loading="lazy"
                />
                <h4 className="text-sm font-bold text-black">Pure Stainless Steel</h4>
                <p className="text-xs text-gray-600">Industrial Scale</p>
              </div>
              <div className="text-center">
                <img
                  src="/images/Screenshot_25-8-2025_17058_.jpeg"
                  alt="Foldable Scale"
                  className="w-full h-32 object-contain p-2 rounded-lg shadow-md mb-3 transition-transform duration-300 hover:scale-105 bg-gray-50"
                  onError={handleImageError}
                  loading="lazy"
                />
                <h4 className="text-sm font-bold text-black">Foldable Scale</h4>
                <p className="text-xs text-gray-600">Portable Solution</p>
              </div>
              <div className="text-center">
                <img
                  src="/images/Screenshot_25-8-2025_17118_.jpeg"
                  alt="Pallet Truck Scale"
                  className="w-full h-32 object-contain p-2 rounded-lg shadow-md mb-3 transition-transform duration-300 hover:scale-105 bg-gray-50"
                  onError={handleImageError}
                  loading="lazy"
                />
                <h4 className="text-sm font-bold text-black">Pallet Truck Scale</h4>
                <p className="text-xs text-gray-600">Specialized Solution</p>
              </div>
              <div className="text-center">
                <img
                  src="/images/Screenshot_25-8-2025_17131_.jpeg"
                  alt="Cattle Weigher"
                  className="w-full h-32 object-contain p-2 rounded-lg shadow-md mb-3 transition-transform duration-300 hover:scale-105 bg-gray-50"
                  onError={handleImageError}
                  loading="lazy"
                />
                <h4 className="text-sm font-bold text-black">Cattle Weigher</h4>
                <p className="text-xs text-gray-600">Livestock Solution</p>
              </div>
            </div>
          </div>
        </div>
        {/* Pure Mild Steel Industrial Scale */}
        <ExpandableCard
          id="pure-mild-steel"
          title="A) PURE MILD STEEL INDUSTRIAL SCALE"
          overview="Rugged and durable industrial scale for indoor and outdoor use. Heavy-duty design with factory calibration, quick connections and easy operation."
          image="/images/WhatsApp Image 2025-10-08 at 12.49.44_80f417c4.jpg"
          imageAlt="Pure Mild Steel Industrial Scale"
          features={[
            "Application: Check weighing",
            "Application: Accumulation",
            "Application: Animal Scale",
            "Application: Keyboard lock",
            "Mild steel platform / mild steel with stainless steel plate",
            "Battery provides up to 70 hours of continuous use (without backlight)",
            "Optional RS-232 interface",
            "Optional WIFI",
            "Optional set point output (HI/OK/LOW/BEEP)",
            "Bluetooth enabled (BLE)",
            "LCD or LED screen"
          ]}
          specifications={[
            "Capacities: 300kg ~ 2 tonnes",
            "Max. Divisions: 3,000e; 15,000d",
            "Load cell excitation voltage: 5V/150mA",
            "ADC: Sigma delta",
            "ADC update ≤ 1/10 second",
            "Operate Temp: -10°C ~ +40°C"
          ]}
        />

        {/* Pure Stainless Steel Industrial Scale */}
        <ExpandableCard
          id="pure-stainless-steel"
          title="B) PURE STAINLESS STEEL INDUSTRIAL SCALE"
          overview="Pure stainless steel construction for demanding industrial environments. Rugged and durable with advanced connectivity options."
          image="/images/Screenshot_25-8-2025_22241_.jpeg"
          imageAlt="Pure Stainless Steel Industrial Scale"
          features={[
            "Application: Check weighing",
            "Application: Accumulation",
            "Application: Animal Scale",
            "Application: Keyboard lock",
            "Pure stainless steel",
            "Battery provides up to 70 hours of continuous use (without backlight)",
            "Optional RS-232 interface",
            "Optional analog output (0-10V / 4-20mA)",
            "Optional set point output (HI/OK/LOW/BEEP)",
            "Bluetooth enabled (100m coverage)",
            "LCD or LED screen"
          ]}
          specifications={[
            "Capacities: 30kg ~ 2 tonnes",
            "Max. Divisions: 3,000e; 15,000d",
            "Load cell excitation voltage: 5V/150mA",
            "ADC: Sigma delta",
            "ADC update ≤ 1/10 second",
            "Operate Temp: -10°C ~ +40°C"
          ]}
          dimensions={[
            "280mm x 280mm x 1 load cell (Cap. 30kg)",
            "460mm x 600mm x 1 load cell (Cap. 300kg)",
            "600mm x 600mm x 1 load cell (Cap. 500kg)",
            "1m x 1m x 4 load cells (Cap. 1 ton)",
            "1.2m x 1.2m x 4 load cells"
          ]}
        />

        {/* Foldable Scale */}
        <ExpandableCard
          id="foldable-scale"
          title="C) FOLDABLE SCALE"
          overview="Portable foldable industrial scale with mild steel construction and stainless steel plate. Compact design for versatile applications."
          image="/images/Screenshot_25-8-2025_17058_.jpeg"
          imageAlt="Foldable Scale"
          features={[
            "Application: Check weighing",
            "Application: Accumulation",
            "Application: Animal Scale",
            "Application: Keyboard lock",
            "Pure mild steel with stainless steel plate",
            "Battery provides up to 70 hours of continuous use (without backlight)",
            "Optional RS-232 interface",
            "Optional analog output (0-10V / 4-20mA)",
            "Optional set point output (HI/OK/LOW/BEEP)",
            "Bluetooth enabled (100m coverage)",
            "LCD or LED screen"
          ]}
          specifications={[
            "Capacities: 300kg",
            "Max. Divisions: 3,000e; 15,000d",
            "Load cell excitation voltage: 5V/150mA",
            "ADC: Sigma delta",
            "ADC update ≤ 1/10 second",
            "Operate Temp: -10°C ~ +40°C"
          ]}
          dimensions={[
            "460mm x 600mm x 1 load cell (Cap. 300kg)"
          ]}
        />

        {/* Pallet Truck Scale */}
        <ExpandableCard
          id="pallet-truck-scale"
          title="D) PALLET TRUCK SCALE"
          overview="Specialized pallet truck scale with thinner fork design suitable for various applications. Features OIML approved components."
          image="/images/Screenshot_25-8-2025_17118_.jpeg"
          imageAlt="Pallet Truck Scale"
          bgColor="bg-gray-800"
          features={[
            "Thinner fork, suitable for various applications",
            "Reasonable fork width: 160mm for good weighing performance and accuracy",
            "Oilless bearing to prolong working life",
            "Powder paint for anti-corrosion",
            "OIML approved load cell and indicator"
          ]}
          specifications={[
            "Fork width: 160mm",
            "OIML approved components",
            "Anti-corrosion powder paint coating",
            "Oilless bearing system"
          ]}
        />

        {/* Cattle Weigher */}
        <ExpandableCard
          id="cattle-weigher"
          title="E) CATTLE WEIGHER"
          overview="Specialized livestock weighing scale designed for cattle and livestock. Accurate, durable, convenient, and animal-friendly design."
          image="/images/Screenshot_25-8-2025_17131_.jpeg"
          imageAlt="Cattle Weigher"
          bgColor="bg-gray-800"
          features={[
            "When weighing cattle and livestock you want to be sure that the scale is accurate, durable, convenient, and animal-friendly",
            "Suitable for Cattle",
            "Strong steel construction",
            "Robust design",
            "Digital platform",
            "Indicator can be detached and charged from a different location",
            "Internal rechargeable battery"
          ]}
          specifications={[
            "Suitable for: Cow, Goat, Sheep, Pig",
            "Strong steel construction",
            "Digital platform technology",
            "Detachable indicator",
            "Internal rechargeable battery",
            "Animal-friendly design"
          ]}
        />

        {/* Technical Support Notice */}
        <div className="mt-12 max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 shadow-sm">
          <div className="flex items-start space-x-3">
            <Info className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <h4 className="text-lg font-bold text-blue-900 mb-2">Technical Consultation Available</h4>
              <p className="text-blue-800">
                For detailed technical specifications, custom configurations, or engineering consultations, 
                please contact our technical team. All specifications are subject to site conditions and 
                regulatory requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustrialScalesPage;