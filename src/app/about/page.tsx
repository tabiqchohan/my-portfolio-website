import ScrollReveal from "@/components/ScrollReveal";
import Timeline from "@/components/Timeline";
import { siteConfig } from "@/data/site";
import { FiDownload } from "react-icons/fi";

export default function AboutPage() {
  return (
    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <ScrollReveal>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
            About Me
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            I&apos;m a passionate {siteConfig.role} based in{" "}
            {siteConfig.location}. Currently studying at GIAIC (Governor
            Initiative for AI Computing) and founder of{" "}
            <a
              href={siteConfig.website}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              FreelancifyHub
            </a>
            . I specialize in AI-powered web applications, full-stack development,
            and mobile app development. With experience at PTCL and Transworld,
            I bring both technical expertise and real-world problem-solving to
            every project.
          </p>
          <a
            href={siteConfig.resumeUrl}
            download
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <FiDownload size={18} />
            Download Resume
          </a>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            Experience &amp; Education
          </h2>
          <Timeline />
        </div>
      </ScrollReveal>
    </div>
  );
}
