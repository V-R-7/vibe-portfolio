import React from 'react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, onSectionChange }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSectionClick = (section: string) => {
    onSectionChange(section);
    setIsSidebarOpen(false);
  };

  const menuItems = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="fixed top-6 left-6 z-50 md:hidden p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-gray-700 hover:text-gray-900 transition-colors"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-white/90 to-white/70 backdrop-blur-xl border-r border-white/30 shadow-2xl z-40 transform transition-transform duration-300 ease-in-out ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0`}>
        <div className="flex flex-col h-full">
          {/* Navigation Menu */}
          <nav className="flex-1 px-6 py-12">
            <ul className="space-y-4">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleSectionClick(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 text-base font-light relative overflow-hidden group ${
                      activeSection === item.id 
                        ? 'text-white font-medium bg-gradient-to-r from-gray-800 to-gray-700 shadow-lg transform scale-105' 
                        : 'text-gray-600 hover:text-gray-900 hover:bg-white/60 hover:shadow-md hover:transform hover:scale-102'
                    }`}
                  >
                    {/* Glossy overlay for active state */}
                    {activeSection === item.id && (
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-xl" />
                    )}
                    
                    {/* Hover shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    
                    <span className="relative z-10">
                    {item.label}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </>
  );
};

export default Header;