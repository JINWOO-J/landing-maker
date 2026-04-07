"use client";
import { useState } from "react";
export default function ChalkboardFeatureCard({ title, description, color, accentColor, index }: { title:string;description:string;color:string;accentColor:string;index:number }) {
  const [h, setH] = useState(false);
  return (
    <div className="relative p-5 transition-all duration-200" style={{background:h?"rgba(255,255,255,0.03)":"transparent",border:`1px dashed ${h?"rgba(255,255,255,0.15)":"rgba(255,255,255,0.05)"}`,borderRadius:4}} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}>
      <div className="text-xs mb-2" style={{color:"rgba(251,191,36,0.4)",fontFamily:"monospace"}}>#{index+1}</div>
      <h3 className="text-base font-bold mb-2" style={{color:"rgba(255,255,255,0.75)",fontFamily:"'Comic Sans MS', cursive, sans-serif"}}>{title}</h3>
      <p className="text-xs leading-relaxed" style={{color:"rgba(255,255,255,0.3)",fontFamily:"monospace"}}>{description}</p>
    </div>
  );
}
