
import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  dark?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, dark }) => {
  return (
    <div className="text-center mb-16">
      <h2 className={`text-3xl font-extrabold tracking-tight sm:text-4xl ${dark ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h2>
      <div className="w-20 h-1.5 bg-[#2E7D32] mx-auto mt-4 mb-6"></div>
      {subtitle && (
        <p className={`max-w-2xl mx-auto text-xl ${dark ? 'text-gray-300' : 'text-gray-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
