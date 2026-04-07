"use client";

const floatKeyframes = `
@keyframes float-1 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(40px, -30px) scale(1.05); }
  50% { transform: translate(-20px, 20px) scale(0.95); }
  75% { transform: translate(30px, 40px) scale(1.02); }
}
@keyframes float-2 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(-50px, 30px) scale(1.08); }
  66% { transform: translate(30px, -40px) scale(0.96); }
}
@keyframes float-3 {
  0%, 100% { transform: translate(0, 0) scale(1.02); }
  20% { transform: translate(25px, 50px) scale(0.98); }
  40% { transform: translate(-40px, -20px) scale(1.05); }
  60% { transform: translate(50px, 10px) scale(0.97); }
  80% { transform: translate(-15px, -45px) scale(1.03); }
}
@keyframes float-4 {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(-30px, 25px); }
}
@keyframes float-5 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  40% { transform: translate(35px, -35px) scale(1.06); }
  80% { transform: translate(-25px, 15px) scale(0.94); }
}
`;

interface Orb {
  className: string;
  style: React.CSSProperties;
}

const orbs: Orb[] = [
  {
    className: "rounded-full blur-3xl opacity-30",
    style: {
      position: "absolute",
      width: 500,
      height: 500,
      top: "-10%",
      left: "-5%",
      background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)",
      animation: "float-1 18s ease-in-out infinite",
    },
  },
  {
    className: "rounded-full blur-3xl opacity-25",
    style: {
      position: "absolute",
      width: 400,
      height: 400,
      top: "20%",
      right: "5%",
      background: "radial-gradient(circle, #f472b6 0%, transparent 70%)",
      animation: "float-2 22s ease-in-out infinite",
    },
  },
  {
    className: "rounded-full blur-3xl opacity-20",
    style: {
      position: "absolute",
      width: 350,
      height: 350,
      bottom: "10%",
      left: "15%",
      background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)",
      animation: "float-3 25s ease-in-out infinite",
    },
  },
  {
    className: "rounded-full blur-3xl opacity-15",
    style: {
      position: "absolute",
      width: 250,
      height: 250,
      top: "50%",
      left: "40%",
      background: "radial-gradient(circle, #a78bfa 0%, transparent 70%)",
      animation: "float-4 20s ease-in-out infinite",
    },
  },
  {
    className: "rounded-full blur-3xl opacity-20",
    style: {
      position: "absolute",
      width: 200,
      height: 200,
      bottom: "20%",
      right: "15%",
      background: "radial-gradient(circle, #c084fc 0%, transparent 70%)",
      animation: "float-5 16s ease-in-out infinite",
    },
  },
];

export default function HeroSection({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full relative overflow-hidden ${className ?? ""}`}>
      <style>{floatKeyframes}</style>

      {orbs.map((orb, i) => (
        <div key={i} className={orb.className} style={orb.style} />
      ))}

      {/* Frosted glass card silhouette - center-right area */}
      <div
        className="absolute rounded-2xl backdrop-blur-xl border border-white/10"
        style={{
          width: 320,
          height: 400,
          top: "50%",
          right: "12%",
          transform: "translateY(-50%) rotate(-2deg)",
          background: "rgba(255,255,255,0.05)",
          boxShadow:
            "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
        }}
      >
        {/* Inner decorative lines */}
        <div className="p-6 space-y-4">
          <div
            className="h-3 rounded-full"
            style={{ width: "60%", background: "rgba(255,255,255,0.1)" }}
          />
          <div
            className="h-2 rounded-full"
            style={{ width: "80%", background: "rgba(255,255,255,0.06)" }}
          />
          <div
            className="h-2 rounded-full"
            style={{ width: "45%", background: "rgba(255,255,255,0.06)" }}
          />
          <div className="mt-6 h-24 rounded-xl" style={{ background: "rgba(255,255,255,0.04)" }} />
          <div className="flex gap-2 mt-4">
            <div
              className="h-8 rounded-lg flex-1"
              style={{ background: "rgba(139,92,246,0.2)" }}
            />
            <div
              className="h-8 rounded-lg flex-1"
              style={{ background: "rgba(255,255,255,0.06)" }}
            />
          </div>
        </div>
      </div>

      {/* Secondary smaller glass element */}
      <div
        className="absolute rounded-xl backdrop-blur-lg border border-white/5"
        style={{
          width: 180,
          height: 120,
          top: "18%",
          right: "8%",
          transform: "rotate(3deg)",
          background: "rgba(255,255,255,0.03)",
          boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
        }}
      />
    </div>
  );
}
