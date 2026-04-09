"use client"

const skills = [
  {
    category: "Languages & Runtime",
    color: "from-emerald-500 to-teal-400",
    items: ["JavaScript", "TypeScript", "Node.js", "HTML5", "CSS3"],
  },
  {
    category: "Frameworks & APIs",
    color: "from-orange-500 to-amber-400",
    items: ["React", "Next.js", "REST APIs", "Tailwind CSS", "Bootstrap"],
  },
  {
    category: "Tools & Workflow",
    color: "from-rose-500 to-pink-400",
    items: ["Git", "GitHub", "Figma", "VS Code", "Responsive Design", "Performance Optimization"],
  },
]

const techBadges = [
  { name: "JavaScript", bg: "bg-yellow-400/10 text-yellow-600 dark:text-yellow-400 border-yellow-400/20" },
  { name: "TypeScript", bg: "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20" },
  { name: "Node.js", bg: "bg-green-500/10 text-green-700 dark:text-green-500 border-green-500/20" },
  { name: "React", bg: "bg-cyan-400/10 text-cyan-600 dark:text-cyan-400 border-cyan-400/20" },
  { name: "Next.js", bg: "bg-foreground/10 text-foreground border-foreground/20" },
  { name: "REST APIs", bg: "bg-indigo-400/10 text-indigo-600 dark:text-indigo-400 border-indigo-400/20" },
  { name: "Tailwind CSS", bg: "bg-teal-400/10 text-teal-600 dark:text-teal-400 border-teal-400/20" },
  { name: "Bootstrap", bg: "bg-violet-400/10 text-violet-600 dark:text-violet-400 border-violet-400/20" },
  { name: "HTML5", bg: "bg-orange-400/10 text-orange-600 dark:text-orange-400 border-orange-400/20" },
  { name: "CSS3", bg: "bg-blue-400/10 text-blue-600 dark:text-blue-400 border-blue-400/20" },
  { name: "Figma", bg: "bg-pink-400/10 text-pink-600 dark:text-pink-400 border-pink-400/20" },
  { name: "Git", bg: "bg-red-400/10 text-red-600 dark:text-red-400 border-red-400/20" },
  { name: "Responsive Design", bg: "bg-rose-400/10 text-rose-600 dark:text-rose-400 border-rose-400/20" },
  { name: "Performance Optimization", bg: "bg-emerald-400/10 text-emerald-600 dark:text-emerald-400 border-emerald-400/20" },
]

export function Services() {
  return (
    <section id="skills" className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-3 inline-block rounded-full bg-cw-blue/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-cw-blue">
            WHAT I KNOW
          </span>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            My Skills & Technologies
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Technologies I use to build modern, responsive and high-performance
            web applications.
          </p>
        </div>

        {/* Tech Badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {techBadges.map((badge) => (
            <span
              key={badge.name}
              className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:shadow-md ${badge.bg}`}
            >
              {badge.name}
            </span>
          ))}
        </div>

        {/* Skill Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="group rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className={`mb-6 h-1.5 w-12 rounded-full bg-gradient-to-r ${skill.color}`} />
              <h3 className="font-serif text-lg font-bold text-foreground">
                {skill.category}
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className={`h-1.5 w-1.5 rounded-full bg-gradient-to-br ${skill.color} shrink-0`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
