import React from "react";
import {
    FiCode,
    FiCpu,
    FiLayers,
    FiTerminal,
    FiCheckCircle,
    FiCompass,
    FiTrendingUp
} from "react-icons/fi";

const stats = [
    {
        value: "10+",
        label: "Web Apps Deployed",
        detail: "Side projects"
    },
    {
        value: "3.86",
        label: "B.Sc. in CSE CGPA",
        detail: "Strong algorithmic base"
    },
    {
        value: "100%",
        label: "Type-Safe Mindset",
        detail: "Clean, maintainable code"
    },
];

const pillars = [
    {
        icon: FiCode,
        badge: "Architecture",
        badgeColor: "bg-secondary text-primary border-primary/20",
        title: "Full-Stack Engineering",
        description:
            "I build production-grade web apps using Next.js, React, TypeScript, and Node.js. My focus is on robust session security, type-safe API contracts, and scalable database schemas.",
        highlight: "React • Next.js • Node • MongoDB",
    },
    {
        icon: FiLayers,
        badge: "Craft",
        badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
        title: "Interface & Ergonomics",
        description:
            "Code works best when paired with intuitive design. I care deeply about responsive layout balance, micro-interactions, and breaking down complex workflows into frictionless user experiences.",
        highlight: "Tailwind CSS • Shadcn UI • UX Polish",
    },
    {
        icon: FiCompass,
        badge: "Personality",
        badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
        title: "Beyond the Terminal",
        description:
"When I step away from code and terminals, I keep things balanced and fun. Whether it is immersing myself in a great movie storyline, unwinding with video games, or hanging out and exploring spots with friends, staying energized outside work keeps my mindset fresh.",        highlight: "Hardware • Solar Tech • Cinema",
    },
];

const AboutMe = () => {
    return (
        <section id="about" className="relative w-full border-t border-border py-20 md:py-28">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">

                {/* Centered Section Header */}
                <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-secondary px-4 py-1.5 text-xs font-semibold tracking-wider text-primary uppercase shadow-xs">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                        </span>
                        <span className="font-mono">01 // ABOUT ME</span>
                    </div>

                    <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                        Software built with purpose, <br />
                        <span className="text-primary">backed by strong fundamentals.</span>
                    </h2>

                    <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                        My programming journey began with rigorous algorithms and object-oriented principles during my Computer Science degree, where I served as a <span className="font-medium text-foreground">Lab Prefect</span>. Graduating with a <span className="font-semibold text-foreground">3.86 CGPA</span> shaped how I approach every system: clean logic, predictable states, and zero tolerance for fragile shortcuts.
                    </p>
                </div>

                {/* High-Impact Stat Strip */}
                <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-6 text-center shadow-xs transition-all hover:border-primary/40 hover:shadow-sm"
                        >
                            <span className="font-mono text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                                {stat.value}
                            </span>
                            <span className="mt-2 text-sm font-semibold text-foreground">
                                {stat.label}
                            </span>
                            <span className="mt-0.5 text-xs text-muted-foreground">
                                {stat.detail}
                            </span>
                        </div>
                    ))}
                </div>

                {/* 3 Pillar Cards Section */}
                <div className="mt-20">
                    <div className="flex items-center justify-between border-b border-border pb-4">
                        <div>
                            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">
                                Core Pillars
                            </p>
                            <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                                What drives my work & life
                            </h3>
                        </div>
                        <span className="hidden font-mono text-xs text-muted-foreground sm:inline-block">
                            ENGINEERING // DESIGN // BALANCE
                        </span>
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
                        {pillars.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={idx}
                                    className="group relative flex flex-col justify-between rounded-3xl border border-border bg-card p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-md"
                                >
                                    <div>
                                        {/* Card Header & Badge */}
                                        <div className="flex items-center justify-between">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary transition-transform duration-300 group-hover:scale-105">
                                                <Icon className="text-lg" />
                                            </div>
                                            <span
                                                className={`rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${item.badgeColor}`}
                                            >
                                                {item.badge}
                                            </span>
                                        </div>

                                        {/* Card Title & Body */}
                                        <h4 className="mt-5 text-lg font-bold tracking-tight text-foreground">
                                            {item.title}
                                        </h4>
                                        <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                                            {item.description}
                                        </p>
                                    </div>

                                    {/* Card Bottom Tag */}
                                    {/* <div className="mt-6 border-t border-border pt-4">
                                        <p className="font-mono text-[11px] text-muted-foreground">
                                            <span className="font-semibold text-primary">Key Focus:</span>{" "}
                                            {item.highlight}
                                        </p>
                                    </div> */}
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutMe;