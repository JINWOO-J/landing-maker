"use client";

interface NavColors {
  primary: string;
  background: string;
  text: string;
  textMuted: string;
  border: string;
}

interface NavProps {
  brandName: string;
  colors: NavColors;
}

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Showcase", href: "#showcase" },
  { label: "Pricing", href: "#pricing" },
  { label: "Docs", href: "#docs" },
];

export default function Nav({ brandName, colors }: NavProps) {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl"
      style={{
        backgroundColor: `${colors.background}cc`,
        borderBottom: `1px solid ${colors.border}`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-lg rotate-12 flex items-center justify-center"
            style={{ backgroundColor: colors.primary }}
          >
            <div className="w-4 h-4 bg-white rounded-sm" />
          </div>
          <span className="text-lg font-bold" style={{ color: colors.text }}>
            {brandName}
          </span>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm transition-colors"
              style={{ color: colors.textMuted }}
              onMouseEnter={(e) => { e.currentTarget.style.color = colors.text; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = colors.textMuted; }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            className="text-sm px-4 py-2 transition-colors"
            style={{ color: colors.textMuted }}
            onMouseEnter={(e) => { e.currentTarget.style.color = colors.text; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = colors.textMuted; }}
          >
            Sign In
          </button>
          <button
            className="text-sm text-white px-4 py-2 rounded-lg transition-colors"
            style={{ backgroundColor: colors.primary }}
            onMouseEnter={(e) => { e.currentTarget.style.filter = "brightness(1.15)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.filter = "brightness(1)"; }}
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
