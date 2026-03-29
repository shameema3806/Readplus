import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
  },
  experimental: {
    // mdxRs: true,  // Enable if using @next/mdx directly
  },
};

export default nextConfig;
