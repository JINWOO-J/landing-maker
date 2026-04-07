"use client";

import { useState } from "react";

const CLIP_PATHS = [
  "polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)",
  "polygon(20px 0, 100% 0, 100% 100%, 0 100%, 0 20px)",
  "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)",
  "polygon(0 0, 100% 0, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
];

export default function GeometricFeatureCard({
  title, description, color, accentColor, index,
}: { title: string; description: string; color: string; accentColor: string; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative p-6 transition-all duration-300"
      style={{
        clipPath: CLIP_PATHS[index % 4],
        background: hovered ? `${color}10` : "rgba(255,255,255,0.03)",
        border: `1px solid ${hovered ? `${color}40` : "rgba(255,255,255,0.08)"}`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <svg width="36" height="36" viewBox="0 0 36 36" className="mb-4">
        <polygon points="18,2 34,28 2,28" fill="none" stroke={color} strokeWidth="1.5" opacity={hovered ? 0.8 : 0.4} />
        <circle cx="18" cy="20" r="6" fill={color} opacity={0.15} />
      </svg>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm leading-relaxed opacity-50">{description}</p>
    </div>
  );
}
