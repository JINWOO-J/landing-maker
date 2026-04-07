"use client";
export default function BentoGridHeroSection({ className }: { className?: string }) {
  const cells = [{w:2,h:2,bg:"rgba(99,102,241,0.06)"},{w:1,h:1,bg:"rgba(244,63,94,0.06)"},{w:1,h:1,bg:"rgba(59,130,246,0.06)"},{w:1,h:2,bg:"rgba(16,185,129,0.06)"},{w:2,h:1,bg:"rgba(249,115,22,0.06)"},{w:1,h:1,bg:"rgba(168,85,247,0.06)"}];
  return (
    <div className={`w-full h-full relative overflow-hidden ${className??""}`}>
      <div className="absolute" style={{top:"10%",right:"5%",width:"45%",maxWidth:420,display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:8,padding:8}}>
        {cells.map((c,i)=>(
          <div key={i} className="rounded-2xl" style={{gridColumn:`span ${c.w}`,gridRow:`span ${c.h}`,background:c.bg,border:"1px solid rgba(255,255,255,0.04)",minHeight:c.h*60}}/>
        ))}
      </div>
    </div>
  );
}
