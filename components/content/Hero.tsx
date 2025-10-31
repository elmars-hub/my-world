"use client";

import OptimizedImage from "../ui/OptimizedImage";
import AnimationContainer from "../utils/AnimationContainer";
import Link from "next/link";
import { personalInfo } from "@/config/personal";
import Socials from "./Socials";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="w-full flex justify-between flex-col-reverse lg:flex-row items-center"
      aria-label="Hero section"
    >
      {/* Content Section */}
      <AnimationContainer 
        customClassName="flex flex-col items-center justify-between lg:items-start p-0 lg:pr-8"
        animationType="slideUp"
        customDelay={0.2}
      >
        <motion.p 
          className="text-lg text-gray-800 dark:text-gray-200 mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <motion.span 
            className="font-mono text-teal-500 dark:text-teal-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Hello!{" "}
          </motion.span>
          <motion.span 
            className="font-mono text-pink-500 dark:text-pink-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            I am
          </motion.span>
        </motion.p>
        <motion.h1 
          className="font-bold text-3xl lg:text-5xl text-center lg:text-start tracking-tight mb-3 mx-auto lg:mx-0 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {personalInfo.name}
        </motion.h1>

        <motion.h2 
          className="flex items-center gap-2 text-lg lg:text-xl text-gray-700 dark:text-gray-400 mb-8 mx-auto lg:mx-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <span 
            className="relative w-[max-content] font-mono typing-animation text-gray-800 dark:text-gray-200"
            aria-label={`I am a ${personalInfo.role}`}
          >
            I&apos;m a {personalInfo.role}
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <Socials />
        </motion.div>

        {/* Buttons Section */}
        <motion.nav 
          className="flex gap-4 mt-6" 
          aria-label="Primary navigation"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={personalInfo.socials.google}
              className="px-4 py-2 sm:px-6 sm:py-3 text-teal-500 font-bold rounded-lg border border-teal-500 hover:bg-teal-500 hover:text-white transition duration-300 backdrop-blur-sm bg-white/20 dark:bg-gray-800/30 dark:border-teal-300 dark:text-teal-300 dark:hover:bg-teal-600 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              aria-label="Hire me"
              target="_blank"
            >
              Hire Me
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contact"
              className="px-4 py-2 sm:px-6 sm:py-3 text-pink-500 font-bold rounded-lg border border-pink-500 hover:bg-pink-500 hover:text-white transition duration-300 backdrop-blur-sm bg-white/20 dark:bg-gray-800/30 dark:border-pink-300 dark:text-pink-300 dark:hover:bg-pink-600 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
              aria-label="Contact me"
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.nav>
      </AnimationContainer>

      {/* Image Section */}
      <AnimationContainer 
        customClassName="w-[150px] sm:w-[250px] relative mb-6 lg:mb-0"
        animationType="scale"
        customDelay={0.4}
      >
        <motion.div
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <OptimizedImage
            alt={`Profile picture of ${personalInfo.name}`}
            src="/profile.png"
            width={250}
            height={250}
            priority
            className="rounded-[12px] filter transition ease bg-background/30 dark:bg-background/30"
          />
        </motion.div>
      </AnimationContainer>
    </section>
  );
};

export default Hero;
