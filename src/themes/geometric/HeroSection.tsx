"use client";

import { useMemo } from "react";

export default function GeometricHeroSection({ className }: { className?: string }) {
  const shapes = useMemo(() => {
    const items: { type: string; x: number; y: number; size: number; rotation: number; delay: number }[] = [];
    let seed = 77;
    const rand = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
    const types = ["triangle", "circle", "square", "hexagon"];
    for (let i = 0; i < 18; i++) {
      items.push({
        type: types[Math.floor(rand() * types.length)],
        x: rand() * 100,
        y: rand() * 100,
        size: 30 + rand() * 80,
        rotation: rand() * 360,
        delay: rand() * 5,
      });
    }
    return items;
  }, []);

  return (
    <div className={`w-full h-full relative overflow-hidden ${className ?? ""}`}>
      <style>{`
        @keyframes geoFloat { 0%, 100% { transform: var(--rot) translateY(0); } 50% { transform: var(--rot) translateY(-12px); } }
      `}</style>

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
        backgroundSize: "50px 50px",
      }} />

      {shapes.map((s, i) => {
        const opacity = 0.06 + (i % 3) * 0.03;
        const style: React.CSSProperties = {
          position: "absolute",
          left: `${s.x}%`,
          top: `${s.y}%`,
          width: s.size,
          height: s.size,
          opacity,
          border: "2px solid currentColor",
          // @ts-expect-error CSS custom property
          "--rot": `rotate(${s.rotation}deg)`,
          animation: `geoFloat ${3 + (i % 3)}s ease-in-out ${s.delay}s infinite`,
        };

        if (s.type === "circle") return <div key={i} className="rounded-full" style={style} />;
        if (s.type === "square") return <div key={i} className="rounded-sm" style={{ ...style, transform: `rotate(${s.rotation}deg)` }} />;
        if (s.type === "triangle") return (
          <div key={i} style={{ ...style, border: "none", width: 0, height: 0,
            borderLeft: `${s.size / 2}px solid transparent`,
            borderRight: `${s.size / 2}px solid transparent`,
            borderBottom: `${s.size}px solid currentColor`,
            opacity: opacity * 0.5,
            transform: `rotate(${s.rotation}deg)`,
          }} />
        );
        // hexagon via clip-path
        return <div key={i} style={{ ...style, clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)", background: "currentColor", border: "none", opacity: opacity * 0.4 }} />;
      })}
    </div>
  );
}
