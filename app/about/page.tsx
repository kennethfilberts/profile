"use client";

import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Photo from "@/public/assets/profile/self.jpg";

const timeline = [
  {
    year: "2019",
    event: "Started my journey into web development.",
  },
  {
    year: "2021",
    event: "Built my first full-stack app using MERN stack.",
  },
  {
    year: "2023",
    event: "Dived into Next.js, Tailwind, and Framer Motion.",
  },
  {
    year: "2024",
    event: "Started working with real clients and launched several portfolios.",
  },
];

const funFacts = [
  "I drink way too much coffee ☕",
  "I love building clean, responsive UIs 🖥️",
  "I dream of visiting Japan someday 🇯🇵",
  "Big fan of minimalism in both code, design, and life ✨",
  "Dark mode enthusiast 🌒",
  "I enjoy playing badminton 🏸",
];

export default function Contact() {
  return (
    <div className="font-[family-name:var(--font-poppins-sans)]">
      <Navbar />

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="min-h-screen px-6 py-24 sm:px-12 lg:px-44 text-foreground bg-background flex flex-col items-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-4xl font-bold text-center mb-4"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8 items-center w-full max-w-6xl"
        >
          <div className="rounded-3xl overflow-hidden w-full aspect-square bg-muted/20 p-2">
            <Image
              src={Photo}
              alt="My photo"
              width={600}
              height={600}
              className="rounded-2xl object-cover object-top w-full h-full"
              priority
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-2">
              Hi, I'm Kenneth Filbert
            </h3>
            <p className="text-muted-foreground">
              I'm a passionate frontend developer who loves building sleek and
              performant websites with a focus on user experience. My current
              stack includes Next.js, Tailwind CSS, TypeScript, and Framer
              Motion.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 w-full max-w-3xl"
        >
          <h3 className="text-xl font-semibold mb-4">My Journey</h3>
          <div className="border-l-2 border-muted-foreground pl-6 space-y-6">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <p className="text-muted-foreground text-sm">{item.year}</p>
                <p className="font-medium">{item.event}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 w-full max-w-2xl"
        >
          <h3 className="text-2xl font-semibold mb-4 text-left">
            Did You Know?
          </h3>
          <div className="bg-foreground p-6 rounded-xl shadow-md space-y-4">
            {funFacts.map((fact, index) => (
              <motion.div
                key={index}
                className="text-left text-muted"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                {fact}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      <Footer />
    </div>
  );
}
