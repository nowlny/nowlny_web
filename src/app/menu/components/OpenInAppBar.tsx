"use client";

import { useSyncExternalStore } from "react";

const APP_STORE_URL = "https://apps.apple.com/app/id6778863532";
const ANDROID_PACKAGE = "com.nowlnylb.customer";
const PLAY_STORE_URL = `https://play.google.com/store/apps/details?id=${ANDROID_PACKAGE}`;

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
    const deepLink = `customer/restaurant/${restaurantId}`;

    if (platform === "android") {
      // An intent URL lets the browser check for the package itself: the app
      // opens when installed, otherwise the fallback URL (Play) loads. No
      // timer guessing, and it works for builds that predate app links.
      window.location.href =
        `intent://${deepLink}#Intent;scheme=nowlny;package=${ANDROID_PACKAGE};` +
        `S.browser_fallback_url=${encodeURIComponent(PLAY_STORE_URL)};end`;
      return;
    }

    // iOS has no equivalent: try the custom scheme, and if the page is still
    // visible shortly after, the app is not installed — go to the App Store.
    window.location.href = `nowlny://${deepLink}`;
    window.setTimeout(() => {
      if (!document.hidden) window.location.href = APP_STORE_URL;
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
