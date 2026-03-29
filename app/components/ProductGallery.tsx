"use client";

import { useState } from "react";
import { useIsMobile } from "../hooks/useIsMobile";

const heroImages = [
  "/images/pdp-hero-1.jpg",
  "/images/pdp-hero-2.jpg",
  "/images/pdp-hero-3.jpg",
];

const thumbImages = [
  "/images/pdp-thumb-1.jpg",
  "/images/pdp-thumb-2.jpg",
  "/images/pdp-thumb-3.jpg",
];

const revealStyle = (delay: number): React.CSSProperties => ({
  opacity: 0,
  transform: "translateY(40px)",
  animation: `revealUp 1.0s cubic-bezier(0.25, 0.1, 0.1, 1) ${delay}s forwards`,
});

export default function ProductGallery() {
  const isMobile = useIsMobile();
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => setActiveIndex((i) => (i - 1 + heroImages.length) % heroImages.length);
  const next = () => setActiveIndex((i) => (i + 1) % heroImages.length);

  if (isMobile) {
    return (
      <section
        id="hero"
        style={{
          position: "relative",
          width: "100%",
          height: 750,
          overflow: "hidden",
          ...revealStyle(0.1),
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/pdp-hero-1.jpg"
          alt="Nautilus"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.2)",
          }}
        />
      </section>
    );
  }

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        width: "100%",
        height: 776,
        overflow: "hidden",
        ...revealStyle(0.1),
      }}
    >
      {/* Hero images — crossfade */}
      {heroImages.map((src, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={src}
          src={src}
          alt={`Nautilus view ${i + 1}`}
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

      {/* Navigation overlay — bottom right: thumbnails LEFT, arrows RIGHT */}
      <div
        style={{
          position: "absolute",
          bottom: 80,
          right: 64,
          display: "flex",
          alignItems: "center",
          zIndex: 2,
        }}
      >
        {/* Thumbnails — left side */}
        <div style={{ display: "flex", gap: 12 }}>
          {thumbImages.map((thumb, i) => (
            <div
              key={thumb}
              onClick={() => setActiveIndex(i)}
              style={{
                width: 72,
                height: 56,
                position: "relative",
                cursor: "pointer",
                overflow: "hidden",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={thumb}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              {i !== activeIndex && (
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "rgba(0,0,0,0.2)",
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Arrow buttons — right side */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginLeft: 25 }}>
          <button
            onClick={prev}
            style={{
              width: 53,
              height: 39,
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 0,
            }}
          >
            <svg width="9" height="16" viewBox="0 0 9 16" fill="none">
              <path d="M8 1L1 8L8 15" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button
            onClick={next}
            style={{
              width: 53,
              height: 39,
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 0,
            }}
          >
            <svg width="9" height="16" viewBox="0 0 9 16" fill="none">
              <path d="M1 1L8 8L1 15" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
