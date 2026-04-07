"use client";
import { useState } from "react";
const BG=["#fef08a","#bbf7d0","#c4b5fd","#fecaca"];
export default function DopamineFeatureCard({ title, description, color, accentColor, index }: { title:string;description:string;color:string;accentColor:string;index:number }) {
  const [h, setH] = useState(false);
  return (
    <div className="relative rounded-3xl p-6 transition-all duration-200" style={{background:BG[index%4],transform:h?"scale(1.03) rotate(-1deg)":"none",boxShadow:h?`0 8px 25px ${color}30`:"none"}} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}>
      <div className="text-3xl mb-3">{["🚀","⚡","🎯","✨"][index%4]}</div>
      <h3 className="text-lg font-black text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
