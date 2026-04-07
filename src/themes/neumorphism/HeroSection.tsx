"use client";

export default function NeumorphismHeroSection({ className }: { className?: string }) {
  const bg = "#e0e5ec";

  return (
    <div
      className={`w-full h-full relative overflow-hidden ${className ?? ""}`}
      style={{ background: bg }}
    >
      {/* Soft embossed shapes */}
      <div
        className="absolute rounded-3xl"
        style={{
          top: "20%",
          right: "10%",
          width: 280,
          height: 320,
          background: bg,
          boxShadow: "12px 12px 24px #b8bec7, -12px -12px 24px #ffffff",
        }}
      >
        <div className="p-6 space-y-4">
          <div className="h-4 rounded-full" style={{ width: "60%", background: bg, boxShadow: "inset 4px 4px 8px #b8bec7, inset -4px -4px 8px #ffffff" }} />
          <div className="h-3 rounded-full" style={{ width: "80%", background: bg, boxShadow: "inset 3px 3px 6px #b8bec7, inset -3px -3px 6px #ffffff" }} />
          <div className="h-3 rounded-full" style={{ width: "45%", background: bg, boxShadow: "inset 3px 3px 6px #b8bec7, inset -3px -3px 6px #ffffff" }} />
          <div className="mt-4 h-20 rounded-2xl" style={{ background: bg, boxShadow: "inset 6px 6px 12px #b8bec7, inset -6px -6px 12px #ffffff" }} />
        </div>
      </div>

      {/* Small floating circle */}
      <div
        className="absolute rounded-full"
        style={{
          top: "15%",
          right: "35%",
          width: 80,
          height: 80,
          background: bg,
          boxShadow: "8px 8px 16px #b8bec7, -8px -8px 16px #ffffff",
        }}
      />

      {/* Pill button shape */}
      <div
        className="absolute rounded-full"
        style={{
          bottom: "25%",
          right: "20%",
          width: 160,
          height: 48,
          background: bg,
          boxShadow: "6px 6px 12px #b8bec7, -6px -6px 12px #ffffff",
        }}
      />
    </div>
  );
}
