"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ProjectsGrid from "@/components/projects/project-grid";
import ProjectsFilter from "@/components/projects/project-filter";
import ProjectModal from "@/components/projects/project-modal";
import { motion } from "framer-motion";
import { useState } from "react";
import { projectsData } from "@/lib/data";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((proj) => proj.category === selectedCategory);

  const categories = [
    "All",
    ...new Set(projectsData.map((project) => project.category)),
  ];

  return (
    <div className="font-[family-name:var(--font-poppins-sans)]">
      <Navbar />

      <section className="min-h-screen px-6 py-24 sm:px-12 lg:px-44 text-foreground bg-background justify-center items-center flex flex-col">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold text-center mb-6"
        >
          My Projects
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="w-full"
        >
          <ProjectsFilter
            categories={categories}
            activeCategory={selectedCategory}
            setActiveCategory={setSelectedCategory}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="w-full mt-6"
        >
          <ProjectsGrid
            projects={filteredProjects}
            onProjectClick={setActiveProject}
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-xl md:text-2xl font-bold text-center mt-6 mb-4 lg:my-6"
        >
          There are still more but sadly can't show due to NDA agreements.
        </motion.h1>
      </section>

      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}

      <Footer />
    </div>
  );
}
