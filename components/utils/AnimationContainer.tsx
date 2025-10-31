"use client";

import { motion, Variants } from "framer-motion";
import { AnimationContainerProps } from "@/types/route";

export type AnimationType = "fade" | "slideUp" | "slideDown" | "slideLeft" | "slideRight" | "scale" | "blur";

interface ExtendedAnimationContainerProps extends AnimationContainerProps {
  animationType?: AnimationType;
  viewportMargin?: string;
}

const animationVariants: Record<AnimationType, Variants> = {
  fade: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  },
  slideUp: {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  },
  slideDown: {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  },
  slideLeft: {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  },
  slideRight: {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  },
  blur: {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  },
};

const AnimationContainer = ({
  children,
  customClassName,
  customDelay = 0.3,
  animationType = "slideUp",
  viewportMargin = "-100px",
}: ExtendedAnimationContainerProps) => {
  const variant = animationVariants[animationType];

  const customVariant = {
    hidden: variant.hidden,
    visible: {
      ...variant.visible,
      transition: {
        ...(typeof variant.visible === 'object' && 'transition' in variant.visible 
          ? variant.visible.transition 
          : {}),
        delay: customDelay,
      },
    },
  };

  return (
    <motion.div
      className={customClassName}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: viewportMargin }}
      variants={customVariant}
    >
      {children}
    </motion.div>
  );
};

export default AnimationContainer;
