"use client";
import { useState } from "react";
export default function BentoGridFeatureCard({ title, description, color, accentColor, index }: { title:string;description:string;color:string;accentColor:string;index:number }) {
  const [h, setH] = useState(false);
  return (
    <div className="relative rounded-2xl p-6 transition-all duration-300" style={{background:h?`${color}0a`:"rgba(255,255,255,0.03)",border:`1px solid ${h?`${color}20`:"rgba(255,255,255,0.06)"}`,boxShadow:h?"0 8px 30px rgba(0,0,0,0.08)":"none"}} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}>
      <div className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center" style={{background:`${color}12`}}><div className="w-4 h-4 rounded" style={{background:color,opacity:h?0.6:0.3}}/></div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm leading-relaxed opacity-50">{description}</p>
    </div>
  );
}
