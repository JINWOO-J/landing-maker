"use client";

import { useState } from "react";

export default function TerminalFeatureCard({
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
      className="relative p-5 transition-all duration-200"
      style={{
        fontFamily: "ui-monospace, 'Cascadia Code', 'Fira Code', monospace",
        background: hovered ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.01)",
        border: `1px solid ${hovered ? `${color}50` : "rgba(255,255,255,0.06)"}`,
        borderRadius: 8,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="text-xs mb-3" style={{ color: `${color}80` }}>
        {">"} module_{index + 1}
      </div>
      <h3 className="text-sm font-bold mb-2" style={{ color: hovered ? color : "inherit" }}>
        {title}
      </h3>
      <p className="text-xs leading-relaxed opacity-50">{description}</p>
      <div className="mt-3 text-xs" style={{ color: `${color}60` }}>
        status: <span style={{ color }}>active</span>
      </div>
    </div>
  );
}
