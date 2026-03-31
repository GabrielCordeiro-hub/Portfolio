import { ArrowLeft, Navigation, BellRing, Utensils, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function FoodFlowPage() {
    return (
        <main className="min-h-screen bg-[#FFFBF7]">
            {/* Navigation */}
            <nav className="fixed top-0 z-50 w-full border-b border-orange-100 bg-[#FFFBF7]/80 backdrop-blur-md">
                <div className="mx-auto flex h-16 max-w-7xl items-center px-6">
                    <Link
                        href="/#projects"
                        className="group flex items-center gap-2 text-sm font-medium text-orange-900/60 transition-colors hover:text-orange-900"
                    >
                        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                        Back to Projects
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
                {/* Decorative background shapes */}
                <div className="absolute top-20 right-0 -z-10 h-96 w-96 rounded-full bg-orange-400/20 blur-3xl mix-blend-multiply" />
                <div className="absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] rounded-full bg-yellow-400/20 blur-3xl mix-blend-multiply" />

                <div className="mx-auto max-w-7xl px-6">
                    <div className="mx-auto max-w-3xl text-center">
                        <span className="mb-4 inline-block rounded-full bg-orange-100 px-4 py-1.5 text-xs font-semibold tracking-wide text-orange-600">
                            Mobile App • Food Delivery
                        </span>
                        <h1 className="font-serif text-4xl font-bold tracking-tight text-slate-900 md:text-6xl lg:text-7xl">
                            FoodFlow <span className="text-orange-500">App</span>
                        </h1>
                        <p className="mt-6 text-lg leading-relaxed text-slate-600 md:text-xl">
                            A comprehensive mobile ecosystem directly connecting hungry customers with
                            local restaurants and independent delivery drivers in real-time.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Showcase Image */}
            <section className="mx-auto max-w-5xl px-6 pb-20">
                <div className="relative aspect-auto min-h-[500px] w-full items-center justify-center overflow-hidden rounded-[2.5rem] bg-orange-50 px-8 py-16 shadow-xl flex md:h-[600px]">
                    <Image
                        src="/images/project-3.jpg"
                        alt="FoodFlow Mobile App screens showing restaurant interface and delivery tracking"
                        fill
                        className="object-contain p-8 md:p-16"
                        priority
                    />
                </div>
            </section>

            {/* Application Ecosystem */}
            <section className="py-20 md:py-28">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="text-center mb-16">
                        <h2 className="font-serif text-3xl font-bold text-slate-900 md:text-4xl">
                            The Three-Sided Marketplace
                        </h2>
                        <p className="mt-4 text-slate-600 md:mx-auto md:max-w-2xl text-lg">
                            FoodFlow isn't just one app—it's three native mobile applications
                            working in perfect synchronization.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        {[
                            {
                                title: "Customer App",
                                desc: "Intuitive food discovery, rich imagery, one-tap ordering, and real-time live map tracking of their delivery.",
                                color: "bg-orange-100 text-orange-600"
                            },
                            {
                                title: "Courier App",
                                desc: "Optimized routing algorithms, earnings dashboard, and battery-efficient location polling for drivers.",
                                color: "bg-blue-100 text-blue-600"
                            },
                            {
                                title: "Restaurant Tablet",
                                desc: "Order management pipeline, menu availability toggles, and direct communication channels with couriers.",
                                color: "bg-green-100 text-green-600"
                            }
                        ].map((app, i) => (
                            <div key={i} className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                                <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${app.color}`}>
                                    <Utensils className="h-6 w-6" />
                                </div>
                                <h3 className="mb-3 font-serif text-xl font-bold text-slate-900">{app.title}</h3>
                                <p className="text-sm leading-relaxed text-slate-600">{app.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Detail */}
            <section className="bg-slate-900 py-20 text-white md:py-28 rounded-t-[3rem]">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

                        <div>
                            <h2 className="font-serif text-3xl font-bold mb-6">
                                Engineering the Experience
                            </h2>
                            <p className="text-slate-300 leading-relaxed mb-8">
                                Building a fluid mobile experience required native performance and complex
                                background processes that don't drain user batteries.
                            </p>

                            <ul className="space-y-6">
                                {[
                                    { icon: Navigation, title: "Precision Routing", text: "Mapbox integration for turn-by-turn navigation and accurate ETA calculation." },
                                    { icon: BellRing, title: "Reliable WebSockets", text: "Guaranteed delivery of order state changes via socket.io with fallback polling." },
                                    { icon: Shield, title: "Secure Payments", text: "PCI-compliant tokenization for Apple Pay, Google Pay, and saved cards." }
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4">
                                        <div className="flex-shrink-0 mt-1 h-10 w-10 flex items-center justify-center rounded-full bg-orange-500/20 text-orange-400">
                                            <item.icon className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg">{item.title}</h4>
                                            <p className="text-sm text-slate-400 mt-1 leading-relaxed">{item.text}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Tech Stack Cards */}
                        <div className="grid gap-4 sm:grid-cols-2">
                            {[
                                { category: "Mobile Framework", name: "React Native CLI" },
                                { category: "State Management", name: "Redux Toolkit" },
                                { category: "Real-time DB", name: "Firebase / Firestore" },
                                { category: "Backend API", name: "Node.js Microservices" },
                                { category: "Mapping", name: "Mapbox GL" },
                                { category: "Deployment", name: "Fastlane & Bitrise" },
                            ].map((tech, i) => (
                                <div key={i} className="rounded-2xl border border-slate-700 bg-slate-800/50 p-6">
                                    <div className="text-xs font-medium uppercase tracking-wider text-orange-400 mb-2">
                                        {tech.category}
                                    </div>
                                    <div className="font-serif text-lg font-bold">
                                        {tech.name}
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>

        </main>
    )
}
