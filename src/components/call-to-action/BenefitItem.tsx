
import React from 'react';
import { Check } from 'lucide-react';

interface BenefitItemProps {
  text: string;
}

const BenefitItem = ({ text }: BenefitItemProps) => {
  return (
    <div className="flex items-start">
      <div className="mr-3 mt-1">
        <div className="w-5 h-5 rounded-full bg-luxury-gold flex items-center justify-center">
          <Check className="w-3 h-3 text-luxury-black" />
        </div>
      </div>
      <p className="text-luxury-cream/90">{text}</p>
    </div>
  );
};

export default BenefitItem;
