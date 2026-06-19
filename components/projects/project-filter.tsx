"use client";

import { motion } from "framer-motion";
import { memo } from "react";

interface ProjectsFilterProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

function ProjectsFilter({
  categories,
  activeCategory,
  setActiveCategory,
}: ProjectsFilterProps) {
  return (
    <div className="flex flex-wrap gap-6 md:gap-10 border-b border-foreground/10 pb-4">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActiveCategory(cat)}
          className={`text-xs md:text-sm font-mono uppercase tracking-[0.2em] transition-colors relative group py-2 ${
            cat === activeCategory
              ? "text-foreground"
              : "text-foreground/40 hover:text-foreground"
          }`}
        >
          {cat}
          {cat === activeCategory && (
            <motion.span
              layoutId="activeCategoryFilter"
              className="absolute -bottom-[17px] left-0 w-full h-[1px] bg-foreground"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
        </button>
      ))}
    </div>
  );
}

export default memo(ProjectsFilter);