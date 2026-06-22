import HeroSection from "@/components/HeroSection";
import SkillBadge from "@/components/SkillBadge";
import Testimonials from "@/components/Testimonials";
import ScrollReveal from "@/components/ScrollReveal";
import { siteConfig } from "@/data/site";

export default function Home() {
  return (
    <>
      <HeroSection />

      <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
              Skills &amp; Technologies
            </h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              Technologies I work with on a daily basis
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <SkillBadge />
        </ScrollReveal>
      </section>

      <Testimonials />

      <section className="relative z-10 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
                Let&apos;s Work Together
              </h2>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400 mb-8 max-w-xl mx-auto">
                Have a project in mind? Let&apos;s build something amazing
                together.
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors text-lg"
              >
                Get In Touch
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
