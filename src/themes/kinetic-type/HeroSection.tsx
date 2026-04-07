"use client";
export default function KineticTypeHeroSection({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full relative overflow-hidden ${className??""}`}>
      <style>{`
        @keyframes ktScroll{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
        @keyframes ktFade{0%,100%{opacity:0.03}50%{opacity:0.06}}
      `}</style>
      {/* Scrolling text bands */}
      {[{t:"15%",s:80,d:"6s",text:"DESIGN · CREATE · BUILD · LAUNCH · "},{t:"40%",s:60,d:"8s",text:"THEMES · COLORS · STYLE · MOOD · "},{t:"65%",s:100,d:"10s",text:"PIXEL PERFECT · "}].map((band,i)=>(
        <div key={i} className="absolute left-0 whitespace-nowrap select-none pointer-events-none" style={{top:band.t,fontSize:band.s,fontWeight:900,color:"currentColor",opacity:0.03,animation:`ktScroll ${band.d} linear infinite`}}>
          <span>{band.text.repeat(10)}</span>
        </div>
      ))}
      {/* Vertical accent line */}
      <div className="absolute" style={{right:"30%",top:"10%",bottom:"10%",width:2,background:"currentColor",opacity:0.04,animation:"ktFade 4s ease-in-out infinite"}}/>
    </div>
  );
}
