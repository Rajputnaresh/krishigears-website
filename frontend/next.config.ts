import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
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
    return [
      {
        source: '/products/category/power-tillers',
        destination: '/products/category/power-weeders',
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
};

export default nextConfig;
