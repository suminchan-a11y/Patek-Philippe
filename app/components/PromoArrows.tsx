"use client";

import { useIsMobile } from "../hooks/useIsMobile";

export default function PromoArrows({
  onPrev,
  onNext,
  canScrollLeft = false,
  canScrollRight = true,
}: {
  onPrev?: () => void;
  onNext?: () => void;
  canScrollLeft?: boolean;
  canScrollRight?: boolean;
}) {
  const isMobile = useIsMobile();

  if (isMobile) return null;

  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        padding: "0 80px 24px 80px",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 8,
          alignItems: "center",
        }}
      >
        {/* Left arrow */}
        <button
          onClick={onPrev}
          style={{
            width: 53,
            height: 39,
            background: "none",
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: canScrollLeft ? "pointer" : "default",
            padding: 0,
          }}
        >
          <svg width="9" height="16" viewBox="0 0 9 16" fill="none">
            <path
              d="M8 1L1 8L8 15"
              stroke={canScrollLeft ? "#000000" : "rgba(0,0,0,0.3)"}
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ transition: "stroke 0.3s ease" }}
            />
          </svg>
        </button>

        {/* Right arrow */}
        <button
          onClick={onNext}
          style={{
            width: 53,
            height: 39,
            background: "none",
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: canScrollRight ? "pointer" : "default",
            padding: 0,
          }}
        >
          <svg width="9" height="16" viewBox="0 0 9 16" fill="none">
            <path
              d="M1 1L8 8L1 15"
              stroke={canScrollRight ? "#000000" : "rgba(0,0,0,0.3)"}
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ transition: "stroke 0.3s ease" }}
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
