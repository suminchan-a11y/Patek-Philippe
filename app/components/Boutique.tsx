"use client";

import { useRef, useState } from "react";

const items = [
  {
    label: "Chronograph watches",
    video: "https://cd.patek.com/dfsmedia/0906caea301d42b3b8bd23bd656d1711/281999-source/pp-5370r-001-banner-22-9",
  },
  {
    label: "The cubitus",
    video: "https://cd.patek.com/dfsmedia/0906caea301d42b3b8bd23bd656d1711/220673-source/pp-5821-1ar-001-banner-screen-16-9",
  },
  {
    label: "Grand complication",
    video: "https://cd.patek.com/dfsmedia/0906caea301d42b3b8bd23bd656d1711/281999-source/pp-5370r-001-banner-22-9",
  },
];

export default function Boutique() {
  const [activeIndex, setActiveIndex] = useState(0);
  const textRefs = useRef<(HTMLSpanElement | null)[]>([]);

  return (
    <section
      id="boutique"
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        padding: 64,
      }}
    >
      {/* Video container — inset with 64px padding */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        {/* Background videos — crossfade */}
        {items.map((item, i) => (
          <video
            key={i}
            autoPlay
            loop
            muted
            playsInline
            src={item.video}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: i === activeIndex ? 1 : 0,
              transition: "opacity 0.8s cubic-bezier(0.25, 0.1, 0.1, 1)",
              zIndex: i === activeIndex ? 1 : 0,
            }}
          />
        ))}

        {/* Bottom gradient overlay — 80% opacity */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 358,
            background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)",
            zIndex: 2,
          }}
        />

        {/* Content overlay */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 358,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            padding: "0 64px 80px 24px",
            zIndex: 3,
          }}
        >
          {/* Left: 3 text items */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 24,
            }}
          >
            {items.map((item, i) => {
              const isActive = i === activeIndex;
              return (
                <div
                  key={i}
                  onMouseEnter={() => setActiveIndex(i)}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: isActive ? 16 : 16,
                    cursor: "pointer",
                    width: 530,
                  }}
                >
                  <span
                    ref={(el) => { textRefs.current[i] = el; }}
                    style={{
                      fontFamily: "var(--font-open-sans), sans-serif",
                      fontSize: 16,
                      fontWeight: 400,
                      letterSpacing: "0.12em",
                      lineHeight: "110%",
                      color: "#FFFFFF",
                      textTransform: "uppercase",
                      opacity: isActive ? 1 : 0.3,
                      transform: isActive ? "scale(1.5)" : "scale(1)",
                      transformOrigin: "left center",
                      transition: "transform 0.6s cubic-bezier(0.25, 0.1, 0.1, 1), opacity 0.6s cubic-bezier(0.25, 0.1, 0.1, 1)",
                      willChange: "transform, opacity",
                    }}
                  >
                    {item.label}
                  </span>
                  <div
                    style={{
                      width: 350,
                      height: 0.5,
                      backgroundColor: "#FFFFFF",
                      opacity: isActive ? 1 : 0.3,
                      transition: "width 0.6s cubic-bezier(0.25, 0.1, 0.1, 1), opacity 0.6s cubic-bezier(0.25, 0.1, 0.1, 1)",
                    }}
                  />
                </div>
              );
            })}
          </div>

          {/* Right: View Collection CTA */}
          <a
            href="#"
            className="cta-link cta-link-white"
            style={{
              fontFamily: "var(--font-open-sans), sans-serif",
              fontSize: 12,
              fontWeight: 400,
              letterSpacing: "0.1em",
              color: "#FFFFFF",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            VIEW COLLECTION
          </a>
        </div>
      </div>
    </section>
  );
}
