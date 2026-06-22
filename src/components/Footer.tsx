import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaYoutube, FaTiktok, FaEnvelope } from "react-icons/fa";
import { siteConfig } from "@/data/site";

const iconMap: Record<string, React.ReactNode> = {
  FaGithub: <FaGithub size={18} />,
  FaLinkedin: <FaLinkedin size={18} />,
  FaTwitter: <FaTwitter size={18} />,
  FaFacebook: <FaFacebook size={18} />,
  FaInstagram: <FaInstagram size={18} />,
  FaYoutube: <FaYoutube size={18} />,
  FaTiktok: <FaTiktok size={18} />,
  FaEnvelope: <FaEnvelope size={18} />,
};

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 dark:border-stone-800 bg-gradient-to-b from-transparent to-stone-200/50 dark:to-stone-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-stone-500 dark:text-stone-400">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {siteConfig.socialLinks.map((link: { name: string; url: string; icon: string }) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors"
                aria-label={link.name}
              >
                {iconMap[link.icon] || null}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
