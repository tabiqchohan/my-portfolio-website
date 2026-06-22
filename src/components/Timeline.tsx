"use client";

import { motion } from "framer-motion";
import {
  FiBriefcase,
  FiBookOpen,
  FiAward,
} from "react-icons/fi";
import { Experience } from "@/types";
import { experiences } from "@/data/experience";

const typeIcons = {
  work: FiBriefcase,
  education: FiBookOpen,
  certification: FiAward,
};

const typeColors = {
  work: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
  education:
    "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
  certification:
    "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
};

export default function Timeline() {
  return (
    <div className="relative">
      <div className="absolute left-6 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800" />

      <div className="space-y-8">
        {experiences.map((exp, index) => {
          const Icon = typeIcons[exp.type];
          return (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-16"
            >
              <div
                className={`absolute left-3 p-2 rounded-full ${typeColors[exp.type]}`}
              >
                <Icon size={16} />
              </div>

              <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-5 hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                  <h3 className="font-semibold text-zinc-900 dark:text-white">
                    {exp.title}
                  </h3>
                  <span className="text-xs text-zinc-500 dark:text-zinc-400 shrink-0">
                    {exp.startDate} — {exp.endDate}
                  </span>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">
                  {exp.organization} &middot; {exp.location}
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
