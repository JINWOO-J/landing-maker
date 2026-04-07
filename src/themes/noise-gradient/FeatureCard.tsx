"use client";
import { useState } from "react";
export default function NoiseGradientFeatureCard({ title, description, color, accentColor, index }: { title:string;description:string;color:string;accentColor:string;index:number }) {
  const [h, setH] = useState(false);
  return (
    <div className="relative rounded-2xl p-6 transition-all duration-300 overflow-hidden" style={{background:h?"rgba(255,255,255,0.12)":"rgba(255,255,255,0.06)",border:`1px solid ${h?"rgba(255,255,255,0.2)":"rgba(255,255,255,0.08)"}`,backdropFilter:"blur(8px)"}} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}>
      <div className="w-10 h-10 rounded-xl mb-4" style={{background:`linear-gradient(135deg, ${color}, ${accentColor})`,opacity:h?0.7:0.4}}/>
      <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-white/50">{description}</p>
    </div>
  );
}
