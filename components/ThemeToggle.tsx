"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

function getPreferredTheme(): Theme {
  if (typeof window === "undefined") {
    return "dark";
  }

  const storedTheme = window.localStorage.getItem("theme");
  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.style.colorScheme = theme;
}

type ThemeToggleProps = {
  className: string;
};

export default function ThemeToggle({ className }: ThemeToggleProps) {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const preferredTheme = getPreferredTheme();
    setTheme(preferredTheme);
    applyTheme(preferredTheme);
  }, []);

  useEffect(() => {
    if (!theme) {
      return;
    }

    applyTheme(theme);
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = (event: MediaQueryListEvent) => {
      if (window.localStorage.getItem("theme")) {
        return;
      }

      setTheme(event.matches ? "dark" : "light");
    };

    const handleStorage = (event: StorageEvent) => {
      if (event.key !== "theme") {
        return;
      }

      setTheme(
        event.newValue === "light" || event.newValue === "dark"
          ? event.newValue
          : getPreferredTheme()
      );
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);
    window.addEventListener("storage", handleStorage);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  function toggleTheme() {
    const currentTheme = theme ?? getPreferredTheme();
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    applyTheme(nextTheme);
    window.localStorage.setItem("theme", nextTheme);
  }

  const isDark = theme === "dark";

  if (!theme) {
    return (
      <button
        onClick={toggleTheme}
        aria-label="Toggle color theme"
        title="Theme"
        className={className}
        type="button"
      >
        <span className="h-4 w-4" aria-hidden="true" />
        <span className="text-xs font-medium">Theme</span>
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={isDark ? "Light mode" : "Dark mode"}
      className={className}
      type="button"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
      <span className="text-xs font-medium">
        {isDark ? "Light" : "Dark"}
      </span>
    </button>
  );
}
