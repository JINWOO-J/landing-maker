"use client";
import { useState } from "react";
export default function DarkAcademiaFeatureCard({ title, description, color, accentColor, index }: { title:string;description:string;color:string;accentColor:string;index:number }) {
  const [h, setH] = useState(false);
  return (
    <div className="relative p-6 transition-all duration-300" style={{fontFamily:"Georgia, serif",background:h?"rgba(180,160,120,0.04)":"transparent",borderLeft:`2px solid ${h?"rgba(180,160,120,0.2)":"rgba(180,160,120,0.06)"}`}} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}>
      <div className="text-xs italic mb-2" style={{color:"rgba(180,160,120,0.3)"}}>Chapter {["I","II","III","IV"][index%4]}</div>
      <h3 className="text-lg font-bold mb-2" style={{color:"#d4c5a0"}}>{title}</h3>
      <p className="text-sm leading-relaxed" style={{color:"rgba(180,160,120,0.4)"}}>{description}</p>
    </div>
  );
}
