"use client";

import { useMemo } from "react";

/** Deterministic pseudo-random star positions */
function useStars(count: number) {
  return useMemo(() => {
    const colors = ["#fee761", "#e4a672", "#63c74d", "#ffffff", "#38b6ff"];
    let s = 42;
    const rand = () => { s = (s * 16807) % 2147483647; return s / 2147483647; };
    return Array.from({ length: count }, () => ({
      x: rand() * 100,
      y: rand() * 55,
      size: Math.floor(rand() * 3) + 2,
      color: colors[Math.floor(rand() * colors.length)],
      delay: rand() * 3,
    }));
  }, [count]);
}

/** Pixel mountain range built from CSS box-shadow */
function PixelMountains() {
  const shadow = useMemo(() => {
    const PX = 8;
    const shadows: string[] = [];
    const back = [3,5,7,9,10,11,10,8,6,7,9,12,14,13,11,9,7,5,6,8,10,9,7,5,4,3,5,7,6,4,3,2];
    const front = [1,2,4,6,7,8,7,5,3,4,6,8,10,9,7,5,3,2,3,5,7,6,4,2,1,2,3,4,3,2,1,1];

    for (let col = 0; col < back.length; col++) {
      for (let row = 0; row < back[col]; row++) {
        shadows.push(`${col * PX}px ${-row * PX}px 0 0 #3a3a4a`);
      }
    }
    for (let col = 0; col < front.length; col++) {
      for (let row = 0; row < front[col]; row++) {
        const c = row >= front[col] - 2 ? "#b86f50" : row >= front[col] - 4 ? "#8b5e3c" : "#5a3d2b";
        shadows.push(`${col * PX}px ${-row * PX}px 0 0 ${c}`);
      }
    }
    return shadows.join(",");
  }, []);

  return <div className="absolute bottom-0 left-0 pointer-events-none" style={{ width: 8, height: 8, boxShadow: shadow }} />;
}

/** Pixel sun built from box-shadow */
function PixelSun() {
  const shadow = useMemo(() => {
    const PX = 6;
    const rows = [
      "..1..1..", "..0000..", ".000000.", "10000001",
      ".000000.", "..0000..", "..1..1..", "........",
    ];
    const colors: Record<string, string> = { "0": "#fee761", "1": "#e4a672" };
    const shadows: string[] = [];
    for (let y = 0; y < rows.length; y++) {
      for (let x = 0; x < rows[y].length; x++) {
        if (colors[rows[y][x]]) shadows.push(`${x * PX}px ${y * PX}px 0 0 ${colors[rows[y][x]]}`);
      }
    }
    return shadows.join(",");
  }, []);

  return <div className="absolute pointer-events-none" style={{ top: "12%", right: "15%", width: 6, height: 6, boxShadow: shadow }} />;
}

/** Small pixel cloud */
function PixelCloud({ top, left }: { top: string; left: string }) {
  const shadow = useMemo(() => {
    const PX = 6;
    const rows = ["..111..", ".11111.", "1111111", ".11111."];
    const shadows: string[] = [];
    for (let y = 0; y < rows.length; y++) {
      for (let x = 0; x < rows[y].length; x++) {
        if (rows[y][x] === "1") shadows.push(`${x * PX}px ${y * PX}px 0 0 rgba(228,166,114,0.15)`);
      }
    }
    return shadows.join(",");
  }, []);

  return (
    <div
      className="absolute pointer-events-none"
      style={{ top, left, width: 6, height: 6, boxShadow: shadow, animation: "pixelDrift 20s linear infinite" }}
    />
  );
}

export default function RetroPixelHeroSection({ className }: { className?: string }) {
  const stars = useStars(30);

  return (
    <div className={`w-full h-full relative overflow-hidden ${className ?? ""}`} style={{ backgroundColor: "#212123" }}>
      <style>{`
        @keyframes pixelTwinkle {
          0% { opacity: 0.3; }
          100% { opacity: 1; }
        }
        @keyframes pixelDrift {
          0% { transform: translateX(0); }
          100% { transform: translateX(80px); }
        }
      `}</style>

      {/* 8px pixel grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(228,166,114,1) 1px, transparent 1px), linear-gradient(90deg, rgba(228,166,114,1) 1px, transparent 1px)",
          backgroundSize: "8px 8px",
        }}
      />

      {/* CRT scanline overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-30"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px)",
          backgroundSize: "100% 4px",
        }}
      />

      {/* CRT vignette */}
      <div
        className="absolute inset-0 pointer-events-none z-30"
        style={{ background: "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.5) 100%)" }}
      />

      {/* Stars */}
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            backgroundColor: star.color,
            animation: `pixelTwinkle 2s ease-in-out ${star.delay}s infinite alternate`,
          }}
        />
      ))}

      <PixelSun />
      <PixelCloud top="18%" left="5%" />
      <PixelCloud top="25%" left="55%" />
      <PixelMountains />

      {/* Ground / grass strip */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ height: 16, backgroundColor: "#265c42", boxShadow: "0 -8px 0 0 #63c74d" }}
      />
    </div>
  );
}
