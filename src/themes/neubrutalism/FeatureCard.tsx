"use client";
import { useState } from "react";
const BG = ["#a3e635","#fbbf24","#f472b6","#60a5fa"];
export default function NeubrutalismFeatureCard({ title, description, color, accentColor, index }: { title:string;description:string;color:string;accentColor:string;index:number }) {
  const [h, setH] = useState(false);
  return (
    <div className="relative p-6 transition-all duration-150" style={{background:BG[index%4],border:"3px solid #000",borderRadius:12,boxShadow:h?"8px 8px 0 #000":"4px 4px 0 #000",transform:h?"translate(-2px,-2px)":"none"}} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}>
      <div className="w-10 h-10 rounded-full bg-white border-2 border-black flex items-center justify-center text-lg font-black mb-3">{index+1}</div>
      <h3 className="text-lg font-black text-black mb-2">{title}</h3>
      <p className="text-sm text-black/60 leading-relaxed">{description}</p>
    </div>
  );
}
