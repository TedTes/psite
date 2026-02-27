"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  FolderKanban,
  BookOpenText,
  UserRound,
} from "lucide-react";

const navItems = [
  { href: "/", label: "Home", exact: true, icon: Home },
  {
    href: "/projects",
    label: "Projects",
    exact: false,
    icon: FolderKanban,
  },
  {
    href: "/blog",
    label: "Blog",
    exact: false,
    icon: BookOpenText,
  },
  {
    href: "/about",
    label: "About",
    exact: false,
    icon: UserRound,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (href: string, exact: boolean) =>
    exact ? pathname === href : pathname?.startsWith(href);

  return (
    <>
      {/* Desktop floating icon stack */}
      <aside className="hidden lg:flex fixed top-3 bottom-3 left-3 z-[60] flex-col">
        <div className="flex flex-col gap-2">
          <Link
            href="/"
            className="w-10 h-10 rounded-xl border shadow-md bg-accent/15 border-accent/30 text-accent flex items-center justify-center"
          >
            <span className="text-sm font-black tracking-tight">TT</span>
          </Link>

          <div className="h-2" />

          {navItems.map(({ href, label, exact, icon: Icon }) => {
            const active = isActive(href, exact);
            return (
              <Link
                key={href}
                href={href}
                aria-label={label}
                title={label}
                className={`w-10 h-10 rounded-xl border shadow-md flex items-center justify-center transition-colors ${
                  active
                    ? "bg-accent/15 border-accent/30 text-accent"
                    : "bg-card/95 border-card-border text-muted hover:text-foreground"
                }`}
              >
                <Icon size={16} />
              </Link>
            );
          })}
        </div>

      </aside>

      {/* Mobile fixed bottom menu */}
      <nav className="lg:hidden fixed bottom-3 left-1/2 -translate-x-1/2 z-[60] flex items-center gap-2 rounded-2xl border border-card-border bg-card/95 backdrop-blur-md p-2 shadow-lg">
        {navItems.map(({ href, label, exact, icon: Icon }) => {
          const active = isActive(href, exact);
          return (
            <Link
              key={href}
              href={href}
              aria-label={label}
              className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-colors ${
                active
                  ? "bg-accent/15 border-accent/30 text-accent"
                  : "bg-card/95 border-card-border text-muted hover:text-foreground"
              }`}
            >
              <Icon size={16} />
            </Link>
          );
        })}
      </nav>
    </>
  );
}
