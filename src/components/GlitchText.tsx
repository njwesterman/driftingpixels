"use client";

import { useEffect, useState } from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "span" | "p";
  scramble?: boolean;
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*!<>[]{}";

export default function GlitchText({
  text,
  className = "",
  as: Tag = "h1",
  scramble = true,
}: GlitchTextProps) {
  const [display, setDisplay] = useState(scramble ? "" : text);
  const [revealed, setRevealed] = useState(!scramble);

  useEffect(() => {
    if (!scramble) return;

    let frame = 0;
    const totalFrames = text.length * 3;

    const interval = setInterval(() => {
      frame++;
      const revealedCount = Math.floor(frame / 3);
      let result = "";

      for (let i = 0; i < text.length; i++) {
        if (text[i] === " ") {
          result += " ";
        } else if (i < revealedCount) {
          result += text[i];
        } else {
          result += CHARS[Math.floor(Math.random() * CHARS.length)];
        }
      }

      setDisplay(result);

      if (frame >= totalFrames) {
        setDisplay(text);
        setRevealed(true);
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [text, scramble]);

  return (
    <Tag
      className={`glitch-text ${className} ${revealed ? "" : "opacity-90"}`}
      data-text={text}
    >
      {display}
    </Tag>
  );
}
