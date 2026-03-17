"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionLabel from "../SectionLabel";
import TextLink from "../TextLink";

export default function HomeAppointment() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section
      style={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--warm)",
        padding: "160px 48px",
      }}
    >
      <div
        ref={ref}
        style={{
          maxWidth: 620,
          textAlign: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: 28 }}
        >
          <SectionLabel>Be Received</SectionLabel>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.4, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
            fontWeight: 400,
            lineHeight: 1.2,
            color: "var(--t1)",
            marginBottom: 24,
          }}
        >
          We would be pleased to welcome you.
        </motion.h2>

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
            marginBottom: 56,
          }}
        >
          A visit to our salon is unhurried. Your watch specialist will listen
          before they recommend. There is no obligation, no expectation — only
          conversation between people who share a deep respect for what these
          timepieces represent.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.4, delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
        >
          <TextLink href="/services">Request an Appointment</TextLink>
        </motion.div>
      </div>
    </section>
  );
}
