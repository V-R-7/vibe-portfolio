import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center section-padding">
      <div className="container-width text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-800 mb-6">
            Hi, I'm <span className="font-medium text-gradient">Alex</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto font-light">
            A Frontend Developer crafting digital experiences with clean code and thoughtful design
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button className="px-8 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200">
              View My Work
            </button>
            <button className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 hover:text-gray-800 transition-colors duration-200">
              Download CV
            </button>
          </div>
        </div>
        
        <button 
          onClick={scrollToAbout}
          className="animate-bounce text-gray-400 hover:text-gray-600 transition-colors duration-200"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;