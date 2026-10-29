import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiExternalLink, FiGithub, FiCheckCircle, FiAlertTriangle, FiCompass } from "react-icons/fi";
import { projects } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">

        {/* Back Button */}
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-foreground transition-all hover:border-primary hover:text-primary"
        >
          <FiArrowLeft className="text-sm" />
          <span>Back to Projects</span>
        </Link>

        {/* Project Header */}
        <div className="mt-8">
          <div className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">
            {project.index} // {project.category}
          </div>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            {project.name}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {project.description}
          </p>
        </div>

        {/* Live Links CTA Bar */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-xs transition-opacity hover:opacity-90"
          >
            <span>Live Preview</span>
            <FiExternalLink className="text-base" />
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-medium text-foreground transition-all hover:border-primary hover:text-primary"
          >
            <FiGithub className="text-base" />
            <span>Github Repository</span>
          </a>
        </div>

        {/* Main Project Hero Image */}
        <div className="relative mt-10 aspect-16/9 w-full overflow-hidden rounded-3xl border border-border bg-secondary/30 p-3 sm:p-4 shadow-xs">
          <div className="relative h-full w-full overflow-hidden rounded-2xl bg-card">
            <Image
              src={project.image}
              alt={project.name}
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 896px"
            />
          </div>
        </div>

        {/* Tech Stack Breakdown */}
        <div className="mt-12 rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-xs">
          <h2 className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
            Technologies &amp; Architecture
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-xl border border-border bg-secondary/50 px-3.5 py-1.5 font-mono text-xs font-medium text-secondary-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Challenges & Solutions */}
        <div className="mt-8 rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-2.5 text-foreground">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600">
              <FiAlertTriangle className="text-base" />
            </div>
            <h2 className="text-lg font-bold tracking-tight sm:text-xl">
              Challenges Faced &amp; Engineering Decisions
            </h2>
          </div>

          <ul className="mt-5 space-y-3">
            {project.challenges.map((challenge, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                <span className="mt-1 font-mono text-xs font-bold text-primary">0{idx + 1}.</span>
                <span>{challenge}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Future Improvements & Roadmap */}
        <div className="mt-8 rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-2.5 text-foreground">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary text-primary">
              <FiCompass className="text-base" />
            </div>
            <h2 className="text-lg font-bold tracking-tight sm:text-xl">
              Potential Improvements &amp; Future Plans
            </h2>
          </div>

          <ul className="mt-5 space-y-3">
            {project.improvements.map((plan, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                <FiCheckCircle className="mt-0.5 shrink-0 text-base text-primary" />
                <span>{plan}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </main>
  );
}