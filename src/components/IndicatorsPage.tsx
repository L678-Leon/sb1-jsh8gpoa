import React, { useState } from 'react';
import { ArrowLeft, Zap, ChevronDown, ChevronUp, Info } from 'lucide-react';

interface IndicatorsPageProps {
  onBack: () => void;
}

interface ExpandableSection {
  [key: string]: boolean;
}

const IndicatorsPage: React.FC<IndicatorsPageProps> = ({ onBack }) => {
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
    bgColor = "bg-red-600",
    image,
  }: {
    id: string;
    title: string;
    overview: string;
    features: string[];
    specifications: string[];
    dimensions?: string[];
    bgColor?: string;
    image: string;
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
                {features.slice(0, 6).map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
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
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Complete Features */}
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

                {/* Technical Specifications */}
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

              {/* Dimensions if available */}
              {dimensions && (
                <div className="mt-6">
                  <h5 className="text-lg font-bold text-black mb-4">Additional Specifications</h5>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
                    <ul className="space-y-3">
                      {dimensions.map((dim, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-700 font-mono text-sm">{dim}</span>
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
              <Zap className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-black">INDICATORS</h1>
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
              SCALES & SOFTWARE (K) LTD indicators satisfy the demand for all weighing purposes. 
              From economical to industrial, dry-use to washdown, simple to multifunction — 
              there is always a suitable option for your weighing solution.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Categories:
            </p>
            <div className="bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-xl border border-red-200">
              <div className="grid md:grid-cols-2 gap-4 text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-red-600">A) WEIGHBRIDGE INDICATORS</h4>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="font-bold text-red-600">B) PLATFORM INDICATORS</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* WEIGHBRIDGE INDICATORS Overview */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-gray-900 to-black text-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold">A) WEIGHBRIDGE INDICATORS</h2>
            <p className="text-gray-300 mt-2">This category has **five** types:</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h4 className="font-bold">DD1010 / DD1010iFLYNET</h4>
                <p className="text-sm text-gray-300">Advanced Touch Screen</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h4 className="font-bold">DD1050</h4>
                <p className="text-sm text-gray-300">Industrial Grade</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h4 className="font-bold">D39</h4>
                <p className="text-sm text-gray-300">Color Touch Display</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h4 className="font-bold">DD700 / DD700ic</h4>
                <p className="text-sm text-gray-300">Desktop / Wall Mount</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h4 className="font-bold">DD2060 X-Series</h4>
                <p className="text-sm text-gray-300">High Connectivity Indicator</p>
              </div>
            </div>
          </div>
        </div>

        {/* DD1010 / DD1010iFLYNET */}
        <ExpandableCard
          id="dd1010"
          title="1) DD1010 / DD1010iFLYNET"
          overview={`Advanced weighbridge indicator with 624 MHz processor, 5.7" touch screen color display, and comprehensive connectivity options. Features ABS or pure stainless steel body construction.`}
          image="/images/Screenshot_26-8-2025_1025_.jpeg"
          features={[
            "624 MHz processor",
            "ABS / Pure stainless steel body",
            "128 MB RAM, 128 MB Flash Memory",
            "5.7\" TOUCH SCREEN color display, TFT with LED backlight",
            "Ethernet Port 10/100 Mbps",
            "1 SD card expansion"
          ]}
          specifications={[
            "624 MHz processor",
            "ABS / Pure stainless steel body",
            "128 MB RAM, 128 MB Flash Memory",
            "5.7\" TOUCH SCREEN color display, TFT with LED backlight",
            "Ethernet Port 10/100 Mbps",
            "1 SD card expansion",
            "2 USB Host ports",
            "2 RS232/RS422 serial outputs for printers, repeaters, barcode readers, PC",
            "Metrological log transmitted (Alibi Memory MPP)",
            "Connects to max 2 analog or digital scales",
            "2 dedicated expansion slots (Serial, I/O Digital, Field Bus, I/O Analog, etc.)",
            "Power supply: 110-240 VAC, 50/60 Hz with external 12 VDC adapter",
            "A/D Converter: Sigma Delta 24-bit, 6-wire sensing, discharge protection",
            "Digital load cell supply: 10-18 VDC",
            "Max digital cells: 12 per scale (8+8 for duplex version)"
          ]}
        />

        {/* DD1050 */}
        <ExpandableCard
          id="dd1050"
          title="2) DD1050"
          overview={`Robust and versatile indicator for industrial use with 10.4" touch screen color display. Available in bench or wall-mounted versions with stainless steel IP67 option for harsh environments.`}
          image="/images/Screenshot_26-8-2025_1051_.jpeg"
          bgColor="bg-gray-800"
          features={[
            "Robust and versatile for industrial use",
            "ABS body with stainless steel front",
            "Available in bench or wall-mounted versions",
            "Stainless steel version IP67 for harsh environments",
            "10.4\" TOUCH SCREEN color display with customizable interface",
            "Supports networked communications and peripheral drivers"
          ]}
          specifications={[
            "Robust and versatile for industrial use",
            "ABS body with stainless steel front",
            "Available in bench or wall-mounted versions",
            "Stainless steel version IP67 for harsh environments",
            "10.4\" TOUCH SCREEN color display with customizable interface",
            "Supports networked communications and peripheral drivers",
            "SQL relational database with remote connectivity",
            "Easy export to corporate databases",
            "500 MHz processor",
            "128 MB RAM & Flash Memory",
            "Ethernet 10/100 output",
            "Optional WIFI",
            "2 x 24V AC/DC I/O",
            "1 SD or Compact Flash slot",
            "3 expansion slots (serial, I/O, field buses)",
            "12 VDC supply with external 110-230 VAC adapter",
            "OIML certified"
          ]}
        />

        {/* D39 */}
        <ExpandableCard
          id="d39"
          title="3) D39"
          overview="Advanced indicator with 7-inch 800x480 TFT color touch display. High-accuracy, touch-sensitive operation with comprehensive connectivity and multilevel control system."
          image="/images/Screenshot_26-8-2025_1124_.jpeg"
          features={[
            "7-inch 800x480 TFT color touch display",
            "High-accuracy, touch-sensitive (no keyboard needed)",
            "Supports Ethernet, RS232, RS485, parallel port",
            "Digital adjustment & truck weighing mode",
            "System error correction & multi-language keyboard support",
            "Supports column load cells with bending test"
          ]}
          specifications={[
            "7-inch 800x480 TFT color touch display",
            "High-accuracy, touch-sensitive (no keyboard needed)",
            "Supports Ethernet, RS232, RS485, parallel port",
            "Digital adjustment & truck weighing mode",
            "System error correction & multi-language keyboard support",
            "Supports column load cells with bending test",
            "Multilevel control (user, maintenance, manufacturer)",
            "High-end protection from static and over-voltage",
            "Built-in weighing data printing",
            "Digital load cell interface: RS485 (12 pcs max)",
            "Baud rate: 9600/19200 bps",
            "Power: DC 12V/750mA",
            "Communication protocols: Keli C, E protocols",
            "Data storage: 1000 tare, 4500 new weighings, 300 pending weighings",
            "Indicator power: AC 110-220V, 50-60Hz",
            "Dimension: 318 x 218 x 100 mm"
          ]}
        />

        {/* DD700 / DD700ic */}
        <ExpandableCard
          id="dd700"
          title="4) DD700 / DD700ic"
          overview="Ideal for desktop or wall mounting with IC version in stainless steel for impact protection and stacking. Features CE approval and OIML R76-1 certification with IP69K construction."
          image="/images/Screenshot_26-8-2025_1147_.jpeg"
          bgColor="bg-gray-800"
          features={[
            "Ideal for desktop or wall mounting",
            "IC version in stainless steel for impact protection and stacking",
            "Easy peripheral access for installation",
            "CE approved (Directive 2014/31/EU)",
            "OIML R76-1 certified",
            "IP69K stainless steel construction"
          ]}
          specifications={[
            "Ideal for desktop or wall mounting",
            "IC version in stainless steel for impact protection and stacking",
            "Easy peripheral access for installation",
            "CE approved (Directive 2014/31/EU)",
            "OIML R76-1 certified",
            "IP69K stainless steel construction"
          ]}
        />

        {/* DD2060  X-Series (new) */}
        <ExpandableCard
          id="dd2060x"
          title="5) DD2060X-Series"
          overview="The DD2060X-Series offers innovative connection solutions by integrating weighing operations with management systems (ERP) or other business processes. Its robust and high-visibility 12.1” colour touchscreen (sunlight-readable) allows quick and intuitive operation. Voice control, integrated intercom (VOIP), and camera connectivity make it ideal for automated weighbridge environments."
          image="/images/Screenshot_8-10-2025_155133_www.weightron.com.jpeg"
          bgColor="bg-gray-800"
          features={[
            "Connect up to 4 digital or analogue scales",
            "Ideal for driver operated automated weighbridge solutions",
            "Column, wall or table version",
            "High-resolution 12.1” capacitive touchscreen display (sunlight readable)",
            "Waterproof AISI 304 stainless steel casing",
            "Built-in thermoregulation system",
            "Integral thermal printer, RFID/QR code readers and VOIP intercom",
            "ANPR & snapshot camera connectivity",
            "Fieldbus interfaces: Profinet & Profibus",
            "Ethernet TCP/IP, Wi-Fi, 3x USBs and RS-232/422 ports",
            "Supports 4G, GPRS, GSM",
            "Direct control & communication over LAN, WAN or Cloud network",
            "Full cloud-based automation control suite",
            "7 digital inputs / 7 digital outputs for impulse control",
            "6 serial communication ports RS232, RS422"
          ]}
          specifications={[
            "Display: 12.1” capacitive touchscreen (sunlight readable)",
            "Casing: AISI 304 stainless steel, waterproof",
            "Thermoregulation system built-in",
            "Interface: Ethernet TCP/IP, Wi-Fi, RS-232/422, USB",
            "Connectivity: 4G, GPRS, GSM support",
            "Fieldbus: Profinet & Profibus",
            "Inputs / Outputs: 7 digital I/O",
            "Serial ports: 6 (RS232, RS422)",
            "Mounting: column, wall, or table",
            "Peripheral: thermal printer, RFID/QR, VOIP intercom",
            "Camera: ANPR & snapshot integration",
            "Network: LAN, WAN, Cloud control",
            "Software: Full cloud automation suite"
          ]}
        />

        {/* PLATFORM INDICATORS Overview */}
        <div className="mb-12 mt-16">
          <div className="bg-gradient-to-r from-gray-900 to-black text-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold">B) PLATFORM INDICATORS</h2>
            <p className="text-gray-300 mt-2">This category has three types:</p>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h4 className="font-bold">BWS-R / BWS-T</h4>
                <p className="text-sm text-gray-300">OIML Approved</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h4 className="font-bold">XK315</h4>
                <p className="text-sm text-gray-300">Stainless Steel</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h4 className="font-bold">HW Indicator</h4>
                <p className="text-sm text-gray-300">Non-Trade</p>
              </div>
            </div>
          </div>
        </div>

        {/* BWS-R / BWS-T */}
        <ExpandableCard
          id="bws-r-t"
          title="1) BWS-R / BWS-T"
          overview="Easy-to-use front panel indicator with comprehensive applications including zero, accumulation, check weighing, and animal weighing. Features OIML approval and IP65 waterproof construction."
          image="/images/Screenshot_26-8-2025_21235_.jpeg"
          features={[
            "Easy-to-use front panel",
            "Applications: Zero, Accumulation, Check Weighing, Net/Gross shift, Unit conversion, Peak Hold, Animal Weighing",
            "OIML approval (DANAK 0200-NAWI-04376)",
            "Keyboard lock",
            "IP65 waterproof",
            "Optional RS-232, Bluetooth (BLE), Setpoint output (HI/OK/LOW/BEEP)"
          ]}
          specifications={[
            "Easy-to-use front panel",
            "Applications: Zero, Accumulation, Check Weighing, Net/Gross shift, Unit conversion, Peak Hold, Animal Weighing",
            "OIML approval (DANAK 0200-NAWI-04376)",
            "Keyboard lock",
            "IP65 waterproof",
            "Optional RS-232, Bluetooth (BLE), Setpoint output (HI/OK/LOW/BEEP)",
            "Display: 52mm LCD with LED backlight",
            "Keyboard: 7 mechanical keys",
            "Housing: Stainless steel",
            "Max. Divisions: 6,000e / 30,000d",
            "Load cell excitation: 5V/150mA",
            "ADC update ≤ 1/10 second",
            "Operating Temp: -10°C ~ +40°C",
            "Power: 12V/500mA adapter, 6V/4Ah rechargeable battery",
            "Gross weight: 3.2kg",
            "Master carton 0.017m³; 4-in-1 packaging 0.095m³"
          ]}
        />

        {/* XK315 */}
        <ExpandableCard
          id="xk315-indicator"
          title="2) XK315"
          overview="Stainless steel weight indicator with 6-digit 20mm green LED display. Features comprehensive functionality including manual/automatic accumulation and programmable features."
          image="/images/Screenshot_26-8-2025_21259_.jpeg"
          bgColor="bg-gray-800"
          features={[
            "Stainless steel weight indicator (Model XK315A6GB)",
            "6-digit 20mm green LED display",
            "Micro printer optional",
            "Dimensions: 355 x 250 x 270 mm",
            "Drives 4x350Ω or 8x700Ω load cells",
            "Manual/Automatic accumulation"
          ]}
          specifications={[
            "Stainless steel weight indicator (Model XK315A6GB)",
            "6-digit 20mm green LED display",
            "Micro printer optional",
            "Dimensions: 355 x 250 x 270 mm",
            "Drives 4x350Ω or 8x700Ω load cells",
            "Manual/Automatic accumulation",
            "Programmable zero tracking & digital filter",
            "Selectable kg/lb",
            "RS-232 serial interface",
            "Accuracy x10 boost",
            "Animal weighing & hold function",
            "Counting function",
            "30h operation per full charge",
            "Relative humidity ≤ 85% non-condensing"
          ]}
        />

        {/* HW Indicator (Non-Trade) */}
        <ExpandableCard
          id="hw-indicator"
          title="3) HW Indicator (Non-Trade)"
          overview="Robust indicator suitable for any environment with fast and simple operation. Features maximum application flexibility with full programmability and network communications support."
          image="/images/Screenshot_26-8-2025_21310_.jpeg"
          features={[
            "Robust and suitable for any environment",
            "Fast and simple to use",
            "Maximum application flexibility",
            "Fully programmable",
            "Supports network communications",
            "Data management capable"
          ]}
          specifications={[
            "Robust and suitable for any environment",
            "Fast and simple to use",
            "Maximum application flexibility",
            "Fully programmable",
            "Supports network communications",
            "Data management capable"
          ]}
        />

        {/* Technical Support Notice */}
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

export default IndicatorsPage;
