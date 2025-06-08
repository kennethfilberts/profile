import { Project } from "./types";
import Project1Home from "@/public/assets/projects/project-1/project-1-home.png";
import Project1Projects from "@/public/assets/projects/project-1/project-1-projects.png";
import Project1About from "@/public/assets/projects/project-1/project-1-about.png";
import Project1Contact from "@/public/assets/projects/project-1/project-1-contact.png";

export const projectsData: Project[] = [
  {
    id: "1",
    title: "Portfolio Website",
    description:
      "A sleek and responsive portfolio site built using Next.js, Tailwind CSS, and Framer Motion.",
    category: "Website",
    image: Project1Home,
    previewImages: [
      Project1Home,
      Project1Projects,
      Project1About,
      Project1Contact,
    ],
    github: "https://github.com/kennethfilberts/profile",
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Shadcn UI",
      "Framer Motion",
    ],
  },
  {
    id: "2",
    title: "Garbage Classification",
    description: "A machine learning model to classify garbage images.",
    category: "Machine Learning",
    image: "/images/dashboard-cover.png",
    github: "https://github.com/kennethfilberts/garbage_classification.git",
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Shadcn UI",
      "Framer Motion",
    ],
  },
  {
    id: "3",
    title: "E-Commerce Website",
    description: "Full-stack shop built with Next.js and Stripe.",
    category: "Website",
    image: "/images/ecommerce-cover.png",
    previewImages: ["/images/shop-home.png", "/images/shop-cart.png"],
    github: "https://github.com/youruser/ecommerce-site",
  },
  {
    id: "4",
    title: "Mobile Task App",
    description:
      "A cross-platform to-do app using Expo and React Native with Firebase authentication and Firestore.",
    category: "Mobile",
    image: "/projects/todo-app.jpg",
    github: "",
    preview: "https://your-mobile-preview-url.com",
  },
];
