"use client";
export default function BauhausHeroSection({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full relative overflow-hidden ${className??""}`} style={{background:"#f5f0e8"}}>
      {/* Primary color blocks */}
      <div className="absolute" style={{top:"10%",right:"10%",width:200,height:200,background:"#dc2626",opacity:0.12}}/>
      <div className="absolute" style={{top:"30%",right:"25%",width:150,height:150,borderRadius:"50%",background:"#2563eb",opacity:0.1}}/>
      <div className="absolute" style={{top:"20%",right:"18%",width:120,height:120,background:"#eab308",opacity:0.1,transform:"rotate(45deg)"}}/>
      {/* Grid lines */}
      <div className="absolute" style={{top:"15%",left:"5%",right:"5%",height:2,background:"rgba(0,0,0,0.04)"}}/>
      <div className="absolute" style={{top:"65%",left:"5%",right:"5%",height:2,background:"rgba(0,0,0,0.04)"}}/>
      <div className="absolute" style={{top:"5%",left:"40%",width:2,bottom:"5%",background:"rgba(0,0,0,0.04)"}}/>
      {/* Typography */}
      <div className="absolute select-none pointer-events-none" style={{bottom:"8%",left:"5%",fontFamily:"system-ui",fontSize:"clamp(60px,8vw,120px)",fontWeight:900,color:"rgba(0,0,0,0.03)",letterSpacing:"-0.05em"}}>FORM</div>
    </div>
  );
}
