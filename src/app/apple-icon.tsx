import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  const s = 180 / 32; // scale factor

  const pixels: { x: number; y: number; color: string; opacity?: number }[] = [
    // Cyan cluster
    { x: 4, y: 4, color: "#00f0ff" },
    { x: 8, y: 4, color: "#00f0ff" },
    { x: 4, y: 8, color: "#00f0ff" },
    { x: 8, y: 8, color: "#00f0ff", opacity: 0.7 },
    { x: 4, y: 12, color: "#00f0ff" },
    { x: 8, y: 12, color: "#00f0ff" },
    { x: 4, y: 16, color: "#00f0ff" },

    // Magenta cluster
    { x: 16, y: 4, color: "#ff00aa" },
    { x: 20, y: 4, color: "#ff00aa" },
    { x: 24, y: 4, color: "#ff00aa", opacity: 0.7 },
    { x: 16, y: 8, color: "#ff00aa" },
    { x: 24, y: 8, color: "#ff00aa" },
    { x: 16, y: 12, color: "#ff00aa" },
    { x: 20, y: 12, color: "#ff00aa" },
    { x: 16, y: 16, color: "#ff00aa" },

    // Drifting scattered pixels
    { x: 12, y: 20, color: "#f0ff00", opacity: 0.9 },
    { x: 20, y: 20, color: "#00ff88", opacity: 0.8 },
    { x: 8, y: 24, color: "#00f0ff", opacity: 0.5 },
    { x: 16, y: 24, color: "#ff00aa", opacity: 0.6 },
    { x: 24, y: 24, color: "#f0ff00", opacity: 0.4 },
    { x: 4, y: 28, color: "#00ff88", opacity: 0.3 },
    { x: 20, y: 28, color: "#00f0ff", opacity: 0.35 },
    { x: 28, y: 16, color: "#f0ff00", opacity: 0.5 },
    { x: 0, y: 20, color: "#ff00aa", opacity: 0.4 },
    { x: 28, y: 28, color: "#ff00aa", opacity: 0.25 },
  ];

  return new ImageResponse(
    (
      <div
        style={{
          width: "180px",
          height: "180px",
          background: "#0a0a0f",
          display: "flex",
          position: "relative",
          borderRadius: "36px",
        }}
      >
        {pixels.map((p, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${Math.round(p.x * s)}px`,
              top: `${Math.round(p.y * s)}px`,
              width: `${Math.round(4 * s)}px`,
              height: `${Math.round(4 * s)}px`,
              background: p.color,
              opacity: p.opacity ?? 1,
            }}
          />
        ))}
      </div>
    ),
    { ...size }
  );
}
