import ContactForm from "@/components/ContactForm";
import Newsletter from "@/components/Newsletter";
import ScrollReveal from "@/components/ScrollReveal";
import { siteConfig } from "@/data/site";
import { FiMail, FiMapPin, FiPhone, FiGlobe } from "react-icons/fi";

export default function ContactPage() {
  return (
    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <ScrollReveal>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-stone-900 dark:text-white">
            Get In Touch
          </h1>
          <p className="mt-2 text-stone-600 dark:text-stone-400">
            Have a question, project idea, or just want to say hi? I&apos;d
            love to hear from you.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <ScrollReveal className="lg:col-span-2" delay={0.1}>
          <ContactForm />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="space-y-6">
              <div className="rounded-2xl border border-stone-200 dark:border-stone-800 bg-white/80 dark:bg-white/[0.04] p-6 space-y-4">
              <h3 className="font-semibold text-stone-900 dark:text-white">
                Contact Info
              </h3>

              <div className="flex items-start gap-3">
                <FiMail className="mt-0.5 text-stone-500 dark:text-stone-400 shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <FiPhone className="mt-0.5 text-stone-500 dark:text-stone-400 shrink-0" />
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-sm text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <FiMapPin className="mt-0.5 text-stone-500 dark:text-stone-400 shrink-0" />
                <span className="text-sm text-stone-600 dark:text-stone-400">
                  {siteConfig.address}
                </span>
              </div>

              <div className="flex items-start gap-3">
                <FiGlobe className="mt-0.5 text-stone-500 dark:text-stone-400 shrink-0" />
                <a
                  href={siteConfig.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors"
                >
                  {siteConfig.website}
                </a>
              </div>
            </div>

            <Newsletter />
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
