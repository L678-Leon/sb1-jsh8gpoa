import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Chemusian Tea Factory Weighbridge",
    description: "Installed weighbridge at Chemusian Tea Factory",
    image: "/images/teafactory.jpg",
    category: "Tea",
    date: "2025"
  },
  {
    id: 2,
    title: "Brookside Collection Center",
    description: "Installed damp tank at Brookside collection center",
    image: "/images/brooksideproject.jpg",
    category: "Milk",
    date: "2025"
  },
  {
    id: 3,
    title: "Ilmutiok Quarry Weighbridge",
    description: "Installed weighbridge at Ilmutiok in Laikipia county for weighing quarry sand and stone",
    image: "/images/mining.jpg",
    category: "Mining",
    date: "2025"
  },
  {
    id: 4,
    title: "Kenya Meat Commission",
    description: "Installation of a cattle weigher at Kenya Meat Commission",
    image: "/images/food and processing.jpg",
    category: "Food & Processing",
    date: "2025"
  },
  {
    id: 5,
    title: "Total Petrol Station",
    description: "Digital Platform scale for weighing gas cylinders at Total Petrol Station",
    image: "/images/oil and gas.jpg",
    category: "Oil & Gas",
    date: "2025"
  },
  {
    id: 6,
    title: "Soit Sugar Factory",
    description: "Weighbridge installation at Soit Sugar Factory",
    image: "/images/proj.jpg",
    category: "Sugar",
    date: "2025"
  },
  {
    id: 7,
    title: "UNGA Ltd Milling",
    description: "Installed weighbridge at UNGA Ltd",
    image: "/images/weighbridge uasin project.jpg",
    category: "Milling",
    date: "2025"
  },
  {
    id: 8,
    title: "Commercial Weighbridge - Moiben",
    description: "Installation of a commercial weighbridge at Moiben, Uasin Gishu County",
    image: "/images/commercial.jpg",
    category: "Commercial",
    date: "2025"
  },
  {
    id: 9,
    title: "Private Weighbridge - Komool Farm",
    description: "Private weighbridge installed at Komool Farm in Uasin Gishu County",
    image: "/images/private weighbridge.jpg",
    category: "Private",
    date: "2025"
  }
];

const ProjectsPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-black mb-4">Our Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Showcasing our successful implementations and installations across various industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: project.id * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-200 group"
              onClick={() => setSelectedProject(project)}
            >
              <div className="h-72 overflow-hidden bg-gray-50 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = '/images/Screenshot_26-8-2025_21235_.jpeg';
                  }}
                />
                <div className="absolute top-4 right-4">
                  <span className="inline-block px-4 py-2 bg-red-600 text-white text-xs font-bold rounded-full shadow-lg">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-red-600 transition-colors">{project.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

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
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-contain p-8"
                  />
                </div>
                <div className="p-8 bg-white">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="inline-block px-5 py-2 bg-red-600 text-white text-sm font-bold rounded-full shadow-md">
                      {selectedProject.category}
                    </span>
                  </div>
                  <h2 className="text-4xl font-bold text-black mb-4 leading-tight">{selectedProject.title}</h2>
                  <p className="text-gray-700 text-lg leading-relaxed">{selectedProject.description}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectsPage;
