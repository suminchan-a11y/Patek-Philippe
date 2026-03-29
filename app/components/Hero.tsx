"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useIsMobile } from "../hooks/useIsMobile";


const ease = [0.25, 0.1, 0.1, 1] as const;

function MobileHero() {
  return (
      <section
        id="hero"
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          src="/images/hero-video-mobile.mp4"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {/* Bottom gradient overlay — 60% opacity */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 386,
            background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)",
          }}
        />

        {/* Content — bottom, centered */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: "40px 24px 136px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 16,
            }}
          >
            <h1
              className="reveal-up"
              style={{
                fontFamily: "var(--font-lora), serif",
                fontSize: 56,
                fontWeight: 400,
                letterSpacing: "-0.02em",
                lineHeight: "110%",
                color: "#FFFFFF",
                textAlign: "center",
                margin: 0,
              }}
            >
              Begin your
              <br />
              story
            </h1>
            <p
              className="reveal-up"
              style={{
                fontFamily: "var(--font-lora), serif",
                fontSize: 14,
                fontWeight: 400,
                lineHeight: "110%",
                color: "#FFFFFF",
                textAlign: "center",
                margin: 0,
                maxWidth: 269,
              }}
            >
              Enter the world of Patek Philippe, where time is not kept, but passed&nbsp;on.
            </p>
          </div>
        </div>
      </section>
  );
}

function DesktopHero() {
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
      id="hero"
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        src="/images/hero-video-new.mp4"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center 20%",
        }}
      />

      {/* Blur + gradient backdrop */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "55%",
          background:
            "linear-gradient(to top, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.25) 40%, transparent 100%)",
        }}
      />

      {/* Heading — floats away on scroll */}
      <motion.div
        className="hero-content"
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
          paddingBottom: 80,
          y: textY,
          opacity: textOpacity,
        }}
      >
        <h1
          className="reveal-up"
          style={{
            fontFamily: "var(--font-lora), serif",
            fontSize: 80,
            fontWeight: 400,
            letterSpacing: "-0.02em",
            lineHeight: "110%",
            color: "rgba(255,255,255,0.8)",
            textAlign: "center",
            whiteSpace: "nowrap",
            marginBottom: 24,
          }}
        >
          Begin your story
        </h1>
        <p
          className="reveal-up"
          style={{
            fontFamily: "var(--font-lora), serif",
            fontSize: 16,
            fontWeight: 400,
            letterSpacing: 0,
            lineHeight: "110%",
            color: "rgba(255,255,255,0.8)",
            textAlign: "center",
            maxWidth: 576,
            marginBottom: 40,
          }}
        >
          Enter the world of Patek Philippe, where time is not kept, but passed on.
        </p>
      </motion.div>
    </section>
  );
}

export default function Hero() {
  const isMobile = useIsMobile();
  if (isMobile) return <MobileHero />;
  return <DesktopHero />;
}
