"use client";
export default function SandDunesHeroSection({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full relative overflow-hidden ${className??""}`} style={{background:"linear-gradient(to bottom, #fef3c7, #fde68a, #d97706 120%)"}}>
      <style>{`@keyframes sandShimmer{0%,100%{opacity:0.02}50%{opacity:0.06}}`}</style>
      {/* Dune curves */}
      <svg className="absolute bottom-0 left-0 right-0" style={{height:"60%"}} viewBox="0 0 1200 400" preserveAspectRatio="none">
        <path d="M0,300 Q150,200 300,280 T600,250 T900,290 T1200,260 L1200,400 L0,400Z" fill="rgba(217,119,6,0.15)"/>
        <path d="M0,340 Q200,260 400,320 T800,290 T1200,310 L1200,400 L0,400Z" fill="rgba(180,83,9,0.12)"/>
        <path d="M0,370 Q300,320 600,360 T1200,350 L1200,400 L0,400Z" fill="rgba(146,64,14,0.1)"/>
      </svg>
      {/* Heat shimmer */}
      <div className="absolute inset-0" style={{backgroundImage:"repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.02) 3px, rgba(255,255,255,0.02) 4px)",animation:"sandShimmer 4s ease-in-out infinite"}}/>
      {/* Sun */}
      <div className="absolute" style={{top:"8%",right:"15%",width:80,height:80,borderRadius:"50%",background:"radial-gradient(circle, rgba(251,191,36,0.4), rgba(251,191,36,0.1) 60%, transparent 70%)"}}/>
    </div>
  );
}
