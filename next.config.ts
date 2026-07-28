import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the Turbopack workspace root to this project. A stray pnpm-lock.yaml in
  // the home directory otherwise makes Next infer ~ as the root and watch it all.
  turbopack: {
    root: __dirname,
  },
  // Hide the dev-only route indicator badge (bottom-left "rendering" status).
  devIndicators: false,
  images: {
    remotePatterns: [{ protocol: "https", hostname: "res.cloudinary.com" }],
  },
  async headers() {
    return [
      {
        // Extensionless file: Apple requires it served as JSON for universal links.
        source: "/.well-known/apple-app-site-association",
        headers: [
          { key: "Content-Type", value: "application/json" },
          { key: "Cache-Control", value: "public, max-age=300" },
        ],
      },
    ];
  },
};

export default nextConfig;
