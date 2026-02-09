
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">SENSE</span>{' '}
            <span className="block text-[#2E7D32] xl:inline leading-tight">
              Sustainable Environment System Engineering
            </span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-500 sm:text-xl">
            Empowering a sustainable future through advanced system engineering and environmental innovation.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <a
              href="#research"
              className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#2E7D32] hover:bg-[#1B5E20] transition-colors md:py-4 md:text-lg md:px-10"
            >
              Explore Research
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-[#2E7D32] bg-white hover:bg-gray-50 transition-colors md:py-4 md:text-lg md:px-10"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="p-6">
            <div className="w-12 h-12 bg-[#2E7D32]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-[#2E7D32]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Innovation</h3>
            <p className="text-gray-600">Developing cutting-edge technologies to solve complex environmental challenges.</p>
          </div>
          <div className="p-6">
            <div className="w-12 h-12 bg-[#2E7D32]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-[#2E7D32]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Sustainability</h3>
            <p className="text-gray-600">Promoting the circular economy and resource efficiency for a greener planet.</p>
          </div>
          <div className="p-6">
            <div className="w-12 h-12 bg-[#2E7D32]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-[#2E7D32]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Collaboration</h3>
            <p className="text-gray-600">Working across disciplines to create holistic systems for environmental engineering.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
