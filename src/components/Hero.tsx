import React from 'react';
import { Twitter, Github, TrendingUp, Mail, ArrowRight } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding bg-gray-50">
      <div className="container-width">
        <div className="max-w-3xl">
          {/* Main Introduction */}
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl font-light text-gray-800 mb-6">
              Vijay R 👋
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Seasoned Low Code Developer, expertized in OutSystems with extensive experience in building scalable, user-focused enterprise applications. 
              With a strong foundation in rapid application delivery and a passion for clean architecture,
              my journey blends rapid low-code solutions with robust custom logic—always striving for elegant, maintainable code.
            </p>
          </div>

          {/* Profile Image and Stats */}
          <div className="flex items-start gap-6 mb-8">
            <div className="w-16 h-16 bg-gray-300 rounded-full flex-shrink-0 overflow-hidden">
              <img 
                src="https://cdn.dribbble.com/userupload/42781366/file/still-7a6e5f268abfd5e49d640194c8f28e6d.png?format=webp&resize=400x300&vertical=center" 
                alt="VR"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-600">
                <Twitter size={16} />
                <span className="text-sm">2,847 tweets all time</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Github size={16} />
                <span className="text-sm">1,234 stars on repos</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <TrendingUp size={16} />
                <span className="text-sm">45,678 portfolio views all time</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <p className="text-gray-600 leading-relaxed">
              
            </p>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-6">
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <ArrowRight size={16} />
              <span>follow me on twitter</span>
            </a>
            <a 
              href="mailto:alex@example.com"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <Mail size={16} />
              <span>get email updates</span>
            </a>
          </div>

          {/* Navigation to Projects */}
          <div className="mt-12">
            <button
              onClick={() => onNavigate('projects')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-200 hover:transform hover:-translate-y-0.5"
            >
              View My Work
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
