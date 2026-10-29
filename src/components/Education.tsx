"use client";

import React from "react";
import { FiAward, FiBookOpen, FiCalendar, FiMapPin } from "react-icons/fi";
import { HiOutlineAcademicCap } from "react-icons/hi2";

export default function Education() {
  const coreCoursework = [
    "Data Structures & Algorithms",
    "Object-Oriented Programming (OOP)",
    "Database Management Systems (DBMS)",
    "Web Engineering & Technologies",
    "Software Engineering",
    "Operating Systems & Networks",
  ];

  return (
    <section id="education" className="relative w-full border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* Section Header */}
        <div className="flex flex-col items-start gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-secondary px-4 py-1.5 text-xs font-semibold tracking-wider text-primary uppercase shadow-xs">
            <HiOutlineAcademicCap className="text-sm" />
            <span className="font-mono">05 // ACADEMIC BACKGROUND</span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Educational <span className="text-primary">Qualification.</span>
          </h2>
          <p className="max-w-2xl text-base text-muted-foreground">
            Academic foundation in computer science, algorithmic problem solving, and software engineering principles.
          </p>
        </div>

        {/* Education Hero Bento Card */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-xs sm:p-8 md:p-10">
          <div className="flex flex-col justify-between gap-6 aborder-b aborder-border pb-8 md:flex-row md:items-start">

            {/* Degree & Institution */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 font-mono text-xs text-muted-foreground">
                <FiCalendar className="text-primary" />
                <span>2019 – 2023</span>
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Bachelor of Science in Computer Science and Engineering
              </h3>

              <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground sm:gap-3">
                <span className="font-medium text-foreground">
                  Daffodil International University
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <FiMapPin className="text-primary text-xs" />
                  Savar, Dhaka, Bangladesh
                </span>
              </div>
            </div>

            {/* Merit & CGPA Highlight Pill */}
            <div className="flex shrink-0 items-center gap-3.5 rounded-2xl border border-primary/30 bg-secondary/50 p-4 dark:bg-secondary/20">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-xs">
                <FiAward className="text-xl" />
              </div>
              <div>
                <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Academic Standing
                </p>
                <p className="font-mono text-2xl font-black text-foreground">
                  3.86 <span className="text-xs font-semibold text-muted-foreground">/ 4.00 CGPA</span>
                </p>
              </div>
            </div>

          </div>

          {/* Academic Highlights & Coursework Grid */}
          {/* <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12"> */}

            {/* Left: Departmental Responsibility */}
            {/* <div className="flex flex-col justify-between rounded-2xl border border-border/70 bg-background/60 p-5 lg:col-span-5">
              <div>
                <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-primary">
                  Leadership on Campus
                </span>
                <h4 className="mt-1 text-base font-bold text-foreground">
                  Departmental Lab Prefect
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Appointed by the CSE faculty for Algorithm &amp; Object-Oriented Programming (OOP) labs. Mentored junior engineering students, conducted structured vivas, and assisted faculty with lab grading.
                </p>
              </div>

              <div className="mt-4 flex items-center gap-2 text-[11px] font-mono text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span>Department of CSE</span>
              </div>
            </div> */}

            {/* Right: Core Coursework Badges */}
            {/* <div className="flex flex-col justify-between rounded-2xl border border-border/70 bg-background/60 p-5 lg:col-span-7">
              <div>
                <div className="flex items-center gap-2">
                  <FiBookOpen className="text-primary text-sm" />
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Core Engineering Modules
                  </span>
                </div>

                <div className="mt-3.5 flex flex-wrap gap-2">
                  {coreCoursework.map((course) => (
                    <span
                      key={course}
                      className="rounded-xl border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              <p className="mt-4 text-[11px] text-muted-foreground">
                Comprehensive practical curriculum focusing on full-stack web architectures, discrete mathematics, and scalable algorithmic design.
              </p>
            </div> */}

          {/* </div> */}

        </div>

      </div>
    </section>
  );
}