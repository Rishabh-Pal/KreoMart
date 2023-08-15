/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/assets/**",
      },
    ],
  },

  experimental: {
    serverActions: true,
  },
  images: {
    // domains: ['https://kreomart.onrender.com/api/products/'],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/assets/**",
      },
      {
        protocol: "https",
        hostname: "kreomart.onrender.com",
        pathname: "/media/**",
      },
    
    ],
  },
};

module.exports = nextConfig;
