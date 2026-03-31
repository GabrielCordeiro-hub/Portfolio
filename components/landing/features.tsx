import { Zap, Shield, Smartphone, Layers } from "lucide-react"

const features = [
  {
    title: "Lightning Fast",
    description: "Optimized engine for real-time data processing and instant results.",
    icon: Zap,
  },
  {
    title: "Enterprise Security",
    description: "Multi-layer encryption and compliance out of the box for your peace of mind.",
    icon: Shield,
  },
  {
    title: "Mobile First",
    description: "A seamless experience across all devices with our responsive platform.",
    icon: Smartphone,
  },
  {
    title: "Seamless Integration",
    description: "Connect with your favorite tools in seconds with our pre-built connectors.",
    icon: Layers,
  },
]

export function Features() {
  return (
    <section id="features" className="bg-background py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Everything you need to scale
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            CodeWave Studio provides a comprehensive suite of tools designed for modern SaaS teams.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-3xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/20"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
