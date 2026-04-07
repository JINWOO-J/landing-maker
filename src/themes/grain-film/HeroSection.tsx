"use client";
export default function GrainFilmHeroSection({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full relative overflow-hidden ${className??""}`} style={{background:"#1c1917"}}>
      {/* Film grain overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.15] pointer-events-none"><filter id="grain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(#grain)"/></svg>
      {/* Muted photo frame */}
      <div className="absolute" style={{top:"15%",right:"8%",width:"35%",maxWidth:300,aspectRatio:"3/4",background:"linear-gradient(135deg, #292524, #1c1917)",border:"1px solid rgba(255,255,255,0.05)",borderRadius:4}}>
        <div className="absolute inset-3 rounded" style={{background:"linear-gradient(to bottom, rgba(120,100,80,0.08), rgba(80,60,40,0.12))"}}/>
      </div>
      {/* Light leak */}
      <div className="absolute" style={{top:0,right:0,width:"40%",height:"50%",background:"radial-gradient(ellipse at top right, rgba(251,191,36,0.06), transparent 70%)"}}/>
      {/* Film strip holes */}
      <div className="absolute left-[3%] top-0 bottom-0 flex flex-col gap-4 py-8">
        {Array.from({length:12}).map((_,i)=><div key={i} className="w-3 h-4 rounded-sm" style={{background:"rgba(255,255,255,0.03)"}}/>)}
      </div>
    </div>
  );
}
