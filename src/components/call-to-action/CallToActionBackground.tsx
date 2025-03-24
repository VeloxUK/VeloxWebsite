
import React from 'react';

const CallToActionBackground = () => {
  return (
    <div className="absolute inset-0 z-0">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-luxury-gold/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-luxury-gold/30 to-transparent"></div>
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-luxury-gold/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-luxury-gold/10 rounded-full blur-[100px]"></div>
    </div>
  );
};

export default CallToActionBackground;
