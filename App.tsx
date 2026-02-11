
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Home from './components/Home.tsx';
import Research from './components/Research.tsx';
import PublicationSection from './components/PublicationSection.tsx';
import MemberSection from './components/MemberSection.tsx';
import Contact from './components/Contact.tsx';

export type PageRoute = 
  | 'HOME' 
  | 'RESEARCH' 
  | 'PUBLICATION' 
  | 'MEMBER_PROFESSOR' 
  | 'MEMBER_GRADUATE' 
  | 'MEMBER_UNDERGRADUATE' 
  | 'MEMBER_ALUMNI' 
  | 'CONTACT';

const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('HOME');

  // Reset scroll to top whenever the route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentRoute]);

  const renderPage = () => {
    switch (currentRoute) {
      case 'HOME':
        return <Home onNavigate={setCurrentRoute} />;
      case 'RESEARCH':
        return <div className="pt-32 pb-16 bg-gray-50 min-h-[70vh]"><Research /></div>;
      case 'PUBLICATION':
        return <div className="pt-32 pb-16 bg-white min-h-[70vh]"><PublicationSection /></div>;
      case 'MEMBER_PROFESSOR':
        return <div className="pt-32 pb-16 bg-gray-50 min-h-[70vh]"><MemberSection category="Professor" /></div>;
      case 'MEMBER_GRADUATE':
        return <div className="pt-32 pb-16 bg-gray-50 min-h-[70vh]"><MemberSection category="Graduate Student" /></div>;
      case 'MEMBER_UNDERGRADUATE':
        return <div className="pt-32 pb-16 bg-gray-50 min-h-[70vh]"><MemberSection category="Undergraduate Researcher" /></div>;
      case 'MEMBER_ALUMNI':
        return <div className="pt-32 pb-16 bg-gray-50 min-h-[70vh]"><MemberSection category="Alumni" /></div>;
      case 'CONTACT':
        return <div className="pt-32 pb-16 bg-white min-h-[70vh]"><Contact /></div>;
      default:
        return <Home onNavigate={setCurrentRoute} />;
    }
  };

  // 연구실 로고 URL
  const labLogoUrl = `https://lh3.googleusercontent.com/d/1qA6PNA3ZjSEB4v-g2fzXf3VXumTbwpo3`;

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-[#2E7D32] selection:text-white">
      <Navbar currentRoute={currentRoute} onNavigate={setCurrentRoute} />
      
      <main 
        key={currentRoute} 
        className="flex-grow animate-page-in"
      >
        {renderPage()}
      </main>

      <footer className="bg-gray-900 text-white py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <button 
              onClick={() => setCurrentRoute('HOME')}
              className="group focus:outline-none"
            >
              {/* 푸터 로고: 어두운 배경에서 이질감이 없도록 세련된 화이트 카드(배지)에 담음 */}
              <div className="bg-white p-3 md:p-4 rounded-2xl shadow-2xl border border-gray-700/50 transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1">
                <img 
                  src={labLogoUrl} 
                  alt="SENSE Lab Seal" 
                  className="h-12 md:h-16 w-auto object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/200x80/ffffff/2E7D32?text=SENSE+LAB';
                  }}
                />
              </div>
            </button>
          </div>
          
          <h2 className="text-xl font-black text-[#A5D6A7] tracking-tighter mb-2 italic">SENSE LAB</h2>
          <p className="text-gray-400 font-bold mb-8 text-sm md:text-base">Sustainable Environment System Engineering Laboratory</p>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-12">
            <button onClick={() => setCurrentRoute('HOME')} className="text-gray-500 hover:text-white font-bold transition-colors">Home</button>
            <button onClick={() => setCurrentRoute('RESEARCH')} className="text-gray-500 hover:text-white font-bold transition-colors">Research</button>
            <button onClick={() => setCurrentRoute('PUBLICATION')} className="text-gray-500 hover:text-white font-bold transition-colors">Publications</button>
            <button onClick={() => setCurrentRoute('MEMBER_PROFESSOR')} className="text-gray-500 hover:text-white font-bold transition-colors">Members</button>
            <button onClick={() => setCurrentRoute('CONTACT')} className="text-gray-500 hover:text-white font-bold transition-colors">Contact</button>
          </div>
          <div className="w-12 h-px bg-gray-800 mx-auto mb-8"></div>
          <p className="text-gray-600 text-xs md:text-sm font-medium tracking-wide">
            © {new Date().getFullYear()} SENSE Lab. Department of Chemical Engineering, Keimyung University.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
