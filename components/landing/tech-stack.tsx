import { Blocks, FileCode2, LayoutTemplate, Palette, Network, Box } from "lucide-react"

const technologies = [
    { name: "Next.js", icon: LayoutTemplate, color: "text-neutral-900 dark:text-neutral-100" },
    { name: "React", icon: Blocks, color: "text-cw-blue" },
    { name: "Tailwind CSS", icon: Palette, color: "text-cyan-500" },
    { name: "TypeScript", icon: FileCode2, color: "text-blue-600" },
    { name: "REST APIs", icon: Network, color: "text-indigo-500" },
    { name: "Bootstrap", icon: Box, color: "text-violet-500" },
]

export function TechStack() {
    return (
        <section className="border-y border-border/40 bg-card py-12 md:py-16 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-8 text-center">
                    <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                        My Tech Stack
                    </p>
                </div>

                {/* Infinite Marquee Wrapper */}
                <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                    {/* Gradient Masks for smooth fade on edges */}
                    <div className="absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-card to-transparent"></div>
                    <div className="absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-card to-transparent"></div>

                    <div className="flex w-full overflow-hidden">
                        <div className="flex w-max animate-infinite-scroll items-center justify-around gap-12 sm:gap-20 pr-12 sm:pr-20">
                            {/* Quadruple items so loop stays seamless with few items */}
                            {[...technologies, ...technologies, ...technologies, ...technologies].map((tech, idx) => (
                                <div
                                    key={`${tech.name}-${idx}`}
                                    className="group flex flex-col items-center justify-start gap-3 transition-transform hover:scale-110 w-24 h-28"
                                >
                                    <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-background shadow-sm border border-border/50 group-hover:border-transparent group-hover:shadow-md transition-all duration-300 ${tech.color}`}>
                                        <tech.icon className="h-8 w-8" strokeWidth={1.5} />
                                    </div>
                                    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center leading-tight">
                                        {tech.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
