"use client";

export default function CircuitHeroSection({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full relative overflow-hidden ${className ?? ""}`} style={{ background: "#050a0e" }}>
      <style>{`
        @keyframes circuitPulse { 0%, 100% { opacity: 0.15; } 50% { opacity: 0.4; } }
      `}</style>

      {/* PCB traces */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
        {/* Horizontal traces */}
        {[80,160,240,320,400,480].map((y,i) => (
          <g key={`h${i}`}>
            <line x1="0" y1={y} x2="800" y2={y} stroke="rgba(16,185,129,0.06)" strokeWidth="1" />
            {/* Pads */}
            {[100,250,400,550,700].map((x,j) => (
              <circle key={j} cx={x + (i*30)%60} cy={y} r="4" fill="none" stroke="rgba(16,185,129,0.1)" strokeWidth="1" />
            ))}
          </g>
        ))}
        {/* Vertical traces */}
        {[100,200,300,400,500,600,700].map((x,i) => (
          <line key={`v${i}`} x1={x} y1="0" x2={x} y2="600" stroke="rgba(16,185,129,0.04)" strokeWidth="1" />
        ))}
        {/* IC chip outlines */}
        <rect x="350" y="200" width="100" height="60" rx="2" fill="none" stroke="rgba(16,185,129,0.12)" strokeWidth="1.5" />
        {Array.from({length:5}).map((_,i) => (
          <g key={`pin${i}`}>
            <line x1={360+i*20} y1="195" x2={360+i*20} y2="200" stroke="rgba(16,185,129,0.15)" strokeWidth="1.5" />
            <line x1={360+i*20} y1="260" x2={360+i*20} y2="265" stroke="rgba(16,185,129,0.15)" strokeWidth="1.5" />
          </g>
        ))}
        {/* Signal paths with glow */}
        <path d="M100 320 L250 320 L280 280 L450 280" fill="none" stroke="rgba(16,185,129,0.15)" strokeWidth="1.5"
          style={{ animation: "circuitPulse 3s ease-in-out infinite" }} />
        <path d="M550 160 L550 280 L620 280 L620 400 L700 400" fill="none" stroke="rgba(16,185,129,0.12)" strokeWidth="1.5"
          style={{ animation: "circuitPulse 4s ease-in-out 1s infinite" }} />
      </svg>

      {/* Ambient glow */}
      <div className="absolute pointer-events-none" style={{
        top: "30%", left: "40%", width: 300, height: 300, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(16,185,129,0.04) 0%, transparent 70%)",
      }} />
    </div>
  );
}
