"use client";
import { useState } from "react";
export default function GrainFilmFeatureCard({ title, description, color, accentColor, index }: { title:string;description:string;color:string;accentColor:string;index:number }) {
  const [h, setH] = useState(false);
  return (
    <div className="relative rounded p-6 transition-all duration-300" style={{background:h?"rgba(255,255,255,0.04)":"rgba(255,255,255,0.01)",border:`1px solid ${h?"rgba(255,255,255,0.08)":"rgba(255,255,255,0.03)"}`}} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}>
      <div className="text-xs tracking-[0.2em] uppercase mb-3" style={{color:"rgba(251,191,36,0.4)"}}>No.{String(index+1).padStart(2,"0")}</div>
      <h3 className="text-lg font-semibold mb-2" style={{color:"#d6d3d1"}}>{title}</h3>
      <p className="text-sm leading-relaxed" style={{color:"#78716c"}}>{description}</p>
    </div>
  );
}
