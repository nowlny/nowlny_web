"use client";
import { useEffect, useRef, useState } from "react";

export default function ScrollReveal({ 
  children, 
  className = "", 
  delay = 0, 
  direction = "up" 
}: { 
  children: React.ReactNode, 
  className?: string, 
  delay?: number, 
  direction?: "up" | "left" | "right" | "none" 
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    if (direction === "up") return "translateY(50px)";
    if (direction === "left") return "translateX(-50px)";
    if (direction === "right") return "translateX(50px)";
    return "none";
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out will-change-[opacity,transform] ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate(0)" : getTransform(),
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
}
