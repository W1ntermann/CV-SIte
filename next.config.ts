import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "shrug-person-78902957.figma.site" },
      { protocol: "https", hostname: "motionsites.ai" },
      { protocol: "https", hostname: "images.higgs.ai" },
    ],
  },
};
export default nextConfig;