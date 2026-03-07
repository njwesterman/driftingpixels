"use client";

import { useEffect, useRef } from "react";

interface Pixel {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  alpha: number;
  alphaDir: number;
  drift: number;
  driftSpeed: number;
}

const COLORS = ["#00f0ff", "#ff00aa", "#f0ff00", "#00ff88", "#8844ff", "#ff4400"];

function createPixel(width: number, height: number): Pixel {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    size: Math.floor(Math.random() * 4 + 2) * 2,
    speedX: (Math.random() - 0.5) * 0.4,
    speedY: -Math.random() * 0.3 - 0.1,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    alpha: Math.random() * 0.6 + 0.2,
    alphaDir: Math.random() > 0.5 ? 0.003 : -0.003,
    drift: Math.random() * Math.PI * 2,
    driftSpeed: Math.random() * 0.01 + 0.005,
  };
}

export default function PixelCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let pixels: Pixel[] = [];

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
    }

    function init() {
      resize();
      const count = Math.floor((canvas!.width * canvas!.height) / 5000);
      pixels = Array.from({ length: Math.min(count, 200) }, () =>
        createPixel(canvas!.width, canvas!.height)
      );
    }

    function draw() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

      for (const p of pixels) {
        // Update drift
        p.drift += p.driftSpeed;
        const driftOffset = Math.sin(p.drift) * 0.8;

        // Move
        p.x += p.speedX + driftOffset;
        p.y += p.speedY;

        // Pulse alpha
        p.alpha += p.alphaDir;
        if (p.alpha > 0.8 || p.alpha < 0.1) {
          p.alphaDir *= -1;
        }

        // Wrap around
        if (p.y < -p.size) p.y = canvas!.height + p.size;
        if (p.y > canvas!.height + p.size) p.y = -p.size;
        if (p.x < -p.size) p.x = canvas!.width + p.size;
        if (p.x > canvas!.width + p.size) p.x = -p.size;

        // Draw pixel (snapped to grid for that 8-bit feel)
        const sx = Math.round(p.x / 2) * 2;
        const sy = Math.round(p.y / 2) * 2;

        ctx!.globalAlpha = p.alpha;
        ctx!.fillStyle = p.color;
        ctx!.fillRect(sx, sy, p.size, p.size);

        // Glow effect
        ctx!.globalAlpha = p.alpha * 0.3;
        ctx!.fillRect(sx - 1, sy - 1, p.size + 2, p.size + 2);
      }

      ctx!.globalAlpha = 1;
      animId = requestAnimationFrame(draw);
    }

    init();
    draw();

    window.addEventListener("resize", init);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", init);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
