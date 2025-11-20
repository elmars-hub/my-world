import AboutSection from "@/components/section/AboutSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Martin Elmars, a passionate Frontend Developer specializing in React, Next.js, TypeScript, and modern web technologies. Discover my journey, skills, and experience.",
};

const About = () => <AboutSection />;

export default About;
