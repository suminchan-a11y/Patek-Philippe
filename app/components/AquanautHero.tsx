"use client";

import { useIsMobile } from "../hooks/useIsMobile";

const revealStyle = (delay: number): React.CSSProperties => ({
  opacity: 0,
  transform: "translateY(40px)",
  animation: `revealUp 1.0s cubic-bezier(0.25, 0.1, 0.1, 1) ${delay}s forwards`,
});

export default function AquanautHero() {
  const isMobile = useIsMobile();

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        width: "100%",
        height: isMobile ? 750 : 812,
        overflow: "hidden",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={isMobile ? "/images/aq-hero-mobile.jpg" : "/images/aq-hero.jpg"}
        alt="Aquanaut collection"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* Content — bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: isMobile ? "40px 24px 80px" : "0 80px 80px",
          display: "flex",
          flexDirection: "column",
          gap: isMobile ? 24 : 40,
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-open-sans), sans-serif",
            fontSize: isMobile ? 32 : 56,
            fontWeight: 400,
            letterSpacing: "0.12em",
            lineHeight: "82%",
            color: "#FFFFFF",
            textTransform: "uppercase",
            margin: 0,
            ...revealStyle(0.1),
          }}
        >
          Aquanaut
        </h1>
        <p
          style={{
            fontFamily: "var(--font-lora), serif",
            fontSize: isMobile ? 14 : 20,
            fontWeight: 400,
            lineHeight: "143%",
            color: "#FFFFFF",
            margin: 0,
            maxWidth: isMobile ? 345 : 452,
            ...revealStyle(0.25),
          }}
        >
          For more than 185 years, Patek Philippe watches have captivated connoisseurs and horology enthusiasts with their exceptional&nbsp;artistry.
        </p>
      </div>
    </section>
  );
}
