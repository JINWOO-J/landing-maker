"use client";
import { useState } from "react";
export default function KineticTypeFeatureCard({ title, description, color, accentColor, index }: { title:string;description:string;color:string;accentColor:string;index:number }) {
  const [h, setH] = useState(false);
  return (
    <div className="relative p-6 transition-all duration-200 overflow-hidden" style={{background:h?`${color}06`:"transparent",borderBottom:`2px solid ${h?color:"rgba(255,255,255,0.06)"}`}} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}>
      <div className="text-4xl font-black mb-2 transition-all duration-300" style={{color:h?color:"inherit",opacity:h?0.8:0.15,letterSpacing:h?"-0.02em":"0.05em"}}>{String(index+1).padStart(2,"0")}</div>
      <h3 className="text-lg font-black uppercase tracking-wider mb-2">{title}</h3>
      <p className="text-sm leading-relaxed opacity-40">{description}</p>
    </div>
  );
}
