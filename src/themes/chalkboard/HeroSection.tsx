"use client";
export default function ChalkboardHeroSection({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full relative overflow-hidden ${className??""}`} style={{background:"#2a3a2a"}}>
      {/* Chalk dust texture */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none"><filter id="chalk"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(#chalk)" fill="white"/></svg>
      {/* Chalk drawings */}
      <svg className="absolute" style={{top:"10%",right:"5%",width:"45%",maxWidth:400,opacity:0.12}} viewBox="0 0 400 300">
        {/* Chalk circle */}
        <circle cx="200" cy="120" r="60" fill="none" stroke="white" strokeWidth="2" strokeDasharray="4 3"/>
        {/* Arrow */}
        <path d="M100,200 L300,200" fill="none" stroke="white" strokeWidth="2" strokeDasharray="6 4"/>
        <path d="M290,195 L300,200 L290,205" fill="none" stroke="white" strokeWidth="2"/>
        {/* Math-like notation */}
        <text x="150" y="260" fill="white" fontSize="14" fontFamily="monospace" opacity="0.6">f(x) = design</text>
        {/* Underline */}
        <path d="M140,270 Q200,275 260,268" fill="none" stroke="white" strokeWidth="1.5" strokeDasharray="3 2"/>
        {/* Star */}
        <path d="M320,60 L325,75 L340,75 L328,85 L333,100 L320,90 L307,100 L312,85 L300,75 L315,75Z" fill="none" stroke="rgba(251,191,36,0.5)" strokeWidth="1.5"/>
      </svg>
      {/* Board frame */}
      <div className="absolute inset-x-0 top-0 h-2" style={{background:"#5c3d2e"}}/>
      <div className="absolute inset-x-0 bottom-0 h-3" style={{background:"#5c3d2e"}}/>
      {/* Chalk tray */}
      <div className="absolute bottom-3 left-[10%] right-[10%] h-2" style={{background:"#4a3020",borderRadius:"0 0 2px 2px"}}/>
    </div>
  );
}
