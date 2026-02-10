
import React, { useState } from 'react';
import { Member } from '../types';
import SectionHeader from './SectionHeader';

const members: Member[] = [
  {
    id: 1,
    name: '이민우',
    nameEn: 'Min-woo Lee',
    role: 'Professor',
    photo: 'components/one.jpg',
    email: 'mwlee@kmu.ac.kr',
    affiliation: 'Department of Chemical Engineering, Keimyung University',
    office: 'Engineering building #3, Room #3319',
    tel: '+82-53-580-5236',
    education: [
      'Ph.D. Environmental Engineering, Yonsei University, Republic of Korea',
      'M.S. Environmental Engineering, Yonsei University, Republic of Korea',
      'B.S. Environmental Engineering, Yonsei University, Republic of Korea'
    ],
    experience: [
      'Professor, Department of Chemical Engineering, Keimyung University, Republic of Korea (Current)',
      'Director, SENSE (Sustainable Environment System Engineering) Laboratory',
      'Senior Researcher, Environmental Technology Research Institute'
    ],
    achievements: [
      'h-index: 35+, citation: 2200+ (Google Scholar)',
      'SCIE papers: 70+ (Major focus on sustainable catalysts and environmental systems)',
      'Leading multiple government-funded research projects on circular economy'
    ]
  },
  {
    id: 2,
    name: '박경환',
    nameEn: 'Kyeong-hwan Park',
    role: 'Undergraduate Researcher',
    photo: 'components/two.jpg',
    email: 'khpark@kmu.ac.kr',
    affiliation: 'Undergraduate Researcher, SENSE Lab'
  },
  {
    id: 3,
    name: '유정화',
    nameEn: 'Jeong-hwa Yu',
    role: 'Undergraduate Researcher',
    photo: 'components/three.jpg',
    email: 'jhyu@kmu.ac.kr',
    affiliation: 'Undergraduate Researcher, SENSE Lab'
  },
  {
    id: 4,
    name: '이재민',
    nameEn: 'Jae-min Lee',
    role: 'Undergraduate Researcher',
    photo: 'components/four.jpg',
    email: 'jmlee@kmu.ac.kr',
    affiliation: 'Undergraduate Researcher, SENSE Lab'
  },
  {
    id: 5,
    name: '장문기',
    nameEn: 'Mun-gi Jang',
    role: 'Undergraduate Researcher',
    photo: 'components/five.jpg',
    email: 'mgjang@kmu.ac.kr',
    affiliation: 'Undergraduate Researcher, SENSE Lab'
  }
];

