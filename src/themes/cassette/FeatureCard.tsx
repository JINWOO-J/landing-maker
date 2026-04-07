"use client";
import { useState } from "react";
export default function CassetteFeatureCard({ title, description, color, accentColor, index }: { title:string;description:string;color:string;accentColor:string;index:number }) {
  const [h, setH] = useState(false);
  const sides = ["A","A","B","B"];
  return (
    <div className="relative rounded-lg p-5 transition-all duration-200" style={{background:h?"rgba(255,255,255,0.04)":"rgba(255,255,255,0.01)",border:`1px solid ${h?"rgba(255,255,255,0.12)":"rgba(255,255,255,0.04)"}`,fontFamily:"monospace"}} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}>
      <div className="flex items-center gap-2 mb-3">
        <div className="text-[10px] px-1.5 py-0.5 rounded" style={{background:`${color}20`,color}}>{sides[index%4]} SIDE</div>
        <div className="text-[10px]" style={{color:"rgba(255,255,255,0.2)"}}>TRACK {index+1}</div>
      </div>
      <h3 className="text-sm font-bold mb-2" style={{color:h?color:"rgba(255,255,255,0.8)"}}>{title}</h3>
      <p className="text-xs leading-relaxed" style={{color:"rgba(255,255,255,0.3)"}}>{description}</p>
    </div>
  );
}
