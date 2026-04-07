"use client";
import { useState } from "react";
const ROTATIONS = [-2, 1.5, -1, 2.5];
export default function CollageFeatureCard({ title, description, color, accentColor, index }: { title:string;description:string;color:string;accentColor:string;index:number }) {
  const [h, setH] = useState(false);
  return (
    <div className="relative p-6 transition-all duration-200" style={{background:"#fff",border:"1px solid rgba(0,0,0,0.06)",transform:`rotate(${h?0:ROTATIONS[index%4]}deg)`,boxShadow:h?"4px 6px 16px rgba(0,0,0,0.08)":"2px 3px 8px rgba(0,0,0,0.04)"}} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}>
      {/* Tape */}
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-4" style={{background:"rgba(251,191,36,0.25)"}}/>
      <h3 className="text-lg font-bold mb-2" style={{color:"#1c1917"}}>{title}</h3>
      <p className="text-sm leading-relaxed" style={{color:"#78716c"}}>{description}</p>
    </div>
  );
}
