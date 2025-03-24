
import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import WatchModel from './WatchModel';

const HeroSection = () => {
  const watchRef = useRef<HTMLDivElement>(null);
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
        country: '',
        city: '',
      });
      
      // Reset success message after a while
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!watchRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate the mouse position as a percentage
      const x = clientX / innerWidth;
      const y = clientY / innerHeight;
      
      // Calculate rotation based on mouse position (limited range)
      const rotateY = (x - 0.5) * 20; // -10 to 10 degrees
      const rotateX = (y - 0.5) * -20; // -10 to 10 degrees
      
      // Apply rotation
      watchRef.current.style.transform = `perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden" aria-label="Hero section" id="register">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-luxury-black z-0">
        <div className="absolute top-0 left-0 right-0 h-1/4 bg-gradient-to-b from-luxury-gold/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-luxury-gold/5 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-luxury-gold/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-luxury-gold/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 pt-24 pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-right">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-4">
                <span className="gold-shimmer">Join</span> Our Exclusive Dealer Waitlist
              </h1>
              <p className="text-lg md:text-xl text-luxury-cream/80 max-w-xl">
                Be among the first luxury watch dealers to access our premium rental marketplace and start monetizing your inventory.
              </p>
            </div>

            {/* Form Area (Featured on Hero) */}
            <div className="bg-luxury-darkgray border border-luxury-gold/10 rounded-lg p-6 backdrop-blur-sm">
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
                <form onSubmit={handleSubmit} className="space-y-4">
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

            <div className="flex items-center space-x-6">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-luxury-gold/10 flex items-center justify-center text-xs border border-luxury-gold/20">+5K</div>
                <div className="w-10 h-10 rounded-full bg-luxury-gold/10 flex items-center justify-center text-xs border border-luxury-gold/20">+2K</div>
                <div className="w-10 h-10 rounded-full bg-luxury-gold/10 flex items-center justify-center text-xs border border-luxury-gold/20">+8K</div>
              </div>
              <p className="text-sm text-luxury-cream/70">
                Join <span className="text-luxury-gold">15,000+</span> luxury dealers already on our platform
              </p>
            </div>
          </div>

          {/* 3D Watch Showcase */}
          <div className="relative flex items-center justify-center pb-10 animate-fade-in-left">
            <div 
              ref={watchRef}
              className="relative transition-all duration-200 ease-out"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="w-full max-w-md mx-auto">
                <WatchModel />
                
                {/* Floating Elements */}
                <div className="absolute top-10 -right-16 glass p-4 rounded-lg animate-float" style={{animationDelay: "0s"}}>
                  <p className="text-luxury-gold font-medium">Premium Quality</p>
                  <p className="text-sm text-luxury-cream/70">Verified Authenticity</p>
                </div>
                
                <div className="absolute -bottom-10 -left-16 glass p-4 rounded-lg animate-float" style={{animationDelay: "1s"}}>
                  <p className="text-luxury-gold font-medium">Dedicated Insurance</p>
                  <p className="text-sm text-luxury-cream/70">Full Coverage</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
