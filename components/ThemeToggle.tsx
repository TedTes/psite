"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

type ThemeToggleProps = {
  className: string;
  iconSize?: number;
  labelClassName?: string;
};

function resolvePreferredTheme(): Theme {
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

function getSnapshot(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function getServerSnapshot(): Theme {
  return "light";
}

function subscribe(onStoreChange: () => void) {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const handleSystemThemeChange = (event: MediaQueryListEvent) => {
    if (window.localStorage.getItem("theme")) {
      return;
    }
    applyTheme(event.matches ? "dark" : "light");
    onStoreChange();
  };

  const handleStorage = (event: StorageEvent) => {
    if (event.key !== "theme") {
      return;
    }
    applyTheme(resolvePreferredTheme());
    onStoreChange();
  };

  mediaQuery.addEventListener("change", handleSystemThemeChange);
  window.addEventListener("storage", handleStorage);

  return () => {
    mediaQuery.removeEventListener("change", handleSystemThemeChange);
    window.removeEventListener("storage", handleStorage);
  };
}

export default function ThemeToggle({
  className,
  iconSize = 16,
  labelClassName = "text-xs font-medium",
}: ThemeToggleProps) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const isDark = theme === "dark";

  function toggleTheme() {
    const nextTheme: Theme = isDark ? "light" : "dark";
    applyTheme(nextTheme);
    window.localStorage.setItem("theme", nextTheme);
    // The class-list mutation above isn't itself observable by
    // useSyncExternalStore, so force a re-read of the snapshot.
    window.dispatchEvent(new StorageEvent("storage", { key: "theme", newValue: nextTheme }));
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={isDark ? "Light mode" : "Dark mode"}
      className={className}
      type="button"
    >
      {isDark ? <Sun size={iconSize} /> : <Moon size={iconSize} />}
      <span className={labelClassName}>{isDark ? "Light" : "Dark"}</span>
    </button>
  );
}
