"use client";

import useScrollPosition from "@/hooks/scrollPosition";
import { motion } from "framer-motion";
import React from "react";

const animation = {
  hide: { y: -8, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

const HeaderAnimation = ({ children }: { children: React.ReactNode }) => {
  const classNames = (...classes: string[]) =>
    classes.filter(Boolean).join(" ");

  const scrollPosition = useScrollPosition();
  return (
    <motion.header
      className={classNames(
        scrollPosition > 0
          ? "bg-white dark:bg-black/90  backdrop-blur-sm  transition-all ease-in-out border-b border-black/10 dark:border-white/10" // Black background for light theme, dark-gray for dark theme
          : "bg-transparent",
        "w-full sticky top-0 flex flex-col justify-center items-center z-10 transition ease-in-out mx-auto "
      )}
      initial="hide"
      whileInView="show"
      variants={animation}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.header>
  );
};

export default HeaderAnimation;
