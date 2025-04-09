"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { LockIcon, UserIcon } from "lucide-react";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white dark:bg-black p-3",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function BentoGridsSectionPrivacyFigure() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex py-4 w-full h-full items-center justify-center overflow-hidden"
      ref={containerRef}
    >
      <div className="flex size-full max-w-lg items-center justify-between">
        <Circle ref={div1Ref}>
          <UserIcon className="w-5 h-5" />
        </Circle>
        <Circle ref={div2Ref}>
          <LockIcon className="w-5 h-5" />
        </Circle>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div2Ref}
        gradientStartColor="oklch(70.4% 0.191 22.216)"
        gradientStopColor="oklch(64.6% 0.222 41.116)"
        curvature={50}
        duration={4}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div1Ref}
        gradientStartColor="oklch(70.4% 0.191 22.216)"
        gradientStopColor="oklch(64.6% 0.222 41.116)"
        curvature={-50}
        reverse
        duration={4}
      />
    </div>
  );
}
