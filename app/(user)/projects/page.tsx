import ProjectSection from "@/components/section/ProjectSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Martin Elmars' portfolio of web development projects including e-commerce platforms, AI-powered applications, and modern web applications built with React, Next.js, and TypeScript.",
};

const Projects = () => <ProjectSection />;

export default Projects;
