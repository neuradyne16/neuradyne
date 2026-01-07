import { cn } from "@/lib/utils";
import React from "react";

export function GridBackground({ children, className }: { children?: React.ReactNode; className?: string }) {
  return (
    <div className={cn("relative w-full bg-white dark:bg-black", className)}>
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
}

export function DotBackgroundDemo() {
  return (
    <GridBackground className="flex h-[50rem] items-center justify-center">
      <p className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
        
      </p>
    </GridBackground>
  );
}
