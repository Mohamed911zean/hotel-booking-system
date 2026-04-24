import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow local images from /public by default
    // Add external domains here if needed in the future
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
