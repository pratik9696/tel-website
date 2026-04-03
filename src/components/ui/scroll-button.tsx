"use client";

import type { ComponentProps } from "react";

import { getButtonClassName } from "@/components/ui/button";

export function ScrollButton({
  targetId,
  variant,
  size,
  className,
  onClick,
  ...props
}: Omit<ComponentProps<"button">, "type"> & {
  targetId: string;
  variant?: Parameters<typeof getButtonClassName>[0]["variant"];
  size?: Parameters<typeof getButtonClassName>[0]["size"];
}) {
  return (
    <button
      type="button"
      className={getButtonClassName({ variant, size, className })}
      onClick={(e) => {
        onClick?.(e);

        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });

        const { pathname, search } = window.location;
        window.history.replaceState(null, "", `${pathname}${search}`);
      }}
      {...props}
    />
  );
}

