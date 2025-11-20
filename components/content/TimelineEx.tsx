"use client";
import { clsx } from "clsx";
import AnimationContainer from "../utils/AnimationContainer";
import SectionHeader from "../utils/SectionHeader";
import { TimelineEventProps } from "@/types/route";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const Timeline = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <AnimationContainer
      customClassName="w-full md:mb-6 -mb-6"
      animationType="fade"
    >
      <SectionHeader
        title="Experience"
        content="I've had the opportunity to gain valuable experience as a software developer, both as a freelancer and as an open-source contributor. Below is a summary of my work and the skills I've developed along the way."
      />

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {children}
      </motion.div>
    </AnimationContainer>
  );
};

export const TimelineEvent = ({
  active,
  children,
  last,
}: TimelineEventProps) => {
  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      className={clsx(
        "w-full flex justify-start gap-6 border-neutral-300 dark:border-neutral-700",
        {
          "border-l": !last,
          "pb-16": !last,
        }
      )}
      variants={itemVariants}
    >
      <div className="relative">
        <motion.div
          className={clsx(
            "absolute top-[-2px] left-[-8.5px] w-4 h-4 rounded-full aspect-square outline-black dark:outline-neutral-900",
            {
              "bg-emerald-500": active,
              "bg-neutral-300 dark:bg-neutral-700": !active,
              "w-3 h-3": !active,
              "left-[-5.5px]": !active,
            }
          )}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          {active && (
            <motion.div
              className={clsx(
                "absolute top-0 left-0 rounded-full -z-10 w-4 h-4 bg-emerald-500 aspect-square"
              )}
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          )}
        </motion.div>
      </div>
      <motion.div
        className="mt-[-4px] flex flex-col gap-2"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

const TimelineEventTitle = ({ children }: { children: React.ReactNode }) => (
  <p className="text-base text-black dark:text-white">{children}</p>
);

const TimelineEventDescription = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const formattedDescription =
    children && typeof children === "string"
      ? children.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      : children;

  return (
    <p
      className="text-base text-gray-600 dark:text-gray-400"
      dangerouslySetInnerHTML={{ __html: formattedDescription as string }}
    />
  );
};

// Attach the Title and Description as static properties of TimelineEvent
TimelineEvent.Title = TimelineEventTitle;
TimelineEvent.Description = TimelineEventDescription;

export default TimelineEvent;
