
import React, { useState } from 'react';
import { PageRoute } from '../App';

interface NavbarProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentRoute, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks: { name: PageRoute; label: string }[] = [
    { name: 'HOME', label: 'HOME' },
    { name: 'RESEARCH', label: 'RESEARCH' },
    { name: 'PUBLICATION', label: 'PUBLICATION' },
    { name: 'MEMBER', label: 'MEMBER' },
    { name: 'CONTACT', label: 'CONTACT' },
  ];

  const handleNavigate = (route: PageRoute) => {
    onNavigate(route);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-lg border-b border-white/20 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0">
            <button 
              onClick={() => handleNavigate('HOME')}
              className="text-2xl font-black text-[#2E7D32] tracking-tighter flex items-center space-x-2 focus:outline-none"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3L4 9V21H20V9L12 3Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>SENSE</span>
            </button>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavigate(link.name)}
                  className={`px-5 py-2.5 text-sm font-bold rounded-full transition-all duration-300 ${
                    currentRoute === link.name 
                    ? 'text-white bg-[#2E7D32] shadow-lg shadow-green-900/20' 
                    : 'text-gray-700 hover:text-[#2E7D32] hover:bg-green-50/50'
                  }`}
                >
                  {link.label}
                </button>
              ))}
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

      <div className={`md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 py-6 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavigate(link.name)}
              className={`block w-full text-left px-4 py-4 rounded-2xl text-base font-black transition-all ${
                currentRoute === link.name 
                ? 'text-white bg-[#2E7D32]' 
                : 'text-gray-700 hover:bg-green-50'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;