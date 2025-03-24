
import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  country: string;
  city: string;
}

const RegistrationForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    country: '',
    city: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  return (
    <div className="bg-luxury-darkgray/80 backdrop-blur-md border border-luxury-gold/10 rounded-lg p-6">
      <h3 className="text-xl font-bold mb-4">Join Our Waitlist</h3>
      
      {isSubmitted ? (
        <div className="text-center py-6">
          <div className="w-12 h-12 rounded-full bg-luxury-gold/20 flex items-center justify-center mx-auto mb-3">
            <Check className="w-6 h-6 text-luxury-gold" />
          </div>
          <h4 className="text-lg font-medium mb-2">Registration Successful!</h4>
          <p className="text-luxury-cream/70">
            Thank you for your interest. We'll contact you soon.
          </p>
        </div>
      ) : (
        <form action='https://formspree.io/f/mnnpvyby' method='POST' className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                className="w-full px-3 py-2 bg-luxury-black border border-luxury-gold/20 rounded-md focus:outline-none focus:ring-1 focus:ring-luxury-gold/50 text-luxury-white"
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
                className="w-full px-3 py-2 bg-luxury-black border border-luxury-gold/20 rounded-md focus:outline-none focus:ring-1 focus:ring-luxury-gold/50 text-luxury-white"
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-luxury-cream/90 mb-1">
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-luxury-black border border-luxury-gold/20 rounded-md focus:outline-none focus:ring-1 focus:ring-luxury-gold/50 text-luxury-white"
                placeholder="Your country"
              />
            </div>
            
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-luxury-cream/90 mb-1">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-luxury-black border border-luxury-gold/20 rounded-md focus:outline-none focus:ring-1 focus:ring-luxury-gold/50 text-luxury-white"
                placeholder="Your city"
              />
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
                Join Waitlist
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </span>
            )}
          </button>
          
          <p className="text-xs text-luxury-cream/50 text-center mt-1">
            By joining, you agree to our Terms of Service and Privacy Policy.
          </p>
        </form>
      )}
    </div>
  );
};

export default RegistrationForm;
