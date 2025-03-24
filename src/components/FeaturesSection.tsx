
import React from 'react';
import { Clock, ShieldCheck, BarChart4, DollarSign, CreditCard, Users } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Clock className="w-8 h-8 text-luxury-gold" aria-hidden="true" />,
      title: "Unlock Idle Inventory",
      description: "Transform your sitting inventory into revenue-generating assets with zero effort."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-luxury-gold" aria-hidden="true" />,
      title: "Full Insurance Coverage",
      description: "Every rental is backed by comprehensive insurance for complete peace of mind."
    },
    {
      icon: <BarChart4 className="w-8 h-8 text-luxury-gold" aria-hidden="true" />,
      title: "Market Exposure",
      description: "Reach a broader audience of luxury enthusiasts and potential buyers."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-luxury-gold" aria-hidden="true" />,
      title: "Flexible Pricing",
      description: "Set your own rental rates and availability to maximize revenue potential."
    },
    {
      icon: <CreditCard className="w-8 h-8 text-luxury-gold" aria-hidden="true" />,
      title: "Seamless Payments",
      description: "Receive secure, timely payments directly to your account every time."
    },
    {
      icon: <Users className="w-8 h-8 text-luxury-gold" aria-hidden="true" />,
      title: "Dedicated Support",
      description: "Our concierge team handles everything from logistics to customer service."
    }
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden" aria-labelledby="features-heading">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-luxury-gold/20 to-transparent"></div>
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-luxury-gold/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-luxury-gold/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="features-heading" className="text-3xl md:text-4xl font-light mb-6">
            How <span className="gold-shimmer">velox</span> Works for Dealers
          </h2>
          <p className="text-luxury-cream/80 text-lg">
            Our platform connects luxury watch owners with verified clients seeking short-term access to premium timepieces.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-luxury-darkgray border border-luxury-gold/5 rounded-lg p-6 elegant-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-normal mb-3 text-luxury-white">{feature.title}</h3>
              <p className="text-luxury-cream/70">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Process Steps */}
        <div id="benefits" className="mt-24" aria-labelledby="process-heading">
          <h3 id="process-heading" className="text-2xl md:text-3xl font-light mb-12 text-center">
            The <span className="gold-shimmer">Journey</span> of Your Timepiece
          </h3>

          <div className="relative">
            {/* Removed the connection line here */}

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { number: "01", title: "List Your Watches", description: "Upload images and set your rental terms in minutes." },
                { number: "02", title: "Approve Requests", description: "Review and confirm rental requests from verified clients." },
                { number: "03", title: "Secure Handover", description: "We handle the logistics and secure transfer process." },
                { number: "04", title: "Receive Payment", description: "Get paid promptly once the rental period begins." }
              ].map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-luxury-gold text-luxury-black flex items-center justify-center text-xl font-normal mb-6 relative z-10" aria-hidden="true">
                    {step.number}
                  </div>
                  <h4 className="text-xl font-normal mb-2">{step.title}</h4>
                  <p className="text-luxury-cream/70">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
