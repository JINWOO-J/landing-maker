"use client";

import { useState } from "react";

export default function TopographyFeatureCard({
  title, description, color, accentColor, index,
}: { title: string; description: string; color: string; accentColor: string; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative rounded-2xl p-6 transition-all duration-300 overflow-hidden"
      style={{
        background: hovered ? `${color}08` : "rgba(255,255,255,0.02)",
        border: `1px solid ${hovered ? `${color}30` : "rgba(255,255,255,0.06)"}`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Mini contour icon */}
      <svg width="40" height="40" viewBox="0 0 40 40" className="mb-4" style={{ opacity: hovered ? 0.8 : 0.4 }}>
        <ellipse cx="20" cy="20" rx="18" ry="14" fill="none" stroke={color} strokeWidth="1" />
        <ellipse cx="20" cy="20" rx="12" ry="9" fill="none" stroke={color} strokeWidth="1" />
        <ellipse cx="20" cy="20" rx="5" ry="4" fill={color} opacity="0.2" />
      </svg>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm leading-relaxed opacity-50">{description}</p>
    </div>
  );
}
