"use client";

import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">What People Say</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-400">Feedback from clients and collaborators</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl border border-slate-200 dark:border-slate-700/50 bg-white dark:bg-slate-900/80 p-6 hover:shadow-lg hover:shadow-indigo-500/5 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-300"
          >
            <div className="flex gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <FiStar key={star} className="fill-amber-400 text-amber-400" size={16} />
              ))}
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4 italic">
              &ldquo;{t.content}&rdquo;
            </p>
            <div>
              <p className="font-semibold text-sm text-slate-900 dark:text-white">{t.name}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
