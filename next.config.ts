// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//     reactStrictMode: true,
//   images: {
//     domains: ["firebasestorage.googleapis.com"],
//   },
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Important pour Render
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
      },
      {
        protocol: 'https',
        hostname: 'dmtc-sn.com',
      },
      {
        protocol: 'https',
        hostname: 'www.dmtc-sn.com',
      }
    ],
    unoptimized: true, // Si vous avez des problèmes avec l'optimisation d'images
  },
  env: {
    SITE_URL: process.env.NODE_ENV === 'production' 
      ? 'https://dmtc-sn.com' 
      : 'http://localhost:10000',
  }
}

module.exports = nextConfig
