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

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        onClick={onClose}
      >
        <motion.div
          layoutId={`project-${project.id}`}
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 60 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="bg-background rounded-2xl w-full max-w-5xl max-h-[90vh] p-6 shadow-2xl"
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
              transition={{ delay: 0.2, duration: 0.4 }}
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
              ) : project.previewNote ? (
                <p className="italic text-muted-foreground">
                  {project.previewNote}
                </p>
              ) : (
                <p className="italic text-muted-foreground">
                  No preview available.
                </p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <h4 className="text-lg font-semibold mb-1 text-foreground">
                Code
              </h4>
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-muted hover:bg-muted/70 text-sm font-medium px-4 py-2 rounded-lg text-blue-500 border border-muted"
                >
                  View Code on GitHub →
                </a>
              ) : (
                <p className="italic text-muted-foreground">
                  Code not available.
                </p>
              )}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Button onClick={onClose} className="mt-6 w-full">
              Close
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
