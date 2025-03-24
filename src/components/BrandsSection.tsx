
import React from 'react';

const BrandsSection = () => {
  const brands = [
    { name: "Rolex" },
    { name: "Patek Philippe" },
    { name: "Audemars Piguet" },
    { name: "Omega" },
    { name: "Cartier" },
    { name: "Tag Heuer" },
    { name: "IWC" },
    { name: "Jaeger-LeCoultre" },
  ];

  // Testimonials from dealers
  const testimonials = [
    {
      quote: "Our idle inventory now generates over $15,000 in monthly revenue through LuxWatch. The platform handles everything seamlessly.",
      author: "James Wilson",
      position: "Director, Prestige Watch Gallery"
    },
    {
      quote: "We've seen a 40% increase in overall sales since joining the platform. Clients often end up purchasing after renting.",
      author: "Alexandra Meyer",
      position: "Owner, Meyer Luxury Timepieces"
    },
    {
      quote: "The insurance coverage and verification process give us complete confidence in listing our most valuable pieces.",
      author: "Richard Thompson",
      position: "CEO, Elite Chronograph Collection"
    }
  ];

  return (
    <section id="brands" className="py-24 relative overflow-hidden" aria-labelledby="brands-heading">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-luxury-gold/20 to-transparent"></div>
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-luxury-gold/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="brands-heading" className="text-3xl md:text-4xl font-light mb-6">
            Prestigious <span className="gold-shimmer">Brands</span> on Our Platform
          </h2>
          <p className="text-luxury-cream/80 text-lg">
            Join the world's most renowned watch manufacturers already represented in our exclusive marketplace.
          </p>
        </div>

        {/* Brands Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-24">
          {brands.map((brand, index) => (
            <div 
              key={index} 
              className="bg-luxury-darkgray/50 backdrop-blur-sm border border-luxury-gold/5 rounded-lg p-6 flex items-center justify-center h-32 elegant-hover"
            >
              <span className="text-xl font-serif text-luxury-gold/90">{brand.name}</span>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div id="testimonials" className="mt-24" aria-labelledby="testimonials-heading">
          <h3 id="testimonials-heading" className="text-2xl md:text-3xl font-light mb-12 text-center">
            Success <span className="gold-shimmer">Stories</span> from Partners
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-luxury-darkgray border border-luxury-gold/5 rounded-lg p-8 elegant-hover relative"
                aria-label={`Testimonial from ${testimonial.author}`}
              >
                {/* Quote mark */}
                <div className="absolute top-6 right-6 text-6xl text-luxury-gold/10 font-serif" aria-hidden="true">"</div>
                
                <p className="text-luxury-cream/90 mb-8 relative z-10">{testimonial.quote}</p>
                
                <div>
                  <p className="font-medium text-luxury-white">{testimonial.author}</p>
                  <p className="text-sm text-luxury-cream/70">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
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
