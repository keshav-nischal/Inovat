
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-4 bg-background shadow-sm' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">
          Outils.
        </Link>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <a href="#about" className="hover:opacity-70 transition-opacity">About</a>
          <a href="#services" className="hover:opacity-70 transition-opacity">Services</a>
          <a href="#work" className="hover:opacity-70 transition-opacity">Work</a>
          <a href="#contact" className="hover:opacity-70 transition-opacity">Contact</a>
        </nav>
        
        <Button className="hidden md:flex" variant="outline" asChild>
          <a href="#contact">Get In Touch</a>
        </Button>
        
        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-background z-40 pt-24">
          <nav className="flex flex-col items-center space-y-8 text-2xl">
            <a 
              href="#about" 
              className="hover:opacity-70 transition-opacity"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#services" 
              className="hover:opacity-70 transition-opacity"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#work" 
              className="hover:opacity-70 transition-opacity"
              onClick={() => setIsMenuOpen(false)}
            >
              Work
            </a>
            <a 
              href="#contact" 
              className="hover:opacity-70 transition-opacity"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <Button 
              className="mt-6" 
              variant="outline"
              onClick={() => setIsMenuOpen(false)}
              asChild
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
