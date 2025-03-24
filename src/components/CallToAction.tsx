
import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from "@/hooks/use-toast";

const CallToAction = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
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
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const form = e.currentTarget as HTMLFormElement;
      const formData = new FormData(form);
      
      const response = await fetch('https://formspree.io/f/mnnpvyby', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json'
        }
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        navigate('/thank-you');
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Submission Error",
        description: "There was a problem submitting your form. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const benefits = [
    "Earn passive income from your watch collection",
    "Complete insurance coverage on all rentals",
    "Verified, high-net-worth clientele only"
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
                Join Our <span className="gold-shimmer">Exclusive</span> Network
              </h2>
              <p className="text-luxury-cream/80 text-lg">
                Unlock the untapped potential of your luxury watch inventory.
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
          </div>

          {/* Form Side */}
          <div className="bg-luxury-darkgray border border-luxury-gold/10 rounded-lg p-8 md:p-12 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6">Join Our Waitlist</h3>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-luxury-gold/20 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-luxury-gold" />
                </div>
                <h4 className="text-xl font-medium mb-2">Registration Successful!</h4>
                <p className="text-luxury-cream/70">
                  Thank you for your interest. We'll contact you soon.
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
                    <label htmlFor="country" className="block text-sm font-medium text-luxury-cream/90 mb-1">
                      Country
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-luxury-black border border-luxury-gold/20 rounded-md focus:outline-none focus:ring-2 focus:ring-luxury-gold/50 text-luxury-white"
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
                      className="w-full px-4 py-3 bg-luxury-black border border-luxury-gold/20 rounded-md focus:outline-none focus:ring-2 focus:ring-luxury-gold/50 text-luxury-white"
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
                
                <p className="text-xs text-luxury-cream/50 text-center mt-4">
                  By joining, you agree to our Terms of Service and Privacy Policy.
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
