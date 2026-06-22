import { FiDownload } from "react-icons/fi";
import { siteConfig } from "@/data/site";

export default function ResumeButton() {
  return (
    <a
      href={siteConfig.resumeUrl}
      download
      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
    >
      <FiDownload size={18} />
      Download Resume
    </a>
  );
}
