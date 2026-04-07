"use client";

interface CTASectionProps {
  colors: {
    primary: string;
    text: string;
    textMuted: string;
    border: string;
    surface: string;
  };
}

export default function CTASection({ colors }: CTASectionProps) {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div
          className="rounded-2xl p-12 md:p-16 text-center"
          style={{
            backgroundColor: colors.surface,
            border: `1px solid ${colors.border}`,
          }}
        >
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: colors.text }}
          >
            Ready to build your next landing page?
          </h2>
          <p
            className="text-lg mb-8 max-w-2xl mx-auto"
            style={{ color: colors.textMuted }}
          >
            Join thousands of creators already building amazing pages.
            Start for free, no credit card required.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              className="px-8 py-3 rounded-xl font-semibold text-sm transition-opacity duration-200 hover:opacity-90 text-white"
              style={{ backgroundColor: colors.primary }}
            >
              Get Started Free
            </button>
            <button
              className="px-8 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-80"
              style={{
                color: colors.text,
                border: `1px solid ${colors.border}`,
                backgroundColor: "transparent",
              }}
            >
              View Documentation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
