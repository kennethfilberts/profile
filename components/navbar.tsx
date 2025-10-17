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
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="absolute top-0 left-0 w-full z-30 backdrop-blur-md bg-transparent">
      <div className="container mx-auto px-6 sm:px-10 lg:px-16 py-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <motion.a href="/">
              <Image
                width={100}
                height={100}
                src={
                  !mounted
                    ? WhiteLogo
                    : theme === "dark"
                    ? WhiteLogo
                    : BlackLogo
                }
                alt="black_logo"
              ></Image>
            </motion.a>
          </div>

          <div className="hidden md:flex space-x-10 items-center">
            {["Projects", "About", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`${item.toLowerCase()}`}
                className="relative text-foreground text-base transition duration-300 ease-in-out hover:text-primary group"
                whileTap={{ scale: 0.35 }}
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </motion.a>
            ))}
            <Button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              variant="ghost"
              className="text-foreground hover:bg-foreground/30 transition duration-300 ease-in-out"
            >
              {!mounted ? (
                <Sun className="w-6 h-6" />
              ) : theme === "dark" ? (
                <Sun className="w-6 h-6" />
              ) : (
                <Moon className="w-6 h-6" />
              )}
            </Button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <Button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              variant="ghost"
              className="text-foreground hover:bg-foreground/30 transition duration-300 ease-in-out"
            >
              {!mounted ? (
                <Moon className="w-6 h-6" />
              ) : theme === "dark" ? (
                <Sun className="w-6 h-6" />
              ) : (
                <Moon className="w-6 h-6" />
              )}
            </Button>
            <Button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              variant="ghost"
              className="text-foreground hover:background-black/40 transition duration-300 ease-in-out"
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
            initial={{ opacity: 0, x: 20, y: 0 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: -20, y: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute top-16 left-0 right-0 bottom-0 z-40 md:hidden bg-background backdrop-blur-lg border-t border-white/20 text-center pt-6 pb-0 space-y-4 overflow-y-auto h-screen"
          >
            {["Projects", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`${item.toLowerCase()}`}
                className={`block text-foreground text-lg font-medium hover:bg-black/10 transition duration-300 ease-in-out px-4 py-3`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
