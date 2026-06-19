"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import ProjectsGrid from "@/components/projects/project-grid";
import ProjectsFilter from "@/components/projects/project-filter";
import { projectsData } from "@/lib/data";

const ProjectModal = dynamic(() => import("@/components/projects/project-modal"), { ssr: false });

const categories = [
  "All",
  ...new Set(projectsData.map((project) => project.category)),
];

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((proj) => proj.category === selectedCategory);

  return (
    <section
      id="projects"
      className="relative w-full bg-dark-bg text-dark-fg py-24 md:py-32 selection:bg-dark-fg selection:text-dark-bg min-h-screen"
    >
      <div className="relative z-10 px-6 sm:px-12 md:px-24 max-w-[1600px] mx-auto">
        <div className="mb-16 md:mb-24 overflow-hidden py-4">
          <motion.h2
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[14vw] md:text-[9vw] font-black uppercase leading-none tracking-tighter text-transparent"
            style={{ WebkitTextStroke: "2px var(--dark-fg)" }}
          >
            Selected Works
          </motion.h2>
        </div>

        <div className="flex flex-col gap-12">
          <ProjectsFilter
            categories={categories}
            activeCategory={selectedCategory}
            setActiveCategory={setSelectedCategory}
          />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="border-t border-l border-dark-fg/10"
          >
            <ProjectsGrid
              projects={filteredProjects}
              onProjectClick={setActiveProject}
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-24 pt-8 border-t border-dark-fg/10 flex justify-between items-center text-xs font-mono uppercase tracking-widest text-dark-fg/40"
        >
          <span>[ Restricted Access ]</span>
          <span className="text-right">
            Additional enterprise AI systems omitted due to NDA.
          </span>
        </motion.div>
      </div>

      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}
