
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Smooth scroll to sections when clicking on navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (!targetId || targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
    
    // Cleanup
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function() {});
      });
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>LuxWatch - Join Our Exclusive Dealer Waitlist</title>
        <meta name="description" content="Join our waitlist for luxury watch dealers. Monetize your watch inventory and connect with discerning clients on our premium rental marketplace." />
        <meta name="keywords" content="luxury watch rental, watch marketplace, dealer waitlist, timepieces rental" />
        <link rel="canonical" href="https://luxwatch.com/" />
      </Helmet>
      <div className="min-h-screen bg-luxury-black text-white overflow-x-hidden">
        <Navbar />
        <main>
          <HeroSection />
          <FeaturesSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
