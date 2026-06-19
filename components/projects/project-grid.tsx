"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/lib/types";
import { memo } from "react";

interface ProjectsGridProps {
  projects: Project[];
  onProjectClick: (project: any) => void;
}

function ProjectsGrid({
  projects,
  onProjectClick,
}: ProjectsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
      {projects.map((project, idx) => (
        <motion.div
          key={project.id}
          layoutId={`project-container-${project.id}`}
          onClick={() => onProjectClick(project)}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: idx * 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="group cursor-pointer border-r border-b border-dark-fg/10 bg-dark-bg flex flex-col hover:bg-dark-fg/[0.02] transition-colors duration-500"
        >
          <div className="relative w-full aspect-[4/3] overflow-hidden border-b border-dark-fg/10">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] scale-100 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx4P/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
            <div className="absolute inset-0 bg-dark-bg/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
              <span className="text-xs font-mono uppercase tracking-widest bg-dark-bg/80 px-4 py-2 border border-dark-fg/20 flex items-center gap-2">
                Explore <ArrowUpRight className="w-3 h-3" />
              </span>
            </div>
          </div>

          <div className="p-6 md:p-8 flex flex-col flex-grow justify-between gap-6">
            <div>
              <h3 className="text-xl md:text-2xl font-light text-dark-fg mb-3">
                {project.title}
              </h3>
              <p className="text-dark-fg/50 text-sm font-light line-clamp-2 leading-relaxed">
                {project.description}
              </p>
            </div>

            {project.techStack && project.techStack.length > 0 && (
              <div className="flex flex-wrap gap-x-2 gap-y-1 mt-auto pt-4">
                {project.techStack.slice(0, 3).map((tech, index) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono uppercase tracking-widest text-dark-fg/40 flex items-center gap-2"
                  >
                    {tech}{" "}
                    {index !== Math.min(project.techStack!.length, 3) - 1 && (
                      <span className="text-dark-fg/20">/</span>
                    )}
                  </span>
                ))}
                {project.techStack.length > 3 && (
                  <span className="text-[10px] font-mono uppercase tracking-widest text-dark-fg/40">
                    / +{project.techStack.length - 3}
                  </span>
                )}
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default memo(ProjectsGrid);
