import { Project } from "./types";

export const timeline = [
  {
    year: "2021",
    events: [
      "Started my college journey in Computer Science at Binus University.",
    ],
  },
  {
    year: "2023",
    events: [
      "Started learning React, Next.js, Tailwind CSS, TypeScript, and Framer Motion.",
      "Created my first personal portfolio website, machine learning model, and React Native Application.",
      "Started work as a Frontend Developer Freelancer at a startup company based in Taiwan.",
    ],
  },
  {
    year: "2024",
    events: [
      "Moved to CBN Cloud as Frontend Developer Intern.",
      "Started learning Cloud Computing and DevOps practices.",
      "Started working with real clients and launched several portfolios.",
      "Started my Master's degree in Computer Science at Binus University.",
      "Back to Remote job at Roundbytes for part-time work as Project Manager.",
    ],
  },
  {
    year: "2025",
    events: [
      "Started learning Cybersecurity and Ethical Hacking.",
      "Focused on finishing my Master's degree and personal projects.",
    ],
  },
];

export const funFacts = [
  "I drink way too much coffee ☕",
  "I love building clean, responsive UIs 🖥️",
  "I dream of visiting Japan someday 🇯🇵",
  "Big fan of minimalism in code, design, and life ✨",
  "Dark mode enthusiast 🌒",
  "I enjoy playing badminton 🏸",
];

export const projectsData: Project[] = [
  {
    id: "1",
    title: "Portfolio Website",
    description:
      "A sleek and responsive portfolio site built using Next.js, Tailwind CSS, and Framer Motion.",
    category: "Website",
    url: "https://kennethfilberts.my.id/",
    image: "/assets/projects/project-1/project-1-home.png",
    previewImages: [
      "/assets/projects/project-1/project-1-home.png",
      "/assets/projects/project-1/project-1-projects.png",
      "/assets/projects/project-1/project-1-about.png",
      "/assets/projects/project-1/project-1-contact.png",
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
    image: "/assets/projects/project-cruisemabi/cruisemabi-home.png",
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
    image: "/assets/projects/project-cruisemabi/cruisemabi-cms.png",
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
    image: "/assets/projects/project-sppi/sppi-home.png",
    url: "https://sppi.id/",
    previewImages: ["/assets/projects/project-sppi/sppi-home.png", "/assets/projects/project-sppi/sppi-map.png"],
    techStack: ["React", "Tailwind CSS", "JavaScript", "REST API"],
  },
  {
    id: "5",
    title: "Binus Recycle App",
    description:
      "A mobile app that encourages recycling among Binus University students by providing rewards for recycling activities.",
    category: "Mobile",
    image: "/assets/projects/project-bra/bra-home.png",
    github: "https://github.com/kennethfilberts/binus-recycle-app",
    previewImages: ["/assets/projects/project-bra/bra-home.png", "/assets/projects/project-bra/bra-feature1.png", "/assets/projects/project-bra/bra-feature2.png"],
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
    image: "/assets/projects/project-garbage-classification/gc-result.png",
    github: "https://github.com/kennethfilberts/garbage_classification",
    techStack: ["Python", "Tensorflow", "ResNet50V2", "Tensorflow JS"],
  },
];
