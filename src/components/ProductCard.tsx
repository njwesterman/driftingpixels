"use client";

import { useEffect, useRef, useState } from "react";

interface ProductCardProps {
  name: string;
  url: string;
  description: string;
  color: string;
  index: number;
}

export default function ProductCard({ name, url, description, color, index }: ProductCardProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      ref={ref}
      href={`https://${url}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        neon-border group block p-6 bg-bg-panel/80 backdrop-blur-sm
        transition-all duration-500 hover:scale-[1.02]
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
      style={{
        transitionDelay: `${index * 150}ms`,
        borderColor: `${color}33`,
      }}
    >
      <div className="flex items-start justify-between mb-4">
        <h3
          className="font-pixel text-sm tracking-wider"
          style={{ color }}
        >
          {name}
        </h3>
        <span className="text-text-dim text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity">
          [{url}]
        </span>
      </div>
      <p className="text-text-dim text-sm leading-relaxed font-mono">
        {description}
      </p>
      <div
        className="mt-4 h-px w-0 group-hover:w-full transition-all duration-700"
        style={{ backgroundColor: color }}
      />
    </a>
  );
}
