"use client";

import { useEffect, useState, useRef } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*!<>[]{}";
const COLORS = ["#00f0ff", "#ff00aa", "#f0ff00", "#00ff88", "#8844ff"];

interface LetterState {
  char: string;
  y: number;
  x: number;
  rotation: number;
  color: string | null;
  glitching: boolean;
}

export default function DriftingWord({
  word,
  className = "",
}: {
  word: string;
  className?: string;
}) {
  const [letters, setLetters] = useState<LetterState[]>(
    word.split("").map((char) => ({
      char,
      y: 0,
      x: 0,
      rotation: 0,
      color: null,
      glitching: false,
    }))
  );

  const frameRef = useRef(0);
  const originalChars = useRef(word.split(""));

  useEffect(() => {
    let animId: number;

    function animate() {
      frameRef.current++;
      const t = frameRef.current;

      setLetters((prev) =>
        prev.map((letter, i) => {
          // Each letter drifts on its own sine wave
          const driftY = Math.sin(t * 0.02 + i * 1.2) * 6 + Math.sin(t * 0.008 + i * 0.7) * 3;
          const driftX = Math.cos(t * 0.015 + i * 0.9) * 3;
          const rot = Math.sin(t * 0.01 + i * 1.5) * 2;

          // Random glitch: ~1% chance per frame per letter
          const shouldGlitch = Math.random() < 0.008;
          const isGlitching = shouldGlitch || (letter.glitching && Math.random() < 0.7);

          return {
            char: isGlitching
              ? CHARS[Math.floor(Math.random() * CHARS.length)]
              : originalChars.current[i],
            y: driftY,
            x: driftX,
            rotation: rot,
            color: isGlitching ? COLORS[Math.floor(Math.random() * COLORS.length)] : null,
            glitching: isGlitching,
          };
        })
      );

      animId = requestAnimationFrame(animate);
    }

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <span className={`inline-flex ${className}`} aria-label={word}>
      {letters.map((letter, i) => (
        <span
          key={i}
          className="inline-block transition-[text-shadow] duration-150"
          style={{
            transform: `translate(${letter.x}px, ${letter.y}px) rotate(${letter.rotation}deg)`,
            color: letter.color ?? undefined,
            textShadow: letter.glitching
              ? `0 0 8px ${letter.color}, 0 0 20px ${letter.color}`
              : undefined,
            willChange: "transform",
          }}
        >
          {letter.char}
        </span>
      ))}
    </span>
  );
}
