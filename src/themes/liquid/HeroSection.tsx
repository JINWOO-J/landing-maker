"use client";
export default function LiquidHeroSection({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full relative overflow-hidden ${className??""}`}>
      <style>{`
        @keyframes liqMorph1{0%,100%{border-radius:60% 40% 30% 70%/60% 30% 70% 40%}50%{border-radius:30% 60% 70% 40%/50% 60% 30% 60%}}
        @keyframes liqMorph2{0%,100%{border-radius:40% 60% 60% 40%/70% 30% 60% 40%}50%{border-radius:60% 40% 30% 70%/40% 60% 70% 30%}}
      `}</style>
      <div className="absolute" style={{top:"10%",right:"5%",width:350,height:350,background:"linear-gradient(135deg, rgba(99,102,241,0.15), rgba(168,85,247,0.1))",filter:"blur(30px)",animation:"liqMorph1 12s ease-in-out infinite"}}/>
      <div className="absolute" style={{top:"35%",right:"20%",width:250,height:250,background:"linear-gradient(135deg, rgba(244,114,182,0.12), rgba(251,113,133,0.08))",filter:"blur(25px)",animation:"liqMorph2 15s ease-in-out infinite"}}/>
      <div className="absolute" style={{bottom:"15%",right:"10%",width:200,height:200,background:"linear-gradient(135deg, rgba(34,211,238,0.1), rgba(52,211,153,0.08))",filter:"blur(20px)",animation:"liqMorph1 18s ease-in-out 2s infinite"}}/>
    </div>
  );
}
