import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useScrollAnimation } from './hooks/useScrollAnimation';

function App() {
  useScrollAnimation();

  return (
    <div className="font-poppins">
      <Header />
      <main>
        <Hero />
        <div className="animate-on-scroll">
          <About />
        </div>
        <div className="animate-on-scroll">
          <Projects />
        </div>
        <div className="animate-on-scroll">
          <Certifications />
        </div>
        <div className="animate-on-scroll">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;