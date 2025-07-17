import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 section-padding">
      <div className="container-width">
        <h2 className="text-3xl sm:text-4xl font-light text-gray-800 mb-12 text-center">
          Get In Touch
        </h2>
        
        <div className="max-w-2xl mx-auto">
          <p className="text-lg text-gray-600 text-center mb-12 leading-relaxed">
            I'm always interested in new opportunities and collaborations. 
            Let's connect and discuss how we can work together.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6 mb-12">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 transition-colors"
                />
              </div>
            </div>
            
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 transition-colors resize-none"
              />
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
              >
                <Send size={16} />
                Send Message
              </button>
            </div>
          </form>
          
          <div className="flex justify-center items-center gap-8">
            <a 
              href="mailto:alex@example.com"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <Mail size={20} />
              <span>Email</span>
            </a>
            <a 
              href="https://github.com"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a 
              href="https://linkedin.com"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;