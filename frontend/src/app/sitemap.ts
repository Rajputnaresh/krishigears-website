import { MetadataRoute } from 'next';
import locationsData from '@/data/locations.json';
import { BLOG_POSTS_ARRAY } from '@/data/blogPosts';
import { PRODUCTS, CATEGORIES as ALL_CATEGORIES } from '@/data/catalog';

const SITE_URL = 'https://krishigears.com';

const CATEGORIES = ['power-weeders', 'power-weeder-spare-parts', 'brush-cutters', 'earth-augers'];

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapUrls: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/dealer-network`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/become-a-dealer`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/bulk-order`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/products`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/locations`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/warranty-and-support`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // Add individual product URLs
  PRODUCTS.forEach((prod) => {
    sitemapUrls.push({
      url: `${SITE_URL}/products/${prod.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    });
  });

  // Add category URLs
  ALL_CATEGORIES.forEach((cat) => {
    sitemapUrls.push({
      url: `${SITE_URL}/products/category/${cat.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    });
  });

  // Add State Dealer Hub URLs
  const STATES = [
    'andhra-pradesh', 'assam', 'bihar', 'chhattisgarh', 'goa', 'gujarat',
    'haryana', 'himachal-pradesh', 'jharkhand', 'karnataka', 'kerala',
    'madhya-pradesh', 'maharashtra', 'odisha', 'punjab', 'rajasthan',
    'tamil-nadu', 'telangana', 'uttar-pradesh', 'uttarakhand', 'west-bengal'
  ];
  STATES.forEach((st) => {
    sitemapUrls.push({
      url: `${SITE_URL}/dealer/${st}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    });
  });

  // Add all individual blog post URLs
  BLOG_POSTS_ARRAY.forEach((p) => {
    sitemapUrls.push({
      url: `${SITE_URL}/blog/${p.slug}`,
      lastModified: new Date(p.created_at),
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  });

  // Dynamically generate all programmatic SEO URLs
  Object.keys(locationsData).forEach((locationName) => {
    const locationSlug = locationName
      .toLowerCase()
      .replace(/&amp;/g, 'and')
      .replace(/&/g, 'and')
      .replace(/ /g, '-')
      .replace(/[()]/g, '')
      .replace(/-+/g, '-');
    
    CATEGORIES.forEach((categorySlug) => {
      sitemapUrls.push({
        url: `${SITE_URL}/${categorySlug}-in-${locationSlug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7, // 0.7 for dynamic geo-pages
      });
    });
  });

  return sitemapUrls;
}
