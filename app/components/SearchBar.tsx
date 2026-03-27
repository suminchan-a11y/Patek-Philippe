"use client";

import { useEffect, useRef, useState } from "react";

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
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"in" | "out">("in");
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const [hidden, setHidden] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Hide when CraftVideo section enters the viewport
  useEffect(() => {
    const craftEl = document.getElementById("craft-video");
    if (!craftEl || inline) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHidden(entry.isIntersecting);
      },
      { threshold: 0 }
    );
    observer.observe(craftEl);
    return () => observer.disconnect();
  }, [inline]);

  const handleSubmit = () => {
    const q = query || prompts[index];
    if (q.trim()) {
      // Dispatch custom event for loading screen
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

  return (
    <div
      className="reveal-up"
      style={{
        position: inline ? "relative" : "sticky",
        bottom: inline ? undefined : 40,
        zIndex: inline ? undefined : 100,
        width: inline ? 375 : 326,
        height: 56,
        borderRadius: 8,
        display: "flex",
        alignItems: "center",
        padding: "12px 21px",
        marginLeft: inline ? undefined : "auto",
        marginRight: inline ? undefined : "auto",
        marginTop: inline ? undefined : -96,
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        backdropFilter: "blur(39px)",
        WebkitBackdropFilter: "blur(39px)",
        cursor: "pointer",
        opacity: !inline && hidden ? 0 : 1,
        transform: !inline && hidden ? "translateY(20px)" : "translateY(0)",
        transition: inline ? undefined : "opacity 0.6s cubic-bezier(0.25, 0.1, 0.1, 1), transform 0.6s cubic-bezier(0.25, 0.1, 0.1, 1)",
        pointerEvents: !inline && hidden ? "none" : "auto",
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
  );
}
