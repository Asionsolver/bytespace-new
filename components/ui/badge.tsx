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
          "inline-flex items-center justify-center rounded-full px-4 py-2 text-base font-medium leading-[1.2] transition-colors",
          variant === "default" &&
            "border border-neutral-200 text-neutral-700",
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
