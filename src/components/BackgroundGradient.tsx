
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface BackgroundGradientProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "purple" | "gold" | "mixed" | "subtle";
  animate?: boolean;
  children?: React.ReactNode;
}

export function BackgroundGradient({
  className,
  variant = "purple",
  animate = false,
  children,
  ...props
}: BackgroundGradientProps) {
  return (
    <div className="relative">
      <div
        className={cn(
          "absolute inset-0 rounded-3xl opacity-50 blur-3xl -z-10",
          animate && "animate-gradient-xy",
          variant === "purple" && "bg-gradient-to-br from-reach-purple/30 to-reach-purple/10",
          variant === "gold" && "bg-gradient-to-br from-reach-gold/30 to-reach-gold/10",
          variant === "mixed" && "bg-gradient-to-br from-reach-purple/30 via-purple-400/20 to-reach-gold/20",
          variant === "subtle" && "bg-gradient-to-br from-slate-200 to-slate-50",
          className
        )}
        {...props}
      />
      {children}
    </div>
  );
}
