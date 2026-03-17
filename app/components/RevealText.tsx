"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function RevealText({
  children,
  delay = 0,
  style,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  style?: React.CSSProperties;
  as?: "div" | "p" | "h1" | "h2" | "h3" | "span" | "section";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 1.4,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={style}
    >
      {children}
    </motion.div>
  );
}
