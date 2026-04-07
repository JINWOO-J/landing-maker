"use client";

import { useState } from "react";

export default function IsometricFeatureCard({
  title,
  description,
  color,
  accentColor,
  index,
}: {
  title: string;
  description: string;
  color: string;
  accentColor: string;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative rounded-xl p-6 transition-all duration-300"
      style={{
        background: hovered ? `${color}10` : "rgba(255,255,255,0.03)",
        border: `1px solid ${hovered ? `${color}30` : "rgba(255,255,255,0.06)"}`,
        transform: hovered ? "translateY(-4px)" : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Mini isometric cube icon */}
      <svg width="40" height="40" viewBox="0 0 40 40" className="mb-4">
        <polygon points="20,4 36,13 36,27 20,36 4,27 4,13" fill="none" stroke={color} strokeWidth="1.5" opacity={hovered ? 1 : 0.5} />
        <polygon points="20,4 36,13 20,22 4,13" fill={color} opacity={0.15} />
        <polygon points="4,13 20,22 20,36 4,27" fill={color} opacity={0.08} />
      </svg>
      <h3 className="text-lg font-bold mb-2" style={{ color: hovered ? color : "inherit" }}>{title}</h3>
      <p className="text-sm leading-relaxed opacity-50">{description}</p>
    </div>
  );
}
