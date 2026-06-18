"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" className="logo">
          <Image
            src="/logotransparentDark.png"
            alt="Nowlny Logo"
            width={150}
            height={150}
          />
        </Link>

        <input
          type="checkbox"
          id="menu-toggle"
          className="menu-toggle-checkbox"
        />
        <label
          htmlFor="menu-toggle"
          className="menu-toggle-label"
          aria-label="Toggle menu"
        >
          <span className="burger-icon">☰</span>
          <span className="close-icon">✕</span>
        </label>

        <nav className="nav">
          <Link href="/" id="nav-home" className={`nav-link ${pathname === "/" ? "active" : ""}`}>
            Home
          </Link>
          <Link href="/about" id="nav-about" className={`nav-link ${pathname === "/about" ? "active" : ""}`}>
            About
          </Link>
          <Link href="/contact" id="nav-contact" className={`nav-link ${pathname === "/contact" ? "active" : ""}`}>
            Contact Us
          </Link>
          <Link href="/privacy" id="nav-privacy" className={`nav-link ${pathname === "/privacy" ? "active" : ""}`}>
            Privacy
          </Link>
          <Link
            href="https://apps.apple.com/lb/app/nowlny/id6778863532"
            className="btn btn-primary"
            style={{ padding: "0.5rem 1.5rem", fontSize: "0.875rem" }}
          >
            Download App
          </Link>
        </nav>
      </div>
    </header>
  );
}
