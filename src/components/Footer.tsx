
import React from 'react';
import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-luxury-black pt-16 pb-8 relative overflow-hidden" aria-labelledby="footer-heading">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-luxury-gold/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 id="footer-heading" className="sr-only">Footer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="/" className="inline-block mb-6" aria-label="Velox Home">
              <span className="text-2xl font-sans font-bold gold-shimmer">Velox</span>
            </a>
            <p className="text-luxury-cream/70 mb-6">
              The premier marketplace for luxury watch rentals, connecting discerning enthusiasts with extraordinary timepieces.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-medium mb-6">Contact Us</h3>
            <address className="not-italic">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Mail className="w-5 h-5 text-luxury-gold mr-3 mt-0.5" aria-hidden="true" />
                  <a href="mailto:mo@thebountyregister.com" className="text-luxury-cream/70 hover:text-luxury-gold transition-colors">mo@thebountyregister.com</a>
                </li>
              </ul>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-luxury-gold/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-luxury-cream/50 text-sm mb-4 md:mb-0">
            © {currentYear} Velox. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/terms" className="text-sm text-luxury-cream/50 hover:text-luxury-gold transition-colors">
              Terms
            </a>
            <a href="/privacy" className="text-sm text-luxury-cream/50 hover:text-luxury-gold transition-colors">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
