
import { Clock } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header className="text-center py-6 md:py-10">
      <div className="flex items-center justify-center mb-4">
        <Clock size={36} className="text-glow-blue mr-2" />
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-glow-blue to-glow-purple bg-clip-text text-transparent">
          TimeTesseract
        </h1>
      </div>
      <p className="text-cosmic-200 max-w-2xl mx-auto mb-6">
        Inspired by Interstellar, explore the dimensions of time with our powerful tools.
        Calculate time differences, find days between dates, and discover fascinating time facts.
      </p>

      <div className="flex justify-center mb-4">
        <Tabs value={currentPath} className="w-full max-w-md">
          <TabsList className="bg-cosmic-700 border border-cosmic-500 w-full">
            <Link to="/" className="w-full">
              <TabsTrigger 
                value="/" 
                className={`w-full text-cosmic-200 ${currentPath === '/' ? 'bg-cosmic-600 text-glow-blue' : ''}`}
              >
                Tools
              </TabsTrigger>
            </Link>
            <Link to="/about" className="w-full">
              <TabsTrigger 
                value="/about" 
                className={`w-full text-cosmic-200 ${currentPath === '/about' ? 'bg-cosmic-600 text-glow-blue' : ''}`}
              >
                About
              </TabsTrigger>
            </Link>
            <Link to="/faq" className="w-full">
              <TabsTrigger 
                value="/faq" 
                className={`w-full text-cosmic-200 ${currentPath === '/faq' ? 'bg-cosmic-600 text-glow-blue' : ''}`}
              >
                FAQ
              </TabsTrigger>
            </Link>
          </TabsList>
        </Tabs>
      </div>
    </header>
  );
};

export default Header;
