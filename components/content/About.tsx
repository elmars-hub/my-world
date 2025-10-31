"use client";

import { personalInfo } from "@/config/personal";
import AnimationContainer from "../utils/AnimationContainer";
import SectionHeader from "../utils/SectionHeader";
import { motion } from "framer-motion";

const About = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <AnimationContainer customClassName="w-full mb-16" animationType="fade" customDelay={0.2}>
      <SectionHeader id="aboutme" title="About Me" content="" />

      <motion.p 
        className="text-base sm:text-base md:text-lg text-foreground dark:text-white text-justify"
        custom={0}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={textVariants}
      >
        Hi I&apos;m {personalInfo.name}, a {personalInfo.role} passionate about
        crafting clean, responsive, and user-focused web experiences. My journey
        into tech started with a simple curiosity and grew into a love for
        building everything from passion projects to real-world applications. I
        specialize in React, Next.js, TypeScript, and Tailwind CSS, turning
        designs into intuitive, pixel-perfect interfaces. My development
        approach is rooted in clean code, performance, accessibility, and
        constant learning. I believe in building in public, contributing to the
        dev community, and learning through collaboration. If you&apos;re into
        frontend, anime, or just love creating awesome stuff on the web
        let&apos;s connect and build something great together!
      </motion.p>

      <motion.p 
        className="text-base sm:text-base md:text-lg text-foreground dark:text-white mt-2 text-justify"
        custom={1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={textVariants}
      >
        If you&apos;re interested in collaborating on something exciting or need
        help with a project, feel free to reach out. Let&apos;s create something
        amazing together!
      </motion.p>
    </AnimationContainer>
  );
};

export default About;
