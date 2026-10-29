import React from "react";

export default function Loading() {
  return (
    <main className="relative flex min-h-[80vh] w-full flex-col items-center justify-center px-4 py-20">
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute h-72 w-72 rounded-full bg-primary/10 blur-3xl animate-pulse" />

      <div className="relative flex flex-col items-center gap-6 rounded-3xl border border-border bg-card p-8 shadow-xs sm:p-10">
        {/* Terminal Header Simulation */}
        <div className="flex w-full items-center justify-between border-b border-border pb-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-border" />
            <span className="h-2.5 w-2.5 rounded-full bg-border" />
            <span className="h-2.5 w-2.5 rounded-full bg-border" />
          </div>
          <span className="font-mono text-[11px] text-muted-foreground">
            system_hydrating.sh
          </span>
        </div>

        {/* Animated Sage Spinner */}
        <div className="relative flex h-16 w-16 items-center justify-center">
          <div className="absolute h-16 w-16 animate-spin rounded-full border-2 border-secondary border-t-primary" />
          <div className="h-2.5 w-2.5 rounded-full bg-primary animate-ping" />
        </div>

        {/* Status Text & Skeletons */}
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">
            Compiling Runtime Components
          </p>
          <p className="text-xs text-muted-foreground">
            Preparing layout, assets, and project manifests...
          </p>
        </div>

        {/* Skeleton Progress Pills */}
        <div className="flex w-48 flex-col gap-2 pt-2">
          <div className="h-2 w-full overflow-hidden rounded-full bg-secondary/50">
            <div className="h-full w-2/3 rounded-full bg-primary/60 animate-pulse" />
          </div>
        </div>
      </div>
    </main>
  );
}