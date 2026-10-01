import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

const SectionHeading = React.forwardRef<HTMLDivElement, SectionHeadingProps>(
  ({ className, label, title, description, align = "center", ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        align === "left" && "items-start text-left",
        className
      )}
      {...props}
    >
      {label && (
        <span className="font-body text-base font-medium leading-[1.2] text-primary-600">
          {label}
        </span>
      )}
      <h2
        className={cn(
          "font-heading font-semibold leading-[1.2] text-neutral-950",
          align === "center" ? "text-heading-m max-w-173.5" : "text-heading-m"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "font-body text-body-l text-neutral-400 max-w-241",
            align === "center" && "text-center"
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
);
SectionHeading.displayName = "SectionHeading";

export { SectionHeading };
export type { SectionHeadingProps };
