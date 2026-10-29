"use client";

import React from "react";
import { FiArrowUp } from "react-icons/fi";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="w-full border-t border-border bg-foreground py-8">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-xs sm:flex-row sm:px-6">

                {/* Left: Identity & Title */}
                <div className="flex items-center gap-2.5 flex-col lg:flex-row">
                    <span className="font-semibold text-background">
                        Abdul Wahid
                    </span>
                    <span className="text-background/40 hidden lg:block">•</span>
                    <span className="text-background">
                        Full Stack Web Developer
                    </span>
                </div>

                {/* Center: Copyright & Attribution */}
                <p className="text-background text-center">
                    &copy; 2026 Abdul Wahid. Built with Next.js &amp; Tailwind CSS.
                </p>

                {/* Right: Smooth Scroll to Top */}
                <button
                    onClick={scrollToTop}
                    className="group inline-flex items-center gap-1.5 font-medium text-background transition-colors hover:text-primary active:scale-95"
                    aria-label="Back to top"
                >
                    <span>Back to top</span>
                    <FiArrowUp className="text-sm transition-transform duration-200 group-hover:-translate-y-0.5" />
                </button>

            </div>
        </footer>
    );
}