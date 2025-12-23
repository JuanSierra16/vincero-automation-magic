import { PricingCard } from "./PricingCard";

const plans = [
  {
    name: "Growth",
    subtitle: "Strategic Insights",
    description:
      "Visibilidad operativa y segmentación avanzada que convierte datos en decisiones sin depender de ingeniería.",
    price: "899",
    icon: "growth" as const,
    features: [
      { label: "Registros", value: "Hasta 150.000" },
      { label: "Transacciones mensuales", value: "Hasta 1.200.000" },
      { label: "Dashboards", value: "Ejecutivos" },
      { label: "Segmentación", value: "RFM estándar" },
      { label: "Automatizaciones", value: "Básicas" },
      { label: "Soporte", value: "Prioritario" },
    ],
  },
  {
    name: "Scale",
    subtitle: "Operational Intelligence",
    description:
      "Orquesta datos, campañas y segmentaciones avanzadas para maximizar retención, frecuencia y valor del jugador.",
    price: "1.690",
    icon: "scale" as const,
    popular: true,
    features: [
      { label: "Registros", value: "Hasta 400.000 – 500.000" },
      { label: "Transacciones mensuales", value: "Hasta 4 – 5 millones" },
      { label: "Dashboards", value: "Operativos + ejecutivos" },
      { label: "Segmentación", value: "Avanzada" },
      { label: "Automatizaciones", value: "Avanzadas" },
      { label: "Soporte", value: "Dedicado" },
    ],
  },
  {
    name: "Enterprise",
    subtitle: "Data Platform",
    description:
      "IA, personalización en tiempo real y orquestación multicanal para estrategias end-to-end.",
    price: "3.000",
    priceLabel: "/ mes (desde)",
    icon: "enterprise" as const,
    features: [
      { label: "Registros", value: "Desde 1M" },
      { label: "Transacciones mensuales", value: "Desde 10M" },
      { label: "Dashboards", value: "Custom" },
      { label: "Segmentación", value: "Custom" },
      { label: "Automatizaciones", value: "Custom" },
      { label: "Soporte", value: "Dedicado + SLA" },
    ],
  },
];

export const PricingSection = () => {
  return (
    <section
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, hsl(220 30% 8%) 0%, hsl(200 40% 12%) 50%, hsl(220 30% 8%) 100%)",
      }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: "hsl(28 90% 55% / 0.05)" }}
        />
        <div
          className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: "hsl(180 60% 50% / 0.05)" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium border mb-6"
            style={{
              backgroundColor: "hsl(220 20% 18%)",
              color: "hsl(180 60% 50%)",
              borderColor: "hsl(220 20% 20% / 0.5)",
            }}
          >
            Planes & Precios
          </span>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
            style={{ color: "hsl(210 40% 98%)" }}
          >
            Data y acción: decisiones inteligentes para{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, hsl(180 60% 50%) 0%, hsl(28 90% 55%) 100%)",
              }}
            >
              tu operación iGaming
            </span>
          </h1>
          <p
            className="text-base max-w-3xl mx-auto leading-relaxed"
            style={{ color: "hsl(215 20% 65%)" }}
          >
            Consolida, segmenta y orquesta campañas con datos unificados, IA y
            automatización —{" "}
            <span className="font-medium" style={{ color: "hsl(180 60% 50%)" }}>
              diseñado para operadores de apuestas y gaming de alto volumen.
            </span>
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {plans.map((plan, index) => (
            <PricingCard key={plan.name} {...plan} delay={index * 150} />
          ))}
        </div>

        {/* Enterprise note */}
        <div
          className="mt-12 text-center opacity-0 animate-fade-in"
          style={{ animationDelay: "600ms" }}
        >
          <p
            className="text-sm max-w-2xl mx-auto"
            style={{ color: "hsl(215 20% 65%)" }}
          >
            Diseñado para operadores de apuestas y gaming con datos unificados,
            automatización avanzada e IA para impulsar retención, engagement y
            crecimiento sostenible.
          </p>
        </div>

        {/* Trust indicators */}
        <div
          className="mt-16 flex flex-wrap justify-center gap-8 opacity-0 animate-fade-in"
          style={{ animationDelay: "800ms" }}
        >
          {[
            { value: "+30%", label: "conversión" },
            { value: "10X", label: "más rápido" },
            { value: "80%", label: "menos tiempo" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-xl font-bold"
                style={{ color: "hsl(28 90% 55%)" }}
              >
                {stat.value}
              </div>
              <div className="text-xs" style={{ color: "hsl(215 20% 65%)" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
