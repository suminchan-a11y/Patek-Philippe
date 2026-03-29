"use client";

import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "../hooks/useIsMobile";

export default function ProductDescription() {
  const isMobile = useIsMobile();
  const ref = useRef<HTMLElement>(null);
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
        width: "100%",
        backgroundColor: "#FFFFFF",
        padding: isMobile ? "80px 24px" : "80px 80px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 16,
          maxWidth: 1352,
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-open-sans), sans-serif",
            fontSize: isMobile ? 32 : 40,
            fontWeight: 400,
            letterSpacing: "0.12em",
            lineHeight: "110%",
            color: "#8C7A66",
            textTransform: "uppercase",
            textAlign: "center",
            margin: 0,
            ...itemStyle(0),
          }}
        >
          Flyback chronograph
        </h2>
        <p
          style={{
            fontFamily: "var(--font-lora), serif",
            fontSize: isMobile ? 14 : 16,
            fontWeight: 400,
            lineHeight: "140%",
            color: "#8C7A66",
            textAlign: "center",
            margin: 0,
            maxWidth: 700,
            ...itemStyle(0.15),
          }}
        >
          Featuring a self-winding flyback chronograph, Travel Time display and date indication by hand coupled with local time, this complicated Nautilus marries the shimmer of rose gold with a blue sunburst dial. The chronograph movement combines tradition (column-wheel drive) and innovation (vertical disk clutch).
        </p>
      </div>
    </section>
  );
}
