"use client";
import { useState } from "react";
export default function ArtDecoFeatureCard({ title, description, color, accentColor, index }: { title:string;description:string;color:string;accentColor:string;index:number }) {
  const [h, setH] = useState(false);
  return (
    <div className="relative p-6 transition-all duration-200 text-center" style={{background:h?`${color}08`:"rgba(255,255,255,0.02)",border:`1px solid ${h?`${color}30`:"rgba(255,255,255,0.06)"}`}} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}>
      <div className="mx-auto mb-3 h-px" style={{width:"60%",background:`linear-gradient(to right, transparent, ${color}40, transparent)`}}/>
      <div className="text-xs tracking-[0.3em] uppercase mb-2" style={{color:`${color}80`}}>{"✦".repeat(index+1)}</div>
      <h3 className="text-lg font-bold mb-2" style={{fontFamily:"Georgia, serif"}}>{title}</h3>
      <p className="text-sm leading-relaxed opacity-40">{description}</p>
      <div className="mx-auto mt-3 h-px" style={{width:"60%",background:`linear-gradient(to right, transparent, ${color}40, transparent)`}}/>
    </div>
  );
}
