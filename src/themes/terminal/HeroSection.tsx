"use client";

import { useEffect, useState } from "react";

const LINES = [
  "$ ssh root@voxelcraft.io",
  "Connected to VoxelCraft v3.2.1",
  "Loading modules... ████████████ 100%",
  "$ voxel init --template rocket",
  "✓ Project initialized",
  "✓ Dependencies resolved (142 packages)",
  "$ voxel build --optimize",
  "Compiling shaders... done",
  "Generating mesh... done",
  "✓ Build complete in 1.24s",
  "$ voxel deploy --prod",
  "Deploying to edge network...",
  "✓ Live at https://my-world.voxelcraft.io",
  "$ _",
];

export default function TerminalHeroSection({ className }: { className?: string }) {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLines((prev) => (prev < LINES.length ? prev + 1 : prev));
    }, 400);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`w-full h-full relative overflow-hidden ${className ?? ""}`} style={{ background: "#0a0a0a" }}>
      {/* Scanline */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,0,0.015) 2px, rgba(0,255,0,0.015) 4px)",
        }}
      />

      {/* Terminal window */}
      <div
        className="absolute"
        style={{
          top: "12%",
          right: "6%",
          width: "min(480px, 45%)",
          height: "auto",
          fontFamily: "ui-monospace, 'Cascadia Code', 'Fira Code', monospace",
          fontSize: "13px",
        }}
      >
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-t-lg" style={{ background: "rgba(255,255,255,0.06)" }}>
          <div className="w-3 h-3 rounded-full" style={{ background: "#ff5f57" }} />
          <div className="w-3 h-3 rounded-full" style={{ background: "#febc2e" }} />
          <div className="w-3 h-3 rounded-full" style={{ background: "#28c840" }} />
          <span className="ml-2 text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>voxelcraft — bash</span>
        </div>

        {/* Terminal body */}
        <div
          className="p-4 rounded-b-lg space-y-1 overflow-hidden"
          style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderTop: "none" }}
        >
          {LINES.slice(0, visibleLines).map((line, i) => (
            <div key={i} style={{ color: line.startsWith("✓") ? "#4ade80" : line.startsWith("$") ? "#84cc16" : "rgba(255,255,255,0.5)" }}>
              {line}
            </div>
          ))}
          {visibleLines < LINES.length && (
            <span className="inline-block w-2 h-4 animate-pulse" style={{ background: "#84cc16" }} />
          )}
        </div>
      </div>

      {/* Ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "30%",
          right: "15%",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(132,204,22,0.04) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
