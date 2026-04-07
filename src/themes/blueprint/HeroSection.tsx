"use client";

export default function BlueprintHeroSection({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full relative overflow-hidden ${className ?? ""}`} style={{ background: "#0a1628" }}>
      {/* Blueprint grid */}
      <div className="absolute inset-0" style={{
        backgroundImage:
          "linear-gradient(rgba(59,130,246,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.08) 1px, transparent 1px), linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px)",
        backgroundSize: "100px 100px, 100px 100px, 20px 20px, 20px 20px",
      }} />

      {/* Technical drawing — wireframe box */}
      <svg className="absolute" style={{ top: "15%", right: "8%", width: "35%", maxWidth: 400 }} viewBox="0 0 400 300" fill="none">
        {/* Main box */}
        <rect x="80" y="60" width="200" height="140" stroke="rgba(59,130,246,0.25)" strokeWidth="1" strokeDasharray="4 2" />
        <rect x="120" y="40" width="200" height="140" stroke="rgba(59,130,246,0.15)" strokeWidth="1" strokeDasharray="4 2" />
        <line x1="80" y1="60" x2="120" y2="40" stroke="rgba(59,130,246,0.12)" strokeWidth="1" />
        <line x1="280" y1="60" x2="320" y2="40" stroke="rgba(59,130,246,0.12)" strokeWidth="1" />
        <line x1="80" y1="200" x2="120" y2="180" stroke="rgba(59,130,246,0.12)" strokeWidth="1" />
        <line x1="280" y1="200" x2="320" y2="180" stroke="rgba(59,130,246,0.12)" strokeWidth="1" />

        {/* Dimension lines */}
        <line x1="80" y1="220" x2="280" y2="220" stroke="rgba(59,130,246,0.2)" strokeWidth="0.5" />
        <line x1="80" y1="215" x2="80" y2="225" stroke="rgba(59,130,246,0.2)" strokeWidth="0.5" />
        <line x1="280" y1="215" x2="280" y2="225" stroke="rgba(59,130,246,0.2)" strokeWidth="0.5" />
        <text x="180" y="235" fill="rgba(59,130,246,0.2)" fontSize="10" textAnchor="middle" fontFamily="monospace">200px</text>

        {/* Circle detail */}
        <circle cx="180" cy="130" r="30" stroke="rgba(59,130,246,0.2)" strokeWidth="0.5" strokeDasharray="3 2" />
        <line x1="180" y1="95" x2="180" y2="165" stroke="rgba(59,130,246,0.1)" strokeWidth="0.5" />
        <line x1="145" y1="130" x2="215" y2="130" stroke="rgba(59,130,246,0.1)" strokeWidth="0.5" />

        {/* Corner markers */}
        {[[80,60],[280,60],[80,200],[280,200]].map(([x,y], i) => (
          <circle key={i} cx={x} cy={y} r="3" fill="rgba(59,130,246,0.3)" />
        ))}
      </svg>

      {/* Annotation text */}
      <div className="absolute select-none pointer-events-none" style={{
        bottom: "12%", left: "5%", fontFamily: "monospace", fontSize: 11,
        color: "rgba(59,130,246,0.15)", letterSpacing: 1,
      }}>
        REV 3.2 — SHEET 1 OF 1 — SCALE 1:1
      </div>
    </div>
  );
}
