"use client";

import { useState } from "react";

export default function CircuitFeatureCard({
  title, description, color, accentColor, index,
}: { title: string; description: string; color: string; accentColor: string; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative rounded-lg p-5 transition-all duration-200"
      style={{
        background: hovered ? `${color}08` : "rgba(255,255,255,0.01)",
        border: `1px solid ${hovered ? `${color}40` : "rgba(16,185,129,0.08)"}`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* IC chip icon */}
      <svg width="36" height="36" viewBox="0 0 36 36" className="mb-4">
        <rect x="8" y="8" width="20" height="20" rx="2" fill="none" stroke={color} strokeWidth="1" opacity={hovered ? 0.8 : 0.3} />
        {[14,22].map(p => (
          <g key={p}>
            <line x1={p} y1="4" x2={p} y2="8" stroke={color} strokeWidth="1.5" opacity={hovered ? 0.6 : 0.2} />
            <line x1={p} y1="28" x2={p} y2="32" stroke={color} strokeWidth="1.5" opacity={hovered ? 0.6 : 0.2} />
            <line x1="4" y1={p} x2="8" y2={p} stroke={color} strokeWidth="1.5" opacity={hovered ? 0.6 : 0.2} />
            <line x1="28" y1={p} x2="32" y2={p} stroke={color} strokeWidth="1.5" opacity={hovered ? 0.6 : 0.2} />
          </g>
        ))}
        <circle cx="18" cy="18" r="3" fill={color} opacity={hovered ? 0.3 : 0.1} />
      </svg>
      <h3 className="text-sm font-bold mb-2" style={{ color: hovered ? color : "inherit" }}>{title}</h3>
      <p className="text-xs leading-relaxed opacity-40">{description}</p>
    </div>
  );
}
