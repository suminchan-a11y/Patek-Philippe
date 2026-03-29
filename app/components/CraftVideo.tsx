"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useIsMobile } from "../hooks/useIsMobile";

export default function CraftVideo() {
  const ref = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const isMobile = useIsMobile();
  const [muted, setMuted] = useState(false);
  const [inView, setInView] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -120]);

  // Play/pause audio based on section visibility
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Pre-unlock audio on any user interaction so it's ready when section is reached
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    let unlocked = false;
    const unlock = () => {
      if (unlocked) return;
      unlocked = true;
      // Play and immediately pause to unlock the audio element
      audio.muted = true;
      audio.play().then(() => {
        audio.pause();
        audio.muted = false;
        audio.currentTime = 0;
      }).catch(() => {});
    };

    document.addEventListener("click", unlock);
    document.addEventListener("touchstart", unlock);
    return () => {
      document.removeEventListener("click", unlock);
      document.removeEventListener("touchstart", unlock);
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (inView && !muted) {
      audio.play().catch(() => {});
    } else if (muted) {
      audio.pause();
    } else {
      audio.pause();
    }
  }, [inView, muted]);

  return (
    <section
      ref={ref}
      id="craft-video"
      style={{
        position: "relative",
        width: "100%",
        height: isMobile ? 650 : "100vh",
        overflow: "hidden",
      }}
    >
      <audio ref={audioRef} src="/audio/craft-chime.mp3" preload="auto" loop />
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

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 396,
          background: "linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 100%)",
        }}
      />

      <motion.div
        style={{
          position: "absolute",
          bottom: isMobile ? 64 : 80,
          left: 0,
          right: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: isMobile ? 24 : 40,
          y: isMobile ? 0 : textY,
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-open-sans), sans-serif",
            fontSize: isMobile ? 32 : 40,
            fontWeight: 400,
            letterSpacing: "0.1em",
            lineHeight: "110%",
            color: "#FFFFFF",
            textTransform: "uppercase",
            textAlign: "center",
            maxWidth: isMobile ? 300 : 496,
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

      {/* Mute/unmute button */}
      <button
        onClick={() => setMuted((m) => !m)}
        style={{
          position: "absolute",
          bottom: isMobile ? 16 : 24,
          right: isMobile ? 16 : 24,
          width: 40,
          height: 40,
          borderRadius: "50%",
          backgroundColor: "rgba(0,0,0,0.4)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          border: "0.5px solid rgba(255,255,255,0.2)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
          transition: "background-color 0.3s",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.6)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.4)"; }}
      >
        {muted ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M11 5L6 9H2V15H6L11 19V5Z" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="23" y1="9" x2="17" y2="15" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="17" y1="9" x2="23" y2="15" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M11 5L6 9H2V15H6L11 19V5Z" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M19.07 4.93C20.9447 6.80528 21.9979 9.34836 21.9979 12C21.9979 14.6516 20.9447 17.1947 19.07 19.07" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M15.54 8.46C16.4774 9.39764 17.004 10.6692 17.004 11.995C17.004 13.3208 16.4774 14.5924 15.54 15.53" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        )}
      </button>
    </section>
  );
}
