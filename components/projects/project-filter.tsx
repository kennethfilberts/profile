"use client";

import { Button } from "@/components/ui/button";

interface ProjectsFilterProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export default function ProjectsFilter({
  categories,
  activeCategory,
  setActiveCategory,
}: ProjectsFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      {categories.map((cat) => (
        <Button
          key={cat}
          variant={cat === activeCategory ? "default" : "outline"}
          onClick={() => setActiveCategory(cat)}
          className="capitalize"
        >
          {cat}
        </Button>
      ))}
    </div>
  );
}
