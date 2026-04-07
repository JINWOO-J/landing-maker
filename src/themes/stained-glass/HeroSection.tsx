"use client";

import { useMemo } from "react";

export default function StainedGlassHeroSection({ className }: { className?: string }) {
  const cells = useMemo(() => {
    const items: { points: string; color: string; opacity: number }[] = [];
    const colors = ["#8b5cf6","#ec4899","#3b82f6","#f59e0b","#10b981","#ef4444","#06b6d4","#f97316"];
    let seed = 42;
    const rand = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };

    // Generate voronoi-like cells
    const centers: [number,number][] = [];
    for (let i = 0; i < 24; i++) {
      centers.push([rand() * 100, rand() * 100]);
    }

    // Approximate cells as hexagons around centers
    for (let i = 0; i < centers.length; i++) {
      const [cx, cy] = centers[i];
      const r = 8 + rand() * 6;
      const sides = 5 + Math.floor(rand() * 3);
      const pts: string[] = [];
      for (let j = 0; j < sides; j++) {
        const angle = (j / sides) * Math.PI * 2 + rand() * 0.4;
        const rr = r * (0.8 + rand() * 0.4);
        pts.push(`${cx + Math.cos(angle) * rr}%,${cy + Math.sin(angle) * rr}%`);
      }
      items.push({
        points: pts.join(" "),
        color: colors[Math.floor(rand() * colors.length)],
        opacity: 0.04 + rand() * 0.06,
      });
    }
    return items;
  }, []);

  return (
    <div className={`w-full h-full relative overflow-hidden ${className ?? ""}`} style={{ background: "#0a0a1a" }}>
      <svg className="absolute inset-0 w-full h-full">
        {cells.map((cell, i) => (
          <polygon
            key={i}
            points={cell.points}
            fill={cell.color}
            fillOpacity={cell.opacity}
            stroke="rgba(255,255,255,0.04)"
            strokeWidth="1"
          />
        ))}
      </svg>

      {/* Lead lines overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(60deg, transparent 48%, rgba(255,255,255,0.5) 49%, rgba(255,255,255,0.5) 51%, transparent 52%), linear-gradient(-60deg, transparent 48%, rgba(255,255,255,0.5) 49%, rgba(255,255,255,0.5) 51%, transparent 52%)",
        backgroundSize: "80px 140px",
      }} />

      {/* Central rosette */}
      <div className="absolute" style={{ top: "50%", right: "20%", transform: "translateY(-50%)" }}>
        <svg width="200" height="200" viewBox="0 0 200 200" className="opacity-10">
          {Array.from({length:8}).map((_,i) => {
            const angle = (i / 8) * Math.PI * 2;
            return (
              <ellipse key={i} cx="100" cy="100" rx="80" ry="25"
                fill="none" stroke="currentColor" strokeWidth="0.5"
                transform={`rotate(${(i/8)*180} 100 100)`} />
            );
          })}
          <circle cx="100" cy="100" r="20" fill="none" stroke="currentColor" strokeWidth="0.8" />
        </svg>
      </div>
    </div>
  );
}
