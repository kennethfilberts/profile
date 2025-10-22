"use client";

import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button"; // assuming you have ShadCN Button
import Photo from "@/public/assets/profile/self.jpg";

const timeline = [
  {
    year: "2021",
    events: [
      "Started my college journey in Computer Science at Binus University.",
    ],
  },
  {
    year: "2023",
    events: [
      "Started learning React, Next.js, Tailwind CSS, TypeScript, and Framer Motion.",
      "Created my first personal portfolio website, machine learning model, and React Native Application.",
      "Started work as a Frontend Developer Freelancer at a startup company based in Taiwan.",
    ],
  },
  {
    year: "2024",
    events: [
      "Moved to CBN Cloud as Frontend Developer Intern.",
      "Started learning Cloud Computing and DevOps practices.",
      "Started working with real clients and launched several portfolios.",
      "Started my Master's degree in Computer Science at Binus University.",
      "Back to Remote job at Roundbytes for part-time work as Project Manager.",
    ],
  },
  {
    year: "2025",
    events: [
      "Started learning Cybersecurity and Ethical Hacking.",
      "Focused on finishing my Master's degree and personal projects.",
    ],
  },
];

const funFacts = [
  "I drink way too much coffee ☕",
  "I love building clean, responsive UIs 🖥️",
  "I dream of visiting Japan someday 🇯🇵",
  "Big fan of minimalism in code, design, and life ✨",
  "Dark mode enthusiast 🌒",
  "I enjoy playing badminton 🏸",
];

export default function Contact() {
  return (
    <div className="font-[family-name:var(--font-poppins-sans)] relative overflow-hidden">
      {/* Decorative Glows */}
      <motion.div className="h-0 absolute top-[20%] right-0 shadow-[0_0_200px_50px_#D4A017] dark:shadow-[0_0_200px_30px_#FFFFFF] -rotate-[20deg]" />
      <motion.div className="h-0 absolute bottom-[20%] left-0 shadow-[0_0_200px_50px_#D4A017] dark:shadow-[0_0_200px_30px_#FFFFFF] -rotate-[20deg]" />
      <motion.div className="h-0 absolute bottom-[-20%] right-0 shadow-[0_0_200px_50px_#D4A017] dark:shadow-[0_0_200px_30px_#FFFFFF] -rotate-[-20deg]" />
      <motion.div className="h-0 absolute bottom-[-60%] left-0 shadow-[0_0_200px_50px_#D4A017] dark:shadow-[0_0_200px_30px_#FFFFFF] -rotate-[-20deg]" />

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
          className="text-4xl font-bold text-center mb-4 mt-4"
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
            <p className="text-muted-foreground mb-6">
              I'm a passionate frontend developer who loves building sleek and
              performant websites with a focus on user experience. My current
              stack includes Next.js, Tailwind CSS, TypeScript, and Framer
              Motion.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <a href="/assets/files/Kenneth%20Filbert%20ATS.pdf" download>
                <Button
                  variant="default"
                  className="bg-[#D4A017] hover:bg-[#b88b15] text-white px-6 py-3 rounded-lg font-medium shadow-md transition-transform transform hover:cursor-pointer"
                >
                  Download CV
                </Button>
              </a>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 w-full max-w-2xl"
        >
          <h3 className="text-xl font-semibold mb-4">My Journey</h3>
          <div className="border-l-2 border-muted-foreground pl-6 space-y-6">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="space-y-2"
              >
                <p className="text-muted-foreground text-sm">{item.year}</p>
                <ul className="list-disc list-inside space-y-1">
                  {item.events.map((event, i) => (
                    <li key={i} className="font-medium text-foreground">
                      {event}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 w-full max-w-2xl mb-6"
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
