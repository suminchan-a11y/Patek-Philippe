"use client";

import { useRef, useEffect, useCallback } from "react";
import { motion, useInView, useScroll, useTransform, type MotionValue } from "framer-motion";

const ease = [0.25, 0.1, 0.1, 1] as const;

export default function Guillochage() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yLeft = useTransform(scrollYProgress, [0, 1], [0, -1]);
  const yRight = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section
      ref={ref}
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 8,
        height: "100vh",
        backgroundColor: "#FFFFFF",
        paddingTop: 8,
      }}
    >
      {/* Left Panel — Pattern Wall with hover state */}
      <WallPanel yLeft={yLeft} />

      {/* Right Panel — Video + Text */}
      <GuillocheVideo />
    </section>
  );
}

function WallPanel({ yLeft }: { yLeft: MotionValue<number> }) {
  return (
    <div
      style={{
        flex: "1 1 748px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: "-5% 0px 0px",
          height: "110%",
          willChange: "transform",
          transform: "translateY(-30px)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/pattern-wall.png"
          alt="Guillochage pattern"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
}

function GuillocheVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleTimeUpdate = useCallback(() => {
    const video = videoRef.current;
    if (video && video.currentTime >= 36) {
      video.currentTime = 24;
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 24;
  }, []);

  return (
    <div
      style={{
        flex: "1 1 748px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        onTimeUpdate={handleTimeUpdate}
        src="https://cd.patek.com/dfsmedia/0906caea301d42b3b8bd23bd656d1711/5983-source/pp-5178g-012-screen-16-9-product-film"
        style={{
          position: "absolute",
          inset: "-2px",
          width: "calc(100% + 4px)",
          height: "110%",
          objectFit: "cover",
          transform: "translateY(-30px)",
        }}
      />

      {/* Gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.60) 0%, rgba(0,0,0,0) 50%)",
        }}
      />

      {/* Text — center aligned */}
      <div
        style={{
          position: "absolute",
          bottom: 80,
          left: 0,
          right: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
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
            marginBottom: 24,
          }}
        >
          The Art of
          <br />
          Guillochage
        </h2>
        <a
          href="#"
          className="cta-link cta-link-white"
        >
          View collection
        </a>
      </div>
    </div>
  );
}
