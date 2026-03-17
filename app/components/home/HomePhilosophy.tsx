"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionLabel from "../SectionLabel";

export default function HomePhilosophy() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "var(--ow)",
        padding: "160px 48px",
      }}
    >
      <div
        ref={ref}
        style={{
          maxWidth: 620,
          marginLeft: "clamp(48px, 10vw, 160px)",
        }}
      >
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: 64,
            height: 1,
            background: "var(--t1)",
            marginBottom: 56,
            transformOrigin: "left",
          }}
        />

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.4, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
            fontWeight: 400,
            fontStyle: "italic",
            lineHeight: 1.55,
            color: "var(--t1)",
          }}
        >
          You never actually own a Patek Philippe.
          <br />
          You merely look after it for the next generation.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.4, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(0.92rem, 1.05vw, 1rem)",
            fontWeight: 300,
            lineHeight: 1.95,
            color: "var(--t3)",
            marginTop: 48,
            maxWidth: 520,
          }}
        >
          For over three decades, The Hourglass has been the custodian of
          Patek Philippe in Southeast Asia — a meeting point for those who
          understand that true value is measured in generations, not moments.
        </motion.p>
      </div>
    </section>
  );
}
