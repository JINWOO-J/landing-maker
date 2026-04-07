"use client";

export default function BrutalistHeroSection({ className }: { className?: string }) {
  return (
    <div className={`w-full h-full relative overflow-hidden ${className ?? ""}`}>
      {/* Harsh grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.08) 2px, transparent 2px), linear-gradient(90deg, rgba(0,0,0,0.08) 2px, transparent 2px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Bold diagonal stripe */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-20%",
          right: "5%",
          width: "40%",
          height: "140%",
          background: "rgba(0,0,0,0.04)",
          transform: "rotate(-12deg)",
        }}
      />

      {/* Thick border blocks */}
      <div
        className="absolute"
        style={{
          top: "15%",
          right: "10%",
          width: 200,
          height: 200,
          border: "4px solid rgba(0,0,0,0.12)",
        }}
      />
      <div
        className="absolute"
        style={{
          top: "25%",
          right: "15%",
          width: 160,
          height: 160,
          border: "4px solid rgba(0,0,0,0.08)",
        }}
      />

      {/* Oversized decorative text */}
      <div
        className="absolute pointer-events-none select-none"
        style={{
          bottom: "10%",
          right: "5%",
          fontSize: "clamp(120px, 15vw, 250px)",
          fontWeight: 900,
          lineHeight: 0.85,
          color: "rgba(0,0,0,0.04)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        RAW
      </div>
    </div>
  );
}
