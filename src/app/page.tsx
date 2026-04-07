"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { siteConfig } from "@/lib/site-config";
import { themes, DEFAULT_THEME_ID, getThemeById } from "@/lib/theme-registry";
import { palettes, DEFAULT_PALETTE_ID, getPaletteById } from "@/lib/color-palettes";
import type { FeatureCardProps } from "@/themes/types";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import PricingSection from "@/components/shared/PricingSection";
import CTASection from "@/components/shared/CTASection";
import ControlPanel from "@/components/ControlPanel";

/* ---------- Loading fallback ---------- */

function HeroLoading() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-8 h-8 animate-pulse rounded" style={{ background: "currentColor", opacity: 0.3 }} />
    </div>
  );
}

/* ---------- Dynamic hero sections per theme ---------- */

const heroSections: Record<string, React.ComponentType<{ className?: string }>> = {
  voxel: dynamic(() => import("@/themes/voxel/HeroSection"), { ssr: false, loading: () => <HeroLoading /> }),
  glassmorphism: dynamic(() => import("@/themes/glassmorphism/HeroSection"), { ssr: false, loading: () => <HeroLoading /> }),
  "neon-cyberpunk": dynamic(() => import("@/themes/neon-cyberpunk/HeroSection"), { ssr: false, loading: () => <HeroLoading /> }),
  "retro-pixel": dynamic(() => import("@/themes/retro-pixel/HeroSection"), { ssr: false, loading: () => <HeroLoading /> }),
  minimal: dynamic(() => import("@/themes/minimal/HeroSection"), { ssr: false, loading: () => <HeroLoading /> }),
  "gradient-mesh": dynamic(() => import("@/themes/gradient-mesh/HeroSection"), { ssr: false, loading: () => <HeroLoading /> }),
  aurora: dynamic(() => import("@/themes/aurora/HeroSection"), { ssr: false, loading: () => <HeroLoading /> }),
  particles: dynamic(() => import("@/themes/particles/HeroSection"), { ssr: false, loading: () => <HeroLoading /> }),
  brutalist: dynamic(() => import("@/themes/brutalist/HeroSection"), { ssr: false, loading: () => <HeroLoading /> }),
  neumorphism: dynamic(() => import("@/themes/neumorphism/HeroSection"), { ssr: false, loading: () => <HeroLoading /> }),
  terminal: dynamic(() => import("@/themes/terminal/HeroSection"), { ssr: false, loading: () => <HeroLoading /> }),
  isometric: dynamic(() => import("@/themes/isometric/HeroSection"), { ssr: false, loading: () => <HeroLoading /> }),
  watercolor: dynamic(() => import("@/themes/watercolor/HeroSection"), { ssr: false, loading: () => <HeroLoading /> }),
  geometric: dynamic(() => import("@/themes/geometric/HeroSection"), { ssr: false, loading: () => <HeroLoading /> }),
  newspaper: dynamic(() => import("@/themes/newspaper/HeroSection"), { ssr: false, loading: () => <HeroLoading /> }),
  synthwave: dynamic(() => import("@/themes/synthwave/HeroSection"), { ssr: false, loading: () => <HeroLoading /> }),
  zen: dynamic(() => import("@/themes/zen/HeroSection"), { ssr: false, loading: () => <HeroLoading /> }),
  blueprint: dynamic(() => import("@/themes/blueprint/HeroSection"), { ssr: false, loading: () => <HeroLoading /> }),
  topography: dynamic(() => import("@/themes/topography/HeroSection"), { ssr: false, loading: () => <HeroLoading /> }),
  circuit: dynamic(() => import("@/themes/circuit/HeroSection"), { ssr: false, loading: () => <HeroLoading /> }),
  origami: dynamic(() => import("@/themes/origami/HeroSection"), { ssr: false, loading: () => <HeroLoading /> }),
  "stained-glass": dynamic(() => import("@/themes/stained-glass/HeroSection"), { ssr: false, loading: () => <HeroLoading /> }),
  marble: dynamic(() => import("@/themes/marble/HeroSection"), { ssr: false, loading: () => <HeroLoading /> }),
  constellation: dynamic(() => import("@/themes/constellation/HeroSection"), { ssr: false, loading: () => <HeroLoading /> }),
  "dna-helix": dynamic(() => import("@/themes/dna-helix/HeroSection"), { ssr: false, loading: () => <HeroLoading /> }),
  "art-deco": dynamic(() => import("@/themes/art-deco/HeroSection"), { ssr: false, loading: () => <HeroLoading /> }),
  "matrix-rain": dynamic(() => import("@/themes/matrix-rain/HeroSection"), { ssr: false, loading: () => <HeroLoading /> }),
  "coral-reef": dynamic(() => import("@/themes/coral-reef/HeroSection"), { ssr: false, loading: () => <HeroLoading /> }),
  "sand-dunes": dynamic(() => import("@/themes/sand-dunes/HeroSection"), { ssr: false, loading: () => <HeroLoading /> }),
  cassette: dynamic(() => import("@/themes/cassette/HeroSection"), { ssr: false, loading: () => <HeroLoading /> }),
  hologram: dynamic(() => import("@/themes/hologram/HeroSection"), { ssr: false, loading: () => <HeroLoading /> }),
};

