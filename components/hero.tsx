"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Photo from "@/public/assets/profile/self.png";
import ModelViewer from "./hero/model-viewer";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-center min-h-screen px-6 py-32 gap-32 sm:px-24 lg:px-44 text-foreground">
      <div className="flex flex-col gap-6 max-w-2xl text-center lg:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight"
        >
          Hi, I'm <span className="text-primary">Kenneth Filbert</span>
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

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="relative w-[14rem] h-[14rem] sm:w-64 sm:h-64 lg:w-80 lg:h-80 flex items-center justify-center"
      >
        <div className="absolute inset-0 z-40 rounded-full bg-accent/30 backdrop-blur-2xl blur-2xl opacity-80 shadow-2xl shadow-bg-accent/30" />

        <ModelViewer />
      </motion.div>
    </section>
  );
}
