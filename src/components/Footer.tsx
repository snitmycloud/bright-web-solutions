
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/500c56ea-29f8-4045-8876-ec1b6c3784aa.png" 
                alt="Company Logo" 
                className="w-8 h-8"
              />
              <h4 className="text-xl font-bold">SNIT Solutions</h4>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Providing excellent solutions for businesses worldwide. Transform your digital presence with our innovative approach.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-yellow-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-yellow-400 transition-colors">About</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-yellow-400 transition-colors">Services</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-yellow-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="bg-slate-800 p-3 rounded-lg hover:bg-yellow-500 hover:text-black transition-all duration-300 group">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-800 p-3 rounded-lg hover:bg-yellow-500 hover:text-black transition-all duration-300 group">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-800 p-3 rounded-lg hover:bg-yellow-500 hover:text-black transition-all duration-300 group">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-800 p-3 rounded-lg hover:bg-yellow-500 hover:text-black transition-all duration-300 group">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 SNIT Solutions. All rights reserved. | Built with excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
