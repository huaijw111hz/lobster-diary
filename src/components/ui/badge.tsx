import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline" | "ghost" | "link";
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const variantClasses = {
      default: "bg-blue-500 text-white hover:bg-blue-600",
      secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
      destructive: "bg-red-100 text-red-800 hover:bg-red-200",
      outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
      ghost: "hover:bg-gray-100 hover:text-gray-900",
      link: "text-blue-500 underline-offset-4 hover:underline",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
          variantClasses[variant],
          className
        )}
        {...props}
      />
    );
  }
);
Badge.displayName = "Badge";

export { Badge };
