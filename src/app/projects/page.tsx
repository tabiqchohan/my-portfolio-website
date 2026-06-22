"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import ProjectFilter from "@/components/ProjectFilter";
import ScrollReveal from "@/components/ScrollReveal";
import { projects, projectCategories } from "@/data/projects";
import { ProjectCardSkeleton } from "@/components/Skeleton";
import { useEffect } from "react";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <ScrollReveal>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-white">
            My Projects
          </h1>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            A collection of projects I&apos;ve built and contributed to
          </p>
        </div>
      </ScrollReveal>

      <div className="mb-8">
        <ProjectFilter
          categories={projectCategories}
          active={activeCategory}
          onSelect={setActiveCategory}
        />
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <ProjectCardSkeleton key={i} />
          ))}
        </div>
      ) : (
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      )}

      {filtered.length === 0 && !loading && (
        <div className="text-center py-20">
          <p className="text-zinc-500 dark:text-zinc-400">
            No projects found in this category.
          </p>
        </div>
      )}
    </div>
  );
}
