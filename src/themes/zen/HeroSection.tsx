"use client";

export default function ZenHeroSection({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full relative overflow-hidden ${className ?? ""}`} style={{ background: "#faf9f6" }}>
      <style>{`
        @keyframes zenRipple { 0% { transform: scale(0.8); opacity: 0.3; } 50% { transform: scale(1.2); opacity: 0.1; } 100% { transform: scale(0.8); opacity: 0.3; } }
      `}</style>

      {/* Subtle linen texture */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.3) 1px, rgba(0,0,0,0.3) 2px)",
        backgroundSize: "2px 4px",
      }} />

      {/* Enso circle */}
      <div className="absolute" style={{ top: "50%", right: "18%", transform: "translateY(-50%)" }}>
        <svg width="280" height="280" viewBox="0 0 280 280" fill="none">
          <circle cx="140" cy="140" r="110" stroke="rgba(0,0,0,0.06)" strokeWidth="12" strokeLinecap="round"
            strokeDasharray="600 100" transform="rotate(-30 140 140)" />
        </svg>
      </div>

      {/* Ripple circles */}
      {[1, 2, 3].map((i) => (
        <div key={i} className="absolute rounded-full" style={{
          bottom: "20%", left: "25%",
          width: 60 + i * 40, height: 60 + i * 40,
          border: "1px solid rgba(0,0,0,0.04)",
          animation: `zenRipple ${4 + i}s ease-in-out ${i * 0.8}s infinite`,
        }} />
      ))}

      {/* Bamboo lines */}
      <div className="absolute" style={{ top: "10%", left: "8%", width: 2, height: "60%", background: "rgba(0,0,0,0.04)", borderRadius: 1 }} />
      <div className="absolute" style={{ top: "15%", left: "11%", width: 1.5, height: "50%", background: "rgba(0,0,0,0.03)", borderRadius: 1 }} />
      <div className="absolute" style={{ top: "8%", left: "14%", width: 1, height: "55%", background: "rgba(0,0,0,0.025)", borderRadius: 1 }} />
    </div>
  );
}
