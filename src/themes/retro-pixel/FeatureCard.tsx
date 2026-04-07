"use client";

import { useState, useMemo } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  color: string;
  accentColor: string;
  index: number;
}

/**
 * Build a pixel-art RPG icon using the CSS box-shadow technique.
 * index % 4 maps to: sword, heart, gem, key.
 */
function usePixelIcon(index: number, accent: string) {
  return useMemo(() => {
    const PX = 4;
    const grids: Record<string, string[]> = {
      sword: [
        "......1.",
        ".....11.",
        "....110.",
        "...110..",
        "..110...",
        ".2100...",
        ".0200...",
        "..02....",
      ],
      heart: [
        ".00.00..",
        "0000000.",
        "00000000",
        "00000000",
        ".000000.",
        "..0000..",
        "...00...",
        "........",
      ],
      gem: [
        "...11...",
        "..1001..",
        ".100001.",
        "10000001",
        ".100001.",
        "..1001..",
        "...11...",
        "........",
      ],
      key: [
        "..000...",
        ".0..0...",
        ".0..0...",
        "..000...",
        "...0....",
        "...00...",
        "...0....",
        "...00...",
      ],
    };

    const names = ["sword", "heart", "gem", "key"];
    const grid = grids[names[index % 4]];
    const shadows: string[] = [];
    const colors: Record<string, string> = { "0": "#fee761", "1": accent, "2": "#b86f50" };

    for (let y = 0; y < grid.length; y++) {
      for (let x = 0; x < grid[y].length; x++) {
        const ch = grid[y][x];
        if (colors[ch]) {
          shadows.push(`${x * PX}px ${y * PX}px 0 0 ${colors[ch]}`);
        }
      }
    }
    return shadows.join(",");
  }, [index, accent]);
}

export default function FeatureCard({ title, description, color, accentColor, index }: FeatureCardProps) {
  const [hovered, setHovered] = useState(false);
  const iconShadow = usePixelIcon(index, accentColor);

  return (
    <div
      className="relative p-6 transition-all duration-150"
      style={{
        border: `4px solid ${hovered ? "#63c74d" : "rgba(228,166,114,0.3)"}`,
        borderRadius: 0,
        backgroundColor: "rgba(228,166,114,0.06)",
        boxShadow: hovered
          ? `8px 8px 0 0 rgba(99,199,77,0.3), inset 0 2px 8px rgba(0,0,0,0.3)`
          : `8px 8px 0 0 rgba(228,166,114,0.1)`,
        transform: hovered ? "translate(-2px, -2px)" : "translate(0, 0)",
        imageRendering: "pixelated" as const,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Pixel art icon */}
      <div
        className="relative mb-5 flex items-center justify-center"
        style={{
          height: 56,
          border: "2px solid rgba(228,166,114,0.15)",
          borderRadius: 0,
          backgroundColor: "rgba(228,166,114,0.06)",
        }}
      >
        <div style={{ width: 4, height: 4, boxShadow: iconShadow }} />
      </div>

      <h3
        className="text-lg font-bold mb-2"
        style={{ color: "#fee761", fontFamily: "monospace", textShadow: "2px 2px 0 rgba(0,0,0,0.5)" }}
      >
        {title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: "#a0a08b", fontFamily: "monospace" }}>
        {description}
      </p>

      {/* Corner pixel marks */}
      {(["top-0 left-0", "top-0 right-0", "bottom-0 left-0", "bottom-0 right-0"] as const).map((pos) => {
        const isTop = pos.includes("top");
        const isLeft = pos.includes("left");
        return (
          <div
            key={pos}
            className={`absolute ${pos} pointer-events-none`}
            style={{
              width: 8,
              height: 8,
              margin: -1,
              borderRadius: 0,
              borderTop: isTop ? `2px solid ${hovered ? "#63c74d" : color}` : undefined,
              borderBottom: !isTop ? `2px solid ${hovered ? "#63c74d" : color}` : undefined,
              borderLeft: isLeft ? `2px solid ${hovered ? "#63c74d" : color}` : undefined,
              borderRight: !isLeft ? `2px solid ${hovered ? "#63c74d" : color}` : undefined,
            }}
          />
        );
      })}
    </div>
  );
}
