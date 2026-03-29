"use client";

import { useIsMobile } from "../hooks/useIsMobile";

const revealStyle = (delay: number): React.CSSProperties => ({
  opacity: 0,
  transform: "translateY(40px)",
  animation: `revealUp 1.0s cubic-bezier(0.25, 0.1, 0.1, 1) ${delay}s forwards`,
});

export default function ProductInfo() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <section
        style={{
          width: "100%",
          padding: "40px 24px",
          display: "flex",
          flexDirection: "column",
          gap: 24,
          ...revealStyle(0.25),
        }}
      >
        {/* Name + Model row */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-open-sans), sans-serif",
              fontSize: 16,
              fontWeight: 400,
              letterSpacing: "0.12em",
              lineHeight: "110%",
              color: "#8C7A66",
              textTransform: "uppercase",
            }}
          >
            Nautilus
          </span>
          <span
            style={{
              fontFamily: "var(--font-open-sans), sans-serif",
              fontSize: 24,
              fontWeight: 400,
              letterSpacing: "0.12em",
              lineHeight: "100%",
              color: "#8C7A66",
            }}
          >
            5712/1R-001
          </span>
        </div>

        {/* Specs row */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <span style={{ fontFamily: "var(--font-open-sans), sans-serif", fontSize: 12, fontWeight: 400, letterSpacing: "0.12em", lineHeight: "110%", color: "#626262", textTransform: "uppercase" as const }}>Case Size</span>
            <span style={{ fontFamily: "var(--font-open-sans), sans-serif", fontSize: 12, fontWeight: 400, letterSpacing: "0.12em", lineHeight: "110%", color: "#626262", textTransform: "uppercase" as const }}>Case Material</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <span style={{ fontFamily: "var(--font-lora), serif", fontSize: 12, fontWeight: 400, lineHeight: "100%", color: "#626262" }}>42.2mm</span>
            <span style={{ fontFamily: "var(--font-lora), serif", fontSize: 12, fontWeight: 400, lineHeight: "100%", color: "#626262" }}>White Gold</span>
          </div>
        </div>

        {/* CTA Button — full width */}
        <button
          style={{
            width: "100%",
            height: 68,
            borderRadius: 2,
            backgroundColor: "#533833",
            border: "none",
            cursor: "pointer",
            fontFamily: "var(--font-open-sans), sans-serif",
            fontSize: 16,
            fontWeight: 400,
            letterSpacing: "0.12em",
            lineHeight: "20px",
            color: "#FFFFFF",
            textTransform: "uppercase",
          }}
        >
          Schedule an Appointment
        </button>
      </section>
    );
  }

  return (
    <section
      style={{
        width: "100%",
        padding: "32px 64px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        ...revealStyle(0.25),
      }}
    >
      {/* Left: Name + Model */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-open-sans), sans-serif",
            fontSize: 16,
            fontWeight: 400,
            letterSpacing: "0.12em",
            lineHeight: "140%",
            color: "#8C7A66",
            textTransform: "uppercase",
          }}
        >
          Nautilus
        </span>
        <span
          style={{
            fontFamily: "var(--font-open-sans), sans-serif",
            fontSize: 40,
            fontWeight: 300,
            letterSpacing: "0.12em",
            lineHeight: "100%",
            color: "#8C7A66",
          }}
        >
          5990/1R-001
        </span>
      </div>

      {/* Right: Specs + CTA */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 206,
        }}
      >
        {/* Specs Grid */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 8,
          }}
        >
          {/* Labels column */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              width: 180,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-open-sans), sans-serif",
                fontSize: 12,
                fontWeight: 400,
                letterSpacing: "0.12em",
                lineHeight: "100%",
                color: "#626262",
                opacity: 0.8,
                textTransform: "uppercase",
              }}
            >
              Case Size
            </span>
            <span
              style={{
                fontFamily: "var(--font-open-sans), sans-serif",
                fontSize: 12,
                fontWeight: 400,
                letterSpacing: "0.12em",
                lineHeight: "100%",
                color: "#626262",
                opacity: 0.8,
                textTransform: "uppercase",
              }}
            >
              Case Material
            </span>
          </div>

          {/* Values column */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              width: 180,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-lora), serif",
                fontSize: 12,
                fontWeight: 400,
                lineHeight: "100%",
                color: "#626262",
              }}
            >
              42.2mm
            </span>
            <span
              style={{
                fontFamily: "var(--font-lora), serif",
                fontSize: 12,
                fontWeight: 400,
                lineHeight: "100%",
                color: "#626262",
              }}
            >
              White Gold
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#2B1C1A"; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#533833"; }}
          style={{
            width: 353,
            height: 68,
            borderRadius: 4,
            backgroundColor: "#533833",
            border: "none",
            cursor: "pointer",
            fontFamily: "var(--font-open-sans), sans-serif",
            fontSize: 16,
            fontWeight: 400,
            letterSpacing: "0.12em",
            color: "#FFFFFF",
            textTransform: "uppercase",
            transition: "background-color 0.4s cubic-bezier(0.25, 0.1, 0.1, 1)",
          }}
        >
          Schedule an Appointment
        </button>
      </div>
    </section>
  );
}
