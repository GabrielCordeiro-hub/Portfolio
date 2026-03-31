import { ArrowLeft, ShoppingCart, CreditCard, Filter, Lock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function NovaMartPage() {
    return (
        <main className="min-h-screen bg-background">
            {/* Navigation */}
            <nav className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
                <div className="mx-auto flex h-16 max-w-7xl items-center px-6">
                    <Link
                        href="/#projects"
                        className="group flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                        Back to Projects
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
                <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-cw-blue/10 blur-[100px] blur-3xl" />
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mx-auto max-w-3xl text-center">
                        <span className="mb-4 inline-block rounded-full bg-cw-blue/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-cw-blue">
                            Web Development • E-Commerce
                        </span>
                        <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
                            NovaMart <span className="text-cw-blue">E-Commerce</span>
                        </h1>
                        <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
                            A high-performance online shopping platform engineered for speed,
                            conversion, and seamless user experience across all devices.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Showcase Image */}
            <section className="mx-auto max-w-7xl px-6 pb-20">
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
                    <Image
                        src="/images/project-1.jpg"
                        alt="NovaMart Dashboard and Storefront Showcase"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Subtle overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent mix-blend-overlay"></div>
                </div>
            </section>

            {/* Core Features */}
            <section className="bg-card py-20 md:py-28">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mb-16 md:text-center">
                        <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                            Core Capabilities
                        </h2>
                        <p className="mt-4 text-muted-foreground md:mx-auto md:max-w-2xl text-lg">
                            Built with a modern tech stack to ensure reliability and scalability
                            for high-volume retail operations.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {features.map((feature, i) => (
                            <div
                                key={i}
                                className="group rounded-2xl border border-border bg-background p-8 transition-all hover:border-cw-blue/50 hover:shadow-lg"
                            >
                                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cw-blue/10 text-cw-blue transition-transform group-hover:scale-110">
                                    <feature.icon className="h-6 w-6" />
                                </div>
                                <h3 className="mb-3 font-serif text-xl font-bold text-foreground">
                                    {feature.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack & Results */}
            <section className="py-20 md:py-28">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid gap-16 md:grid-cols-2">
                        <div>
                            <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                                Technology Stack
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <p className="mt-8 text-muted-foreground leading-relaxed">
                                By leveraging Next.js App Router and React Server Components, we
                                achieved a 65% reduction in initial page load time compared to
                                the client's previous legacy WooCommerce setup.
                            </p>
                        </div>

                        <div className="rounded-2xl bg-gradient-to-br from-cw-blue to-cw-purple p-1">
                            <div className="h-full rounded-xl bg-card p-8">
                                <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                                    Key Results
                                </h3>
                                <ul className="space-y-4">
                                    {[
                                        "3.2x Increase in mobile conversion rate",
                                        "65% Faster Time-to-Interactive (TTI)",
                                        "Zero downtime during peak holiday sales",
                                        "Seamless migration of 50k+ product SKUs"
                                    ].map((result, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="mt-1.5 h-2 w-2 rounded-full bg-cw-blue" />
                                            <span className="text-foreground">{result}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="border-t border-border py-20 text-center">
                <div className="mx-auto max-w-2xl px-6">
                    <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                        Ready to build something similar?
                    </h2>
                    <p className="text-muted-foreground mb-8">
                        Let's discuss how we can transform your digital presence.
                    </p>
                    <Link
                        href="/#contact"
                        className="inline-flex h-12 items-center justify-center rounded-xl bg-foreground px-8 text-sm font-semibold text-background transition-transform hover:scale-105"
                    >
                        Start a Project
                    </Link>
                </div>
            </section>
        </main>
    )
}

const features = [
    {
        icon: ShoppingCart,
        title: "Headless Commerce",
        description: "Decoupled frontend architecture allowing lightning-fast page transitions and optimal SEO performance.",
    },
    {
        icon: CreditCard,
        title: "Global Payments",
        description: "Multi-currency support with Stripe and PayPal integrations for frictionless checkout experiences.",
    },
    {
        icon: Filter,
        title: "Algorithmic Search",
        description: "Faceted search with typo-tolerance and instant results powered by a custom indexing engine.",
    },
    {
        icon: Lock,
        title: "Enterprise Security",
        description: "Bank-grade encryption, PCI compliance, and robust role-based access control for administrators.",
    },
]

const techStack = [
    "Next.js 14",
    "React",
    "Tailwind CSS",
    "TypeScript",
    "Stripe API",
    "PostgreSQL",
    "Prisma ORM",
    "Vercel",
]
