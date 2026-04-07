"use client";

import { useState } from "react";

export default function BlueprintFeatureCard({
  title, description, color, accentColor, index,
}: { title: string; description: string; color: string; accentColor: string; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative p-5 transition-all duration-200"
      style={{
        background: hovered ? "rgba(59,130,246,0.04)" : "transparent",
        border: `1px ${hovered ? "solid" : "dashed"} ${hovered ? `${color}50` : "rgba(59,130,246,0.15)"}`,
        fontFamily: "monospace",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Corner crosshairs */}
      {[["top-0 left-0","border-t border-l"],["top-0 right-0","border-t border-r"],["bottom-0 left-0","border-b border-l"],["bottom-0 right-0","border-b border-r"]].map(([pos,cls],i) => (
        <div key={i} className={`absolute ${pos} w-3 h-3 ${cls}`} style={{ borderColor: `${color}40` }} />
      ))}
      <div className="text-[10px] mb-2" style={{ color: `${color}60` }}>DETAIL {String.fromCharCode(65 + index)}</div>
      <h3 className="text-sm font-bold mb-2" style={{ color: hovered ? color : "inherit" }}>{title}</h3>
      <p className="text-xs leading-relaxed opacity-40">{description}</p>
    </div>
  );
}
