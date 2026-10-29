export interface Project {
  id: string;
  index: string;
  category: string;
  name: string;
  subtitle: string;
  image: string;
  description: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  challenges: string[];
  improvements: string[];
}

export const projects: Project[] = [
  {
    id: "bazar-dor",
    index: "01",
    category: "Full-Stack / FinTech",
    name: "BazarDor (বাজার দর)",
    subtitle:
      "Real-time daily commodity market price tracker and regional variance platform.",
    image: "/projects/bazardor.png",
    description:
      "A transparency web platform built to track and display everyday market commodity prices. It empowers everyday consumers and vendors with historical trends, price comparison across districts, and authenticated submissions to prevent price manipulation.",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "BetterAuth",
      "MongoDB",
    ],
    liveUrl: "https://bazar-dor-nine-plum.vercel.app/",
    githubUrl: "https://github.com/abdul-wahid789/bazar-dor",
    challenges: [
      "Structuring safe role-based access control (RBAC) with BetterAuth to restrict price edits to verified users and admins.",
      "Optimizing MongoDB aggregations to compute daily variance and price trends across multiple dynamic regions.",
      "Ensuring consistent hydration and smooth layout rendering with localized Bengali strings in Next.js Server Components.",
    ],
    improvements: [
      "Add automated data scrapers or cron webhooks to ingest public open-source market commodity reports.",
      "Implement localized push notifications and SMS alerts for sudden price drops on essential grocery items.",
      "Package the app as an offline-first Progressive Web App (PWA) with persistent cache storage.",
    ],
  },
  {
    id: "fit-log",
    index: "02",
    category: "Productivity / Health",
    name: "FitLog",
    subtitle:
      "Distraction-free workout session tracker with dynamic progression metrics.",
    image: "/projects/fitlog.png",
    description:
      "A clean, minimal workout logging application that allows athletes and gym-goers to organize custom training splits, record weights and reps per set, and track progressive overload without unnecessary bloat.",
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Local Storage",
      "Custom Hooks",
    ],
    liveUrl: "https://fit-log-indol-ten.vercel.app/",
    githubUrl: "https://github.com/abdul-wahid789/fit-log",
    challenges: [
      "Preventing state desynchronization and re-render overhead when updating deeply nested routine and exercise objects.",
      "Designing custom hooks that keep browser local storage aligned with client state without causing Next.js hydration issues.",
      "Creating an ergonomic mobile-first UI with minimal input friction for quick logging between active gym sets.",
    ],
    improvements: [
      "Implement cloud database sync and cross-device account authentication via BetterAuth and MongoDB.",
      "Add automated One-Rep Max (1RM) calculators and progression volume charts.",
      "Integrate an interactive workout heatmap inspired by GitHub contribution graphs.",
    ],
  },
  {
    id: "movie-explorer",
    index: "03",
    category: "Media / Entertainment",
    name: "Movie Explorer",
    subtitle:
      "Fast, responsive media search portal powered by the TVMaze REST API.",
    image: "/projects/movie-explorer.png",
    description:
      "A media discovery platform that lets users search and browse television series, view broadcast schedules, check full cast line-ups, and read episodic summaries with instant client-side filtering.",
    techStack: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "DaisyUI",
      "RESTful API",
    ],
    liveUrl: "https://movie-explorer-five-mu.vercel.app/",
    githubUrl: "https://github.com/abdul-wahid789/movie-explorer",
    challenges: [
      "Eliminating excess network requests and API rate-limiting through a custom input debouncing hook.",
      "Gracefully handling missing artwork, null data fields, and raw HTML descriptions returned by external endpoints.",
      "Maintaining fluid responsive grid filtering across varying device viewports and screen orientations.",
    ],
    improvements: [
      "Migrate to Next.js App Router to leverage edge caching and server-side rendering (SSR) for instant first-page loads.",
      "Embed video teasers and trailer previews using the YouTube Embedded Player API.",
      "Add personal watchlist functionality with persistent bookmark storage.",
    ],
  },
];