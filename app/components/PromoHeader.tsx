"use client";

import { useIsMobile } from "../hooks/useIsMobile";

export default function PromoHeader() {
  const isMobile = useIsMobile();

  return (
    <section
      style={{
        backgroundColor: "#FFFFFF",
        padding: isMobile ? "64px 24px 40px 24px" : "80px 80px 40px 80px",
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
          Kuala Lumpur, Malaysia
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
          A City That Keeps
          <br />
          Its Own Time
        </h2>
      </div>
    </section>
  );
}
