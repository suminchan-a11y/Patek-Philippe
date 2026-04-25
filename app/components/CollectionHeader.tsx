"use client";

import { useIsMobile } from "../hooks/useIsMobile";

export default function CollectionHeader() {
  const isMobile = useIsMobile();

  return (
    <section
      style={{
        backgroundColor: "#FFFFFF",
        padding: isMobile ? "64px 24px 0 24px" : "80px 80px 0 80px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: isMobile ? 32 : 64,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 16,
          maxWidth: isMobile ? undefined : 1352,
          width: "100%",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-open-sans), sans-serif",
            fontSize: 14,
            fontWeight: 400,
            letterSpacing: "0.18em",
            lineHeight: "110%",
            color: "#8C7A66",
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          The Collection
        </span>
        <h2
          style={{
            fontFamily: "var(--font-open-sans), sans-serif",
            fontSize: isMobile ? 32 : 40,
            fontWeight: 400,
            letterSpacing: isMobile ? "0.1em" : "0.12em",
            lineHeight: "110%",
            color: "#8C7A66",
            textTransform: "uppercase",
            textAlign: "center",
            margin: 0,
          }}
        >
          The new expression of time
        </h2>
        <p
          style={{
            fontFamily: "var(--font-lora), serif",
            fontSize: isMobile ? 14 : 16,
            fontWeight: 400,
            lineHeight: "160%",
            color: "#626262",
            textAlign: "center",
            margin: 0,
            maxWidth: isMobile ? undefined : 640,
          }}
        >
          The Patek Philippe 2026 new models marked a measured evolution, balancing heritage with a sharper, more contemporary edge. Each piece reflected thoughtful refinements in form and detail, shaping a collection that felt both familiar and distinctly new.
        </p>
      </div>
    </section>
  );
}
