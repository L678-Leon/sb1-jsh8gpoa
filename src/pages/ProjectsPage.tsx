import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  images?: string[];
}

interface ProjectCategory {
  name: string;
  image: string;
  description: string;
  projects: Project[];
}

const projectCategories: { [key: string]: ProjectCategory } = {
  tea: {
    name: "Tea",
    image: "/images/teafactory.jpg",
    description: "Tea factory and collection center weighbridge installations",
    projects: [
      {
        id: "tea-1",
        title: "Chemusian Tea Factory Weighbridge",
        description: "Installed weighbridge at Chemusian Tea Factory for accurate tea leaf weighing and quality control during collection and processing.",
        image: "/images/teafactory.jpg"
      },
      {
        id: "tea-2",
        title: "Gatitu Tea Factory Weighbridge Service",
        description: "Weighbridge service, maintenance and calibration at Gatitu Tea Factory (Nyayo Tea Zone) for ensuring accurate tea leaf weighing and quality control.",
        image: "/images/b1_image_2026-01-26_at_09.24.39.jpeg",
        images: [
          "/images/b1_image_2026-01-26_at_09.24.39.jpeg",
          "/images/b2_image_2026-01-26_at_09.24.40.jpeg",
          "/images/b3_image_2026-01-26_at_09.24.40.jpeg",
          "/images/b4_image_2026-01-26_at_09.24.40.jpeg"
        ]
      }
    ]
  },
  milk: {
    name: "Milk",
    image: "/images/brooksideproject.jpg",
    description: "Milk collection center and dairy farming weighing solutions",
    projects: [
      {
        id: "milk-1",
        title: "Brookside Collection Center",
        description: "Installed damp tank and weighing system at Brookside collection center for accurate milk collection and quality assurance.",
        image: "/images/brooksideproject.jpg"
      }
    ]
  },
  mining: {
    name: "Mining",
    image: "/images/mining.jpg",
    description: "Quarry and mining site weighbridge installations",
    projects: [
      {
        id: "mining-1",
        title: "Ilmutiok Quarry Weighbridge",
        description: "Installed weighbridge at Ilmutiok in Laikipia county for weighing quarry sand, stone, and aggregate materials with precision.",
        image: "/images/mining.jpg"
      }
    ]
  },
  oilgas: {
    name: "Oil, Gas and Chemicals",
    image: "/images/oil and gas.jpg",
    description: "Petroleum station and fuel distribution weighing systems",
    projects: [
      {
        id: "oilgas-1",
        title: "Total Petrol Station",
        description: "Digital platform scale installation at Total Petrol Station for weighing gas cylinders and monitoring fuel distribution operations.",
        image: "/images/oil and gas.jpg"
      },
      {
        id: "oilgas-2",
        title: "Syrensis Ltd Weighbridge Service",
        description: "Weighbridge service, maintenance and calibration at Syrensis Ltd in Industrial Area, Nairobi for petroleum distribution and logistics operations.",
        image: "/images/c1_image_2026-01-26_at_09.26.20.jpeg",
        images: [
          "/images/c1_image_2026-01-26_at_09.26.20.jpeg",
          "/images/c2_image_2026-01-26_at_09.26.21.jpeg",
          "/images/c3_image_2026-01-26_at_09.26.21.jpeg",
          "/images/c4_image_2026-01-26_at_09.26.22.jpeg",
          "/images/c5_image_2026-01-26_at_09.26.22.jpeg"
        ]
      }
    ]
  },
  foodprocessing: {
    name: "Food & Processing",
    image: "/images/food and processing.jpg",
    description: "Food production and meat processing facility scales",
    projects: [
      {
        id: "food-1",
        title: "Kenya Meat Commission",
        description: "Installation of a cattle weigher at Kenya Meat Commission for livestock weighing and processing quality control.",
        image: "/images/food and processing.jpg"
      },
      {
        id: "food-2",
        title: "Saficado Weighbridge - Juja",
        description: "Weighbridge installation at Saficado, Juja, Nairobi Kenya for food processing operations, inventory management, and quality control weighing.",
        image: "/images/saf_1_2026-01-12_at_11.39.51.jpeg",
        images: [
          "/images/saf_1_2026-01-12_at_11.39.51.jpeg",
          "/images/saf_2_image_2026-01-12_at_11.39.53.jpeg",
          "/images/saf3_image_2026-01-12_at_11.39.54.jpeg",
          "/images/saf4_image_2026-01-12_at_11.39.57.jpeg",
          "/images/saf5_image_2026-01-12_at_11.39.58.jpeg",
          "/images/saf6.jpeg",
          "/images/saf7_image_2026-01-12_at_11.40.00.jpeg"
        ]
      },
      {
        id: "food-3",
        title: "Kenchic Weighbridge Service & Maintenance",
        description: "Weighbridge service, maintenance and calibration at Kenchic for ensuring accurate weighing operations and compliance with industry standards.",
        image: "/images/save_1_image_2026-01-15_at_11.26.07.jpeg",
        images: [
          "/images/save_1_image_2026-01-15_at_11.26.07.jpeg",
          "/images/save_2_image_2026-01-15_at_11.26.10.jpeg",
          "/images/save_3_image_2026-01-15_at_11.26.11.jpeg",
          "/images/save_4_image_2026-01-15_at_11.26.12.jpeg",
          "/images/save_5_image_2026-01-15_at_11.26.04.jpeg"
        ]
      },
      {
        id: "food-4",
        title: "Soit Sugar Company Ltd Weighbridge Installation",
        description: "Weighbridge installation at Soit Sugar Company Ltd for weighing raw materials and finished products in sugar production operations.",
        image: "/images/tr1_image_2026-01-19_at_12.54.57.jpeg",
        images: [
          "/images/tr1_image_2026-01-19_at_12.54.57.jpeg",
          "/images/tr2.jpeg",
          "/images/tr3_image_2026-01-19_at_12.54.59.jpeg",
          "/images/tr4_image_2026-01-19_at_12.54.59.jpeg",
          "/images/tr5_image_2026-01-19_at_12.55.00.jpeg",
          "/images/tr6_image_2026-01-19_at_12.55.01.jpeg",
          "/images/tr7_image_2026-01-19_at_12.55.03.jpeg"
        ]
      }
    ]
  },
  sugar: {
    name: "Sugar",
    image: "/images/proj.jpg",
    description: "Sugar factory and mill weighbridge installations",
    projects: [
      {
        id: "sugar-1",
        title: "Soit Sugar Factory",
        description: "Weighbridge installation at Soit Sugar Factory for weighing raw sugar cane and monitoring production operations.",
        image: "/images/proj.jpg"
      }
    ]
  },
  milling: {
    name: "Milling",
    image: "/images/weighbridge uasin project.jpg",
    description: "Grain mills and flour production weighing solutions",
    projects: [
      {
        id: "milling-1",
        title: "UNGA Ltd Milling",
        description: "Installed weighbridge at UNGA Ltd for grain intake, inventory management, and flour production monitoring.",
        image: "/images/weighbridge uasin project.jpg"
      },
      {
        id: "milling-2",
        title: "Lesiolo Grains (Cargill) Weighbridge Service",
        description: "Weighbridge service, maintenance, calibration and stamping at Lesiolo Grains (Cargill) in Nakuru for grain processing and logistics operations.",
        image: "/images/d1_image_2026-01-29_at_12.08.49.jpeg",
        images: [
          "/images/d1_image_2026-01-29_at_12.08.49.jpeg",
          "/images/d2_image_2026-01-29_at_12.08.50.jpeg",
          "/images/d3_image_2026-01-29_at_12.08.50.jpeg"
        ]
      },
      {
        id: "milling-3",
        title: "Weighbridge service, maintenance and calibration at UNGA LTD",
        description: "Comprehensive weighbridge service, maintenance and calibration at UNGA LTD for ensuring accurate grain weighing operations and regulatory compliance.",
        image: "/images/h1_image_2026-02-05_at_19.48.33.jpeg",
        images: [
          "/images/h1_image_2026-02-05_at_19.48.33.jpeg",
          "/images/h2_image_2026-02-05_at_19.48.37.jpeg",
          "/images/h3_image_2026-02-05_at_19.48.38.jpeg",
          "/images/h4_image_2026-02-05_at_19.48.42.jpeg",
          "/images/h5_image_2026-02-05_at_19.48.43.jpeg",
          "/images/h6_image_2026-02-05_at_19.48.43.jpeg"
        ]
      }
    ]
  },
  commercial: {
    name: "Commercial Weighbridge",
    image: "/images/commercial.jpg",
    description: "General commercial and trade weighbridge installations",
    projects: [
      {
        id: "commercial-1",
        title: "Commercial Weighbridge - Moiben",
        description: "Installation of a commercial weighbridge at Moiben, Uasin Gishu County for general cargo and goods weighing.",
        image: "/images/commercial.jpg"
      },
      {
        id: "commercial-2",
        title: "Laikipia County Cess Weighbridge Service",
        description: "Weighbridge service, maintenance and calibration at Laikipia County Cess weighbridge for commercial vehicle weighing and compliance verification.",
        image: "/images/zx_image_2026-01-26_at_09.23.25.jpeg",
        images: [
          "/images/zx_image_2026-01-26_at_09.23.25.jpeg",
          "/images/zx2image_2026-01-26_at_09.23.25.jpeg",
          "/images/zx3_image_2026-01-26_at_09.23.26.jpeg",
          "/images/zx4_image_2026-01-26_at_09.23.27.jpeg",
          "/images/zx5_image_2026-01-26_at_09.23.27.jpeg",
          "/images/zx6_image_2026-01-26_at_09.23.27.jpeg",
          "/images/zx7_image_2026-01-26_at_09.23.28.jpeg"
        ]
      },
      {
        id: "commercial-3",
        title: "Affordable housing weighbridge service and calibration, Bahati, Nakuru County",
        description: "Professional weighbridge service and calibration at affordable housing project in Bahati, Nakuru County for construction material weighing and quality control operations.",
        image: "/images/k1_image_2026-01-30_at_10.13.49.jpeg",
        images: [
          "/images/k1_image_2026-01-30_at_10.13.49.jpeg",
          "/images/k2_image_2026-01-30_at_10.13.49.jpeg",
          "/images/k3_image_2026-01-30_at_10.13.50.jpeg",
          "/images/k4_image_2026-01-30_at_10.13.51.jpeg",
          "/images/k5_image_2026-01-30_at_10.13.51.jpeg"
        ]
      }
    ]
  },
  private: {
    name: "Private Weighbridge",
    image: "/images/private weighbridge.jpg",
    description: "Private farm and business weighbridge installations",
    projects: [
      {
        id: "private-1",
        title: "Private Weighbridge - Komool Farm",
        description: "Private weighbridge installed at Komool Farm in Uasin Gishu County for farm operations and produce weighing.",
        image: "/images/private weighbridge.jpg"
      }
    ]
  },
  cargohandling: {
    name: "Cargo Handling/Hauling",
    image: "/images/xv1_image_2026-01-26_at_09.19.34.jpeg",
    description: "Cargo handling and logistics weighing solutions",
    projects: [
      {
        id: "cargo-1",
        title: "AFS Cargo Section Mini Weighbridge",
        description: "Mini weighbridge installation, maintenance and calibration at AFS Cargo section for efficient cargo weighing and logistics management.",
        image: "/images/xv1_image_2026-01-26_at_09.19.34.jpeg",
        images: [
          "/images/xv1_image_2026-01-26_at_09.19.34.jpeg",
          "/images/xv2_image_2026-01-26_at_09.19.35.jpeg",
          "/images/xv3_image_2026-01-26_at_09.19.39.jpeg",
          "/images/xv4_image_2026-01-26_at_09.19.41.jpeg",
          "/images/xv5_image_2026-01-26_at_09.21.05.jpeg",
          "/images/xv6_image_2026-01-26_at_09.21.20.jpeg",
          "/images/xv7_image_2026-01-26_at_09.21.19.jpeg",
          "/images/xv8_image_2026-01-26_at_09.21.21.jpeg"
        ]
      }
    ]
  }
};

const ProjectsPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [expandedCategories, setExpandedCategories] = useState<{ [key: string]: boolean }>({});

  const toggleCategory = (categoryKey: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryKey]: !prev[categoryKey]
    }));
  };

  const handleProjectSelect = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const handleNextImage = () => {
    if (selectedProject?.images) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.images!.length - 1 ? 0 : prev + 1
      );
    }
  };

  const handlePrevImage = () => {
    if (selectedProject?.images) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.images!.length - 1 : prev - 1
      );
    }
  };

  const categoryKeys = Object.keys(projectCategories);

  const CategorySection = ({
    categoryKey,
    category
  }: {
    categoryKey: string;
    category: ProjectCategory;
  }) => {
    const isExpanded = expandedCategories[categoryKey];

    return (
      <div className="mb-8">
        <button
          onClick={() => toggleCategory(categoryKey)}
          className="w-full bg-red-600 text-white p-6 rounded-t-xl flex items-center justify-between hover:bg-red-700 transition-colors"
        >
          <h3 className="text-2xl font-bold">{category.name}</h3>
          {isExpanded ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
        </button>

        {isExpanded && (
          <div className="bg-white border border-gray-200 rounded-b-xl p-6 shadow-lg">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => handleProjectSelect(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-contain rounded-lg mb-3 hover:opacity-80 transition-opacity bg-white"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.pexels.com/photos/5632382/pexels-photo-5632382.jpeg?auto=compress&cs=tinysrgb&w=800';
                    }}
                  />
                  <h4 className="text-lg font-bold text-black mb-2">{project.title}</h4>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{project.description}</p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProjectSelect(project);
                    }}
                    className="w-full px-4 py-2 bg-red-600 text-white text-sm font-semibold rounded-lg hover:bg-red-700 transition-colors"
                  >
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <Helmet>
        <title>Projects | Scales & Software Kenya — Weighbridge & Industrial Installations</title>
        <meta
          name="description"
          content="Explore Scales & Software's completed projects across Kenya — from weighbridge installations to industrial, mining, and agricultural weighing systems."
        />
        <meta
          name="keywords"
          content="weighbridge installations Kenya, industrial weighing projects, weighing systems Kenya, scales and software projects, weighing equipment installation, factory weighbridge setup"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Scales & Software Projects — Kenya's Trusted Weighbridge and Industrial Scale Experts"
        />
        <meta
          property="og:description"
          content="See our weighbridge and industrial scale installations across Kenya and East Africa. Trusted by factories, farms, and logistics companies."
        />
        <meta property="og:url" content="https://scalesandsoftware.com/projects" />
        <meta property="og:image" content="https://scalesandsoftware.com/images/og-projects-preview.jpg" />
        <link rel="canonical" href="https://scalesandsoftware.com/projects" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-black mb-4">Our Projects</h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Showcasing our successful implementations and installations across various industries in Kenya and East Africa.
            </p>
          </div>

          {categoryKeys.map((categoryKey) => (
            <CategorySection
              key={categoryKey}
              categoryKey={categoryKey}
              category={projectCategories[categoryKey]}
            />
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25 }}
                className="relative max-w-5xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 z-10 bg-red-600 hover:bg-red-700 text-white rounded-full p-3 transition-colors shadow-lg"
                  aria-label="Close modal"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="max-h-[85vh] overflow-y-auto">
                  <div className="h-[500px] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 relative">
                    <img
                      src={selectedProject.images?.[currentImageIndex] || selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-contain p-8"
                    />

                    {selectedProject.images && selectedProject.images.length > 1 && (
                      <>
                        <button
                          onClick={handlePrevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white rounded-full p-3 transition-colors shadow-lg"
                          aria-label="Previous image"
                        >
                          <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                          onClick={handleNextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white rounded-full p-3 transition-colors shadow-lg"
                          aria-label="Next image"
                        >
                          <ChevronRight className="w-6 h-6" />
                        </button>
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-medium">
                          {currentImageIndex + 1} / {selectedProject.images.length}
                        </div>
                      </>
                    )}
                  </div>
                  <div className="p-8 bg-white">
                    <h2 className="text-4xl font-bold text-black mb-4 leading-tight">{selectedProject.title}</h2>
                    <p className="text-gray-700 text-lg leading-relaxed">{selectedProject.description}</p>

                    {selectedProject.images && selectedProject.images.length > 1 && (
                      <div className="mt-6 flex flex-wrap gap-2">
                        {selectedProject.images.map((img, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCurrentImageIndex(idx)}
                            className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                              currentImageIndex === idx
                                ? 'border-red-600 ring-2 ring-red-600 ring-offset-2'
                                : 'border-gray-300 hover:border-red-400'
                            }`}
                          >
                            <img
                              src={img}
                              alt={`${selectedProject.title} ${idx + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default ProjectsPage;
