"use client";

import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: 80,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 40px",
        zIndex: 100,
        transition: "background 0.4s ease, backdrop-filter 0.4s ease",
        background: scrolled ? "rgba(255,255,255,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      {/* Left: + COLLECTIONS */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          fontFamily: "var(--font-open-sans)",
          fontSize: 16,
          fontWeight: 400,
          letterSpacing: "0.05em",
          lineHeight: 1.7,
          textTransform: "uppercase" as const,
          color: scrolled ? "#000000" : "#6A655F",
          cursor: "pointer",
          transition: "color 0.4s ease",
        }}
      >
        <span style={{ fontSize: 18 }}>+</span>
        <span>Collections</span>
      </div>

      {/* Center: Logomark */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={scrolled ? "/logos/pp-logomark.png" : "/logos/pp-logomark-white.png"}
        alt="Patek Philippe"
        style={{
          height: 56,
          width: 56,
          objectFit: "contain",
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          transition: "opacity 0.4s ease",
        }}
      />

      {/* Right: Reserve */}
      <div
        style={{
          fontFamily: "var(--font-open-sans)",
          fontSize: 16,
          fontWeight: 400,
          letterSpacing: "0.05em",
          lineHeight: 1.7,
          textTransform: "uppercase" as const,
          color: scrolled ? "#000000" : "#6A655F",
          cursor: "pointer",
          transition: "color 0.4s ease",
        }}
      >
        Reserve an Appointment
      </div>
    </nav>
  );
}
