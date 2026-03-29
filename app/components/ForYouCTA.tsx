"use client";

import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "../hooks/useIsMobile";

interface ForYouCTAProps {
  heading: string;
  body: string;
  bgColor?: string;
}

export default function ForYouCTA({ heading, body, bgColor }: ForYouCTAProps) {
  const isMobile = useIsMobile();
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
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
      ref={ref}
      style={{
        backgroundColor: bgColor || "#EDEDED",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: isMobile ? "80px 24px" : "80px 80px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 16,
          maxWidth: isMobile ? 299 : undefined,
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-open-sans), sans-serif",
            fontSize: isMobile ? 32 : 40,
            fontWeight: 400,
            letterSpacing: "0.1em",
            lineHeight: "110%",
            color: "#8C7A66",
            textTransform: "uppercase",
            textAlign: "center",
            whiteSpace: "pre-line",
            margin: 0,
            ...itemStyle(0),
          }}
        >
          {heading}
        </h2>
        <p
          style={{
            fontFamily: "var(--font-lora), serif",
            fontSize: isMobile ? 14 : 16,
            fontWeight: 400,
            letterSpacing: 0,
            lineHeight: isMobile ? "140%" : "120%",
            color: "#8C7A66",
            textAlign: "center",
            margin: 0,
            maxWidth: isMobile ? undefined : 596,
            ...itemStyle(0.15),
          }}
        >
          {body}
        </p>
      </div>
    </section>
  );
}
