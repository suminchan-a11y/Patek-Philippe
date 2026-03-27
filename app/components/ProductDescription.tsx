"use client";

import { useEffect, useRef, useState } from "react";

export default function ProductDescription() {
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
        height: 300,
        backgroundColor: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 80px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 16,
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-lora), serif",
            fontSize: 56,
            fontWeight: 400,
            letterSpacing: "-0.02em",
            lineHeight: "110%",
            color: "#8C7A66",
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
            fontSize: 16,
            fontWeight: 400,
            letterSpacing: 0,
            lineHeight: "110%",
            color: "#8C7A66",
            textAlign: "center",
            margin: 0,
            maxWidth: 518,
            ...itemStyle(0.15),
          }}
        >
          Featuring a self-winding flyback chronograph, Travel Time display and date indication by hand coupled with local time, this complicated Nautilus marries the shimmer of rose gold with a blue sunburst dial. The chronograph movement combines tradition (column-wheel drive) and innovation (vertical disk clutch).
        </p>
      </div>
    </section>
  );
}
