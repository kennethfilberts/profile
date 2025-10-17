"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/lib/types";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useState } from "react";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 350);
  };

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          onClick={handleClose}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 18,
              duration: 0.35,
            }}
            className="bg-background rounded-2xl w-full max-w-5xl p-6 shadow-2xl"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={1200}
              height={800}
              className="rounded-xl object-cover mb-4 w-full max-h-[300px]"
            />

            <h2 className="text-2xl font-bold text-foreground mb-2">
              {project.title}
            </h2>
            <p className="text-muted-foreground mb-4">{project.description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ delay: 0.15, duration: 0.3 }}
              >
                <h4 className="text-lg font-semibold mb-1 text-foreground">
                  Preview
                </h4>
                {project.preview ? (
                  <iframe
                    src={project.preview}
                    className="w-full h-56 rounded-lg border border-muted"
                  />
                ) : project.previewImages ? (
                  <Carousel
                    opts={{
                      loop: true,
                      align: "start",
                    }}
                    plugins={[
                      Autoplay({
                        delay: 3000,
                        stopOnInteraction: false,
                      }),
                    ]}
                    className="w-full"
                  >
                    <CarouselContent>
                      {project.previewImages.map((src, idx) => (
                        <CarouselItem key={idx} className="basis-full">
                          <div className="relative w-full h-56 overflow-hidden rounded-lg">
                            <Image
                              src={src}
                              alt={`Preview ${idx}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
                ) : (
                  <p className="italic text-muted-foreground">
                    No preview available.
                  </p>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: 0.25, duration: 0.3 }}
              >
                <div
                  className={`flex flex-col items-start lg:flex-row ${
                    project.github && project.url ? "justify-between gap-4" : ""
                  }`}
                >
                  <div className="flex flex-col">
                    {project.github && (
                      <div>
                        <h4 className="text-lg font-semibold mb-1 text-foreground">
                          Code
                        </h4>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-muted hover:bg-muted/70 text-sm font-medium px-4 py-2 rounded-lg text-blue-500 border border-muted mb-3 transition-colors"
                        >
                          View Code on Github →
                        </a>
                      </div>
                    )}
                  </div>

                  {project.url && (
                    <div>
                      <h4 className="text-lg font-semibold mb-1 text-foreground">
                        URL
                      </h4>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-muted hover:bg-muted/70 text-sm font-medium px-4 py-2 rounded-lg text-blue-500 border border-muted mb-3 transition-colors"
                      >
                        Visit the website →
                      </a>
                    </div>
                  )}
                </div>

                {project.techStack && project.techStack.length > 0 && (
                  <div className="flex flex-col gap-2">
                    <h4 className="text-lg font-semibold mb-1 text-foreground">
                      Tech Stack
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-xs font-medium rounded-full bg-muted text-foreground border border-border hover:cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {project.previewNote ? (
                  <p className="italic text-muted-foreground mt-4">
                    {project.previewNote}
                  </p>
                ) : null}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              <Button onClick={handleClose} className="mt-6 w-full">
                Close
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
