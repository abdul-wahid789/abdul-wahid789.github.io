"use client";

import React from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className="group relative flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-xs transition-all duration-300 hover:border-primary hover:bg-secondary/60 hover:text-primary active:scale-90"
    >
      {theme === "light" ? (
        <FiMoon className="text-base transition-transform duration-300 group-hover:-rotate-12" />
      ) : (
        <FiSun className="text-base text-amber-400 transition-transform duration-300 group-hover:rotate-45" />
      )}
    </button>
  );
}