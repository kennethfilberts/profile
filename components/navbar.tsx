"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import BlackLogo from "@/public/assets/logo/logo_black.png";
import WhiteLogo from "@/public/assets/logo/logo_white.png";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

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

  if (!mounted) {
    return (
      <nav className="absolute top-0 left-0 w-full z-30 backdrop-blur-md bg-transparent opacity-0" />
    );
  }

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="absolute top-0 left-0 w-full z-30 backdrop-blur-md bg-transparent"
    >
      <div className="container mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <motion.a href="/">
              <Image
                width={100}
                height={100}
                src={resolvedTheme === "dark" ? WhiteLogo : BlackLogo}
                alt="Site logo"
                priority
              />
            </motion.a>
          </div>

          <div className="hidden md:flex space-x-10 items-center">
            {["Projects", "About", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`/${item.toLowerCase()}`}
                className="relative text-foreground text-base transition duration-300 ease-in-out hover:text-primary group"
                whileTap={{ scale: 0.95 }}
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </motion.a>
            ))}

            <Button
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
              variant="ghost"
              className="text-foreground hover:bg-foreground/30 transition duration-300 ease-in-out"
            >
              {resolvedTheme === "dark" ? (
                <Sun className="w-6 h-6" />
              ) : (
                <Moon className="w-6 h-6" />
              )}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <Button
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
              variant="ghost"
              className="text-foreground hover:bg-foreground/30 transition duration-300 ease-in-out"
            >
              {resolvedTheme === "dark" ? (
                <Sun className="w-6 h-6" />
              ) : (
                <Moon className="w-6 h-6" />
              )}
            </Button>

            <Button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              variant="ghost"
              className="text-foreground hover:bg-foreground/30 transition duration-300 ease-in-out"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="absolute top-24 left-0 right-0 bottom-0 z-40 md:hidden bg-background backdrop-blur-lg border-t border-white/20 text-center pt-6 pb-0 space-y-4 overflow-y-hidden h-screen"
          >
            {["Projects", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase()}`}
                className="block text-foreground text-lg font-medium hover:bg-black/10 transition duration-300 ease-in-out px-4 py-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
