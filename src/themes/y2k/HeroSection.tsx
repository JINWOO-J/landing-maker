"use client";
export default function Y2kHeroSection({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full relative overflow-hidden ${className??""}`} style={{background:"linear-gradient(135deg, #e0c3fc, #8ec5fc, #f093fb)"}}>
      <style>{`@keyframes y2kShine{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}`}</style>
      {/* Chrome/iridescent blob */}
      <div className="absolute" style={{top:"15%",right:"10%",width:250,height:250,borderRadius:"40% 60% 50% 50%",background:"linear-gradient(135deg, #c084fc, #60a5fa, #f472b6, #a78bfa, #38bdf8)",backgroundSize:"300% 300%",animation:"y2kShine 6s ease infinite",opacity:0.4,filter:"blur(20px)"}}/>
      {/* Bubble shapes */}
      {[{t:"25%",r:"20%",s:80},{t:"50%",r:"30%",s:50},{t:"60%",r:"12%",s:35}].map((b,i)=>(
        <div key={i} className="absolute rounded-full" style={{top:b.t,right:b.r,width:b.s,height:b.s,background:"linear-gradient(135deg, rgba(255,255,255,0.4), rgba(255,255,255,0.1))",border:"1px solid rgba(255,255,255,0.3)",backdropFilter:"blur(4px)"}}/>
      ))}
      {/* Star sparkles */}
      {Array.from({length:8}).map((_,i)=>(
        <div key={i} className="absolute" style={{left:`${(i*31+15)%90}%`,top:`${(i*23+10)%80}%`,fontSize:8+i%3*4,color:"rgba(255,255,255,0.5)",transform:`rotate(${i*45}deg)`}}>✦</div>
      ))}
    </div>
  );
}
