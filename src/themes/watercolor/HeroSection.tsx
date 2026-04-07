"use client";

export default function WatercolorHeroSection({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full relative overflow-hidden ${className ?? ""}`}>
      <style>{`
        @keyframes wcBlob1 { 0%, 100% { transform: translate(0,0) scale(1) rotate(0deg); } 33% { transform: translate(30px,-20px) scale(1.15) rotate(5deg); } 66% { transform: translate(-20px,30px) scale(0.9) rotate(-3deg); } }
        @keyframes wcBlob2 { 0%, 100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-40px,20px) scale(1.1); } }
        @keyframes wcBlob3 { 0%, 100% { transform: translate(0,0) rotate(0deg); } 50% { transform: translate(20px,-30px) rotate(8deg); } }
      `}</style>

      {/* Paper texture base */}
      <div className="absolute inset-0" style={{ background: "#faf8f5" }} />
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.8' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23n)'/%3E%3C/svg%3E\")",
      }} />

      {/* Watercolor blobs */}
      <div className="absolute rounded-full" style={{
        width: 500, height: 500, top: "-5%", right: "-8%",
        background: "radial-gradient(ellipse, rgba(244,114,182,0.2) 0%, rgba(244,114,182,0.08) 40%, transparent 70%)",
        filter: "blur(30px)", animation: "wcBlob1 20s ease-in-out infinite",
      }} />
      <div className="absolute rounded-full" style={{
        width: 400, height: 400, bottom: "5%", left: "5%",
        background: "radial-gradient(ellipse, rgba(96,165,250,0.18) 0%, rgba(96,165,250,0.06) 40%, transparent 70%)",
        filter: "blur(35px)", animation: "wcBlob2 25s ease-in-out infinite",
      }} />
      <div className="absolute rounded-full" style={{
        width: 350, height: 350, top: "30%", left: "40%",
        background: "radial-gradient(ellipse, rgba(167,139,250,0.15) 0%, rgba(167,139,250,0.05) 40%, transparent 70%)",
        filter: "blur(40px)", animation: "wcBlob3 18s ease-in-out infinite",
      }} />

      {/* Splatter accents */}
      <div className="absolute" style={{
        top: "18%", right: "25%", width: 120, height: 120, borderRadius: "60% 40% 50% 50%",
        background: "rgba(251,191,36,0.12)", filter: "blur(15px)", transform: "rotate(25deg)",
      }} />
      <div className="absolute" style={{
        bottom: "25%", right: "15%", width: 80, height: 80, borderRadius: "40% 60% 50% 50%",
        background: "rgba(52,211,153,0.1)", filter: "blur(12px)", transform: "rotate(-15deg)",
      }} />
    </div>
  );
}
