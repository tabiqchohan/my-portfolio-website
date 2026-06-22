import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "AI Employee System",
    description:
      "An AI-powered employee management system built with Python. Features intelligent task assignment, performance tracking, and automated workflows for 24/7 operations.",
    techStack: ["Python", "AI", "Automation"],
    category: "fullstack",
    featured: true,
    githubUrl: "https://github.com/tabiqchohan/ai-employee-system",
  },
  {
    id: "2",
    title: "Translator App",
    description:
      "A language translation application built with TypeScript. Supports multiple languages with real-time translation capabilities.",
    techStack: ["TypeScript", "API Integration"],
    category: "frontend",
    featured: true,
    githubUrl: "https://github.com/tabiqchohan/translator",
  },
  {
    id: "3",
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with Next.js, featuring dark mode, animations, and a contact form.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "frontend",
    featured: true,
    githubUrl: "https://github.com/tabiqchohan/My-portfolio-Website-",
  },
  {
    id: "4",
    title: "User Management System",
    description:
      "A full-stack user management system with CRUD operations, authentication, and role-based access control.",
    techStack: ["HTML", "CSS", "JavaScript"],
    category: "fullstack",
    featured: false,
    githubUrl: "https://github.com/tabiqchohan/user-managment-system",
  },
  {
    id: "5",
    title: "Finance Tracker",
    description:
      "A personal finance tracking application to manage expenses, income, and generate financial reports.",
    techStack: ["JavaScript", "HTML", "CSS"],
    category: "frontend",
    featured: false,
    githubUrl: "https://github.com/tabiqchohan/finance-tracker",
  },
  {
    id: "6",
    title: "Sanity Blog",
    description:
      "A blog platform built with Next.js and Sanity CMS. Features dynamic content management and a rich text editor.",
    techStack: ["Next.js", "TypeScript", "Sanity CMS"],
    category: "fullstack",
    featured: false,
    githubUrl: "https://github.com/tabiqchohan/My-sanity-blog",
  },
  {
    id: "7",
    title: "Todo App",
    description:
      "A feature-rich todo application with task management, categories, and local storage persistence.",
    techStack: ["JavaScript", "HTML", "CSS"],
    category: "frontend",
    featured: false,
    githubUrl: "https://github.com/tabiqchohan/todo-app-",
  },
  {
    id: "8",
    title: "SpaceX Home Page",
    description:
      "A pixel-perfect clone of the SpaceX homepage built with HTML and CSS, showcasing advanced CSS techniques.",
    techStack: ["HTML", "CSS"],
    category: "frontend",
    featured: false,
    githubUrl: "https://github.com/tabiqchohan/spaceX-home-page",
  },
  {
    id: "9",
    title: "Assignment 5 - Streamlit App",
    description:
      "A Python-based Streamlit web application showcasing data processing and interactive UI components.",
    techStack: ["Python", "Streamlit"],
    category: "frontend",
    featured: false,
    liveUrl: "https://assignment5-tabiqchohanxyz.streamlit.app",
    githubUrl: "https://github.com/tabiqchohan/Assignment5",
  },
  {
    id: "10",
    title: "File Converter",
    description:
      "A Streamlit-powered file converter tool that allows users to upload and convert files between different formats with ease.",
    techStack: ["Python", "Streamlit"],
    category: "backend",
    featured: false,
    liveUrl: "https://build-a-file-converter-tabiqchohanxyz.streamlit.app",
    githubUrl: "https://github.com/tabiqchohan/build-a-file-converter",
  },
  {
    id: "11",
    title: "Password Strength Checker",
    description:
      "A security tool built with Streamlit that analyzes password strength and provides recommendations for improvement.",
    techStack: ["Python", "Streamlit"],
    category: "backend",
    featured: false,
    liveUrl: "https://password-strength-checker-tabiqchohanxyz.streamlit.app",
    githubUrl: "https://github.com/tabiqchohan/Password-Strength-Checker",
  },
  {
    id: "12",
    title: "Unit Converter",
    description:
      "A versatile unit conversion tool built with Streamlit, supporting multiple measurement categories and real-time conversion.",
    techStack: ["Python", "Streamlit"],
    category: "frontend",
    featured: false,
    liveUrl: "https://unit-converter-tabiqchohanxyz.streamlit.app",
    githubUrl: "https://github.com/tabiqchohan/Unit-Converter",
  },
  {
    id: "13",
    title: "FreelancifyHub",
    description:
      "My own startup — an AI-powered freelancing and digital services platform. Building innovative solutions to connect freelancers with clients through intelligent matching and automation.",
    techStack: ["Next.js", "TypeScript", "Python", "AI"],
    category: "fullstack",
    featured: true,
    liveUrl: "https://freelancifyhub.com",
  },
];

export const projectCategories = [
  { id: "all", label: "All" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "fullstack", label: "Full Stack" },
] as const;
