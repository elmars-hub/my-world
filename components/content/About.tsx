"use client";

import { personalInfo } from "@/config/personal";
import AnimationContainer from "../utils/AnimationContainer";
import SectionHeader from "../utils/SectionHeader";

const About = () => {
  return (
    <AnimationContainer customClassName="w-full mb-16">
      <SectionHeader
        id="aboutme"
        title="About Me"
        content={`Here is a little bit about me and my journey as a developer.`}
      />

      <p className="text-sm sm:text-base md:text-lg text-foreground dark:text-white">
        Hi, I’m {personalInfo.name} — a {personalInfo.role} passionate about
        crafting clean, responsive, and user-focused web experiences. My journey
        into tech started with a simple curiosity and grew into a love for
        building everything from passion projects to real-world applications.
        <br />
        I specialize in React, Next.js, TypeScript, and Tailwind CSS, turning
        designs into intuitive, pixel-perfect interfaces. My development
        approach is rooted in clean code, performance, accessibility, and
        constant learning.
        <br />
        I believe in building in public, contributing to the dev community, and
        learning through collaboration. If you&apos;re into frontend, anime, or
        just love creating awesome stuff on the web let’s connect and build
        something great together!
        <br />
      </p>

      <p className="text-sm sm:text-base md:text-lg text-foreground dark:text-white mt-4">
        If you’re interested in collaborating on something exciting or need help
        with a project, feel free to reach out. Let’s create something amazing
        together!
      </p>
    </AnimationContainer>
  );
};

export default About;
