
import React from 'react';
import { Member } from '../types';
import SectionHeader from './SectionHeader';

const members: Member[] = [
  {
    id: 1,
    name: 'Dr. James Robinson',
    role: 'Professor',
    photo: 'https://picsum.photos/seed/prof/300/300',
    email: 'j.robinson@sense.edu',
    link: '#'
  },
  {
    id: 2,
    name: 'Sarah Chen',
    role: 'Graduate Student',
    photo: 'https://picsum.photos/seed/grad1/300/300',
    email: 's.chen@sense.edu'
  },
  {
    id: 3,
    name: 'Michael Wagner',
    role: 'Graduate Student',
    photo: 'https://picsum.photos/seed/grad2/300/300',
    email: 'm.wagner@sense.edu'
  },
  {
    id: 4,
    name: 'Emily Davis',
    role: 'Undergraduate Researcher',
    photo: 'https://picsum.photos/seed/under1/300/300',
    email: 'e.davis@sense.edu'
  },
  {
    id: 5,
    name: 'David Oh',
    role: 'Alumni',
    photo: 'https://picsum.photos/seed/alum1/300/300',
    email: 'd.oh@alumni.edu'
  }
];

const MemberCard: React.FC<{ member: Member }> = ({ member }) => (
  <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:border-[#2E7D32] transition-colors group">
    <div className="relative w-32 h-32 mx-auto mb-4">
      <img 
        src={member.photo} 
        alt={member.name} 
        className="w-full h-full object-cover rounded-full border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="text-center">
      <h4 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h4>
      <p className="text-[#2E7D32] text-sm font-medium mb-3">{member.role}</p>
      <div className="flex justify-center space-x-3 mt-4">
        <a href={`mailto:${member.email}`} className="p-2 text-gray-400 hover:text-[#2E7D32] transition-colors rounded-full hover:bg-gray-50">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </a>
        {member.link && (
          <a href={member.link} className="p-2 text-gray-400 hover:text-[#2E7D32] transition-colors rounded-full hover:bg-gray-50">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
      </div>
    </div>
  </div>
);

const MemberGroup: React.FC<{ title: string; list: Member[] }> = ({ title, list }) => (
  <div className="mb-16 last:mb-0">
    <h3 className="text-2xl font-bold text-gray-800 mb-8 pb-3 border-b border-gray-200">{title}</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {list.map((m) => <MemberCard key={m.id} member={m} />)}
    </div>
  </div>
);

const MemberSection: React.FC = () => {
  const categories: Member['role'][] = ['Professor', 'Graduate Student', 'Undergraduate Researcher', 'Alumni'];
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader 
        title="Lab Members" 
        subtitle="Meet the researchers and scientists dedicated to environmental excellence."
      />
      {categories.map((cat) => {
        const filtered = members.filter(m => m.role === cat);
        if (filtered.length === 0) return null;
        return (
          <MemberGroup 
            key={cat} 
            title={cat === 'Professor' ? 'Professor' : cat + 's'} 
            list={filtered} 
          />
        );
      })}
    </div>
  );
};

export default MemberSection;
