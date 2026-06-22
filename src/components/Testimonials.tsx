"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import { FiStar } from "react-icons/fi";

export default function Testimonials() {
  return (
    <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
          What People Say
        </h2>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          Feedback from clients and collaborators
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <FiStar
                  key={star}
                  className="fill-yellow-400 text-yellow-400"
                  size={16}
                />
              ))}
            </div>

            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4 italic">
              &ldquo;{t.content}&rdquo;
            </p>

            <div>
              <p className="font-semibold text-sm text-zinc-900 dark:text-white">
                {t.name}
              </p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                {t.role}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
