
import React, { useRef, useEffect } from 'react';
import WatchModel from '../WatchModel';

const WatchDisplay = () => {
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
  );
};

export default WatchDisplay;
