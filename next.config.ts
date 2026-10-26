import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  async redirects() {
    return [
      {
        source: "/projects/snapquote",
        destination: "/projects/quotevan",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
