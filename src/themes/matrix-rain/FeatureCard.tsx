"use client";
import { useState } from "react";
export default function MatrixRainFeatureCard({ title, description, color, accentColor, index }: { title:string;description:string;color:string;accentColor:string;index:number }) {
  const [h, setH] = useState(false);
  return (
    <div className="relative p-5 transition-all duration-200" style={{fontFamily:"monospace",background:h?"rgba(0,255,0,0.03)":"rgba(0,255,0,0.01)",border:`1px solid ${h?"rgba(0,255,0,0.2)":"rgba(0,255,0,0.05)"}`,borderRadius:4}} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}>
      <div className="text-[10px] mb-2" style={{color:"rgba(0,255,0,0.3)"}}>{">"} node_{index}</div>
      <h3 className="text-sm font-bold mb-2" style={{color:h?"#4ade80":"#22c55e"}}>{title}</h3>
      <p className="text-xs leading-relaxed" style={{color:"rgba(0,255,0,0.3)"}}>{description}</p>
    </div>
  );
}
