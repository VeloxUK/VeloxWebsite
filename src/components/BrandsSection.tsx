
import React from 'react';

const BrandsSection = () => {
  const brands = [
    { name: "Rolex", logo: "https://i.imgur.com/kNn8R0S.png" },
    { name: "Patek Philippe", logo: "https://i.imgur.com/2gFkGQv.png" },
    { name: "Audemars Piguet", logo: "https://i.imgur.com/JLu8DBq.png" },
    { name: "Omega", logo: "https://i.imgur.com/OVdX4gU.png" },
    { name: "Cartier", logo: "https://i.imgur.com/k79MbZK.png" },
    { name: "Tag Heuer", logo: "https://i.imgur.com/fP7SFgn.png" },
    { name: "IWC", logo: "https://i.imgur.com/xjnYhwx.png" },
    { name: "Jaeger-LeCoultre", logo: "https://i.imgur.com/Wk5W6h4.png" },
  ];

  // Testimonials from dealers
  const testimonials = [
    {
      quote: "Our idle inventory now generates over $15,000 in monthly revenue through LuxWatch. The platform handles everything seamlessly.",
      author: "James Wilson",
      position: "Director, Prestige Watch Gallery",
      image: "https://i.imgur.com/zTWoRHK.jpg"
    },
    {
      quote: "We've seen a 40% increase in overall sales since joining the platform. Clients often end up purchasing after renting.",
      author: "Alexandra Meyer",
      position: "Owner, Meyer Luxury Timepieces",
      image: "https://i.imgur.com/3WHu2bP.jpg"
    },
    {
      quote: "The insurance coverage and verification process give us complete confidence in listing our most valuable pieces.",
      author: "Richard Thompson",
      position: "CEO, Elite Chronograph Collection",
      image: "https://i.imgur.com/7pYcQw2.jpg"
    }
  ];

  return (
    <section id="brands" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-luxury-gold/30 to-transparent"></div>
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-luxury-gold/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
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
              className="bg-luxury-darkgray/50 backdrop-blur-sm border border-luxury-gold/10 rounded-lg p-6 flex items-center justify-center h-32 elegant-hover"
            >
              <img 
                src={brand.logo} 
                alt={brand.name} 
                className="max-h-16 max-w-full opacity-80 hover:opacity-100 transition-opacity" 
              />
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div id="testimonials" className="mt-24">
          <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center">
            Success <span className="gold-shimmer">Stories</span> from Partners
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-luxury-darkgray border border-luxury-gold/10 rounded-lg p-8 elegant-hover relative"
              >
                {/* Quote mark */}
                <div className="absolute top-6 right-6 text-6xl text-luxury-gold/20 font-serif">"</div>
                
                <p className="text-luxury-cream/90 mb-8 relative z-10">{testimonial.quote}</p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border border-luxury-gold/30">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div>
                    <p className="font-medium text-luxury-white">{testimonial.author}</p>
                    <p className="text-sm text-luxury-cream/70">{testimonial.position}</p>
                  </div>
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
              <p className="text-4xl md:text-5xl font-bold text-luxury-gold mb-2">{stat.value}</p>
              <p className="text-luxury-cream/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
