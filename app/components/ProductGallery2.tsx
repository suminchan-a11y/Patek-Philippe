"use client";

import { useEffect, useRef, useState } from "react";

export default function ProductGallery2() {
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
      { threshold: 0.1 }
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
        display: "flex",
        flexDirection: "row",
        gap: 8,
        width: "100%",
        height: 776,
      }}
    >
      {/* Left Panel — equal width */}
      <div
        style={{
          flex: 1,
          height: 776,
          overflow: "hidden",
          ...itemStyle(0),
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/pdp-gallery2-left.png"
          alt="Nautilus detail"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>

      {/* Right Panel — equal width */}
      <div
        style={{
          flex: 1,
          height: 776,
          overflow: "hidden",
          ...itemStyle(0.15),
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/pdp-gallery2-right.png"
          alt="Nautilus movement"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>
    </section>
  );
}
