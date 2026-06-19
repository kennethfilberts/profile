"use client";

import { useEffect, useRef } from "react";

export function CursorFollower() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    let xToCursor: any;
    let yToCursor: any;
    let handleMouseMove: ((e: MouseEvent) => void) | null = null;

    const initCursor = async () => {
      const gsap = (await import("gsap")).default;

      gsap.set(cursor, {
        xPercent: -50,
        yPercent: -50,
        x: -100,
        y: -100,
      });

      xToCursor = gsap.quickTo(cursor, "x", {
        duration: 0.1,
        ease: "power3.out",
      });
      yToCursor = gsap.quickTo(cursor, "y", {
        duration: 0.1,
        ease: "power3.out",
      });

      handleMouseMove = (e: MouseEvent) => {
        xToCursor(e.clientX);
        yToCursor(e.clientY);
      };

      window.addEventListener("mousemove", handleMouseMove);
    };

    initCursor();

    return () => {
      if (handleMouseMove) {
        window.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-4 h-4 bg-secondary rounded-full pointer-events-none z-9999 mix-blend-difference hidden md:block"
    />
  );
}
