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
