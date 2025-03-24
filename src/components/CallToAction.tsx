
import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

const CallToAction = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    watchBrands: '',
    inventory: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        watchBrands: '',
        inventory: '',
      });
      
      // Reset success message after a while
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  const benefits = [
    "Earn passive income from your watch collection",
    "Zero listing fees and competitive commission rates",
    "Complete insurance coverage on all rentals",
    "Verified, high-net-worth clientele only",
    "Dedicated account manager for your portfolio",
    "Early access to platform upgrades and features"
  ];

  return (
    <section id="register" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-luxury-gold/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-luxury-gold/30 to-transparent"></div>
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-luxury-gold/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-luxury-gold/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Join Our <span className="gold-shimmer">Exclusive</span> Network of Luxury Dealers
              </h2>
              <p className="text-luxury-cream/80 text-lg">
                Unlock the untapped potential of your luxury watch inventory. Register today for early access and preferred dealer status.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-3 mt-1">
                    <div className="w-5 h-5 rounded-full bg-luxury-gold flex items-center justify-center">
                      <Check className="w-3 h-3 text-luxury-black" />
                    </div>
                  </div>
                  <p className="text-luxury-cream/90">{benefit}</p>
                </div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="pt-6">
              <p className="text-sm text-luxury-cream/60 mb-4">Trusted by leading retailers and dealers</p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-luxury-darkgray/50 backdrop-blur-sm border border-luxury-gold/10 rounded-lg px-4 py-2">
                  <span className="text-luxury-gold">⭐</span> Premium Partner
                </div>
                <div className="bg-luxury-darkgray/50 backdrop-blur-sm border border-luxury-gold/10 rounded-lg px-4 py-2">
                  <span className="text-luxury-gold">🔒</span> Secure & Insured
                </div>
                <div className="bg-luxury-darkgray/50 backdrop-blur-sm border border-luxury-gold/10 rounded-lg px-4 py-2">
                  <span className="text-luxury-gold">✓</span> Verified Clients
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-luxury-darkgray border border-luxury-gold/10 rounded-lg p-8 md:p-12 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6">Register Your Interest</h3>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-luxury-gold/20 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-luxury-gold" />
                </div>
                <h4 className="text-xl font-medium mb-2">Registration Successful!</h4>
                <p className="text-luxury-cream/70">
                  Thank you for your interest. A member of our team will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-luxury-cream/90 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-luxury-black border border-luxury-gold/20 rounded-md focus:outline-none focus:ring-2 focus:ring-luxury-gold/50 text-luxury-white"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-luxury-cream/90 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-luxury-black border border-luxury-gold/20 rounded-md focus:outline-none focus:ring-2 focus:ring-luxury-gold/50 text-luxury-white"
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-luxury-cream/90 mb-1">
                      Company/Store Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-luxury-black border border-luxury-gold/20 rounded-md focus:outline-none focus:ring-2 focus:ring-luxury-gold/50 text-luxury-white"
                      placeholder="Enter your company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="watchBrands" className="block text-sm font-medium text-luxury-cream/90 mb-1">
                      Watch Brands You Carry
                    </label>
                    <input
                      type="text"
                      id="watchBrands"
                      name="watchBrands"
                      value={formData.watchBrands}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-luxury-black border border-luxury-gold/20 rounded-md focus:outline-none focus:ring-2 focus:ring-luxury-gold/50 text-luxury-white"
                      placeholder="e.g., Rolex, Omega, Patek Philippe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="inventory" className="block text-sm font-medium text-luxury-cream/90 mb-1">
                      Inventory Size
                    </label>
                    <select
                      id="inventory"
                      name="inventory"
                      value={formData.inventory}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-luxury-black border border-luxury-gold/20 rounded-md focus:outline-none focus:ring-2 focus:ring-luxury-gold/50 text-luxury-white"
                    >
                      <option value="">Select inventory size</option>
                      <option value="1-5">1-5 watches</option>
                      <option value="6-20">6-20 watches</option>
                      <option value="21-50">21-50 watches</option>
                      <option value="50+">50+ watches</option>
                    </select>
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-luxury-gold hover:bg-luxury-lightgold text-luxury-black px-6 py-3 rounded-md font-medium transition-colors flex items-center justify-center group"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      Processing
                      <span className="ml-2 flex">
                        <span className="animate-pulse">.</span>
                        <span className="animate-pulse" style={{ animationDelay: "0.2s" }}>.</span>
                        <span className="animate-pulse" style={{ animationDelay: "0.4s" }}>.</span>
                      </span>
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Register Now
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                    </span>
                  )}
                </button>
                
                <p className="text-xs text-luxury-cream/50 text-center mt-4">
                  By registering, you agree to our Terms of Service and Privacy Policy.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
