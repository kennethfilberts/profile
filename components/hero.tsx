"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      const idleId = (window as any).requestIdleCallback(() =>
        setMounted(true),
      );
      return () => (window as any).cancelIdleCallback(idleId);
    } else {
      timer = setTimeout(() => setMounted(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const textReveal = {
    hidden: { y: "120%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const smoothScroll = (id: string) => {
    const lenis = (window as any).__lenis;
    const el = document.getElementById(id);
    if (lenis && el) lenis.scrollTo(el, { offset: -80 });
    else el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-background text-foreground selection:bg-foreground selection:text-background">
        <div className="absolute inset-0 overflow-hidden">
          {mounted && (
            <div className="absolute top-[-15%] left-[-2%] w-[110%] h-[115%] md:top-[-15%] md:left-[2%] md:w-[70%] md:h-[120%] lg:top-[-10%] lg:left-[45%] lg:w-[60%] lg:h-[120%] z-0">
              <Spline
                scene="https://prod.spline.design/5u1NTspjNU5fMhJZ/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          )}
        </div>

      <div className="relative z-10 flex flex-col justify-between h-full w-full px-6 py-8 sm:px-12 md:px-24 md:py-16 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
          className="flex justify-between items-start text-[10px] sm:text-xs uppercase tracking-[0.2em] font-mono text-foreground/50"
        >
          <div className="flex flex-col gap-1">
            <span>Full-Stack &</span>
            <span>AI Engineer</span>
          </div>
          <div className="flex flex-col gap-1 text-right">
            <span>Jakarta, ID</span>
            <span className="text-foreground/80 flex items-center justify-end gap-2">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              Available for work
            </span>
          </div>
        </motion.div>

        <div className="flex flex-col justify-center flex-grow -mt-10 lg:-mt-0 mix-blend-difference">
          <div className="overflow-hidden">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={textReveal}
              className="text-[18vw] lg:text-[13vw] font-black uppercase leading-[0.85] tracking-tighter text-foreground"
            >
              Kenneth
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={textReveal}
              className="text-[18vw] lg:text-[13vw] font-black uppercase leading-[0.85] tracking-tighter text-transparent ml-0 lg:ml-[10vw]"
              style={{ WebkitTextStroke: "2px var(--foreground)" }}
            >
              Filbert
            </motion.h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end pb-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="md:col-span-2"
          >
            <p className="text-sm md:text-base text-foreground/60 max-w-md font-light leading-relaxed">
              Crafting meaningful, user-centered digital experiences and
              intelligent systems that connect, inspire, and empower.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
            className="flex flex-col items-start md:items-end gap-4 pointer-events-auto"
          >
            <button
              onClick={() => smoothScroll("projects")}
              className="group flex items-center gap-3 text-xs sm:text-sm uppercase tracking-widest hover:text-foreground transition-colors text-foreground/70"
            >
              Selected Works
              <span className="p-2 rounded-full border border-foreground/20 group-hover:bg-foreground group-hover:text-background transition-all">
                <ArrowDownRight className="w-3 h-3 group-hover:rotate-[-45deg] transition-transform" />
              </span>
            </button>
            <button
              onClick={() => smoothScroll("contact")}
              className="group flex items-center gap-3 text-xs sm:text-sm uppercase tracking-widest hover:text-foreground transition-colors text-foreground/70"
            >
              Let&apos;s Talk
              <span className="p-2 rounded-full border border-foreground/20 group-hover:bg-foreground group-hover:text-background transition-all">
                <ArrowRight className="w-3 h-3 transition-transform" />
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
