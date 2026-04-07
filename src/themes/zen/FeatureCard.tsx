"use client";

import { useState } from "react";

export default function ZenFeatureCard({
  title, description, color, accentColor, index,
}: { title: string; description: string; color: string; accentColor: string; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative p-6 transition-all duration-500"
      style={{
        background: hovered ? "rgba(0,0,0,0.02)" : "transparent",
        borderLeft: `2px solid ${hovered ? color : "rgba(0,0,0,0.06)"}`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="text-xs tracking-[0.3em] uppercase mb-3 opacity-30">
        {["一", "二", "三", "四"][index % 4]}
      </div>
      <h3 className="text-lg font-light mb-2 tracking-wide">{title}</h3>
      <p className="text-sm leading-relaxed opacity-40 font-light">{description}</p>
    </div>
  );
}
