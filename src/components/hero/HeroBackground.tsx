
import React from 'react';

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 z-0">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: "url('background.jpeg')" }}
      ></div>
      
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-luxury-black opacity-75"></div>
      
      {/* Additional Effects */}
      <div className="absolute top-0 left-0 right-0 h-1/4 bg-gradient-to-b from-luxury-gold/5 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-luxury-gold/5 to-transparent"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-luxury-gold/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-luxury-gold/10 rounded-full blur-[100px]"></div>
    </div>
  );
};

export default HeroBackground;
