"use client";

import { useState, useEffect, useRef } from "react";
import { useIsMobile } from "../hooks/useIsMobile";
import CollectionOverlay from "./CollectionOverlay";

type Mode = "toast" | "modal";

const MinusIcon = ({ onClick, ariaLabel }: { onClick: () => void; ariaLabel: string }) => (
  <button
    onClick={onClick}
    aria-label={ariaLabel}
    style={{
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: 5,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 24,
      height: 24,
      flexShrink: 0,
    }}
  >
    <svg width="14" height="2" viewBox="0 0 14 2" fill="none">
      <line x1="0" y1="1" x2="14" y2="1" stroke="#6A655F" strokeWidth="1" strokeLinecap="round" />
    </svg>
  </button>
);

interface ModalRect { top: number; left: number; width: number; height: number }

export default function HeroToast() {
  const isMobile = useIsMobile();
  const [inHero, setInHero] = useState(true);
  const [dismissed, setDismissed] = useState(false);
  const [ready, setReady] = useState(false);
  const [mode, setMode] = useState<Mode>("toast");
  const [modalContentVisible, setModalContentVisible] = useState(false);
  const [showCollection, setShowCollection] = useState(false);
  const [collectionRect, setCollectionRect] = useState<ModalRect | null>(null);
  const toastRef = useRef<HTMLDivElement>(null);

  // After entrance animation (2s delay + 1s animation), enable scroll control
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 3000);
    return () => clearTimeout(t);
  }, []);

  // Track hero section visibility — activates after entrance
  useEffect(() => {
    if (!ready) return;
    const heroEl = document.getElementById("hero");
    if (!heroEl) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInHero(entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(heroEl);
    return () => observer.disconnect();
  }, [ready]);

  // Fade in modal content mid-expansion (~350ms) so reveal overlaps with size animation
  useEffect(() => {
    if (mode === "modal") {
      const t = setTimeout(() => setModalContentVisible(true), 350);
      return () => clearTimeout(t);
    } else {
      setModalContentVisible(false);
    }
  }, [mode]);

  if (isMobile || dismissed) return null;

  const isModal = mode === "modal";
  const shouldShow = ready ? inHero : true;

  const handleViewCollection = () => {
    if (!toastRef.current) return;
    const rect = toastRef.current.getBoundingClientRect();
    setCollectionRect({ top: rect.top, left: rect.left, width: rect.width, height: rect.height });
    setShowCollection(true);
  };

  return (
    <>
    {showCollection && collectionRect && (
      <CollectionOverlay
        modalRect={collectionRect}
        onClose={() => {
          setShowCollection(false);
          setCollectionRect(null);
        }}
      />
    )}
    <div
      ref={toastRef}
      className={!ready ? "reveal-up-toast" : undefined}
      style={{
        position: "fixed",
        bottom: 40,
        right: 40,
        zIndex: 99,
        width: isModal ? 398 : 280,
        height: isModal ? 576 : 156,
        backgroundColor: "#EDE9E3",
        border: "0.25px solid #8C7A66",
        borderRadius: 8,
        boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
        overflow: "hidden",
        ...(ready && {
          transition:
            "width 0.7s cubic-bezier(0.16, 1, 0.3, 1), height 0.7s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s cubic-bezier(0.25, 0.1, 0.1, 1), transform 0.6s cubic-bezier(0.25, 0.1, 0.1, 1)",
          opacity: showCollection ? 0 : shouldShow ? 1 : 0,
          transform: shouldShow ? "translateY(0)" : "translateY(20px)",
          pointerEvents: showCollection || !shouldShow ? "none" : "auto",
        }),
      }}
    >
      {/* ── Toast view ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 16,
          gap: 8,
          alignItems: "flex-start",
          opacity: isModal ? 0 : 1,
          transition: "opacity 0.2s cubic-bezier(0.25, 0.1, 0.1, 1)",
          pointerEvents: isModal ? "none" : "auto",
        }}
      >
        {/* Left column: logo → title + READ MORE */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 40,
            flex: 1,
          }}
        >
          {/* THE HOUR GLASS wordmark */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logos/thg-logo.png"
            alt="The Hour Glass"
            style={{ width: 92, height: 8, objectFit: "contain", objectPosition: "left", filter: "brightness(0) saturate(0) opacity(0.5)" }}
          />

          {/* Title + CTA */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <p
              style={{
                fontFamily: "var(--font-lora), serif",
                fontSize: 16,
                fontWeight: 400,
                color: "#6A655F",
                lineHeight: "24px",
                margin: 0,
              }}
            >
              Patek Philippe at Watches and Wonders Geneva 2026
            </p>
            <span
              className="cta-link"
              onClick={() => setMode("modal")}
              style={{
                fontFamily: "var(--font-open-sans), sans-serif",
                fontSize: 12,
                fontWeight: 400,
                letterSpacing: "0.1em",
                color: "#6A655F",
                cursor: "pointer",
                alignSelf: "flex-start",
              }}
            >
              READ MORE
            </span>
          </div>
        </div>
        <MinusIcon onClick={() => setDismissed(true)} ariaLabel="Dismiss" />
      </div>

      {/* ── Modal view ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          padding: "16px 24px",
          gap: 24,
          opacity: modalContentVisible ? 1 : 0,
          transition: "opacity 0.5s cubic-bezier(0.25, 0.1, 0.1, 1)",
          pointerEvents: isModal ? "auto" : "none",
        }}
      >
        {/* Top bar — minus icon right-aligned */}
        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", height: 24 }}>
          <MinusIcon onClick={() => setMode("toast")} ariaLabel="Close modal" />
        </div>

        {/* Content */}
        <div style={{ display: "flex", flexDirection: "column", flex: 1, gap: 24 }}>
          {/* Watch image */}
          <div style={{ width: "100%", height: 294, flexShrink: 0, overflow: "hidden", borderRadius: 8 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/modal-watches-wonders.avif"
              alt="Patek Philippe 2026 Collection"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                transform: modalContentVisible ? "scale(1)" : "scale(1.08)",
                transition: "transform 1.4s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            />
          </div>

          {/* Text + CTA */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              justifyContent: "flex-end",
              alignItems: "center",
              gap: 64,
            }}
          >
            {/* Text block */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
              <div
                style={{
                  fontFamily: "var(--font-open-sans), sans-serif",
                  fontWeight: 300,
                  fontSize: 40,
                  letterSpacing: 0,
                  textTransform: "uppercase",
                  color: "#6A655F",
                  lineHeight: "110%",
                  textAlign: "center",
                }}
              >
                A new chapter
              </div>
              <p
                style={{
                  fontFamily: "var(--font-lora), serif",
                  fontSize: 14,
                  fontWeight: 400,
                  color: "#6A655F",
                  lineHeight: "140%",
                  margin: 0,
                  textAlign: "center",
                }}
              >
                The latest 2026 creations unveiled at Watches and Wonders 2026
              </p>
            </div>

            {/* CTA */}
            <span
              className="cta-toast-link"
              onClick={handleViewCollection}
              style={{
                fontFamily: "var(--font-open-sans), sans-serif",
                fontSize: 12,
                fontWeight: 400,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#6A655F",
                cursor: "pointer",
              }}
            >
              VIEW COLLECTION
            </span>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
