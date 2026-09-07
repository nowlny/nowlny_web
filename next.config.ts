import type { NextConfig } from "next";
import { MENU_IMAGE_HOSTS } from "./src/app/menu/lib/imageHosts";

const nextConfig: NextConfig = {
  // Pin the Turbopack workspace root to this project. A stray pnpm-lock.yaml in
  // the home directory otherwise makes Next infer ~ as the root and watch it all.
  turbopack: {
    root: __dirname,
  },
  // Hide the dev-only route indicator badge (bottom-left "rendering" status).
  devIndicators: false,
  // Restaurant logos and menu-item photos are served by each tenant's own
  // provider. Any host missing from this list falls back to `unoptimized` in
  // the menu components rather than rendering blank — see lib/imageHosts.ts.
  images: {
    remotePatterns: MENU_IMAGE_HOSTS.map((hostname) => ({
      protocol: "https" as const,
      hostname,
    })),
  },
  // Canonical host is www. This redirect lives here — not in the hosting
  // provider's domain settings — so the `.well-known` verification files can
  // be excluded: neither Apple nor Android follows a redirect when fetching
  // them, and an unverified host means every link opens the browser.
  async redirects() {
    return [
      {
        source: "/:path((?!\\.well-known(?:/|$)).*)",
        has: [{ type: "host", value: "nowlny.com" }],
        destination: "https://www.nowlny.com/:path",
        permanent: true,
      },
    ];
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
