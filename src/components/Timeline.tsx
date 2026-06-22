"use client";

import { motion } from "framer-motion";
import { FiBriefcase, FiBookOpen, FiAward } from "react-icons/fi";
import { experiences } from "@/data/experience";

const typeIcons = {
  work: FiBriefcase,
  education: FiBookOpen,
  certification: FiAward,
};

const typeColors = {
  work: "bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400",
  education: "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400",
  certification: "bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400",
};

export default function Timeline() {
  return (
    <div className="relative">
      <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent" />

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
                className={`absolute left-3 p-2.5 rounded-full shadow-md ${typeColors[exp.type]}`}
              >
                <Icon size={16} />
              </div>

              <div className="bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700/50 rounded-xl p-5 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    {exp.title}
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-slate-400 shrink-0">
                    {exp.startDate} — {exp.endDate}
                  </span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                  {exp.organization} &middot; {exp.location}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
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
