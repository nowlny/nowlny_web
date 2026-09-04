"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { isOptimizable } from "../lib/imageHosts";

interface ImageLightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export default function ImageLightbox({ src, alt, onClose }: ImageLightboxProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm animate-fade-in-fast flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={alt}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 text-white text-xl leading-none flex items-center justify-center hover:bg-white/20 transition-colors"
      >
        ×
      </button>
      <div className="relative w-full h-full max-w-3xl max-h-[85vh] animate-sheet-in">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          className="object-contain"
          unoptimized={!isOptimizable(src)}
        />
      </div>
    </div>,
    document.body
  );
}
