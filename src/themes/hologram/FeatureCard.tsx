"use client";
import { useState } from "react";
export default function HologramFeatureCard({ title, description, color, accentColor, index }: { title:string;description:string;color:string;accentColor:string;index:number }) {
  const [h, setH] = useState(false);
  return (
    <div className="relative rounded-lg p-5 transition-all duration-200 overflow-hidden" style={{background:h?`${color}06`:"rgba(6,182,212,0.02)",border:`1px solid ${h?`${color}30`:"rgba(6,182,212,0.08)"}`,boxShadow:h?`0 0 20px ${color}10, inset 0 0 20px ${color}05`:"none"}} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}>
      {/* Scan lines */}
      <div className="absolute inset-0 pointer-events-none" style={{backgroundImage:"repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(6,182,212,0.02) 2px, rgba(6,182,212,0.02) 3px)"}}/>
      <div className="relative">
        <div className="w-8 h-8 rounded mb-3 flex items-center justify-center" style={{border:`1px solid ${color}30`}}>
          <div className="w-3 h-3 rounded-sm" style={{background:color,opacity:h?0.5:0.2}}/>
        </div>
        <h3 className="text-sm font-bold mb-2" style={{color:h?color:"rgba(255,255,255,0.7)"}}>{title}</h3>
        <p className="text-xs leading-relaxed" style={{color:"rgba(255,255,255,0.3)"}}>{description}</p>
      </div>
    </div>
  );
}
