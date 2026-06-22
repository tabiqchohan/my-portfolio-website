import { Skill } from "@/types";

export const skills: Skill[] = [
  { name: "HTML", category: "frontend" },
  { name: "CSS", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Python", category: "backend" },
  { name: "Full Stack Development", category: "backend" },
  { name: "AI Development", category: "backend" },
  { name: "Prompt Engineering", category: "other" },
  { name: "Agentic AI", category: "other" },
  { name: "Mobile App Development", category: "other" },
  { name: "Git", category: "tools" },
  { name: "VS Code", category: "tools" },
];

export const skillCategories = [
  { id: "all", label: "All" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "tools", label: "Tools" },
  { id: "other", label: "Other" },
] as const;
