"use client";
import { useState } from "react";
export default function ConstellationFeatureCard({ title, description, color, accentColor, index }: { title:string;description:string;color:string;accentColor:string;index:number }) {
  const [h, setH] = useState(false);
  return (
    <div className="relative rounded-xl p-6 transition-all duration-300" style={{background:h?`${color}08`:"rgba(255,255,255,0.02)",border:`1px solid ${h?`${color}25`:"rgba(255,255,255,0.05)"}`}} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}>
      <svg width="36" height="36" viewBox="0 0 36 36" className="mb-4">
        <circle cx="18" cy="8" r="2" fill={color} opacity={h?0.8:0.3}/><circle cx="8" cy="28" r="2" fill={color} opacity={h?0.8:0.3}/><circle cx="28" cy="28" r="2" fill={color} opacity={h?0.8:0.3}/>
        <line x1="18" y1="8" x2="8" y2="28" stroke={color} strokeWidth="0.5" opacity={h?0.5:0.15}/><line x1="18" y1="8" x2="28" y2="28" stroke={color} strokeWidth="0.5" opacity={h?0.5:0.15}/><line x1="8" y1="28" x2="28" y2="28" stroke={color} strokeWidth="0.5" opacity={h?0.5:0.15}/>
      </svg>
      <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>
      <p className="text-sm leading-relaxed" style={{color:"rgba(255,255,255,0.4)"}}>{description}</p>
    </div>
  );
}
