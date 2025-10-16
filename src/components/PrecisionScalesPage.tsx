import React, { useState } from 'react';
import { ArrowLeft, Microscope, ChevronDown, ChevronUp, Info } from 'lucide-react';

interface PrecisionScalesPageProps {
  onBack: () => void;
}

interface ExpandableSection {
  [key: string]: boolean;
}

const PrecisionScalesPage: React.FC<PrecisionScalesPageProps> = ({ onBack }) => {
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
            {/* Left Column - Image  */}
            <div>
              <img
                src={id === 'ehb-scale' ? '/images/Screenshot_26-8-2025_21621_.jpeg' :
                     id === 'ahw-scale' ? '/images/Screenshot_26-8-2025_21629_.jpeg' :
                     id === 'baby-scale' ? '/images/Screenshot_26-8-2025_21646_.jpeg' :
                     id === 'personal-scale' ? '/images/Screenshot_26-8-2025_21659_.jpeg' :
                     '/images/Screenshot_26-8-2025_21621_.jpeg'}
                alt={title}
                className="w-full h-full object-contain p-4 rounded-lg shadow-md mb-4 bg-gray-50"
                onError={(e) => { e.currentTarget.src = '/images/default-placeholder.jpg'; }}
              />
            </div>
            
            {/* Right Column - Key Features and Overview */}
            <div>
              <p className="text-gray-700 leading-relaxed">{overview}</p>
              <h4 className="text-xl font-bold text-black mb-4 flex items-center">
                <Info className="h-5 w-5 mr-2 text-red-600" />
                Key Features
              </h4>
              <div className="space-y-3 mb-6">
                {features.slice(0, 6).map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Book Consultation Button */}
              <a
                href="https://calendly.com/your-calendly-link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-4 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                Book a Consultation
              </a>
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
                  <h5 className="text-lg font-bold text-black mb-4">Additional Specifications</h5>
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
              <Microscope className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-black">PRECISION SCALES</h1>
              <p className="text-gray-600 mt-1">Laboratory Scale - Comprehensive Technical Specifications & Product Information</p>
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
              SCALES & SOFTWARE (K) LTD provides the ideal choice for Lab scales which are quick, easy to install, and calibrate.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Categories:
            </p>
            <div className="bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-xl border border-red-200">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-red-600">A) EHB SCALE</h4>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-red-600">B) AHW SCALE</h4>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-red-600">C) BABY SCALE</h4>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-red-600">D) PERSONAL SCALE</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* EHB Scale */}
        <ExpandableCard
          id="ehb-scale"
          title="A) EHB SCALE"
          overview="Ideal for lab and precious metal mining industry. OIML approved with rechargeable battery up to 40h and comprehensive applications including percentage weighing and counting."
          image="/images/Screenshot_26-8-2025_21621_.jpeg"
          features={[
            "OIML approved (Delta DK0199.424)",
            "Rechargeable battery up to 40h (without backlight)",
            "Standard RS-232 interface",
            "Optional Bluetooth and USB ports",
            "Optional rear display",
            "Applications: Percentage weighing, Counting, Accumulation, Unit conversion"
          ]}
          specifications={[
            "Display: 16.5mm LCD with white LED backlight",
            "Capacities: 150g - 6000g",
            "Pan size: 280 x 385mm",
            "Housing: ABS plastic",
            "Max. Divisions: 2 x 3,000e",
            "ADC update: ≤ 1/10 second",
            "LC excitation voltage: 5V/150mA",
            "Operating Temp: 0°C ~ +40°C",
            "Power: AC 100 ~ 240V / DC 24V 5000mA"
          ]}
        />

        {/* AHW Scale */}
        <ExpandableCard
          id="ahw-scale"
          title="B) AHW SCALE"
          overview="High-precision laboratory scale with up to 300,000 resolution. OIML approved with comprehensive applications and optional connectivity features."
          image="/images/Screenshot_26-8-2025_21629_.jpeg "
          bgColor="bg-gray-800"
          features={[
            "Up to 300,000 resolution",
            "OIML approved (Delta DK0199.266)",
            "Rechargeable battery up to 40h (without backlight)",
            "Standard RS-232 interface",
            "Optional weight function, USB, Bluetooth (10m)",
            "Applications: Percentage weighing, Counting, Accumulation, Unit conversion"
          ]}
          specifications={[
            "Display: 6.5mm LCD with white LED backlight",
            "Capacities: 1.5kg/3kg/6kg/15kg",
            "Pan sizes: Ø80mm, Ø120mm, 140x150mm, 180x190mm",
            "Housing: ABS plastic",
            "Max. Divisions: 6,000e / 60,000d / 150,000d / 300,000d",
            "ADC update: ≤ 1/10 second",
            "LC excitation voltage: 5V/150mA",
            "Operating Temp: +5°C ~ +40°C",
            "Power: 12V/500mA adapter, 6V/1.2Ah battery",
            "Gross weight: 3.5kg (with wind shield), 2kg (without)"
          ]}
        />

        {/* Baby Scale */}
        <ExpandableCard
          id="baby-scale"
          title="C) BABY SCALE"
          overview="Ideal for pediatric hospitals and clinics. Features removable baby tray that converts to standing scale with drinking function for pre/post feed weighing."
          image="/images/Screenshot_26-8-2025_21646_.jpeg"
          features={[
            "Removable baby tray (converts to standing scale)",
            "Drinking function (pre/post feed weighing)",
            "Adjustable 4 feet",
            "Wall mount for indicator",
            "Optional initial-verification",
            "Optional RS-232 for computer/printer"
          ]}
          specifications={[
            "Display: 25mm LCD with white LED backlight",
            "Capacities: 15kg",
            "Pan size: 600 x 250mm",
            "Platform: 280 x 325mm",
            "Height Measure: ~400mm to 800mm",
            "Keyboard: 6-key membrane",
            "Housing: ABS plastic",
            "Max. Divisions: 3,000e; 2x3,000e",
            "ADC: Sigma Delta, update ≤ 1/10 second",
            "Operating Temp: +10°C ~ +40°C",
            "Power: 2000mAh Ni-MH (AA), external AC adapter",
            "Gross weight: 5.5kg (M101), 5kg (M105)"
          ]}
        />

        {/* Personal Scale */}
        <ExpandableCard
          id="personal-scale"
          title="D) PERSONAL SCALE"
          overview="OIML approved personal scale with 250kg capacity and high-precision 100g resolution. Features durable construction and long battery life."
          image="/images/Screenshot_26-8-2025_21659_.jpeg "
          bgColor="bg-gray-800"
          features={[
            "OIML approved",
            "Capacity: 250kg x 100g",
            "Pan size: 370 x 370mm",
            "25mm LCD with white LED backlight",
            "Long battery life up to 40h use"
          ]}
          specifications={[
            "OIML approved",
            "Capacity: 250kg x 100g",
            "Pan size: 370 x 370mm",
            "Display: 25mm LCD with white LED backlight",
            "Battery: 1.2V 2000mAh x 6 (Ni-MH), up to 40h use"
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

export default PrecisionScalesPage;