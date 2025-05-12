
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Home, User, LogIn, Building, DollarSign, MessageSquare } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Home className="h-6 w-6 text-realestate-600" />
          <span className="text-xl font-display font-bold text-realestate-800">UrbanDwell</span>
        </Link>

        {isMobile ? (
          <>
            <button onClick={toggleMenu} className="p-2">
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {menuOpen && (
              <div className="absolute top-16 left-0 right-0 bg-white shadow-md py-4 px-4 z-50 flex flex-col space-y-4 animate-fade-in">
                <Link to="/" className="px-3 py-2 hover:bg-gray-100 rounded-md" onClick={toggleMenu}>Home</Link>
                <Link to="/rent" className="px-3 py-2 hover:bg-gray-100 rounded-md" onClick={toggleMenu}>Rent</Link>
                <Link to="/buy" className="px-3 py-2 hover:bg-gray-100 rounded-md" onClick={toggleMenu}>Buy</Link>
                <Link to="/sell" className="px-3 py-2 hover:bg-gray-100 rounded-md" onClick={toggleMenu}>Sell</Link>
                <Link to="/ai-assistant" className="px-3 py-2 hover:bg-gray-100 rounded-md" onClick={toggleMenu}>
                  AI Assistant
                </Link>
                <div className="flex space-x-2 pt-2">
                  <Link to="/login" onClick={toggleMenu}>
                    <Button variant="outline" className="flex items-center gap-2">
                      <LogIn className="h-4 w-4" />
                      Login
                    </Button>
                  </Link>
                  <Link to="/register" onClick={toggleMenu}>
                    <Button className="flex items-center gap-2 bg-realestate-600 hover:bg-realestate-700">
                      <User className="h-4 w-4" />
                      Register
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center space-x-8">
            <nav className="flex space-x-6">
              <Link to="/" className="text-gray-700 hover:text-realestate-600 transition-colors">Home</Link>
              <Link to="/rent" className="text-gray-700 hover:text-realestate-600 transition-colors">Rent</Link>
              <Link to="/buy" className="text-gray-700 hover:text-realestate-600 transition-colors">Buy</Link>
              <Link to="/sell" className="text-gray-700 hover:text-realestate-600 transition-colors">Sell</Link>
              <Link to="/ai-assistant" className="text-gray-700 hover:text-realestate-600 transition-colors flex items-center">
                <MessageSquare className="h-4 w-4 mr-1" />
                AI Assistant
              </Link>
            </nav>
            <div className="flex space-x-3">
              <Link to="/login">
                <Button variant="outline" className="flex items-center gap-2">
                  <LogIn className="h-4 w-4" />
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button className="flex items-center gap-2 bg-realestate-600 hover:bg-realestate-700">
                  <User className="h-4 w-4" />
                  Register
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
