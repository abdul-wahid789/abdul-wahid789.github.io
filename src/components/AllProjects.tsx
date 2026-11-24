import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function AllProjects() {
  return (
    <main className="min-h-screen bg-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Back Button */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-foreground transition-all hover:border-primary hover:text-primary"
        >
          <FiArrowLeft className="text-sm" />
          <span>Back to Home</span>
        </Link>

        {/* Page Header */}
        <div className="mt-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-primary">
              <span>ARCHIVE</span>
              <span>•</span>
              <span>ALL PROJECTS ({projects.length})</span>
            </div>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              All Projects
            </h1>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
            Every production application, full-stack platform, and frontend
            experiment I have built.
          </p>
        </div>

        {/* 2-Column All Projects Grid */}
        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
