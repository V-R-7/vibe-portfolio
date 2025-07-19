import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'E-Commerce Dashboard',
      description: 'A comprehensive admin dashboard for managing products, orders, and analytics with real-time data visualization.',
      tech: ['React', 'TypeScript', 'Chart.js', 'Tailwind CSS'],
      github: '#',
      live: '#'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative project management tool with drag-and-drop functionality and team collaboration features.',
      tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Framer Motion'],
      github: '#',
      live: '#'
    },
    {
      title: 'Weather Forecast App',
      description: 'A clean and intuitive weather application with location-based forecasts and beautiful visualizations.',
      tech: ['React', 'OpenWeather API', 'CSS3', 'PWA'],
      github: '#',
      live: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'A minimalist portfolio showcasing clean design principles and smooth animations.',
      tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      github: '#',
      live: '#'
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center section-padding bg-white">
      <div className="container-width">
        <div className="w-full">
          <h2 className="text-3xl sm:text-4xl font-light text-gray-800 mb-12 text-center">
            Selected Work
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group hover:transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="p-8 bg-white border border-gray-100 hover:border-gray-200 transition-colors duration-200">
                  <h3 className="text-xl font-medium text-gray-800 mb-4 group-hover:text-gray-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <a 
                      href={project.github}
                      className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      <Github size={16} />
                      <span className="text-sm">Code</span>
                    </a>
                    <a 
                      href={project.live}
                      className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;