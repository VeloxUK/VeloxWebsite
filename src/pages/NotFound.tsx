
import React from 'react';
import { Link } from 'react-router-dom';
import SeoHead from '@/components/SeoHead';

const NotFound = () => {
  return (
    <>
      <SeoHead 
        title="Page Not Found | Velox" 
        description="The page you are looking for does not exist. Return to the Velox homepage."
        canonicalUrl="https://velox.com/404"
      />
      <div className="min-h-screen bg-luxury-black text-white flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <span className="gold-shimmer">404</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Page Not Found</h2>
        <p className="text-luxury-cream/80 mb-8 text-center max-w-md">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link 
          to="/" 
          className="bg-luxury-gold text-luxury-black px-8 py-3 rounded-md font-medium hover:bg-luxury-lightgold transition-colors"
        >
          Return to Homepage
        </Link>
      </div>
    </>
  );
};

export default NotFound;
