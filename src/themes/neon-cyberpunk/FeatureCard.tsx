"use client";

import { useState } from "react";

function HexagonIcon({ color }: { color: string }) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <path
        d="M20 4L35.32 12V28L20 36L4.68 28V12L20 4Z"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
}

function CircuitIcon({ color }: { color: string }) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect x="12" y="12" width="16" height="16" rx="2" stroke={color} strokeWidth="1.5" />
      <line x1="20" y1="4" x2="20" y2="12" stroke={color} strokeWidth="1.5" />
      <line x1="20" y1="28" x2="20" y2="36" stroke={color} strokeWidth="1.5" />
      <line x1="4" y1="20" x2="12" y2="20" stroke={color} strokeWidth="1.5" />
      <line x1="28" y1="20" x2="36" y2="20" stroke={color} strokeWidth="1.5" />
      <circle cx="20" cy="4" r="2" fill={color} />
      <circle cx="20" cy="36" r="2" fill={color} />
      <circle cx="4" cy="20" r="2" fill={color} />
      <circle cx="36" cy="20" r="2" fill={color} />
    </svg>
  );
}

function ChipIcon({ color }: { color: string }) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect x="10" y="10" width="20" height="20" rx="1" stroke={color} strokeWidth="1.5" />
      <rect x="15" y="15" width="10" height="10" stroke={color} strokeWidth="1" opacity="0.6" />
      <line x1="16" y1="6" x2="16" y2="10" stroke={color} strokeWidth="1.5" />
      <line x1="24" y1="6" x2="24" y2="10" stroke={color} strokeWidth="1.5" />
      <line x1="16" y1="30" x2="16" y2="34" stroke={color} strokeWidth="1.5" />
      <line x1="24" y1="30" x2="24" y2="34" stroke={color} strokeWidth="1.5" />
      <line x1="6" y1="16" x2="10" y2="16" stroke={color} strokeWidth="1.5" />
      <line x1="6" y1="24" x2="10" y2="24" stroke={color} strokeWidth="1.5" />
      <line x1="30" y1="16" x2="34" y2="16" stroke={color} strokeWidth="1.5" />
      <line x1="30" y1="24" x2="34" y2="24" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}

function SignalIcon({ color }: { color: string }) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="3" fill={color} />
      <circle cx="20" cy="20" r="8" stroke={color} strokeWidth="1" opacity="0.6" />
      <circle cx="20" cy="20" r="14" stroke={color} strokeWidth="1" opacity="0.35" />
      <circle cx="20" cy="20" r="18" stroke={color} strokeWidth="0.5" opacity="0.2" />
    </svg>
  );
}

const ICONS = [HexagonIcon, CircuitIcon, ChipIcon, SignalIcon];

export default function NeonCyberpunkFeatureCard({
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
  const IconComponent = ICONS[index % 4];

  return (
    <div
      className="group relative p-6 transition-all duration-300"
      style={{
        background: "rgba(10,10,20,0.8)",
        clipPath:
          "polygon(16px 0%, 100% 0%, calc(100% - 16px) 100%, 0% 100%)",
        transform: hovered ? "scale(1.03)" : "scale(1)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Border glow layer */}
      <div
        className="absolute inset-0 transition-all duration-300"
        style={{
          clipPath:
            "polygon(16px 0%, 100% 0%, calc(100% - 16px) 100%, 0% 100%)",
          boxShadow: hovered
            ? "0 0 20px rgba(0,240,255,0.4), 0 0 40px rgba(0,240,255,0.15), inset 0 0 20px rgba(0,240,255,0.05)"
            : "0 0 8px rgba(0,240,255,0.15), inset 0 0 8px rgba(0,240,255,0.02)",
          border: hovered
            ? "1px solid rgba(0,240,255,0.5)"
            : "1px solid rgba(0,240,255,0.15)",
        }}
      />

      {/* Scanline overlay on card */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          clipPath:
            "polygon(16px 0%, 100% 0%, calc(100% - 16px) 100%, 0% 100%)",
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,240,255,0.02) 3px, rgba(0,240,255,0.02) 4px)",
          zIndex: 1,
        }}
      />

      {/* Corner cut accent - top left */}
      <div
        className="absolute transition-colors duration-300"
        style={{
          top: 0,
          left: 0,
          width: "24px",
          height: "2px",
          background: hovered ? accentColor : color,
          boxShadow: hovered ? `0 0 8px ${accentColor}` : `0 0 4px ${color}`,
          zIndex: 2,
        }}
      />

      {/* Corner cut accent - bottom right */}
      <div
        className="absolute transition-colors duration-300"
        style={{
          bottom: 0,
          right: 0,
          width: "24px",
          height: "2px",
          background: hovered ? accentColor : color,
          boxShadow: hovered ? `0 0 8px ${accentColor}` : `0 0 4px ${color}`,
          zIndex: 2,
        }}
      />

      {/* Content */}
      <div className="relative" style={{ zIndex: 2 }}>
        {/* Icon area */}
        <div className="mb-4 flex items-center justify-center h-16">
          <div
            className="transition-all duration-300"
            style={{
              filter: hovered
                ? `drop-shadow(0 0 8px ${color})`
                : `drop-shadow(0 0 3px ${color})`,
            }}
          >
            <IconComponent color={hovered ? accentColor : color} />
          </div>
        </div>

        {/* Neon separator line */}
        <div
          className="mx-auto mb-4 transition-all duration-300"
          style={{
            height: "1px",
            width: hovered ? "80%" : "60%",
            background: `linear-gradient(to right, transparent, ${hovered ? accentColor : color}, transparent)`,
            boxShadow: `0 0 6px ${hovered ? accentColor : color}`,
          }}
        />

        {/* Title */}
        <h3
          className="text-lg font-bold mb-2 transition-colors duration-300"
          style={{
            color: hovered ? accentColor : "#00f0ff",
            fontFamily: "monospace",
            textShadow: `0 0 8px ${hovered ? accentColor : "rgba(0,240,255,0.5)"}`,
          }}
        >
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed" style={{ color: "#666680" }}>
          {description}
        </p>
      </div>
    </div>
  );
}
