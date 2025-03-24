
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-4 md:px-8",
        isScrolled ? "bg-luxury-black/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      )}
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a 
          href="/" 
          className="flex items-center space-x-2"
          aria-label="LuxWatch Home"
        >
          <span className="text-2xl font-serif font-bold gold-shimmer">LuxWatch</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-luxury-white hover:text-luxury-gold transition-colors">How It Works</a>
          <a href="#brands" className="text-luxury-white hover:text-luxury-gold transition-colors">Brands</a>
          <a href="#benefits" className="text-luxury-white hover:text-luxury-gold transition-colors">For Dealers</a>
          <a href="#testimonials" className="text-luxury-white hover:text-luxury-gold transition-colors">Testimonials</a>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a 
            href="#register" 
            className="bg-luxury-gold text-luxury-black px-6 py-2 rounded-md font-medium hover:bg-luxury-lightgold transition-colors"
            aria-label="Register as a dealer"
          >
            Register as Dealer
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-luxury-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div 
          id="mobile-menu"
          className="md:hidden absolute top-full left-0 right-0 bg-luxury-black/95 backdrop-blur-lg border-t border-luxury-gold/20 animate-fade-in"
        >
          <nav className="flex flex-col space-y-4 p-6" aria-label="Mobile Navigation">
            <a 
              href="#features" 
              className="text-luxury-white hover:text-luxury-gold transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#brands" 
              className="text-luxury-white hover:text-luxury-gold transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Brands
            </a>
            <a 
              href="#benefits" 
              className="text-luxury-white hover:text-luxury-gold transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              For Dealers
            </a>
            <a 
              href="#testimonials" 
              className="text-luxury-white hover:text-luxury-gold transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#register" 
              className="bg-luxury-gold text-luxury-black px-6 py-2 rounded-md font-medium hover:bg-luxury-lightgold transition-colors text-center"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Register as a dealer"
            >
              Register as Dealer
            </a>
          </nav>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
