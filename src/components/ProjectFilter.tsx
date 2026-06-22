"use client";

import { motion } from "framer-motion";

interface ProjectFilterProps {
  categories: readonly { id: string; label: string }[];
  active: string;
  onSelect: (id: string) => void;
}

export default function ProjectFilter({ categories, active, onSelect }: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <motion.button
          key={cat.id}
          onClick={() => onSelect(cat.id)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            active === cat.id
              ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md"
              : "bg-white dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700/50 hover:border-indigo-300 dark:hover:border-indigo-700"
          }`}
        >
          {cat.label}
        </motion.button>
      ))}
    </div>
  );
}
