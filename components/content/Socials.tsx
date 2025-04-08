"use client";

import { Twitter, Github, Instagram, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

const icons = [
  {
    path: "https://github.com/elmars-hub",
    name: <Github />,
    title: "GitHub",
  },

  {
    path: "https://twitter.com/0xx_eth",
    name: <Twitter />,
    title: "Twitter X",
  },
  {
    path: "https://www.instagram.com/elmars_dev/",
    name: <Instagram />,
    title: "Instagram",
  },
];

const Socials = () => {
  return (
    <motion.div
      className="flex gap-x-4"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {icons.map((icon, index) => {
        return (
          <motion.a
            href={icon.path}
            key={`social-icon-${index}`}
            className="text-2xl hover:text-primary transition-all"
            target="_blank"
            rel="noopener noreferrer"
            title={icon.title}
            variants={item}
            whileHover={{
              scale: 1.2,
              rotate: [0, -10, 10, -10, 0],
              transition: { duration: 0.5 },
            }}
          >
            {icon.name}
          </motion.a>
        );
      })}
      <motion.a
        href="https://wa.link/505hq0"
        className="text-2xl hover:text-primary transition-all"
        target="_blank"
        title="WhatsApp"
        variants={item}
        whileHover={{
          scale: 1.2,
          rotate: [0, -10, 10, -10, 0],
          transition: { duration: 0.5 },
        }}
      >
        <MessageCircle className="text-green-400" />
      </motion.a>
    </motion.div>
  );
};

export default Socials;
