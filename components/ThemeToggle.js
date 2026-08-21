"use client";

import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div
        className={`h-8 w-8 rounded-full bg-charcoal/10 dark:bg-white/10 ${className}`}
      />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      data-cursor-text={isDark ? "LIGHT" : "DARK"}
      className={`relative flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-200 hover:scale-105 active:scale-95 ${
        isDark
          ? "border-yellow/40 bg-yellow/10 text-yellow hover:bg-yellow hover:text-charcoal"
          : "border-charcoal/20 bg-charcoal/5 text-charcoal hover:bg-yellow hover:text-charcoal hover:border-yellow"
      } ${className}`}
    >
      {isDark ? (
        <Sun className="h-4 w-4 transition-transform duration-300 hover:rotate-45" />
      ) : (
        <Moon className="h-4 w-4 transition-transform duration-300 hover:-rotate-12 text-charcoal" />
      )}
    </button>
  );
}
