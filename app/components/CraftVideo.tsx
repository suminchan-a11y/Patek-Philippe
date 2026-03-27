"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function CraftVideo() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -120]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);

  return (
    <section
      ref={ref}
      id="craft-video"
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Background video — no audio */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          inset: 0,
        }}
      >
        <source
          src="https://cd.patek.com/dfsmedia/0906caea301d42b3b8bd23bd656d1711/413492-source/pp-5204g-001-banner-16-9-homepage"
          type="video/mp4"
        />
      </video>
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.3)",
        }}
      />

      {/* Bottom gradient overlay — 396px, 60% opacity linear gradient */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 396,
          background:
            "linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 100%)",
        }}
      />

      {/* Content — centered in bottom gradient area, drifts up on scroll */}
      <motion.div
        style={{
          position: "absolute",
          bottom: 80,
          left: 0,
          right: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 40,
          y: textY,
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-open-sans), sans-serif",
            fontSize: 40,
            fontWeight: 400,
            letterSpacing: "0.1em",
            lineHeight: "110%",
            color: "#FFFFFF",
            textTransform: "uppercase" as const,
            textAlign: "center",
            maxWidth: 496,
          }}
        >
          The Craft That
          <br />
          Took Years
        </h2>
        <a
          href="#"
          className="cta-link cta-link-white"
          style={{
            letterSpacing: "0.02em",
          }}
        >
          Watch video
        </a>
      </motion.div>
    </section>
  );
}
