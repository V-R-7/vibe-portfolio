import React from 'react';
import { Award } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: 'React Developer Certification',
      issuer: 'Meta',
      year: '2023',
      description: 'Advanced React concepts and best practices'
    },
    {
      title: 'JavaScript ES6+ Certification',
      issuer: 'FreeCodeCamp',
      year: '2022',
      description: 'Modern JavaScript features and patterns'
    },
    {
      title: 'Frontend Web Development',
      issuer: 'Coursera',
      year: '2022',
      description: 'Comprehensive frontend development course'
    },
    {
      title: 'UI/UX Design Fundamentals',
      issuer: 'Google',
      year: '2021',
      description: 'Design principles and user experience'
    }
  ];

  return (
    <section id="certifications" className="py-20 section-padding bg-gray-50">
      <div className="container-width">
        <h2 className="text-3xl sm:text-4xl font-light text-gray-800 mb-12 text-center">
          Certifications
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-white p-6 hover:transform hover:-translate-y-1 transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <Award className="text-gray-400 mr-3" size={20} />
                <span className="text-sm text-gray-500 font-medium">{cert.year}</span>
              </div>
              
              <h3 className="font-medium text-gray-800 mb-2 leading-tight">
                {cert.title}
              </h3>
              
              <p className="text-sm text-gray-600 mb-2">
                {cert.issuer}
              </p>
              
              <p className="text-xs text-gray-500 leading-relaxed">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;