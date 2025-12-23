import { Check, Sparkles, Zap, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingFeature {
  label: string;
  value: string;
}

interface PricingCardProps {
  name: string;
  subtitle?: string;
  description: string;
  price: string;
  priceLabel?: string;
  features: PricingFeature[];
  popular?: boolean;
  icon: "growth" | "scale" | "enterprise";
  delay?: number;
}

const icons = {
  growth: Sparkles,
  scale: Zap,
  enterprise: Building2,
};

export const PricingCard = ({
  name,
  subtitle,
  description,
  price,
  priceLabel = "/ mes",
  features,
  popular = false,
  icon,
  delay = 0,
}: PricingCardProps) => {
  const Icon = icons[icon];

  return (
    <div
      className={cn(
        "relative flex flex-col rounded-2xl border transition-all duration-500 opacity-0 animate-slide-up h-full",
        popular ? "z-10" : ""
      )}
      style={{
        animationDelay: `${delay}ms`,
        borderColor: popular
          ? "hsl(28 90% 55% / 0.5)"
          : "hsl(220 20% 20% / 0.5)",
        background:
          "linear-gradient(180deg, hsl(220 25% 14%) 0%, hsl(220 25% 10%) 100%)",
        boxShadow: popular
          ? "0 20px 25px -5px hsl(0 0% 0% / 0.4), 0 8px 10px -6px hsl(0 0% 0% / 0.3)"
          : "0 4px 6px -1px hsl(0 0% 0% / 0.3), 0 2px 4px -2px hsl(0 0% 0% / 0.2)",
      }}
      onMouseEnter={(e) => {
        if (!popular) {
          e.currentTarget.style.boxShadow =
            "0 20px 25px -5px hsl(0 0% 0% / 0.4), 0 8px 10px -6px hsl(0 0% 0% / 0.3)";
          e.currentTarget.style.borderColor = "hsl(220 20% 20%)";
        }
      }}
      onMouseLeave={(e) => {
        if (!popular) {
          e.currentTarget.style.boxShadow =
            "0 4px 6px -1px hsl(0 0% 0% / 0.3), 0 2px 4px -2px hsl(0 0% 0% / 0.2)";
          e.currentTarget.style.borderColor = "hsl(220 20% 20% / 0.5)";
        }
      }}
    >
      {/* Popular badge */}
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span
            className="px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg"
            style={{
              background:
                "linear-gradient(135deg, hsl(28 90% 55%) 0%, hsl(22 85% 50%) 100%)",
              color: "hsl(220 30% 8%)",
              animation: "pulse-glow 2s ease-in-out infinite",
            }}
          >
            Más Popular
          </span>
        </div>
      )}

      {/* Header */}
      <div className="p-6 pb-4">
        <div className="flex items-center gap-3 mb-3">
          <div
            className="p-2.5 rounded-xl"
            style={{
              backgroundColor: popular
                ? "hsl(28 90% 55% / 0.2)"
                : "hsl(220 20% 18%)",
            }}
          >
            <Icon
              className="w-5 h-5"
              style={{
                color: popular ? "hsl(28 90% 55%)" : "hsl(180 60% 50%)",
              }}
            />
          </div>
          <div>
            <h3
              className="text-lg font-bold"
              style={{ color: "hsl(210 40% 98%)" }}
            >
              {name}
            </h3>
            {subtitle && (
              <p
                className="text-xs font-medium"
                style={{ color: "hsl(180 60% 50%)" }}
              >
                {subtitle}
              </p>
            )}
          </div>
        </div>
        <p
          className="text-xs leading-relaxed"
          style={{ color: "hsl(215 20% 65%)" }}
        >
          {description}
        </p>
      </div>

      {/* Price */}
      <div
        className="px-6 py-4 border-y"
        style={{ borderColor: "hsl(220 20% 20% / 0.3)" }}
      >
        <div className="flex items-baseline gap-1">
          <span className="text-xs" style={{ color: "hsl(215 20% 65%)" }}>
            USD
          </span>
          <span
            className="text-3xl font-bold"
            style={
              popular
                ? {
                    backgroundImage:
                      "linear-gradient(135deg, hsl(180 60% 50%) 0%, hsl(28 90% 55%) 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }
                : { color: "hsl(210 40% 98%)" }
            }
          >
            {price}
          </span>
          <span style={{ color: "hsl(215 20% 65%)" }}>{priceLabel}</span>
        </div>
      </div>

      {/* Features table */}
      <div className="flex-1 p-6">
        <div className="space-y-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start justify-between gap-4 py-2 border-b last:border-0"
              style={{ borderColor: "hsl(220 20% 20% / 0.2)" }}
            >
              <div className="flex items-center gap-2.5">
                <Check
                  className="w-3.5 h-3.5 flex-shrink-0"
                  style={{
                    color: popular ? "hsl(28 90% 55%)" : "hsl(180 60% 50%)",
                  }}
                />
                <span className="text-xs" style={{ color: "hsl(215 20% 65%)" }}>
                  {feature.label}
                </span>
              </div>
              <span
                className="text-xs font-medium text-right"
                style={{ color: "hsl(210 40% 98%)" }}
              >
                {feature.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="p-6 pt-0">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfvYxwGtn9eYxJY1AbW_6lu8rFZdCa381Zou6Jo9kisOYdYQw/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3 px-5 rounded-xl text-sm font-semibold transition-all duration-300 block text-center"
          style={
            popular
              ? {
                  background:
                    "linear-gradient(135deg, hsl(28 90% 55%) 0%, hsl(22 85% 50%) 100%)",
                  color: "hsl(220 30% 8%)",
                  boxShadow: "0 0 40px hsl(28 90% 55% / 0.3)",
                }
              : {
                  backgroundColor: "hsl(220 20% 18%)",
                  color: "hsl(210 40% 98%)",
                  border: "1px solid hsl(220 20% 20%)",
                }
          }
          onMouseEnter={(e) => {
            if (popular) {
              e.currentTarget.style.opacity = "0.9";
            } else {
              e.currentTarget.style.backgroundColor = "hsl(220 20% 18% / 0.8)";
            }
          }}
          onMouseLeave={(e) => {
            if (popular) {
              e.currentTarget.style.opacity = "1";
            } else {
              e.currentTarget.style.backgroundColor = "hsl(220 20% 18%)";
            }
          }}
        >
          {popular ? "Comenzar Ahora" : "Solicitar Demo"}
        </a>
      </div>
    </div>
  );
};
