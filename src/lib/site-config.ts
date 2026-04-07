export const siteConfig = {
  brand: {
    name: "PageCraft",
    tagline: "The next-generation platform for building stunning landing pages.",
  },
  hero: {
    badge: "Now in Public Beta",
    title: "Build Your",
    highlight: "Landing",
    subtitle: "Pages",
    description:
      "The next-generation design platform. Craft stunning landing pages, explore themes and color palettes, and deploy pixel-perfect experiences — all from your browser.",
    cta: "Start Creating",
    secondaryCta: "View Demo",
  },
  features: [
    {
      title: "Visual Editor",
      description:
        "Intuitive drag-and-drop page editor. Arrange sections, tweak styles, and preview in real-time with zero learning curve.",
      color: "#6366f1",
      accentColor: "#6366f1",
    },
    {
      title: "Theme Library",
      description:
        "Choose from dozens of curated themes — minimal, brutalist, glassmorphism, synthwave, and more. One click to transform.",
      color: "#38bdf8",
      accentColor: "#38bdf8",
    },
    {
      title: "Real-time Collab",
      description:
        "Build together with your team. See changes instantly, resolve conflicts automatically. Multiplayer creation.",
      color: "#f43f5e",
      accentColor: "#f43f5e",
    },
    {
      title: "Export Anywhere",
      description:
        "Export to HTML, React, or Next.js. Deploy directly to Vercel, Netlify, or any hosting — your pages, everywhere.",
      color: "#f97316",
      accentColor: "#f97316",
    },
  ],
  stats: [
    { value: "50K+", label: "Creators" },
    { value: "2M+", label: "Pages Built" },
    { value: "99.9%", label: "Uptime" },
    { value: "< 1s", label: "Load Time" },
  ],
  pricing: [
    {
      name: "Starter",
      price: "$0",
      period: "/mo",
      features: ["5 Projects", "Basic Editor", "Community Support", "HTML Export"],
      highlighted: false,
      cta: "Get Started",
    },
    {
      name: "Pro",
      price: "$19",
      period: "/mo",
      features: [
        "Unlimited Projects",
        "Advanced Editor",
        "Priority Support",
        "All Export Formats",
        "Custom Themes",
        "Team Collab (5 seats)",
      ],
      highlighted: true,
      cta: "Start Free Trial",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      features: [
        "Everything in Pro",
        "Unlimited Seats",
        "Custom Integrations",
        "SLA & Dedicated Support",
        "On-premise Option",
        "White-label Branding",
      ],
      highlighted: false,
      cta: "Contact Sales",
    },
  ],
  footer: {
    columns: [
      { title: "Product", links: ["Features", "Pricing", "Changelog", "Roadmap"] },
      { title: "Resources", links: ["Documentation", "Tutorials", "Blog", "Community"] },
      { title: "Company", links: ["About", "Careers", "Press", "Contact"] },
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
