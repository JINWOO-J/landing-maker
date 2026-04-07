"use client";

import { useState } from "react";

export default function ParticlesFeatureCard({
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
      className="relative rounded-2xl p-6 transition-all duration-300 overflow-hidden"
      style={{
        background: hovered ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.03)",
        border: `1px solid ${hovered ? `${color}40` : "rgba(255,255,255,0.06)"}`,
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Floating dot decoration */}
      <div className="mb-4 w-12 h-12 rounded-full flex items-center justify-center" style={{ background: `${color}15` }}>
        <div className="w-3 h-3 rounded-full" style={{ background: color, boxShadow: `0 0 12px ${color}` }} />
      </div>
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{description}</p>
    </div>
  );
}
