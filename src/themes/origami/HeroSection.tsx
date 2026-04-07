"use client";

export default function OrigamiHeroSection({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full relative overflow-hidden ${className ?? ""}`} style={{ background: "#fefce8" }}>
      <style>{`
        @keyframes origamiFloat1 { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-15px) rotate(3deg); } }
        @keyframes origamiFloat2 { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-10px) rotate(-2deg); } }
      `}</style>

      {/* Paper texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 11px)",
      }} />

      {/* Origami crane */}
      <svg className="absolute" style={{ top: "18%", right: "12%", width: "20%", maxWidth: 220, animation: "origamiFloat1 6s ease-in-out infinite" }}
        viewBox="0 0 200 160" fill="none">
        {/* Body */}
        <polygon points="100,10 180,80 100,60 20,80" fill="rgba(234,179,8,0.12)" stroke="rgba(234,179,8,0.2)" strokeWidth="1" strokeLinejoin="round" />
        {/* Left wing */}
        <polygon points="20,80 100,60 60,130" fill="rgba(234,179,8,0.08)" stroke="rgba(234,179,8,0.15)" strokeWidth="1" strokeLinejoin="round" />
        {/* Right wing */}
        <polygon points="180,80 100,60 140,130" fill="rgba(234,179,8,0.06)" stroke="rgba(234,179,8,0.15)" strokeWidth="1" strokeLinejoin="round" />
        {/* Tail */}
        <polygon points="100,60 80,140 120,140" fill="rgba(234,179,8,0.05)" stroke="rgba(234,179,8,0.1)" strokeWidth="1" strokeLinejoin="round" />
        {/* Fold lines */}
        <line x1="100" y1="10" x2="100" y2="140" stroke="rgba(234,179,8,0.08)" strokeWidth="0.5" strokeDasharray="4 3" />
      </svg>

      {/* Small paper boat */}
      <svg className="absolute" style={{ bottom: "20%", right: "30%", width: 100, animation: "origamiFloat2 8s ease-in-out 1s infinite" }}
        viewBox="0 0 100 60" fill="none">
        <polygon points="50,5 90,40 10,40" fill="rgba(234,179,8,0.08)" stroke="rgba(234,179,8,0.12)" strokeWidth="1" strokeLinejoin="round" />
        <line x1="10" y1="40" x2="90" y2="40" stroke="rgba(234,179,8,0.15)" strokeWidth="1" />
        <path d="M5 45 Q50 55 95 45" fill="none" stroke="rgba(234,179,8,0.08)" strokeWidth="0.8" />
      </svg>

      {/* Fold crease lines */}
      {[{x1:"10%",y1:"20%",x2:"40%",y2:"60%"},{x1:"60%",y1:"70%",x2:"90%",y2:"40%"}].map((l,i) => (
        <div key={i} className="absolute pointer-events-none" style={{
          left: l.x1, top: l.y1, width: "30%", height: 0,
          borderTop: "1px dashed rgba(234,179,8,0.06)",
          transform: `rotate(${i*30-15}deg)`,
        }} />
      ))}
    </div>
  );
}
