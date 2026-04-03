import Link from "next/link";
import type { ComponentProps } from "react";

import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md";

const variantClassName: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-emerald-700 to-teal-700 text-white shadow-sm shadow-emerald-900/10 hover:from-emerald-600 hover:to-teal-600 dark:from-emerald-400 dark:to-teal-400 dark:text-zinc-950",
  secondary:
    "bg-white text-zinc-900 ring-1 ring-inset ring-zinc-200 hover:bg-zinc-50 dark:bg-zinc-950 dark:text-white dark:ring-zinc-800 dark:hover:bg-zinc-900",
  ghost:
    "text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:text-white dark:hover:bg-zinc-900/60",
};

export function getButtonClassName({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: Variant;
  size?: Size;
  className?: string;
}) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-zinc-950",
    size === "sm" ? "h-10 px-4 text-sm" : "h-11 px-5 text-sm",
    variantClassName[variant],
    "hover:-translate-y-[1px]",
    className,
  );
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ComponentProps<typeof Link> & {
  variant?: Variant;
  size?: Size;
}) {
  return (
    <Link
      className={getButtonClassName({ variant, size, className })}
      {...props}
    />
  );
}

