import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://ropa-backend-production-aaf0.up.railway.app/:path*',
      },
    ];
  },
};

export default nextConfig;