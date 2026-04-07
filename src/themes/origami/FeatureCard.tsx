"use client";

import { useState } from "react";

export default function OrigamiFeatureCard({
  title, description, color, accentColor, index,
}: { title: string; description: string; color: string; accentColor: string; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative p-6 transition-all duration-300"
      style={{
        background: hovered ? `${color}08` : "rgba(0,0,0,0.01)",
        clipPath: "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%)",
        border: `1px solid ${hovered ? `${color}25` : "rgba(0,0,0,0.06)"}`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Fold corner */}
      <div className="absolute top-0 right-0 w-6 h-6" style={{
        background: `linear-gradient(135deg, transparent 50%, ${hovered ? `${color}15` : "rgba(0,0,0,0.03)"} 50%)`,
      }} />
      <div className="text-2xl mb-3">{["🦢","⛵","🌷","⭐"][index % 4]}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm leading-relaxed opacity-40">{description}</p>
    </div>
  );
}
