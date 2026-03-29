"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useIsMobile } from "../hooks/useIsMobile";

const darkBrown = "rgb(80, 42, 34)";

const prompts = [
  "Welcome to Patek Philippe The Gardens Mall",
  "Tell me about the Calatrava",
  "Something for a milestone",
  "What makes a Grand Complications",
  "I'm curious about the Nautilus",
  "I want to begin a collection",
];

export default function SearchBar({ inline = false }: { inline?: boolean }) {
  const isMobile = useIsMobile();
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"in" | "out">("in");
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [inHero, setInHero] = useState(true);
  const dismissedRef = useRef(false);
  const [, forceRender] = useState(0);
  const prevInHeroRef = useRef(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Hide when CraftVideo section enters the viewport
  useEffect(() => {
    if (inline) return;
    const craftEl = document.getElementById("craft-video");
    if (!craftEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHidden(entry.isIntersecting);
      },
      { threshold: 0 }
    );
    observer.observe(craftEl);
    return () => observer.disconnect();
  }, [inline]);

  // Track hero visibility via scroll position
  useEffect(() => {
    if (inline) return;

    const checkHero = () => {
      const heroEl = document.getElementById("hero");
      if (!heroEl) {
        setInHero(false);
        return;
      }
      const rect = heroEl.getBoundingClientRect();
      const nowInHero = rect.bottom > window.innerHeight * 0.5;

      // Reset dismissed when hero transitions from hidden → visible
      if (nowInHero && !prevInHeroRef.current && dismissedRef.current) {
        dismissedRef.current = false;
        forceRender((n) => n + 1);
      }
      prevInHeroRef.current = nowInHero;
      setInHero(nowInHero);
    };

    checkHero();
    window.addEventListener("scroll", checkHero, { passive: true });
    return () => window.removeEventListener("scroll", checkHero);
  }, [inline]);

  const handleDismiss = useCallback(() => {
    dismissedRef.current = true;
    forceRender((n) => n + 1);
  }, []);

  const handleSubmit = () => {
    const q = query || prompts[index];
    if (q.trim()) {
      window.dispatchEvent(new CustomEvent("showLoading"));
    }
  };

  // Start/stop prompt rotation based on focus and query
  useEffect(() => {
    if (focused || query) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    intervalRef.current = setInterval(() => {
      setPhase("out");
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % prompts.length);
        setPhase("in");
      }, 500);
    }, 4000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [focused, query]);

  const dismissed = dismissedRef.current;
  const shouldHide = hidden || (!inline && dismissed && !inHero);
  const showCloseBtn = !inline && !inHero;

  return (
    <div
      className={isMobile ? undefined : "reveal-up"}
      style={{
        position: inline ? "relative" : "sticky",
        bottom: inline ? undefined : 40,
        zIndex: inline ? undefined : 100,
        width: isMobile ? 339 : 375,
        height: 56,
        marginLeft: inline ? undefined : "auto",
        marginRight: inline ? undefined : "auto",
        marginTop: inline ? undefined : -96,
      }}
    >
      {/* Close button — top right, hidden when search bar is hidden */}
      {showCloseBtn && !shouldHide && (
        <div
          onClick={handleDismiss}
          style={{
            position: "absolute",
            top: -4,
            right: -4,
            width: 16,
            height: 16,
            borderRadius: "50%",
            backgroundColor: "#000000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            zIndex: 110,
          }}
        >
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
            <line x1="1" y1="1" x2="7" y2="7" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" />
            <line x1="7" y1="1" x2="1" y2="7" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" />
          </svg>
        </div>
      )}

      {/* SearchBar pill */}
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 8,
          display: "flex",
          alignItems: "center",
          padding: "12px 21px",
          backgroundColor: "rgba(0, 0, 0, 0.60)",
          backdropFilter: "blur(50px)",
          WebkitBackdropFilter: "blur(50px)",
          boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
          border: "0.25px solid #858585",
          cursor: "pointer",
          opacity: shouldHide ? 0 : 1,
          transform: shouldHide ? "translateY(20px)" : "translateY(0)",
          transition: "opacity 0.6s cubic-bezier(0.25, 0.1, 0.1, 1), transform 0.6s cubic-bezier(0.25, 0.1, 0.1, 1)",
          pointerEvents: shouldHide ? "none" : "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            width: "100%",
          }}
        >
          {/* Input + rotating placeholder */}
          <div
            style={{
              flex: 1,
              overflow: "hidden",
              height: 20,
              position: "relative",
            }}
            onClick={() => inputRef.current?.focus()}
          >
            {/* Rotating placeholder (hidden when focused or typing) */}
            {!query && !focused && (
              <span
                onClick={() => {
                  inputRef.current?.focus();
                }}
                style={{
                  fontFamily: "var(--font-lora), serif",
                  fontSize: 14,
                  fontWeight: 400,
                  letterSpacing: 0,
                  lineHeight: "170%",
                  color: "#FFFFFF",
                  whiteSpace: "nowrap",
                  display: "block",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  cursor: "pointer",
                  opacity: phase === "in" ? 0.65 : 0,
                  transform: phase === "in" ? "translateY(0)" : "translateY(-8px)",
                  transition:
                    "opacity 0.5s cubic-bezier(0.25, 0.1, 0.1, 1), transform 0.5s cubic-bezier(0.25, 0.1, 0.1, 1)",
                }}
                onMouseEnter={(e) => {
                  if (phase === "in") e.currentTarget.style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  if (phase === "in") e.currentTarget.style.opacity = "0.65";
                }}
              >
                {prompts[index]}
              </span>
            )}
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => {
                setFocused(false);
                setQuery("");
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleSubmit();
                }
              }}
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                outline: "none",
                background: "transparent",
                fontFamily: "var(--font-lora), serif",
                fontSize: 14,
                fontWeight: 400,
                letterSpacing: 0,
                lineHeight: "170%",
                color: "#FFFFFF",
                caretColor: "#FFFFFF",
              }}
            />
          </div>

          {/* Arrow up icon */}
          <div
            onMouseDown={(e) => { e.preventDefault(); handleSubmit(); }}
            style={{
              width: 24,
              height: 24,
              borderRadius: 2,
              backgroundColor: query ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              cursor: "pointer",
              transition: "background-color 0.4s cubic-bezier(0.25, 0.1, 0.1, 1)",
            }}
          >
            <svg
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
            >
              <line
                x1="6"
                y1="13"
                x2="6"
                y2="1"
                stroke={darkBrown}
                strokeWidth="1.5"
              />
              <polyline
                points="1.5,5 6,0.5 10.5,5"
                stroke={darkBrown}
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
