import { FiDownload } from "react-icons/fi";
import { siteConfig } from "@/data/site";

export default function ResumeButton() {
  return (
    <a
      href={siteConfig.resumeUrl}
      download
      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium transition-all duration-200 shadow-md hover:shadow-lg"
    >
      <FiDownload size={18} />
      Download Resume
    </a>
  );
}
