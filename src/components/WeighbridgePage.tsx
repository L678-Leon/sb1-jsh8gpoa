import React, { useState } from 'react';
import { ArrowLeft, Truck, ChevronDown, ChevronUp, Info, Wrench, Clock } from 'lucide-react';

interface WeighbridgePageProps {
  onBack: () => void;
}

interface ExpandableSection {
  [key: string]: boolean;
}

const WeighbridgePage: React.FC<WeighbridgePageProps> = ({ onBack }) => {
  const [expandedSections, setExpandedSections] = useState<ExpandableSection>({});

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800';
    target.alt = 'Weighbridge product image - placeholder';
  };

  const ExpandableCard = ({
    id,
    title,
    overview,
    features,
    dimensions,
    image,
    imageAlt,
    bgColor = "bg-red-600"
  }: {
    id: string;
    title: string;
    overview: string;
    features: string[];
    dimensions: string[];
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
          <div className="grid lg:grid-cols-2 gap-8 mb-6">
            <div>
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-full object-contain p-4 rounded-lg shadow-md mb-4 bg-gray-50"
                onError={handleImageError}
                loading="lazy"
              />
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed">{overview}</p>
              <h4 className="text-xl font-bold text-black mb-4 flex items-center">
                <Info className="h-5 w-5 mr-2 text-red-600" />
                Key Features
              </h4>
              <div className="space-y-3">
                {features.slice(0, 6).map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={() => toggleSection(id)}
            className="w-full bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 text-black font-medium py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 border border-gray-200"
          >
            <span>Learn More - Complete Specifications</span>
            {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>

          {isExpanded && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h5 className="text-lg font-bold text-black mb-4">Complete Feature Set</h5>
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg border border-gray-200">
                    <ul className="space-y-3">
                      {features.map((f, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div>
                  <h5 className="text-lg font-bold text-black mb-4">Available Dimensions & Specifications</h5>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                    <ul className="space-y-3">
                      {dimensions.map((dim, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-700 font-mono text-sm">{dim}</span>
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
              <Truck className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-black">WEIGHBRIDGES</h1>
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
              SCALES & SOFTWARE (K) LTD offers your ideal choice for weighbridges which are safe, easy to install and calibrate.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              We have 5 classes of weighbridges: Class 1, Class 2, Class 3, Mobile Weighbridge, Multi-Deck Axle Weighbridge
            </p>
            <div className="bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-xl text-center border border-red-200">
              <h3 className="text-2xl font-bold text-red-600">CLASS 1, CLASS 2, CLASS 3, Mobile, Multi-Deck Axle</h3>
            </div>
          </div>
        </div>

        {/* CLASS 1 Overview */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-gray-900 to-black text-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold">CLASS 1 - Premium Quality Weighbridges</h2>
            <p className="text-gray-300 mt-2">This class is categorized into three depending on the material used:</p>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h4 className="font-bold">Steel Weighbridge</h4>
                <p className="text-sm text-gray-300">SBP/M Model</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h4 className="font-bold">Concrete Weighbridge</h4>
                <p className="text-sm text-gray-300">SBP/CO Model</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h4 className="font-bold">Transportable Weighbridge</h4>
                <p className="text-sm text-gray-300">Portable Solution</p>
              </div>
            </div>
          </div>
        </div>

        {/* CLASS 1 Product Images Section */}
        <div className="mb-12">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-black mb-6 text-center">CLASS 1 - Premium Quality Weighbridges</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <img
                  src="/images/WhatsApp Image 2025-09-30 at 21.31.21_992705e9.jpg"
                  alt="Steel Weighbridge SBP/M Model"
                  className="w-full h-48 object-contain p-3 rounded-lg shadow-md mb-4 bg-gray-50"
                  onError={handleImageError}
                  loading="lazy"
                />
                <h4 className="text-lg font-bold text-black">Steel Weighbridge</h4>
                <p className="text-sm text-gray-600">SBP/M Model</p>
              </div>
              <div className="text-center">
                <img
                  src="/images/Screenshot_25-8-2025_165834_.jpeg"
                  alt="Concrete Weighbridge SBP/CO Model"
                  className="w-full h-48 object-contain p-3 rounded-lg shadow-md mb-4 bg-gray-50"
                  onError={handleImageError}
                  loading="lazy"
                />
                <h4 className="text-lg font-bold text-black">Concrete Weighbridge</h4>
                <p className="text-sm text-gray-600">SBP/CO Model</p>
              </div>
              <div className="text-center">
                <img
                  src="/images/WhatsApp Image 2025-10-08 at 13.03.37_27619429.jpg"
                  alt="Transportable Weighbridge"
                  className="w-full h-48 object-contain p-3 rounded-lg shadow-md mb-4 bg-gray-50"
                  onError={handleImageError}
                  loading="lazy"
                />
                <h4 className="text-lg font-bold text-black">Transportable Weighbridge</h4>
                <p className="text-sm text-gray-600">Portable Solution</p>
              </div>
            </div>
          </div>
        </div>

        {/* Cards in order */}
        <ExpandableCard
          id="steel-weighbridge"
          title="A) STEEL WEIGHBRIDGE SBP/M MODEL"
          overview="Optimised steel structure designed for concentrated loads and frequent use. Features easy installation options and high resistance to harsh environmental conditions."
          image="/images/WhatsApp Image 2025-09-30 at 21.31.21_992705e9.jpg"
          imageAlt="Steel Weighbridge SBP/M Model"
          features={[
            "Optimised steel structure designed for concentrated loads and frequent use",
            "Easy to install (pit-mounted or surface mounted)",
            "High resistance to harsh environmental conditions/pollutants",
            "Easy load cell access for cleaning and maintenance operations",
            "Easy-to-move weighing platform",
            "Deck thickness 10mm checkered plate",
            "260mm U-channel"
          ]}
          dimensions={[
            "8.6m x 3m x 30 tons x 4 load cells",
            "9m x 3m x 60 tons x 4 load cells",
            "12m x 3m x 60 tons x 6 load cells",
            "15m x 3m x 60 tons x 8 load cells",
            "18m x 3m x 80 tons x 8 load cells",
            "22m x 3m x 100 tons x 10 load cells",
            "24m x 3m x 100 tons x 10 load cells"
          ]}
        />

        <ExpandableCard
          id="concrete-weighbridge"
          title="B) CONCRETE WEIGHBRIDGE SBP/CO MODEL"
          overview="Advanced weighbridge solution featuring MULTI-RANGE capability and ATEX certification for hazardous environments. Includes comprehensive electronic systems and accessories."
          image="/images/Screenshot_25-8-2025_165834_.jpeg"
          imageAlt="Concrete Weighbridge SBP/CO Model"
          features={[
            "MULTI-RANGE Version (only for digital version)",
            "ATEX Version (for environments at risk of explosion)",
            "Electronic terminals and printers",
            "Frame for ramps made of compacted material",
            "Peripheral electronic accessories",
            "Rodent-proof cable kit (for digital cells)"
          ]}
          dimensions={[
            "6m x 3m x 30 tons x 4 load cells",
            "9m x 3m x 60 tons x 4 load cells",
            "12m x 3m x 60 tons x 16 load cells",
            "15m x 3m x 60 tons x 8 load cells",
            "18m x 3m x 80 tons x 8 load cells",
            "22m x 3m x 100 tons x 10 load cells",
            "24m x 3m x 100 tons x 10 load cells"
          ]}
        />

        <ExpandableCard
          id="transportable-weighbridge"
          title="C) TRANSPORTABLE WEIGHBRIDGE"
          overview="Modular metal structure with exceptional portability and rapid deployment capabilities. Ideal for temporary installations and mobile weighing operations."
          image="/images/WhatsApp Image 2025-10-08 at 13.03.37_1f8bf1ea.jpg"
          imageAlt="Transportable Weighbridge"
          features={[
            "Modular metal structure",
            "High resistance to corrosive elements",
            "Easy-to-move weighbridge",
            "Fast installation - 3 hours",
            "Real-time self-diagnosis of the individual system components"
          ]}
          dimensions={[
            "6m x 3m x 30 tons x 4 load cells",
            "9m x 3m x 60 tons x 4 load cells",
            "12m x 3m x 60 tons x 8 load cells",
            "15m x 3m x 60 tons x 8 load cells",
            "18m x 3m x 80 tons x 8 load cells",
            "22m x 3m x 100 tons x 8 load cells",
            "24m x 3m x 100 tons x 10 load cells"
          ]}
        />

        <ExpandableCard
          id="class2-weighbridge"
          title="CLASS 2 - MEDIUM QUALITY WEIGHBRIDGE"
          overview="Balanced solution offering reliable performance with optimized steel construction."
          image="/images/Screenshot_25-8-2025_162257_.jpeg"
          imageAlt="CLASS 2 Medium Quality Weighbridge"
          bgColor="bg-gray-800"
          features={[
            "Optimized steel structure designed for concentrated loads and frequent use",
            "Easy to install (pit-mounted, surface mounted)",
            "High resistance to harsh environmental conditions/pollutants",
            "Easy-to-move weighing platform",
            "Deck thickness 10mm checkered plate",
            "260mm U-channel"
          ]}
          dimensions={[
            "6m x 3m x 30 tons x 4 load cells",
            "9m x 3m x 60 tons x 4 load cells",
            "12m x 3m x 60 tons x 6 load cells",
            "15m x 3m x 60 tons x 8 load cells",
            "18m x 3m x 80 tons x 8 load cells",
            "22m x 3m x 100 tons x 10 load cells",
            "24m x 3m x 100 tons x 10 load cells"
          ]}
        />

        <ExpandableCard
          id="class3-weighbridge"
          title="CLASS 3 - STANDARD WEIGHBRIDGE"
          overview="Cost-effective weighbridge solution with essential features."
          image="/images/Screenshot_25-8-2025_16579_.jpeg"
          imageAlt="CLASS 3 Standard Weighbridge"
          bgColor="bg-gray-800"
          features={[
            "Easy to install (pit-mounted, surface mounted)",
            "Easy-to-move weighing platform",
            "Interconnected load cells",
            "Deck thickness 8mm checkered plate",
            "260mm U-channel"
          ]}
          dimensions={[
            "6m x 3m x 30 tons x 4 load cells",
            "9m x 3m x 60 tons x 4 load cells",
            "12m x 3m x 60 tons x 6 load cells",
            "15m x 3m x 60 tons x 8 load cells",
            "18m x 3m x 80 tons x 8 load cells",
            "22m x 3m x 100 tons x 10 load cells",
            "24m x 3m x 100 tons x 10 load cells"
          ]}
        />

        <ExpandableCard
          id="mobile/foldable-weighbridge"
          title="Mobile Weighbridge"
          overview="Semi-permanent structure made of aluminum; portable & easy to carry; possible to display the weight of each wheel or all wheels; water resistant & vibration-proof; measures small/large vehicles; high accuracy; low profile (39 mm)."
          image="/images/WhatsApp Image 2025-09-30 at 11.24.11_8a59f1b7.jpg"
          imageAlt="Mobile Weighbridge"
          features={[
            "Semi-permanent aluminum structure",
            "Portable & easy to carry",
            "Displays weight per wheel or all wheels",
            "Water resistant and vibration-proof",
            "Measures small and large vehicles",
            "High accuracy, low profile (39 mm)"
          ]}
          dimensions={[
            "39 mm profile height",
            "Wheel-level weighing modes",
            "Aluminum frame model dimensions vary"
          ]}
        />

        <ExpandableCard
          id="multi-deck-axle-weighbridge"
          title="Multi-Deck Axle Weighbridge"
          overview="Multiple independent decks that allow axle-by-axle weighing and total weight calculation with rugged construction and smart integration."
          image="/images/WhatsApp Image 2025-09-30 at 13.39.59_9be18ec5.jpg"
          imageAlt="Multi-Deck Axle Weighbridge"
          features={[
            "Multiple independent decks",
            "High-precision load cells",
            "Axle-by-axle weighing",
            "Integrated summation for GVW",
            "Rugged construction (steel or concrete)",
            "Static or slow-speed dynamic weighing",
            "Smart indicator & connectivity",
            "ERP integration & data management",
            "Independent deck calibration",
            "Overload alerts",
            "Traffic control accessories optional",
            "Weather & corrosion resistant",
            "Optional legal-for-trade certification"
          ]}
          dimensions={[
            "Deck modules per axle group",
            "Load cell layouts: digital or analog",
            "Configurable for static/dynamic use"
          ]}
        />

        {/* Installation & Calibration & Technical Support sections follow */}
        <div className="mt-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-gray-900 to-black text-white p-8 rounded-t-xl">
              <h2 className="text-3xl font-bold flex items-center">
                <Wrench className="h-8 w-8 mr-3" />
                WEIGHBRIDGE INSTALLATION & CALIBRATION
              </h2>
            </div>
            <div className="bg-white border border-gray-200 rounded-b-xl p-8 shadow-lg">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-bold text-black mb-4 flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-red-600" />
                      Professional Services
                    </h4>
                    <p className="text-lg text-gray-700 mb-4">
                      S & S (K) Ltd has a well-trained maintenance crew nationally, fully licensed under the Weights & Measures Act Cap 503.
                    </p>
                  </div>
                  <div>
                    <h5 className="text-lg font-bold text-black mb-3">Service Commitment</h5>
                    <p className="text-gray-700 mb-4">
                      The company is committed to training its staff as a central pillar of:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                        <span>Customer service</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                        <span>Productivity</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                        <span>Profitability</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h5 className="text-lg font-bold text-black mb-3">Training Approach</h5>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Business managers jointly develop training content and schedules</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div classifiable="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Training conducted by experienced professionals</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 shadow-sm">
          <div className="flex items-start space-x-3">
            <Info className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <h4 className="text-lg font-bold text-blue-900 mb-2">Technical Consultation Available</h4>
              <p className="text-blue-800">
                For detailed technical specifications, custom configurations, or engineering consultations, please contact our technical team. All specifications are subject to site conditions and regulatory requirements.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WeighbridgePage;
