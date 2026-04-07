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

  const gradients = [
    "linear-gradient(135deg, #7c3aed20, #2dd4bf10)",
    "linear-gradient(135deg, #2dd4bf20, #f9731610)",
    "linear-gradient(135deg, #f9731620, #7c3aed10)",
    "linear-gradient(135deg, #7c3aed10, #f9731620)",
  ];

  return (
    <div
      className="relative rounded-2xl p-6 transition-all duration-300 cursor-pointer border"
      style={{
        background: hovered ? gradients[index % 4] : "rgba(124,58,237,0.03)",
        borderColor: hovered ? `${color}30` : "rgba(124,58,237,0.1)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
        style={{ background: `${accentColor}15` }}
      >
        <div className="w-6 h-6 rounded-full" style={{ background: `linear-gradient(135deg, ${color}, ${accentColor})` }} />
      </div>
      <h3 className="text-lg font-bold mb-2" style={{ color: "#1e1b4b" }}>{title}</h3>
      <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{description}</p>
    </div>
  );
}
