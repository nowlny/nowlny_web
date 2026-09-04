// Menu imagery is hosted by each restaurant's own POS/menu provider, so the
// set of hosts grows every time a tenant onboards. These are the hosts seen
// across the live catalogue; next.config.ts turns them into the next/image
// remotePatterns allowlist so their images get resized and re-encoded.
//
// A host that is missing here must NOT render blank: isOptimizable() returns
// false for it and the caller passes `unoptimized` so the browser loads the
// original URL directly instead of the optimizer, which would answer 400.
export const MENU_IMAGE_HOSTS = [
  "res.cloudinary.com",
  "s3.eu-central-1.amazonaws.com",
  "rest.thrubits.com",
  "menu.wecodelb.com",
  "gnvqfcigryjekwfeusmh.supabase.co",
  "mymenu.site",
  "storec.app",
  "cloudybites.moviyum.com",
  "magnifico-restu.vercel.app",
  "menu.tastybees.com",
  // Instagram-sourced logos; the CDN shard varies per region.
  "**.fbcdn.net",
];

export function isOptimizable(src: string): boolean {
  let hostname: string;
  try {
    const url = new URL(src);
    if (url.protocol !== "https:") return false;
    hostname = url.hostname;
  } catch {
    // Relative path served from our own origin — always optimizable.
    return true;
  }

  return MENU_IMAGE_HOSTS.some((pattern) =>
    pattern.startsWith("**.")
      ? hostname.endsWith(pattern.slice(2))
      : hostname === pattern
  );
}
