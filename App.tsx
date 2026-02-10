
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

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-[#2E7D32] selection:text-white">
      <Navbar currentRoute={currentRoute} onNavigate={setCurrentRoute} />
      
      {/* 
        The 'key' prop is crucial here. When currentRoute changes, 
        React destroys the old div and creates a new one, 
        triggering the 'animate-page-in' CSS animation.
      */}
      <main 
        key={currentRoute} 
        className="flex-grow animate-page-in"
      >
        {renderPage()}
      </main>

      <footer className="bg-gray-900 text-white py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-8">
            <div className="text-3xl font-black text-[#A5D6A7] tracking-tighter flex items-center space-x-2">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3L4 9V21H20V9L12 3Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>SENSE</span>
            </div>
          </div>
          <p className="text-gray-400 font-medium mb-8">Sustainable Environment System Engineering Laboratory</p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-12">
            <button onClick={() => setCurrentRoute('HOME')} className="text-gray-500 hover:text-white font-bold transition-colors">Home</button>
            <button onClick={() => setCurrentRoute('RESEARCH')} className="text-gray-500 hover:text-white font-bold transition-colors">Research</button>
            <button onClick={() => setCurrentRoute('PUBLICATION')} className="text-gray-500 hover:text-white font-bold transition-colors">Publications</button>
            <button onClick={() => setCurrentRoute('MEMBER_PROFESSOR')} className="text-gray-500 hover:text-white font-bold transition-colors">Members</button>
            <button onClick={() => setCurrentRoute('CONTACT')} className="text-gray-500 hover:text-white font-bold transition-colors">Contact</button>
          </div>
          <div className="w-12 h-px bg-gray-800 mx-auto mb-8"></div>
          <p className="text-gray-600 text-sm font-medium tracking-wide">
            © {new Date().getFullYear()} SENSE Lab. Department of Chemical Engineering, Keimyung University.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
