// Product Categories
export const categories = [
  'WEIGHBRIDGES',
  'INDUSTRIAL SCALES',
  'RETAIL SCALES', 
  'FIELD SCALES',
  'PRECISION SCALES',
  'INDICATORS',
  'PERSONAL DIGITAL ASSISTANTS',
  'WEIGHING SOFTWARE',
  'ACCESSORIES CONSUMABLES AND SPARES'
];

// Product Interface
export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  features?: string[];
  specifications?: string[];
  dimensions?: string[];
  additionalSpecs?: string[];
}

// Products Data
export const products: Product[] = [
  // WEIGHBRIDGES
  {
    id: 'class1-steel-weighbridge-sbp-m',
    name: 'CLASS 1 - Steel Weighbridge SBP/M Model',
    category: 'WEIGHBRIDGES',
    description: 'Optimised steel structure designed for concentrated loads and frequent use with easy installation options.',
    image: '/images/WhatsApp Image 2025-09-30 at 21.31.21_992705e9.jpg',
    features: [
      'Optimised steel structure designed for concentrated loads and frequent use',
      'Easy to install (pit-mounted or surface mounted)',
      'High resistance to harsh environmental conditions/pollutants',
      'Easy load cell access for cleaning and maintenance operations',
      'Easy-to-move weighing platform',
      'Deck thickness 10mm checkered plate',
      '260mm U-channel'
    ],
    dimensions: [
      '8.6m x 3m x 30 tons x 4 load cells',
      '9m x 3m x 60 tons x 4 load cells',
      '12m x 3m x 60 tons x 6 load cells',
      '15m x 3m x 60 tons x 8 load cells',
      '18m x 3m x 80 tons x 8 load cells',
      '22m x 3m x 100 tons x 10 load cells',
      '24m x 3m x 100 tons x 10 load cells'
    ]
  },
  {
    id: 'class1-concrete-weighbridge-sbp-co',
    name: 'CLASS 1 - Concrete Weighbridge SBP/CO Model',
    category: 'WEIGHBRIDGES',
    description: 'Advanced weighbridge solution featuring MULTI-RANGE capability and ATEX certification for hazardous environments.',
    image: '/images/Screenshot_25-8-2025_165834_.jpeg',
    features: [
      'MULTI-RANGE Version (only for digital version)',
      'ATEX Version (for environments at risk of explosion)',
      'Electronic terminals and printers',
      'Frame for ramps made of compacted material',
      'Peripheral electronic accessories',
      'Rodent-proof cable kit (for digital cells)'
    ],
    dimensions: [
      '6m x 3m x 30 tons x 4 load cells',
      '9m x 3m x 60 tons x 4 load cells',
      '12m x 3m x 60 tons x 16 load cells',
      '15m x 3m x 60 tons x 8 load cells',
      '18m x 3m x 80 tons x 8 load cells',
      '22m x 3m x 100 tons x 10 load cells',
      '24m x 3m x 100 tons x 10 load cells'
    ]
  },
  {
    id: 'class1-transportable-weighbridge',
    name: 'CLASS 1 - Transportable Weighbridge',
    category: 'WEIGHBRIDGES',
    description: 'Modular metal structure with exceptional portability and rapid deployment capabilities.',
    image: '/images/WhatsApp Image 2025-10-08 at 13.03.37_1f8bf1ea.jpg',
    features: [
      'Modular metal structure',
      'High resistance to corrosive elements',
      'Easy-to-move weighbridge',
      'Fast installation - 3 hours',
      'Real-time self-diagnosis of the individual system components'
    ],
    dimensions: [
      '6m x 3m x 30 tons x 4 load cells',
      '9m x 3m x 60 tons x 4 load cells',
      '12m x 3m x 60 tons x 8 load cells',
      '15m x 3m x 60 tons x 8 load cells',
      '18m x 3m x 80 tons x 8 load cells',
      '22m x 3m x 100 tons x 8 load cells',
      '24m x 3m x 100 tons x 10 load cells'
    ]
  },
  {
    id: 'class2-medium-weighbridge',
    name: 'CLASS 2 - Medium Quality Weighbridge',
    category: 'WEIGHBRIDGES',
    description: 'Balanced solution offering reliable performance with optimized steel construction.',
    image: '/images/Screenshot_25-8-2025_162148_.jpeg',
    features: [
      'Optimized steel structure designed for concentrated loads and frequent use',
      'Easy to install (pit-mounted, surface mounted)',
      'High resistance to harsh environmental conditions/pollutants',
      'Easy-to-move weighing platform',
      'Deck thickness 10mm checkered plate',
      '260mm U-channel'
    ],
    dimensions: [
      '6m x 3m x 30 tons x 4 load cells',
      '9m x 3m x 60 tons x 4 load cells',
      '12m x 3m x 60 tons x 6 load cells',
      '15m x 3m x 60 tons x 8 load cells',
      '18m x 3m x 80 tons x 8 load cells',
      '22m x 3m x 100 tons x 10 load cells',
      '24m x 3m x 100 tons x 10 load cells'
    ]
  },
  {
    id: 'class3-standard-weighbridge',
    name: 'CLASS 3 - Standard Weighbridge',
    category: 'WEIGHBRIDGES',
    description: 'Cost-effective weighbridge solution with essential features for standard weighing operations.',
    image: '/images/Screenshot_25-8-2025_16579_.jpeg',
    features: [
      'Easy to install (pit-mounted, surface mounted)',
      'Easy-to-move weighing platform',
      'Interconnected load cells',
      'Deck thickness 8mm checkered plate',
      '260mm U-channel'
    ],
    dimensions: [
      '6m x 3m x 30 tons x 4 load cells',
      '9m x 3m x 60 tons x 4 load cells',
      '12m x 3m x 60 tons x 6 load cells',
      '15m x 3m x 60 tons x 8 load cells',
      '18m x 3m x 80 tons x 8 load cells',
      '22m x 3m x 100 tons x 10 load cells',
      '24m x 3m x 100 tons x 10 load cells'
    ]
  },
  {
    id: 'mobile-weighbridges',
    name: 'Mobile Weighbridges',
    category: 'WEIGHBRIDGES',
    description: 'Portable, semi-permanent weighbridge solution designed for vehicle overloading detection and testing.',
    image: '/images/MOBILE WEIGHBRIDGE.jpg',
    features: [
      'Portable and semi-permanent design',
      'Vehicle overloading detection',
      'Easy to carry and deploy',
      'Water resistant construction',
      'Vibration-proof design',
      'Individual wheel weight display',
      'All wheels weight summation',
      'Low profile design (39mm)',
      'High accuracy measurement'
    ],
    specifications: [
      'Structure: Semi-permanent aluminum',
      'Portability: Easy to carry',
      'Display: Individual or all wheels weight display',
      'Protection: Water resistant & vibration-proof',
      'Measurement: Supports small and large vehicles',
      'Use case: Overload detection and weighing tests',
      'Accuracy: High accuracy, 39mm low profile',
      'Installation: Quick setup and deployment'
    ]
  },
  {
    id: 'multi-deck-weighbridges',
    name: 'Multi-Deck Weighbridges',
    category: 'WEIGHBRIDGES',
    description: 'Advanced multi-deck weighbridge system with independent axle weighing and integrated summation.',
    image: '/images/Screenshot_25-8-2025_165946_.jpeg',
    features: [
      'Multiple independent weighing decks',
      'Individual axle weight measurement',
      'Integrated summation system',
      'Advanced load distribution analysis',
      'Real-time weight monitoring',
      'Comprehensive vehicle profiling',
      'Digital connectivity and data logging',
      'Weather-resistant construction'
    ],
    specifications: [
      'Decks: Multiple independent weighing decks',
      'Load Cells: Digital/analog, high precision',
      'Summation: Integrated total weight calculation',
      'Accuracy: ±0.1% of applied load',
      'Construction: Heavy-duty steel/concrete options',
      'Installation: Pit-mounted or surface-mounted',
      'Connectivity: Ethernet, RS-232, USB options',
      'Software: Compatible with SMARTWEIGH system'
    ]
  },

  // INDUSTRIAL SCALES
  {
    id: 'pure-mild-steel-scale',
    name: 'Pure Mild Steel Industrial Scale',
    category: 'INDUSTRIAL SCALES',
    description: 'Rugged and durable industrial scale for indoor and outdoor use with heavy-duty design.',
    image: '/images/Screenshot_25-8-2025_17033_.jpeg',
    features: [
      'Check weighing application',
      'Accumulation function',
      'Animal scale capability',
      'Keyboard lock',
      'Mild steel platform with stainless steel plate option',
      'Battery provides up to 70 hours of continuous use',
      'Optional RS-232 interface',
      'Optional WIFI connectivity',
      'Bluetooth enabled (BLE)',
      'LCD or LED screen'
    ],
    specifications: [
      'Capacities: 300kg ~ 2 tonnes',
      'Max. Divisions: 3,000e; 15,000d',
      'Load cell excitation voltage: 5V/150mA',
      'ADC: Sigma delta',
      'ADC update ≤ 1/10 second',
      'Operating Temperature: -10°C ~ +40°C'
    ]
  },
  {
    id: 'pure-stainless-steel-scale',
    name: 'Pure Stainless Steel Industrial Scale', 
    category: 'INDUSTRIAL SCALES',
    description: 'Pure stainless steel construction for demanding industrial environments with advanced connectivity.',
    image: '/images/Screenshot_25-8-2025_22241_.jpeg',
    features: [
      'Check weighing application',
      'Accumulation function',
      'Animal scale capability',
      'Keyboard lock',
      'Pure stainless steel construction',
      'Battery provides up to 70 hours of continuous use',
      'Optional RS-232 interface',
      'Optional analog output (0-10V / 4-20mA)',
      'Bluetooth enabled (100m coverage)',
      'LCD or LED screen'
    ],
    specifications: [
      'Capacities: 30kg ~ 2 tonnes',
      'Max. Divisions: 3,000e; 15,000d',
      'Load cell excitation voltage: 5V/150mA',
      'ADC: Sigma delta',
      'ADC update ≤ 1/10 second',
      'Operating Temperature: -10°C ~ +40°C'
    ],
    dimensions: [
      '280mm x 280mm x 1 load cell (Cap. 30kg)',
      '460mm x 600mm x 1 load cell (Cap. 300kg)',
      '600mm x 600mm x 1 load cell (Cap. 500kg)',
      '1m x 1m x 4 load cells (Cap. 1 ton)',
      '1.2m x 1.2m x 4 load cells'
    ]
  },
  {
    id: 'foldable-scale',
    name: 'Foldable Scale',
    category: 'INDUSTRIAL SCALES',
    description: 'Portable foldable industrial scale with mild steel construction and stainless steel plate.',
    image: '/images/Screenshot_25-8-2025_17058_.jpeg',
    features: [
      'Check weighing application',
      'Accumulation function',
      'Animal scale capability',
      'Keyboard lock',
      'Pure mild steel with stainless steel plate',
      'Battery provides up to 70 hours of continuous use',
      'Optional RS-232 interface',
      'Optional analog output (0-10V / 4-20mA)',
      'Bluetooth enabled (100m coverage)',
      'LCD or LED screen'
    ],
    specifications: [
      'Capacities: 300kg',
      'Max. Divisions: 3,000e; 15,000d',
      'Load cell excitation voltage: 5V/150mA',
      'ADC: Sigma delta',
      'ADC update ≤ 1/10 second',
      'Operating Temperature: -10°C ~ +40°C'
    ],
    dimensions: [
      '460mm x 600mm x 1 load cell (Cap. 300kg)'
    ]
  },
  {
    id: 'pallet-truck-scale',
    name: 'Pallet Truck Scale',
    category: 'INDUSTRIAL SCALES',
    description: 'Specialized pallet truck scale with thinner fork design suitable for various applications.',
    image: '/images/Screenshot_25-8-2025_17118_.jpeg',
    features: [
      'Thinner fork, suitable for various applications',
      'Reasonable fork width: 160mm for good weighing performance and accuracy',
      'Oilless bearing to prolong working life',
      'Powder paint for anti-corrosion',
      'OIML approved load cell and indicator'
    ],
    specifications: [
      'Fork width: 160mm',
      'OIML approved components',
      'Anti-corrosion powder paint coating',
      'Oilless bearing system'
    ]
  },
  {
    id: 'cattle-weigher',
    name: 'Cattle Weigher',
    category: 'INDUSTRIAL SCALES',
    description: 'Specialized livestock weighing scale designed for cattle and livestock with animal-friendly design.',
    image: '/images/Screenshot_25-8-2025_17131_.jpeg',
    features: [
      'Accurate, durable, convenient, and animal-friendly design',
      'Suitable for Cattle, Goat, Sheep, Pig',
      'Strong steel construction',
      'Robust design',
      'Digital platform',
      'Indicator can be detached and charged from a different location',
      'Internal rechargeable battery'
    ],
    specifications: [
      'Suitable for: Cow, Goat, Sheep, Pig',
      'Strong steel construction',
      'Digital platform technology',
      'Detachable indicator',
      'Internal rechargeable battery',
      'Animal-friendly design'
    ]
  },

  // RETAIL SCALES
  {
    id: 'mepl-scale',
    name: 'MEPL Scale',
    category: 'RETAIL SCALES',
    description: 'Advanced retail scale with comprehensive PLU functionality and OIML approval.',
    image: '/images/Screenshot_26-8-2025_21530_.jpeg',
    features: [
      '50 direct PLU and 99 indirect PLU',
      'Auto unit price clear',
      'Accumulation function',
      'Give change function',
      'kg/100g shift',
      'Battery provides up to 70 hours of continuous use',
      'OIML approval from Delta'
    ],
    specifications: [
      'Display: 20mm digit display, white LED backlight',
      'Capacities: 15kg or 30kg',
      'Pan size: 240 x 370mm',
      'Keyboard: 75 keys (mechanical switch)',
      'Housing: ABS plastic',
      'Max. Divisions: 3,000e; 2x3,000; 6,000d'
    ]
  },
  {
    id: 'ksp-scale',
    name: 'KSP Scale',
    category: 'RETAIL SCALES',
    description: 'Dual-side LCD display retail scale with comprehensive PLU functionality and water-splash proof design.',
    image: '/images/Screenshot_26-8-2025_21549_.jpeg',
    features: [
      '18mm Dual-side LCD Display',
      'Single-range division',
      'Auto zero point tracking',
      'Tare function',
      'Give change function',
      '96 PLU for unit price',
      'Water-splash proof in-use cover',
      'Stainless steel platter'
    ],
    specifications: [
      'Power Source: 6V Rechargeable Battery (160h w/o backlight)',
      'Operating Temp: 0°C ~ +40°C',
      'Humidity: <80%',
      'Dimensions: Scale 300x330x120mm',
      'Platter: 300x240mm'
    ]
  },
  {
    id: 'sm-5300x-scale',
    name: 'SM-5300X Scale',
    category: 'RETAIL SCALES',
    description: 'Advanced retail scale with video playback capabilities for in-store promotions.',
    image: '/images/Screenshot_26-8-2025_2165_.jpeg',
    features: [
      'Easy-to-use, function-oriented user interface',
      'Scalable configuration with future-ready solutions',
      'Video playback for in-store promotions and advertisements',
      'High-resolution 300 dpi label printing'
    ],
    specifications: [
      'High-resolution 300 dpi label printing',
      'Video playback capability',
      'Function-oriented user interface',
      'Scalable configuration system'
    ]
  },

  // FIELD SCALES
  {
    id: 'xk315-field-scale',
    name: 'XK 315',
    category: 'FIELD SCALES',
    description: 'Versatile weighing indicator suitable for both field scales and indicator applications with advanced functionality.',
    image: '/images/XK315.jpg',
    features: [
      'Dual purpose design - field scale and indicator',
      'Advanced weighing functionality',
      'Robust construction for field use',
      'High accuracy measurement',
      'Easy operation interface',
      'Portable and durable'
    ],
    specifications: [
      'Dual functionality: Field scale and indicator',
      'Construction: Robust field-ready design',
      'Accuracy: High precision measurement',
      'Interface: User-friendly operation',
      'Portability: Easy transport and setup'
    ]
  },
  {
    id: 'dr-150',
    name: 'DR 150',
    category: 'FIELD SCALES',
    description: 'Ideal field scale for collection in all sectors including Tea and Milk with SGS 500% safety approval.',
    image: '/images/Screenshot_26-8-2025_21440_.jpeg',
    features: [
      'Ideal for field collection in all sectors (Tea, Milk, etc.)',
    ]
  },

  // PRECISION SCALES
  {
    id: 'ehb-precision-scale',
    name: 'EHB Precision Scale',
    category: 'PRECISION SCALES',
    description: 'Ideal for lab and precious metal mining industry with OIML approval.',
    image: '/images/Screenshot_26-8-2025_21621_.jpeg',
    features: [
      'OIML approved (Delta DK0199.424)',
      'Rechargeable battery up to 40h',
      'Standard RS-232 interface',
      'Optional Bluetooth and USB ports',
      'Optional rear display',
      'Percentage weighing',
      'Counting function',
      'Accumulation',
      'Unit conversion'
    ],
    specifications: [
      'Display: 16.5mm LCD with white LED backlight',
      'Capacities: 150g - 6000g',
      'Pan size: 280 x 385mm',
      'Housing: ABS plastic',
      'Max. Divisions: 2 x 3,000e',
      'Operating Temp: 0°C ~ +40°C'
    ]
  },
  {
    id: 'ahw-precision-scale',
    name: 'AHW Precision Scale',
    category: 'PRECISION SCALES',
    description: 'High-precision laboratory scale with up to 300,000 resolution and OIML approval.',
    image: '/images/Screenshot_26-8-2025_21629_.jpeg',
    features: [
      'Up to 300,000 resolution',
      'OIML approved (Delta DK0199.266)',
      'Rechargeable battery up to 40h',
      'Standard RS-232 interface',
      'Optional weight function, USB, Bluetooth',
      'Percentage weighing',
      'Counting function',
      'Accumulation',
      'Unit conversion'
    ],
    specifications: [
      'Display: 6.5mm LCD with white LED backlight',
      'Capacities: 1.5kg/3kg/6kg/15kg',
      'Pan sizes: Ø80mm, Ø120mm, 140x150mm, 180x190mm',
      'Housing: ABS plastic',
      'Max. Divisions: 6,000e / 60,000d / 150,000d / 300,000d',
      'Operating Temp: +5°C ~ +40°C'
    ]
  },
  {
    id: 'baby-scale',
    name: 'BABY Scale',
    category: 'PRECISION SCALES',
    description: 'Ideal for pediatric hospitals and clinics with removable baby tray.',
    image: '/images/Screenshot_26-8-2025_21646_.jpeg',
    features: [
      'Removable baby tray (converts to standing scale)',
      'Drinking function (pre/post feed weighing)',
      'Adjustable 4 feet',
      'Wall mount for indicator',
      'Optional initial-verification',
      'Optional RS-232 for computer/printer'
    ],
    specifications: [
      'Display: 25mm LCD with white LED backlight',
      'Capacities: 15kg',
      'Pan size: 600 x 250mm',
      'Platform: 280 x 325mm',
      'Height Measure: ~400mm to 800mm',
      'Operating Temp: +10°C ~ +40°C'
    ]
  },
  {
    id: 'personal-scales',
    name: 'Personal Scales',
    category: 'PRECISION SCALES',
    description: 'OIML approved personal scale with 250kg capacity and high-precision.',
    image: '/images/Screenshot_26-8-2025_21659_.jpeg',
    features: [
      'OIML approved',
      'Capacity: 250kg x 100g',
      'Pan size: 370 x 370mm',
      '25mm LCD with white LED backlight',
      'Long battery life up to 40h use'
    ],
    specifications: [
      'OIML approved',
      'Capacity: 250kg x 100g',
      'Pan size: 370 x 370mm',
      'Display: 25mm LCD with white LED backlight',
      'Battery: 1.2V 2000mAh x 6 (Ni-MH), up to 40h use'
    ]
  },

  // INDICATORS
  {
    id: 'dd2060x-series',
    name: 'DD2060X-Series',
    category: 'INDICATORS',
    description: 'Innovative weighbridge indicator with 12.1" touchscreen, ERP integration, voice control, and camera connectivity for automated weighbridge environments.',
    image: '/images/Screenshot_8-10-2025_155133_www.weightron.com.jpeg',
    isNew: true,
    features: [
      'High-resolution 12.1" capacitive touchscreen (sunlight readable)',
      'Voice control and integrated VOIP intercom',
      'ANPR & snapshot camera connectivity',
      'Full cloud-based automation control suite',
      'Waterproof AISI 304 stainless steel casing',
      'Connect up to 4 digital or analogue scales',
      'Ethernet TCP/IP, Wi-Fi, 4G, GPRS, GSM support',
      'Integral thermal printer and RFID/QR code readers'
    ],
    specifications: [
      'Display: 12.1" capacitive touchscreen (sunlight readable)',
      'Casing: AISI 304 stainless steel, waterproof',
      'Connectivity: Ethernet TCP/IP, Wi-Fi, 4G, GPRS, GSM',
      'Fieldbus: Profinet & Profibus',
      'Inputs/Outputs: 7 digital I/O',
      'Serial ports: 6 (RS232, RS422)',
      'Mounting: column, wall, or table',
      'Peripheral: thermal printer, RFID/QR, VOIP intercom'
    ]
  },
  {
    id: 'indicators-fly-net',
    name: 'Indicators Fly Net',
    category: 'INDICATORS',
    description: 'Advanced indicator system with fly net protection for outdoor weighing applications and enhanced durability.',
    image: '/images/new fly.jpg',
    features: [
      'Fly net protection design',
      'Outdoor rated construction',
      'Advanced display technology',
      'Weather resistant housing',
      'Enhanced durability features',
      'Professional grade components'
    ],
    specifications: [
      'Protection: Fly net integrated design',
      'Weather resistance: IP rated',
      'Display: Advanced technology',
      'Construction: Outdoor rated materials',
      'Durability: Enhanced protection features'
    ]
  },
  {
    id: 'dd1010-iflynet',
    name: 'DD1010/DD1010iFLYNET',
    category: 'INDICATORS',
    description: 'Advanced weighbridge indicator with 624 MHz processor and 5.7" touch screen color display.',
    image: '/images/Screenshot_26-8-2025_1025_.jpeg',
    features: [
      '624 MHz processor',
      'ABS / Pure stainless steel body',
      '128 MB RAM, 128 MB Flash Memory',
      '5.7" TOUCH SCREEN color display',
      'Ethernet Port 10/100 Mbps',
      '1 SD card expansion',
      '2 USB Host ports',
      'Bluetooth connectivity'
    ],
    specifications: [
      '624 MHz processor',
      '128 MB RAM, 128 MB Flash Memory',
      '5.7" TOUCH SCREEN color display, TFT with LED backlight',
      'Ethernet Port 10/100 Mbps',
      '2 RS232/RS422 serial outputs',
      'Power supply: 110-240 VAC, 50/60 Hz',
      'Max digital cells: 12 per scale'
    ]
  },
  {
    id: 'dd1050',
    name: 'DD1050',
    category: 'INDICATORS',
    description: 'Robust and versatile indicator for industrial use with 10.4" touch screen color display.',
    image: '/images/Screenshot_26-8-2025_1051_.jpeg',
    features: [
      'Robust and versatile for industrial use',
      'ABS body with stainless steel front',
      'Available in bench or wall-mounted versions',
      'Stainless steel version IP67',
      '10.4" TOUCH SCREEN color display',
      'Networked communications support'
    ],
    specifications: [
      '500 MHz processor',
      '128 MB RAM & Flash Memory',
      'Ethernet 10/100 output',
      'Optional WIFI',
      '2 x 24V AC/DC I/O',
      '12 VDC supply with external 110-230 VAC adapter',
      'OIML certified'
    ]
  },
  {
    id: 'd39',
    name: 'D39',
    category: 'INDICATORS',
    description: 'Advanced indicator with 7-inch 800x480 TFT color touch display.',
    image: '/images/Screenshot_26-8-2025_1124_.jpeg',
    features: [
      '7-inch 800x480 TFT color touch display',
      'High-accuracy, touch-sensitive',
      'Supports Ethernet, RS232, RS485, parallel port',
      'Digital adjustment & truck weighing mode',
      'System error correction',
      'Multi-language keyboard support',
      'Column load cells support'
    ],
    specifications: [
      '7-inch 800x480 TFT color touch display',
      'Digital load cell interface: RS485 (12 pcs max)',
      'Baud rate: 9600/19200 bps',
      'Power: DC 12V/750mA',
      'Data storage: 1000 tare, 4500 new weighings',
      'Dimension: 318 x 218 x 100 mm'
    ]
  },
  {
    id: 'dd700-dd700ic',
    name: 'DD700/DD700ic',
    category: 'INDICATORS',
    description: 'Ideal for desktop or wall mounting with IC version in stainless steel.',
    image: '/images/Screenshot_26-8-2025_1147_.jpeg',
    features: [
      'Ideal for desktop or wall mounting',
      'IC version in stainless steel for impact protection',
      'Easy peripheral access for installation',
      'CE approved (Directive 2014/31/EU)',
      'OIML R76-1 certified',
      'IP69K stainless steel construction'
    ],
    specifications: [
      'CE approved (Directive 2014/31/EU)',
      'OIML R76-1 certified',
      'IP69K stainless steel construction',
      'Desktop or wall mounting'
    ]
  },
  {
    id: 'bws-r-bws-t',
    name: 'BWS-R/BWS-T',
    category: 'INDICATORS',
    description: 'Easy-to-use front panel indicator with comprehensive applications and OIML approval.',
    image: '/images/Screenshot_26-8-2025_21235_.jpeg',
    features: [
      'Easy-to-use front panel',
      'Zero, Accumulation, Check Weighing applications',
      'Net/Gross shift, Unit conversion',
      'Peak Hold, Animal Weighing',
      'OIML approval',
      'Keyboard lock',
      'IP65 waterproof'
    ],
    specifications: [
      'Display: 52mm LCD with LED backlight',
      'Keyboard: 7 mechanical keys',
      'Housing: Stainless steel',
      'Max. Divisions: 6,000e / 30,000d',
      'Operating Temp: -10°C ~ +40°C',
      'Power: 12V/500mA adapter, 6V/4Ah battery'
    ]
  },
  {
    id: 'xk315-indicator',
    name: 'XK315 (Indicator)',
    category: 'INDICATORS',
    description: 'Stainless steel weight indicator with 6-digit 20mm green LED display.',
    image: '/images/Screenshot_26-8-2025_21259_.jpeg',
    features: [
      'Stainless steel weight indicator',
      '6-digit 20mm green LED display',
      'Micro printer optional',
      'Manual/Automatic accumulation',
      'Programmable zero tracking',
      'Selectable kg/lb',
      'RS-232 serial interface',
      'Animal weighing & hold function'
    ],
    specifications: [
      'Dimensions: 355 x 250 x 270 mm',
      'Drives 4x350Ω or 8x700Ω load cells',
      '30h operation per full charge',
      'Relative humidity ≤ 85% non-condensing'
    ]
  },
  {
    id: 'hw-indicator-non-trade',
    name: 'HW Indicator (Non-Trade)',
    category: 'INDICATORS',
    description: 'Robust indicator suitable for any environment with maximum application flexibility.',
    image: '/images/Screenshot_26-8-2025_21310_.jpeg',
    features: [
      'Robust and suitable for any environment',
      'Fast and simple to use',
      'Maximum application flexibility',
      'Fully programmable',
      'Supports networked communications',
      'Data management capable'
    ],
    specifications: [
      'Robust construction for any environment',
      'Fully programmable functionality',
      'Networked communications support',
      'Data management capabilities'
    ]
  },

 // PERSONAL DIGITAL ASSISTANTS
{
  id: 'cilico-series',
  name: 'CILICO SERIES',
  category: 'PERSONAL DIGITAL ASSISTANTS',
  description: 'Professional PDA series with advanced connectivity and rugged design.',
  image: '/images/Screenshot_26-8-2025_21721_.jpeg',
  features: [
    'Integrated PDA and indicator solution',
    'Fly net protection for outdoor use',
    'Comprehensive data collection',
    'Field operations optimized',
    'Advanced connectivity options',
    'Weather resistant design'
  ],
  specifications: [
    'Integration: PDA with indicator system',
    'Protection: Fly net outdoor protection',
    'Data: Comprehensive collection capabilities',
    'Connectivity: Advanced options',
    'Weather: Resistant design'
  ]
},
{
  id: 'v1h',
  name: 'V1H',
  category: 'PERSONAL DIGITAL ASSISTANTS',
  description: 'High-performance PDA with advanced processing capabilities.',
  image: '/images/Screenshot_26-8-2025_21733_.jpeg',
  features: [
    'High-performance processing',
    'Advanced data collection',
    'Multi-connectivity options',
    'Durable construction',
    'Extended battery life',
    'User-friendly interface'
  ],
  specifications: [
    'High-performance processor',
    'Advanced data collection capabilities',
    'Multi-connectivity options',
    'Extended battery life'
  ]
},
{
  id: 'swell-v710',
  name: 'SWELL V710',
  category: 'PERSONAL DIGITAL ASSISTANTS',
  description: 'Latest Android 11 PDA with IP68 sealing and 6.3" HD+ display.',
  image: '/images/Screenshot_26-8-2025_21744_.jpeg',
  features: [
    'Android 11 operating system',
    'IP68 waterproof sealing',
    '6.3" HD+ display',
    '5000 mAh battery',
    'Advanced connectivity options',
    'Rugged design for field operations',
    'Professional grade construction',
    'Data collection capabilities',
    'Long battery life',
    'Weather resistant'
  ],
  specifications: [
    'OS: Android 11',
    'Display: 6.3" HD+',
    'Battery: 5000 mAh',
    'Protection: IP68 waterproof',
    'Connectivity: Advanced options',
    'Design: Rugged construction'
  ]
},

// WEIGHING SOFTWARE
{
  id: 'pimapp-software',
  name: 'PIMAPP Software (Field Collection)',
  category: 'WEIGHING SOFTWARE',
  description: 'Automated solution for field officers to collect, weigh, issue receipts, and upload weighments in real time.',
  image: '/images/Screenshot_26-8-2025_21816_.jpeg',
  features: [
    'Automated solution for field officers',
    'Real-time weighment collection and upload',
    'Bluetooth links all components',
    'Instant receipt printing and SMS notifications'
  ],
  specifications: [
    'Components: Field scale, PDA, Thermal printer, Cloud backend',
    'Bluetooth connectivity for all components',
    'Real-time data upload to cloud/backend',
    'Instant SMS notifications to farmers'
  ]
},
{
  id: 'smartweigh-factory',
  name: 'SMARTWEIGH (Factory Collection)',
  category: 'WEIGHING SOFTWARE',
  description: 'Automated factory reception weighing solution for products like milk.',
  image: '/images/Screenshot_26-8-2025_21832_.jpeg',
  features: [
    'Automated factory reception weighing',
    'Receipt generation and printing',
    'ERP integration and data upload',
    'Real-time weight capture and recording'
  ],
  specifications: [
    'Components: Receiving tank, Floor scale, Indicator, Computer',
    'Automated weight capture and recording',
    'Receipt printing capability',
    'ERP integration'
  ]
},
{
  id: 'smartweigh-weighbridge',
  name: 'SMARTWEIGH (Weighbridge)',
  category: 'WEIGHING SOFTWARE',
  description: 'Automated weighbridge solution with ANPR camera integration and ERP connectivity.',
  image: '/images/Screenshot_26-8-2025_21844_.jpeg',
  features: [
    'Automated weighbridge weighing solution',
    'ANPR camera integration for vehicle identification',
    'Real-time weight capture and display',
    'Automated receipt generation and printing',
    'ERP and back-end system integration',
    'Complete transaction data management'
  ],
  specifications: [
    'Components: Weighbridge, Indicator, ANPR Cameras, Computer, Software, Printer',
    'ANPR camera integration',
    'Real-time weight capture system',
    'ERP integration capability',
    'Complete transaction management'
  ]
},

  // ACCESSORIES CONSUMABLES AND SPARES
  {
    id: 'cpd-m-load-cells',
    name: 'CPD-M Load Cells',
    category: 'ACCESSORIES CONSUMABLES AND SPARES',
    description: 'Premium Italian-made load cells with electronic memory calibration data.',
    image: '/images/Screenshot_26-8-2025_14141_.jpeg',
    features: [
      'Made in ITALY',
      'Electronic memory calibration',
      '17-4 PH stainless steel',
      'IP68/69K connectors',
      'Continuous diagnostics'
    ],
    specifications: [
      'Origin: Made in Italy',
      'Material: 17-4 PH stainless steel',
      'Protection: IP68/69K connectors',
      'Features: Electronic memory calibration'
    ]
  },
  {
    id: 'zswfg-adss-load-cells',
    name: 'ZSWFG-ADSS Load Cells',
    category: 'ACCESSORIES CONSUMABLES AND SPARES',
    description: 'Digital sensor with double shake column structure, 10t to 50t capacity.',
    image: '/images/Screenshot_26-8-2025_141420_.jpeg',
    features: [
      'Capacity 10t to 50t',
      'Double shake column',
      'OIML C5 approved',
      'Stainless steel',
      'Anti-rotation design'
    ],
    specifications: [
      'Capacity: 10t to 50t',
      'Structure: Double shake column',
      'Approval: OIML C5',
      'Material: Stainless steel'
    ]
  },
  {
    id: 'eds-load-cells',
    name: 'EDS Load Cells',
    category: 'ACCESSORIES CONSUMABLES AND SPARES',
    description: 'High-quality load cells for weighbridge applications.',
    image: '/images/Screenshot_26-8-2025_141439_.jpeg',
    features: [
      'High accuracy',
      'Durable construction',
      'Weather resistant',
      'Easy installation',
      'Long service life'
    ],
    specifications: [
      'High accuracy measurement',
      'Durable construction',
      'Weather resistant design',
      'Easy installation process'
    ]
  },
  {
    id: 'junction-box',
    name: 'Junction Box',
    category: 'ACCESSORIES CONSUMABLES AND SPARES',
    description: 'Essential component for weighbridge load cell connections.',
    image: '/images/Screenshot_26-8-2025_141457_.jpeg',
    features: [
      'Weatherproof construction',
      'Multiple connections',
      'Signal management',
      'Easy maintenance',
      'Durable housing'
    ],
    specifications: [
      'Construction: Weatherproof',
      'Connections: Multiple input/output',
      'Maintenance: Easy access design'
    ]
  },
  {
    id: 'load-cells-shear-beam',
    name: 'Load Cells Shear Beam',
    category: 'ACCESSORIES CONSUMABLES AND SPARES',
    description: 'Shear beam load cells for industrial applications.',
    image: '/images/Screenshot_28-8-2025_14833_.jpeg',
    features: [
      'Shear beam design',
      'High precision',
      'Industrial grade',
      'Overload protection',
      'Easy installation'
    ],
    specifications: [
      'Design: Shear beam',
      'Grade: Industrial',
      'Protection: Overload protection',
      'Installation: Easy mounting'
    ]
  },
  {
    id: 'single-point-load-cell',
    name: 'Single Point Load Cell',
    category: 'ACCESSORIES CONSUMABLES AND SPARES',
    description: 'Single point load cells for platform scales.',
    image: '/images/Screenshot_28-8-2025_14850_.jpeg',
    features: [
      'Single point design',
      'Accurate measurement',
      'Compact size',
      'Easy integration',
      'Reliable performance'
    ],
    specifications: [
      'Design: Single point',
      'Size: Compact',
      'Integration: Easy mounting',
      'Performance: Reliable operation'
    ]
  },
  {
    id: 'connectors',
    name: 'Connectors',
    category: 'ACCESSORIES CONSUMABLES AND SPARES',
    description: 'High-quality electrical connectors for weighing systems.',
    image: '/images/Screenshot_28-8-2025_14919_.jpeg',
    features: [
      'Waterproof design',
      'Secure connections',
      'Corrosion resistant',
      'Easy installation',
      'Multiple configurations'
    ],
    specifications: [
      'Design: Waterproof',
      'Security: Secure connections',
      'Resistance: Corrosion resistant',
      'Configurations: Multiple options'
    ]
  },
  {
    id: 'platform-leveling-foot',
    name: 'Platform Leveling Foot',
    category: 'ACCESSORIES CONSUMABLES AND SPARES',
    description: 'Adjustable leveling feet for scale platforms.',
    image: '/images/Screenshot_28-8-2025_14931_.jpeg',
    features: [
      'Adjustable height',
      'Stable support',
      'Corrosion resistant',
      'Easy adjustment',
      'Durable construction'
    ],
    specifications: [
      'Height: Adjustable',
      'Support: Stable base',
      'Resistance: Corrosion resistant',
      'Construction: Durable materials'
    ]
  },
  {
    id: 's-type-load-cell',
    name: 'S-Type Load Cell',
    category: 'ACCESSORIES CONSUMABLES AND SPARES',
    description: 'S-type load cells for tension and compression applications.',
    image: '/images/Screenshot_28-8-2025_1493_.jpeg',
    features: [
      'S-type design',
      'Tension/compression',
      'High accuracy',
      'Robust construction',
      'Versatile applications'
    ],
    specifications: [
      'Design: S-type',
      'Application: Tension/compression',
      'Accuracy: High precision',
      'Construction: Robust design'
    ]
  },
  {
    id: 'mainboard-counter',
    name: 'Mainboard (Counter)',
    category: 'ACCESSORIES CONSUMABLES AND SPARES',
    description: 'Main circuit board for counter scales.',
    image: '/images/Screenshot_28-8-2025_31851_.jpeg',
    features: [
      'Advanced processing',
      'Multiple connectivity',
      'Reliable operation',
      'Easy replacement',
      'Quality components'
    ],
    specifications: [
      'Processing: Advanced capability',
      'Connectivity: Multiple options',
      'Operation: Reliable performance',
      'Replacement: Easy installation'
    ]
  },
  {
    id: 'keypad',
    name: 'Keypad',
    category: 'ACCESSORIES CONSUMABLES AND SPARES',
    description: 'Replacement keypads for various scale models.',
    image: '/images/Screenshot_28-8-2025_31915_.jpeg',
    features: [
      'Durable membrane',
      'Water resistant',
      'Easy replacement',
      'Multiple configurations',
      'Long service life'
    ],
    specifications: [
      'Material: Durable membrane',
      'Protection: Water resistant',
      'Installation: Easy replacement',
      'Life: Long service duration'
    ]
  },
  {
    id: 'charger-counter',
    name: 'Charger (Counter)',
    category: 'ACCESSORIES CONSUMABLES AND SPARES',
    description: 'Power adapters and chargers for counter scales.',
    image: '/images/Screenshot_28-8-2025_32012_.jpeg',
    features: [
      'Reliable power delivery',
      'Multiple voltage options',
      'Safety certified',
      'Compact design',
      'Universal compatibility'
    ],
    specifications: [
      'Power: Reliable delivery',
      'Voltage: Multiple options',
      'Safety: Certified design',
      'Compatibility: Universal'
    ]
  },
  {
    id: 'mainboard-field',
    name: 'Mainboard (Field)',
    category: 'ACCESSORIES CONSUMABLES AND SPARES',
    description: 'Circuit boards for field scale applications.',
    image: '/images/Screenshot_28-8-2025_32026_.jpeg',
    features: [
      'Rugged construction',
      'Weather resistant',
      'Advanced functionality',
      'Easy installation',
      'Quality components'
    ],
    specifications: [
      'Construction: Rugged design',
      'Protection: Weather resistant',
      'Functionality: Advanced features',
      'Installation: Easy setup'
    ]
  },
  {
    id: 'batteries',
    name: 'Batteries',
    category: 'ACCESSORIES CONSUMABLES AND SPARES',
    description: 'High-capacity rechargeable batteries for portable scales.',
    image: '/images/Screenshot_28-8-2025_32042_.jpeg',
    features: [
      'High capacity',
      'Long lasting',
      'Rechargeable',
      'Multiple sizes',
      'Quality cells'
    ],
    specifications: [
      'Capacity: High capacity',
      'Type: Rechargeable',
      'Sizes: Multiple options',
      'Quality: Premium cells'
    ]
  },
  {
    id: 'screen-field',
    name: 'Screen (Field)',
    category: 'ACCESSORIES CONSUMABLES AND SPARES',
    description: 'Replacement displays for field scales.',
    image: '/images/Screenshot_28-8-2025_32034_.jpeg',
    features: [
      'High visibility',
      'Weather resistant',
      'Easy replacement',
      'Multiple sizes',
      'LED backlight'
    ],
    specifications: [
      'Visibility: High visibility display',
      'Protection: Weather resistant',
      'Sizes: Multiple options',
      'Backlight: LED illumination'
    ]
  },
  {
    id: 'carrier-bags',
    name: 'Carrier Bags',
    category: 'ACCESSORIES CONSUMABLES AND SPARES',
    description: 'Durable carrying cases for portable scales.',
    image: '/images/Screenshot_28-8-2025_32057_.jpeg',
    features: [
      'Durable construction',
      'Weather protection',
      'Easy transport',
      'Multiple sizes',
      'Secure storage'
    ],
    specifications: [
      'Construction: Durable materials',
      'Protection: Weather resistant',
      'Transport: Easy carrying',
      'Storage: Secure design'
    ]
  },
  {
    id: 'charger-battery-pda',
    name: 'Charger Battery (PDA)',
    category: 'ACCESSORIES CONSUMABLES AND SPARES',
    description: 'Power solutions for PDA devices.',
    image: '/images/WhatsApp Image 2025-09-26 at 12.10.41_f604aada.jpg',
    features: [
      'Fast charging',
      'Long battery life',
      'Universal compatibility',
      'Safety certified',
      'Portable design'
    ],
    specifications: [
      'Charging: Fast charging capability',
      'Life: Long battery duration',
      'Compatibility: Universal design',
      'Safety: Certified components'
    ]
  },
  {
    id: 'pda-screen',
    name: 'PDA Screen',
    category: 'ACCESSORIES CONSUMABLES AND SPARES',
    description: 'Replacement screens for PDA devices.',
    image: '/images/Screenshot_28-8-2025_32123_.jpeg',
    features: [
      'High resolution',
      'Touch sensitive',
      'Durable glass',
      'Easy replacement',
      'Multiple sizes'
    ],
    specifications: [
      'Resolution: High resolution display',
      'Touch: Sensitive touch response',
      'Material: Durable glass',
      'Installation: Easy replacement'
    ]
  },
  {
    id: 'motherboard-pda',
    name: 'Motherboard (PDA)',
    category: 'ACCESSORIES CONSUMABLES AND SPARES',
    description: 'Main circuit boards for PDA devices.',
    image: '/images/Screenshot_28-8-2025_32149_.jpeg',
    features: [
      'Advanced processing',
      'Multiple connectivity',
      'Reliable operation',
      'Easy replacement',
      'Quality components'
    ],
    specifications: [
      'Processing: Advanced capability',
      'Connectivity: Multiple options',
      'Operation: Reliable performance',
      'Quality: Premium components'
    ]
  },
  {
    id: 'nfc-scanner',
    name: 'NFC Scanner',
    category: 'ACCESSORIES CONSUMABLES AND SPARES',
    description: 'NFC scanning modules for PDA devices.',
    image: '/images/Screenshot_28-8-2025_32133_.jpeg',
    features: [
      'Contactless scanning',
      'Fast data transfer',
      'Easy integration',
      'Reliable performance',
      'Universal compatibility'
    ],
    specifications: [
      'Scanning: Contactless operation',
      'Transfer: Fast data speed',
      'Integration: Easy setup',
      'Compatibility: Universal design'
    ]
  },
  {
    id: 'test-weights-a',
    name: 'Test Weights A',
    category: 'ACCESSORIES CONSUMABLES AND SPARES',
    description: 'Precision test weights for calibration (1mg-200g range).',
    image: '/images/Screenshot_28-8-2025_15053_.jpeg',
    features: [
      'Precision weights',
      'OIML certified',
      'Range: 1mg-200g',
      'High accuracy',
      'Durable construction'
    ],
    specifications: [
      'Range: 1mg-200g',
      'Certification: OIML certified',
      'Accuracy: High precision',
      'Construction: Durable materials'
    ]
  },
  {
    id: 'test-weights-b',
    name: 'Test Weights B',
    category: 'ACCESSORIES CONSUMABLES AND SPARES',
    description: 'Heavy-duty test weights for industrial calibration (200g-20kg).',
    image: '/images/Screenshot_28-8-2025_1516_.jpeg',
    features: [
      'Heavy-duty weights',
      'Range: 200g-20kg',
      'Industrial grade',
      'OIML certified',
      'Precise calibration'
    ],
    specifications: [
      'Range: 200g-20kg',
      'Grade: Industrial',
      'Certification: OIML certified',
      'Purpose: Precise calibration'
    ]
  },
  {
    id: 'thermal-rolls',
    name: 'Thermal Rolls',
    category: 'ACCESSORIES CONSUMABLES AND SPARES',
    description: 'High-quality thermal paper rolls for receipt printing.',
    image: '/images/Screenshot_28-8-2025_15121_.jpeg',
    features: [
      'High-quality paper',
      'Clear printing',
      'Long lasting',
      'Multiple sizes',
      'Fade resistant'
    ],
    specifications: [
      'Quality: High-grade paper',
      'Printing: Clear output',
      'Durability: Long lasting',
      'Sizes: Multiple options'
    ]
  }
];