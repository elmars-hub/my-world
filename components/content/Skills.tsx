import React, { useRef, useMemo } from "react";
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

  const container = useMemo(() => ({
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }), []);

  const item = useMemo(() => ({
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
      },
    },
  }), []);

  const skillsData = useMemo(() => [
    { icon: FileCode2, name: "JavaScript" },
    { icon: FileCode2, name: "TypeScript" },
    { icon: Wind, name: "TailwindCss" },
    { icon: Atom, name: "ReactJs" },
    { icon: Hexagon, name: "Next.Js" },
    { icon: Bolt, name: "Express" },
    { icon: Database, name: "MongoDB" },
    { icon: FileCode2, name: "Prisma" },
    { icon: Github, name: "Git" },
    { icon: Bolt, name: "Supabase" },
    { icon: Frame, name: "Framer Motion" },
    { icon: Command, name: "Redux" },
  ], []);

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
          {skillsData.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <motion.div key={skill.name} variants={item}>
                <Badge
                  variant="outline"
                  className="flex items-center justify-center gap-2 py-6 text-base transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  role="img"
                  aria-label={`${skill.name} skill`}
                  tabIndex={0}
                >
                  <IconComponent className="w-6 h-6" aria-hidden="true" />
                  <span>{skill.name}</span>
                </Badge>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </AnimationContainer>
  );
};

export default Skills;
