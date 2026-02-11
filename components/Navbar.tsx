
import React, { useState } from 'react';
import { PageRoute } from '../App';

interface NavbarProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentRoute, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMemberDropdownOpen, setIsMemberDropdownOpen] = useState(false);

  // 연구실 로고 이미지 URL
  const labLogoUrl = `https://lh3.googleusercontent.com/d/1qA6PNA3ZjSEB4v-g2fzXf3VXumTbwpo3`;

  const memberSubLinks: { name: PageRoute; label: string }[] = [
    { name: 'MEMBER_PROFESSOR', label: 'Professor' },
    { name: 'MEMBER_GRADUATE', label: 'Graduate Students' },
    { name: 'MEMBER_UNDERGRADUATE', label: 'Undergraduate Students' },
    { name: 'MEMBER_ALUMNI', label: 'Alumnis' },
  ];

  const handleNavigate = (route: PageRoute) => {
    onNavigate(route);
    setIsMenuOpen(false);
    setIsMemberDropdownOpen(false);
  };

  const isMemberActive = currentRoute.startsWith('MEMBER_');

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0">
            <button 
              onClick={() => handleNavigate('HOME')}
              className="flex items-center group focus:outline-none py-1"
            >
              {/* 상단 로고: 여백을 충분히 주어 시원하게 배치 */}
              <img 
                src={labLogoUrl} 
                alt="SENSE Lab Logo" 
                className="h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/200x80?text=SENSE+LAB';
                }}
              />
            </button>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              <button
                onClick={() => handleNavigate('HOME')}
                className={`px-5 py-2.5 text-sm font-bold rounded-full transition-all duration-300 ${
                  currentRoute === 'HOME' 
                  ? 'text-white bg-[#2E7D32] shadow-lg shadow-green-900/20' 
                  : 'text-gray-700 hover:text-[#2E7D32] hover:bg-green-50/50'
                }`}
              >
                HOME
              </button>
              
              <button
                onClick={() => handleNavigate('RESEARCH')}
                className={`px-5 py-2.5 text-sm font-bold rounded-full transition-all duration-300 ${
                  currentRoute === 'RESEARCH' 
                  ? 'text-white bg-[#2E7D32] shadow-lg shadow-green-900/20' 
                  : 'text-gray-700 hover:text-[#2E7D32] hover:bg-green-50/50'
                }`}
              >
                RESEARCH
              </button>

              <button
                onClick={() => handleNavigate('PUBLICATION')}
                className={`px-5 py-2.5 text-sm font-bold rounded-full transition-all duration-300 ${
                  currentRoute === 'PUBLICATION' 
                  ? 'text-white bg-[#2E7D32] shadow-lg shadow-green-900/20' 
                  : 'text-gray-700 hover:text-[#2E7D32] hover:bg-green-50/50'
                }`}
              >
                PUBLICATION
              </button>

              <div 
                className="relative group"
                onMouseEnter={() => setIsMemberDropdownOpen(true)}
                onMouseLeave={() => setIsMemberDropdownOpen(false)}
              >
                <button
                  className={`px-5 py-2.5 text-sm font-bold rounded-full transition-all duration-300 flex items-center space-x-1 ${
                    isMemberActive
                    ? 'text-white bg-[#2E7D32] shadow-lg shadow-green-900/20' 
                    : 'text-gray-700 hover:text-[#2E7D32] hover:bg-green-50/50'
                  }`}
                >
                  <span>MEMBER</span>
                  <svg className={`w-4 h-4 transition-transform ${isMemberDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div className={`absolute top-full left-1/2 -translate-x-1/2 w-56 bg-white border border-gray-100 shadow-2xl rounded-2xl py-2 mt-1 transition-all duration-200 origin-top ${isMemberDropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                  {memberSubLinks.map((sub) => (
                    <button
                      key={sub.name}
                      onClick={() => handleNavigate(sub.name)}
                      className={`block w-full text-left px-5 py-3 text-sm font-bold transition-colors ${
                        currentRoute === sub.name ? 'text-[#2E7D32] bg-green-50' : 'text-gray-700 hover:bg-gray-50 hover:text-[#2E7D32]'
                      }`}
                    >
                      {sub.label}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => handleNavigate('CONTACT')}
                className={`px-5 py-2.5 text-sm font-bold rounded-full transition-all duration-300 ${
                  currentRoute === 'CONTACT' 
                  ? 'text-white bg-[#2E7D32] shadow-lg shadow-green-900/20' 
                  : 'text-gray-700 hover:text-[#2E7D32] hover:bg-green-50/50'
                }`}
              >
                CONTACT
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-xl text-gray-700 hover:bg-green-50 focus:outline-none"
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 py-6 space-y-1">
          <button onClick={() => handleNavigate('HOME')} className={`block w-full text-left px-4 py-3 rounded-xl text-base font-black transition-all ${currentRoute === 'HOME' ? 'text-white bg-[#2E7D32]' : 'text-gray-700 hover:bg-green-50'}`}>HOME</button>
          <button onClick={() => handleNavigate('RESEARCH')} className={`block w-full text-left px-4 py-3 rounded-xl text-base font-black transition-all ${currentRoute === 'RESEARCH' ? 'text-white bg-[#2E7D32]' : 'text-gray-700 hover:bg-green-50'}`}>RESEARCH</button>
          <button onClick={() => handleNavigate('PUBLICATION')} className={`block w-full text-left px-4 py-3 rounded-xl text-base font-black transition-all ${currentRoute === 'PUBLICATION' ? 'text-white bg-[#2E7D32]' : 'text-gray-700 hover:bg-green-50'}`}>PUBLICATION</button>
          
          <div className="pt-2 pb-1 px-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Members</div>
          {memberSubLinks.map((sub) => (
            <button
              key={sub.name}
              onClick={() => handleNavigate(sub.name)}
              className={`block w-full text-left px-4 py-3 rounded-xl text-base font-bold transition-all ml-2 ${
                currentRoute === sub.name ? 'text-[#2E7D32] bg-green-50' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              - {sub.label}
            </button>
          ))}
          
          <button onClick={() => handleNavigate('CONTACT')} className={`block w-full text-left px-4 py-3 rounded-xl text-base font-black transition-all mt-2 ${currentRoute === 'CONTACT' ? 'text-white bg-[#2E7D32]' : 'text-gray-700 hover:bg-green-50'}`}>CONTACT</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
