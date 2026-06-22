"use client";

import { motion } from "framer-motion";

interface ProjectFilterProps {
  categories: readonly { id: string; label: string }[];
  active: string;
  onSelect: (id: string) => void;
}

export default function ProjectFilter({
  categories,
  active,
  onSelect,
}: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <motion.button
          key={cat.id}
          onClick={() => onSelect(cat.id)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            active === cat.id
              ? "bg-zinc-900 dark:bg-white text-white dark:text-zinc-900"
              : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700"
          }`}
        >
          {cat.label}
        </motion.button>
      ))}
    </div>
  );
}
