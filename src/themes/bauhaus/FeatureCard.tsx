"use client";
import { useState } from "react";
const SHAPES: React.FC<{color:string;h:boolean}>[] = [
  ({color,h})=><div className="w-12 h-12 mb-4" style={{background:color,opacity:h?0.6:0.3}}/>,
  ({color,h})=><div className="w-12 h-12 rounded-full mb-4" style={{background:color,opacity:h?0.6:0.3}}/>,
  ({color,h})=><div className="w-12 h-12 mb-4" style={{background:color,opacity:h?0.6:0.3,transform:"rotate(45deg)",borderRadius:4}}/>,
  ({color,h})=><div className="w-12 h-12 mb-4" style={{background:"transparent",border:`3px solid ${color}`,opacity:h?0.6:0.3}}/>,
];
export default function BauhausFeatureCard({ title, description, color, accentColor, index }: { title:string;description:string;color:string;accentColor:string;index:number }) {
  const [h, setH] = useState(false);
  const Shape = SHAPES[index%4];
  return (
    <div className="relative p-6 transition-all duration-200" style={{background:h?"rgba(0,0,0,0.02)":"transparent",borderBottom:`3px solid ${h?color:"rgba(0,0,0,0.06)"}`}} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}>
      <Shape color={color} h={h}/>
      <h3 className="text-lg font-black uppercase tracking-wider mb-2" style={{color:"#1c1917"}}>{title}</h3>
      <p className="text-sm leading-relaxed" style={{color:"#78716c"}}>{description}</p>
    </div>
  );
}
