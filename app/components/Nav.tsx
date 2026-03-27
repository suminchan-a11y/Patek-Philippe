"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ExploreOverlay from "./ExploreOverlay";

const LOCATIONS = [
  "PAVILION, KUALA LUMPUR",
  "SINGAPORE",
  "BANGKOK",
  "JAPAN",
  "HONG KONG",
  "AUSTRALIA",
];

const ease = [0.25, 0.1, 0.1, 1] as const;

export default function Nav() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [inHero, setInHero] = useState(false);
  const lastScrollY = useRef(0);

  // Track whether we're in the hero section
  useEffect(() => {
    const heroEl = document.getElementById("hero");
    if (!heroEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInHero(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    observer.observe(heroEl);
    return () => observer.disconnect();
  }, []);

  // Hide nav on scroll down, show on scroll up
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y > lastScrollY.current && y > 64) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleDropdown = useCallback(() => {
    setDropdownOpen((prev) => !prev);
  }, []);

  const closeDropdown = useCallback(() => {
    setDropdownOpen(false);
  }, []);

  const openExplore = useCallback(() => {
    setExploreOpen(true);
    setDropdownOpen(false);
  }, []);

  const closeExplore = useCallback(() => {
    setExploreOpen(false);
  }, []);

  // Dynamic colors based on hero state — layout is the same
  const textColor = inHero ? "#FFFFFF" : "#000000";
  const bgColor = inHero ? "transparent" : "#FFFFFF";
  const logoSrc = inHero ? "/logos/pp-nav-logo-white-lg.png" : "/logos/pp-nav-logo.png";

  const navTextStyle: React.CSSProperties = {
    fontFamily: "var(--font-open-sans), sans-serif",
    fontSize: 12,
    fontWeight: 400,
    letterSpacing: "0.05em",
    lineHeight: "20px",
    color: textColor,
    textDecoration: "none",
    whiteSpace: "nowrap",
    textTransform: "uppercase",
    transition: "color 0.6s cubic-bezier(0.25, 0.1, 0.1, 1)",
  };

  return (
    <>
      {/* Blur Overlay when dropdown open */}
      <AnimatePresence>
        {dropdownOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease }}
            onClick={closeDropdown}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 150,
              backdropFilter: "blur(7.5px)",
              WebkitBackdropFilter: "blur(7.5px)",
              backgroundColor: "rgba(0,0,0,0.05)",
            }}
          />
        )}
      </AnimatePresence>

      {/* Nav Bar — always 88px, 56px logo */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 88,
          zIndex: 200,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: inHero ? "16px 40px" : "8px 40px",
          backgroundColor: bgColor,
          transform: exploreOpen || hidden ? "translateY(-100%)" : "translateY(0)",
          transition: "transform 0.6s cubic-bezier(0.25, 0.1, 0.1, 1), background-color 0.6s cubic-bezier(0.25, 0.1, 0.1, 1)",
        }}
      >
        {/* Inner row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            height: 56,
          }}
        >
          {/* Left: Location icon + text */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            {inHero ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src="/logos/location-white.png"
                alt=""
                style={{ width: 16, height: 16, flexShrink: 0, objectFit: "contain" }}
              />
            ) : (
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                style={{ flexShrink: 0 }}
              >
                <path
                  d="M8 1.5C5.51 1.5 3.5 3.51 3.5 6C3.5 9.25 8 14.5 8 14.5C8 14.5 12.5 9.25 12.5 6C12.5 3.51 10.49 1.5 8 1.5Z"
                  fill="#000000"
                  stroke="#000000"
                  strokeWidth="0.75"
                />
                <circle cx="8" cy="6" r="2" fill="#FFFFFF" stroke="#000000" strokeWidth="0.75" />
              </svg>
            )}

            <span
              className="nav-link-hover"
              onClick={toggleDropdown}
              style={{
                ...navTextStyle,
                cursor: "pointer",
              }}
            >
              THE GARDENS MALL, KL
            </span>
          </div>

          {/* Center: Calatrava Logo — 56×56 */}
          <a
            href="/"
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              width: 56,
              height: 56,
              display: "block",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logoSrc}
              alt="Patek Philippe"
              style={{
                width: 56,
                height: 56,
                objectFit: "contain",
              }}
            />
          </a>

          {/* Right: + COLLECTION + hamburger */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
            }}
          >
            <a
              href="#"
              className="nav-link-hover"
              onClick={(e) => {
                e.preventDefault();
                openExplore();
              }}
              style={{
                ...navTextStyle,
                display: "flex",
                alignItems: "center",
                gap: 4,
                cursor: "pointer",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                style={{ flexShrink: 0 }}
              >
                <path
                  d="M8 2.5V13.5M2.5 8H13.5"
                  stroke={textColor}
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  style={{ transition: "stroke 0.6s cubic-bezier(0.25, 0.1, 0.1, 1)" }}
                />
              </svg>
              COLLECTION
            </a>

            {/* Hamburger icon */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              style={{ flexShrink: 0, cursor: "pointer" }}
              onClick={openExplore}
            >
              <line x1="4" y1="6" x2="16" y2="6" stroke={textColor} strokeWidth="0.75" style={{ transition: "stroke 0.6s cubic-bezier(0.25, 0.1, 0.1, 1)" }} />
              <line x1="4" y1="10" x2="16" y2="10" stroke={textColor} strokeWidth="0.75" style={{ transition: "stroke 0.6s cubic-bezier(0.25, 0.1, 0.1, 1)" }} />
              <line x1="4" y1="14" x2="16" y2="14" stroke={textColor} strokeWidth="0.75" style={{ transition: "stroke 0.6s cubic-bezier(0.25, 0.1, 0.1, 1)" }} />
            </svg>
          </div>
        </div>

        {/* Dropdown Panel */}
        <AnimatePresence>
          {dropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease }}
              style={{
                position: "absolute",
                top: 88,
                left: 40,
                width: 260,
                padding: "0 16px 16px 16px",
                zIndex: 300,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                {LOCATIONS.map((loc) => (
                  <a
                    key={loc}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      closeDropdown();
                    }}
                    style={{
                      ...navTextStyle,
                      color: "#FFFFFF",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    {loc}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Explore Collection Overlay */}
      <AnimatePresence>
        {exploreOpen && <ExploreOverlay onClose={closeExplore} />}
      </AnimatePresence>
    </>
  );
}
