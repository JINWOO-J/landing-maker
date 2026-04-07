"use client";

interface FooterColors {
  primary: string;
  background: string;
  text: string;
  textMuted: string;
  border: string;
}

interface FooterColumn {
  title: string;
  links: string[];
}

interface FooterProps {
  brandName: string;
  tagline: string;
  columns: FooterColumn[];
  colors: FooterColors;
}

export default function Footer({ brandName, tagline, columns, colors }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-12"
      style={{ borderTop: `1px solid ${colors.border}` }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="grid gap-8"
          style={{
            gridTemplateColumns: `1.5fr ${columns.map(() => "1fr").join(" ")}`,
          }}
        >
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
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
            <p className="text-sm" style={{ color: colors.textMuted }}>
              {tagline}
            </p>
          </div>

          {/* Dynamic Columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4
                className="text-sm font-semibold mb-4"
                style={{ color: colors.text }}
              >
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm transition-colors"
                      style={{ color: colors.textMuted }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = colors.text;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = colors.textMuted;
                      }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright Row */}
        <div
          className="mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: `1px solid ${colors.border}` }}
        >
          <p className="text-xs" style={{ color: colors.textMuted }}>
            &copy; {currentYear} {brandName}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs transition-colors"
                style={{ color: colors.textMuted }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = colors.text;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = colors.textMuted;
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
