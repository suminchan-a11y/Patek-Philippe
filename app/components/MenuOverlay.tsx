"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "../hooks/useIsMobile";

const smoothEase = [0.16, 1, 0.3, 1] as const;
const overlayEase = [0.76, 0, 0.24, 1] as const;

const MENU_ITEMS = [
  {
    label: "About us",
    subtitle: "The house, its history, and its values.",
    href: "#",
  },
  {
    label: "Collection",
    subtitle: "Timepieces crafted for those who understand.",
    href: "#",
  },
  {
    label: "Services",
    subtitle: "Care and expertise, for the long term.",
    href: "#",
  },
];

export default function MenuOverlay({ onClose }: { onClose: () => void }) {
  const [activeIndex, setActiveIndex] = useState(0);
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
      {/* Close button — top right */}
      <div
        style={{
          width: "100%",
          height: 64,
          backgroundColor: "#EDEDED",
          padding: isMobile ? "12px 24px 0 24px" : "12px 40px 0 40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            height: 40,
            padding: "8px 0",
          }}
        >
          <button
            onClick={onClose}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M4 4L12 12M12 4L4 12"
                stroke="#6A655F"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
            <span
              style={{
                fontFamily: "var(--font-open-sans), sans-serif",
                fontSize: 12,
                fontWeight: 400,
                letterSpacing: "0.05em",
                lineHeight: "170%",
                color: "#6A655F",
              }}
            >
              CLOSE
            </span>
          </button>
        </div>
      </div>

      {/* Main content area — menu items centered */}
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
            gap: isMobile ? 24 : 32,
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
                  y: { duration: 1, ease: smoothEase, delay: 0.4 + i * 0.1 },
                  opacity: { duration: 0.6, ease: smoothEase, delay: 0.4 + i * 0.1 },
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
                    gap: 8,
                    textDecoration: "none",
                    cursor: "pointer",
                    position: "relative",
                  }}
                >

                  {/* Title */}
                  <span
                    style={{
                      fontFamily: "var(--font-lora), serif",
                      fontSize: isMobile ? 40 : 54,
                      fontWeight: 400,
                      letterSpacing: i === 0 ? "0em" : "-0.02em",
                      lineHeight: "120%",
                      color: "#2A2723",
                      textAlign: "center",
                      opacity: isActive ? 1 : 0.3,
                      transition:
                        "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  >
                    {item.label}
                  </span>

                  {/* Subtitle */}
                  <span
                    style={{
                      fontFamily: "var(--font-lora), serif",
                      fontSize: isMobile ? 14 : 16,
                      fontWeight: 400,
                      letterSpacing: "0em",
                      lineHeight: "140%",
                      color: "#2A2723",
                      textAlign: "center",
                      opacity: isActive ? 0.8 : 0.3,
                      transition:
                        "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  >
                    {item.subtitle}
                  </span>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom — social icons centered */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: smoothEase, delay: 0.9 }}
        style={{
          padding: isMobile ? "0 0 40px 0" : "0 0 40px 0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 24,
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
