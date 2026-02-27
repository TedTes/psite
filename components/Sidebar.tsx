"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import {
  Home,
  FolderKanban,
  BookOpenText,
  UserRound,
  ExternalLink,
  Menu,
  X,
} from "lucide-react";

interface BlogLink {
  slug: string;
  title: string;
}

interface SidebarProps {
  blogLinks: BlogLink[];
}

const navItems = [
  { href: "/", label: "Home", exact: true, icon: Home, type: "page" as const },
  {
    href: "/projects",
    label: "Projects",
    exact: false,
    icon: FolderKanban,
    type: "page" as const,
  },
  {
    href: "/blog",
    label: "Blog",
    exact: false,
    icon: BookOpenText,
    type: "blog" as const,
  },
  {
    href: "/about",
    label: "About",
    exact: false,
    icon: UserRound,
    type: "page" as const,
  },
];

export default function Sidebar({ blogLinks }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [blogPanelOpen, setBlogPanelOpen] = useState(false);

  const isActive = (href: string, exact: boolean) =>
    exact ? pathname === href : pathname?.startsWith(href);

  function handlePageNav(href: string) {
    setBlogPanelOpen(false);
    router.push(href);
  }

  function handleBlogIconClick() {
    const nextOpen = !blogPanelOpen;
    setBlogPanelOpen(nextOpen);
    if (nextOpen && !pathname?.startsWith("/blog")) {
      router.push("/blog");
    }
  }

  return (
    <>
      {/* Desktop icon rail + optional blog panel */}
      <aside
        className={`hidden lg:flex sticky top-0 self-start h-screen z-50 shrink-0 overflow-hidden transition-[width] duration-300 ease-in-out ${
          blogPanelOpen ? "w-[320px]" : "w-[76px]"
        }`}
      >
        {!blogPanelOpen ? (
          <div className="w-[76px] h-full bg-card border-r border-card-border flex flex-col items-center">
            <div className="pt-6 pb-5">
              <Link
                href="/"
                onClick={() => setBlogPanelOpen(false)}
                className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center"
              >
                <span className="text-sm font-black text-accent tracking-tight">
                  AM
                </span>
              </Link>
            </div>

            <nav className="flex-1 flex flex-col items-center gap-2 pt-3">
              {navItems.map(({ href, label, exact, icon: Icon, type }) => {
                const active = isActive(href, exact);
                return (
                  <button
                    key={href}
                    type="button"
                    aria-label={label}
                    title={label}
                    onClick={() =>
                      type === "blog" ? handleBlogIconClick() : handlePageNav(href)
                    }
                    className={`w-11 h-11 rounded-xl transition-colors flex items-center justify-center ${
                      active
                        ? "bg-accent/10 text-accent"
                        : "text-muted hover:text-foreground hover:bg-card-border/40"
                    }`}
                  >
                    <Icon size={18} />
                  </button>
                );
              })}
            </nav>

            <div className="pb-5">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Resume"
                title="Resume"
                className="w-11 h-11 rounded-xl bg-card-border/30 text-muted hover:text-foreground hover:bg-card-border/50 transition-colors flex items-center justify-center"
              >
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        ) : (
          <div className="w-[320px] h-full bg-card border-r border-card-border px-4 pt-5 pb-5 overflow-y-auto">
            <button
              type="button"
              onClick={() => setBlogPanelOpen(false)}
              className="inline-flex items-center text-sm text-muted hover:text-foreground transition-colors"
            >
              ←
            </button>
            <div className="mt-4 space-y-0.5">
              {blogLinks.map((post) => {
                const active = pathname === `/blog/${post.slug}`;
                return (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className={`block text-sm rounded-lg px-3 py-2 leading-snug transition-colors ${
                      active
                        ? "bg-accent/10 text-accent"
                        : "text-muted hover:text-foreground hover:bg-card-border/40"
                    }`}
                    title={post.title}
                  >
                    {post.title}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </aside>

      {/* ── Mobile trigger button ── */}
      <button
        type="button"
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
        className="lg:hidden fixed top-3 left-3 z-[60] w-10 h-10 rounded-xl bg-card border border-card-border shadow-md text-foreground flex items-center justify-center"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        <span
          className={`transition-transform duration-200 ${
            mobileOpen ? "rotate-90 scale-90" : "rotate-0 scale-100"
          }`}
        >
          {mobileOpen ? <X size={17} /> : <Menu size={17} />}
        </span>
      </button>

      {/* ── Mobile floating icon pills ── */}
      {mobileOpen && (
        <>
          {/* Transparent dismiss layer */}
          <div
            className="lg:hidden fixed inset-0 z-50"
            onClick={() => setMobileOpen(false)}
          />

          {/* Floating pills */}
          <div className="lg:hidden fixed top-[56px] left-3 z-[60] flex flex-col gap-2">
            {navItems.map(({ href, label, exact, icon: Icon }, i) => {
              const active = isActive(href, exact);
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={`mobile-icon-item flex items-center gap-3 pl-3 pr-5 py-2.5 rounded-2xl border shadow-lg backdrop-blur-sm transition-colors ${
                    active
                      ? "bg-accent/15 border-accent/30 text-accent"
                      : "bg-card/95 border-card-border text-muted hover:text-foreground"
                  }`}
                  style={{ animationDelay: `${i * 55}ms` }}
                >
                  <Icon size={16} className="shrink-0" />
                  <span className="text-sm font-medium">{label}</span>
                </Link>
              );
            })}

            {/* Resume pill */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-icon-item flex items-center gap-3 pl-3 pr-5 py-2.5 rounded-2xl bg-accent border border-accent/50 shadow-lg text-white transition-colors hover:bg-accent-hover"
              style={{ animationDelay: `${navItems.length * 55}ms` }}
            >
              <ExternalLink size={16} className="shrink-0" />
              <span className="text-sm font-medium">Resume</span>
            </a>
          </div>
        </>
      )}
    </>
  );
}
