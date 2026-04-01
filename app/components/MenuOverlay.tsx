"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIsMobile } from "../hooks/useIsMobile";

const smoothEase = [0.16, 1, 0.3, 1] as const;
const overlayEase = [0.76, 0, 0.24, 1] as const;
const ease = [0.25, 0.1, 0.1, 1] as const;

const MENU_ITEMS = [
  {
    label: "Our boutique",
    subtitle: "The space, the story, and what to expect.",
    mobileSubtitle: "The space and story.",
    href: "#",
  },
  {
    label: "Collection",
    subtitle: "Timepieces crafted for those who understand.",
    mobileSubtitle: "Timepieces for those who understand.",
    href: "#",
  },
  {
    label: "Our Partnership",
    subtitle: "The Hour Glass and Patek Philippe",
    mobileSubtitle: "The Hour Glass and Patek Philippe",
    href: "#",
  },
  {
    label: "Services",
    subtitle: "Servicing, maintenance, and your Extract from the Archives",
    mobileSubtitle: "Servicing and maintenance",
    href: "#",
  },
  {
    label: "Contact",
    subtitle: "Visit, book, or arrange a private consultation",
    mobileSubtitle: "Visit and arrange a private consultation",
    href: "#",
  },
];

export default function MenuOverlay({ onClose }: { onClose: () => void }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [locationOpen, setLocationOpen] = useState(false);
  const isMobile = useIsMobile();

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
        backgroundColor: "#EDEDED",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Top nav bar */}
      <div
        style={{
          width: "100%",
          height: 64,
          padding: isMobile ? "0 24px" : "0 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: isMobile ? "flex-end" : "space-between",
          flexShrink: 0,
          position: "relative",
        }}
      >
        {/* Left — Location (desktop only) */}
        {!isMobile && (
          <div
            onClick={() => setLocationOpen((v) => !v)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              cursor: "pointer",
            }}
          >
            <svg width="14" height="17" viewBox="0 0 14 17" fill="none">
              <path
                d="M7 0C3.13 0 0 3.13 0 7C0 11.17 4.42 14.92 6.24 16.51C6.64 16.84 7.37 16.84 7.77 16.51C9.58 14.92 14 11.17 14 7C14 3.13 10.87 0 7 0ZM7 9.5C5.62 9.5 4.5 8.38 4.5 7C4.5 5.62 5.62 4.5 7 4.5C8.38 4.5 9.5 5.62 9.5 7C9.5 8.38 8.38 9.5 7 9.5Z"
                fill="#2A2723"
              />
            </svg>
            <span
              style={{
                fontFamily: "var(--font-open-sans), sans-serif",
                fontSize: 12,
                fontWeight: 400,
                letterSpacing: "0.12em",
                lineHeight: "170%",
                color: "#2A2723",
                textTransform: "uppercase",
              }}
            >
              THE GARDENS MALL, KL
            </span>
          </div>
        )}

        {/* Center — Calatrava logo (desktop only) */}
        {!isMobile && (
          <div
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logos/pp-calatrava-black.png"
              alt="Patek Philippe"
              style={{ height: 56, width: 56, objectFit: "contain" }}
            />
          </div>
        )}

        {/* Right — Close */}
        <button
          onClick={onClose}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M1 1L11 11M11 1L1 11"
              stroke="#2A2723"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
          <span
            style={{
              fontFamily: "var(--font-open-sans), sans-serif",
              fontSize: 12,
              fontWeight: 400,
              letterSpacing: "0.12em",
              lineHeight: "170%",
              color: "#2A2723",
              textTransform: "uppercase",
            }}
          >
            CLOSE
          </span>
        </button>
      </div>

      {/* Location dropdown */}
      <AnimatePresence>
        {locationOpen && (
          <>
            {/* Click-away */}
            <div
              onClick={() => setLocationOpen(false)}
              style={{ position: "fixed", inset: 0, zIndex: 260 }}
            />
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease }}
              style={{
                position: "absolute",
                top: 64,
                left: isMobile ? 24 : 40,
                width: 252,
                padding: "24px 16px",
                zIndex: 270,
                borderRadius: 4,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                  width: 220,
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-open-sans), sans-serif",
                    fontSize: 12,
                    fontWeight: 400,
                    letterSpacing: "0.12em",
                    lineHeight: "20px",
                    color: "#2A2723",
                    textTransform: "uppercase",
                    margin: 0,
                  }}
                >
                  Visit us today
                  <br />
                  10:00am - 5:00pm
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-open-sans), sans-serif",
                    fontSize: 12,
                    fontWeight: 400,
                    letterSpacing: "0.12em",
                    lineHeight: "20px",
                    color: "#2A2723",
                    textTransform: "uppercase",
                    margin: 0,
                  }}
                >
                  Lot G226-227, Ground Floor
                  <br />
                  The Gardens Mall, Medan
                  <br />
                  Syed Putra Utara, 59200
                  <br />
                  Kuala Lumpur, Malaysia
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main content — menu items centered */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          overflow: "visible",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: isMobile ? 20 : 28,
            overflow: "visible",
          }}
        >
          {MENU_ITEMS.map((item, i) => {
            const isActive = i === activeIndex;
            return (
              <motion.div
                key={item.label}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  y: { duration: 1, ease: smoothEase, delay: 0.4 + i * 0.08 },
                  opacity: { duration: 0.6, ease: smoothEase, delay: 0.4 + i * 0.08 },
                }}
              >
                <a
                  href={item.href}
                  onMouseEnter={() => setActiveIndex(i)}
                  onClick={(e) => {
                    e.preventDefault();
                    if (item.label === "Collection") {
                      onClose();
                    }
                  }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 6,
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >
                  {/* Title */}
                  <span
                    style={{
                      fontFamily: "var(--font-lora), serif",
                      fontSize: isMobile ? 32 : 40,
                      fontWeight: 400,
                      letterSpacing: "-0.02em",
                      lineHeight: "110%",
                      color: isActive ? "#2A2723" : "#C8C8C8",
                      textAlign: "center",
                      transition: "color 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  >
                    {item.label}
                  </span>

                  {/* Subtitle */}
                  <span
                    style={{
                      fontFamily: "var(--font-lora), serif",
                      fontSize: isMobile ? 14 : 15,
                      fontWeight: 400,
                      letterSpacing: "0em",
                      lineHeight: "140%",
                      color: isActive ? "#6A655F" : "#B0B0B0",
                      textAlign: "center",
                      transition: "color 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  >
                    {isMobile ? item.mobileSubtitle : item.subtitle}
                  </span>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom — social icons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: smoothEase, delay: 0.9 }}
        style={{
          padding: "0 0 40px 0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
          flexShrink: 0,
        }}
      >
        {/* Instagram */}
        <a href="#" style={{ display: "flex", width: 28, height: 28 }}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect x="3.5" y="3.5" width="21" height="21" rx="5" stroke="#2A2723" strokeWidth="1.2" />
            <circle cx="14" cy="14" r="5" stroke="#2A2723" strokeWidth="1.2" />
            <circle cx="20" cy="8" r="1.2" fill="#2A2723" />
          </svg>
        </a>

        {/* Facebook */}
        <a href="#" style={{ display: "flex", width: 24, height: 24 }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16L15.5 15H13V21.95C18.05 21.45 22 17.19 22 12Z"
              fill="#2A2723"
            />
          </svg>
        </a>
      </motion.div>
    </motion.div>
  );
}
