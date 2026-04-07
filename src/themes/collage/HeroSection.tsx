"use client";
export default function CollageHeroSection({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full relative overflow-hidden ${className??""}`} style={{background:"#faf5ef"}}>
      {/* Torn paper pieces */}
      <div className="absolute" style={{top:"12%",right:"8%",width:220,height:160,background:"#fff",border:"1px solid rgba(0,0,0,0.06)",transform:"rotate(3deg)",boxShadow:"2px 3px 8px rgba(0,0,0,0.06)",clipPath:"polygon(2% 0%, 98% 3%, 100% 97%, 3% 100%)"}}/>
      <div className="absolute" style={{top:"30%",right:"22%",width:180,height:130,background:"#fef3c7",border:"1px solid rgba(0,0,0,0.04)",transform:"rotate(-5deg)",boxShadow:"2px 3px 8px rgba(0,0,0,0.05)",clipPath:"polygon(0% 2%, 97% 0%, 100% 98%, 4% 100%)"}}/>
      <div className="absolute" style={{top:"50%",right:"10%",width:150,height:100,background:"#fce7f3",border:"1px solid rgba(0,0,0,0.04)",transform:"rotate(2deg)",boxShadow:"2px 3px 8px rgba(0,0,0,0.04)"}}/>
      {/* Tape strips */}
      <div className="absolute" style={{top:"10%",right:"15%",width:60,height:20,background:"rgba(251,191,36,0.3)",transform:"rotate(-15deg)"}}/>
      <div className="absolute" style={{top:"48%",right:"20%",width:50,height:18,background:"rgba(147,197,253,0.3)",transform:"rotate(8deg)"}}/>
      {/* Sticker */}
      <div className="absolute flex items-center justify-center" style={{bottom:"20%",right:"15%",width:60,height:60,borderRadius:"50%",background:"#fbbf24",border:"2px dashed rgba(0,0,0,0.1)",transform:"rotate(-10deg)",fontSize:24}}>⭐</div>
      {/* Handwritten-style lines */}
      <svg className="absolute" style={{bottom:"30%",left:"8%",opacity:0.06}} width="200" height="40"><path d="M0,20 Q50,5 100,20 T200,20" fill="none" stroke="black" strokeWidth="2"/></svg>
    </div>
  );
}
