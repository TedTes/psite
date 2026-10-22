"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type MouseEvent } from "react";
import { consumePendingTarget, revealTerminalTarget, setPendingTarget } from "@/components/terminalReplay";

/** Home-page sections that have their own menu item. */
const homeSections = ["products", "contact"];

const navigation = [
  { label: "products", href: "/#products" },
  { label: "work with me", href: "/work-with-me" },
  { label: "writing", href: "/blog" },
  { label: "contact", href: "/#contact" },
];

/**
 * The terminal window's title bar, which doubles as the site navigation:
 * window dots, the current path (its "~/tedtes" root links home), and the menu.
 */
export default function TerminalTitlebar({ path = "" }: { path?: string }) {
  const pathname = usePathname();
  const [homeSection, setHomeSection] = useState<string | null>(null);
  const activeSection = pathname === "/" ? homeSection : null;

  // On the home page, highlight the menu item for the section being read.
  useEffect(() => {
    if (pathname !== "/") return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const titlebar = document.querySelector(".terminal-titlebar")?.getBoundingClientRect();
      const readingLine = (titlebar?.bottom ?? 0) + 24;
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      let current: string | null = null;

      for (const id of homeSections) {
        const rect = document.getElementById(id)?.getBoundingClientRect();
        // Include the 48px gap below a section so the highlight does not flicker between sections.
        if (rect && rect.top <= readingLine && rect.bottom + 48 > readingLine) current = id;
      }
      // The last section can never scroll up to the reading line, so the page bottom counts as inside it.
      if (atBottom && document.getElementById("contact")) current = "contact";

      setHomeSection(current);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [pathname]);

  // After a cross-page menu click, replay the destination section once this page mounts.
  useEffect(() => {
    const hash = consumePendingTarget();
    if (hash) revealTerminalTarget(hash);
  }, []);

  function isCurrent(href: string) {
    if (href === "/#products") return pathname.startsWith("/projects") || activeSection === "products";
    if (href === "/#contact") return activeSection === "contact";
    if (href === "/blog") return pathname.startsWith("/blog");
    return pathname === href;
  }

  const homeIsCurrent = pathname === "/" && !activeSection;

  function handleNavigate(event: MouseEvent<HTMLAnchorElement>, href: string) {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    const [hrefPath, hash = null] = href.split("#");
    const targetPath = hrefPath || "/";

    if (targetPath !== pathname) {
      // Let Next.js navigate. A new page types its commands as it mounts.
      setPendingTarget(hash);
      return;
    }

    // Same page: scroll there ourselves and replay that section's transition.
    event.preventDefault();
    const url = hash ? `${targetPath}#${hash}` : targetPath;
    if (url !== window.location.pathname + window.location.hash) window.history.pushState(null, "", url);
    revealTerminalTarget(hash);
  }

  return (
    <div className="terminal-titlebar">
      <div className="terminal-titlebar__location">
        <div className="terminal-controls" aria-hidden="true"><span /><span /><span /></div>
        <span className="terminal-path">
          <Link
            href="/"
            onClick={(event) => handleNavigate(event, "/")}
            className={`terminal-path__home${homeIsCurrent ? " terminal-nav__link--current" : ""}`}
            aria-label="Tedros Tesfu home"
            aria-current={homeIsCurrent ? "page" : undefined}
          >
            ~/tedtes
          </Link>
          {path}
        </span>
      </div>
      <nav className="terminal-nav" aria-label="Primary navigation">
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={(event) => handleNavigate(event, item.href)}
            className={isCurrent(item.href) ? "terminal-nav__link--current" : undefined}
            aria-current={isCurrent(item.href) ? (item.href.includes("#") ? "location" : "page") : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
