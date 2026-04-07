"use client";
import { useState } from "react";
export default function VaporwaveFeatureCard({ title, description, color, accentColor, index }: { title:string;description:string;color:string;accentColor:string;index:number }) {
  const [h, setH] = useState(false);
  return (
    <div className="relative rounded-lg p-6 transition-all duration-300" style={{background:h?"rgba(224,64,251,0.1)":"rgba(224,64,251,0.04)",border:`1px solid ${h?"rgba(224,64,251,0.3)":"rgba(224,64,251,0.1)"}`,boxShadow:h?"0 0 20px rgba(224,64,251,0.15)":"none"}} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}>
      <div className="text-2xl mb-3">{["🏛️","🌅","💎","🎵"][index%4]}</div>
      <h3 className="text-lg font-bold mb-2" style={{color:"#f0abfc"}}>{title}</h3>
      <p className="text-sm leading-relaxed" style={{color:"rgba(240,171,252,0.5)"}}>{description}</p>
    </div>
  );
}
