"use client";

import { useState } from "react";

export default function StainedGlassFeatureCard({
  title, description, color, accentColor, index,
}: { title: string; description: string; color: string; accentColor: string; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative rounded-xl p-6 transition-all duration-300 overflow-hidden"
      style={{
        background: hovered
          ? `linear-gradient(135deg, ${color}12, ${accentColor}08)`
          : "rgba(255,255,255,0.02)",
        border: `1px solid ${hovered ? `${color}30` : "rgba(255,255,255,0.06)"}`,
        boxShadow: hovered ? `inset 0 0 30px ${color}08` : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Mosaic icon */}
      <div className="mb-4 flex gap-1">
        {[color, accentColor, `${color}80`, `${accentColor}60`].map((c, i) => (
          <div key={i} className="w-4 h-4 rounded-sm" style={{
            background: c, opacity: hovered ? 0.6 : 0.25,
            transform: `rotate(${(i-1.5)*8}deg)`,
          }} />
        ))}
      </div>
      <h3 className="text-lg font-bold mb-2" style={{ color: hovered ? color : "inherit" }}>{title}</h3>
      <p className="text-sm leading-relaxed opacity-50">{description}</p>
    </div>
  );
}
