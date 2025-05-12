
import { Link } from 'react-router-dom';
import { Home, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-realestate-950 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Home className="h-6 w-6 text-teal-400" />
              <span className="text-xl font-display font-bold text-white">UrbanDwell</span>
            </Link>
            <p className="text-gray-300 mb-4">
              Find your dream property with UrbanDwell. Buy, sell, or rent with confidence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-teal-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/properties" className="text-gray-300 hover:text-teal-400 transition-colors">Properties</Link>
              </li>
              <li>
                <Link to="/rent" className="text-gray-300 hover:text-teal-400 transition-colors">Rent</Link>
              </li>
              <li>
                <Link to="/buy" className="text-gray-300 hover:text-teal-400 transition-colors">Buy</Link>
              </li>
              <li>
                <Link to="/sell" className="text-gray-300 hover:text-teal-400 transition-colors">Sell</Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/property-management" className="text-gray-300 hover:text-teal-400 transition-colors">
                  Property Management
                </Link>
              </li>
              <li>
                <Link to="/services/consultancy" className="text-gray-300 hover:text-teal-400 transition-colors">
                  Real Estate Consultancy
                </Link>
              </li>
              <li>
                <Link to="/services/valuation" className="text-gray-300 hover:text-teal-400 transition-colors">
                  Property Valuation
                </Link>
              </li>
              <li>
                <Link to="/services/marketing" className="text-gray-300 hover:text-teal-400 transition-colors">
                  Property Marketing
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-teal-400 mr-2 mt-0.5" />
                <span className="text-gray-300">
                  123 Property Street, Real Estate City, RC 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-teal-400 mr-2" />
                <a href="tel:+15551234567" className="text-gray-300 hover:text-teal-400 transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-teal-400 mr-2" />
                <a href="mailto:info@urbandwell.com" className="text-gray-300 hover:text-teal-400 transition-colors">
                  info@urbandwell.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-400">
          <p>&copy; {currentYear} UrbanDwell. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
