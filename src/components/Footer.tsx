
import { Link } from 'react-router-dom';
import { ArrowUp, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
            <Link to="/" className="text-2xl font-bold">
              Outils.
            </Link>
            
            <button
              onClick={scrollToTop}
              className="mt-6 md:mt-0 flex items-center gap-2 hover:opacity-70 transition-opacity"
              aria-label="Back to top"
            >
              Back to top <ArrowUp size={16} />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
            <div>
              <h3 className="text-lg font-medium mb-4">Studio</h3>
              <ul className="space-y-3">
                <li><a href="#about" className="hover:opacity-70 transition-opacity">About Us</a></li>
                <li><a href="#services" className="hover:opacity-70 transition-opacity">Services</a></li>
                <li><a href="#work" className="hover:opacity-70 transition-opacity">Projects</a></li>
                <li><a href="#contact" className="hover:opacity-70 transition-opacity">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Services</h3>
              <ul className="space-y-3">
                <li><a href="#services" className="hover:opacity-70 transition-opacity">Brand Strategy</a></li>
                <li><a href="#services" className="hover:opacity-70 transition-opacity">UI/UX Design</a></li>
                <li><a href="#services" className="hover:opacity-70 transition-opacity">Web Development</a></li>
                <li><a href="#services" className="hover:opacity-70 transition-opacity">Digital Marketing</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Connect</h3>
              <ul className="space-y-3">
                <li><a href="mailto:hello@outils.studio" className="hover:opacity-70 transition-opacity">hello@outils.studio</a></li>
                <li><a href="tel:+11234567890" className="hover:opacity-70 transition-opacity">+1 (123) 456-7890</a></li>
                <li><p>New York City, NY</p></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Follow Us</h3>
              <div className="flex gap-6">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                  <Instagram size={20} />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                  <Twitter size={20} />
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                  <Linkedin size={20} />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
            <p>© {new Date().getFullYear()} Outils. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex gap-6">
              <a href="#" className="text-sm hover:opacity-70 transition-opacity">Privacy Policy</a>
              <a href="#" className="text-sm hover:opacity-70 transition-opacity">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
