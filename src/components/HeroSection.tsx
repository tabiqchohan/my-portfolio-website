"use client";

import { motion } from "framer-motion";
import TypingAnimation from "./TypingAnimation";
import AvailabilityBadge from "./AvailabilityBadge";
import ResumeButton from "./ResumeButton";
import { siteConfig } from "@/data/site";
import {
  FaGithub, FaLinkedin, FaTwitter, FaFacebook,
  FaInstagram, FaYoutube, FaTiktok, FaEnvelope,
} from "react-icons/fa";

const iconMap: Record<string, React.ReactNode> = {
  FaGithub: <FaGithub size={20} />,
  FaLinkedin: <FaLinkedin size={20} />,
  FaTwitter: <FaTwitter size={20} />,
  FaFacebook: <FaFacebook size={20} />,
  FaInstagram: <FaInstagram size={20} />,
  FaYoutube: <FaYoutube size={20} />,
  FaTiktok: <FaTiktok size={20} />,
  FaEnvelope: <FaEnvelope size={20} />,
};

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <AvailabilityBadge />

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 dark:text-white leading-tight">
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
              {siteConfig.name}
            </span>
          </h1>

          <p className="mt-3 text-2xl sm:text-3xl font-semibold text-stone-700 dark:text-stone-300">
            <TypingAnimation />
          </p>

          <p className="mt-4 text-lg text-stone-600 dark:text-stone-400 leading-relaxed max-w-xl">
            {siteConfig.description}
          </p>

          <div className="mt-4">
            <a
              href={siteConfig.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
            >
              Founder of FreelancifyHub &rarr;
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <ResumeButton />
            <div className="flex items-center gap-2">
              {siteConfig.socialLinks.map((link: { name: string; url: string; icon: string }) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors"
                  aria-label={link.name}
                >
                  {iconMap[link.icon] || null}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
