"use client";
export default function HologramHeroSection({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full relative overflow-hidden ${className??""}`} style={{background:"#020210"}}>
      <style>{`
        @keyframes holoRotate{0%{transform:rotateY(0deg) rotateX(15deg)}100%{transform:rotateY(360deg) rotateX(15deg)}}
        @keyframes holoFlicker{0%,100%{opacity:0.15}30%{opacity:0.2}31%{opacity:0.05}32%{opacity:0.2}70%{opacity:0.18}71%{opacity:0.08}72%{opacity:0.15}}
        @keyframes holoScan{0%{transform:translateY(-100%)}100%{transform:translateY(100vh)}}
      `}</style>
      {/* Holographic projection base */}
      <div className="absolute" style={{bottom:"15%",left:"50%",transform:"translateX(-50%)",width:200,height:4,borderRadius:"50%",background:"radial-gradient(ellipse, rgba(6,182,212,0.3), transparent 70%)",boxShadow:"0 0 40px rgba(6,182,212,0.15)"}}/>
      {/* Hologram wireframe cube */}
      <div className="absolute" style={{top:"50%",right:"18%",transform:"translateY(-50%)",perspective:600,animation:"holoFlicker 5s ease-in-out infinite"}}>
        <svg width="200" height="200" viewBox="0 0 200 200" style={{animation:"holoRotate 10s linear infinite"}}>
          {/* Front face */}
          <rect x="40" y="40" width="120" height="120" fill="none" stroke="rgba(6,182,212,0.3)" strokeWidth="1"/>
          {/* Back face */}
          <rect x="60" y="20" width="120" height="120" fill="none" stroke="rgba(6,182,212,0.15)" strokeWidth="0.5"/>
          {/* Connecting edges */}
          {[[40,40,60,20],[160,40,180,20],[40,160,60,140],[160,160,180,140]].map(([x1,y1,x2,y2],i)=>(
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(6,182,212,0.2)" strokeWidth="0.5"/>
          ))}
          {/* Scan lines inside */}
          {Array.from({length:6}).map((_,i)=>(
            <line key={`s${i}`} x1="45" y1={50+i*20} x2="155" y2={50+i*20} stroke="rgba(6,182,212,0.08)" strokeWidth="0.5"/>
          ))}
        </svg>
      </div>
      {/* Scan line */}
      <div className="absolute left-0 right-0 pointer-events-none" style={{height:2,background:"linear-gradient(to bottom, transparent, rgba(6,182,212,0.06), transparent)",animation:"holoScan 3s linear infinite"}}/>
      {/* Ambient glow */}
      <div className="absolute pointer-events-none" style={{top:"40%",right:"15%",width:250,height:250,borderRadius:"50%",background:"radial-gradient(circle, rgba(6,182,212,0.04) 0%, transparent 70%)"}}/>
    </div>
  );
}
