"use client";
export default function DarkAcademiaHeroSection({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full relative overflow-hidden ${className??""}`} style={{background:"#1a1510"}}>
      {/* Parchment texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage:"repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(180,160,120,0.5) 2px, rgba(180,160,120,0.5) 3px)",backgroundSize:"3px 5px"}}/>
      {/* Book pages silhouette */}
      <div className="absolute" style={{top:"15%",right:"8%",width:240,height:320,background:"linear-gradient(to right, #2a2218, #1e1a12)",borderRadius:"2px 8px 8px 2px",boxShadow:"-4px 0 12px rgba(0,0,0,0.3)"}}>
        <div className="absolute inset-y-4 left-4 right-4 space-y-3 pt-6">
          {Array.from({length:10}).map((_,i)=><div key={i} className="h-1 rounded-full" style={{width:`${50+(i*17)%40}%`,background:"rgba(180,160,120,0.06)"}}/>)}
        </div>
        {/* Spine */}
        <div className="absolute left-0 top-0 bottom-0 w-3" style={{background:"linear-gradient(to right, rgba(180,160,120,0.08), transparent)"}}/>
      </div>
      {/* Candle glow */}
      <div className="absolute" style={{bottom:"20%",left:"15%",width:200,height:200,borderRadius:"50%",background:"radial-gradient(circle, rgba(251,191,36,0.06), transparent 70%)"}}/>
      {/* Decorative quote */}
      <div className="absolute select-none pointer-events-none" style={{bottom:"10%",right:"10%",fontFamily:"Georgia, serif",fontSize:60,color:"rgba(180,160,120,0.05)",lineHeight:1}}>"</div>
    </div>
  );
}
