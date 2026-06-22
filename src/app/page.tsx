import HeroSection from "@/components/HeroSection";
import SkillBadge from "@/components/SkillBadge";
import Testimonials from "@/components/Testimonials";
import ScrollReveal from "@/components/ScrollReveal";
import { siteConfig } from "@/data/site";

export default function Home() {
  return (
    <>
      <HeroSection />

      <section className="relative z-10 bg-[#f0f2f5] dark:bg-[#151821]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                Skills &amp; Technologies
              </h2>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Technologies I work with on a daily basis
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <SkillBadge />
          </ScrollReveal>
        </div>
      </section>

      <Testimonials />

      <section className="relative z-10 bg-[#f0f2f5] dark:bg-[#151821]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                Let&apos;s Work Together
              </h2>
              <p className="mt-2 text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto">
                Have a project in mind? Let&apos;s build something amazing
                together.
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium transition-all duration-200 shadow-md hover:shadow-lg text-lg"
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
