"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MagneticButton from "./MagneticButton";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg-base/80 backdrop-blur-xl border-b border-border-subtle transition-all duration-300">
      <div className="container mx-auto px-6 max-w-7xl h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group" onClick={closeMenu}>
          <Image
            src="/logotransparentDark.png"
            alt="Nowlny Logo"
            width={140}
            height={140}
            className="group-hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className={`font-medium text-sm tracking-wide transition-colors duration-300 relative group ${
              pathname === "/" ? "text-white" : "text-text-muted hover:text-white"
            }`}
          >
            Home
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${pathname === "/" ? "w-full" : "w-0 group-hover:w-full"}`}></span>
          </Link>
          <Link
            href="/about"
            className={`font-medium text-sm tracking-wide transition-colors duration-300 relative group ${
              pathname === "/about" ? "text-white" : "text-text-muted hover:text-white"
            }`}
          >
            About
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${pathname === "/about" ? "w-full" : "w-0 group-hover:w-full"}`}></span>
          </Link>
          <Link
            href="/contact"
            className={`font-medium text-sm tracking-wide transition-colors duration-300 relative group ${
              pathname === "/contact" ? "text-white" : "text-text-muted hover:text-white"
            }`}
          >
            Contact
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${pathname === "/contact" ? "w-full" : "w-0 group-hover:w-full"}`}></span>
          </Link>
          
          <MagneticButton
            href="https://apps.apple.com/lb/app/nowlny/id6778863532"
            className="bg-[#FF6B00] hover:bg-[#E65C00] text-white px-6 py-2.5 rounded-full text-sm font-semibold ml-4 shadow-lg shadow-primary/20"
          >
            Download App
          </MagneticButton>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full bg-bg-surface border-b border-border-subtle transition-all duration-300 overflow-hidden shadow-2xl ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-4 gap-4">
          <Link
            href="/"
            onClick={closeMenu}
            className={`text-lg font-medium p-2 rounded-lg transition-colors ${
              pathname === "/" ? "bg-bg-glass text-primary" : "text-text-muted hover:text-white hover:bg-bg-glass"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={closeMenu}
            className={`text-lg font-medium p-2 rounded-lg transition-colors ${
              pathname === "/about" ? "bg-bg-glass text-primary" : "text-text-muted hover:text-white hover:bg-bg-glass"
            }`}
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={closeMenu}
            className={`text-lg font-medium p-2 rounded-lg transition-colors ${
              pathname === "/contact" ? "bg-bg-glass text-primary" : "text-text-muted hover:text-white hover:bg-bg-glass"
            }`}
          >
            Contact
          </Link>
          <Link
            href="https://apps.apple.com/lb/app/nowlny/id6778863532"
            onClick={closeMenu}
            className="btn-primary mt-2 text-center shadow-lg shadow-primary/20"
          >
            Download App
          </Link>
        </div>
      </div>
    </header>
  );
}
