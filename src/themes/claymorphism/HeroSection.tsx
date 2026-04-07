"use client";
export default function ClaymorphismHeroSection({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full relative overflow-hidden ${className??""}`} style={{background:"#e8e0f0"}}>
      <div className="absolute" style={{top:"20%",right:"10%",width:200,height:200,borderRadius:40,background:"linear-gradient(145deg, #f0e8f8, #d8d0e8)",boxShadow:"20px 20px 40px rgba(0,0,0,0.1), -10px -10px 30px rgba(255,255,255,0.8), inset 5px 5px 10px rgba(255,255,255,0.6), inset -5px -5px 10px rgba(0,0,0,0.05)"}}/>
      <div className="absolute" style={{top:"50%",right:"25%",width:120,height:120,borderRadius:30,background:"linear-gradient(145deg, #fce7f3, #f0d0e8)",boxShadow:"15px 15px 30px rgba(0,0,0,0.08), -8px -8px 20px rgba(255,255,255,0.7), inset 4px 4px 8px rgba(255,255,255,0.5), inset -4px -4px 8px rgba(0,0,0,0.04)"}}/>
      <div className="absolute" style={{bottom:"25%",right:"12%",width:80,height:80,borderRadius:24,background:"linear-gradient(145deg, #dbeafe, #c8d8f0)",boxShadow:"12px 12px 24px rgba(0,0,0,0.07), -6px -6px 16px rgba(255,255,255,0.6), inset 3px 3px 6px rgba(255,255,255,0.4)"}}/>
    </div>
  );
}
