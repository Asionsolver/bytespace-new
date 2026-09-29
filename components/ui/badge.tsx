import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "active" | "outline";
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <span
        className={cn(
          "inline-flex items-center justify-center rounded-full px-4 py-3 text-label-m! font-medium transition-colors",
          variant === "default" &&
          "bg-neutral-50 text-neutral-700",
          variant === "active" &&
          "bg-secondary-400 text-neutral-950",
          variant === "outline" &&
          "bg-white/80 text-neutral-700 backdrop-blur-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Badge.displayName = "Badge";

export { Badge };
export type { BadgeProps };
