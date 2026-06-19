"use client";

import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";

const navItems = ["Projects", "About", "Contact"];

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const scrollTo = useCallback((id: string) => {
    const lenis = (window as any).__lenis;
    const el = document.getElementById(id);
    if (lenis && el) {
      lenis.scrollTo(el, { offset: -80 });
    } else if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!mounted) {
    return <nav className="fixed top-0 left-0 w-full z-50 opacity-0 h-24" />;
  }

  const customEase = [0.16, 1, 0.3, 1];

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: customEase, delay: 0.2 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
          scrolled || isMobileMenuOpen
            ? "bg-background/90 backdrop-blur-xl border-foreground/10 will-change-[backdrop-filter]"
            : "bg-transparent border-transparent py-6 md:py-0"
        }`}
      >
        <div className="container mx-auto px-6 sm:px-12 md:px-24 flex justify-between items-center">
          <div
            className="flex-shrink-0 relative z-50 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <Image
              width={80}
              height={80}
              src={resolvedTheme === "dark" ? "/assets/logo/logo_white.png" : "/assets/logo/logo_black.png"}
              alt="Site logo"
              priority
              className="w-12 h-12 md:w-16 md:h-16 object-contain"
            />
          </div>

          <div className="hidden md:flex items-center gap-12">
            <div className="flex space-x-10">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="text-xs font-mono uppercase tracking-[0.2em] text-foreground/70 hover:text-foreground transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ease-[cubic-bezier(0.16,1,0.3,1)]" />
                </button>
              ))}
            </div>

            <div className="w-[1px] h-4 bg-foreground/20" />
            <button
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
              className="text-xs font-mono uppercase tracking-widest flex items-center gap-3 text-foreground/70 hover:text-foreground transition-colors group"
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full bg-foreground opacity-50"
                ></span>
                <span
                  className="relative inline-flex rounded-full h-2 w-2 bg-foreground"
                ></span>
              </span>
              {resolvedTheme === "dark" ? "Light Mode" : "Dark Mode"}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-6 relative z-50">
            <button
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
              className="text-[10px] font-mono uppercase tracking-widest flex items-center gap-2"
            >
              <span
                className="h-1.5 w-1.5 rounded-full bg-foreground"
              />
              {resolvedTheme === "dark" ? "LGT" : "DRK"}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-xs font-mono uppercase tracking-widest text-foreground group relative"
            >
              <span className="relative z-10 overflow-hidden flex flex-col h-4">
                <motion.span
                  animate={{ y: isMobileMenuOpen ? "-100%" : "0%" }}
                  transition={{ duration: 0.5, ease: customEase }}
                >
                  [ Menu ]
                </motion.span>
                <motion.span
                  className="absolute top-full left-0 w-full text-center"
                  animate={{ y: isMobileMenuOpen ? "-100%" : "0%" }}
                  transition={{ duration: 0.5, ease: customEase }}
                >
                  [ Close ]
                </motion.span>
              </span>
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: customEase }}
            className="fixed inset-0 z-40 bg-background flex flex-col justify-center px-6 sm:px-12 md:hidden"
          >
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay z-0"
              style={{ backgroundImage: 'url("/assets/extras/noise.png")' }}
            />

            <div className="relative z-10 flex flex-col gap-4 mt-12">
              {navItems.map((item, i) => (
                <div key={item} className="overflow-hidden">
                  <motion.button
                    initial={{ y: "120%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "120%", opacity: 0 }}
                    transition={{
                      duration: 0.8,
                      ease: customEase,
                      delay: 0.1 + i * 0.05,
                    }}
                    onClick={() => scrollTo(item.toLowerCase())}
                    className="text-[16vw] font-black uppercase leading-[0.85] tracking-tighter text-transparent text-left w-full hover:text-foreground transition-colors duration-300"
                    style={{ WebkitTextStroke: "1px var(--foreground)" }}
                  >
                    {item}
                  </motion.button>
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute bottom-12 left-6 right-6 flex justify-between items-end border-t border-foreground/10 pt-6"
            >
              <div className="flex flex-col gap-1 text-[10px] uppercase tracking-widest font-mono text-foreground/50">
                <span>Jakarta, ID</span>
                <span>Available for work</span>
              </div>
              <div className="text-[10px] uppercase tracking-widest font-mono text-foreground/50">
                © {new Date().getFullYear()}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