const CollapsibleSection: React.FC<{ title: string; items: string[] }> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-6 border-b border-gray-100 pb-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-3 group focus:outline-none"
      >
        <div className="flex items-center space-x-3">
          <span className="w-2.5 h-2.5 bg-[#2E7D32] rounded-sm"></span>
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#2E7D32] transition-colors">{title}</h3>
        </div>
        <svg 
          className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[1000px] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
        <ul className="space-y-3 pl-6">
          {items.map((item, idx) => (
            <li key={idx} className="text-gray-600 leading-relaxed font-medium">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ProfessorProfile: React.FC<{ professor: Member }> = ({ professor }) => (
  <div className="max-w-6xl mx-auto animate-fade-in">
    <div className="relative bg-white border border-gray-200 rounded-lg p-10 mb-12 shadow-sm overflow-hidden flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
      <div className="absolute top-1/2 right-10 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none">
        <svg width="300" height="300" viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M50 5 L50 95 M5 50 L95 50" stroke="currentColor" strokeWidth="0.5" />
          <text x="50" y="52" fontSize="4" textAnchor="middle" className="font-bold uppercase">Keimyung University ECOCAT SENSE</text>
        </svg>
      </div>

      <div className="w-64 h-80 flex-shrink-0 relative z-10 border border-gray-100 shadow-md bg-white overflow-hidden">
        <img 
          src={professor.photo} 
          alt={professor.name} 
          className="w-full h-full object-cover" 
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x500?text=Professor+Photo';
          }}
        />
      </div>

      <div className="flex-grow relative z-10">
        <div className="mb-8 border-b-2 border-[#2E7D32]/10 pb-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            {professor.name} <span className="text-[#2E7D32] font-semibold text-3xl">({professor.nameEn})</span>
          </h2>
        </div>

        <div className="space-y-4 text-gray-700 font-medium">
          <div className="flex items-start">
            <span className="text-[#2E7D32] mr-3 mt-1.5 font-bold">◆</span>
            <p className="leading-relaxed">{professor.affiliation}</p>
          </div>
          <div className="flex items-start">
            <span className="text-[#2E7D32] mr-3 mt-1.5 font-bold">◆</span>
            <p>Office: <span className="text-gray-900 font-semibold">{professor.office}</span></p>
          </div>
          <div className="flex items-start">
            <span className="text-[#2E7D32] mr-3 mt-1.5 font-bold">◆</span>
            <p>Tel: <span className="text-gray-900 font-semibold">{professor.tel}</span></p>
          </div>
          <div className="flex items-start">
            <span className="text-[#2E7D32] mr-3 mt-1.5 font-bold">◆</span>
            <p>E-mail: <a href={`mailto:${professor.email}`} className="text-[#2E7D32] hover:underline font-bold italic">{professor.email}</a></p>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-white border border-gray-200 rounded-lg p-10 shadow-sm">
      <CollapsibleSection title="Education" items={professor.education || []} />
      <CollapsibleSection title="Experience" items={professor.experience || []} />
      <CollapsibleSection title="Achievements" items={professor.achievements || []} />
    </div>
  </div>
);

const StudentCard: React.FC<{ member: Member }> = ({ member }) => (
  <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:border-[#2E7D32] transition-all group hover:shadow-xl hover:-translate-y-1 duration-300">
    <div className="relative w-40 h-40 mx-auto mb-6">
      <img 
        src={member.photo} 
        alt={member.name} 
        className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-500"
        onError={(e) => {
          (e.target as HTMLImageElement).src = `https://via.placeholder.com/300x300?text=${encodeURIComponent(member.name)}`;
        }}
      />
      <div className="absolute inset-0 rounded-full border border-green-500/10 group-hover:border-green-500/30 transition-colors"></div>
    </div>
    <div className="text-center">
      <h4 className="text-xl font-black text-gray-900 mb-1 italic">{member.name} <span className="text-sm not-italic opacity-60">({member.nameEn})</span></h4>
      <p className="text-[#2E7D32] text-sm font-bold tracking-wide uppercase mb-2">{member.role}</p>
      <p className="text-gray-500 text-xs font-bold mb-4">{member.affiliation}</p>
      <div className="flex justify-center space-x-3 mt-6">
        <a href={`mailto:${member.email}`} className="p-3 text-gray-400 hover:text-white transition-all rounded-xl hover:bg-[#2E7D32] shadow-sm" title={member.email}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </a>
      </div>
    </div>
  </div>
);

interface MemberSectionProps {
  category: Member['role'];
}

const MemberSection: React.FC<MemberSectionProps> = ({ category }) => {
  const filteredMembers = members.filter(m => m.role === category);

  const getTitle = () => {
    switch (category) {
      case 'Professor': return 'Professor';
      case 'Graduate Student': return 'Graduate Students';
      case 'Undergraduate Researcher': return 'Undergraduate Students';
      case 'Alumni': return 'Alumnis';
      default: return 'Lab Members';
    }
  };

  const getSubtitle = () => {
    switch (category) {
      case 'Professor': return 'Leading our vision for sustainable engineering systems.';
      case 'Graduate Student': return 'Dedicated researchers pushing the boundaries of environmental science.';
      case 'Undergraduate Researcher': return 'Emerging scientists contributing to core laboratory projects.';
      case 'Alumni': return 'Previous members now leading change in industry and academia.';
      default: return 'Meet our dedicated research team.';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader 
        title={getTitle()} 
        subtitle={category === 'Professor' ? undefined : getSubtitle()}
      />
      
      {category === 'Professor' ? (
        filteredMembers.length > 0 ? (
          <ProfessorProfile professor={filteredMembers[0]} />
        ) : null
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-12">
          {filteredMembers.length > 0 ? (
            filteredMembers.map((m) => <StudentCard key={m.id} member={m} />)
          ) : (
            <div className="col-span-full py-20 text-center">
              <p className="text-gray-400 font-bold italic text-xl">No members currently in this category.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MemberSection;
