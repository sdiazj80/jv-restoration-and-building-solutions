import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Inline critical CSS to eliminate render-blocking
  experimental: {
    optimizeCss: true,
  },
  // Use modern JS targets, drop legacy polyfills
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Aggressive image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 365,
  },
  poweredByHeader: false,
};

export default nextConfig;
