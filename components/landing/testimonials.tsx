import { Briefcase, GraduationCap } from "lucide-react"

const experience = [
  {
    title: "Systems Analysis & Development",
    company: "Student",
    period: "2026 - Present",
    description: "Focused on learning software development best practices, architecture, and modern web technologies.",
    type: "education",
  },
  {
    title: "Freelance Front-end Developer",
    company: "Personal Projects",
    period: "2026 - Present",
    description: "Creation and continuous evolution of digital experiences, focusing on delivering high-quality, responsive, and user-centric web solutions.",
    type: "work",
  },
  {
    title: "Front-end Training Courses",
    company: "Alura",
    period: "2023 - 2026",
    description: "Completed comprehensive training in JavaScript, TypeScript, HTML5, CSS3, React, Next.js, Tailwind CSS, and Bootstrap.",
    type: "education",
  },
]

export function Testimonials() {
  return (
    <section id="experience" className="bg-background py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-4 inline-block rounded-full bg-cw-blue/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-cw-blue">
            MY JOURNEY
          </span>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            Experience & Education
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A look at my professional path and academic background in software development.
          </p>
        </div>

        <div className="mt-16 max-w-4xl mx-auto flex flex-col gap-8">
          {experience.map((item, i) => (
            <div 
              key={i} 
              className="group relative flex gap-6 rounded-3xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cw-blue/10 text-cw-blue">
                {item.type === "work" ? <Briefcase className="h-6 w-6" /> : <GraduationCap className="h-6 w-6" />}
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-cw-blue transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm font-medium text-cw-blue">{item.company}</p>
                  </div>
                  <span className="inline-block rounded-full bg-muted border border-border/50 px-4 py-1 text-xs font-bold text-muted-foreground whitespace-nowrap dark:bg-white/5 dark:border-white/10 dark:text-white/70">
                    {item.period}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
