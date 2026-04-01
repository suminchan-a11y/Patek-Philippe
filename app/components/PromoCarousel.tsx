"use client";

import { useState, useCallback, useEffect } from "react";
import { useIsMobile } from "../hooks/useIsMobile";

const SLIDES = [
  {
    image: "/images/promo/slide-1.jpg",
    text: "Every detail in the Kuala Lumpur boutique is considered, and nothing is placed without reason. This is a space designed not to impress, but to belong - Patek Philippe Boutique at The Gardens Mall, Kuala Lumpur.",
    wide: true,
  },
  {
    image: "/images/promo/slide-2.jpg",
    text: "A city that layers its history quietly in facades, in proportions, in the things built to last. Kuala Lumpur has always understood the weight of permanence.",
    wide: false,
  },
  {
    image: "/images/promo/slide-3.jpg",
    text: "The boutique and the city share the same instinct that beauty is built through patience, layer by layer, detail by detail. - Patek Philippe Boutique at The Gardens Mall, Kuala Lumpur.",
    wide: true,
  },
  {
    image: "/images/promo/slide-4.jpg",
    text: "In Kuala Lumpur, ornament has never been decoration; it has always been devotion.",
    wide: false,
  },
];

const MOBILE_SLIDES = [
  {
    image: "/images/boutique-mobile-1.jpg",
    text: "Every detail in the Kuala Lumpur boutique is considered, and nothing is placed without reason. This is a space designed not to impress, but to belong \u2013 Patek Philippe Boutique at The Gardens Mall, Kuala Lumpur.",
  },
  {
    image: "/images/boutique-mobile-2.jpg",
    text: "A city that layers its history quietly in facades, in proportions, in the things built to last. Kuala Lumpur has always understood the weight of permanence.",
  },
  {
    image: "/images/boutique-mobile-3.jpg",
    text: "The boutique and the city share the same instinct \u2014 that beauty is built through patience, layer by layer, detail by detail.",
  },
  {
    image: "/images/boutique-mobile-4.jpg",
    text: "In Kuala Lumpur, ornament has never been decoration; it has always been devotion.",
  },
];

const captionStyle: React.CSSProperties = {
  fontFamily: "var(--font-lora), serif",
  fontSize: 16,
  fontWeight: 400,
  letterSpacing: "0.01em",
  lineHeight: "140%",
  color: "#8C7A66",
  margin: 0,
};

export default function PromoCarousel({
  scrollRef,
}: {
  scrollRef: React.RefObject<HTMLDivElement | null>;
}) {
  const isMobile = useIsMobile();
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, [scrollRef]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || !isMobile) return;
    el.addEventListener("scroll", updateScrollState, { passive: true });
    updateScrollState();
    return () => el.removeEventListener("scroll", updateScrollState);
  }, [isMobile, scrollRef, updateScrollState]);

  const scrollPrev = useCallback(() => {
    scrollRef.current?.scrollBy({ left: -368, behavior: "smooth" });
  }, [scrollRef]);

  const scrollNext = useCallback(() => {
    scrollRef.current?.scrollBy({ left: 368, behavior: "smooth" });
  }, [scrollRef]);

  if (isMobile) {
    return (
      <div style={{ backgroundColor: "#FFFFFF", width: "100%", overflow: "hidden" }}>
        <style>{`.promo-scroll::-webkit-scrollbar { display: none; }`}</style>

        {/* Navigation arrows — right aligned */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            padding: "0 24px 8px 0",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <button
              onClick={scrollPrev}
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
                <path d="M8 1L1 8L8 15" stroke={canScrollLeft ? "#000000" : "rgba(0,0,0,0.3)"} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: "stroke 0.3s ease" }} />
              </svg>
            </button>
            <button
              onClick={scrollNext}
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
                <path d="M1 1L8 8L1 15" stroke={canScrollRight ? "#000000" : "rgba(0,0,0,0.3)"} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: "stroke 0.3s ease" }} />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="promo-scroll"
          style={{
            display: "flex",
            gap: 8,
            overflowX: "auto",
            scrollBehavior: "smooth",
            scrollbarWidth: "none",
            paddingLeft: 0,
          }}
        >
          {MOBILE_SLIDES.map((slide, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0,
                width: 360,
                backgroundColor: "#FFFFFF",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={slide.image}
                alt=""
                style={{
                  width: 360,
                  height: 500,
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <div style={{ padding: "16px 16px 24px 16px" }}>
                <p
                  style={{
                    fontFamily: "var(--font-lora), serif",
                    fontSize: 14,
                    fontWeight: 400,
                    letterSpacing: "0.01em",
                    lineHeight: "140%",
                    color: "#8C7A66",
                    margin: 0,
                  }}
                >
                  {slide.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "#FFFFFF", width: "100%", overflow: "hidden" }}>
      <style>{`.promo-scroll::-webkit-scrollbar { display: none; }`}</style>
      <div
        ref={scrollRef}
        className="promo-scroll"
        style={{
          display: "flex",
          gap: 8,
          overflowX: "auto",
          scrollBehavior: "smooth",
          scrollbarWidth: "none",
        }}
      >
        {SLIDES.map((slide, i) => (
          <div
            key={i}
            style={{
              flexShrink: 0,
              width: slide.wide ? 982 : 450,
              backgroundColor: "#FFFFFF",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={slide.image}
              alt=""
              style={{
                width: "100%",
                height: 566,
                objectFit: "cover",
                display: "block",
              }}
            />
            <div
              style={{
                padding: slide.wide ? "24px 24px 32px 40px" : "24px 80px 32px 24px",
                display: "flex",
                alignItems: "flex-start",
              }}
            >
              <p style={captionStyle}>{slide.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
