"use client";

import { useIsMobile } from "../hooks/useIsMobile";

export default function FeatureSection() {
  const isMobile = useIsMobile();

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: isMobile ? 650 : 982,
        overflow: "hidden",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/feature-bg.jpg"
        alt=""
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* Bottom gradient overlay with text */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: isMobile ? 500 : 400,
          background: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
          padding: isMobile ? "0 24px 64px 24px" : "200px 80px 80px 80px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: isMobile ? "center" : "flex-start",
          gap: isMobile ? 24 : undefined,
        }}
      >
        {isMobile ? (
          /* Mobile: centered, stacked */
          <>
            <h2
              style={{
                fontFamily: "var(--font-open-sans), sans-serif",
                fontSize: 32,
                fontWeight: 400,
                letterSpacing: "0.12em",
                lineHeight: "110%",
                color: "#FFFFFF",
                textTransform: "uppercase",
                textAlign: "center",
                margin: 0,
              }}
            >
              The
              <br />
              Improbable
              <br />
              Art
            </h2>
            <p
              style={{
                fontFamily: "var(--font-lora), serif",
                fontSize: 14,
                fontWeight: 400,
                lineHeight: "20px",
                color: "#FFFFFF",
                margin: 0,
                textAlign: "center",
                maxWidth: 320,
              }}
            >
              Patek Philippe pioneered the first marquetry-decorated watch dial in watchmaking history in 2008, an achievement emerging serendipitously.
            </p>
            <a
              href="#"
              className="cta-link cta-link-white"
              style={{
                fontFamily: "var(--font-open-sans), sans-serif",
                fontSize: 16,
                fontWeight: 400,
                letterSpacing: "0.12em",
                color: "#FFFFFF",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              View Collection
            </a>
          </>
        ) : (
          /* Desktop: side-by-side */
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", width: "100%" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <h2
                style={{
                  fontFamily: "var(--font-open-sans), sans-serif",
                  fontSize: 40,
                  fontWeight: 400,
                  letterSpacing: "0.12em",
                  lineHeight: "110%",
                  color: "#FFFFFF",
                  textTransform: "uppercase",
                  margin: 0,
                }}
              >
                The Improbable Art
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-lora), serif",
                  fontSize: 16,
                  fontWeight: 400,
                  lineHeight: "20px",
                  color: "#FFFFFF",
                  margin: 0,
                  maxWidth: 448,
                }}
              >
                Patek Philippe pioneered the first marquetry-decorated watch dial in watchmaking history in 2008, an achievement emerging serendipitously.
              </p>
            </div>
            <a
              href="#"
              className="cta-link"
              style={{
                fontFamily: "var(--font-open-sans), sans-serif",
                fontSize: 16,
                fontWeight: 400,
                letterSpacing: "0.1em",
                color: "#FFFFFF",
                textTransform: "uppercase",
                textDecoration: "none",
                padding: "8px 0",
                whiteSpace: "nowrap",
              }}
            >
              View Collection
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
