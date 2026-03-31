import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-background pt-28 pb-20 md:pt-36 md:pb-32"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-cw-blue/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-cw-purple/5 blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 md:flex-row md:gap-16">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <span className="mb-4 inline-block rounded-full bg-cw-blue/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-cw-blue uppercase">
            Front-end Developer
          </span>
          <h1 className="font-serif text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl lg:text-7xl text-balance">
            Hi, I&apos;m{" "}
            <span className="text-cw-blue">
              Gabriel Cordeiro
            </span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground md:text-xl">
            Passionate about building exceptional digital experiences. 
            I specialize in crafting modern, responsive, and user-centric web applications.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row md:items-start">
            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-xl border border-cw-blue bg-card px-8 py-4 text-sm font-semibold text-foreground shadow-sm transition-all hover:bg-cw-blue hover:text-white dark:hover:bg-cw-blue dark:hover:text-white"
            >
              View My Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 rounded-xl border border-border bg-card px-8 py-4 text-sm font-semibold text-foreground shadow-sm transition-all hover:border-cw-blue/30 hover:shadow-md"
            >
              Contact Me
            </a>
          </div>

          {/* Social Links Quick Access */}
          <div className="mt-10 flex items-center justify-center gap-4 md:justify-start">
            <a href="https://github.com/GabrielCordeiro-hub" target="_blank" className="text-muted-foreground hover:text-cw-blue transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/gabriel-cordeiro-9b8993335/" target="_blank" className="text-muted-foreground hover:text-cw-blue transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:cordeirogabriel090@gmail.com" className="text-muted-foreground hover:text-cw-blue transition-colors">
              <Mail className="h-5 w-5" />
            </a>
            <div className="h-4 w-px bg-border mx-2" />
            <span className="text-sm font-medium text-muted-foreground flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              Available for projects
            </span>
          </div>
        </div>

        {/* Hero Visual - Personal Avatar */}
        <div className="flex flex-1 justify-center">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-cw-blue/20 to-cw-purple/20 blur-2xl" />
            <div className="relative flex h-72 w-72 items-center justify-center rounded-3xl bg-card shadow-2xl md:h-96 md:w-96 border border-cw-blue/20 dark:border-white/10">
              <div className="flex flex-col items-center gap-2">
                <span className="font-serif text-8xl font-extrabold text-foreground select-none">
                  GC
                </span>
                <span className="text-xl font-bold text-muted-foreground uppercase tracking-widest">Front-end</span>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 rounded-2xl border border-border bg-card p-5 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-blue-500/10 flex items-center justify-center text-cw-blue">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground">Location</p>
                  <p className="text-sm font-bold text-foreground">Brazil</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { MapPin } from "lucide-react"
