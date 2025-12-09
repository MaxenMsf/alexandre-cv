import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimisations pour réduire la consommation énergétique
  poweredByHeader: false, // Retire le header X-Powered-By
  compress: true, // Active la compression gzip
  
  // Optimisations des images
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000, // Cache d'1 an
  },
  
  // Optimisations de build
  swcMinify: true, // Minification optimisée
};

export default nextConfig;
