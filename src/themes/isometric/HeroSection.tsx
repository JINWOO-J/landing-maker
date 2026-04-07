"use client";

import { useMemo } from "react";

export default function IsometricHeroSection({ className }: { className?: string }) {
  const cubes = useMemo(() => {
    const items: { x: number; y: number; h: number; delay: number }[] = [];
    for (let row = 0; row < 6; row++) {
      for (let col = 0; col < 6; col++) {
        const dist = Math.sqrt((row - 2.5) ** 2 + (col - 2.5) ** 2);
        items.push({
          x: col,
          y: row,
          h: Math.max(1, Math.round(4 - dist)),
          delay: (row + col) * 0.08,
        });
      }
    }
    return items;
  }, []);

  const TILE_W = 48;
  const TILE_H = 24;

  return (
    <div className={`w-full h-full relative overflow-hidden ${className ?? ""}`}>
      <style>{`
        @keyframes isoFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
      `}</style>

      {/* Isometric grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(30deg, currentColor 12%, transparent 12.5%, transparent 87%, currentColor 87.5%, currentColor), linear-gradient(150deg, currentColor 12%, transparent 12.5%, transparent 87%, currentColor 87.5%, currentColor), linear-gradient(30deg, currentColor 12%, transparent 12.5%, transparent 87%, currentColor 87.5%, currentColor), linear-gradient(150deg, currentColor 12%, transparent 12.5%, transparent 87%, currentColor 87.5%, currentColor)",
          backgroundSize: "80px 140px",
          backgroundPosition: "0 0, 0 0, 40px 70px, 40px 70px",
        }}
      />

      {/* Isometric cubes cluster */}
      <div
        className="absolute"
        style={{
          top: "50%",
          right: "12%",
          transform: "translateY(-50%)",
        }}
      >
        <svg
          width={TILE_W * 8}
          height={TILE_H * 14}
          viewBox={`0 0 ${TILE_W * 8} ${TILE_H * 14}`}
          className="opacity-30"
        >
          {cubes.map((cube, i) => {
            const isoX = (cube.x - cube.y) * (TILE_W / 2) + TILE_W * 4;
            const isoY = (cube.x + cube.y) * (TILE_H / 2) + TILE_H * 2;

            return (
              <g
                key={i}
                style={{ animation: `isoFloat 3s ease-in-out ${cube.delay}s infinite` }}
              >
                {/* Top face */}
                <polygon
                  points={`${isoX},${isoY - cube.h * TILE_H} ${isoX + TILE_W / 2},${isoY - cube.h * TILE_H + TILE_H / 2} ${isoX},${isoY - cube.h * TILE_H + TILE_H} ${isoX - TILE_W / 2},${isoY - cube.h * TILE_H + TILE_H / 2}`}
                  fill="currentColor"
                  opacity="0.6"
                />
                {/* Left face */}
                <polygon
                  points={`${isoX - TILE_W / 2},${isoY - cube.h * TILE_H + TILE_H / 2} ${isoX},${isoY - cube.h * TILE_H + TILE_H} ${isoX},${isoY + TILE_H} ${isoX - TILE_W / 2},${isoY + TILE_H / 2}`}
                  fill="currentColor"
                  opacity="0.3"
                />
                {/* Right face */}
                <polygon
                  points={`${isoX},${isoY - cube.h * TILE_H + TILE_H} ${isoX + TILE_W / 2},${isoY - cube.h * TILE_H + TILE_H / 2} ${isoX + TILE_W / 2},${isoY + TILE_H / 2} ${isoX},${isoY + TILE_H}`}
                  fill="currentColor"
                  opacity="0.15"
                />
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
