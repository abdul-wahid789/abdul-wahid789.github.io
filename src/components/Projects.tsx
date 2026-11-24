import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const FEATURED_COUNT = 4;

export default function Projects() {
  const featuredProjects = projects.slice(0, FEATURED_COUNT);

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

        {/* 2-Column Featured Projects Grid (max 4) */}
        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="mt-14 flex justify-center">
          <Link
            href="/project"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground shadow-xs transition-all hover:border-primary hover:bg-secondary/60 hover:text-primary"
          >
            <span>View All Projects ({projects.length})</span>
            <FiArrowRight className="text-base transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
