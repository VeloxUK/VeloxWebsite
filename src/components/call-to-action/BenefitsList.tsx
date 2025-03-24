
import React from 'react';
import BenefitItem from './BenefitItem';

interface BenefitsListProps {
  benefits: string[];
}

const BenefitsList = ({ benefits }: BenefitsListProps) => {
  return (
    <div className="space-y-4">
      {benefits.map((benefit, index) => (
        <BenefitItem key={index} text={benefit} />
      ))}
    </div>
  );
};

export default BenefitsList;
