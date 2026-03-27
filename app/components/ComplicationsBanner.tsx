"use client";

import { useEffect, useRef, useState } from "react";

export default function ComplicationsBanner() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const itemStyle = (delay: number): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(40px)",
    transition: `opacity 1.0s cubic-bezier(0.25, 0.1, 0.1, 1) ${delay}s, transform 1.0s cubic-bezier(0.25, 0.1, 0.1, 1) ${delay}s`,
  });

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: 982,
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/complications-bg.png"
        alt="Complications"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* Bottom Gradient Overlay */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: 368,
          background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
        }}
      />

      {/* Content — bottom area */}
      <div
        ref={contentRef}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: 368,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 24,
        }}
      >
        {/* Label */}
        <span
          style={{
            fontFamily: "var(--font-open-sans), sans-serif",
            fontSize: 16,
            fontWeight: 400,
            color: "#FFFFFF",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            ...itemStyle(0),
          }}
        >
          CURRENTLY IN BOUTIQUE
        </span>

        {/* Heading */}
        <h2
          style={{
            fontFamily: "var(--font-open-sans), sans-serif",
            fontSize: 56,
            fontWeight: 400,
            color: "#FFFFFF",
            textTransform: "uppercase",
            margin: 0,
            letterSpacing: "0.1em",
            ...itemStyle(0.15),
          }}
        >
          COMPLICATIONS
        </h2>

        {/* CTA */}
        <a
          className="cta-link cta-link-white"
          href="#"
          style={{
            fontFamily: "var(--font-open-sans), sans-serif",
            fontSize: 16,
            fontWeight: 400,
            color: "#FFFFFF",
            textTransform: "uppercase",
            letterSpacing: "0.015em",
            textDecoration: "none",
            cursor: "pointer",
            ...itemStyle(0.3),
          }}
        >
          VIEW COLLECTION
        </a>
      </div>
    </section>
  );
}
