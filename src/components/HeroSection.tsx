
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import WatchModel from './WatchModel';

const HeroSection = () => {
  const watchRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!watchRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate the mouse position as a percentage
      const x = clientX / innerWidth;
      const y = clientY / innerHeight;
      
      // Calculate rotation based on mouse position (limited range)
      const rotateY = (x - 0.5) * 20; // -10 to 10 degrees
      const rotateX = (y - 0.5) * -20; // -10 to 10 degrees
      
      // Apply rotation
      watchRef.current.style.transform = `perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden" aria-label="Hero section">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-luxury-black z-0">
        <div className="absolute top-0 left-0 right-0 h-1/4 bg-gradient-to-b from-luxury-gold/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-luxury-gold/5 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-luxury-gold/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-luxury-gold/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 pt-40 pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-right">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-4">
                <span className="gold-shimmer">Elevate</span> Your Inventory's Potential
              </h1>
              <p className="text-lg md:text-xl text-luxury-cream/80 max-w-xl">
                Transform your exclusive timepieces into a revenue stream. Join the premier 
                marketplace for luxury watch rentals.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#register" 
                className="bg-luxury-gold hover:bg-luxury-lightgold text-luxury-black px-8 py-3 rounded-md font-medium transition-all duration-300 flex items-center justify-center group"
                aria-label="Register as a dealer"
              >
                Register as Dealer
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </a>
              <a 
                href="#learn-more" 
                className="border border-luxury-gold/30 hover:border-luxury-gold text-luxury-white px-8 py-3 rounded-md font-medium transition-all duration-300 flex items-center justify-center"
                aria-label="Learn more about our services"
              >
                Learn More
              </a>
            </div>

            <div className="flex items-center space-x-6 pt-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-luxury-gold/10 flex items-center justify-center text-xs border border-luxury-gold/20">+5K</div>
                <div className="w-10 h-10 rounded-full bg-luxury-gold/10 flex items-center justify-center text-xs border border-luxury-gold/20">+2K</div>
                <div className="w-10 h-10 rounded-full bg-luxury-gold/10 flex items-center justify-center text-xs border border-luxury-gold/20">+8K</div>
              </div>
              <p className="text-sm text-luxury-cream/70">
                Join <span className="text-luxury-gold">15,000+</span> luxury dealers already on our platform
              </p>
            </div>
          </div>

          {/* 3D Watch Showcase */}
          <div className="relative flex items-center justify-center pb-10 animate-fade-in-left">
            <div 
              ref={watchRef}
              className="relative transition-all duration-200 ease-out"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="w-full max-w-md mx-auto">
                <WatchModel />
                
                {/* Floating Elements */}
                <div className="absolute top-10 -right-16 glass p-4 rounded-lg animate-float" style={{animationDelay: "0s"}}>
                  <p className="text-luxury-gold font-medium">Premium Quality</p>
                  <p className="text-sm text-luxury-cream/70">Verified Authenticity</p>
                </div>
                
                <div className="absolute -bottom-10 -left-16 glass p-4 rounded-lg animate-float" style={{animationDelay: "1s"}}>
                  <p className="text-luxury-gold font-medium">Dedicated Insurance</p>
                  <p className="text-sm text-luxury-cream/70">Full Coverage</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
          <div className="w-6 h-10 border-2 border-luxury-gold/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-luxury-gold rounded-full animate-[fadeInDown_1.5s_infinite]"></div>
          </div>
          <p className="text-luxury-gold/70 text-sm mt-2">Scroll Down</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
