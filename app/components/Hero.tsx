"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Background image with parallax zoom */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          scale,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-bg.png"
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
          }}
        />
      </motion.div>

      {/* Gradient overlay at bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "60%",
          background:
            "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Text content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        style={{
          position: "absolute",
          bottom: 120,
          left: 0,
          right: 0,
          textAlign: "center",
          color: "#FFFFFF",
          padding: "0 40px",
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-open-sans)",
            fontSize: 56,
            fontWeight: 400,
            letterSpacing: "0.05em",
            lineHeight: 1.1,
            textTransform: "uppercase" as const,
            marginBottom: 16,
          }}
        >
          For those who understands
          <br />
          and why it matters
        </h1>
        <p
          style={{
            fontFamily: "var(--font-lora)",
            fontSize: 20,
            fontWeight: 400,
            lineHeight: 1,
          }}
        >
          Where time is handled differently
        </p>
      </motion.div>
    </section>
  );
}
