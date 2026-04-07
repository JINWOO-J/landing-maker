"use client";
import { useState } from "react";
export default function DnaHelixFeatureCard({ title, description, color, accentColor, index }: { title:string;description:string;color:string;accentColor:string;index:number }) {
  const [h, setH] = useState(false);
  return (
    <div className="relative rounded-xl p-6 transition-all duration-300" style={{background:h?`${color}08`:"rgba(255,255,255,0.02)",border:`1px solid ${h?`${color}25`:"rgba(255,255,255,0.05)"}`}} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}>
      <div className="flex gap-1.5 mb-4">{[color,accentColor,color,accentColor].map((c,i)=><div key={i} className="w-2.5 h-2.5 rounded-full" style={{background:c,opacity:h?0.6:0.2,transform:`translateY(${Math.sin(i)*4}px)`}}/>)}</div>
      <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>
      <p className="text-sm leading-relaxed" style={{color:"rgba(255,255,255,0.4)"}}>{description}</p>
    </div>
  );
}
