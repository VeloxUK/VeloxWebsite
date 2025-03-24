
import React from 'react';

const BrandsSection = () => {
  return (
    <section id="brands" className="py-24 relative overflow-hidden" aria-labelledby="brands-heading">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-luxury-gold/20 to-transparent"></div>
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-luxury-gold/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { value: "$15M+", label: "Monthly Rental Revenue" },
            { value: "25,000+", label: "Luxury Watches Listed" },
            { value: "98%", label: "Dealer Satisfaction" }
          ].map((stat, index) => (
            <div key={index} className="p-8">
              <p className="text-4xl md:text-5xl font-light text-luxury-gold mb-2">{stat.value}</p>
              <p className="text-luxury-cream/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
