"use client";

import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "../hooks/useIsMobile";

export default function ProductHeroFull() {
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

  // Hidden on mobile — images moved into ProductGallery2
  if (isMobile) return null;

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        width: "100%",
        height: 982,
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 1.0s cubic-bezier(0.25, 0.1, 0.1, 1), transform 1.0s cubic-bezier(0.25, 0.1, 0.1, 1)",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/pdp-pp-full.jpg"
        alt="Nautilus close-up"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
    </section>
  );
}
