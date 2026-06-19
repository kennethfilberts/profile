"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    const lenis = (window as any).__lenis;
    if (lenis) lenis.scrollTo(0, { duration: 1.2 });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.9 }}
          whileTap={{ scale: 0.95 }}
          transition={{ 
            duration: 0.5, 
            ease: [0.16, 1, 0.3, 1] // Matches your portfolio's custom easing
          }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="group fixed bottom-8 right-8 md:bottom-12 md:right-12 z-50 flex items-center justify-center w-12 h-12 bg-background/30 backdrop-blur-md border border-foreground/10 text-foreground/50 hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300 will-change-[transform,opacity,backdrop-filter]"
        >
          {/* Arrow with a subtle upward shift on hover */}
          <ArrowUp className="w-5 h-5 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1" />
          
          {/* Subtle animated border glow effect */}
          <span className="absolute inset-0 border border-foreground opacity-0 group-hover:opacity-20 scale-110 group-hover:scale-100 transition-all duration-500 pointer-events-none" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
