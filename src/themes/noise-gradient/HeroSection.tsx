"use client";
export default function NoiseGradientHeroSection({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full relative overflow-hidden ${className??""}`}>
      {/* Base gradient */}
      <div className="absolute inset-0" style={{background:"linear-gradient(135deg, #6366f1, #a855f7, #ec4899, #f97316)"}}/>
      {/* Noise overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.25] mix-blend-overlay pointer-events-none"><filter id="noiseG"><feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(#noiseG)"/></svg>
      {/* Darker overlay for readability */}
      <div className="absolute inset-0" style={{background:"rgba(0,0,0,0.3)"}}/>
      {/* Soft spotlight */}
      <div className="absolute" style={{top:"20%",right:"15%",width:400,height:400,borderRadius:"50%",background:"radial-gradient(circle, rgba(255,255,255,0.08), transparent 70%)"}}/>
    </div>
  );
}
