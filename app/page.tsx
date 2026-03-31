import { Navbar } from "@/components/landing/navbar"
import { Hero } from "@/components/landing/hero"
import { TechStack } from "@/components/landing/tech-stack"
import { Services } from "@/components/landing/services"
import { Projects } from "@/components/landing/projects"
import { Stats } from "@/components/landing/stats"
import { Testimonials } from "@/components/landing/testimonials"
import { Contact } from "@/components/landing/contact"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <Services />
        <Projects />
        <Stats />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
