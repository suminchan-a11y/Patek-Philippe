"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useIsMobile } from "../hooks/useIsMobile";

const VIDEOS = [
  "https://iframe.patek.com/assets/videos/Product/Desktop_16x9/PP_Product_2025_New_Models_16x9.mp4",
  "https://iframe.patek.com/assets/videos/Institutional/Desktop_16x9/PP_institutional_Launch_Cubitus_Advertising_Campaign_16x9_60sec_EN.mp4",
  "https://iframe.patek.com/assets/videos/Product/Desktop_16x9/PP_products_Cubitus-2024_16x9.mp4",
];

export default function CollectionCarousel() {
  const isMobile = useIsMobile();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const canPrev = activeIndex > 0;
  const canNext = activeIndex < VIDEOS.length - 1;

  const goTo = useCallback(
    (index: number) => {
      if (index === activeIndex || isTransitioning) return;
      if (index < 0 || index >= VIDEOS.length) return;
      setIsTransitioning(true);
      setActiveIndex(index);
      setTimeout(() => setIsTransitioning(false), 1200);
    },
    [activeIndex, isTransitioning]
  );

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === activeIndex) {
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [activeIndex]);

  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (video) video.muted = isMuted;
    });
  }, [isMuted]);

  return (
    <section
      style={{
        backgroundColor: "#FFFFFF",
        padding: isMobile ? "24px 24px 64px 24px" : 80,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: isMobile ? 0 : 16,
          width: isMobile ? "100%" : undefined,
        }}
      >
        {/* Left arrow — hidden on mobile */}
        {!isMobile && (
          <button
            onClick={() => goTo(activeIndex - 1)}
            style={{
              width: 53,
              height: 39,
              background: "none",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: canPrev ? "pointer" : "default",
              padding: 0,
              flexShrink: 0,
            }}
          >
            <svg width="9" height="16" viewBox="0 0 9 16" fill="none">
              <path d="M8 1L1 8L8 15" stroke={canPrev ? "#000000" : "rgba(0,0,0,0.3)"} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: "stroke 0.3s ease" }} />
            </svg>
          </button>
        )}

        {/* Video area */}
        <div
          style={{
            position: "relative",
            width: isMobile ? "100%" : 1352,
            height: isMobile ? 0 : 854,
            paddingBottom: isMobile ? "130%" : undefined,
            backgroundColor: "#000000",
            overflow: "hidden",
            flexShrink: 0,
          }}
        >
          {VIDEOS.map((src, i) => (
            <video
              key={i}
              ref={(el) => { videoRefs.current[i] = el; }}
              src={src}
              muted={isMuted}
              loop
              playsInline
              preload="auto"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: i === activeIndex ? 1 : 0,
                transition: "opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
                zIndex: i === activeIndex ? 1 : 0,
              }}
            />
          ))}

          {/* Mute/Unmute */}
          <button
            onClick={() => setIsMuted((prev) => !prev)}
            style={{
              position: "absolute",
              bottom: isMobile ? 20 : 40,
              right: isMobile ? 20 : 40,
              width: 40,
              height: 40,
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              zIndex: 5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {isMuted ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M11 5L6 9H2V15H6L11 19V5Z" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M23 9L17 15" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M17 9L23 15" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M11 5L6 9H2V15H6L11 19V5Z" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15.54 8.46C16.48 9.4 17.01 10.67 17.01 12C17.01 13.33 16.48 14.6 15.54 15.54" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            )}
          </button>

          {/* Pagination dots */}
          <div
            style={{
              position: "absolute",
              bottom: isMobile ? 20 : 40,
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: 16,
              zIndex: 5,
            }}
          >
            {VIDEOS.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  backgroundColor: "#FFFFFF",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  opacity: i === activeIndex ? 1 : 0.3,
                  transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              />
            ))}
          </div>
        </div>

        {/* Right arrow — hidden on mobile */}
        {!isMobile && (
          <button
            onClick={() => goTo(activeIndex + 1)}
            style={{
              width: 53,
              height: 39,
              background: "none",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: canNext ? "pointer" : "default",
              padding: 0,
              flexShrink: 0,
            }}
          >
            <svg width="9" height="16" viewBox="0 0 9 16" fill="none">
              <path d="M1 1L8 8L1 15" stroke={canNext ? "#000000" : "rgba(0,0,0,0.3)"} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: "stroke 0.3s ease" }} />
            </svg>
          </button>
        )}
      </div>
    </section>
  );
}
