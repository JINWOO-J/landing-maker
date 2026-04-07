"use client";
import { useState } from "react";
export default function CoralReefFeatureCard({ title, description, color, accentColor, index }: { title:string;description:string;color:string;accentColor:string;index:number }) {
  const [h, setH] = useState(false);
  const emojis = ["🐠","🐙","🦀","🐚"];
  return (
    <div className="relative rounded-2xl p-6 transition-all duration-300" style={{background:h?`${color}0a`:"rgba(255,255,255,0.02)",border:`1px solid ${h?`${color}25`:"rgba(255,255,255,0.05)"}`}} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}>
      <div className="text-2xl mb-3">{emojis[index%4]}</div>
      <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>
      <p className="text-sm leading-relaxed" style={{color:"rgba(255,255,255,0.4)"}}>{description}</p>
    </div>
  );
}
