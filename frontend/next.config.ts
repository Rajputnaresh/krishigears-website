import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**.imimg.com' },
      { protocol: 'https', hostname: 'bushraimpex.com' },
      { protocol: 'https', hostname: '**.bushraimpex.com' },
      { protocol: 'https', hostname: 'reallyagritech.com' },
      { protocol: 'https', hostname: '**.reallyagritech.com' },
      { protocol: 'https', hostname: 'farmingtools.in' },
      { protocol: 'https', hostname: '**.farmingtools.in' },
      { protocol: 'https', hostname: 'images.pexels.com' },
      { protocol: 'https', hostname: 'cdn.shopify.com' },
    ],
  },
  async redirects() {
    const blogCloneRedirects: { source: string; destination: string; permanent: boolean }[] = [];
    for (let i = 42; i <= 60; i++) {
      blogCloneRedirects.push({
        source: `/blog/brush-cutter-harvesting-trouble-${i}-guide`,
        destination: '/blog/brush-cutter-harvesting-trouble-maintenance-guide',
        permanent: true,
      });
    }
    for (let i = 61; i <= 80; i++) {
      blogCloneRedirects.push({
        source: `/blog/earth-auger-drilling-troubleshooting-${i}`,
        destination: '/blog/earth-auger-drilling-troubleshooting-guide',
        permanent: true,
      });
    }
    for (let i = 81; i <= 100; i++) {
      blogCloneRedirects.push({
        source: `/blog/agri-machinery-dealer-operations-${i}-profitability`,
        destination: '/blog/agri-machinery-dealership-operations-profitability-guide',
        permanent: true,
      });
    }

    return [
      ...blogCloneRedirects,
      { source: '/dealers', destination: '/dealer-network', permanent: true },
      {
        source: '/dealer/jammu-%26-kashmir',
        destination: '/dealer/jammu-and-kashmir',
        permanent: true,
      },
      {
        source: '/dealer/jammu-&-kashmir',
        destination: '/dealer/jammu-and-kashmir',
        permanent: true,
      },
      {
        source: '/seo/power-weeder-spare-parts-supplier-india',
        destination: '/power-weeder-spare-parts-in-india',
        permanent: true,
      },
      {
        source: '/products/category/power-tillers',
        destination: '/products/category/power-weeders',
        permanent: true,
      },
      {
        source: '/seo/power-weeders-supplier-:slug',
        destination: '/power-weeders-in-:slug',
        permanent: true,
      },
      {
        source: '/seo/power-weeder-spare-parts-supplier-:slug',
        destination: '/power-weeder-spare-parts-in-:slug',
        permanent: true,
      },
      { source: '/products/rly-mitsuyama-my-573d', destination: '/products/kg-my-573d', permanent: true },
      { source: '/products/rly-mitsuyama-my-585d', destination: '/products/kg-my-585d', permanent: true },
      { source: '/products/bi-x1-1000d', destination: '/products/kg-1000d-kibao', permanent: true },
      { source: '/products/bi-x1p-1050d', destination: '/products/kg-1050d-kibao', permanent: true },
      { source: '/products/bi-x1-1150d', destination: '/products/kg-1150d-manual', permanent: true },
      { source: '/products/bi-x1p-1150e', destination: '/products/kg-1150d-electric', permanent: true },
      { source: '/products/bi-x1-188d', destination: '/products/kg-188d-recoil', permanent: true },
      { source: '/products/bi-x1p-188e', destination: '/products/kg-188d-electric', permanent: true },
      { source: '/products/bi-x1-750p', destination: '/products/kg-750p-diesel', permanent: true },
      { source: '/products/bi-x1-186br', destination: '/products/kg-186-backrotary', permanent: true },
      { source: '/products/bi-x1-1350-4wd', destination: '/products/kg-1350-4wd', permanent: true },
      { source: '/products/bi-x1-mw-70', destination: '/products/kg-mw-70-mini', permanent: true },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.krishigears.com',
          },
        ],
        destination: 'https://krishigears.com/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'krishigears.in',
          },
        ],
        destination: 'https://krishigears.com/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.krishigears.in',
          },
        ],
        destination: 'https://krishigears.com/:path*',
        permanent: true,
      },
      {
        source: '/blog/smam-portal-registration-guide-agricultural-machinery-subsidy',
        destination: '/blog/smam-subsidy-portal-registration-power-weeder-guide',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
