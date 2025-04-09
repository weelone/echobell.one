"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { Logo } from "./Logo";
import {
  GlobeIcon,
  MailIcon,
  PhoneCallIcon,
  SmartphoneIcon,
} from "lucide-react";

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

export function BentoGridsSectionForwardingFigure() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex py-4 w-full h-full items-center justify-center overflow-hidden"
      ref={containerRef}
    >
      <div className="flex size-full max-w-lg items-stretch justify-between">
        <div className="flex flex-col items-center justify-between gap-4">
          <Circle ref={div1Ref}>
            <GlobeIcon className="w-5 h-5" />
          </Circle>
          <Circle ref={div2Ref}>
            <MailIcon className="w-5 h-5" />
          </Circle>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Circle ref={div3Ref} className="size-16">
            <Logo className="w-7 h-7 mt-2 text-orange-500" />
          </Circle>
        </div>
        <div className="flex flex-col items-center justify-between gap-4">
          <Circle ref={div4Ref}>
            <PhoneCallIcon className="w-5 h-5" />
          </Circle>
          <Circle ref={div5Ref}>
            <SmartphoneIcon className="w-5 h-5" />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div3Ref}
        gradientStartColor="oklch(70.4% 0.191 22.216)"
        gradientStopColor="oklch(64.6% 0.222 41.116)"
        duration={6}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div3Ref}
        gradientStartColor="oklch(70.4% 0.191 22.216)"
        gradientStopColor="oklch(64.6% 0.222 41.116)"
        duration={6}
        delay={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={40}
        gradientStartColor="oklch(70.4% 0.191 22.216)"
        gradientStopColor="oklch(64.6% 0.222 41.116)"
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div5Ref}
        curvature={-40}
        gradientStartColor="oklch(70.4% 0.191 22.216)"
        gradientStopColor="oklch(64.6% 0.222 41.116)"
        duration={3}
      />
    </div>
  );
}
