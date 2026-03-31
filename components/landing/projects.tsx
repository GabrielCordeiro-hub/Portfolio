import Link from "next/link"
import { ExternalLink, Clock } from "lucide-react"

const projects = [
  {
    title: "Startup Landing Page",
    category: "Landing Page",
    description: "A high-converting startup landing page with modern design, animations, and clear call-to-actions to capture leads.",
    href: "/projects/startup-landing",
    tags: ["React", "Next.js", "Tailwind"],
    status: "coming-soon",
    gradient: "from-cw-blue to-blue-400",
  },
  {
    title: "Restaurant Website",
    category: "Business Website",
    description: "A visually rich restaurant website with menu showcase, reservations, and a delicious user experience.",
    href: "/projects/restaurant",
    tags: ["React", "CSS", "Bootstrap"],
    status: "coming-soon",
    gradient: "from-cw-purple to-purple-400",
  },
  {
    title: "SaaS Dashboard",
    category: "Web Application",
    description: "A professional SaaS analytics dashboard with data visualization, user management and clean UI.",
    href: "/projects/saas-dashboard",
    tags: ["Next.js", "Tailwind", "JavaScript"],
    status: "coming-soon",
    gradient: "from-cw-blue to-cw-purple",
  },
]

export function Projects() {
  return (
    <section id="projects" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-3 inline-block rounded-full bg-cw-purple/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-cw-purple">
            MY WORK
          </span>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Real projects I build to solve real problems — each one crafted
            with attention to detail and performance in mind.
          </p>
        </div>

        {/* Project Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image placeholder with gradient */}
              <div className={`relative flex h-52 items-center justify-center bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                <span className="font-serif text-5xl font-extrabold text-primary-foreground/20 select-none">
                  {project.category.charAt(0)}
                </span>
                {/* Coming Soon badge */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <span className="flex items-center gap-2 rounded-xl bg-card/90 px-5 py-2.5 text-sm font-semibold text-foreground shadow-lg">
                    <Clock className="h-4 w-4 text-cw-blue" />
                    Coming Soon
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-xs font-semibold tracking-wide text-cw-blue">
                  {project.category}
                </span>
                <h3 className="mt-2 font-serif text-lg font-bold text-foreground group-hover:text-cw-purple transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
