import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */ 
 images: {
    domains: ['localhost'], // 👈 autorise les images depuis localhost
  },
};

export default nextConfig;
