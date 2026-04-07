"use client";
import { useState } from "react";
export default function MarbleFeatureCard({ title, description, color, accentColor, index }: { title:string;description:string;color:string;accentColor:string;index:number }) {
  const [h, setH] = useState(false);
  return (
    <div className="relative rounded-xl p-6 transition-all duration-300" style={{background:h?"rgba(0,0,0,0.02)":"transparent",border:`1px solid ${h?`${color}20`:"rgba(0,0,0,0.06)"}`,boxShadow:h?"0 4px 20px rgba(0,0,0,0.04)":"none"}} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}>
      <div className="w-10 h-10 rounded-full mb-4 flex items-center justify-center" style={{background:`linear-gradient(135deg, ${color}15, ${accentColor}10)`,border:`1px solid ${color}20`}}>
        <div className="w-3 h-3 rounded-full" style={{background:color,opacity:h?0.6:0.3}}/>
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm leading-relaxed opacity-40">{description}</p>
    </div>
  );
}
