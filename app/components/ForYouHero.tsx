"use client";

import SearchBar from "./SearchBar";

const revealStyle = (delay: number): React.CSSProperties => ({
  opacity: 0,
  transform: "translateY(40px)",
  animation: `revealUp 1.0s cubic-bezier(0.25, 0.1, 0.1, 1) ${delay}s forwards`,
});

export default function ForYouHero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        width: "100%",
        height: 1000,
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/fy-hero-bg.png"
        alt=""
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* Content — vertically centered, left aligned */}
      <div
        style={{
          position: "absolute",
          top: -80,
          bottom: 0,
          left: 120,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 64,
          maxWidth: 629,
        }}
      >
        {/* Curated Response label + AI text */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16, ...revealStyle(0.1) }}>
          {/* Label */}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1L9.5 5.5L14 7L9.5 8.5L8 13L6.5 8.5L2 7L6.5 5.5L8 1Z" fill="#FFFFFF" />
            </svg>
            <span
              style={{
                fontFamily: "var(--font-open-sans), sans-serif",
                fontSize: 16,
                fontWeight: 400,
                letterSpacing: "0.1em",
                color: "#FFFFFF",
                textTransform: "uppercase",
              }}
            >
              CURATED RESPONSE
            </span>
          </div>

          {/* AI Response */}
          <p
            style={{
              fontFamily: "var(--font-lora), serif",
              fontSize: 40,
              fontWeight: 400,
              letterSpacing: 0,
              lineHeight: "120%",
              color: "#EDEDED",
              margin: 0,
            }}
          >
            I want something to<br />celebrate a milestone
          </p>
        </div>

        {/* Body text */}
        <p
          style={{
            fontFamily: "var(--font-open-sans), sans-serif",
            fontSize: 16,
            fontWeight: 400,
            letterSpacing: 0,
            lineHeight: "170%",
            color: "#FFFFFF",
            margin: 0,
            ...revealStyle(0.25),
          }}
        >
          You&apos;ve arrived at one of those moments that deserves more than memory. A Patek Philippe begins here, not as a reward, but as a companion to everything that follows. The piece you choose today will still be on your wrist, or your child&apos;s, when this moment becomes the story you tell. We have brought together a selection with this moment in mind, each one chosen not for what it is, but for what it will mean.
        </p>

        {/* Search Bar */}
        <div style={revealStyle(0.4)}>
          <SearchBar inline />
        </div>
      </div>
    </section>
  );
}
