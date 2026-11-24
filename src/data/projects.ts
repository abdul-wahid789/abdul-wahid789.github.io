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
    id: "mentor-lagbe",
    index: "03",
    category: "Full-Stack / EdTech",
    name: "Mentor Lagbe",
    subtitle:
      "Role-based tuition and mentorship marketplace with admin moderation and Stripe subscriptions.",
    image: "/projects/mentor-lagbe.png",
    description:
      "A full-stack tuition management platform connecting students, tutors, and administrators in dedicated workspaces. Built with a Next.js App Router frontend and a serverless Express.js and MongoDB Atlas API, it features Better Auth with Google OAuth and remote JWKS verification, Stripe Checkout for Pro memberships, ImgBB banner/avatar uploads, and end-to-end tuition moderation.",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "BetterAuth",
      "Express.js",
      "MongoDB",
      "Stripe",
    ],
    liveUrl: "https://mentor-lagbe-client-ashen.vercel.app/",
    githubUrl: "https://github.com/abdul-wahid789/mentor-lagbe",
    challenges: [
      "Decoupling authentication between Next.js and Express.js by verifying Better Auth JWTs against a remote JWKS endpoint with jose, paired with role-based access control (student, tutor, admin) across Next.js route proxy and Express middleware.",
      "Enforcing subscription quotas—limiting Free Tutors to 2 tuition posts and Free Students to 5 bookmarks—while unlocking unlimited access after Stripe Checkout and syncing MongoDB Pro plan status with the client session.",
      "Designing a multi-role moderation and feedback pipeline where admins approve or reject tuitions with required rejection notes, tutors manage applicants and edit ImgBB-hosted banners, and students can only review tuitions with accepted applications.",
    ],
    improvements: [
      "Add Stripe webhook signature verification to handle asynchronous events such as recurring billing, failed payments, and refunds automatically.",
      "Move tuition catalog search, multi-filter queries (subject, mode, fee range), and pagination to the Express/MongoDB backend for large datasets.",
      "Add real-time in-app or email notifications when a tuition post is approved/rejected or when a student's application status updates.",
    ],
  },
    {
    id: "booknook",
    index: "02",
    category: "Full-Stack / Community",
    name: "BookNook",
    subtitle:
      "Decoupled community library platform for sharing, borrowing, and tracking books.",
    image: "/projects/booknook.png",
    description:
      "A full-stack community library web application built to make sharing, borrowing, and managing books effortless. It pairs a Next.js App Router frontend with a serverless Express.js and MongoDB Atlas API, featuring Better Auth with remote JWKS verification, real-time copy inventory tracking, and due-date management.",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "BetterAuth",
      "Express.js",
      "MongoDB",
    ],
    liveUrl: "https://booknook-rust.vercel.app/",
    githubUrl: "https://github.com/abdul-wahid789/booknook",
    challenges: [
      "Decoupling authentication between the Next.js frontend and Express.js backend by verifying Better Auth JWTs against a remote JWKS endpoint using jose.",
      "Preventing stock inconsistencies and duplicate borrows by dynamically updating available copies and blocking deletion of books with active borrow records.",
      "Designing MongoDB aggregation pipelines ($lookup, $match, $unwind) to efficiently join active borrow records with book metadata and sort by return due dates.",
    ],
    improvements: [
      "Wrap borrow and return operations in MongoDB multi-document transactions to guarantee atomic inventory updates under concurrent requests.",
      "Add automated email or in-app reminders for upcoming and overdue book return dates.",
      "Implement full-text search, category/author filtering, and pagination on the /books catalog endpoint.",
    ],
  },
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