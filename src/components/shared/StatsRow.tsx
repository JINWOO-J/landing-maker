"use client";

interface StatsRowProps {
  stats: Array<{ value: string; label: string }>;
  colors: { text: string; textMuted: string; border: string };
}

export default function StatsRow({ stats, colors }: StatsRowProps) {
  return (
    <div
      className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t"
      style={{ borderColor: colors.border }}
    >
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div
            className="text-3xl md:text-4xl font-bold mb-1"
            style={{ color: colors.text }}
          >
            {stat.value}
          </div>
          <div
            className="text-sm"
            style={{ color: colors.textMuted }}
          >
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
