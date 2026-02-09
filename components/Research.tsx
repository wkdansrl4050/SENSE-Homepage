
import React from 'react';
import { ResearchProject } from '../types';
import SectionHeader from './SectionHeader';

const projects: ResearchProject[] = [
  {
    id: 1,
    title: 'Circular Bio-economy Systems',
    description: 'Investigating integrated waste-to-energy pathways and nutrient recovery from organic waste streams.',
    image: 'https://picsum.photos/seed/bio/600/400'
  },
  {
    id: 2,
    title: 'Smart Water Management',
    description: 'Utilizing IoT and AI to optimize water distribution networks and urban drainage systems.',
    image: 'https://picsum.photos/seed/water/600/400'
  },
  {
    id: 3,
    title: 'Sustainable Infrastructure Modeling',
    description: 'Life cycle assessment (LCA) and multi-objective optimization for resilient urban developments.',
    image: 'https://picsum.photos/seed/infra/600/400'
  },
  {
    id: 4,
    title: 'Carbon Capture & Storage',
    description: 'Novel engineering solutions for atmospheric carbon removal and geological sequestration.',
    image: 'https://picsum.photos/seed/carbon/600/400'
  },
  {
    id: 5,
    title: 'Industrial Ecology',
    description: 'Developing symbiotic industrial networks to minimize resource consumption and waste generation.',
    image: 'https://picsum.photos/seed/eco/600/400'
  },
  {
    id: 6,
    title: 'Climate Risk Mitigation',
    description: 'Engineering resilient coastal and urban systems against extreme weather events and sea-level rise.',
    image: 'https://picsum.photos/seed/climate/600/400'
  }
];

const Research: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader 
        title="Research Fields" 
        subtitle="Leading-edge projects shaping the future of environmental sustainability."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="h-48 overflow-hidden relative">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#2E7D32] transition-colors">{project.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Research;
