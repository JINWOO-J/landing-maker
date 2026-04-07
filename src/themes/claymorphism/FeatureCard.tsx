"use client";
import { useState } from "react";
export default function ClaymorphismFeatureCard({ title, description, color, accentColor, index }: { title:string;description:string;color:string;accentColor:string;index:number }) {
  const [h, setH] = useState(false);
  return (
    <div className="relative p-6 transition-all duration-300" style={{borderRadius:24,background:"linear-gradient(145deg, rgba(255,255,255,0.6), rgba(240,235,245,0.8))",boxShadow:h?"12px 12px 24px rgba(0,0,0,0.1), -6px -6px 16px rgba(255,255,255,0.7), inset 3px 3px 6px rgba(255,255,255,0.5)":"8px 8px 16px rgba(0,0,0,0.07), -4px -4px 12px rgba(255,255,255,0.6)"}} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}>
      <div className="w-12 h-12 rounded-2xl mb-4" style={{background:`linear-gradient(145deg, ${color}30, ${color}15)`,boxShadow:`inset 3px 3px 6px ${color}10, inset -3px -3px 6px rgba(255,255,255,0.5)`}}/>
      <h3 className="text-lg font-bold mb-2" style={{color:"#2d2640"}}>{title}</h3>
      <p className="text-sm leading-relaxed" style={{color:"#6b6080"}}>{description}</p>
    </div>
  );
}
