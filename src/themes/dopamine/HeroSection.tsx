"use client";
export default function DopamineHeroSection({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full relative overflow-hidden ${className??""}`} style={{background:"#fef9c3"}}>
      <style>{`@keyframes dopBounce{0%,100%{transform:translateY(0) scale(1)}50%{transform:translateY(-10px) scale(1.05)}}`}</style>
      {/* Bright blobs */}
      <div className="absolute rounded-full" style={{top:"10%",right:"10%",width:250,height:250,background:"#a3e635",filter:"blur(60px)",opacity:0.4}}/>
      <div className="absolute rounded-full" style={{top:"40%",right:"25%",width:200,height:200,background:"#f472b6",filter:"blur(50px)",opacity:0.35}}/>
      <div className="absolute rounded-full" style={{bottom:"15%",right:"8%",width:180,height:180,background:"#38bdf8",filter:"blur(45px)",opacity:0.3}}/>
      {/* Bouncing shapes */}
      {[{t:"20%",l:"70%",bg:"#f43f5e",s:50,d:0},{t:"55%",l:"80%",bg:"#8b5cf6",s:35,d:0.5},{t:"35%",l:"60%",bg:"#f97316",s:40,d:1}].map((s,i)=>(
        <div key={i} className="absolute rounded-2xl" style={{top:s.t,left:s.l,width:s.s,height:s.s,background:s.bg,animation:`dopBounce ${2+i*0.3}s ease-in-out ${s.d}s infinite`,boxShadow:`0 4px 15px ${s.bg}40`}}/>
      ))}
    </div>
  );
}