/* ---------- Dynamic feature cards per theme ---------- */

const featureCards: Record<string, React.ComponentType<FeatureCardProps>> = {
  voxel: dynamic(() => import("@/themes/voxel/FeatureCard"), { ssr: false }),
  glassmorphism: dynamic(() => import("@/themes/glassmorphism/FeatureCard"), { ssr: false }),
  "neon-cyberpunk": dynamic(() => import("@/themes/neon-cyberpunk/FeatureCard"), { ssr: false }),
  "retro-pixel": dynamic(() => import("@/themes/retro-pixel/FeatureCard"), { ssr: false }),
  minimal: dynamic(() => import("@/themes/minimal/FeatureCard"), { ssr: false }),
  "gradient-mesh": dynamic(() => import("@/themes/gradient-mesh/FeatureCard"), { ssr: false }),
  aurora: dynamic(() => import("@/themes/aurora/FeatureCard"), { ssr: false }),
  particles: dynamic(() => import("@/themes/particles/FeatureCard"), { ssr: false }),
  brutalist: dynamic(() => import("@/themes/brutalist/FeatureCard"), { ssr: false }),
  neumorphism: dynamic(() => import("@/themes/neumorphism/FeatureCard"), { ssr: false }),
  terminal: dynamic(() => import("@/themes/terminal/FeatureCard"), { ssr: false }),
  isometric: dynamic(() => import("@/themes/isometric/FeatureCard"), { ssr: false }),
  watercolor: dynamic(() => import("@/themes/watercolor/FeatureCard"), { ssr: false }),
  geometric: dynamic(() => import("@/themes/geometric/FeatureCard"), { ssr: false }),
  newspaper: dynamic(() => import("@/themes/newspaper/FeatureCard"), { ssr: false }),
  synthwave: dynamic(() => import("@/themes/synthwave/FeatureCard"), { ssr: false }),
  zen: dynamic(() => import("@/themes/zen/FeatureCard"), { ssr: false }),
  blueprint: dynamic(() => import("@/themes/blueprint/FeatureCard"), { ssr: false }),
  topography: dynamic(() => import("@/themes/topography/FeatureCard"), { ssr: false }),
  circuit: dynamic(() => import("@/themes/circuit/FeatureCard"), { ssr: false }),
  origami: dynamic(() => import("@/themes/origami/FeatureCard"), { ssr: false }),
  "stained-glass": dynamic(() => import("@/themes/stained-glass/FeatureCard"), { ssr: false }),
  marble: dynamic(() => import("@/themes/marble/FeatureCard"), { ssr: false }),
  constellation: dynamic(() => import("@/themes/constellation/FeatureCard"), { ssr: false }),
  "dna-helix": dynamic(() => import("@/themes/dna-helix/FeatureCard"), { ssr: false }),
  "art-deco": dynamic(() => import("@/themes/art-deco/FeatureCard"), { ssr: false }),
  "matrix-rain": dynamic(() => import("@/themes/matrix-rain/FeatureCard"), { ssr: false }),
  "coral-reef": dynamic(() => import("@/themes/coral-reef/FeatureCard"), { ssr: false }),
  "sand-dunes": dynamic(() => import("@/themes/sand-dunes/FeatureCard"), { ssr: false }),
  cassette: dynamic(() => import("@/themes/cassette/FeatureCard"), { ssr: false }),
  hologram: dynamic(() => import("@/themes/hologram/FeatureCard"), { ssr: false }),
};

/* ---------- Main Page ---------- */

