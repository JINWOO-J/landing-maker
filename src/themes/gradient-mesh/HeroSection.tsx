"use client";

export default function GradientMeshHeroSection({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full relative overflow-hidden ${className ?? ""}`}>
      <style>{`
        @keyframes meshFloat1 { 0%, 100% { transform: translate(0, 0) scale(1); } 50% { transform: translate(40px, -30px) scale(1.1); } }
        @keyframes meshFloat2 { 0%, 100% { transform: translate(0, 0) scale(1); } 50% { transform: translate(-30px, 40px) scale(1.05); } }
        @keyframes meshFloat3 { 0%, 100% { transform: translate(0, 0) scale(1.05); } 50% { transform: translate(25px, 25px) scale(0.95); } }
      `}</style>

      {/* Base light background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#faf5ff] to-[#f0fdf4]" />

      {/* Gradient blobs */}
      <div
        className="absolute rounded-full blur-3xl"
        style={{
          width: 500, height: 500, top: "-5%", right: "-5%",
          background: "radial-gradient(circle, rgba(124,58,237,0.25) 0%, transparent 70%)",
          animation: "meshFloat1 15s ease-in-out infinite",
        }}
      />
      <div
        className="absolute rounded-full blur-3xl"
        style={{
          width: 400, height: 400, bottom: "5%", left: "10%",
          background: "radial-gradient(circle, rgba(45,212,191,0.2) 0%, transparent 70%)",
          animation: "meshFloat2 18s ease-in-out infinite",
        }}
      />
      <div
        className="absolute rounded-full blur-3xl"
        style={{
          width: 350, height: 350, top: "30%", left: "35%",
          background: "radial-gradient(circle, rgba(249,115,22,0.15) 0%, transparent 70%)",
          animation: "meshFloat3 20s ease-in-out infinite",
        }}
      />

      {/* Mesh grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#7c3aed 1px, transparent 1px), linear-gradient(90deg, #7c3aed 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
}
