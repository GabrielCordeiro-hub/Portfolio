import { Code2, Layers, Smartphone, GitBranch } from "lucide-react"

const stats = [
  {
    icon: Code2,
    value: "3+",
    label: "Years Coding",
  },
  {
    icon: Layers,
    value: "14+",
    label: "Technologies",
  },
  {
    icon: Smartphone,
    value: "100%",
    label: "Responsive Design",
  },
  {
    icon: GitBranch,
    value: "Git",
    label: "Version Control",
  },
]

export function Stats() {
  return (
    <section id="about" className="relative overflow-hidden bg-background dark:bg-gradient-to-r dark:from-cw-blue dark:to-cw-purple py-20 md:py-24 border-y border-border dark:border-none">
      {/* Decorative pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-10 dark:opacity-20">
        <div className="absolute top-0 left-0 h-64 w-64 rounded-full bg-cw-blue blur-3xl" />
        <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-cw-purple blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground dark:text-primary-foreground md:text-4xl text-balance">
            About Me
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground dark:text-primary-foreground/80">
            I&apos;m Gabriel Cordeiro, a Front-end Developer passionate about
            building clean interfaces and great user experiences. I focus on
            writing maintainable code and delivering projects that truly work.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-muted/80 border border-border/50 dark:bg-white/10 dark:border-white/5 transition-all shadow-sm">
                <stat.icon className="h-7 w-7 text-cw-blue dark:text-white" />
              </div>
              <span className="font-serif text-4xl font-extrabold text-foreground dark:text-primary-foreground md:text-5xl">
                {stat.value}
              </span>
              <span className="mt-2 text-sm font-medium text-muted-foreground dark:text-primary-foreground/80">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
