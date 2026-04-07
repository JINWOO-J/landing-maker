"use client";
export default function VaporwaveHeroSection({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full relative overflow-hidden ${className??""}`} style={{background:"linear-gradient(to bottom, #1a0030, #2d1b69, #e040fb 120%)"}}>
      <style>{`@keyframes vpGrid{0%{transform:rotateX(60deg) translateY(0)}100%{transform:rotateX(60deg) translateY(50px)}}`}</style>
      {/* Sun */}
      <div className="absolute" style={{left:"50%",top:"30%",transform:"translateX(-50%)",width:180,height:180,borderRadius:"50%",background:"linear-gradient(to bottom, #ff6ec7, #ff9a56, #ffd93d)",opacity:0.6}}>
        {[0.5,0.6,0.7,0.8,0.88].map((p,i)=><div key={i} className="absolute left-0 right-0" style={{top:`${p*100}%`,height:3+i,background:"#1a0030"}}/>)}
      </div>
      {/* Grid floor */}
      <div className="absolute left-0 right-0 bottom-0" style={{height:"35%",perspective:"400px",perspectiveOrigin:"50% 0%"}}>
        <div style={{width:"200%",height:"300%",marginLeft:"-50%",transform:"rotateX(60deg)",transformOrigin:"top center",backgroundImage:"linear-gradient(to right, rgba(224,64,251,0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(224,64,251,0.3) 1px, transparent 1px)",backgroundSize:"50px 50px",animation:"vpGrid 2s linear infinite"}}/>
      </div>
      {/* Palm silhouettes */}
      <div className="absolute select-none pointer-events-none" style={{bottom:"30%",left:"5%",fontSize:"clamp(80px,12vw,150px)",color:"rgba(0,0,0,0.15)",transform:"scaleX(-1)"}}>🌴</div>
      <div className="absolute select-none pointer-events-none" style={{bottom:"32%",right:"8%",fontSize:"clamp(60px,10vw,120px)",color:"rgba(0,0,0,0.1)"}}>🌴</div>
    </div>
  );
}
