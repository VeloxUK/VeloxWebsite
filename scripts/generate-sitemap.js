
/**
 * Sitemap Generator Script for Velox
 * 
 * Usage: node generate-sitemap.js
 * This script generates a sitemap.xml file for the website.
 */

const fs = require('fs');
const path = require('path');

// Configuration
const BASE_URL = 'https://velox.com';
const DIST_PATH = path.join(__dirname, '../public/sitemap.xml');

// Define site pages
const pages = [
  {
    url: '/',
    changefreq: 'monthly',
    priority: '1.0',
    lastmod: new Date().toISOString().split('T')[0],
  },
  {
    url: '/about',
    changefreq: 'monthly',
    priority: '0.8',
    lastmod: new Date().toISOString().split('T')[0],
  },
  {
    url: '/dealers',
    changefreq: 'weekly',
    priority: '0.9',
    lastmod: new Date().toISOString().split('T')[0],
  },
  {
    url: '/watches',
    changefreq: 'daily',
    priority: '0.9',
    lastmod: new Date().toISOString().split('T')[0],
  },
  {
    url: '/how-it-works',
    changefreq: 'monthly',
    priority: '0.8',
    lastmod: new Date().toISOString().split('T')[0],
  },
  {
    url: '/contact',
    changefreq: 'monthly',
    priority: '0.7',
    lastmod: new Date().toISOString().split('T')[0],
  },
];

// Generate XML content
const generateSitemap = () => {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  // Add each page to the sitemap
  pages.forEach(page => {
    xml += '  <url>\n';
    xml += `    <loc>${BASE_URL}${page.url}</loc>\n`;
    xml += `    <lastmod>${page.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
    xml += `    <priority>${page.priority}</priority>\n`;
    xml += '  </url>\n';
  });

  xml += '</urlset>';
  return xml;
};

// Write the sitemap to the file
const sitemap = generateSitemap();
fs.writeFileSync(DIST_PATH, sitemap);

console.log(`Sitemap generated at ${DIST_PATH}`);
