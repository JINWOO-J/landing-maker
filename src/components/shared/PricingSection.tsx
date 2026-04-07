"use client";

interface PricingPlan {
  name: string;
  price: string;
  period?: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

interface PricingSectionProps {
  pricing: PricingPlan[];
  colors: {
    primary: string;
    text: string;
    textMuted: string;
    border: string;
    surface: string;
    background: string;
  };
}

export default function PricingSection({ pricing, colors }: PricingSectionProps) {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: colors.background }}>
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          style={{ color: colors.text }}
        >
          Simple, transparent pricing
        </h2>
        <p
          className="text-center mb-16 text-lg"
          style={{ color: colors.textMuted }}
        >
          Choose the plan that fits your needs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricing.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 transition-transform duration-300 ${
                plan.highlighted ? "scale-105" : ""
              }`}
              style={{
                backgroundColor: colors.surface,
                border: `1px solid ${plan.highlighted ? colors.primary : colors.border}`,
                boxShadow: plan.highlighted
                  ? `0 0 40px ${colors.primary}25, 0 0 80px ${colors.primary}10`
                  : "none",
              }}
            >
              {plan.highlighted && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold text-white"
                  style={{ backgroundColor: colors.primary }}
                >
                  Most Popular
                </div>
              )}

              <h3
                className="text-xl font-bold mb-2"
                style={{ color: colors.text }}
              >
                {plan.name}
              </h3>

              <div className="mb-6">
                <span
                  className="text-4xl font-bold"
                  style={{ color: colors.text }}
                >
                  {plan.price}
                </span>
                {plan.period && (
                  <span
                    className="text-sm ml-1"
                    style={{ color: colors.textMuted }}
                  >
                    /{plan.period}
                  </span>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start gap-2 text-sm"
                    style={{ color: colors.textMuted }}
                  >
                    <svg
                      className="w-5 h-5 flex-shrink-0 mt-0.5"
                      style={{ color: colors.primary }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className="w-full py-3 px-6 rounded-xl font-semibold text-sm transition-opacity duration-200 hover:opacity-90"
                style={{
                  backgroundColor: plan.highlighted ? colors.primary : "transparent",
                  color: plan.highlighted ? "#ffffff" : colors.text,
                  border: plan.highlighted ? "none" : `1px solid ${colors.border}`,
                }}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
