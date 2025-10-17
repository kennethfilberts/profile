import { Project } from "./types";
import Project1Home from "@/public/assets/projects/project-1/project-1-home.png";
import Project1Projects from "@/public/assets/projects/project-1/project-1-projects.png";
import Project1About from "@/public/assets/projects/project-1/project-1-about.png";
import Project1Contact from "@/public/assets/projects/project-1/project-1-contact.png";

import ProjectCruisemabiHome from "@/public/assets/projects/project-cruisemabi/cruisemabi-home.png";
import ProjectCMSCruisemabi from "@/public/assets/projects/project-cruisemabi/cruisemabi-cms.png";

import ProjectSPPIHome from "@/public/assets/projects/project-sppi/sppi-home.png";
import ProjectSPPIMap from "@/public/assets/projects/project-sppi/sppi-map.png";

import ProjectBRAHome from "@/public/assets/projects/project-bra/bra-home.png";
import ProjectBRAFeature1 from "@/public/assets/projects/project-bra/bra-feature1.png";
import ProjectBRAFeature2 from "@/public/assets/projects/project-bra/bra-feature2.png";

import ProjectGCResult from "@/public/assets/projects/project-garbage-classification/gc-result.png";

export const projectsData: Project[] = [
  {
    id: "1",
    title: "Portfolio Website",
    description:
      "A sleek and responsive portfolio site built using Next.js, Tailwind CSS, and Framer Motion.",
    category: "Website",
    url: "https://kennethfilberts.my.id/",
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
    title: "Cruisemabi Company Profile",
    description:
      "A website that shows the itinerary andd fact sheets of cruise ships that collaborate with Cruisemabi.",
    category: "Website",
    url: "https://cruisemabi.info/",
    image: ProjectCruisemabiHome,
    github: "https://github.com/kennethfilberts/website-cruisemabi",
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Shadcn UI",
      "Framer Motion",
      "Docker",
    ],
  },
  {
    id: "3",
    title: "CMS Cruisemabi",
    description: "Admin side for Cruisemabi website built with Strapi.",
    category: "Website",
    image: ProjectCMSCruisemabi,
    github: "https://github.com/kennethfilberts/cms-cruisemabi",
    techStack: ["Strapi", "Docker", "Javascript", "API"],
  },
  {
    id: "4",
    title: "SPPI Website",
    description:
      "A website for SPPI (an educational institution) to showcase their programs and facilitate student registrations.",
    category: "Website",
    previewNote: "I only did partial on this website, because it was a team project while I'm intern at CBN Cloud.",
    image: ProjectSPPIHome,
    url: "https://sppi.id/",
    previewImages: [ProjectSPPIHome, ProjectSPPIMap],
    techStack: ["React", "Tailwind CSS", "JavaScript", "REST API"],
  },
  {
    id: "5",
    title: "Binus Recycle App",
    description:
      "A mobile app that encourages recycling among Binus University students by providing rewards for recycling activities.",
    category: "Mobile",
    image: ProjectBRAHome,
    github: "https://github.com/kennethfilberts/binus-recycle-app",
    previewImages: [ProjectBRAHome, ProjectBRAFeature1, ProjectBRAFeature2],
    techStack: [
      "React Native",
      "JavaScript",
      "REST API",
      "Android Studio",
      "SQLite",
    ],
  },
  {
    id: "6",
    title: "Garbage Classification Model",
    description:
      "A machine learning model that classifies different types of garbage to promote effective waste management and recycling for Binus Recycle App.",
    category: "Machine Learning",
    image: ProjectGCResult,
    github: "https://github.com/kennethfilberts/garbage_classification",
    techStack: ["Python", "Tensorflow", "ResNet50V2", "Tensorflow JS"],
  },
];
