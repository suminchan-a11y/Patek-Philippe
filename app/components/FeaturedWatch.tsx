"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function FeaturedWatch() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      style={{
        display: "flex",
        width: "100%",
        height: "100vh",
        minHeight: 982,
      }}
    >
      {/* Left half — watch image */}
      <div style={{ width: "50%", overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/greenwatch.png"
          alt="Complications 7130R-014"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      {/* Right half — text */}
      <div
        ref={ref}
        style={{
          width: "50%",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 60px",
          overflow: "hidden",
          background: "#FFFFFF",
        }}
      >
        {/* Watermark "7130R-014" */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            right: -20,
            transform: "translateY(-50%)",
            fontFamily: "var(--font-open-sans)",
            fontSize: 250,
            fontWeight: 400,
            letterSpacing: "0.01em",
            lineHeight: 0.9,
            textTransform: "uppercase" as const,
            color: "#8C7A66",
            opacity: 0.15,
            pointerEvents: "none",
            userSelect: "none",
            whiteSpace: "nowrap",
          }}
        >
          7130R
          <br />
          -014
        </div>

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease }}
          style={{
            fontFamily: "var(--font-open-sans)",
            fontSize: 14,
            fontWeight: 400,
            letterSpacing: "0.05em",
            lineHeight: 1.1,
            textTransform: "uppercase" as const,
            color: "#8C7A66",
            marginBottom: 12,
            position: "relative",
            zIndex: 1,
          }}
        >
          Currently in the Boutique
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease, delay: 0.1 }}
          style={{
            fontFamily: "var(--font-open-sans)",
            fontSize: 56,
            fontWeight: 400,
            letterSpacing: "0.05em",
            lineHeight: 1.1,
            textTransform: "uppercase" as const,
            color: "#8C7A66",
            marginBottom: 40,
            position: "relative",
            zIndex: 1,
          }}
        >
          Complications
        </motion.h2>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease, delay: 0.3 }}
          style={{
            fontFamily: "var(--font-lora)",
            fontSize: 16,
            fontWeight: 400,
            lineHeight: 1.2,
            color: "#8C7A66",
            maxWidth: 500,
            marginBottom: 32,
            position: "relative",
            zIndex: 1,
          }}
        >
          The dial center pays tribute to Rare Handcrafts with a finely
          hand-guilloched pattern. The ultra-thin self-winding movement beating
          inside this refined exterior ensures the slenderness of the case.
        </motion.p>

        {/* CTA */}
        <motion.a
          href="#"
          className="cta-link"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease, delay: 0.5 }}
          style={{
            fontFamily: "var(--font-open-sans)",
            fontSize: 16,
            fontWeight: 400,
            letterSpacing: "0.02em",
            color: "#8C7A66",
            position: "relative",
            zIndex: 1,
          }}
        >
          View Collection
        </motion.a>
      </div>
    </section>
  );
}
