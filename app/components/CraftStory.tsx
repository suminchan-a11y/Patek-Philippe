"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function CraftStory() {
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
      {/* Left half — text */}
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
        {/* Watermark "1839" */}
        <div
          style={{
            position: "absolute",
            bottom: -20,
            left: -10,
            fontFamily: "var(--font-open-sans)",
            fontSize: 350,
            fontWeight: 400,
            letterSpacing: "0.01em",
            lineHeight: 1.1,
            textTransform: "uppercase" as const,
            color: "#8C7A66",
            opacity: 0.15,
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          1839
        </div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease }}
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
          In a world that
          <br />
          moves fast,
          <br />
          this took years
        </motion.h2>

        {/* Body quote */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease, delay: 0.2 }}
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
          &ldquo;We have watched people stand very still in front of a piece they
          weren&rsquo;t expecting to want. That stillness is something. It isn&rsquo;t
          about complication counts or case dimensions. It&rsquo;s the moment a
          person recognises that an object was made with more care than they will
          ever fully understand&nbsp; and decides that matters to them.&rdquo;
        </motion.p>

        {/* CTA */}
        <motion.a
          href="#"
          className="cta-link"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease, delay: 0.4 }}
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
          The Collection
        </motion.a>
      </div>

      {/* Right half — image */}
      <div style={{ width: "50%", overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/movement.png"
          alt="Watch movement"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    </section>
  );
}
