import React, { useRef } from "react";
import AnimationContainer from "../utils/AnimationContainer";
import { Badge } from "../ui/badge";
import { motion, useInView } from "framer-motion";
import {
  FileCode,
  FileCode2,
  Atom,
  Hexagon,
  Bolt,
  Database,
  Github,
  Frame,
  Wind,
  Command,
} from "lucide-react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.8,
      rotate: -10,
    },
    show: { 
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      }
    },
  };

  return (
    <AnimationContainer>
      <motion.div 
        ref={ref}
        className="w-full flex flex-col gap-8"
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* HTML */}
          <motion.div variants={item}>
            <Badge
              variant="outline"
              className="flex items-center justify-center gap-2 py-6 text-base transition-transform duration-200 hover:scale-105"
            >
              <FileCode className="w-6 h-6" />
              HTML
            </Badge>
          </motion.div>

          {/* CSS */}
          <motion.div variants={item}>
            <Badge
              variant="outline"
              className="flex items-center justify-center gap-2 py-6 text-base transition-transform duration-200 hover:scale-105"
            >
              <FileCode className="w-6 h-6" />
              CSS
            </Badge>
          </motion.div>

          {/* JavaScript */}
          <motion.div variants={item}>
            <Badge
              variant="outline"
              className="flex items-center justify-center gap-2 py-6 text-base transition-transform duration-200 hover:scale-105"
            >
              <FileCode2 className="w-6 h-6" />
              JavaScript
            </Badge>
          </motion.div>

          {/* TypeScript */}
          <motion.div variants={item}>
            <Badge
              variant="outline"
              className="flex items-center justify-center gap-2 py-6 text-base transition-transform duration-200 hover:scale-105"
            >
              <FileCode2 className="w-6 h-6" />
              TypeScript
            </Badge>
          </motion.div>

          {/* ReactJS */}
          <motion.div variants={item}>
            <Badge
              variant="outline"
              className="flex items-center justify-center gap-2 py-6 text-base transition-transform duration-200 hover:scale-105"
            >
              <Atom className="w-6 h-6" />
              ReactJs
            </Badge>
          </motion.div>

          {/* NextJS */}
          <motion.div variants={item}>
            <Badge
              variant="outline"
              className="flex items-center justify-center gap-2 py-6 text-base transition-transform duration-200 hover:scale-105"
            >
              <Hexagon className="w-6 h-6" />
              Next.Js
            </Badge>
          </motion.div>

          {/* Supabase */}
          <motion.div variants={item}>
            <Badge
              variant="outline"
              className="flex items-center justify-center gap-2 py-6 text-base transition-transform duration-200 hover:scale-105"
            >
              <Bolt className="w-6 h-6" />
              Supabase
            </Badge>
          </motion.div>

          {/* Sanity */}
          <motion.div variants={item}>
            <Badge
              variant="outline"
              className="flex items-center justify-center gap-2 py-6 text-base transition-transform duration-200 hover:scale-105"
            >
              <Database className="w-6 h-6" />
              Sanity
            </Badge>
          </motion.div>

          {/* Git & GitHub */}
          <motion.div variants={item}>
            <Badge
              variant="outline"
              className="flex items-center justify-center gap-2 py-6 text-base transition-transform duration-200 hover:scale-105"
            >
              <Github className="w-6 h-6" />
              Git & Github
            </Badge>
          </motion.div>

          {/* Framer Motion */}
          <motion.div variants={item}>
            <Badge
              variant="outline"
              className="flex items-center justify-center gap-2 py-6 text-base transition-transform duration-200 hover:scale-105"
            >
              <Frame className="w-6 h-6" />
              Framer Motion
            </Badge>
          </motion.div>

          {/* TailwindCSS */}
          <motion.div variants={item}>
            <Badge
              variant="outline"
              className="flex items-center justify-center gap-2 py-6 text-base transition-transform duration-200 hover:scale-105"
            >
              <Wind className="w-6 h-6" />
              TailwindCss
            </Badge>
          </motion.div>

          {/* Redux Toolkit */}
          <motion.div variants={item}>
            <Badge
              variant="outline"
              className="flex items-center justify-center gap-2 py-6 text-base transition-transform duration-200 hover:scale-105"
            >
              <Command className="w-6 h-6" />
              Redux Toolkit
            </Badge>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimationContainer>
  );
};

export default Skills;
