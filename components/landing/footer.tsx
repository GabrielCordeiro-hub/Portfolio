import { Github, Linkedin, Mail } from "lucide-react"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
]

const socials = [
  { icon: Github, href: "https://github.com/GabrielCordeiro-hub", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/gabriel-cordeiro-9b8993335/", label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="bg-background text-muted-foreground border-t border-border dark:bg-cw-dark dark:text-primary-foreground/70 dark:border-white/5">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="text-center md:text-left">
            <a href="#home" className="flex items-center justify-center gap-2 md:justify-start text-foreground dark:text-primary-foreground transition-colors hover:text-cw-blue">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cw-blue to-cw-purple">
                <span className="font-serif text-sm font-bold text-black dark:text-white">GC</span>
              </div>
              <span className="font-serif text-xl font-bold">
                Gabriel <span className="text-cw-blue">Cordeiro</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Systems Analysis & Development student, focused on 
              front-end development and modern digital experiences.
            </p>
            {/* Socials */}
            <div className="mt-6 flex justify-center gap-3 md:justify-start">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted border border-border transition-all hover:bg-cw-blue hover:text-white dark:bg-white/5 dark:border-transparent dark:hover:bg-primary/20 dark:hover:text-primary"
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav Links */}
          <div className="grid grid-cols-2 gap-12 sm:gap-24">
            <div>
              <h3 className="mb-4 text-sm font-bold tracking-wide text-foreground dark:text-primary-foreground">
                Navigation
              </h3>
              <ul className="flex flex-col gap-3">
                {navLinks.slice(1, 6).map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors hover:text-cw-blue"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-border dark:border-white/5 pt-8 text-center md:flex md:items-center md:justify-between">
          <p className="text-sm">
            {"\u00A9"} 2026 Gabriel Cordeiro. All rights reserved.
          </p>
          <p className="mt-4 text-xs text-muted-foreground/50 dark:text-primary-foreground/30 md:mt-0">
             Built with passion for the digital world.
          </p>
        </div>
      </div>
    </footer>
  )
}
