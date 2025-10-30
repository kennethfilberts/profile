"use client";

import React, { useState, useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      const idleId = (window as any).requestIdleCallback(() =>
        setMounted(true)
      );
      return () => (window as any).cancelIdleCallback(idleId);
    } else {
      timer = setTimeout(() => setMounted(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <main className="flex flex-col-reverse lg:flex-row items-center justify-between min-h-screen px-6 py-32 gap-6 lg:gap-32 sm:px-24 lg:px-44 text-foreground z-10">
      <div className="flex flex-col mt-48 gap-4 max-w-2xl text-center lg:mt-0 lg:text-left z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight"
        >
          Hi, I'm <span className="text-secondary">Kenneth Filbert</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-base sm:text-xl text-muted-foreground"
        >
          I'm a passionate software developer dedicated to crafting meaningful
          and user-centered digital experiences that connect, inspire, and
          empower.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mt-2 justify-center lg:justify-start"
        >
          <Button
            className="text-base px-6 py-2 hover:cursor-pointer"
            onClick={() => (location.href = "projects")}
          >
            View Projects
          </Button>
          <Button
            variant="ghost"
            className="text-base px-6 py-2 hover:cursor-pointer"
            onClick={() => (location.href = "contact")}
          >
            Contact Me
          </Button>
        </motion.div>
      </div>

      <Suspense
        fallback={
          <div className="absolute top-[-15%] left-[-2%] bottom-0 max-w-xl max-h-xl md:top-[-15%] md:left-[2%] md:max-w-3xl md:max-h-3xl lg:top-0 lg:left-[50%] lg:max-w-[46rem] lg:max-h-[46rem] z-0 bg-muted/10 rounded-2xl animate-pulse" />
        }
      >
        {mounted && (
          <Spline
            scene="https://prod.spline.design/5u1NTspjNU5fMhJZ/scene.splinecode"
            className="absolute top-[-15%] left-[-2%] bottom-0 max-w-xl max-h-xl md:top-[-15%] md:left-[2%] md:max-w-3xl md:max-h-3xl lg:top-0 lg:left-[50%] lg:max-w-[46rem] lg:max-h-[46rem] z-0"
          />
        )}
      </Suspense>
    </main>
  );
}
