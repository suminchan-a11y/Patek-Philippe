"use client";

import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "../hooks/useIsMobile";

export default function ProductGallery2() {
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

  if (isMobile) {
    return (
      <section
        ref={ref}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
          width: "100%",
        }}
      >
        {[
          { src: "/images/pdp-split-left.jpg", objectPosition: "center center" },
          { src: "/images/pdp-split-right.jpg", objectPosition: "80% center" },
          { src: "/images/pdp-pp-full.jpg", objectPosition: "center center" },
        ].map((img, i) => (
          <div
            key={img.src}
            style={{
              width: "100%",
              height: 600,
              overflow: "hidden",
              ...itemStyle(i * 0.1),
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img.src}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: img.objectPosition,
                display: "block",
              }}
            />
          </div>
        ))}
      </section>
    );
  }

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
      {/* Left Panel */}
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
          src="/images/pdp-split-left.jpg"
          alt="Nautilus detail"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>

      {/* Right Panel */}
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
          src="/images/pdp-split-right.jpg"
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
