"use client";

import { useState } from "react";

export default function WatercolorFeatureCard({
  title, description, color, accentColor, index,
}: { title: string; description: string; color: string; accentColor: string; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative rounded-2xl p-6 transition-all duration-300"
      style={{
        background: hovered ? `${color}0a` : "rgba(255,255,255,0.6)",
        border: `1px solid ${hovered ? `${color}30` : "rgba(0,0,0,0.06)"}`,
        backdropFilter: "blur(8px)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{
        background: `linear-gradient(135deg, ${color}20, ${accentColor}15)`,
      }}>
        <div className="w-5 h-5 rounded-full" style={{ background: `${color}60`, filter: "blur(1px)" }} />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm leading-relaxed opacity-50">{description}</p>
    </div>
  );
}
