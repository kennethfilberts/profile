import { StaticImageData } from "next/image";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string | StaticImageData;
  category: string;
  preview?: string;
  previewImages?: string[] | StaticImageData[];
  previewNote?: string;
  github?: string;
  techStack?: string[];
}
