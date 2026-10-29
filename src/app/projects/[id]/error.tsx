"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { FiRefreshCw, FiArrowLeft, FiAlertTriangle } from "react-icons/fi";

export default function ProjectError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log unexpected errors to an analytics/monitoring provider
    console.error("Project page route error:", error);
  }, [error]);

  return (
    <main className="relative flex min-h-[80vh] w-full flex-col items-center justify-center px-4 py-20">
      {/* Background Amber/Sage Halo */}
      <div className="pointer-events-none absolute h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />

      <div className="relative flex max-w-lg flex-col items-center rounded-3xl border border-border bg-card p-8 text-center shadow-xs sm:p-12">
        {/* Warning Icon Badge */}
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/15 text-amber-600">
          <FiAlertTriangle className="text-2xl" />
        </div>

        {/* Header */}
        <div className="mt-5 font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          MANIFEST_LOAD_EXCEPTION
        </div>

        <h1 className="mt-2 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Unable to Load Project Spec
        </h1>

        <p className="mt-2.5 max-w-sm text-sm leading-relaxed text-muted-foreground">
          We encountered an issue resolving the parameters or data schema for this project. The repository data may be momentarily unreachable.
        </p>

        {/* Action Controls */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => reset()}
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs font-semibold text-primary-foreground shadow-xs transition-all hover:opacity-90 active:scale-95"
          >
            <FiRefreshCw className="text-sm" />
            <span>Retry Connection</span>
          </button>

          <Link
            href="/#work"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-5 py-2.5 text-xs font-semibold text-foreground transition-all hover:border-primary hover:text-primary active:scale-95"
          >
            <FiArrowLeft className="text-sm" />
            <span>Back to Projects</span>
          </Link>
        </div>
      </div>
    </main>
  );
}