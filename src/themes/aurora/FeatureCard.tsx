"use client";

import { useState } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  color: string;
  accentColor: string;
  index: number;
}

export default function FeatureCard({ title, description, color, accentColor, index }: FeatureCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative rounded-2xl p-6 transition-all duration-300 cursor-pointer border overflow-hidden"
      style={{
        background: hovered
          ? "rgba(34,211,238,0.08)"
          : "rgba(34,211,238,0.03)",
        borderColor: hovered ? `${color}40` : "rgba(34,211,238,0.1)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Subtle aurora glow on hover */}
      {hovered && (
        <div
          className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl pointer-events-none"
          style={{ background: `radial-gradient(circle, ${color}20, transparent 70%)` }}
        />
      )}

      <div
        className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-4"
        style={{
          background: `linear-gradient(135deg, ${color}20, ${accentColor}15)`,
          border: `1px solid ${color}25`,
        }}
      >
        <div className="w-5 h-5 rounded-full" style={{ background: `linear-gradient(135deg, ${color}, ${accentColor})` }} />
      </div>
      <h3 className="relative text-lg font-bold mb-2" style={{ color: "#f0fdfa" }}>{title}</h3>
      <p className="relative text-sm leading-relaxed" style={{ color: "#94a3b8" }}>{description}</p>
    </div>
  );
}
