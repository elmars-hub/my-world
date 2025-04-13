"use client";
import React from "react";

interface SectionProps {
  title: string;
  content: string;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ title, content, id }) => {
  return (
    <div className="w-full my-8">
      <h2
        className="font-semibold text-2xl md:text-3xl tracking-tight mb-4 md:mb-6 text-gray-900 dark:text-gray-100 text-center"
        id={id}
      >
        {title}
      </h2>
      <p className="text-sm md:text-[17px]  text-black dark:text-white mx-auto mb-5 max-w-4xl sm:text-base md:text-lg text-foreground text-justify">
        {content}
      </p>
    </div>
  );
};

export default Section;
