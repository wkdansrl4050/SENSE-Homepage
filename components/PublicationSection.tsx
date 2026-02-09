
import React from 'react';
import SectionHeader from './SectionHeader';
import { Publication } from '../types';

const recentPublications: Publication[] = [
  {
    id: 1,
    authors: 'Kim, J., Lee, S., & Smith, A.',
    year: 2024,
    title: 'Optimizing Nutrient Recovery from Municipal Wastewater using Bio-electrochemical Systems',
    journal: 'Water Research',
    link: '#'
  },
  {
    id: 2,
    authors: 'Park, H., & Choi, Y.',
    year: 2023,
    title: 'Machine Learning Approaches for Predictive Maintenance of Urban Water Infrastructure',
    journal: 'Journal of Cleaner Production',
    link: '#'
  },
  {
    id: 3,
    authors: 'SENSE Lab Group',
    year: 2023,
    title: 'A Review of Circular Bio-economy Implementation in Emerging Economies',
    journal: 'Sustainability Reviews',
    link: '#'
  }
];

const pastPublications: Publication[] = [
  {
    id: 101,
    authors: 'Wilson, R., & SENSE Lab',
    year: 2021,
    title: 'Early Stage LCA Framework for Sustainable Building Materials',
    journal: 'Energy and Buildings',
    link: '#'
  },
  {
    id: 102,
    authors: 'Lee, S., et al.',
    year: 2020,
    title: 'Decentralized Water Treatment Systems for Rural Communities: A Comparative Study',
    journal: 'Desalination',
    link: '#'
  },
  {
    id: 103,
    authors: 'Choi, Y.',
    year: 2019,
    title: 'Evaluating Carbon Footprint of Industrial Waste Incineration',
    journal: 'Environmental Science & Policy',
    link: '#'
  }
];

const PublicationList: React.FC<{ items: Publication[] }> = ({ items }) => (
  <div className="space-y-6">
    {items.map((pub) => (
      <div key={pub.id} className="border-l-4 border-[#2E7D32] pl-6 py-2 hover:bg-gray-50 transition-colors">
        <p className="text-sm text-[#2E7D32] font-semibold mb-1">{pub.year}</p>
        <h4 className="text-lg font-bold text-gray-900 leading-tight mb-2">{pub.title}</h4>
        <p className="text-gray-600 italic mb-2">{pub.authors}</p>
        <p className="text-gray-500 text-sm">
          Published in: <span className="font-medium">{pub.journal}</span>
        </p>
        {pub.link && (
          <a href={pub.link} className="inline-flex items-center text-[#2E7D32] text-sm font-medium mt-3 hover:underline">
            View Paper
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
      </div>
    ))}
  </div>
);

const PublicationSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader 
        title="Publications" 
        subtitle="Our scholarly contributions to the academic community and environmental field."
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 border-b-2 border-gray-100 pb-2">Recent Research</h3>
          <PublicationList items={recentPublications} />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 border-b-2 border-gray-100 pb-2">Past Research</h3>
          <PublicationList items={pastPublications} />
        </div>
      </div>
    </div>
  );
};

export default PublicationSection;