export default function Home() {
  const [themeId, setThemeId] = useState<string>(DEFAULT_THEME_ID);
  const [paletteId, setPaletteId] = useState<string>(DEFAULT_PALETTE_ID);

  const theme = getThemeById(themeId) ?? getThemeById(DEFAULT_THEME_ID)!;
  const palette = getPaletteById(paletteId) ?? getPaletteById(DEFAULT_PALETTE_ID)!;
  const colors = palette.colors;

  const HeroSection = heroSections[themeId] ?? heroSections[DEFAULT_THEME_ID];
  const FeatureCard = featureCards[themeId] ?? featureCards[DEFAULT_THEME_ID];

  function handleThemeSelect(id: string) {
    setThemeId(id);
    const t = getThemeById(id);
    if (t) setPaletteId(t.defaultPaletteId);
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${theme.bodyClassName ?? ""}`}
      style={{ background: colors.background, color: colors.text }}
    >
      {/* Navigation */}
      <Nav brandName={siteConfig.brand.name} colors={colors} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16">
        <div className="absolute inset-0 z-0">
          <HeroSection />
        </div>
        <div className="absolute inset-0 z-10" style={{
          background: `linear-gradient(to right, ${colors.background}, ${colors.background}b3, transparent)`,
        }} />
        <div className="absolute bottom-0 left-0 right-0 z-10 h-40" style={{
          background: `linear-gradient(to top, ${colors.background}, transparent)`,
        }} />

        <div className="relative z-20 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
              style={{ border: `1px solid ${colors.primary}4d`, background: `${colors.primary}1a` }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#4ade80" }} />
              <span className="text-xs font-medium" style={{ color: colors.primary }}>{siteConfig.hero.badge}</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              <span style={{ color: colors.text }}>{siteConfig.hero.title} </span>
              <span className="gradient-text" style={{
                backgroundImage: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 50%, ${colors.accent} 100%)`,
              }}>
                {siteConfig.hero.highlight}
              </span>
              <br />
              <span style={{ color: colors.text }}>{siteConfig.hero.subtitle}</span>
            </h1>

            <p className="text-lg max-w-lg mb-8 leading-relaxed" style={{ color: colors.textMuted }}>
              {siteConfig.hero.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="group px-8 py-3.5 text-white font-semibold rounded-xl transition-all hover:scale-105"
                style={{ backgroundColor: colors.primary, boxShadow: `0 0 30px ${colors.primary}4d` }}>
                {siteConfig.hero.cta}
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
              </button>
              <button className="px-8 py-3.5 font-semibold rounded-xl transition-all hover:scale-[1.02]"
                style={{ color: colors.text, border: `1px solid ${colors.border}`, background: "transparent" }}>
                {siteConfig.hero.secondaryCta}
              </button>
            </div>

            <div className="grid grid-cols-4 gap-6 mt-12 pt-8" style={{ borderTop: `1px solid ${colors.border}` }}>
              {siteConfig.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold" style={{ color: colors.text }}>{stat.value}</div>
                  <div className="text-xs mt-1" style={{ color: colors.textMuted }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block" />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: colors.text }}>
              Everything you need to{" "}
              <span className="gradient-text" style={{
                backgroundImage: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 50%, ${colors.accent} 100%)`,
              }}>create</span>
            </h2>
            <p className="max-w-2xl mx-auto" style={{ color: colors.textMuted }}>
              Professional-grade tools wrapped in an interface so simple, anyone can build breathtaking landing pages.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.features.map((feature, index) => (
              <FeatureCard key={feature.title} title={feature.title} description={feature.description}
                color={colors.primary} accentColor={colors.accent} index={index} />
            ))}
          </div>
        </div>
      </section>

      <CTASection colors={colors} />

      <PricingSection
        pricing={siteConfig.pricing as unknown as Array<{ name: string; price: string; period?: string; features: string[]; highlighted?: boolean; cta: string }>}
        colors={colors}
      />

      <Footer
        brandName={siteConfig.brand.name}
        tagline={siteConfig.brand.tagline}
        columns={siteConfig.footer.columns as unknown as Array<{ title: string; links: string[] }>}
        colors={colors}
      />

      {/* Control Panel — side drawer */}
      <ControlPanel
        themes={themes}
        palettes={palettes}
        currentThemeId={themeId}
        currentPaletteId={paletteId}
        currentTheme={theme}
        currentPalette={palette}
        colors={colors}
        onThemeSelect={handleThemeSelect}
        onPaletteSelect={setPaletteId}
      />
    </div>
  );
}
