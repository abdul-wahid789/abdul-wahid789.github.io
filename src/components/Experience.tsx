import React from "react";
import {
    FiBriefcase,
    FiCalendar,
    FiMapPin,
    FiCheckCircle,
    FiArrowUpRight
} from "react-icons/fi";

const experiences = [
    {
        role: "Project Associate",
        company: "Quantanite",
        period: "Oct. 2023 – Jan. 2026",
        location: "Remote",
        type: "Full-time",
        description:
            "Led high-precision remote data operations and compliance monitoring, ensuring zero-defect deliverables across complex workflows.",
        responsibilities: [
            "Managed high-volume data processing and moderation, upholding strict compliance, security, and data integrity standards.",
            "Streamlined workflows through rigorous documentation, proactive reporting, and efficient root-cause issue resolution.",
            "Ensured operational excellence and confidentiality through collaborative, cross-functional problem-solving.",
        ],
        skills: ["Workflow Automation", "Data Moderation", "Quality Assurance", "Compliance"],
    },
    {
        role: "Lab Prefect (Algorithm & OOP)",
        company: "Daffodil International University",
        period: "Jan. 2021 – Mar. 2022",
        location: "Savar, Dhaka",
        type: "Academic Mentorship",
        description:
            "Mentored undergraduate peers in foundational computer science principles, practical debugging, and algorithmic problem-solving.",
        responsibilities: [
            "Resolved complex student issues during practical lab sessions on Algorithms and Object-Oriented Programming.",
            "Conducted formal viva evaluations to assess students' theoretical comprehension and logic flow.",
            "Assessed student lab performance and assisted course instructors with assignment grading.",
        ],
        skills: ["Algorithms", "Object-Oriented Programming", "Code Review", "Mentorship"],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="relative w-full border-t border-border py-20 md:py-28">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">

                {/* Section Header */}
                <div className="flex flex-col items-start gap-3">
                    <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-secondary px-4 py-1.5 text-xs font-semibold tracking-wider text-primary uppercase shadow-xs">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                        </span>
                        <span className="font-mono">03 // CAREER JOURNEY</span>
                    </div>

                    <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                        Work experience &amp; <span className="text-primary">mentorship.</span>
                    </h2>
                    <p className="max-w-2xl text-base text-muted-foreground">
                        A chronological timeline of my operational roles, cross-functional collaboration, and academic mentorship.
                    </p>
                </div>

                {/* Timeline Container */}
                <div className="relative mt-14">

                    {/* Subtle Vertical Line */}
                    <div className="absolute top-3 bottom-3 left-4 hidden w-px bg-border sm:left-8 md:block" />

                    <div className="space-y-8 md:space-y-12">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className="relative flex flex-col gap-6 md:flex-row md:gap-10"
                            >
                                {/* Timeline Node (Desktop) */}
                                <div className="hidden md:flex md:w-16 md:shrink-0 md:justify-center">
                                    <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-primary shadow-xs">
                                        <FiBriefcase className="text-base" />
                                    </div>
                                </div>

                                {/* Main Experience Card */}
                                <div className="group relative flex-1 rounded-3xl border border-border bg-card p-6 shadow-xs transition-all duration-300 hover:border-primary/50 hover:shadow-sm sm:p-8">

                                    {/* Top Bar: Role & Meta Pills */}
                                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <h3 className="text-xl font-bold tracking-tight text-foreground">
                                                    {exp.role}
                                                </h3>
                                                <span className="rounded-md bg-secondary px-2 py-0.5 font-mono text-[11px] font-medium text-secondary-foreground">
                                                    {exp.type}
                                                </span>
                                            </div>
                                            <p className="mt-0.5 text-base font-semibold text-primary">
                                                {exp.company}
                                            </p>
                                        </div>

                                        {/* Date & Location Badges */}
                                        <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-muted-foreground">
                                            <span className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background/60 px-2.5 py-1">
                                                <FiCalendar className="text-primary text-xs" />
                                                <span>{exp.period}</span>
                                            </span>
                                            <span className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background/60 px-2.5 py-1">
                                                <FiMapPin className="text-primary text-xs" />
                                                <span>{exp.location}</span>
                                            </span>
                                        </div>
                                    </div>

                                    {/* Summary */}
                                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                                        {exp.description}
                                    </p>

                                    {/* Key Responsibilities List */}
                                    <div className="mt-6 border-t border-border pt-5">
                                        <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                                            Key Highlights &amp; Impact
                                        </p>
                                        <ul className="mt-3 space-y-2.5">
                                            {exp.responsibilities.map((item, idx) => (
                                                <li
                                                    key={idx}
                                                    className="flex items-start gap-2.5 text-xs text-muted-foreground leading-relaxed sm:text-sm"
                                                >
                                                    <FiCheckCircle className="mt-0.5 shrink-0 text-sm text-primary" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Skill Badges Footer */}
                                    <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-4">
                                        {exp.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="rounded-lg border border-border bg-background/80 px-2.5 py-1 font-mono text-xs text-foreground transition-colors hover:border-primary/40 hover:bg-secondary/40"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}