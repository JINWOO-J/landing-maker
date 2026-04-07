"use client";

export default function AuroraHeroSection({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full relative overflow-hidden ${className ?? ""}`}>
      <style>{`
        @keyframes auroraWave1 {
          0%, 100% { transform: translateX(0) scaleY(1); opacity: 0.3; }
          25% { transform: translateX(-5%) scaleY(1.2); opacity: 0.5; }
          50% { transform: translateX(3%) scaleY(0.8); opacity: 0.35; }
          75% { transform: translateX(-3%) scaleY(1.1); opacity: 0.45; }
        }
        @keyframes auroraWave2 {
          0%, 100% { transform: translateX(0) scaleY(1); opacity: 0.25; }
          33% { transform: translateX(4%) scaleY(1.3); opacity: 0.4; }
          66% { transform: translateX(-6%) scaleY(0.9); opacity: 0.3; }
        }
        @keyframes starTwinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>

      {/* Deep space background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#020617]" />

      {/* Aurora bands */}
      <div
        className="absolute left-0 right-0"
        style={{
          top: "10%", height: "50%",
          background: "linear-gradient(180deg, transparent, rgba(34,211,238,0.15), rgba(167,139,250,0.1), transparent)",
          filter: "blur(40px)",
          animation: "auroraWave1 12s ease-in-out infinite",
        }}
      />
      <div
        className="absolute left-0 right-0"
        style={{
          top: "20%", height: "40%",
          background: "linear-gradient(180deg, transparent, rgba(52,211,153,0.12), rgba(34,211,238,0.08), transparent)",
          filter: "blur(50px)",
          animation: "auroraWave2 16s ease-in-out infinite",
        }}
      />

      {/* Stars */}
      {Array.from({ length: 30 }, (_, i) => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: 1 + Math.random() * 2,
        delay: `${Math.random() * 5}s`,
        duration: `${2 + Math.random() * 3}s`,
      })).map((star, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            animation: `starTwinkle ${star.duration} ease-in-out infinite ${star.delay}`,
          }}
        />
      ))}
    </div>
  );
}
