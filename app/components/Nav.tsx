"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ExploreOverlay from "./ExploreOverlay";
import MenuOverlay from "./MenuOverlay";
import { useIsMobile } from "../hooks/useIsMobile";

const ease = [0.25, 0.1, 0.1, 1] as const;

export default function Nav() {
  const isMobile = useIsMobile();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [inHero, setInHero] = useState(true);
  const lastScrollY = useRef(0);

  // Combined scroll handler: hero detection + hide on scroll down
  useEffect(() => {
    const checkHero = () => {
      const heroEl = document.getElementById("hero");
      if (!heroEl) {
        setInHero(false);
        return;
      }
      const rect = heroEl.getBoundingClientRect();
      // Hero is "active" when its bottom is below the nav bar
      setInHero(rect.bottom > (isMobile ? 56 : 64));
    };

    const onScroll = () => {
      const y = window.scrollY;
      // Hide/show nav on scroll direction
      if (y > lastScrollY.current && y > 64) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY.current = y;
      checkHero();
    };

    // Initial check after mount
    checkHero();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMobile]);

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

  const openMenu = useCallback(() => {
    setMenuOpen(true);
    setDropdownOpen(false);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  // Dynamic colors based on hero state — layout is the same
  const textColor = inHero ? "#FFFFFF" : "#000000";
  const bgColor = inHero ? "transparent" : "#FFFFFF";
  const logoSrc = inHero ? "/logos/pp-nav-logo-white-lg.png" : "/logos/pp-nav-logo.png";

  const navTextStyle: React.CSSProperties = {
    fontFamily: "var(--font-open-sans), sans-serif",
    fontSize: 12,
    fontWeight: 400,
    letterSpacing: "0.12em",
    lineHeight: "20px",
    color: textColor,
    textDecoration: "none",
    whiteSpace: "nowrap",
    textTransform: "uppercase",
    transition: "color 0.6s cubic-bezier(0.25, 0.1, 0.1, 1)",
  };

  return (
    <>
      {/* Blur overlay when dropdown open */}
      <AnimatePresence>
        {dropdownOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease }}
            onClick={closeDropdown}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 150,
              backdropFilter: "blur(15px)",
              WebkitBackdropFilter: "blur(15px)",
              backgroundColor: "rgba(0,0,0,0.05)",
            }}
          />
        )}
      </AnimatePresence>

      {/* Nav Bar */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: isMobile ? 56 : 64,
          zIndex: 200,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: isMobile ? "20px 24px" : (inHero ? "16px 40px" : "8px 40px"),
          backgroundColor: bgColor,
          transform: exploreOpen || menuOpen || hidden ? "translateY(-100%)" : "translateY(0)",
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
            height: isMobile ? 32 : 56,
          }}
        >
          {/* Left: Location icon + text (text hidden on mobile) */}
          <div
            onClick={toggleDropdown}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              cursor: "pointer",
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

            {!isMobile && (
              <span
                className="nav-link-hover"
                style={{
                  ...navTextStyle,
                  cursor: "pointer",
                }}
              >
                THE GARDENS MALL, KL
              </span>
            )}
          </div>

          {/* Center: Calatrava Logo */}
          <a
            href="/"
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              width: isMobile ? 32 : 56,
              height: isMobile ? 32 : 56,
              display: "block",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logoSrc}
              alt="Patek Philippe"
              style={{
                width: isMobile ? 32 : 56,
                height: isMobile ? 32 : 56,
                objectFit: "contain",
              }}
            />
          </a>

          {/* Right: + COLLECTION + hamburger (text hidden on mobile) */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: isMobile ? 12 : 16,
            }}
          >
            {!isMobile && (
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
            )}

            {/* Hamburger icon */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              style={{ flexShrink: 0, cursor: "pointer" }}
              onClick={openMenu}
            >
              <line x1="4" y1="6" x2="16" y2="6" stroke={textColor} strokeWidth="0.75" style={{ transition: "stroke 0.6s cubic-bezier(0.25, 0.1, 0.1, 1)" }} />
              <line x1="4" y1="10" x2="16" y2="10" stroke={textColor} strokeWidth="0.75" style={{ transition: "stroke 0.6s cubic-bezier(0.25, 0.1, 0.1, 1)" }} />
              <line x1="4" y1="14" x2="16" y2="14" stroke={textColor} strokeWidth="0.75" style={{ transition: "stroke 0.6s cubic-bezier(0.25, 0.1, 0.1, 1)" }} />
            </svg>
          </div>
        </div>

      </nav>

      {/* Dropdown Panel — outside nav to avoid stacking context issues */}
      <AnimatePresence>
        {dropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease }}
            style={{
              position: "fixed",
              top: isMobile ? 32 : 54,
              left: isMobile ? 10 : 40,
              width: 252,
              padding: isMobile ? "32px 16px 24px 10px" : "24px 16px",
              zIndex: 201,
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
              {isMobile && (
                <p
                  style={{
                    fontFamily: "var(--font-open-sans), sans-serif",
                    fontSize: 12,
                    fontWeight: 400,
                    letterSpacing: "0.12em",
                    lineHeight: "20px",
                    color: "#FFFFFF",
                    textTransform: "uppercase",
                    margin: 0,
                  }}
                >
                  The Gardens Mall, KL
                </p>
              )}
              <p
                style={{
                  fontFamily: "var(--font-open-sans), sans-serif",
                  fontSize: 12,
                  fontWeight: 400,
                  letterSpacing: "0.12em",
                  lineHeight: "20px",
                  color: "#FFFFFF",
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
                  color: "#FFFFFF",
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
        )}
      </AnimatePresence>

      {/* Explore Collection Overlay */}
      <AnimatePresence>
        {exploreOpen && <ExploreOverlay onClose={closeExplore} />}
      </AnimatePresence>

      {/* Menu Overlay */}
      <AnimatePresence>
        {menuOpen && <MenuOverlay onClose={closeMenu} />}
      </AnimatePresence>
    </>
  );
}
