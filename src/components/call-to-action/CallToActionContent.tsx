
import React from 'react';
import BenefitsList from './BenefitsList';

interface CallToActionContentProps {
  title: React.ReactNode;
  subtitle: string;
  benefits: string[];
}

const CallToActionContent = ({ title, subtitle, benefits }: CallToActionContentProps) => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          {title}
        </h2>
        <p className="text-luxury-cream/80 text-lg">
          {subtitle}
        </p>
      </div>

      <BenefitsList benefits={benefits} />
    </div>
  );
};

export default CallToActionContent;
