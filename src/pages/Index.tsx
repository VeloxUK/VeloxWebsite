
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import BrandsSection from '@/components/BrandsSection';
import CallToAction from '@/components/CallToAction';
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
        <title>LuxWatch - Premium Luxury Watch Rental Marketplace</title>
        <meta name="description" content="Transform your idle luxury watches into revenue-generating assets. Join the premier marketplace connecting luxury watch dealers with discerning clients." />
        <meta name="keywords" content="luxury watch rental, watch marketplace, watch dealers, timepieces rental" />
        <link rel="canonical" href="https://luxwatch.com/" />
      </Helmet>
      <div className="min-h-screen bg-luxury-black text-white overflow-x-hidden">
        <Navbar />
        <main>
          <HeroSection />
          <FeaturesSection />
          <BrandsSection />
          <CallToAction />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
