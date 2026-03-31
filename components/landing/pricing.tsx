import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$49",
    description: "Perfect for small teams and startups.",
    features: ["Up to 3 Projects", "Basic Analytics", "24/7 Support", "1GB Storage"],
    cta: "Start for Free",
    popular: false,
  },
  {
    name: "Professional",
    price: "$99",
    description: "Advanced features for growing businesses.",
    features: ["Unlimited Projects", "Advanced Analytics", "Priority Support", "10GB Storage", "Custom Domains"],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for large organizations.",
    features: ["Everything in Pro", "Dedicated Account Manager", "SSO & Security", "Unlimited Storage", "Custom Contracts"],
    cta: "Contact Sales",
    popular: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="bg-muted/30 py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose the plan that fits your needs. No hidden fees.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-3xl border p-8 shadow-sm transition-all duration-300 hover:shadow-xl ${
                plan.popular
                  ? "border-primary bg-card ring-1 ring-primary"
                  : "border-border bg-card"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground">
                  MOST POPULAR
                </div>
              )}
              <h3 className="font-serif text-xl font-bold text-foreground">
                {plan.name}
              </h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tight text-foreground">
                  {plan.price}
                </span>
                {plan.price !== "Custom" && (
                  <span className="text-sm font-semibold text-muted-foreground">
                    /month
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm text-balance text-muted-foreground">
                {plan.description}
              </p>

              <ul className="mt-8 flex flex-col gap-4 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-foreground/80">
                    <Check className="h-4 w-4 text-primary shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-10 rounded-xl px-6 py-3 text-center text-sm font-semibold transition-all ${
                  plan.popular
                    ? "bg-primary text-primary-foreground shadow-lg hover:brightness-110"
                    : "border border-border bg-muted/50 text-foreground hover:bg-muted"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
