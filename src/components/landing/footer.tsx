import Link from "next/link";

import { BrandLogo } from "@/components/brand/logo";
import { Container } from "@/components/ui/container";

const links = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t border-zinc-200/70 bg-white dark:border-zinc-800/60 dark:bg-zinc-950">
      <Container className="py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-semibold tracking-tight text-zinc-900 dark:text-white"
            >
              <BrandLogo size={28} />
              ThinkEasyLabs
            </Link>
            <p className="mt-2 max-w-sm text-sm leading-6 text-zinc-600 dark:text-zinc-300">
              AI-powered analytics for MSME manufacturing companies in India.
              Upload data, ask questions, and make faster decisions.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm md:grid-cols-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="text-sm">
            <div className="font-medium text-zinc-900 dark:text-white">
              Contact
            </div>
            <a
              href="mailto:contact@thinkeasylabs.com"
              className="mt-2 block text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
            >
              contact@thinkeasylabs.com
            </a>
            <div className="mt-2 text-zinc-500 dark:text-zinc-400">
              Bengaluru, India
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-zinc-200/70 pt-6 text-xs text-zinc-500 dark:border-zinc-800/60 dark:text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {new Date().getFullYear()} ThinkEasyLabs. All rights reserved.
          </div>
          <div>Built for fast, secure decisions.</div>
        </div>
      </Container>
    </footer>
  );
}

