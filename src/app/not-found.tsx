import Link from "next/link";
import { FiArrowLeft, FiHome, FiAlertCircle } from "react-icons/fi";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[85vh] w-full flex-col items-center justify-center px-4 py-20">
      {/* Background Soft Aura */}
      <div className="pointer-events-none absolute h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative flex max-w-lg flex-col items-center rounded-3xl border border-border bg-card p-8 text-center shadow-xs sm:p-12">
        {/* Error Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-secondary px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
          <FiAlertCircle className="text-sm" />
          <span className="font-mono">ERR // 404_PAGE_NOT_FOUND</span>
        </div>

        {/* Monospace Error Heading */}
        <h1 className="mt-6 font-mono text-7xl font-extrabold tracking-tight text-foreground sm:text-8xl">
          4<span className="text-primary">0</span>4
        </h1>

        <h2 className="mt-4 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
          Route Not Registered
        </h2>

        <p className="mt-2.5 max-w-sm text-sm leading-relaxed text-muted-foreground">
          The endpoint you requested does not exist in the site tree or has been relocated to another path.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs font-semibold text-primary-foreground shadow-xs transition-opacity hover:opacity-90 active:scale-95"
          >
            <FiHome className="text-sm" />
            <span>Return Home</span>
          </Link>

          <Link
            href="/#work"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-5 py-2.5 text-xs font-semibold text-foreground transition-all hover:border-primary hover:text-primary active:scale-95"
          >
            <FiArrowLeft className="text-sm" />
            <span>Explore Projects</span>
          </Link>
        </div>
      </div>
    </main>
  );
}