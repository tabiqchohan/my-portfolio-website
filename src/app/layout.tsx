import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import AnimatedBackground from "@/components/AnimatedBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tabiq Chohan | Full Stack Developer & Agentic AI Developer",
  description:
    "Portfolio of Tabiq Chohan — a Full Stack Developer & Agentic AI Developer specializing in React, Next.js, Node.js, Python, and AI-powered applications.",
  openGraph: {
    title: "Tabiq Chohan | Full Stack Developer",
    description:
      "Portfolio of Tabiq Chohan — a Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-100 dark:bg-[#0a0f1e] text-slate-800 dark:text-slate-200">
        <Providers>
          <AnimatedBackground />
          <Navbar />
          <main className="flex-1 relative z-10">{children}</main>
          <Footer />
          <BackToTop />
        </Providers>
      </body>
    </html>
  );
}
