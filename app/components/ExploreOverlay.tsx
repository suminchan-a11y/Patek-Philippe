"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const ease = [0.25, 0.1, 0.1, 1] as const;

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
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <motion.div
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease }}
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
            transition: "opacity 0.6s cubic-bezier(0.25, 0.1, 0.1, 1)",
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
        transition={{ duration: 0.6, ease, delay: 0.4 }}
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

      {/* Collection List — left aligned */}
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
        {/* Active item — with dot */}
        {COLLECTIONS.map((item, i) => {
          const isActive = i === activeIndex;
          return (
            <motion.a
              key={item.name}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isActive ? 1 : 0.5, y: 0 }}
              transition={{
                opacity: { duration: 0.6, ease, delay: 0.3 + i * 0.08 },
                y: { duration: 0.8, ease, delay: 0.3 + i * 0.08 },
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
                display: "flex",
                alignItems: "center",
                gap: 16,
                fontFamily: "var(--font-open-sans), sans-serif",
                fontSize: 16,
                fontWeight: 400,
                letterSpacing: "0.1em",
                lineHeight: "140%",
                color: "#FFFFFF",
                textDecoration: "none",
                textTransform: "uppercase",
                cursor: "pointer",
                paddingLeft: isActive ? 0 : 22,
                transition: "padding-left 0.4s cubic-bezier(0.25, 0.1, 0.1, 1)",
              }}
              whileHover={{ opacity: 1 }}
            >
              {/* Dot — visible only for active item */}
              {isActive && (
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    backgroundColor: "#FFFFFF",
                    flexShrink: 0,
                  }}
                />
              )}
              {item.name}
            </motion.a>
          );
        })}
      </div>
    </motion.div>
  );
}
