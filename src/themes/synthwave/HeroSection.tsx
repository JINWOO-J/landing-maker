"use client";

export default function SynthwaveHeroSection({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full relative overflow-hidden ${className ?? ""}`} style={{ background: "#1a0533" }}>
      <style>{`
        @keyframes swSun { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        @keyframes swGrid { 0% { transform: rotateX(60deg) translateY(0); } 100% { transform: rotateX(60deg) translateY(60px); } }
      `}</style>

      {/* Sky gradient */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(to bottom, #0a001a 0%, #1a0533 30%, #4a1068 55%, #ff6b9d 75%, #ff9a56 90%, #1a0533 90%)",
      }} />

      {/* Sun */}
      <div className="absolute" style={{
        left: "50%", bottom: "28%", transform: "translateX(-50%)",
        width: 200, height: 200, borderRadius: "50%",
        background: "linear-gradient(to bottom, #ff6b9d, #ff9a56, #ffd93d)",
        boxShadow: "0 0 60px rgba(255,107,157,0.4), 0 0 120px rgba(255,154,86,0.2)",
        animation: "swSun 6s ease-in-out infinite",
      }}>
        {/* Horizontal stripe cutouts */}
        {[0.55, 0.65, 0.73, 0.8, 0.86, 0.91].map((pos, i) => (
          <div key={i} className="absolute left-0 right-0" style={{
            top: `${pos * 100}%`, height: `${3 + i}px`, background: "#1a0533",
          }} />
        ))}
      </div>

      {/* Perspective grid */}
      <div className="absolute left-0 right-0 bottom-0" style={{ height: "35%", perspective: "400px", perspectiveOrigin: "50% 0%" }}>
        <div style={{
          width: "200%", height: "300%", marginLeft: "-50%",
          transform: "rotateX(60deg)", transformOrigin: "top center",
          backgroundImage: "linear-gradient(to right, rgba(255,107,157,0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,107,157,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          animation: "swGrid 2s linear infinite",
        }} />
      </div>

      {/* Stars */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div key={i} className="absolute rounded-full bg-white" style={{
          left: `${(i * 37 + 13) % 100}%`,
          top: `${(i * 23 + 7) % 40}%`,
          width: 1 + (i % 2),
          height: 1 + (i % 2),
          opacity: 0.3 + (i % 3) * 0.2,
        }} />
      ))}
    </div>
  );
}
