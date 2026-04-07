"use client";

import { useState } from "react";

export default function BrutalistFeatureCard({
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
      className="relative p-6 transition-all duration-150"
      style={{
        border: `3px solid ${hovered ? color : "currentColor"}`,
        background: hovered ? `${color}08` : "transparent",
        transform: hovered ? "translate(-2px, -2px)" : "none",
        boxShadow: hovered ? `4px 4px 0 ${color}` : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="text-4xl font-black mb-3 font-mono"
        style={{ color: hovered ? color : "inherit" }}
      >
        {String(index + 1).padStart(2, "0")}
      </div>
      <h3 className="text-lg font-black uppercase tracking-wider mb-2">{title}</h3>
      <p className="text-sm leading-relaxed opacity-60">{description}</p>
    </div>
  );
}
