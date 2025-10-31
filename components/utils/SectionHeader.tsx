"use client";
import React from "react";
import { motion } from "framer-motion";

interface SectionProps {
  title: string;
  content: string;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ title, content, id }) => {
  return (
    <motion.div 
      className="w-full my-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.h2
        className="font-semibold text-2xl md:text-3xl tracking-tight mb-4 md:mb-6 text-gray-900 dark:text-gray-100 text-center"
        id={id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {title}
      </motion.h2>
      {content && (
        <motion.p 
          className="text-sm md:text-[17px] text-black dark:text-white mx-auto mb-4 max-w-4xl sm:text-base md:text-lg text-foreground text-justify"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {content}
        </motion.p>
      )}
    </motion.div>
  );
};

export default Section;
