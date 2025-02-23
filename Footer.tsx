import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              SHIVA AGROVET PVT LTD
            </h3>
            <p className="text-gray-400">
              Your trusted partner in poultry business solutions, providing quality feeds
              and comprehensive services.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-orange-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <p className="flex items-center text-gray-400">
                <Phone className="w-5 h-5 mr-2 text-orange-400" />
                +91 9182658467
              </p>
              <p className="flex items-center text-gray-400">
                <Mail className="w-5 h-5 mr-2 text-orange-400" />
                info@shivaagrovet.com
              </p>
              <p className="flex items-center text-gray-400">
                <MapPin className="w-5 h-5 mr-2 text-orange-400" />
                Vijayawada, Andhra Pradesh
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Shiva Agrovet Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;