"use client";

export default function MinimalHeroSection({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={`relative w-full h-full overflow-hidden ${className ?? ""}`}>
      {/* Base gradient: white to light gray */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#f4f4f5]" />

      {/* Dot grid pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, #d4d4d8 0.8px, transparent 0.8px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Circle - top right area */}
        <div
          className="absolute w-48 h-48 rounded-full border border-[#e4e4e7] opacity-40 animate-[minimalFloat_20s_ease-in-out_infinite]"
          style={{ top: "12%", right: "18%" }}
        />

        {/* Square - bottom left area */}
        <div
          className="absolute w-32 h-32 rounded-md border border-[#e4e4e7] opacity-30 animate-[minimalFloat_25s_ease-in-out_infinite_reverse]"
          style={{ bottom: "20%", left: "12%", transform: "rotate(12deg)" }}
        />

        {/* Small circle - center left */}
        <div
          className="absolute w-20 h-20 rounded-full border border-[#d4d4d8] opacity-25 animate-[minimalFloat_18s_ease-in-out_infinite_2s]"
          style={{ top: "40%", left: "30%" }}
        />
      </div>

      {/* Keyframes for subtle floating animation */}
      <style>{`
        @keyframes minimalFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          33% { transform: translateY(-12px) rotate(2deg); }
          66% { transform: translateY(8px) rotate(-1deg); }
        }
      `}</style>
    </div>
  );
}
