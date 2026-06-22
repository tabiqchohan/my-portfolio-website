"use client";

import { useState, FormEvent } from "react";
import { FiSend, FiCheck } from "react-icons/fi";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Mailchimp form action URL would go here
    setStatus("success");
    setEmail("");
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6">
      <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-1">
        Stay Updated
      </h3>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
        Get notified when I publish new projects or articles.
      </p>

      {status === "success" ? (
        <div className="flex items-center gap-2 text-green-600 dark:text-green-400 text-sm font-medium">
          <FiCheck size={16} />
          Thanks for subscribing!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="flex-1 px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-white transition-colors"
          />
          <button
            type="submit"
            className="px-4 py-2.5 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
          >
            <FiSend size={16} />
          </button>
        </form>
      )}
    </div>
  );
}
