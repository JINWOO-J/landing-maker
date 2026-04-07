"use client";

export default function TopographyHeroSection({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full relative overflow-hidden ${className ?? ""}`}>
      <style>{`
        @keyframes topoShift { 0% { transform: translateX(0) translateY(0); } 100% { transform: translateX(-20px) translateY(-10px); } }
      `}</style>

      {/* Topo contour lines via SVG */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.08]" style={{ animation: "topoShift 30s linear infinite alternate" }}>
        <defs>
          <pattern id="topo" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            <ellipse cx="100" cy="100" rx="90" ry="70" fill="none" stroke="currentColor" strokeWidth="0.8" />
            <ellipse cx="100" cy="100" rx="70" ry="55" fill="none" stroke="currentColor" strokeWidth="0.8" />
            <ellipse cx="100" cy="100" rx="50" ry="38" fill="none" stroke="currentColor" strokeWidth="0.8" />
            <ellipse cx="100" cy="100" rx="30" ry="22" fill="none" stroke="currentColor" strokeWidth="0.8" />
            <ellipse cx="100" cy="100" rx="12" ry="8" fill="none" stroke="currentColor" strokeWidth="0.8" />
            <ellipse cx="40" cy="40" rx="35" ry="28" fill="none" stroke="currentColor" strokeWidth="0.6" />
            <ellipse cx="40" cy="40" rx="18" ry="14" fill="none" stroke="currentColor" strokeWidth="0.6" />
            <ellipse cx="170" cy="160" rx="25" ry="20" fill="none" stroke="currentColor" strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="200%" height="200%" fill="url(#topo)" />
      </svg>

      {/* Elevation markers */}
      {[{x:"20%",y:"30%",h:"1240m"},{x:"60%",y:"45%",h:"890m"},{x:"75%",y:"25%",h:"1580m"}].map((m,i) => (
        <div key={i} className="absolute select-none pointer-events-none" style={{
          left: m.x, top: m.y, fontFamily: "monospace", fontSize: 9,
          color: "rgba(255,255,255,0.08)",
        }}>
          <div className="w-1.5 h-1.5 rounded-full mb-0.5 mx-auto" style={{ background: "rgba(255,255,255,0.1)" }} />
          {m.h}
        </div>
      ))}
    </div>
  );
}
