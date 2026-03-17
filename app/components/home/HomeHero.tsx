"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Logo from "../Logo";

/*
  Alter Geneva–inspired intro sequence:
  Phase 1 (0–1.8s): Black screen, logo fades in at center
  Phase 2 (1.8–3.2s): Logo scales up + fades out, hero image revealed beneath
  Phase 3 (3.2s+): Hero image slow zoom-out from 1.25→1, headline slides up
*/

export default function HomeHero() {
  const [phase, setPhase] = useState<"logo" | "reveal" | "open">("logo");
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    // Phase 1→2: Start reveal after logo is shown
    const t1 = setTimeout(() => setPhase("reveal"), 1800);
    // Phase 2→3: Hero fully open
    const t2 = setTimeout(() => setPhase("open"), 3200);
    // Scroll indicator appears after hero is open
    const t3 = setTimeout(() => setShowScroll(true), 4500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <section
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        background: "#050505",
      }}
    >
      {/* Hero image — zoom out effect */}
      <motion.div
        initial={{ scale: 1.35, opacity: 0 }}
        animate={
          phase === "logo"
            ? { scale: 1.35, opacity: 0 }
            : phase === "reveal"
              ? { scale: 1.2, opacity: 1 }
              : { scale: 1, opacity: 1 }
        }
        transition={{
          scale: {
            duration: phase === "open" ? 8 : 1.4,
            ease: phase === "open" ? [0.16, 1, 0.3, 1] : [0.16, 1, 0.3, 1],
          },
          opacity: { duration: 1.4, ease: "easeOut" },
        }}
        style={{
          position: "absolute",
          inset: "-10%",
          zIndex: 0,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero.jpg"
          alt="Patek Philippe Advanced Research"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </motion.div>

      {/* Dark overlay — fades in with image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: phase === "logo" ? 0 : 1 }}
        transition={{ duration: 1.4, delay: 0.2 }}
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(5,5,5,0.15) 0%, rgba(5,5,5,0.02) 30%, rgba(5,5,5,0.1) 55%, rgba(5,5,5,0.6) 100%)",
          zIndex: 1,
        }}
      />

      {/* Logo intro overlay */}
      <AnimatePresence>
        {(phase === "logo" || phase === "reveal") && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#050505",
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                phase === "logo"
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 1.15 }
              }
              transition={{
                opacity: {
                  duration: phase === "logo" ? 1.2 : 0.8,
                  ease: "easeInOut",
                },
                scale: {
                  duration: phase === "logo" ? 1.4 : 1.2,
                  ease: [0.16, 1, 0.3, 1],
                },
              }}
            >
              <Logo variant="white" height={64} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom-left headline — slides up after hero is open */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={
          phase === "open" ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }
        }
        transition={{ duration: 1.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 2,
          padding: "0 48px 80px",
        }}
      >
        <div style={{ maxWidth: 900 }}>
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(48px, 5.5vw, 80px)",
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "#fff",
            }}
          >
            The beginning
            <br />
            of a lifelong bond.
          </h1>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showScroll ? 1 : 0 }}
        transition={{ duration: 1.4 }}
        style={{
          position: "absolute",
          bottom: 80,
          right: 48,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 2,
        }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            width: 1,
            height: 32,
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.35), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}
