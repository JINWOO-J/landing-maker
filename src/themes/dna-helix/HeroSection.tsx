"use client";
export default function DnaHelixHeroSection({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full relative overflow-hidden ${className??""}`} style={{background:"#040818"}}>
      <style>{`@keyframes helixSpin{0%{transform:rotateY(0deg)}100%{transform:rotateY(360deg)}}`}</style>
      <svg className="absolute" style={{right:"10%",top:"10%",height:"80%",width:200,opacity:0.15}} viewBox="0 0 100 500">
        {Array.from({length:25}).map((_,i)=>{
          const y=i*20; const x1=50+Math.sin(i*0.5)*35; const x2=50-Math.sin(i*0.5)*35;
          return <g key={i}>
            <circle cx={x1} cy={y} r="3" fill="#06b6d4" opacity={0.4+Math.sin(i*0.5)*0.3}/>
            <circle cx={x2} cy={y} r="3" fill="#a855f7" opacity={0.4+Math.cos(i*0.5)*0.3}/>
            {i%2===0 && <line x1={x1} y1={y} x2={x2} y2={y} stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>}
          </g>;
        })}
        {/* Backbone curves */}
        <path d={Array.from({length:25}).map((_,i)=>`${i===0?"M":"L"}${50+Math.sin(i*0.5)*35},${i*20}`).join(" ")} fill="none" stroke="#06b6d4" strokeWidth="1" opacity="0.2"/>
        <path d={Array.from({length:25}).map((_,i)=>`${i===0?"M":"L"}${50-Math.sin(i*0.5)*35},${i*20}`).join(" ")} fill="none" stroke="#a855f7" strokeWidth="1" opacity="0.2"/>
      </svg>
      <div className="absolute pointer-events-none" style={{top:"40%",right:"15%",width:200,height:200,borderRadius:"50%",background:"radial-gradient(circle,rgba(6,182,212,0.04) 0%,transparent 70%)"}}/>
    </div>
  );
}
