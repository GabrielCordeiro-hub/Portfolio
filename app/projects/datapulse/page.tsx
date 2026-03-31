import { ArrowLeft, LineChart, Activity, Users, ShieldCheck } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function DataPulsePage() {
    return (
        <main className="min-h-screen bg-cw-dark text-cw-light">
            {/* Navigation */}
            <nav className="fixed top-0 z-50 w-full border-b border-border/10 bg-cw-dark/80 backdrop-blur-md">
                <div className="mx-auto flex h-16 max-w-7xl items-center px-6">
                    <Link
                        href="/#projects"
                        className="group flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-cw-light"
                    >
                        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                        Back to Projects
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
                {/* Abstract background */}
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cw-purple/20 via-cw-dark to-cw-dark"></div>

                <div className="mx-auto max-w-7xl px-6">
                    <div className="mx-auto max-w-3xl text-center">
                        <span className="mb-4 inline-block rounded-full border border-cw-purple/30 bg-cw-purple/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-cw-purple">
                            SaaS • Data Analytics
                        </span>
                        <h1 className="font-serif text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
                            DataPulse <span className="bg-gradient-to-r from-cw-blue to-cw-purple bg-clip-text text-transparent">Analytics</span>
                        </h1>
                        <p className="mt-6 text-lg leading-relaxed text-slate-400 md:text-xl">
                            A comprehensive SaaS dashboard that transforms complex datasets into
                            actionable intelligence through real-time visualization and machine learning.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Showcase Image */}
            <section className="mx-auto max-w-7xl px-6 pb-20">
                <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border/20 bg-[#1E293B] shadow-2xl shadow-cw-purple/10">
                    <Image
                        src="/images/project-2.jpg"
                        alt="DataPulse Analytics Interface showcasing charts and metrics"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </section>

            {/* Core Features */}
            <section className="py-20 md:py-28 border-t border-border/10">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center mb-16">
                        <div>
                            <h2 className="font-serif text-3xl font-bold text-white md:text-4xl mb-6">
                                Real-Time Data Infrastructure
                            </h2>
                            <p className="text-slate-400 text-lg leading-relaxed mb-8">
                                DataPulse processes millions of events per second to deliver instantaneous
                                insights. We built a custom WebSockets architecture ensuring dashboards
                                never require a refresh to display the latest metrics.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { icon: Activity, text: "Sub-millisecond latency on data ingestion" },
                                    { icon: LineChart, text: "Custom D3.js visualization wrappers" },
                                    { icon: ShieldCheck, text: "SOC2 Type II compliant infrastructure" }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cw-blue/10 text-cw-blue">
                                            <item.icon className="h-5 w-5" />
                                        </div>
                                        <span className="font-medium text-slate-200">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {stats.map((stat, i) => (
                                <div key={i} className="rounded-xl border border-border/10 bg-[#0F172A]/50 p-6 backdrop-blur-sm">
                                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                                    <div className="text-sm text-slate-400">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Approach */}
            <section className="bg-black/20 py-20 md:py-28">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="text-center mb-16">
                        <h2 className="font-serif text-3xl font-bold text-white">
                            The Architecture
                        </h2>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        {[
                            {
                                title: "Frontend Engineering",
                                desc: "React 18 with Zustand for highly responsive state management across multiple synchronized dashboard widgets."
                            },
                            {
                                title: "Data Pipeline",
                                desc: "Apache Kafka streams feeding into a ClickHouse analytical database for sub-second aggregations."
                            },
                            {
                                title: "Predictive Models",
                                desc: "Python microservices serving ONNX models to forecast trends and alert users to anomalies."
                            }
                        ].map((arch, i) => (
                            <div key={i} className="rounded-2xl border border-border/10 bg-[#0F172A] p-8">
                                <h3 className="text-xl font-bold text-white mb-4">{arch.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{arch.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 text-center">
                <h2 className="font-serif text-3xl font-bold text-white mb-6">
                    Need a robust data platform?
                </h2>
                <Link
                    href="/#contact"
                    className="inline-flex h-12 items-center justify-center rounded-xl bg-cw-blue px-8 text-sm font-semibold text-white transition-all hover:bg-cw-blue/90 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                >
                    Let's talk tech
                </Link>
            </section>
        </main>
    )
}

const stats = [
    { value: "5B+", label: "Events Processed Daily" },
    { value: "99.99%", label: "System Uptime" },
    { value: "<50ms", label: "Query Latency" },
    { value: "10k+", label: "Active Dashboards" },
]
