"use client";
export default function ParallaxDepthHeroSection({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full relative overflow-hidden ${className??""}`}>
      <style>{`@keyframes pdFloat1{0%,100%{transform:translateY(0)}50%{transform:translateY(-15px)}}@keyframes pdFloat2{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}@keyframes pdFloat3{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}`}</style>
      {/* Background layer */}
      <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage:"radial-gradient(circle, currentColor 1px, transparent 1px)",backgroundSize:"30px 30px",animation:"pdFloat3 8s ease-in-out infinite"}}/>
      {/* Mid layer */}
      <div className="absolute" style={{top:"20%",right:"10%",width:300,height:300,borderRadius:"50%",border:"1px solid",opacity:0.04,animation:"pdFloat2 6s ease-in-out infinite"}}/>
      <div className="absolute" style={{top:"40%",right:"20%",width:200,height:200,border:"1px solid",opacity:0.03,transform:"rotate(45deg)",animation:"pdFloat2 7s ease-in-out 1s infinite"}}/>
      {/* Front layer */}
      <div className="absolute" style={{top:"30%",right:"15%",width:150,height:150,borderRadius:"50%",background:"currentColor",opacity:0.02,animation:"pdFloat1 5s ease-in-out infinite"}}/>
      <div className="absolute" style={{bottom:"25%",right:"25%",width:80,height:80,background:"currentColor",opacity:0.015,animation:"pdFloat1 4s ease-in-out 0.5s infinite"}}/>
    </div>
  );
}
