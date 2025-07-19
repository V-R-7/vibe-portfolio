import React from 'react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, onSectionChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSectionClick = (section: string) => {
    onSectionChange(section);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="section-padding container-width py-4">
        <div className="flex items-center justify-center">
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {['about', 'projects', 'certifications', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => handleSectionClick(item)}
                className={`px-4 py-2 rounded-lg transition-all duration-200 capitalize ${
                  activeSection === item 
                    ? 'text-white bg-slate-700/50' 
                    : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white transition-colors absolute right-6"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 animate-fade-in">
            {['about', 'projects', 'certifications', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => handleSectionClick(item)}
                className={`block w-full text-left py-3 px-4 rounded-lg transition-colors capitalize ${
                  activeSection === item 
                    ? 'text-white bg-slate-700/50' 
                    : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;