"use client";
import { useState } from "react";
export default function SandDunesFeatureCard({ title, description, color, accentColor, index }: { title:string;description:string;color:string;accentColor:string;index:number }) {
  const [h, setH] = useState(false);
  return (
    <div className="relative rounded-xl p-6 transition-all duration-300" style={{background:h?`${color}10`:"rgba(255,255,255,0.3)",border:`1px solid ${h?`${color}30`:"rgba(0,0,0,0.06)"}`,backdropFilter:"blur(4px)"}} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}>
      <div className="w-10 h-1 rounded-full mb-4" style={{background:`linear-gradient(to right, ${color}, ${accentColor})`,opacity:h?0.6:0.3}}/>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm leading-relaxed opacity-40">{description}</p>
    </div>
  );
}
