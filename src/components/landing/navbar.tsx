import Link from "next/link";

import { cn } from "@/lib/cn";
import { BrandLogo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const navItems = [
  { href: "#problem", label: "Problem" },
  { href: "#solution", label: "Solution" },
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
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
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" href="#features">
            Explore
          </Button>
          <Button size="sm" href="#cta">
            Get Demo
          </Button>
        </div>
      </Container>
    </header>
  );
}

