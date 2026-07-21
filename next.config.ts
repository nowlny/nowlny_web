import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the Turbopack workspace root to this project. A stray pnpm-lock.yaml in
  // the home directory otherwise makes Next infer ~ as the root and watch it all.
  turbopack: {
    root: __dirname,
  },
  // Hide the dev-only route indicator badge (bottom-left "rendering" status).
  devIndicators: false,
};

export default nextConfig;
