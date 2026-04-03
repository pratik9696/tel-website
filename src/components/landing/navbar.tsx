"use client";

import Link from "next/link";

import { cn } from "@/lib/cn";
import { BrandLogo } from "@/components/brand/logo";
import { Container } from "@/components/ui/container";
import { ScrollButton } from "@/components/ui/scroll-button";

const navItems = [
  { id: "problem", label: "Problem" },
  { id: "solution", label: "Solution" },
  { id: "features", label: "Features" },
  { id: "how-it-works", label: "How it works" },
];

export function Navbar({ className }: { className?: string }) {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-transparent bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-zinc-950/60",
        className,
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold tracking-tight text-zinc-900 dark:text-white"
        >
          <BrandLogo size={32} priority />
          <span>ThinkEasyLabs</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                const el = document.getElementById(item.id);
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                const { pathname, search } = window.location;
                window.history.replaceState(null, "", `${pathname}${search}`);
              }}
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ScrollButton variant="ghost" size="sm" targetId="features">
            Explore
          </ScrollButton>
          <ScrollButton size="sm" targetId="cta">
            Get Demo
          </ScrollButton>
        </div>
      </Container>
    </header>
  );
}

