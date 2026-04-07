export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  border: string;
  text: string;
  textMuted: string;
}

export interface ThemeDefinition {
  id: string;
  name: string;
  description: string;
  preview: string;
  defaultPaletteId: string;
  bodyClassName?: string;
}

export interface HeroSectionProps {
  className?: string;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  color: string;
  accentColor: string;
  index: number;
}
