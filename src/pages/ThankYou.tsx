
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Check } from 'lucide-react';

const ThankYou = () => {
  return (
    <>
      <Helmet>
        <title>Thank You - LuxWatch</title>
        <meta name="description" content="Thank you for joining our luxury watch dealer waitlist." />
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="min-h-screen bg-luxury-black text-white overflow-x-hidden">
        <Navbar />
        <main>
          <section className="py-24 min-h-[70vh] flex items-center relative">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-luxury-gold/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-luxury-gold/30 to-transparent"></div>
              <div className="absolute top-1/3 left-0 w-96 h-96 bg-luxury-gold/10 rounded-full blur-[100px]"></div>
              <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-luxury-gold/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
              <div className="max-w-2xl mx-auto text-center">
                <div className="w-24 h-24 rounded-full bg-luxury-gold/20 flex items-center justify-center mx-auto mb-6">
                  <Check className="w-12 h-12 text-luxury-gold" />
                </div>
                
                <h1 className="text-4xl md:text-5xl font-light mb-6">
                  <span className="gold-shimmer">Thank You</span> for Joining
                </h1>
                
                <p className="text-lg text-luxury-cream/80 mb-8">
                  We've received your registration for our exclusive dealer waitlist. 
                  We'll be in touch soon with more information about our premium watch rental marketplace.
                </p>
                
                <Link 
                  to="/" 
                  className="bg-luxury-gold hover:bg-luxury-lightgold text-luxury-black px-6 py-3 rounded-md font-medium transition-colors inline-flex items-center"
                >
                  Return to Home
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ThankYou;
