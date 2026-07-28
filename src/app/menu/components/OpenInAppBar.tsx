"use client";

import { useSyncExternalStore } from "react";

const APP_STORE_URL = "https://apps.apple.com/app/id6778863532";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.nowlnylb.customer";

const emptySubscribe = () => () => {};

function getPlatform(): "ios" | "android" | null {
  const ua = navigator.userAgent;
  if (/iphone|ipad|ipod/i.test(ua)) return "ios";
  if (/android/i.test(ua)) return "android";
  return null;
}

interface OpenInAppBarProps {
  restaurantId: string;
  label: string;
}

export default function OpenInAppBar({ restaurantId, label }: OpenInAppBarProps) {
  // Client-only UA sniff; the server snapshot renders nothing.
  const platform = useSyncExternalStore(emptySubscribe, getPlatform, () => null);

  if (!platform) return null;

  const openApp = () => {
    const storeUrl = platform === "ios" ? APP_STORE_URL : PLAY_STORE_URL;
    // Try the custom scheme first; if the app isn't installed the page stays
    // visible and we fall through to the store after a short delay.
    window.location.href = `nowlny://customer/restaurant/${restaurantId}`;
    window.setTimeout(() => {
      if (!document.hidden) window.location.href = storeUrl;
    }, 1600);
  };

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 p-4 pb-[max(1rem,env(safe-area-inset-bottom))] bg-gradient-to-t from-bg-base via-bg-base/90 to-transparent pointer-events-none">
      <button
        type="button"
        onClick={openApp}
        className="btn-primary w-full max-w-md mx-auto block pointer-events-auto"
      >
        {label}
      </button>
    </div>
  );
}
