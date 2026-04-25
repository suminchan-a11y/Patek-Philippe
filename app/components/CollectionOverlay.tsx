"use client";

import { useEffect, useRef, useCallback } from "react";
import Lenis from "lenis";
import Collection2026Grid from "./Collection2026Grid";

interface ModalRect {
  top: number;
  left: number;
  width: number;
  height: number;
}

interface Props {
  onClose: () => void;
  modalRect: ModalRect;
}

export default function CollectionOverlay({ onClose, modalRect }: Props) {
  const outerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const phaseRef = useRef<"entering" | "active" | "leaving">("entering");
  const lenisRef = useRef<Lenis | null>(null);

  const getModalClip = useCallback(() => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const t = Math.round(modalRect.top);
    const r = Math.round(vw - modalRect.left - modalRect.width);
    const b = Math.round(vh - modalRect.top - modalRect.height);
    const l = Math.round(modalRect.left);
    return `inset(${t}px ${r}px ${b}px ${l}px round 8px)`;
  }, [modalRect]);

  // Entrance clip-path animation
  useEffect(() => {
    const el = outerRef.current;
    if (!el) return;

    el.style.transition = "none";
    el.style.clipPath = getModalClip();
    el.getBoundingClientRect();

    let timer: ReturnType<typeof setTimeout>;
    const raf = requestAnimationFrame(() => {
      el.style.transition = "clip-path 0.85s cubic-bezier(0.16, 1, 0.3, 1)";
      el.style.clipPath = "inset(20px round 8px)";
      timer = setTimeout(() => { phaseRef.current = "active"; }, 850);
    });

    return () => { cancelAnimationFrame(raf); clearTimeout(timer); };
  }, [getModalClip]);

  // Scoped Lenis instance for the overlay scroll container
  useEffect(() => {
    const wrapper = scrollRef.current;
    const content = contentRef.current;
    if (!wrapper || !content) return;

    const lenis = new Lenis({
      wrapper,
      content,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    lenis.on("scroll", ({ scroll }: { scroll: number }) => {
      if (phaseRef.current !== "active") return;
      const el = outerRef.current;
      if (!el) return;

      const progress = Math.min(1, scroll / 120);
      const pad = 20 * (1 - progress);
      const rad = 8 * (1 - progress);

      el.style.transition = "none";
      el.style.clipPath = pad < 0.5
        ? "inset(0px round 0px)"
        : `inset(${pad}px round ${rad}px)`;
    });

    let rafId: number;
    function tick(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(tick);
    }
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const handleClose = useCallback(() => {
    if (phaseRef.current === "leaving") return;
    phaseRef.current = "leaving";

    const el = outerRef.current;
    if (!el) return;

    lenisRef.current?.stop();

    requestAnimationFrame(() => {
      el.style.transition = "clip-path 0.75s cubic-bezier(0.25, 0.1, 0.1, 1)";
      el.style.clipPath = getModalClip();

      setTimeout(() => {
        if (scrollRef.current) scrollRef.current.scrollTop = 0;
        onClose();
      }, 750);
    });
  }, [getModalClip, onClose]);

  return (
    <div
      ref={outerRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
      }}
    >
      {/* Floating dismiss button */}
      <button
        onClick={handleClose}
        aria-label="Close collection"
        style={{
          position: "absolute",
          top: 24,
          right: 24,
          zIndex: 10,
          background: "rgba(0,0,0,0.25)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          border: "none",
          borderRadius: "50%",
          cursor: "pointer",
          width: 36,
          height: 36,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="16" height="2" viewBox="0 0 16 2" fill="none">
          <line x1="0" y1="1" x2="16" y2="1" stroke="rgba(237,233,227,0.9)" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>

      {/* Scroll container */}
      <div
        ref={scrollRef}
        data-lenis-prevent
        style={{
          position: "absolute",
          inset: 0,
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        {/* Single content wrapper required for scoped Lenis */}
        <div ref={contentRef}>
          {/* Hero */}
          <section
            style={{
              position: "relative",
              width: "100%",
              height: 812,
              overflow: "hidden",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/collection-2026/hero.jpg"
              alt="Patek Philippe 2026 Collection"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </section>

          {/* Watch grid — includes intro header */}
          <Collection2026Grid />
        </div>
      </div>
    </div>
  );
}
