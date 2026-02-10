
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Research from './components/Research';
import PublicationSection from './components/PublicationSection';
import MemberSection from './components/MemberSection';
import Contact from './components/Contact';

export type PageRoute = 'HOME' | 'RESEARCH' | 'PUBLICATION' | 'MEMBER' | 'CONTACT';

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
      case 'MEMBER':
        return <div className="pt-32 pb-16 bg-gray-50 min-h-[70vh]"><MemberSection /></div>;
      case 'CONTACT':
        return <div className="pt-32 pb-16 bg-white min-h-[70vh]"><Contact /></div>;
      default:
        return <Home onNavigate={setCurrentRoute} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar currentRoute={currentRoute} onNavigate={setCurrentRoute} />
      <main className="flex-grow transition-opacity duration-300">
        {renderPage()}
      </main>
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xl font-bold mb-4">SENSE</p>
          <p className="text-gray-400">Sustainable Environment System Engineering Laboratory</p>
          <div className="flex justify-center space-x-6 mt-6">
            <button onClick={() => setCurrentRoute('HOME')} className="text-gray-400 hover:text-white transition-colors">Home</button>
            <button onClick={() => setCurrentRoute('RESEARCH')} className="text-gray-400 hover:text-white transition-colors">Research</button>
            <button onClick={() => setCurrentRoute('MEMBER')} className="text-gray-400 hover:text-white transition-colors">Members</button>
          </div>
          <p className="text-gray-500 mt-8 text-sm">© {new Date().getFullYear()} SENSE Lab. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
