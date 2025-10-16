import React, { useState } from 'react';
import { ArrowLeft, Wheat, ChevronDown, ChevronUp, Info } from 'lucide-react';

interface FieldScalesPageProps {
  onBack: () => void;
}

interface ExpandableSection {
  [key: string]: boolean;
}

const FieldScalesPage: React.FC<FieldScalesPageProps> = ({ onBack }) => {
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
          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-8 mb-6">
            {/* Left Column - Image */}
            <div>
              <img
                src={id === 'xk315' ? '/images/XK315.jpg' : '/images/Screenshot_26-8-2025_21440_.jpeg'}
                alt={title}
                className="w-full h-full object-contain p-4 rounded-lg shadow-md mb-4 bg-gray-50"
                onError={(e) => { e.currentTarget.src = '/images/default-placeholder.jpg'; }}
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
              <Wheat className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-black">FIELD SCALES</h1>
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
              SCALES & SOFTWARE (K) LTD provides the ideal choice for field scales which are quick, easy to install and calibrate.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Models:
            </p>
            <div className="bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-xl border border-red-200">
              <div className="grid md:grid-cols-2 gap-4 text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-red-600">A) DR 150</h4>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-red-600">B) XK315</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DR 150 */}
        <ExpandableCard
          id="dr-150"
          title="A) DR 150"
          overview="Ideal field scale for collection in all sectors including Tea and Milk. Features SGS 500% safety approval with easy-to-use front panel configuration and 70-hour battery backup."
          image="/images/Screenshot_26-8-2025_21440_.jpeg"
          features={[
            "Ideal for field collection in all sectors (Tea, Milk, etc.)",
            "Easy-to-use front panel configuration",
            "SGS 500% safety approval",
            "Applications: Display hold",
            "Applications: Weighing unit conversion",
            "Applications: Tare",
            "S hook (30kg), G hook (>30kg)",
            "70-hour battery backup"
          ]}
          specifications={[
            "Display: 25mm digital LCD with LED backlight",
            "Capacities: 30kg - 600kg",
            "Keyboard: 5 keys (mechanical switch)",
            "Housing: ABS plastic",
            "Max. Divisions: 3,000d / 6,000d",
            "Load cell excitation: 5V/150mA",
            "ADC: Sigma delta",
            "ADC update: ≤ 1/10 second",
            "Operating Temp: 0°C ~ +40°C",
            "Power: AC adapter (12V/500mA), 6V/1.2Ah rechargeable battery",
            "Bluetooth enabled"
          ]}
        />

        {/* XK315 */}
        <ExpandableCard
          id="xk315"
          title="B) XK315"
          overview="Advanced field scale ideal for collection in all sectors with comprehensive functionality including manual/automatic accumulation, programmable features, and Bluetooth connectivity."
          image="/images/XK315.jpg"
          bgColor="bg-gray-800"
          features={[
            "Ideal for field collection in all sectors",
            "30 hours battery operation on full charge",
            "Drives up to 4 x 350Ω or 8 x 700Ω load cells",
            "Manual/Automatic accumulation",
            "Programmable zero tracking",
            "Programmable digital filter",
            "Selectable kg and lb",
            "RS-232 serial interface",
            "Accuracy can be increased ten times",
            "Hold function",
            "Counting function",
            "Bluetooth enabled"
          ]}
          specifications={[
            "Operating temperature: 0°C ~ +40°C",
            "Storage temperature: -25°C ~ +55°C",
            "Relative humidity: ≤ 85% non-condensing",
            "30 hours battery operation on full charge",
            "Drives up to 4 x 350Ω or 8 x 700Ω load cells",
            "RS-232 serial interface",
            "Selectable kg and lb units",
            "Bluetooth enabled"
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

export default FieldScalesPage;