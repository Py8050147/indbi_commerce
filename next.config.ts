import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
        // hostname: 'coderspankaj.s3.eu-north-1.amazonaws.com',
        // Optionally add port/path restrictions:
        // port: '',
        // pathname: '/images/**',
      }
    ]
  },
  // For modern Next.js video handling (if needed):
  // experimental: {
  //   turbo: false,
  //   webVitalsAttribution: ['CLS', 'LCP']
  // }
};

export default nextConfig;
