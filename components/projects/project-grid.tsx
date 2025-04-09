"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Project } from "@/lib/types";

interface ProjectsGridProps {
  projects: Project[];
  onProjectClick: (project: any) => void;
}

export default function ProjectsGrid({
  projects,
  onProjectClick,
}: ProjectsGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {projects.map((project) => (
        <motion.div
          key={project.id}
          layoutId={`project-${project.id}`}
          onClick={() => onProjectClick(project)}
          whileHover={{ scale: 1.01 }}
          className="cursor-pointer overflow-hidden rounded-2xl shadow-md bg-background hover:shadow-xl transition duration-300"
        >
          <div className="relative w-full h-56 md:h-64 lg:h-72">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-foreground">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm mt-1 line-clamp-3">
              {project.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
