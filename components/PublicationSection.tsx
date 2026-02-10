
import React, { useState, useMemo } from 'react';
import SectionHeader from './SectionHeader';
import { Publication } from '../types';

// Raw data pool (can be in any order)
const allPublicationsData: Publication[] = [
  {
    id: 1,
    authors: 'Kim, J., Lee, S., & Lee, M.W.',
    year: 2024,
    month: 11,
    title: 'Advanced Photo-catalytic Systems for Sustainable Hydrogen Production',
    journal: 'Applied Catalysis B: Environmental',
    link: '#'
  },
  {
    id: 2,
    authors: 'Park, H., & Lee, M.W.',
    year: 2024,
    month: 8,
    title: 'Machine Learning Aided Design of Metal-Organic Frameworks for Carbon Capture',
    journal: 'Journal of Materials Chemistry A',
    link: '#'
  },
  {
    id: 3,
    authors: 'SENSE Lab Group',
    year: 2024,
    month: 3,
    title: 'A Review of Circular Bio-economy Implementation in Emerging Economies',
    journal: 'Sustainability Reviews',
    link: '#'
  },
  {
    id: 4,
    authors: 'Lee, S., et al.',
    year: 2023,
    month: 12,
    title: 'Decentralized Water Treatment Systems for Rural Communities: A Comparative Study',
    journal: 'Desalination',
    link: '#'
  },
  {
    id: 5,
    authors: 'Wilson, R., & Lee, M.W.',
    year: 2023,
    month: 5,
    title: 'Early Stage LCA Framework for Sustainable Building Materials',
    journal: 'Energy and Buildings',
    link: '#'
  },
  {
    id: 6,
    authors: 'Choi, Y.',
    year: 2022,
    month: 10,
    title: 'Evaluating Carbon Footprint of Industrial Waste Incineration',
    journal: 'Environmental Science & Policy',
    link: '#'
  },
  {
    id: 7,
    authors: 'Lee, M.W., et al.',
    year: 2022,
    month: 2,
    title: 'Synergistic Effects of Bimetallic Catalysts in CO2 Reduction',
    journal: 'Nature Communications',
    link: '#'
  },
  {
    id: 8,
    authors: 'Jung, D., & Lee, M.W.',
    year: 2021,
    month: 11,
    title: 'Resilient Urban Drainage Systems under Extreme Climate Scenarios',
    journal: 'Water Resources Research',
    link: '#'
  },
  {
    id: 9,
    authors: 'Kim, A., & Lee, M.W.',
    year: 2021,
    month: 6,
    title: 'Novel Bio-adsorbents for Heavy Metal Removal from Industrial Effluents',
    journal: 'Chemical Engineering Journal',
    link: '#'
  },
  {
    id: 10,
    authors: 'Lee, M.W.',
    year: 2020,
    month: 4,
    title: 'Perspective on Future Sustainable Engineering Systems',
    journal: 'AIChE Journal',
    link: '#'
  }
];

const PublicationList: React.FC<{ items: Publication[] }> = ({ items }) => (
  <div className="space-y-6">
    {items.map((pub) => (
      <div key={pub.id} className="group border-l-4 border-[#2E7D32]/20 hover:border-[#2E7D32] pl-6 py-3 hover:bg-green-50/30 transition-all rounded-r-xl">
        <div className="flex items-center space-x-2 mb-1">
          <span className="text-xs text-[#2E7D32] font-black uppercase tracking-widest bg-green-50 px-2 py-0.5 rounded">
            {pub.year}.{pub.month && pub.month < 10 ? `0${pub.month}` : pub.month}
          </span>
        </div>
        <h4 className="text-lg font-bold text-gray-900 leading-tight mb-2 group-hover:text-[#2E7D32] transition-colors">
          {pub.title}
        </h4>
        <p className="text-gray-600 font-medium italic mb-2">{pub.authors}</p>
        <p className="text-gray-500 text-sm">
          Published in: <span className="font-bold text-gray-700">{pub.journal}</span>
        </p>
        {pub.link && (
          <a href={pub.link} className="inline-flex items-center text-[#2E7D32] text-sm font-black mt-3 hover:underline">
            View Publication
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
  const [showFullList, setShowFullList] = useState(false);

  // Sorting and filtering logic
  const { recentResearch, pastResearch, sortedAll } = useMemo(() => {
    // 1. Sort all by year (desc) and month (desc)
    const sorted = [...allPublicationsData].sort((a, b) => {
      if (b.year !== a.year) return b.year - a.year;
      return (b.month || 0) - (a.month || 0);
    });

    // 2. Recent: Top 3
    const recent = sorted.slice(0, 3);

    // 3. Past: Random 3 from the rest
    const rest = sorted.slice(3);
    const randomPast = [...rest].sort(() => 0.5 - Math.random()).slice(0, 3);

    return { 
      recentResearch: recent, 
      pastResearch: randomPast, 
      sortedAll: sorted 
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader 
        title="Publications" 
        subtitle="Our scholarly contributions to the academic community and environmental field."
      />

      {/* Summary View (Recent & Past) */}
      {!showFullList && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16 animate-fade-in">
          <div>
            <h3 className="text-2xl font-black text-gray-900 mb-8 flex items-center italic">
              <span className="w-2 h-8 bg-[#2E7D32] mr-4 rounded-full"></span>
              Recent Research
            </h3>
            <PublicationList items={recentResearch} />
          </div>
          <div>
            <h3 className="text-2xl font-black text-gray-900 mb-8 flex items-center italic">
              <span className="w-2 h-8 bg-[#1B5E20]/40 mr-4 rounded-full"></span>
              Past Research
            </h3>
            <PublicationList items={pastResearch} />
          </div>
        </div>
      )}

      {/* Full List View (Triggered by Show More) */}
      {showFullList && (
        <div className="max-w-4xl mx-auto mb-16 animate-fade-in">
          <h3 className="text-2xl font-black text-gray-900 mb-8 border-b-2 border-green-50 pb-4 text-center italic">
            Complete Publication List
          </h3>
          <PublicationList items={sortedAll} />
        </div>
      )}

      {/* Centered Show More Button */}
      <div className="flex justify-center pb-20">
        <button
          onClick={() => setShowFullList(!showFullList)}
          className="group px-10 py-4 bg-white border-2 border-[#2E7D32] text-[#2E7D32] font-black rounded-full hover:bg-[#2E7D32] hover:text-white transition-all duration-300 shadow-xl shadow-green-900/10 flex items-center space-x-3 active:scale-95"
        >
          <span>{showFullList ? 'Back to Summary' : 'Show All Publications'}</span>
          <svg 
            className={`w-5 h-5 transition-transform duration-300 ${showFullList ? 'rotate-180' : 'group-hover:translate-y-1'}`} 
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PublicationSection;
