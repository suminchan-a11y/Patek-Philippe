"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Boutique() {
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
      id="boutique"
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        src="/images/boutique-interior.mp4"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "95% 5%",
          position: "absolute",
          inset: 0,
        }}
      />

      {/* Bottom blur + gradient — 396px from bottom, progressive blur */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 396,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.60) 0%, rgba(0,0,0,0) 100%)",
          backdropFilter: "blur(2px)",
          WebkitBackdropFilter: "blur(2px)",
          maskImage:
            "linear-gradient(to top, black 0%, black 76%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to top, black 0%, black 76%, transparent 100%)",
        }}
      />

      {/* Content — bottom left, vertical stack, floats away on scroll */}
      <motion.div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "120px 64px 80px",
          display: "flex",
          flexDirection: "column",
          gap: 40,
          y: textY,
        }}
      >
        {/* Heading */}
        <h2
          style={{
            fontFamily: "var(--font-open-sans), sans-serif",
            fontSize: 40,
            fontWeight: 400,
            letterSpacing: "0.1em",
            lineHeight: "110%",
            color: "#FFFFFF",
            textTransform: "uppercase" as const,
            margin: 0,
          }}
        >
          Experience the space
        </h2>

        {/* Address + Hours row */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 51,
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-lora), serif",
              fontSize: 16,
              fontWeight: 400,
              lineHeight: "20px",
              color: "#FFFFFF",
              margin: 0,
              maxWidth: 313,
            }}
          >
            Lot G226-227, Ground Floor<br />The Gardens Mall, Medan Syed Putra<br />Utara, 59200 Kuala Lumpur, Malaysia.
          </p>
          <p
            style={{
              fontFamily: "var(--font-lora), serif",
              fontSize: 16,
              fontWeight: 400,
              lineHeight: "20px",
              color: "#FFFFFF",
              margin: 0,
            }}
          >
            Visit us today
            <br />
            10:00am - 5:00pm
          </p>
        </div>
      </motion.div>
    </section>
  );
}
