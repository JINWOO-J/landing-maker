"use client";

import { useState } from "react";
import type { ThemeDefinition, ThemeColors } from "@/themes/types";
import type { ColorPalette } from "@/lib/color-palettes";

interface ControlPanelProps {
  themes: ThemeDefinition[];
  palettes: ColorPalette[];
  currentThemeId: string;
  currentPaletteId: string;
  currentTheme: ThemeDefinition;
  currentPalette: ColorPalette;
  colors: ThemeColors;
  onThemeSelect: (id: string) => void;
  onPaletteSelect: (id: string) => void;
}

type Tab = "themes" | "colors";

const CATEGORY_LABELS: Record<string, string> = {
  dark: "🌙 Dark",
  light: "☀️ Light",
  vibrant: "🎆 Vibrant",
};

function generatePrompt(theme: ThemeDefinition, palette: ColorPalette): string {
  const c = palette.colors;
  return [
    `Design a modern website with a "${theme.name}" visual style: ${theme.description}.`,
    `Color palette "${palette.name}" (${palette.category}):`,
    `- Primary: ${c.primary}`,
    `- Secondary: ${c.secondary}`,
    `- Accent: ${c.accent}`,
    `- Background: ${c.background}`,
    `- Surface: ${c.surface}`,
    `- Text: ${c.text}`,
    `- Muted text: ${c.textMuted}`,
    `- Border: ${c.border}`,
    ``,
    `The overall mood is ${palette.category === "dark" ? "dark and immersive" : palette.category === "light" ? "clean and bright" : "bold and vibrant"}.`,
    `Use the ${theme.name} aesthetic for layout, animations, and visual elements.`,
    `Apply the ${palette.name} color scheme consistently across all sections: hero, features, pricing, CTA, and footer.`,
  ].join("\n");
}

export default function ControlPanel({
  themes, palettes, currentThemeId, currentPaletteId,
  currentTheme, currentPalette, colors,
  onThemeSelect, onPaletteSelect,
}: ControlPanelProps) {
  const [open, setOpen] = useState(true);
  const [tab, setTab] = useState<Tab>("themes");
  const [copied, setCopied] = useState(false);

  function handleCopyPrompt() {
    const prompt = generatePrompt(currentTheme, currentPalette);
    navigator.clipboard.writeText(prompt).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  const groupedPalettes = palettes.reduce<Record<string, ColorPalette[]>>((acc, p) => {
    (acc[p.category] ??= []).push(p);
    return acc;
  }, {});

  return (
    <>
      {/* Toggle button — always visible */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-20 z-[60] flex items-center gap-1.5 px-3 py-2 rounded-l-lg text-xs font-medium transition-all duration-300 backdrop-blur-xl"
        style={{
          right: open ? 320 : 0,
          background: "rgba(20,20,35,0.9)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRight: "none",
          color: "rgba(255,255,255,0.7)",
        }}
        aria-label={open ? "Close panel" : "Open panel"}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          style={{ transform: open ? "rotate(0deg)" : "rotate(180deg)", transition: "transform 0.3s" }}>
          <polyline points="9 18 15 12 9 6" />
        </svg>
        {!open && <span>Panel</span>}
      </button>

      {/* Side panel */}
      <div
        className="fixed top-0 right-0 bottom-0 z-[55] flex flex-col transition-transform duration-300"
        style={{
          width: 320,
          transform: open ? "translateX(0)" : "translateX(100%)",
          background: "rgba(15,15,28,0.95)",
          backdropFilter: "blur(20px)",
          borderLeft: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        {/* Header */}
        <div className="px-4 pt-4 pb-3 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <div className="text-sm font-bold text-white mb-0.5">Build Landing Page</div>
          <div className="text-[10px] text-gray-500">
            {currentTheme.name} · {currentPalette.name}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          {(["themes", "colors"] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className="flex-1 py-2.5 text-xs font-medium transition-colors"
              style={{
                color: tab === t ? "#fff" : "rgba(255,255,255,0.4)",
                borderBottom: tab === t ? "2px solid #6366f1" : "2px solid transparent",
              }}
            >
              {t === "themes" ? "🖼️ Themes" : "🎨 Colors"}
            </button>
          ))}
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto p-3 space-y-2">
          {tab === "themes" && (
            <div className="grid grid-cols-2 gap-2">
              {themes.map((t) => {
                const isActive = t.id === currentThemeId;
                return (
                  <button
                    key={t.id}
                    onClick={() => onThemeSelect(t.id)}
                    className="text-left rounded-lg border p-2.5 transition-all duration-150 hover:scale-[1.02]"
                    style={{
                      backgroundColor: isActive ? "rgba(99,102,241,0.12)" : "rgba(255,255,255,0.02)",
                      borderColor: isActive ? "#6366f1" : "rgba(255,255,255,0.06)",
                    }}
                  >
                    <div className="text-lg mb-1">{t.preview}</div>
                    <div className="text-[11px] font-semibold text-white leading-tight">{t.name}</div>
                    <div className="text-[9px] text-gray-500 mt-0.5 line-clamp-1">{t.description}</div>
                  </button>
                );
              })}
            </div>
          )}

          {tab === "colors" && (
            <>
              {Object.entries(groupedPalettes).map(([category, items]) => (
                <div key={category} className="mb-3">
                  <div className="text-[10px] font-semibold text-gray-500 mb-1.5 px-1">
                    {CATEGORY_LABELS[category] ?? category}
                  </div>
                  <div className="grid grid-cols-2 gap-1.5">
                    {items.map((p) => {
                      const isActive = p.id === currentPaletteId;
                      return (
                        <button
                          key={p.id}
                          onClick={() => onPaletteSelect(p.id)}
                          className="text-left rounded-lg border p-2 transition-all duration-150 hover:scale-[1.02]"
                          style={{
                            backgroundColor: isActive ? `${p.colors.primary}15` : "rgba(255,255,255,0.02)",
                            borderColor: isActive ? p.colors.primary : "rgba(255,255,255,0.06)",
                          }}
                        >
                          <div className="flex gap-1 mb-1.5">
                            {[p.colors.primary, p.colors.secondary, p.colors.accent, p.colors.background].map((c, i) => (
                              <div key={i} className="w-4 h-4 rounded-full border border-white/10" style={{ backgroundColor: c }} />
                            ))}
                          </div>
                          <div className="text-[10px] font-medium text-white">{p.name}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        {/* Footer — Copy Prompt */}
        <div className="p-3 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          {/* Current preview */}
          <div className="flex items-center gap-2 mb-2 px-1">
            <div className="flex gap-1">
              {[colors.primary, colors.secondary, colors.accent].map((c, i) => (
                <div key={i} className="w-3 h-3 rounded-full border border-white/10" style={{ backgroundColor: c }} />
              ))}
            </div>
            <div className="text-[10px] text-gray-400 truncate">
              {currentTheme.preview} {currentTheme.name} + {currentPalette.name}
            </div>
          </div>

          <button
            onClick={handleCopyPrompt}
            className="w-full py-2.5 rounded-lg text-xs font-semibold transition-all duration-200 flex items-center justify-center gap-2"
            style={{
              background: copied ? "#22c55e" : "#6366f1",
              color: "#fff",
            }}
          >
            {copied ? (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Copied
              </>
            ) : (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
                Copy Prompt
              </>
            )}
          </button>
        </div>
      </div>
    </>
  );
}
