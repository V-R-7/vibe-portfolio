import React from 'react';

const About: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding bg-gray-50">
      <div className="container-width">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-light text-gray-800 mb-12 text-center">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-2 space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a passionate frontend developer with 4+ years of experience creating intuitive 
                and accessible web applications. I specialize in React, TypeScript, and modern CSS 
                frameworks, with a keen eye for design and user experience.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge through technical writing. I believe 
                in writing clean, maintainable code and creating digital experiences that make 
                a difference.
              </p>
              
              <div className="flex flex-wrap gap-3 mt-8">
                {['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Node.js', 'Git'].map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-white text-gray-700 rounded-lg text-sm font-medium border border-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center md:justify-end">
              <div className="w-48 h-48 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-gray-500 text-sm">Profile Image</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;