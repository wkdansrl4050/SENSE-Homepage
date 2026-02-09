
import React from 'react';

const Navbar: React.FC = () => {
  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'RESEARCH', href: '#research' },
    { name: 'PUBLICATION', href: '#publication' },
    { name: 'MEMBER', href: '#member' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-bold text-[#2E7D32] tracking-tighter">
              SENSE
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 hover:text-[#2E7D32] px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          {/* Mobile menu button could go here if needed, but per prompt we focus on responsiveness generally */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
