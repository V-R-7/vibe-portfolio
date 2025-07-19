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
      <aside className={`fixed top-0 left-8 h-full w-48 bg-white/80 backdrop-blur-md z-40 transform transition-transform duration-300 ease-in-out ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 lg:left-12 xl:left-16`}>
        <div className="flex flex-col h-full">
          {/* Navigation Menu */}
          <nav className="flex-1 px-6 py-12">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleSectionClick(item.id)}
                    className={`w-full text-left py-2 transition-all duration-200 text-sm font-light ${
                      activeSection === item.id 
                        ? 'text-gray-900 font-normal' 
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
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
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </>
  );
};

export default Header;