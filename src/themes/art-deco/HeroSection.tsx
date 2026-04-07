"use client";
export default function ArtDecoHeroSection({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full relative overflow-hidden ${className??""}`} style={{background:"#0a0a0a"}}>
      {/* Fan pattern */}
      <svg className="absolute" style={{right:"5%",top:"10%",width:"40%",maxWidth:400,opacity:0.12}} viewBox="0 0 400 400">
        {Array.from({length:12}).map((_,i)=>{
          const angle=(i/12)*180-90;
          return <line key={i} x1="200" y1="380" x2={200+Math.cos(angle*Math.PI/180)*350} y2={380+Math.sin(angle*Math.PI/180)*350} stroke="#eab308" strokeWidth="1"/>;
        })}
        <path d="M50,380 Q200,100 350,380" fill="none" stroke="#eab308" strokeWidth="1.5"/>
        <path d="M80,380 Q200,150 320,380" fill="none" stroke="#eab308" strokeWidth="1"/>
        <path d="M110,380 Q200,200 290,380" fill="none" stroke="#eab308" strokeWidth="0.8"/>
      </svg>
      {/* Geometric border lines */}
      <div className="absolute top-[8%] left-[5%] right-[5%] h-px" style={{background:"linear-gradient(to right, transparent, rgba(234,179,8,0.15), transparent)"}}/>
      <div className="absolute top-[9%] left-[5%] right-[5%] h-px" style={{background:"linear-gradient(to right, transparent, rgba(234,179,8,0.08), transparent)"}}/>
      <div className="absolute bottom-[8%] left-[5%] right-[5%] h-px" style={{background:"linear-gradient(to right, transparent, rgba(234,179,8,0.15), transparent)"}}/>
      {/* Corner ornaments */}
      {[{t:"5%",l:"3%"},{t:"5%",r:"3%"},{b:"5%",l:"3%"},{b:"5%",r:"3%"}].map((pos,i)=>(
        <div key={i} className="absolute w-8 h-8" style={{...pos as React.CSSProperties,border:"1px solid rgba(234,179,8,0.12)",borderRadius:i<2?"0 0 0 0":"0"}}/>
      ))}
    </div>
  );
}
