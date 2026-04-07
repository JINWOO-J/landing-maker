"use client";
export default function CoralReefHeroSection({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full relative overflow-hidden ${className??""}`} style={{background:"linear-gradient(to bottom, #0c1222, #0a1a2e, #0c2233)"}}>
      <style>{`@keyframes coralSway{0%,100%{transform:rotate(0deg)}50%{transform:rotate(3deg)}}@keyframes bubble{0%{transform:translateY(0) scale(1);opacity:0.3}100%{transform:translateY(-200px) scale(0.5);opacity:0}}`}</style>
      {/* Coral branches */}
      <svg className="absolute bottom-0 left-0 right-0" style={{height:"45%",opacity:0.15}} viewBox="0 0 800 300" preserveAspectRatio="xMidYMax slice">
        {[{x:100,c:"#f472b6"},{x:250,c:"#fb923c"},{x:400,c:"#a78bfa"},{x:550,c:"#f87171"},{x:680,c:"#34d399"}].map((coral,i)=>(
          <g key={i} style={{animation:`coralSway ${4+i}s ease-in-out infinite`,transformOrigin:`${coral.x}px 300px`}}>
            <path d={`M${coral.x},300 Q${coral.x-20},200 ${coral.x-30},150 M${coral.x},300 Q${coral.x+10},220 ${coral.x+25},160 M${coral.x},300 Q${coral.x},230 ${coral.x-10},170`} fill="none" stroke={coral.c} strokeWidth="3" strokeLinecap="round"/>
          </g>
        ))}
      </svg>
      {/* Bubbles */}
      {Array.from({length:10}).map((_,i)=>(
        <div key={i} className="absolute rounded-full" style={{left:`${(i*23+10)%90}%`,bottom:`${(i*7)%30}%`,width:4+i%4,height:4+i%4,border:"1px solid rgba(255,255,255,0.08)",animation:`bubble ${5+i%4}s ease-in ${i*0.8}s infinite`}}/>
      ))}
      {/* Light rays from above */}
      <div className="absolute top-0 left-[30%] w-[40%] h-[60%] pointer-events-none" style={{background:"linear-gradient(to bottom, rgba(56,189,248,0.03), transparent)",filter:"blur(20px)"}}/>
    </div>
  );
}
