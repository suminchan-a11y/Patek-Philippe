"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "../hooks/useIsMobile";

/* Rolls-Royce–inspired easing: slow in, long gentle resolve */
const smoothEase = [0.16, 1, 0.3, 1] as const;
const overlayEase = [0.76, 0, 0.24, 1] as const;

const COLLECTIONS: { name: string; image: string; objectPosition?: string; transform?: string }[] = [
  { name: "AQUANAUT", image: "/images/collections/Aquanaut.avif" },
  { name: "CALATRAVA", image: "/images/collections/Calatrava.avif", transform: "scale(1.0) translateX(20%)" },
  { name: "COMPLICATIONS", image: "/images/collections/Complication.avif" },
  { name: "CUBITUS", image: "/images/collections/Cubitus.avif" },
  { name: "GOLDEN ELLIPSE", image: "/images/collections/Golden Ellipse.avif", transform: "scale(1.0) translateX(20%)" },
  { name: "GONDOLO", image: "/images/collections/Gondolo.avif" },
  { name: "GRAND COMPLICATIONS", image: "/images/collections/Grand Complication.avif", transform: "scale(1.0) translateX(20%)" },
  { name: "NAUTILUS", image: "/images/collections/Nautilus.avif", transform: "scale(1.0) translateX(20%)" },
  { name: "TWENTY-4", image: "/images/collections/Twenty-4.avif", transform: "scale(1.0) translateX(20%)" },
];

export default function ExploreOverlay({
  onClose,
}: {
  onClose: () => void;
}) {
  const isMobile = useIsMobile();
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  if (isMobile) {
    return (
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-100%" }}
        transition={{ duration: 1.2, ease: overlayEase }}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 250,
          overflow: "hidden",
          background: "linear-gradient(to bottom, #000000 0%, #000000 60%, #2B2220 100%)",
        }}
      >
        {/* Close button — top right */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: smoothEase, delay: 0.4 }}
          onClick={onClose}
          style={{
            position: "absolute",
            top: 20,
            right: 24,
            display: "flex",
            alignItems: "center",
            gap: 6,
            background: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: "var(--font-open-sans), sans-serif",
            fontSize: 12,
            fontWeight: 400,
            letterSpacing: "0.05em",
            color: "#FFFFFF",
            textTransform: "uppercase" as const,
            zIndex: 10,
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M1 1L11 11M11 1L1 11" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          CLOSE
        </motion.button>

        {/* Collection List */}
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 24px 80px 40px",
            gap: 24,
            zIndex: 5,
          }}
        >
          {COLLECTIONS.map((item, i) => {
            const staggerDelay = 0.4 + i * 0.05;
            return (
              <div key={item.name} style={{ overflow: "hidden" }}>
                <motion.a
                  href="#"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.9,
                    ease: smoothEase,
                    delay: staggerDelay,
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    if (item.name === "AQUANAUT") {
                      window.location.href = "/aquanaut";
                    }
                    onClose();
                  }}
                  style={{
                    display: "block",
                    fontFamily: "var(--font-open-sans), sans-serif",
                    fontSize: 14,
                    fontWeight: 400,
                    letterSpacing: "0.12em",
                    lineHeight: "140%",
                    color: "#FFFFFF",
                    textDecoration: "none",
                    textTransform: "uppercase",
                  }}
                >
                  {item.name}
                </motion.a>
              </div>
            );
          })}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 1.2, ease: overlayEase }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 250,
        overflow: "hidden",
      }}
    >
      {/* Background Images — crossfade */}
      {COLLECTIONS.map((item, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={item.name}
          src={item.image}
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: item.objectPosition || "center",
            transform: item.transform || "none",
            opacity: i === imageIndex ? 1 : 0,
            transition: "opacity 1s cubic-bezier(0.16, 1, 0.3, 1)",
            zIndex: i === imageIndex ? 1 : 0,
          }}
        />
      ))}
      {/* Black base */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#000000",
          zIndex: 0,
        }}
      />

      {/* Close button — top right */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: smoothEase, delay: 0.6 }}
        onClick={onClose}
        style={{
          position: "absolute",
          top: 20,
          right: 40,
          display: "flex",
          alignItems: "center",
          gap: 6,
          background: "none",
          border: "none",
          cursor: "pointer",
          fontFamily: "var(--font-open-sans), sans-serif",
          fontSize: 12,
          fontWeight: 400,
          letterSpacing: "0.05em",
          color: "#FFFFFF",
          textTransform: "uppercase" as const,
          zIndex: 5,
        }}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M1 1L11 11M11 1L1 11" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
        CLOSE
      </motion.button>

      {/* Collection List — left aligned, staggered clip-path reveal */}
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 64,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 24,
          zIndex: 5,
        }}
      >
        {COLLECTIONS.map((item, i) => {
          const isActive = i === activeIndex;
          const staggerDelay = 0.5 + i * 0.07;
          return (
            /* Clip mask — overflow hidden creates the reveal boundary */
            <div
              key={item.name}
              style={{
                overflow: "hidden",
                paddingBottom: 4,
              }}
            >
              {/* Text slides up from 100% below the mask */}
              <motion.a
                href="#"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.9,
                  ease: smoothEase,
                  delay: staggerDelay,
                }}
                onMouseEnter={() => {
                  setActiveIndex(i);
                  setImageIndex(i);
                }}
                onClick={(e) => {
                  e.preventDefault();
                  if (item.name === "AQUANAUT") {
                    window.location.href = "/aquanaut";
                    return;
                  }
                  setImageIndex(i);
                }}
                style={{
                  position: "relative",
                  display: "block",
                  paddingLeft: 22,
                  fontFamily: "var(--font-open-sans), sans-serif",
                  fontSize: 16,
                  fontWeight: 400,
                  letterSpacing: "0.12em",
                  lineHeight: "140%",
                  color: "#FFFFFF",
                  textDecoration: "none",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  opacity: isActive ? 1 : 0.4,
                  transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                {/* Dot — absolutely positioned, doesn't shift text */}
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    backgroundColor: "#FFFFFF",
                    opacity: isActive ? 1 : 0,
                    transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                />
                {item.name}
              </motion.a>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
