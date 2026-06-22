import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "FreelancifyHub",
    description:
      "My own startup — an AI-powered freelancing and digital services platform. Building innovative solutions to connect freelancers with clients through intelligent matching and automation.",
    techStack: ["Next.js", "TypeScript", "Python", "AI"],
    category: "fullstack",
    featured: true,
    liveUrl: "https://freelancifyhub.com",
  },
  {
    id: "2",
    title: "Translator App",
    description:
      "A language translation application built with TypeScript. Supports multiple languages with real-time translation capabilities.",
    techStack: ["TypeScript", "API Integration"],
    category: "frontend",
    featured: true,
    liveUrl: "https://translator-two-dusky.vercel.app",
    githubUrl: "https://github.com/tabiqchohan/translator",
  },
  {
    id: "3",
    title: "User Management System",
    description:
      "A full-stack user management system with CRUD operations, authentication, and role-based access control.",
    techStack: ["HTML", "CSS", "JavaScript"],
    category: "fullstack",
    featured: false,
    liveUrl: "https://user-managment-system-tabiqchohan.vercel.app",
    githubUrl: "https://github.com/tabiqchohan/user-managment-system",
  },
  {
    id: "4",
    title: "Finance Tracker",
    description:
      "A personal finance tracking application to manage expenses, income, and generate financial reports.",
    techStack: ["JavaScript", "HTML", "CSS"],
    category: "frontend",
    featured: false,
    liveUrl: "https://finance-tracker-tabiqchohan.vercel.app",
    githubUrl: "https://github.com/tabiqchohan/finance-tracker",
  },
  {
    id: "5",
    title: "SpaceX Home Page",
    description:
      "A pixel-perfect clone of the SpaceX homepage built with HTML and CSS, showcasing advanced CSS techniques.",
    techStack: ["HTML", "CSS"],
    category: "frontend",
    featured: false,
    liveUrl: "https://space-x-homepage-tabiqchohan.vercel.app",
    githubUrl: "https://github.com/tabiqchohan/spaceX-home-page",
  },
  {
    id: "6",
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
    id: "7",
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
    id: "8",
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
    id: "9",
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
    id: "10",
    title: "AI Employee FTE 24/7",
    description:
      "An AI-powered employee management system with intelligent task assignment, performance tracking, and automated workflows for round-the-clock operations.",
    techStack: ["Python", "AI", "Automation"],
    category: "fullstack",
    featured: true,
    liveUrl: "https://flowsync-frontend.onrender.com",
    githubUrl: "https://github.com/tabiqchohan/hackathon5-AI-Employee-FTE-24-7",
  },
  {
    id: "11",
    title: "Physical Humanoid Robotics Book",
    description:
      "A web application focused on physical humanoid robotics concepts, documentation, and interactive learning resources.",
    techStack: ["Python", "Web"],
    category: "frontend",
    featured: false,
    liveUrl: "https://physical-humanoid-robotics-book.vercel.app",
    githubUrl: "https://github.com/tabiqchohan/physical-humanoid-robotics-book",
  },
  {
    id: "12",
    title: "Hackathon 2 Phase 2",
    description:
      "A project developed during hackathon competition, featuring modern web technologies and interactive UI components.",
    techStack: ["JavaScript", "HTML", "CSS"],
    category: "frontend",
    featured: false,
    liveUrl: "https://hackathon2-phase2-tabiqchohan.vercel.app",
    githubUrl: "https://github.com/tabiqchohan/hackathon2-phase2",
  },
  {
    id: "13",
    title: "Temp 03 API",
    description:
      "A RESTful API project demonstrating backend development with API endpoints, data handling, and server-side logic.",
    techStack: ["API", "Backend"],
    category: "backend",
    featured: false,
    liveUrl: "https://temp-03-api.vercel.app",
  },
];

export const projectCategories = [
  { id: "all", label: "All" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "fullstack", label: "Full Stack" },
] as const;
