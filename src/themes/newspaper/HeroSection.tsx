"use client";

export default function NewspaperHeroSection({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full relative overflow-hidden ${className ?? ""}`} style={{ background: "#f5f0e8" }}>
      {/* Column lines */}
      <div className="absolute inset-0 flex justify-around pointer-events-none">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="w-px h-full" style={{ background: "rgba(0,0,0,0.06)" }} />
        ))}
      </div>

      {/* Horizontal rules */}
      <div className="absolute top-[15%] left-[5%] right-[5%] h-px" style={{ background: "rgba(0,0,0,0.12)" }} />
      <div className="absolute top-[16%] left-[5%] right-[5%] h-[3px]" style={{ background: "rgba(0,0,0,0.15)" }} />
      <div className="absolute top-[60%] left-[5%] right-[5%] h-px" style={{ background: "rgba(0,0,0,0.08)" }} />

      {/* Faux text blocks */}
      <div className="absolute" style={{ top: "20%", right: "8%", width: "35%" }}>
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="mb-1.5 rounded-sm" style={{
            height: 6,
            width: `${60 + (i * 17) % 40}%`,
            background: "rgba(0,0,0,0.06)",
          }} />
        ))}
      </div>

      {/* Image placeholder */}
      <div className="absolute" style={{
        top: "25%", right: "48%", width: 180, height: 140,
        border: "1px solid rgba(0,0,0,0.1)",
        background: "repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(0,0,0,0.02) 5px, rgba(0,0,0,0.02) 10px)",
      }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(0,0,0,0.15)" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
        </div>
      </div>

      {/* Masthead decoration */}
      <div className="absolute select-none pointer-events-none" style={{
        top: "5%", left: "5%",
        fontFamily: "'Georgia', 'Times New Roman', serif",
        fontSize: "clamp(48px, 6vw, 80px)",
        fontWeight: 700,
        color: "rgba(0,0,0,0.05)",
        letterSpacing: "-0.02em",
      }}>
        THE DAILY
      </div>
    </div>
  );
}
