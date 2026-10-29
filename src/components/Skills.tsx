import React from 'react';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiVercel,
  SiStripe
} from "react-icons/si";
import { FiServer, FiLayout, FiDatabase, FiShield } from "react-icons/fi";


const skillCategories = [
  {
    title: "Frontend & UI Engineering",
    icon: FiLayout,
    description: "Building responsive, accessible interfaces with modern rendering patterns.",
    skills: [
      { name: "Next.js", icon: SiNextdotjs, tag: "App Router" },
      { name: "React", icon: SiReact, tag: "Hooks & SSR" },
      { name: "TypeScript", icon: SiTypescript, tag: "Strict Types" },
      { name: "Tailwind CSS", icon: SiTailwindcss, tag: "Utility CSS" },
      { name: "JavaScript", icon: SiJavascript, tag: "ES6+" },
      { name: "Shadcn UI", icon: FiLayout, tag: "Design System" },
    ],
  },
  {
    title: "Backend & API Architecture",
    icon: FiServer,
    description: "Engineering scalable APIs, authentication layers, and business logic.",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, tag: "Runtime" },
      { name: "Express.js", icon: SiExpress, tag: "REST APIs" },
      { name: "BetterAuth", icon: FiShield, tag: "Auth & Sessions" },
      { name: "RBAC", icon: FiShield, tag: "Access Control" },
      { name: "Webhooks", icon: FiServer, tag: "Event Pipelines" },
    ],
  },
  {
    title: "Databases & DevOps",
    icon: FiDatabase,
    description: "Data modeling, version control workflows, and production deployments.",
    skills: [
      { name: "MongoDB", icon: SiMongodb, tag: "NoSQL" },
      { name: "Mongoose", icon: FiDatabase, tag: "ODM Modeling" },
      { name: "Git", icon: SiGit, tag: "Version Control" },
      { name: "GitHub", icon: SiGithub, tag: "CI/CD & Actions" },
      { name: "Vercel", icon: SiVercel, tag: "Deployment" },
    ],
  },
  {
    title: "Integrations & Architecture",
    icon: FiShield,
    description: "Financial gateways, external services, and software architectural design.",
    skills: [
      { name: "Stripe", icon: SiStripe, tag: "Global Payments" },
      { name: "SSLCommerz", icon: FiShield, tag: "Local Gateway" },
      { name: "Modular MVC", icon: FiServer, tag: "Architecture" },
      { name: "RESTful Standards", icon: FiServer, tag: "API Design" },
    ],
  },
];


const Skills = () => {
    return (
        <section id="skills" className="relative w-full border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* Section Header */}
        <div className="flex flex-col items-start gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-secondary px-4 py-1.5 text-xs font-semibold tracking-wider text-primary uppercase shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="font-mono">02 // TECH STACK</span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Tools &amp; technologies <span className="text-primary">I work with.</span>
          </h2>
          <p className="max-w-2xl text-base text-muted-foreground">
            A categorized breakdown of my daily full-stack development toolkit, frameworks, and architecture patterns.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {skillCategories.map((category, idx) => {
            const HeaderIcon = category.icon;
            return (
              <div
                key={idx}
                className="group flex flex-col justify-between rounded-3xl border border-border bg-card p-6 shadow-xs transition-all duration-300 hover:border-primary/50 hover:shadow-sm"
              >
                <div>
                  {/* Category Title Bar */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary transition-transform group-hover:scale-105">
                      <HeaderIcon className="text-lg" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">
                        {category.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Badges Grid */}
                  <div className="mt-6 flex flex-wrap gap-2.5">
                    {category.skills.map((skill) => {
                      const Icon = skill.icon;
                      return (
                        <div
                          key={skill.name}
                          className="flex items-center gap-2 rounded-xl border border-border bg-background/60 px-3 py-2 text-xs font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-secondary/40"
                        >
                          <Icon className="text-sm text-primary" />
                          <span>{skill.name}</span>
                          {/* <span className="font-mono text-[10px] text-muted-foreground">
                            • {skill.tag}
                          </span> */}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
    );
};

export default Skills;