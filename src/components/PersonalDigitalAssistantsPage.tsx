import React, { useState } from "react";
import { ArrowLeft, Info, ChevronDown, ChevronUp } from "lucide-react";

interface PDADevicePageProps {
  onBack: () => void;
}

interface ExpandableSection {
  [key: string]: boolean;
}

const pdaDevices = [
  {
    id: "cilico-series",
    name: "CILICO SERIES",
    description: "Professional PDA series with advanced connectivity and rugged design.",
    image: "/images/Screenshot_26-8-2025_21721_.jpeg",
    features: [
      "Powerful RFID Reading & Writing",
      "Barcodes Scanning",
      "Quad-core CPU for robust performance",
      "Durable design — survives 1.5 m drops to concrete",
      "Environmental sealing, -25°C to 60°C",
      "Dual front-facing speakers for loud audio",
      "5\" HD screen, usable in sunlight",
      "Wireless Connectivity: Dual-band Wi-Fi, 4G & GSM",
      "Pocketable handheld design",
      "4000 mAh Li-Ion battery"
    ],
    specifications: [
      "RFID Reading & Writing capability",
      "Barcode scanning support",
      "Quad-core CPU, high performance",
      "Drop resistance: 1.5 m to concrete",
      "Operating Temperature: -25°C to 60°C",
      "Dual speakers for loud audio",
      "Display: 5\" HD screen",
      "Wireless: 802.11 a/b/g/n, dual-band Wi-Fi, 4G, GSM quad-band",
      "Form Factor: handheld/mobile computer",
      "Battery: Li-Ion 4000 mAh"
    ]
  },
  {
    id: "v1h",
    name: "V1H",
    description: "High-performance PDA with advanced processing capabilities.",
    image: "/images/Screenshot_26-8-2025_21733_.jpeg",
    features: [
      "Android 6.0 OS",
      "5.0\" HD IPS display (1280×720)",
      "Gesture wake-up support",
      "Corning Gorilla glass, glove operation support",
      "Front 5 MP + Back 13 MP autofocus cameras",
      "Quad-core MTK6735 CPU",
      "2GB + 16GB storage (upgradeable to 2GB + 32GB)",
      "4G LTE optional (bands 1,3,7,20)",
      "WCDMA / GPS / NFC / FM / BT 4.0 support",
      "4500 mAh battery"
    ],
    specifications: [
      "OS: Android 6.0",
      "Display: 5.0\" 1280×720 IPS",
      "Touch: Gorilla glass, glove mode",
      "Cameras: 5MP front, 13MP rear auto-focus",
      "CPU: MTK6735 Quad-core",
      "Memory: 2GB RAM + 16GB Flash (upgradeable)",
      "4G LTE (bands 1,3,7,20) optional",
      "WCDMA: Bands 2/1900, 4/1700-2100, 5/850",
      "Dual SIM, Dual Standby",
      "Wireless: WiFi dual-band (2.4/5 GHz), GPS, NFC, FM, BT 4.0",
      "Battery: 4500 mAh"
    ]
  },
  {
    id: "swell-v710",
    name: "SWELL V710",
    description: "Latest Android 11 PDA with IP68 sealing and 6.3\" HD+ display.",
    image: "/images/Screenshot_26-8-2025_21744_.jpeg",
    features: [
      "Android 11 OS",
      "IP68 water & dust protection",
      "6.3\" HD+ display",
      "5000 mAh battery",
      "Advanced connectivity suites",
      "Rugged field design",
      "Professional grade build",
      "Comprehensive data collection",
      "Long battery life",
      "Weather resistant"
    ],
    specifications: [
      "OS: Android 11",
      "Display: 6.3\" HD+",
      "Battery: 5000 mAh",
      "Protection: IP68 waterproof/dustproof",
      "Connectivity: Full advanced options",
      "Design: Rugged construction"
    ]
  }
];

const PersonalDigitalAssistantsPage: React.FC<PDADevicePageProps> = ({ onBack }) => {
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
    image,
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
              <img
                src={image}
                alt={title}
                className="w-full h-full object-contain p-4 rounded-lg shadow-md mb-4 bg-gray-50"
                onError={(e) => { e.currentTarget.src = '/images/default-placeholder.jpg'; }}
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
                  <h5 className="text-lg font-bold text-black mb-4">Technical Specifications</h5>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                    <ul className="space-y-3">
                      {specifications.map((spec, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
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
              <Info className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-black">PERSONAL DIGITAL ASSISTANTS</h1>
              <p className="text-gray-600 mt-1">Rugged PDAs & Field Devices</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-16">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-black mb-4">Product Overview</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our PDAs combine rugged hardware, smart connectivity, and field-grade reliability.
            </p>
            <p className="text-lg text-gray-700 mb-8">Available models:</p>
            <div className="bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-xl border border-red-200">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
                {pdaDevices.map(device => (
                  <div key={device.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                    <h4 className="font-bold text-red-600">{device.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {pdaDevices.map(device => (
          <ExpandableCard
            key={device.id}
            id={device.id}
            title={device.name}
            overview={device.description}
            features={device.features}
            specifications={device.specifications}
            image={device.image}
          />
        ))}

        <div className="mt-12 max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 shadow-sm">
          <div className="flex items-start space-x-3">
            <Info className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <h4 className="text-lg font-bold text-blue-900 mb-2">Technical Consultation Available</h4>
              <p className="text-blue-800">
                For detailed technical specifications, custom configurations, or engineering consultations, please contact our technical team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDigitalAssistantsPage;

