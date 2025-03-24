import React from 'react';
import { Instagram, Twitter, Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-luxury-black border-t border-luxury-gold/10 pt-16 pb-8 relative overflow-hidden" aria-labelledby="footer-heading">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-luxury-gold/30 to-transparent"></div>
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-luxury-gold/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 id="footer-heading" className="sr-only">Footer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="/" className="inline-block mb-6" aria-label="LuxWatch Home">
              <span className="text-2xl font-serif font-bold gold-shimmer">LuxWatch</span>
            </a>
            <p className="text-luxury-cream/70 mb-6">
              The premier marketplace for luxury watch rentals, connecting discerning enthusiasts with extraordinary timepieces.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/luxwatch" className="text-luxury-cream/60 hover:text-luxury-gold transition-colors" aria-label="Follow on Instagram">
                <Instagram size={20} aria-hidden="true" />
              </a>
              <a href="https://twitter.com/luxwatch" className="text-luxury-cream/60 hover:text-luxury-gold transition-colors" aria-label="Follow on Twitter">
                <Twitter size={20} aria-hidden="true" />
              </a>
              <a href="https://facebook.com/luxwatch" className="text-luxury-cream/60 hover:text-luxury-gold transition-colors" aria-label="Follow on Facebook">
                <Facebook size={20} aria-hidden="true" />
              </a>
              <a href="https://linkedin.com/company/luxwatch" className="text-luxury-cream/60 hover:text-luxury-gold transition-colors" aria-label="Follow on LinkedIn">
                <Linkedin size={20} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-6">Quick Links</h3>
            <nav aria-label="Quick links navigation">
              <ul className="space-y-3">
                <li>
                  <a href="/about" className="text-luxury-cream/70 hover:text-luxury-gold transition-colors">About Us</a>
                </li>
                <li>
                  <a href="#features" className="text-luxury-cream/70 hover:text-luxury-gold transition-colors">How It Works</a>
                </li>
                <li>
                  <a href="/for-renters" className="text-luxury-cream/70 hover:text-luxury-gold transition-colors">For Renters</a>
                </li>
                <li>
                  <a href="#benefits" className="text-luxury-cream/70 hover:text-luxury-gold transition-colors">For Dealers</a>
                </li>
                <li>
                  <a href="/pricing" className="text-luxury-cream/70 hover:text-luxury-gold transition-colors">Pricing</a>
                </li>
                <li>
                  <a href="/faqs" className="text-luxury-cream/70 hover:text-luxury-gold transition-colors">FAQs</a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Learn More */}
          <div>
            <h3 className="text-lg font-medium mb-6">Learn More</h3>
            <nav aria-label="Learn more navigation">
              <ul className="space-y-3">
                <li>
                  <a href="/watch-care" className="text-luxury-cream/70 hover:text-luxury-gold transition-colors">Watch Care Guide</a>
                </li>
                <li>
                  <a href="/insurance" className="text-luxury-cream/70 hover:text-luxury-gold transition-colors">Insurance Coverage</a>
                </li>
                <li>
                  <a href="/verification" className="text-luxury-cream/70 hover:text-luxury-gold transition-colors">Verification Process</a>
                </li>
                <li>
                  <a href="/terms" className="text-luxury-cream/70 hover:text-luxury-gold transition-colors">Terms of Service</a>
                </li>
                <li>
                  <a href="/privacy" className="text-luxury-cream/70 hover:text-luxury-gold transition-colors">Privacy Policy</a>
                </li>
                <li>
                  <a href="/blog" className="text-luxury-cream/70 hover:text-luxury-gold transition-colors">Blog</a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-medium mb-6">Contact Us</h3>
            <address className="not-italic">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Mail className="w-5 h-5 text-luxury-gold mr-3 mt-0.5" aria-hidden="true" />
                  <a href="mailto:contact@luxwatch.com" className="text-luxury-cream/70 hover:text-luxury-gold transition-colors">contact@luxwatch.com</a>
                </li>
                <li className="flex items-start">
                  <Phone className="w-5 h-5 text-luxury-gold mr-3 mt-0.5" aria-hidden="true" />
                  <a href="tel:+18885557890" className="text-luxury-cream/70 hover:text-luxury-gold transition-colors">+1 (888) 555-7890</a>
                </li>
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-luxury-gold mr-3 mt-0.5" aria-hidden="true" />
                  <span className="text-luxury-cream/70">
                    123 Luxury Lane, Suite 400<br />
                    New York, NY 10001
                  </span>
                </li>
              </ul>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-luxury-gold/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-luxury-cream/50 text-sm mb-4 md:mb-0">
            © {currentYear} LuxWatch. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/terms" className="text-sm text-luxury-cream/50 hover:text-luxury-gold transition-colors">
              Terms
            </a>
            <a href="/privacy" className="text-sm text-luxury-cream/50 hover:text-luxury-gold transition-colors">
              Privacy
            </a>
            <a href="/cookies" className="text-sm text-luxury-cream/50 hover:text-luxury-gold transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
