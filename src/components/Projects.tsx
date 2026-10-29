import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { projects } from "@/data/projects";
import Img from "@/assets/images/bazardor.png"
export default function Projects() {
  return (
    <section id="projects" className="relative w-full border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* Section Header */}
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-primary">
              <span>03</span>
              <span>•</span>
              <span>SELECTED WORK</span>
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Ideas brought to life.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
            A selection of production-grade web applications exploring the space
            between clean architecture and intuitive user experiences.
          </p>
        </div>

        {/* 2-Column Projects Grid */}
        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2">
          {projects.map((project) => (
            <div key={project.id} className="group flex flex-col">

              {/* Preview Window Card Frame */}
              <Link
                href={`/projects/${project.id}`}
                className="relative block aspect-16/10 w-full overflow-hidden rounded-3xl border border-border bg-secondary/30 p-4 transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-md sm:p-6"
              >
                {/* Browser Mockup Container */}
                <div className="relative h-full w-full overflow-hidden rounded-2xl border border-border/80 bg-card shadow-xs transition-transform duration-500 ease-out group-hover:scale-[1.02]">

                  {/* Browser Header Bar */}
                  <div className="flex h-7 items-center justify-between border-b border-border/60 bg-muted/40 px-3">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-border" />
                      <span className="h-2 w-2 rounded-full bg-border" />
                      <span className="h-2 w-2 rounded-full bg-border" />
                    </div>
                    <span className="font-mono text-[10px] text-muted-foreground/80">
                      {project.id}.app
                    </span>
                    <div className="w-8" />
                  </div>

                  {/* Project Screenshot */}
                  <div className="relative h-[calc(100%-1.75rem)] w-full bg-muted/20">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 540px"
                    />
                  </div>
                </div>
              </Link>

              {/* Project Meta Details */}
              <div className="mt-5 flex flex-col items-start">

                {/* Index & Category */}
                <div className="font-mono text-xs text-muted-foreground">
                  <span className="font-bold text-primary">{project.index}</span>{" "}
                  <span className="text-muted-foreground/60">/</span>{" "}
                  <span>{project.category}</span>
                </div>

                {/* Title & Action Link */}
                <div className="mt-1.5 flex w-full items-center justify-between">
                  <Link
                    href={`/projects/${project.id}`}
                    className="text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-2xl"
                  >
                    {project.name}
                  </Link>

                  <Link
                    href={`/projects/${project.id}`}
                    aria-label={`View details of ${project.name}`}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground"
                  >
                    <FiArrowUpRight className="text-base transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </div>

                {/* Short Subtitle */}
                <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                  {project.subtitle}
                </p>

                {/* Tech Pills & Details Button */}
                <div className="mt-4 flex w-full flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-border bg-background/80 px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="rounded-lg border border-border bg-background/80 px-2 py-1 font-mono text-[11px] text-muted-foreground">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  <Link
                    href={`/projects/${project.id}`}
                    className="text-xs font-semibold text-primary transition-opacity hover:opacity-80"
                  >
                    View Details →
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}