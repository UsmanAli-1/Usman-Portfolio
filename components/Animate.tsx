"use client";
import { motion } from "framer-motion";

type AnimationType = "fade-up" | "pop" | "slide-left" | "slide-right";

export default function Animate({
  children,
  type = "fade-up",
  delay = 0,
  duration = 0.4,
  className = "",
}: {
  children: React.ReactNode;
  type?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  const animations = {
    "fade-up": {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    },
    pop: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1 },
    },
    "slide-left": {
      hidden: { opacity: 0, x: 20 },
      visible: { opacity: 1, x: 0 },
    },
    "slide-right": {
      hidden: { opacity: 0, x: -20 },
      visible: { opacity: 1, x: 0 },
    },
  };

  return (
    <motion.div
      className={className}
      variants={animations[type]}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        margin: "-80px", // 🔥 start animation BEFORE fully visible
      }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
