import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

export function GlassCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("glass glass-shine rounded-3xl p-6", className)}>{children}</div>;
}
