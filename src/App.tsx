import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'about':
        return <Hero onNavigate={setActiveSection} />;
      case 'projects':
        return <Projects />;
      case 'certifications':
        return <Certifications />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero onNavigate={setActiveSection} />;
    }
  };

  return (
    <div className="font-poppins min-h-screen overflow-hidden bg-gray-50">
      <Header activeSection={activeSection} onSectionChange={setActiveSection} />
      <main className="h-screen md:ml-64">
        {renderActiveSection()}
      </main>
      {activeSection === 'contact' && <Footer />}
    </div>
  );
}

export default App;