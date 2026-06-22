"use client";

import { TypeAnimation } from "react-type-animation";

export default function TypingAnimation() {
  return (
    <TypeAnimation
      sequence={[
        "Full Stack Developer",
        2000,
        "UI/UX Enthusiast",
        2000,
        "Problem Solver",
        2000,
        "Open Source Contributor",
        2000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400"
    />
  );
}
