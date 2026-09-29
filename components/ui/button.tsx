import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors cursor-pointer",
          variant === "primary" &&
            "bg-secondary-400 text-neutral-950 hover:bg-secondary-500",
          variant === "secondary" &&
            "bg-primary-800 text-white hover:bg-primary-900",
          variant === "ghost" &&
            "bg-transparent text-neutral-700 hover:bg-neutral-100",
          variant === "outline" &&
            "border border-neutral-200 bg-transparent text-neutral-700 hover:bg-neutral-50",
          size === "sm" && "px-4 py-1.5 text-sm",
          size === "md" && "px-6 py-2 text-base",
          size === "lg" && "px-8 py-3 text-lg",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
export type { ButtonProps };
