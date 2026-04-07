"use client";

import { useState } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  color: string;
  accentColor: string;
  index: number;
}

function GeometricIcon({ index, color }: { index: number; color: string }) {
  const shape = index % 4;

  switch (shape) {
    case 0:
      // Rounded square
      return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect x="4" y="4" width="24" height="24" rx="6" stroke={color} strokeWidth="2.5" />
          <rect x="10" y="10" width="12" height="12" rx="3" fill={color} fillOpacity="0.3" />
        </svg>
      );
    case 1:
      // Diamond
      return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path
            d="M16 3L29 16L16 29L3 16L16 3Z"
            stroke={color}
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path
            d="M16 9L23 16L16 23L9 16L16 9Z"
            fill={color}
            fillOpacity="0.3"
          />
        </svg>
      );
    case 2:
      // Stacked bars
      return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect x="4" y="4" width="24" height="6" rx="2" stroke={color} strokeWidth="2" />
          <rect x="4" y="13" width="24" height="6" rx="2" fill={color} fillOpacity="0.3" />
          <rect x="4" y="22" width="24" height="6" rx="2" stroke={color} strokeWidth="2" />
        </svg>
      );
    case 3:
      // Sparkle / star
      return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path
            d="M16 2L18.5 12.5L29 16L18.5 19.5L16 30L13.5 19.5L3 16L13.5 12.5L16 2Z"
            stroke={color}
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M16 8L17.5 13.5L23 16L17.5 18.5L16 24L14.5 18.5L9 16L14.5 13.5L16 8Z"
            fill={color}
            fillOpacity="0.3"
          />
        </svg>
      );
    default:
      return null;
  }
}

export default function FeatureCard({
  title,
  description,
  color,
  accentColor,
  index,
}: FeatureCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative rounded-2xl backdrop-blur-xl border p-6 transition-all duration-300 cursor-pointer ${
        hovered
          ? "bg-white/10 border-white/20 scale-[1.02]"
          : "bg-white/5 border-white/10"
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top gradient blob */}
      <div
        className="absolute top-0 left-0 right-0 h-32 rounded-t-2xl overflow-hidden pointer-events-none"
      >
        <div
          className="absolute -top-8 -left-8 w-32 h-32 rounded-full blur-2xl opacity-20 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
            opacity: hovered ? 0.35 : 0.2,
          }}
        />
      </div>

      {/* Icon area */}
      <div
        className="relative w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300"
        style={{
          background: hovered
            ? `${accentColor}20`
            : "rgba(255,255,255,0.06)",
        }}
      >
        <GeometricIcon index={index} color={color} />
      </div>

      {/* Content */}
      <h3 className="relative text-lg font-bold text-white mb-2">{title}</h3>
      <p className="relative text-sm leading-relaxed" style={{ color: "#a1a1aa" }}>
        {description}
      </p>
    </div>
  );
}
