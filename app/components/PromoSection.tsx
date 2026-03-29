"use client";

import { useRef, useCallback, useState, useEffect } from "react";
import PromoHeader from "./PromoHeader";
import PromoArrows from "./PromoArrows";
import PromoCarousel from "./PromoCarousel";

const SCROLL_AMOUNT = 510;

export default function PromoSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState, { passive: true });
    updateScrollState();
    return () => el.removeEventListener("scroll", updateScrollState);
  }, [updateScrollState]);

  const scrollPrev = useCallback(() => {
    scrollRef.current?.scrollBy({ left: -SCROLL_AMOUNT, behavior: "smooth" });
  }, []);

  const scrollNext = useCallback(() => {
    scrollRef.current?.scrollBy({ left: SCROLL_AMOUNT, behavior: "smooth" });
  }, []);

  return (
    <>
      <PromoHeader />
      <PromoArrows
        onPrev={scrollPrev}
        onNext={scrollNext}
        canScrollLeft={canScrollLeft}
        canScrollRight={canScrollRight}
      />
      <PromoCarousel scrollRef={scrollRef} />
    </>
  );
}
