import { Project } from "./types";
import Project1Home from "@/public/assets/projects/project-1/project-1-home.png";
import Project1Projects from "@/public/assets/projects/project-1/project-1-projects.png";

export const projectsData: Project[] = [
  {
    id: "1",
    title: "Portfolio Website",
    description:
      "A sleek and responsive portfolio site built using Next.js, Tailwind CSS, and Framer Motion.",
    category: "Web",
    image: Project1Home,
    previewImages: [Project1Home, Project1Projects],
    github: "https://github.com/kennethfilberts/profile",
  },
  {
    id: "2",
    title: "Client Dashboard",
    description: "An admin panel for internal analytics and team management.",
    category: "Web",
    image: "/images/dashboard-cover.png",
    previewNote: "Private internal dashboard. No public preview available.",
    github: "https://github.com/youruser/client-dashboard",
  },
  {
    id: "3",
    title: "E-Commerce Website",
    description: "Full-stack shop built with Next.js and Stripe.",
    category: "Web",
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
