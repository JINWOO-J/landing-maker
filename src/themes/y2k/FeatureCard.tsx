"use client";
import { useState } from "react";
export default function Y2kFeatureCard({ title, description, color, accentColor, index }: { title:string;description:string;color:string;accentColor:string;index:number }) {
  const [h, setH] = useState(false);
  return (
    <div className="relative rounded-2xl p-6 transition-all duration-300 overflow-hidden" style={{background:h?"rgba(255,255,255,0.25)":"rgba(255,255,255,0.15)",border:"1px solid rgba(255,255,255,0.3)",backdropFilter:"blur(12px)",boxShadow:h?"0 8px 32px rgba(192,132,252,0.2)":"none"}} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}>
      <div className="text-xs mb-2" style={{color:"rgba(139,92,246,0.8)"}}>{"✦ ".repeat(index+1)}</div>
      <h3 className="text-lg font-bold mb-2" style={{color:"#4c1d95"}}>{title}</h3>
      <p className="text-sm leading-relaxed" style={{color:"#6d28d9"}}>{description}</p>
    </div>
  );
}
