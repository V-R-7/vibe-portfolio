import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-gray-800 text-white section-padding">
      <div className="container-width">
        <div className="text-center">
          <p className="text-gray-400 mb-4">
            © 2024 Alex Johnson. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;