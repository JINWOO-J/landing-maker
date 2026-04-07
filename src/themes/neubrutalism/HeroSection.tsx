"use client";
export default function NeubrutalismHeroSection({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full relative overflow-hidden ${className??""}`} style={{background:"#f0f0f0"}}>
      {/* Bold offset cards */}
      <div className="absolute" style={{top:"15%",right:"8%",width:280,height:200,background:"#a3e635",border:"3px solid #000",borderRadius:12,boxShadow:"6px 6px 0 #000",transform:"rotate(-2deg)"}}/>
      <div className="absolute" style={{top:"25%",right:"15%",width:220,height:160,background:"#fbbf24",border:"3px solid #000",borderRadius:12,boxShadow:"6px 6px 0 #000",transform:"rotate(3deg)"}}/>
      <div className="absolute" style={{top:"45%",right:"10%",width:180,height:120,background:"#f472b6",border:"3px solid #000",borderRadius:12,boxShadow:"6px 6px 0 #000",transform:"rotate(-1deg)"}}>
        <div className="p-4 space-y-2">
          <div className="h-3 rounded-full bg-black/10" style={{width:"70%"}}/>
          <div className="h-2 rounded-full bg-black/10" style={{width:"90%"}}/>
          <div className="h-2 rounded-full bg-black/10" style={{width:"50%"}}/>
        </div>
      </div>
      {/* Decorative circles */}
      <div className="absolute" style={{bottom:"20%",left:"10%",width:60,height:60,borderRadius:"50%",background:"#60a5fa",border:"3px solid #000"}}/>
      <div className="absolute" style={{top:"10%",left:"20%",width:40,height:40,borderRadius:"50%",background:"#f87171",border:"3px solid #000"}}/>
    </div>
  );
}
