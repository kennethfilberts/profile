"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDownToLine, Cpu, LineChart, Dumbbell, Music } from "lucide-react";
import { timeline } from "@/lib/data";

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Nest.js",
  "PostgreSQL",
  "Superbase",
  "Prisma",
  "Python",
  "Ollama",
  "Openclaw",
  "LLM Integration",
  "Docker",
  "Tailwind CSS",
  "Framer Motion",
];

const personalInterests = [
  {
    title: "Local AI Models",
    desc: "Experimenting with open-source models via Ollama for privacy and speed.",
    icon: Cpu,
  },
  {
    title: "Market Analysis",
    desc: "Developing Python & Next.js dashboards for the IDX stock market and DCA strategies.",
    icon: LineChart,
  },
  {
    title: "Fitness & Caffeine",
    desc: "Consistent gym sessions, always fueled by a heavy coffee pre-workout.",
    icon: Dumbbell,
  },
  {
    title: "Audio Engineering",
    desc: "Music production and sound design exploring workflows in Ableton Live.",
    icon: Music,
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-background text-foreground selection:bg-foreground selection:text-background py-6 md:py-10"
    >
      <div className="relative z-10 px-6 sm:px-12 md:px-24 max-w-[1600px] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mb-8 md:mb-10 overflow-hidden py-4"
        >
          <motion.h2
            variants={{
              hidden: { y: "100%", opacity: 0 },
              visible: {
                y: "0%",
                opacity: 1,
                transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
              },
            }}
            className="text-[14vw] md:text-[9vw] font-black uppercase leading-none tracking-tighter text-transparent text-center"
            style={{ WebkitTextStroke: "2px var(--foreground)" }}
          >
            Profile
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 border-t border-foreground/10 pt-12 lg:pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-4 flex flex-col gap-8"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-muted border border-foreground/10">
              <Image
                src="/assets/profile/self.jpg"
                alt="Kenneth Filbert"
                fill
                className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                priority
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx4P/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </div>

            <a
              href="/assets/files/Kenneth%20Filbert%20ATS.pdf"
              download
              className="group flex items-center justify-between border border-foreground/20 bg-background/50 backdrop-blur-sm px-6 py-4 hover:bg-foreground hover:text-background transition-colors duration-300 w-full"
            >
              <span className="text-xs uppercase tracking-widest font-mono">
                Download CV
              </span>
              <ArrowDownToLine className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>
          </motion.div>

          <div className="lg:col-span-8 flex flex-col gap-16 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="max-w-2xl bg-background/20 backdrop-blur-sm p-6 -ml-6 rounded-lg border border-transparent hover:border-foreground/5 transition-colors will-change-[backdrop-filter]"
            >
              <h3 className="text-2xl md:text-4xl font-light leading-tight mb-8">
                I am a 23-year-old Full-Stack and AI Engineer with a Master's in
                Software Engineering.
              </h3>
              <p className="text-foreground/60 text-sm md:text-base leading-relaxed font-light">
                I specialize in bridging the gap between intelligent systems and
                seamless user experiences. Whether I'm integrating local LLMs,
                architecting complex data dashboards, or refining a Next.js
                frontend, I focus on writing clean, scalable code that solves
                real-world problems.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <h4 className="text-xs font-mono uppercase tracking-widest text-foreground/40 mb-6 bg-background/40 inline-block px-3 py-1 rounded">
                Core Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-xs font-mono uppercase tracking-wider bg-background/30 backdrop-blur-md border border-foreground/10 text-foreground/70 hover:border-foreground/50 hover:text-foreground transition-colors duration-300 will-change-[backdrop-filter]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="border-t border-foreground/10 pt-16 relative"
            >
              <h4 className="text-xs font-mono uppercase tracking-widest text-foreground/40 mb-8 bg-background inline-block pr-4 relative z-10">
                Experience & Education
              </h4>
              <div className="flex flex-col">
                {timeline.map((item, idx) => (
                  <div
                    key={idx}
                    className={`group grid grid-cols-1 md:grid-cols-[120px_1fr] gap-4 md:gap-8 py-6 ${idx !== timeline.length - 1 ? 'border-b border-foreground/5' : ''} hover:border-foreground/20 transition-colors bg-gradient-to-r hover:from-foreground/[0.02] to-transparent px-4 -mx-4`}
                  >
                    <span className="text-sm font-mono text-foreground/50 group-hover:text-foreground transition-colors">
                      {item.year}
                    </span>
                    <ul className="flex flex-col gap-2">
                      {item.events.map((event, i) => (
                        <li
                          key={i}
                          className="text-sm md:text-base text-foreground/80 font-light"
                        >
                          {event}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              className="border-t border-foreground/10 pt-16"
            >
              <h4 className="text-xs font-mono uppercase tracking-widest text-foreground/40 mb-8 bg-background inline-block pr-4">
                Beyond The Editor
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {personalInterests.map((interest, index) => {
                  const Icon = interest.icon;
                  return (
                    <div
                      key={index}
                      className="group p-6 border border-foreground/10 bg-background/30 backdrop-blur-sm hover:bg-foreground/[0.05] transition-colors duration-300 will-change-[backdrop-filter]"
                    >
                      <Icon className="w-5 h-5 text-foreground/50 group-hover:text-foreground mb-4 transition-colors" />
                      <h5 className="text-sm uppercase tracking-wide mb-2">
                        {interest.title}
                      </h5>
                      <p className="text-xs text-foreground/50 font-light leading-relaxed">
                        {interest.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
