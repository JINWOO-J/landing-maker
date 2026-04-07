"use client";

export default function NeonCyberpunkHeroSection({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={`relative w-full h-full overflow-hidden ${className ?? ""}`}
      style={{ background: "#0a0a0f" }}
    >
      <style>{`
        @keyframes neon-pulse-glow {
          0%, 100% {
            opacity: 1;
            box-shadow: 0 0 15px rgba(0,240,255,0.6), 0 0 30px rgba(0,240,255,0.3), inset 0 0 15px rgba(0,240,255,0.1);
          }
          50% {
            opacity: 0.7;
            box-shadow: 0 0 25px rgba(255,0,229,0.6), 0 0 50px rgba(255,0,229,0.3), inset 0 0 25px rgba(255,0,229,0.1);
          }
        }
        @keyframes neon-scanline-move {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        @keyframes neon-glitch-flicker {
          0%, 92%, 100% { opacity: 1; transform: translate(0, 0); }
          93% { opacity: 0.8; transform: translate(-2px, 1px); }
          94% { opacity: 1; transform: translate(1px, -1px); }
          95% { opacity: 0.6; transform: translate(2px, 0); }
          96% { opacity: 1; transform: translate(-1px, 2px); }
          97% { opacity: 0.9; transform: translate(0, -1px); }
        }
        @keyframes neon-vline-glow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        @keyframes neon-corner-pulse {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 0.4; }
        }
      `}</style>

      {/* Perspective grid floor */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, transparent 50%, rgba(0,240,255,0.03) 50%)",
        }}
      >
        <div
          className="absolute left-0 right-0 bottom-0"
          style={{
            height: "60%",
            perspective: "500px",
            perspectiveOrigin: "50% 0%",
          }}
        >
          <div
            style={{
              width: "200%",
              height: "200%",
              marginLeft: "-50%",
              transform: "rotateX(60deg)",
              transformOrigin: "top center",
              backgroundImage:
                "linear-gradient(to right, rgba(0,240,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,240,255,0.15) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>
      </div>

      {/* Horizontal scanlines overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px)",
          zIndex: 3,
        }}
      />

      {/* Moving scanline band */}
      <div
        className="absolute left-0 right-0 pointer-events-none"
        style={{
          height: "8px",
          background:
            "linear-gradient(to bottom, transparent, rgba(0,240,255,0.08), transparent)",
          animation: "neon-scanline-move 4s linear infinite",
          zIndex: 4,
        }}
      />

      {/* Vertical neon lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 2 }}
      >
        {/* Cyan line - left */}
        <div
          style={{
            position: "absolute",
            left: "20%",
            top: 0,
            bottom: 0,
            width: "1px",
            background:
              "linear-gradient(to bottom, transparent 10%, #00f0ff 30%, #00f0ff 70%, transparent 90%)",
            boxShadow:
              "0 0 8px rgba(0,240,255,0.6), 0 0 20px rgba(0,240,255,0.3)",
            animation: "neon-vline-glow 3s ease-in-out infinite",
          }}
        />
        {/* Magenta line - center right */}
        <div
          style={{
            position: "absolute",
            left: "55%",
            top: 0,
            bottom: 0,
            width: "1px",
            background:
              "linear-gradient(to bottom, transparent 5%, #ff00e5 25%, #ff00e5 75%, transparent 95%)",
            boxShadow:
              "0 0 8px rgba(255,0,229,0.6), 0 0 20px rgba(255,0,229,0.3)",
            animation: "neon-vline-glow 3s ease-in-out infinite 1s",
          }}
        />
        {/* Cyan line - far right */}
        <div
          style={{
            position: "absolute",
            left: "80%",
            top: 0,
            bottom: 0,
            width: "1px",
            background:
              "linear-gradient(to bottom, transparent 15%, #00f0ff 40%, #00f0ff 60%, transparent 85%)",
            boxShadow:
              "0 0 6px rgba(0,240,255,0.4), 0 0 15px rgba(0,240,255,0.2)",
            animation: "neon-vline-glow 3s ease-in-out infinite 2s",
          }}
        />
      </div>

      {/* Central neon frame / pulsing rectangle */}
      <div
        className="absolute"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "min(400px, 60%)",
          height: "min(250px, 40%)",
          border: "1px solid rgba(0,240,255,0.6)",
          animation: "neon-pulse-glow 4s ease-in-out infinite",
          zIndex: 5,
        }}
      >
        {/* Inner double line */}
        <div
          className="absolute inset-2"
          style={{ border: "1px solid rgba(255,0,229,0.3)" }}
        />
      </div>

      {/* Corner accents - L-shaped neon brackets */}
      <div
        className="absolute"
        style={{
          top: "8%",
          left: "8%",
          width: "40px",
          height: "40px",
          borderTop: "2px solid #00f0ff",
          borderLeft: "2px solid #00f0ff",
          boxShadow: "-2px -2px 10px rgba(0,240,255,0.5)",
          animation: "neon-corner-pulse 3s ease-in-out infinite",
          zIndex: 5,
        }}
      />
      <div
        className="absolute"
        style={{
          top: "8%",
          right: "8%",
          width: "40px",
          height: "40px",
          borderTop: "2px solid #ff00e5",
          borderRight: "2px solid #ff00e5",
          boxShadow: "2px -2px 10px rgba(255,0,229,0.5)",
          animation: "neon-corner-pulse 3s ease-in-out infinite 0.5s",
          zIndex: 5,
        }}
      />
      <div
        className="absolute"
        style={{
          bottom: "8%",
          left: "8%",
          width: "40px",
          height: "40px",
          borderBottom: "2px solid #ff00e5",
          borderLeft: "2px solid #ff00e5",
          boxShadow: "-2px 2px 10px rgba(255,0,229,0.5)",
          animation: "neon-corner-pulse 3s ease-in-out infinite 1s",
          zIndex: 5,
        }}
      />
      <div
        className="absolute"
        style={{
          bottom: "8%",
          right: "8%",
          width: "40px",
          height: "40px",
          borderBottom: "2px solid #00f0ff",
          borderRight: "2px solid #00f0ff",
          boxShadow: "2px 2px 10px rgba(0,240,255,0.5)",
          animation: "neon-corner-pulse 3s ease-in-out infinite 1.5s",
          zIndex: 5,
        }}
      />

      {/* Glitch flicker element */}
      <div
        className="absolute pointer-events-none select-none"
        style={{
          top: "12%",
          right: "12%",
          fontFamily: "monospace",
          fontSize: "10px",
          color: "rgba(0,240,255,0.3)",
          letterSpacing: "2px",
          animation: "neon-glitch-flicker 5s steps(1) infinite",
          zIndex: 6,
        }}
      >
        SYS::ONLINE
      </div>

      {/* Ambient glow spots */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "30%",
          left: "15%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,240,255,0.06) 0%, transparent 70%)",
          zIndex: 1,
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "20%",
          right: "10%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,0,229,0.05) 0%, transparent 70%)",
          zIndex: 1,
        }}
      />
    </div>
  );
}
