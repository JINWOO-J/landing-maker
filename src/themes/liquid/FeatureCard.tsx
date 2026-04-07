"use client";
import { useState } from "react";
export default function LiquidFeatureCard({ title, description, color, accentColor, index }: { title:string;description:string;color:string;accentColor:string;index:number }) {
  const [h, setH] = useState(false);
  return (
    <div className="relative p-6 transition-all duration-500" style={{borderRadius:h?"30% 70% 60% 40%/50% 40% 60% 50%":"20px",background:h?`${color}0a`:"rgba(255,255,255,0.03)",border:`1px solid ${h?`${color}25`:"rgba(255,255,255,0.06)"}`}} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}>
      <div className="w-10 h-10 rounded-full mb-4" style={{background:`linear-gradient(135deg, ${color}30, ${accentColor}20)`}}/>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm leading-relaxed opacity-50">{description}</p>
    </div>
  );
}
