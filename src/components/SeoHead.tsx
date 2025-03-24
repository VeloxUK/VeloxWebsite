
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SeoHeadProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImageUrl?: string;
  keywords?: string;
  ogType?: 'website' | 'article';
  twitterCard?: 'summary' | 'summary_large_image';
}

const SeoHead = ({
  title,
  description,
  canonicalUrl = 'https://luxwatch.com',
  ogImageUrl = 'https://luxwatch.com/opengraph-image.png',
  keywords = 'luxury watches, watch rental, premium timepieces',
  ogType = 'website',
  twitterCard = 'summary_large_image'
}: SeoHeadProps) => {
  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImageUrl} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
    </Helmet>
  );
};

export default SeoHead;
