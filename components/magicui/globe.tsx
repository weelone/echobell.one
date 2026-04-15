"use client";

import createGlobe from "cobe";
import { useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

const MOVEMENT_DAMPING = 1400;

type GlobeMarker = {
  location: [number, number];
  size: number;
  color?: [number, number, number];
};

type GlobeConfig = {
  devicePixelRatio: number;
  phi: number;
  theta: number;
  dark: number;
  diffuse: number;
  mapSamples: number;
  mapBrightness: number;
  baseColor: [number, number, number];
  markerColor: [number, number, number];
  glowColor: [number, number, number];
  markers: GlobeMarker[];
  mapBaseBrightness?: number;
  opacity?: number;
  offset?: [number, number];
  scale?: number;
  context?: WebGLContextAttributes;
};

type GlobeRenderState = {
  phi?: number;
  width?: number;
  height?: number;
};

type GlobeInitOptions = GlobeConfig & {
  width: number;
  height: number;
  onRender?: (state: GlobeRenderState) => void;
};

type GlobeInstance = {
  destroy: () => void;
  update?: (state: GlobeRenderState) => void;
};

const createGlobeCompat = createGlobe as unknown as (
  canvas: HTMLCanvasElement,
  options: GlobeInitOptions
) => GlobeInstance;

const GLOBE_CONFIG: GlobeConfig = {
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [1, 1, 1],
  markers: [
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [19.076, 72.8777], size: 0.1 },
    { location: [23.8103, 90.4125], size: 0.05 },
    { location: [30.0444, 31.2357], size: 0.07 },
    { location: [39.9042, 116.4074], size: 0.08 },
    { location: [-23.5505, -46.6333], size: 0.1 },
    { location: [19.4326, -99.1332], size: 0.1 },
    { location: [40.7128, -74.006], size: 0.1 },
    { location: [34.6937, 135.5022], size: 0.05 },
    { location: [41.0082, 28.9784], size: 0.06 },
  ],
};

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: GlobeConfig;
}) {
  const phiRef = useRef(0);
  const [width, setWidth] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);

  const r = useMotionValue(0);
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  });

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      r.set(r.get() + delta / MOVEMENT_DAMPING);
    }
  };

  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) {
        setWidth(canvasRef.current.offsetWidth);
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    if (!canvasRef.current || width <= 0) {
      return;
    }

    const nextFrameState = (): Required<GlobeRenderState> => {
      if (pointerInteracting.current === null) {
        phiRef.current += 0.005;
      }

      return {
        phi: phiRef.current + rs.get(),
        width: width * 2,
        height: width * 2,
      };
    };

    const globe = createGlobeCompat(canvasRef.current, {
      ...config,
      width: width * 2,
      height: width * 2,
      onRender: (state) => {
        Object.assign(state, nextFrameState());
      },
    });
    let frameId: number | undefined;

    const update = globe.update;

    if (typeof update === "function") {
      const animate = () => {
        update(nextFrameState());
        frameId = window.requestAnimationFrame(animate);
      };

      animate();
    }

    const opacityTimeoutId = window.setTimeout(() => {
      if (canvasRef.current) {
        canvasRef.current.style.opacity = "1";
      }
    }, 0);

    return () => {
      window.clearTimeout(opacityTimeoutId);
      if (frameId !== undefined) {
        window.cancelAnimationFrame(frameId);
      }
      globe.destroy();
    };
  }, [rs, config, width]);

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
        className
      )}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
        )}
        ref={canvasRef}
        onPointerDown={(e) => {
          updatePointerInteraction(e.clientX);
        }}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  );
}
