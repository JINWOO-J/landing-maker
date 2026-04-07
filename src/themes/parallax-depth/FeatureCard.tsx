"use client";
import { useState } from "react";
export default function ParallaxDepthFeatureCard({ title, description, color, accentColor, index }: { title:string;description:string;color:string;accentColor:string;index:number }) {
  const [h, setH] = useState(false);
  return (
    <div className="relative rounded-2xl p-6 transition-all duration-300" style={{background:h?`${color}08`:"rgba(255,255,255,0.02)",border:`1px solid ${h?`${color}20`:"rgba(255,255,255,0.05)"}`,transform:h?"translateY(-6px) scale(1.02)":"none",boxShadow:h?`0 20px 40px ${color}10`:"none"}} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}>
      <div className="flex gap-2 mb-4">{Array.from({length:3}).map((_,i)=><div key={i} className="rounded-full transition-all duration-300" style={{width:8+i*4,height:8+i*4,background:color,opacity:h?0.15+i*0.1:0.05+i*0.03}}/>)}</div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm leading-relaxed opacity-50">{description}</p>
    </div>
  );
}
