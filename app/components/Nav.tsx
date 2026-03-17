"use client";

import { useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";
import MenuOverlay from "./MenuOverlay";

export default function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 80);
  });

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.documentElement.classList.add("lenis-stopped");
    } else {
      document.documentElement.classList.remove("lenis-stopped");
    }
    return () => {
      document.documentElement.classList.remove("lenis-stopped");
    };
  }, [menuOpen]);

  const showSolid = scrolled && !menuOpen;

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 300,
          padding: "0 48px",
          height: 72,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: showSolid ? "rgba(248,246,242,0.95)" : "transparent",
          borderBottom: showSolid ? "1px solid var(--bdr)" : "1px solid transparent",
          backdropFilter: showSolid ? "blur(20px)" : "none",
          WebkitBackdropFilter: showSolid ? "blur(20px)" : "none",
          transition: "background 0.8s ease-in-out, border-color 0.8s ease-in-out",
        }}
      >
        {/* Hamburger — top left */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 8,
            display: "flex",
            flexDirection: "column",
            gap: menuOpen ? 0 : 6,
            alignItems: "flex-start",
            position: "absolute",
            left: 48,
            width: 36,
            height: 36,
            justifyContent: "center",
          }}
        >
          <span
            style={{
              display: "block",
              width: 24,
              height: 1,
              background: menuOpen ? "#fff" : scrolled ? "var(--t1)" : "#fff",
              transition: "all 0.5s cubic-bezier(0.16,1,0.3,1)",
              transform: menuOpen ? "rotate(45deg) translate(0px, 0px)" : "none",
              position: menuOpen ? "absolute" : "relative",
            }}
          />
          <span
            style={{
              display: "block",
              width: menuOpen ? 24 : 18,
              height: 1,
              background: menuOpen ? "#fff" : scrolled ? "var(--t1)" : "#fff",
              transition: "all 0.5s cubic-bezier(0.16,1,0.3,1)",
              transform: menuOpen ? "rotate(-45deg) translate(0px, 0px)" : "none",
              position: menuOpen ? "absolute" : "relative",
            }}
          />
        </button>

        {/* Logo — top center */}
        <Link href="/" onClick={() => setMenuOpen(false)}>
          <Logo
            variant={menuOpen ? "white" : scrolled ? "black" : "white"}
            height={48}
          />
        </Link>
      </nav>

      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
