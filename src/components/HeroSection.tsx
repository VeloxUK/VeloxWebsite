
import React from 'react';
import HeroBackground from './hero/HeroBackground';
import HeroContent from './hero/HeroContent';
import WatchDisplay from './hero/WatchDisplay';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden" aria-label="Hero section" id="register">
      <HeroBackground />

      <div className="container mx-auto px-6 pt-24 pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <HeroContent />

          {/* 3D Watch Showcase */}
          <WatchDisplay />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
