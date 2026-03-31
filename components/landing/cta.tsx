import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-cw-blue to-cw-purple py-20 md:py-24">
      {/* Decorative elements */}
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-primary-foreground blur-3xl" />
        <div className="absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-primary-foreground blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <span className="mb-4 inline-block rounded-full bg-primary-foreground/15 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary-foreground">
          OPEN TO OPPORTUNITIES
        </span>
        <h2 className="font-serif text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl lg:text-5xl text-balance">
          Let&apos;s build something together
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
          I&apos;m currently available for freelance projects and open to full-time
          positions. If you have a project in mind or want to talk, I&apos;d love to hear from you.
        </p>
        <a
          href="#contact"
          className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-primary-foreground px-8 py-4 text-base font-bold text-cw-blue shadow-xl transition-all hover:bg-primary-foreground/90 hover:shadow-2xl"
        >
          Get in Touch
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  )
}
