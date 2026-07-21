import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://nowlny.com";
  return [
    { url: base, priority: 1 },
    { url: `${base}/about`, priority: 0.8 },
    { url: `${base}/contact`, priority: 0.8 },
    { url: `${base}/faq`, priority: 0.6 },
    { url: `${base}/privacy`, priority: 0.3 },
    { url: `${base}/terms`, priority: 0.3 },
    { url: `${base}/delete-account`, priority: 0.3 },
  ];
}
