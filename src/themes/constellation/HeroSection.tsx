"use client";
import { useMemo } from "react";
export default function ConstellationHeroSection({ className }: { className?: string }) {
  const stars = useMemo(() => {
    let s=99; const r=()=>{s=(s*16807)%2147483647;return s/2147483647};
    return Array.from({length:50},()=>({x:r()*100,y:r()*100,size:0.5+r()*2,brightness:0.2+r()*0.6,delay:r()*4}));
  },[]);
  const lines = useMemo(() => {
    const l: {x1:number;y1:number;x2:number;y2:number}[] = [];
    for(let i=0;i<12;i++){const a=stars[i],b=stars[i+1];if(a&&b)l.push({x1:a.x,y1:a.y,x2:b.x,y2:b.y});}
    return l;
  },[stars]);
  return (
    <div className={`w-full h-full relative overflow-hidden ${className??""}`} style={{background:"#030318"}}>
      <style>{`@keyframes twinkle{0%,100%{opacity:0.3}50%{opacity:1}}`}</style>
      <svg className="absolute inset-0 w-full h-full">
        {lines.map((l,i)=><line key={i} x1={`${l.x1}%`} y1={`${l.y1}%`} x2={`${l.x2}%`} y2={`${l.y2}%`} stroke="rgba(165,180,252,0.08)" strokeWidth="0.5"/>)}
      </svg>
      {stars.map((st,i)=><div key={i} className="absolute rounded-full bg-white" style={{left:`${st.x}%`,top:`${st.y}%`,width:st.size,height:st.size,opacity:st.brightness,animation:`twinkle ${2+i%3}s ease-in-out ${st.delay}s infinite`}}/>)}
    </div>
  );
}
