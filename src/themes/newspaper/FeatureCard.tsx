"use client";

import { useState } from "react";

export default function NewspaperFeatureCard({
  title, description, color, accentColor, index,
}: { title: string; description: string; color: string; accentColor: string; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative p-6 transition-all duration-200"
      style={{
        fontFamily: "'Georgia', 'Times New Roman', serif",
        background: hovered ? "rgba(0,0,0,0.02)" : "transparent",
        borderTop: "3px double rgba(0,0,0,0.2)",
        borderBottom: "1px solid rgba(0,0,0,0.08)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="text-xs uppercase tracking-widest mb-2 opacity-40" style={{ fontFamily: "system-ui" }}>
        Section {index + 1}
      </div>
      <h3 className="text-xl font-bold mb-2 leading-tight" style={{ color: hovered ? color : "inherit" }}>
        {title}
      </h3>
      <p className="text-sm leading-relaxed opacity-50">{description}</p>
    </div>
  );
}
