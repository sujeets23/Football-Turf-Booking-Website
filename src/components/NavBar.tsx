
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BadmintonBird } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLoginClick = () => {
    toast({
      title: "Coming Soon",
      description: "Login functionality will be available in the next update.",
    });
  };

  return (
    <nav className="py-4 w-full glass-morphism sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <BadmintonBird className="h-8 w-8 text-turf animate-rotate-slow" />
            <span className="text-xl font-bold text-gradient">TurfBooker</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-sm text-gray-300 hover:text-turf transition duration-200">Home</Link>
            <Link to="/turfs" className="text-sm text-gray-300 hover:text-turf transition duration-200">Turfs</Link>
            <Link to="/booking" className="text-sm text-gray-300 hover:text-turf transition duration-200">Book Now</Link>
            <Link to="/about" className="text-sm text-gray-300 hover:text-turf transition duration-200">About</Link>
            <Button onClick={handleLoginClick} variant="outline" className="border-turf text-turf hover:bg-turf hover:text-black">
              Login
            </Button>
          </div>
          
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-300 hover:text-turf">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden mt-4 neo-blur rounded-lg p-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-sm text-gray-300 hover:text-turf" onClick={toggleMenu}>Home</Link>
              <Link to="/turfs" className="text-sm text-gray-300 hover:text-turf" onClick={toggleMenu}>Turfs</Link>
              <Link to="/booking" className="text-sm text-gray-300 hover:text-turf" onClick={toggleMenu}>Book Now</Link>
              <Link to="/about" className="text-sm text-gray-300 hover:text-turf" onClick={toggleMenu}>About</Link>
              <Button onClick={handleLoginClick} variant="outline" className="border-turf text-turf hover:bg-turf hover:text-black w-full">
                Login
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
