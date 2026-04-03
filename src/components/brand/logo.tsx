import Image from "next/image";

import { cn } from "@/lib/cn";

export function BrandLogo({
  className,
  size = 32,
  priority,
}: {
  className?: string;
  size?: number;
  priority?: boolean;
}) {
  return (
    <Image
      src="/thinkeasylabs-logo.png"
      alt="ThinkEasyLabs"
      width={size}
      height={size}
      priority={priority}
      className={cn("rounded-xl shadow-sm", className)}
    />
  );
}

