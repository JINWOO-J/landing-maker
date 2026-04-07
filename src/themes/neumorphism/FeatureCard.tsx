"use client";

import { useState } from "react";

export default function NeumorphismFeatureCard({
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
      className="relative rounded-2xl p-6 transition-all duration-300"
      style={{
        background: "inherit",
        boxShadow: hovered
          ? `inset 6px 6px 12px rgba(0,0,0,0.08), inset -6px -6px 12px rgba(255,255,255,0.7)`
          : `8px 8px 16px rgba(0,0,0,0.08), -8px -8px 16px rgba(255,255,255,0.7)`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center"
        style={{
          boxShadow: "4px 4px 8px rgba(0,0,0,0.06), -4px -4px 8px rgba(255,255,255,0.6)",
        }}
      >
        <div className="w-4 h-4 rounded-full" style={{ background: color }} />
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm leading-relaxed opacity-50">{description}</p>
    </div>
  );
}
