"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/lib/types";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useState, useEffect } from "react";
import { X, ArrowUpRight, Github } from "lucide-react";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 500);
  };

  useEffect(() => {
    document.body.style.overflow = isVisible ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isVisible]);

  const customEase = [0.16, 1, 0.3, 1];

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-dark-bg/90 backdrop-blur-md p-4 sm:p-6 md:p-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: customEase }}
          onClick={handleClose}
        >
          {/* Modal Container */}
          <motion.div
            onClick={(e) => e.stopPropagation()}
            layoutId={`project-container-${project.id}`}
            className="relative bg-dark-bg-elevated border border-dark-fg/10 w-full max-w-7xl max-h-[90vh] overflow-hidden flex flex-col"
          >
            {/* Top Bar */}
            <div className="flex justify-between items-center p-4 border-b border-dark-fg/10 bg-dark-bg/50">
              <span className="text-[10px] font-mono uppercase tracking-widest text-dark-fg/50">
                Project_Detail // {project.category}
              </span>
              <button
                onClick={handleClose}
                className="text-[10px] font-mono uppercase tracking-widest text-dark-fg/50 hover:text-dark-fg transition-colors flex items-center gap-2"
              >
                [ Close ] <X className="w-3 h-3" />
              </button>
            </div>

            {/* Scrollable Content Area */}
            <div className="overflow-y-auto scrollbar-thin scrollbar-thumb-dark-fg/10 scrollbar-track-transparent">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Left side: Images & Carousel */}
                <div className="lg:col-span-7 border-b lg:border-b-0 lg:border-r border-dark-fg/10">
                  {project.preview ? (
                    <iframe
                      src={project.preview}
                      className="w-full aspect-video border-none bg-dark-bg"
                    />
                  ) : project.previewImages &&
                    project.previewImages.length > 0 ? (
                    <Carousel
                      opts={{ loop: true, align: "start" }}
                      plugins={[
                        Autoplay({ delay: 3000, stopOnInteraction: false }),
                      ]}
                      className="w-full"
                    >
                      <CarouselContent>
                        {project.previewImages.map((src, idx) => (
                          <CarouselItem key={idx}>
                            <div className="relative w-full aspect-video bg-dark-bg-subtle">
                              <Image
                                src={src}
                                alt={`${project.title} Preview ${idx}`}
                                fill
                                className="object-cover"
                                placeholder="blur"
                                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx4P/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                    </Carousel>
                  ) : (
                    <div className="relative w-full aspect-video bg-dark-bg-subtle">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx4P/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                      />
                    </div>
                  )}
                </div>

                {/* Right side: Info */}
                <div className="lg:col-span-5 flex flex-col bg-dark-bg">
                  <div className="p-6 md:p-10 flex-grow">
                    <h2 className="text-3xl md:text-4xl font-light text-dark-fg mb-6 leading-tight">
                      {project.title}
                    </h2>

                    <p className="text-dark-fg/60 text-sm md:text-base leading-relaxed font-light mb-12">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    {project.techStack && project.techStack.length > 0 && (
                      <div className="mb-12">
                        <h4 className="text-[10px] font-mono uppercase tracking-widest text-dark-fg/40 mb-4">
                          Technology Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1.5 text-xs font-mono border border-dark-fg/10 text-dark-fg/70"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Action Links attached to bottom */}
                  <div className="mt-auto border-t border-dark-fg/10 grid grid-cols-2 text-center text-xs font-mono uppercase tracking-widest">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 border-r border-dark-fg/10 text-dark-fg/60 hover:text-dark-fg hover:bg-dark-fg/[0.02] transition-colors flex items-center justify-center gap-2"
                      >
                        <Github className="w-4 h-4" /> Source
                      </a>
                    ) : (
                      <div className="p-4 border-r border-dark-fg/10 text-dark-fg/20 line-through">
                        Private Repo
                      </div>
                    )}

                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 text-dark-fg/60 hover:text-dark-fg hover:bg-dark-fg/[0.02] transition-colors flex items-center justify-center gap-2"
                      >
                        Live Site <ArrowUpRight className="w-4 h-4" />
                      </a>
                    ) : (
                      <div className="p-4 text-dark-fg/20 line-through">
                        Offline
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
