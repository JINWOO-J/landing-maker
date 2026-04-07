"use client";
import { useEffect, useRef } from "react";
export default function MatrixRainHeroSection({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current; if(!canvas) return;
    const ctx = canvas.getContext("2d"); if(!ctx) return;
    let animId: number;
    const chars = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789";
    const cols: number[] = [];
    function resize() { canvas!.width=canvas!.offsetWidth; canvas!.height=canvas!.offsetHeight; cols.length=0; for(let i=0;i<canvas!.width/14;i++) cols.push(Math.random()*canvas!.height); }
    function draw() {
      ctx!.fillStyle="rgba(0,0,0,0.05)"; ctx!.fillRect(0,0,canvas!.width,canvas!.height);
      ctx!.fillStyle="#0f0"; ctx!.font="12px monospace";
      for(let i=0;i<cols.length;i++){
        const ch=chars[Math.floor(Math.random()*chars.length)];
        ctx!.fillStyle=`rgba(0,${150+Math.random()*105},0,${0.3+Math.random()*0.4})`;
        ctx!.fillText(ch,i*14,cols[i]);
        if(cols[i]>canvas!.height&&Math.random()>0.975) cols[i]=0;
        cols[i]+=14;
      }
      animId=requestAnimationFrame(draw);
    }
    resize(); draw();
    window.addEventListener("resize",resize);
    return()=>{cancelAnimationFrame(animId);window.removeEventListener("resize",resize);};
  },[]);
  return <div className={`w-full h-full relative ${className??""}`}><canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{opacity:0.3}}/></div>;
}
