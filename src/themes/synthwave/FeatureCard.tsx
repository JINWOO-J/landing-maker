"use client";

import { useState } from "react";

export default function SynthwaveFeatureCard({
  title, description, color, accentColor, index,
}: { title: string; description: string; color: string; accentColor: string; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative rounded-lg p-6 transition-all duration-300 overflow-hidden"
      style={{
        background: hovered ? "rgba(255,107,157,0.08)" : "rgba(255,255,255,0.03)",
        border: `1px solid ${hovered ? "rgba(255,107,157,0.4)" : "rgba(255,107,157,0.1)"}`,
        boxShadow: hovered ? `0 0 20px rgba(255,107,157,0.15), 0 0 40px rgba(255,154,86,0.08)` : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Gradient line top */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{
        background: `linear-gradient(to right, transparent, ${color}, transparent)`,
        opacity: hovered ? 0.8 : 0.3,
      }} />
      <div className="text-3xl font-black mb-3" style={{
        background: `linear-gradient(135deg, ${color}, ${accentColor})`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}>
        {String(index + 1).padStart(2, "0")}
      </div>
      <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>
      <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>{description}</p>
    </div>
  );
}
