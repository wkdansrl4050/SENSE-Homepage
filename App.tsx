
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Research from './components/Research';
import PublicationSection from './components/PublicationSection';
import MemberSection from './components/MemberSection';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section id="home">
          <Home />
        </section>
        <section id="research" className="py-20 bg-gray-50">
          <Research />
        </section>
        <section id="publication" className="py-20 bg-white">
          <PublicationSection />
        </section>
        <section id="member" className="py-20 bg-gray-50">
          <MemberSection />
        </section>
        <section id="contact" className="py-20 bg-white">
          <Contact />
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xl font-bold mb-4">SENSE</p>
          <p className="text-gray-400">Sustainable Environment System Engineering Laboratory</p>
          <p className="text-gray-500 mt-8 text-sm">© {new Date().getFullYear()} SENSE Lab. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
