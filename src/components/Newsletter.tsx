"use client";

import { useState, FormEvent } from "react";
import { FiSend, FiCheck } from "react-icons/fi";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("success");
    setEmail("");
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-700/50 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/40 dark:to-purple-950/40 p-6">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">Stay Updated</h3>
      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
        Get notified when I publish new projects or articles.
      </p>

      {status === "success" ? (
        <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-sm font-medium">
          <FiCheck size={16} /> Thanks for subscribing!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input type="email" required value={email}
            onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com"
            className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700/50 bg-white dark:bg-slate-900/80 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-all duration-200" />
          <button type="submit"
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg">
            <FiSend size={16} />
          </button>
        </form>
      )}
    </div>
  );
}
