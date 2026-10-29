"use client";

import Image from "next/image";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { SiX } from "react-icons/si";

export default function HeroProfile() {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/abdul-wahid789",
      icon: FiGithub,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/abdul-wahid789",
      icon: FiLinkedin,
    },
    {
      name: "X (Twitter)",
      href: "https://x.com/abdulwahid_dev",
      icon: SiX,
    },
    {
      name: "Email",
      href: "mailto:abdulwahid.contact@gmail.com",
      icon: FiMail,
    },
  ];

  return (
    <div className="relative flex justify-center lg:col-span-5 lg:justify-end">
      {/* Outer Floating Wrapper (Continuous Float) */}
      <div className="relative w-full max-w-[340px] sm:max-w-[370px] animate-float">

        {/* 1. Ambient Breathing Halo (Continuous Pulse Glow behind PNG) */}
        <div className="pointer-events-none absolute -inset-4 rounded-[40px] bg-gradient-to-tr from-primary/20 via-primary/10 to-transparent blur-2xl animate-pulse-slow" />

        {/* 2. Concentric Orbit Rings (Subtle Technical Depth) */}
        <div className="pointer-events-none absolute inset-0 -m-3 rounded-[36px] border border-primary/15 transition-all duration-700" />

        {/* 3. Main Stage Container */}
        <div className="relative overflow-hidden rounded-[32px] border border-border bg-card/90 shadow-sm backdrop-blur-md">

          {/* Terminal / System Header Bar */}
          <div className="flex items-center justify-between border-b border-border bg-muted/40 px-4 py-2.5">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
            </div>
            <span className="font-mono text-[11px] text-muted-foreground">
              abdul-wahid.png
            </span>
            <div className="flex items-center gap-1.5 font-mono text-[10px] text-primary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span>online</span>
            </div>
          </div>

          {/* Portrait Studio Viewport */}
          <div className="relative aspect-4/5 w-full overflow-hidden bg-gradient-to-b from-secondary/40 via-background to-secondary/20">

            {/* Subtle Studio Backdrop Elements */}
            <div
              className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#059669_1px,transparent_1px)] [background-size:16px_16px]"
            />

            {/* Soft Ellipse Gradient Glow directly behind head/shoulders */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 h-48 w-48 rounded-full bg-primary/15 blur-2xl" />

            {/* PNG Image with soft drop shadow */}
            <div className="relative h-full w-full">
              <Image
                src="/profile.png"
                alt="Abdul Wahid"
                fill
                priority
                className="object-cover object-top filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.08)] transition-transform duration-500 hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 380px"
              />
            </div>

            {/* Floating Role Badge (Top Left Corner) */}
            <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-background/85 px-3 py-1 font-mono text-[11px] font-medium text-foreground shadow-xs backdrop-blur-md">
              <span className="text-primary font-bold">#</span>
              <span>Full-Stack Dev</span>
            </div>

            {/* Floating Bottom Console Dock (Status + Socials) */}
            <div className="absolute bottom-3 inset-x-3 flex items-center justify-between rounded-2xl border border-border/80 bg-background/90 px-3.5 py-2 font-mono text-[11px] text-foreground shadow-md backdrop-blur-md">
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <span className="text-primary font-bold">~</span>
                <span>connect</span>
              </div>

              {/* Social Links Dock */}
              <div className="flex items-center gap-2.5 text-muted-foreground">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="transition-colors hover:text-primary active:scale-95"
                    >
                      <Icon className="text-sm" />
                    </a>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}