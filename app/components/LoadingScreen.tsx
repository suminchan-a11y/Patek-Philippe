"use client";

import { useEffect, useState } from "react";

const loadingTexts = [
  "Curating collections",
  "Crafting inspirations",
];

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [textIndex, setTextIndex] = useState(0);
  const [textPhase, setTextPhase] = useState<"in" | "out">("in");

  // Cycle through loading texts
  useEffect(() => {
    const interval = setInterval(() => {
      setTextPhase("out");
      setTimeout(() => {
        setTextIndex((prev) => (prev + 1) % loadingTexts.length);
        setTextPhase("in");
      }, 400);
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  // Navigate after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 4000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backgroundColor: "#000000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 40,
      }}
    >
      {/* Background image + blur */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/loading-bg.png"
        alt=""
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "blur(20px)",
          transform: "scale(1.05)",
          opacity: 0.4,
        }}
      />

      {/* Light overlay */}
      <div
        style={{
          position: "absolute",
          inset: -86,
          backgroundColor: "rgba(217, 217, 217, 0.1)",
        }}
      />
      {/* Calatrava Logo — pulsing opacity 50% → 70% → 50% */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logos/pp-loading-logo.png"
        alt="Patek Philippe"
        style={{
          position: "relative",
          zIndex: 1,
          width: 150,
          height: 150,
          objectFit: "contain",
          animation: "logoPulse 2s cubic-bezier(0.25, 0.1, 0.1, 1) infinite",
        }}
      />

      {/* Loading text — cycles between phrases */}
      <span
        style={{
          position: "relative",
          zIndex: 1,
          fontFamily: "var(--font-lora), serif",
          fontSize: 16,
          fontWeight: 400,
          letterSpacing: 0,
          lineHeight: "110%",
          color: "#FFFFFF",
          opacity: textPhase === "in" ? 0.8 : 0,
          transform: textPhase === "in" ? "translateY(0)" : "translateY(8px)",
          transition: "opacity 0.4s cubic-bezier(0.25, 0.1, 0.1, 1), transform 0.4s cubic-bezier(0.25, 0.1, 0.1, 1)",
        }}
      >
        {loadingTexts[textIndex]}
      </span>

      <style>{`
        @keyframes logoPulse {
          0% { opacity: 0.5; }
          50% { opacity: 0.7; }
          100% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}
