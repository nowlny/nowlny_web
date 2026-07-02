"use client";

import { useEffect, useRef, useState } from "react";

class Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    // Tighter horizontal spread
    this.vx = (Math.random() - 0.5) * 1.0;
    // Slower upward drift
    this.vy = (Math.random() - 1) * 2 - 0.5;
    // Shorter lifespan
    this.maxLife = Math.random() * 20 + 10;
    this.life = this.maxLife;
    // Smaller particle size
    this.size = Math.random() * 8 + 4;

    // Choose between deep red, vibrant orange, and bright yellow
    const colors = [
      "rgba(255, 50, 0, ",
      "rgba(255, 107, 0, ",
      "rgba(255, 200, 0, ",
    ];
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.life--;
    // Shrink slightly slower due to smaller size
    this.size = Math.max(0, this.size - 0.15);
  }

  draw(ctx: CanvasRenderingContext2D) {
    const opacity = this.life / this.maxLife;
    ctx.beginPath();

    // Create a radial gradient for each particle to look like a glowing ember
    const gradient = ctx.createRadialGradient(
      this.x,
      this.y,
      0,
      this.x,
      this.y,
      this.size,
    );
    gradient.addColorStop(0, `${this.color}${opacity})`);
    gradient.addColorStop(1, `${this.color}0)`);

    ctx.fillStyle = gradient;
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

export default function CustomCursor() {
  const [isDesktop, setIsDesktop] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -100, y: -100, isActive: false });
  const particles = useRef<Particle[]>([]);
  const requestRef = useRef<number>(null);

  useEffect(() => {
    if (window.matchMedia("(max-width: 768px)").matches) {
      setIsDesktop(false);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Handle Resize
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Handle Mouse
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      mouse.current.isActive = true;
    };

    const handleMouseLeave = () => {
      mouse.current.isActive = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Use "screen" or "lighter" blend mode for fire glow
      ctx.globalCompositeOperation = "lighter";

      // Spawn new particles if mouse is moving/active
      if (mouse.current.isActive) {
        // Spawn multiple particles per frame for a thick flame
        for (let i = 0; i < 3; i++) {
          particles.current.push(
            new Particle(mouse.current.x, mouse.current.y),
          );
        }
      }

      // Draw global spotlight glow behind the flame (smaller)
      if (mouse.current.isActive) {
        const glow = ctx.createRadialGradient(
          mouse.current.x,
          mouse.current.y,
          0,
          mouse.current.x,
          mouse.current.y,
          150,
        );
        glow.addColorStop(0, "rgba(255, 107, 0, 0.1)");
        glow.addColorStop(1, "rgba(255, 107, 0, 0)");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(mouse.current.x, mouse.current.y, 150, 0, Math.PI * 2);
        ctx.fill();
      }

      // Update and draw particles
      for (let i = 0; i < particles.current.length; i++) {
        const p = particles.current[i];
        p.update();
        p.draw(ctx);

        // Remove dead particles
        if (p.life <= 0 || p.size <= 0) {
          particles.current.splice(i, 1);
          i--;
        }
      }

      // Optional: Draw a tiny core white dot for precision
      if (mouse.current.isActive) {
        ctx.globalCompositeOperation = "source-over";
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(mouse.current.x, mouse.current.y, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      requestRef.current = requestAnimationFrame(render);
    };

    requestRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  if (!isDesktop) return null;

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed top-0 left-0 w-full h-full z-[9999]"
    />
  );
}
