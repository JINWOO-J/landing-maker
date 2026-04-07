"use client";
export default function MarbleHeroSection({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full relative overflow-hidden ${className ?? ""}`} style={{ background: "#f8f7f4" }}>
      <style>{`@keyframes marbleVein { 0%,100% { opacity:0.06; } 50% { opacity:0.12; } }`}</style>
      <svg className="absolute inset-0 w-full h-full opacity-[0.07]">
        <filter id="mturb"><feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="4" seed="3"/><feDisplacementMap in="SourceGraphic" scale="80"/></filter>
        <rect width="100%" height="100%" filter="url(#mturb)" fill="none" stroke="rgba(120,100,80,0.3)" strokeWidth="0.5"/>
      </svg>
      {/* Veins */}
      {[{d:"M0,200 Q200,180 400,220 T800,190",c:"rgba(180,160,140,0.08)"},{d:"M0,350 Q300,320 500,380 T900,340",c:"rgba(160,140,120,0.06)"},{d:"M100,100 Q350,80 600,130 T1000,90",c:"rgba(140,120,100,0.05)"}].map((v,i) => (
        <svg key={i} className="absolute inset-0 w-full h-full"><path d={v.d} fill="none" stroke={v.c} strokeWidth="2" style={{animation:`marbleVein ${8+i*3}s ease-in-out infinite`}}/></svg>
      ))}
      {/* Gold accent flecks */}
      {Array.from({length:8}).map((_,i) => (
        <div key={i} className="absolute rounded-full" style={{left:`${(i*37+15)%90}%`,top:`${(i*29+10)%80}%`,width:2+i%3,height:2+i%3,background:"rgba(212,175,55,0.1)"}}/>
      ))}
    </div>
  );
}
