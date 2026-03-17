"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import TextLink from "../TextLink";

const CDN_BASE = "https://cd.patek.com/dfsmedia/0906caea301d42b3b8bd23bd656d1711";

const boutiques = [
  {
    name: "Ngee Ann City",
    city: "Singapore",
    image: `${CDN_BASE}/289702-source/pp-pos-singapore-ann-city-the-hour-glass-interior-1`,
  },
  {
    name: "ION Orchard",
    city: "Singapore",
    image: `${CDN_BASE}/274414-source/pp-pos-singapore-ion-orchard-cortina-watch-interior-1`,
  },
  {
    name: "Raffles Hotel",
    city: "Singapore",
    image: `${CDN_BASE}/274430-source/pp-pos-singapore-raffles-hotel-the-hour-glass-interior-1`,
  },
  {
    name: "Siam Paragon",
    city: "Bangkok",
    image: `${CDN_BASE}/393434-source/pp-pos-thailand-bangkok-patek-philippe-boutique-bangkok-siam-paragon-interior-1`,
  },
];

export default function HomeBoutique() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        background: "var(--dk)",
      }}
    >
      {/* Background image with crossfade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{ position: "absolute", inset: 0 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={boutiques[activeIndex].image}
            alt={`${boutiques[activeIndex].name} interior`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(14,13,12,0.5)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "160px 48px",
          maxWidth: 1400,
          margin: "0 auto",
        }}
      >
        {/* Left — heading */}
        <div style={{ maxWidth: 400 }}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 9,
              letterSpacing: 5,
              textTransform: "uppercase",
              color: "var(--dkd)",
              marginBottom: 20,
            }}
          >
            The Boutiques
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.4, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
              fontWeight: 400,
              lineHeight: 1.2,
              color: "var(--dkt)",
              marginBottom: 32,
            }}
          >
            Rooms designed not for transaction, but for the unhurried pleasure of discovery.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.4, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
          >
            <TextLink href="/boutique" light>
              Explore all boutiques
            </TextLink>
          </motion.div>
        </div>

        {/* Right — boutique names */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: 4,
          }}
        >
          {boutiques.map((b, i) => (
            <motion.div
              key={b.name}
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 1.4,
                delay: 0.12 * i,
                ease: [0.16, 1, 0.3, 1],
              }}
              onMouseEnter={() => setActiveIndex(i)}
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                fontWeight: 400,
                lineHeight: 1.2,
                color: activeIndex === i ? "#fff" : "var(--dkd)",
                cursor: "pointer",
                padding: "12px 0",
                transition: "color 0.8s ease-in-out, transform 0.8s ease-in-out",
                transform: activeIndex === i ? "translateX(-10px)" : "translateX(0)",
              }}
            >
              {b.name}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom info */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`info-${activeIndex}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            position: "absolute",
            bottom: 48,
            left: 48,
            zIndex: 2,
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.75rem",
              fontWeight: 400,
              letterSpacing: "0.1em",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            {boutiques[activeIndex].city}
          </p>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
