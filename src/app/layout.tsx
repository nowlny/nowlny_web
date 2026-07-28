import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nowlny.com"),
  title: {
    default: "Nowlny — Food Delivery in Lebanon",
    template: "%s | Nowlny",
  },
  description:
    "Order from your favorite local restaurants in Lebanon and get it delivered fast. Download the Nowlny app on the App Store.",
  keywords: [
    "Nowlny",
    "food delivery",
    "Lebanon",
    "restaurants",
    "order food online",
  ],
  openGraph: {
    title: "Nowlny — Food Delivery in Lebanon",
    description:
      "Order from your favorite local restaurants in Lebanon and get it delivered fast.",
    type: "website",
    locale: "en_US",
    siteName: "Nowlny",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans relative">
        {children}
      </body>
    </html>
  );
}
