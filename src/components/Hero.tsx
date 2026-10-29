import Image from "next/image";
import Link from "next/link";
import {
    FiArrowUpRight,
    FiFolder,
    FiCheckCircle,
    FiCode,
    FiTerminal,
    FiGithub,
    FiLinkedin,
    FiMail
} from "react-icons/fi";
import { MdDownload } from "react-icons/md";
import HeroProfile from "./HeroProfile";

const quickTech = ["Next.js", "React", "Node.js", "MongoDB", "TypeScript"];

export default function Hero() {
    return (
        <section className="relative w-full overflow-hidden py-12 md:py-20 lg:py-28">
            <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10">

                {/* Left Column: Bio & Calls to Action */}
                <div className="flex flex-col items-start lg:col-span-7">

                    {/* Live Availability Pill */}
                    <div className="inline-flex animate-in fade-in slide-in-from-top-3 duration-700 items-center gap-2.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-foreground shadow-xs transition-all duration-300 hover:border-primary/50 hover:bg-secondary/30">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                        </span>
                        <span>Full Stack Web Developer</span>
                    </div>

                    {/* Headline */}
                    <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                        Hi, <br className="hidden sm:inline" />
                        I am
                        <span className="relative inline-block text-primary ml-5">
                            Abdul Wahid.
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                        Full Stack Web Developer focused on translating complex business requirements into clean,
                        maintainable systems. Leveraging Next.js, TypeScript, and modern backend patterns,
                        I create fast user experiences backed by resilient server design.
                    </p>

                    {/* Action CTAs */}
                    <div className="mt-8 flex flex-wrap items-center gap-3.5">
                        <Link
                            href="#work"
                            className="group inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-xs transition-all hover:opacity-90 active:scale-98"
                        >
                            <FiFolder className="text-base" />
                            <span>View Projects</span>
                        </Link>

                        <Link
                            href="\Resume-of-Abdul-Wahid.pdf"
                            className="group inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-medium text-foreground transition-all hover:border-primary hover:bg-secondary/50 hover:text-primary active:scale-98"
                        >
                            <span>Download Resume</span>

                            <MdDownload className="text-base transition-transform group-hover:-translate-y-0.5 " />
                        </Link>
                    </div>

                    {/* Stack Pills Bar */}
                    <div className="mt-12 w-full border-t border-border pt-6">
                        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                            Core Tech Stack
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                            {quickTech.map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded-lg border border-border bg-secondary/40 px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column: Layered Bento Portrait Frame */}

                <div className="relative flex justify-center lg:col-span-5 lg:justify-end hidden">
                    <div className="relative w-full max-w-sm">

                        {/* Ambient blur */}
                        <div className="absolute -inset-1 rounded-3xl bg-secondary/30 blur-lg" />

                        {/* Window Container */}
                        <div className="relative w-full overflow-hidden rounded-2xl border border-border bg-card shadow-sm">

                            {/* Window Title Bar */}
                            <div className="flex items-center justify-between border-b border-border bg-muted/40 px-4 py-2.5">
                                <div className="flex items-center gap-1.5">
                                    <span className="h-2.5 w-2.5 rounded-full bg-border" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-border" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-border" />
                                </div>
                                <span className="font-mono text-[11px] text-muted-foreground">
                                    abdul-wahid.tsx
                                </span>
                                <span className="font-mono text-[10px] text-primary">● ready</span>
                            </div>

                            {/* Image Viewport */}
                            <div className="relative aspect-4/5 w-full overflow-hidden bg-muted/20">
                                <Image
                                    src="/profile.png"
                                    alt="Abdul Wahid"
                                    fill
                                    priority
                                    className="object-cover object-top"
                                    sizes="(max-width: 768px) 100vw, 380px"
                                />

                                {/* Floating Bottom Social Bar */}
                                <div className="absolute bottom-3 inset-x-3 flex items-center justify-between rounded-lg border border-border/80 bg-background/90 px-3.5 py-2 font-mono text-[11px] text-foreground shadow-xs backdrop-blur-md">
                                    <div className="flex items-center gap-1.5 text-muted-foreground">
                                        <span className="text-primary font-bold">~</span>
                                        <span>connect</span>
                                    </div>

                                    {/* Social Icons */}
                                    <div className="flex items-center gap-3 text-muted-foreground">
                                        <a
                                            href="https://github.com/abdul-wahid789"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="GitHub"
                                            className="transition-colors hover:text-primary"
                                        >
                                            <FiGithub className="text-sm" />
                                        </a>
                                        <a
                                            href="https://www.linkedin.com/in/abdul-wahid789"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="LinkedIn"
                                            className="transition-colors hover:text-primary"
                                        >
                                            <FiLinkedin className="text-sm" />
                                        </a>
                                        <a
                                            href="mailto:abdulwahid.contact@gmail.com"
                                            aria-label="Email"
                                            className="transition-colors hover:text-primary"
                                        >
                                            <FiMail className="text-sm" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                <HeroProfile/>

            </div>

        </section>
    );
}