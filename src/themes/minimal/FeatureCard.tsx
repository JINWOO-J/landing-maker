"use client";

import { useState } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  color: string;
  accentColor: string;
  index: number;
}

export default function FeatureCard({ title, description, color, index }: FeatureCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative rounded-2xl p-6 transition-all duration-300 cursor-pointer"
      style={{
        background: hovered ? "#f4f4f5" : "#ffffff",
        border: `1px solid ${hovered ? "#d4d4d8" : "#e4e4e7"}`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-sm font-semibold"
        style={{
          backgroundColor: `${color}10`,
          color,
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </div>
      <h3 className="text-lg font-semibold mb-2" style={{ color: "#18181b" }}>{title}</h3>
      <p className="text-sm leading-relaxed" style={{ color: "#71717a" }}>{description}</p>
    </div>
  );
}
