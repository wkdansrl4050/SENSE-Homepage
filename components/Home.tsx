
import React from 'react';
import { PageRoute } from '../App';

interface HomeProps {
  onNavigate: (route: PageRoute) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center pt-32 pb-40">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=2560&auto=format&fit=crop" 
            alt="Forest Canopy Looking Up" 
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-white/10"></div>
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-1.5 mb-8 text-xs font-black tracking-[0.3em] text-white uppercase bg-[#2E7D32]/90 backdrop-blur-md rounded-full animate-fade-in shadow-xl">
            Engineering for a Sustainable Tomorrow
          </div>
          <h1 className="text-6xl tracking-tighter font-black text-white sm:text-8xl md:text-9xl drop-shadow-2xl">
            <span className="block">SENSE</span>
            <span className="block text-[#A5D6A7] leading-tight mt-2 italic">
              LAB
            </span>
          </h1>
          <p className="mt-10 max-w-2xl mx-auto text-xl text-white sm:text-2xl leading-relaxed drop-shadow-md font-bold">
            Redefining environmental systems through circular innovation. 
            We design technologies that help humanity and nature thrive together.
          </p>
          <div className="mt-16 flex flex-col sm:flex-row justify-center gap-6">
            <button
              onClick={() => onNavigate('RESEARCH')}
              className="px-12 py-5 bg-[#2E7D32] text-white font-black rounded-full hover:bg-[#1B5E20] transition-all shadow-2xl hover:scale-105 active:scale-95 text-lg"
            >
              Our Research
            </button>
            <button
              onClick={() => onNavigate('CONTACT')}
              className="px-12 py-5 bg-white/10 backdrop-blur-xl border-2 border-white/40 text-white font-black rounded-full hover:bg-white/20 transition-all hover:scale-105 active:scale-95 text-lg"
            >
              Collaborate With Us
            </button>
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <div className="relative z-10 -mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-12 bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 group transition-all duration-500 hover:-translate-y-3">
            <div className="w-20 h-20 bg-[#2E7D32]/10 rounded-3xl flex items-center justify-center mb-10 group-hover:bg-[#2E7D32] transition-all duration-300">
              <svg className="w-10 h-10 text-[#2E7D32] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-3xl font-black text-gray-900 mb-6 italic">Innovation</h3>
            <p className="text-gray-600 leading-relaxed font-medium text-lg">
              Integrated engineering frameworks for urban resilience and sustainable resource cycles.
            </p>
          </div>
          
          <div className="p-12 bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 group transition-all duration-500 hover:-translate-y-3">
            <div className="w-20 h-20 bg-[#2E7D32]/10 rounded-3xl flex items-center justify-center mb-10 group-hover:bg-[#2E7D32] transition-all duration-300">
              <svg className="w-10 h-10 text-[#2E7D32] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
              </svg>
            </div>
            <h3 className="text-3xl font-black text-gray-900 mb-6 italic">Circular</h3>
            <p className="text-gray-600 leading-relaxed font-medium text-lg">
              Engineering solutions to eliminate waste and maximize resource value through smart design.
            </p>
          </div>

          <div className="p-12 bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 group transition-all duration-500 hover:-translate-y-3">
            <div className="w-20 h-20 bg-[#2E7D32]/10 rounded-3xl flex items-center justify-center mb-10 group-hover:bg-[#2E7D32] transition-all duration-300">
              <svg className="w-10 h-10 text-[#2E7D32] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857" />
              </svg>
            </div>
            <h3 className="text-3xl font-black text-gray-900 mb-6 italic">Impact</h3>
            <p className="text-gray-600 leading-relaxed font-medium text-lg">
              Bridging global environmental challenges with local engineering excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
