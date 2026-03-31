"use client"

import { useState } from "react"
import { Send, Mail, MapPin, Github, Linkedin } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "cordeirogabriel090@gmail.com",
    href: "mailto:cordeirogabriel090@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Brazil",
    href: null,
  },
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-3 inline-block rounded-full bg-cw-blue/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-cw-blue">
            GET IN TOUCH
          </span>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            Let's Build Something Incredible?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Whether for a specific project or just to exchange ideas about technology, 
            I'm always open to new connections.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-12 md:grid-cols-5">
          {/* Contact Info */}
          <div className="flex flex-col gap-6 md:col-span-2">
            {contactInfo.map((info) => (
              <div key={info.label} className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cw-blue/10">
                  <info.icon className="h-5 w-5 text-cw-blue" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">{info.label}</p>
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="mt-1 text-sm text-muted-foreground transition-colors hover:text-cw-blue"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm text-muted-foreground">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-muted p-12 text-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                  <Send className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground">
                  Message sent!
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Thanks for reaching out. I&apos;ll get back to you soon!
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
                className="flex flex-col gap-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full rounded-xl border border-border bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-cw-blue focus:ring-2 focus:ring-cw-blue/20 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full rounded-xl border border-border bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-cw-blue focus:ring-2 focus:ring-cw-blue/20 focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    placeholder="Project proposal / Job opportunity"
                    className="w-full rounded-xl border border-border bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-cw-blue focus:ring-2 focus:ring-cw-blue/20 focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full resize-none rounded-xl border border-border bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-cw-blue focus:ring-2 focus:ring-cw-blue/20 focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="group flex items-center justify-center gap-2 rounded-xl border border-cw-blue bg-card px-7 py-3.5 text-sm font-semibold text-foreground shadow-sm transition-all hover:bg-cw-blue hover:text-white dark:hover:bg-cw-blue dark:hover:text-white"
                >
                  Send Message
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
