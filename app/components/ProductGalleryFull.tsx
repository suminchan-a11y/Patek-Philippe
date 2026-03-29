"use client";

import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "../hooks/useIsMobile";

interface ProductGalleryFullProps {
  image: string;
  caption: string;
  mobileObjectPosition?: string;
  mobileAspectRatio?: string;
  mobileObjectFit?: "cover" | "contain";
}

export default function ProductGalleryFull({ image, caption, mobileObjectPosition, mobileAspectRatio, mobileObjectFit }: ProductGalleryFullProps) {
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

  if (isMobile) {
    return (
      <section
        ref={ref}
        style={{
          width: "100%",
          height: 600,
          overflow: "hidden",
          backgroundColor: mobileObjectFit === "contain" ? "#f0ede8" : undefined,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 1.0s cubic-bezier(0.25, 0.1, 0.1, 1), transform 1.0s cubic-bezier(0.25, 0.1, 0.1, 1)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: mobileObjectFit || "cover",
            objectPosition: mobileObjectPosition || "center center",
            display: "block",
          }}
        />
      </section>
    );
  }

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        width: "100%",
        height: 776,
        overflow: "hidden",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 1.0s cubic-bezier(0.25, 0.1, 0.1, 1), transform 1.0s cubic-bezier(0.25, 0.1, 0.1, 1)",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt=""
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* Bottom gradient overlay */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 340,
          background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Caption text */}
      <div
        style={{
          position: "absolute",
          bottom: 60,
          left: 80,
          maxWidth: 349,
          zIndex: 1,
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-lora), serif",
            fontSize: 16,
            fontWeight: 400,
            lineHeight: "20px",
            color: "#FFFFFF",
            margin: 0,
            whiteSpace: "pre-line",
          }}
        >
          {caption}
        </p>
      </div>
    </section>
  );
}
