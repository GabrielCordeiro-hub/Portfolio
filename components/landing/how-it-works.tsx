import { Search, Settings, Rocket } from "lucide-react"

const steps = [
  {
    title: "Connect Your Data",
    description: "Integrate your existing apps and data sources with just a few clicks.",
    icon: Search,
  },
  {
    title: "Configure Workflow",
    description: "Set up your custom automation rules and business logic in our intuitive editor.",
    icon: Settings,
  },
  {
    title: "Launch & Scale",
    description: "Deploy your solution effortlessly and watch your business grow in real-time.",
    icon: Rocket,
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-muted/30 py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Get up and running in minutes with our simple three-step process.
          </p>
        </div>

        <div className="mt-20 relative">
          {/* Connector Line (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-primary/10 -translate-y-1/2 hidden md:block" />
          
          <div className="grid gap-12 md:grid-cols-3 relative z-10">
            {steps.map((step, idx) => (
              <div key={step.title} className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl ring-8 ring-background">
                  <step.icon className="h-8 w-8" />
                </div>
                <div className="bg-background rounded-3xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow h-full">
                  <span className="text-primary font-bold text-xs tracking-widest uppercase mb-2 block">Step {idx + 1}</span>
                  <h3 className="font-serif text-xl font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
