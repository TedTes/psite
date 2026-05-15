"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpenText,
  Briefcase,
  Github,
  Home,
  Linkedin,
  Mail,
  UserRound,
} from "lucide-react";

const navItems = [
  { href: "/", label: "Home", exact: true, icon: Home },
  { href: "/blog", label: "Writing", exact: false, icon: BookOpenText },
  { href: "/projects", label: "Projects", exact: false, icon: Briefcase },
  { href: "/about", label: "About", exact: false, icon: UserRound },
];

const socialLinks = [
  { href: "https://github.com/TedTes", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/tedrostesfu", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:tedtfu@gmail.com", icon: Mail, label: "Email" },
];

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (href: string, exact: boolean) =>
    exact ? pathname === href : pathname?.startsWith(href);

  return (
    <>
      {/* Desktop left rail */}
      <aside className="hidden lg:flex fixed top-0 left-0 h-full w-[104px] z-[60] flex-col items-center py-7 border-r border-card-border bg-background">
        {/* Logo */}
        <Link
          href="/"
          className="w-9 h-9 rounded-lg bg-foreground text-background flex items-center justify-center mb-7 shrink-0"
        >
          <span className="text-sm font-black">T</span>
        </Link>

        <div className="w-8 h-px bg-card-border mb-7" />

        {/* Nav items */}
        <nav className="flex flex-col items-center gap-7 flex-1">
          {navItems.map(({ href, label, exact, icon: Icon }) => {
            const active = isActive(href, exact);
            return (
              <Link
                key={href}
                href={href}
                className={`flex flex-col items-center gap-2 transition-colors ${
                  active ? "text-foreground" : "text-muted hover:text-foreground"
                }`}
              >
                <Icon
                  size={15}
                  className={active ? "text-foreground" : "text-muted"}
                  strokeWidth={active ? 2.5 : 1.5}
                />
                <span className="text-[10px] uppercase font-medium">
                  {label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Bottom social links */}
        <div className="w-8 h-px bg-card-border mb-5" />
        <div className="flex flex-col items-center gap-4">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <a
              key={href}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              aria-label={label}
              className="text-muted hover:text-foreground transition-colors"
            >
              <Icon size={13} strokeWidth={1.5} />
            </a>
          ))}
        </div>
      </aside>

      {/* Mobile bottom nav */}
      <nav className="lg:hidden fixed bottom-3 left-1/2 -translate-x-1/2 z-[60] flex items-center gap-1 rounded-2xl border border-card-border bg-card/95 backdrop-blur-md px-2 py-2 shadow-lg">
        {navItems.map(({ href, label, exact, icon: Icon }) => {
          const active = isActive(href, exact);
          return (
            <Link
              key={href}
              href={href}
              aria-label={label}
              className={`flex h-10 min-w-12 items-center justify-center rounded-lg px-2 text-xs transition-colors ${
                active
                  ? "text-foreground bg-card-border"
                  : "text-muted hover:text-foreground"
              }`}
            >
              <Icon size={15} strokeWidth={active ? 2.4 : 1.7} />
            </Link>
          );
        })}
      </nav>
    </>
  );
}
