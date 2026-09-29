import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

/* -------------------------------------------------------------------------- */
/*  Avatar                                                                    */
/* -------------------------------------------------------------------------- */
interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  alt?: string;
  size?: number;
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, src, alt = "", size = 32, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "relative shrink-0 overflow-hidden rounded-full border-2 border-white",
        className
      )}
      style={{ width: size, height: size }}
      {...props}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes={`${size}px`}
      />
    </div>
  )
);
Avatar.displayName = "Avatar";

/* -------------------------------------------------------------------------- */
/*  AvatarGroup                                                               */
/* -------------------------------------------------------------------------- */
interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  avatars: string[];
  size?: number;
  max?: number;
  extraCount?: number;
}

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ className, avatars, size = 32, max = 4, extraCount, ...props }, ref) => {
    const visible = avatars.slice(0, max);
    const remaining = extraCount ?? Math.max(0, avatars.length - max);

    return (
      <div
        ref={ref}
        className={cn("flex items-center", className)}
        {...props}
      >
        {visible.map((src, i) => (
          <Avatar
            key={i}
            src={src}
            alt={`Student ${i + 1}`}
            size={size}
            className={i > 0 ? "-ml-2" : ""}
          />
        ))}
        {remaining > 0 && (
          <div
            className="relative shrink-0 flex items-center justify-center rounded-full bg-neutral-950 text-white text-xs font-medium border-2 border-white -ml-2"
            style={{ width: size, height: size }}
          >
            {remaining}+
          </div>
        )}
      </div>
    );
  }
);
AvatarGroup.displayName = "AvatarGroup";

export { Avatar, AvatarGroup };
export type { AvatarProps, AvatarGroupProps };
