"use client";
export default function CassetteHeroSection({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full relative overflow-hidden ${className??""}`} style={{background:"#1a1a1a"}}>
      <style>{`@keyframes tapeReel{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}`}</style>
      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:"url(\"data:image/svg+xml,%3Csvg width='4' height='4' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='1' height='1' fill='white'/%3E%3C/svg%3E\")",backgroundSize:"4px 4px"}}/>
      {/* Cassette tape */}
      <svg className="absolute" style={{top:"50%",right:"10%",transform:"translateY(-50%)",width:"35%",maxWidth:350,opacity:0.12}} viewBox="0 0 300 200">
        <rect x="10" y="10" width="280" height="180" rx="8" fill="none" stroke="white" strokeWidth="2"/>
        <rect x="30" y="30" width="240" height="100" rx="4" fill="none" stroke="white" strokeWidth="1"/>
        {/* Label area */}
        <rect x="50" y="40" width="200" height="30" rx="2" fill="none" stroke="white" strokeWidth="0.5" opacity="0.5"/>
        {/* Reels */}
        <circle cx="100" cy="100" r="25" fill="none" stroke="white" strokeWidth="1.5" style={{animation:"tapeReel 4s linear infinite"}}/>
        <circle cx="100" cy="100" r="8" fill="none" stroke="white" strokeWidth="1"/>
        <circle cx="200" cy="100" r="25" fill="none" stroke="white" strokeWidth="1.5" style={{animation:"tapeReel 4s linear infinite"}}/>
        <circle cx="200" cy="100" r="8" fill="none" stroke="white" strokeWidth="1"/>
        {/* Tape window */}
        <rect x="115" y="85" width="70" height="30" rx="2" fill="none" stroke="white" strokeWidth="0.5" opacity="0.4"/>
        {/* Screw holes */}
        {[[30,170],[270,170],[30,20],[270,20]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="4" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3"/>)}
      </svg>
      {/* VU meter bars */}
      <div className="absolute flex gap-1 items-end" style={{bottom:"15%",left:"8%",height:40}}>
        {Array.from({length:12}).map((_,i)=><div key={i} className="w-1.5 rounded-t-sm" style={{height:`${20+Math.sin(i*0.8)*15}%`,background:i>8?"rgba(239,68,68,0.15)":i>5?"rgba(234,179,8,0.12)":"rgba(74,222,128,0.1)"}}/>)}
      </div>
    </div>
  );
}
