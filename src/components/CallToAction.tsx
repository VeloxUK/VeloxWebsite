
import React from 'react';
import CallToActionBackground from './call-to-action/CallToActionBackground';
import CallToActionContent from './call-to-action/CallToActionContent';
import CallToActionForm from './call-to-action/CallToActionForm';

const CallToAction = () => {
  const benefits = [
    "Earn passive income from your watch collection",
    "Complete insurance coverage on all rentals",
    "Verified, high-net-worth clientele only"
  ];

  return (
    <section id="register" className="py-24 relative overflow-hidden">
      <CallToActionBackground />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <CallToActionContent 
            title={<>Join Our <span className="gold-shimmer">Exclusive</span> Network</>}
            subtitle="Unlock the untapped potential of your luxury watch inventory."
            benefits={benefits}
          />

          {/* Form Side */}
          <CallToActionForm />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
