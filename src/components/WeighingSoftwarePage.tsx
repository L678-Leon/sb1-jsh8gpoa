import React, { useState } from 'react';
import { ArrowLeft, Monitor, ChevronDown, ChevronUp, Info, Wrench, Clock } from 'lucide-react';

interface WeighingSoftwarePageProps {
  onBack: () => void;
}

interface ExpandableSection {
  [key: string]: boolean;
}

const WeighingSoftwarePage: React.FC<WeighingSoftwarePageProps> = ({ onBack }) => {
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
            {/* Left Column - Image */}
            <div>
              <img
                src={id === 'pimapp-software' ? '/images/Screenshot_26-8-2025_21816_.jpeg' :
                     id === 'smartweigh-factory' ? '/images/Screenshot_26-8-2025_21832_.jpeg' :
                     id === 'smartweigh-weighbridge' ? '/images/Screenshot_26-8-2025_21844_.jpeg' :
                     '/images/Screenshot_26-8-2025_21816_.jpeg'}
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
              <Monitor className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-black">WEIGHING SOFTWARE</h1>
              <p className="text-gray-600 mt-1">Automated Software Solutions - Comprehensive Technical Specifications & Product Information</p>
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
              SCALES & SOFTWARE (K) LTD provides comprehensive automated software solutions for weighing operations and data management across various industries.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Available Software Solutions:
            </p>
            <div className="bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-xl border border-red-200">
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-red-600">A) PIMAPP SOFTWARE</h4>
                  <p className="text-sm text-gray-600">Field Collection</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-red-600">B) SMARTWEIGH</h4>
                  <p className="text-sm text-gray-600">Weighbridge</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-red-600">C) SMARTWEIGH</h4>
                  <p className="text-sm text-gray-600">Factory Collection</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pimapp Software */}
        <ExpandableCard
          id="pimapp-software"
          title="A) PIMAPP SOFTWARE (Field Collection)"
          overview="Automated solution for field officers to collect, weigh, issue receipts, and upload weighments in real time. Bluetooth links all components for seamless operation."
          image="/images/Screenshot_26-8-2025_21816_.jpeg"
          features={[
            "Automated solution for field officers",
            "Real-time weighment collection and upload",
            "Bluetooth links all components",
            "Instant receipt printing and SMS notifications"
          ]}
          specifications={[
            "Components: Field scale, PDA, Thermal printer, Cloud or ERP backend",
            "Bluetooth connectivity for all components",
            "Real-time data upload to cloud/backend",
            "Instant SMS notifications to farmers",
            "Receipt printing capability"
          ]}
        />

        {/* Smartweigh Weighbridge */}
        <ExpandableCard
          id="smartweigh-weighbridge"
          title="B) SMARTWEIGH (Weighbridge)"
          overview="Scales & Software (K) Ltd provides an automated solution that enables automatic weighbridge weighing, issue receipts and upload the weighments to a back-end software or ERP. This software is called SMARTWEIGH."
          image="/images/Screenshot_26-8-2025_21844_.jpeg"
          bgColor="bg-gray-800"
          features={[
            "Automated weighbridge weighing solution",
            "ANPR camera integration for vehicle identification",
            "Real-time weight capture and display",
            "Automated receipt generation and printing",
            "ERP and back-end system integration",
            "Complete transaction data management"
          ]}
          specifications={[
            "Components: Weighbridge, Indicator, ANPR Cameras, External Weight Display, Computer, Smartweigh Software, Printer",
            "ANPR camera integration for automatic vehicle identification",
            "Real-time weight capture and display system",
            "Automated receipt generation and printing",
            "ERP and back-end system integration capability",
            "Complete transaction data management and storage"
          ]}
          dimensions={[
            "1. A Weighbridge",
            "2. An Indicator", 
            "3. ANPR Cameras",
            "4. An External Weight Display",
            "5. A computer (Either Desktop or Laptop)",
            "6. Smartweigh Software",
            "7. A printer (Either Dot-matrix, Laser or Ink-jet)"
          ]}
        />

        {/* Smartweigh Factory Collection */}
        <ExpandableCard
          id="smartweigh-factory"
          title="C) SMARTWEIGH (Factory Collection)"
          overview="Automated factory reception weighing solution for products like milk. Issues receipts and uploads to ERP with seamless integration."
          image="/images/Screenshot_26-8-2025_21832_.jpeg"
          features={[
            "Automated factory reception weighing",
            "Receipt generation and printing",
            "ERP integration and data upload",
            "Real-time weight capture and recording"
          ]}
          specifications={[
            "Components: Receiving tank, Floor scale with load cell, Indicator, Computer",
            "Automated weight capture and recording",
            "Receipt printing capability",
            "ERP and secondary system integration",
            "Real-time data processing"
          ]}
        />

        {/* How Smartweigh Weighbridge Works */}
        <div className="mt-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-gray-900 to-black text-white p-8 rounded-t-xl">
              <h2 className="text-3xl font-bold flex items-center">
                <Wrench className="h-8 w-8 mr-3" />
                HOW SMARTWEIGH (WEIGHBRIDGE) WORKS
              </h2>
            </div>
            <div className="bg-white border border-gray-200 rounded-b-xl p-8 shadow-lg">
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-black mb-4 flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-red-600" />
                    Complete Workflow Process
                  </h4>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</div>
                        <p className="text-gray-700">
                          <strong>Vehicle Detection:</strong> When a vehicle gets on top of the weighbridge, the ANPR cameras capture the vehicle number and the image of the vehicle.
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</div>
                        <p className="text-gray-700">
                          <strong>Weight Display:</strong> The weight of the data is displayed on the indicator and the external display while also being relayed to the Smartweigh software in real time.
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</div>
                        <p className="text-gray-700">
                          <strong>Data Capture:</strong> The software then captures the weight and the other details of the transaction such as the Client name, the product being weighed, the transporter, the driver name and ID, the type of vehicle etc.
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">4</div>
                        <p className="text-gray-700">
                          <strong>Receipt & Storage:</strong> Once the weight has been accepted and weighed, a receipt is generated and the data is then stored in the computer or uploaded to a secondary system eg an ERP.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Support Notice */}
        <div className="mt-12 max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 shadow-sm">
          <div className="flex items-start space-x-3">
            <Info className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <h4 className="text-lg font-bold text-blue-900 mb-2">Technical Consultation Available</h4>
              <p className="text-blue-800">
                For detailed technical specifications, custom configurations, or software demonstrations, 
                please contact our technical team. All software solutions can be customized to meet specific business requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeighingSoftwarePage;