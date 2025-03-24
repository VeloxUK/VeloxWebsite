
import React from 'react';
import { Users } from 'lucide-react';
import RegistrationForm from './RegistrationForm';

const HeroContent = () => {
  return (
    <div className="space-y-8 animate-fade-in-right">
      <div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-4">
          <span className="gold-shimmer">Join</span> Our Exclusive Dealer Waitlist
        </h1>
        <p className="text-lg md:text-xl text-luxury-cream/80 max-w-xl">
          Be among the first luxury watch dealers to access our premium rental marketplace and start monetizing your inventory.
        </p>
      </div>

      <RegistrationForm />

      <div className="mt-4">
        <p className="text-sm text-luxury-cream/70 flex items-center">
          <Users size={16} className="text-luxury-gold mr-1.5" />
          Join <span className="text-luxury-gold font-medium mx-1">1000+</span> luxury dealers already in the waiting list.
        </p>
      </div>
    </div>
  );
};

export default HeroContent;
