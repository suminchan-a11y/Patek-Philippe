"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Nav from "../../components/Nav";
import AppointmentCTA from "../../components/AppointmentCTA";
import Footer from "../../components/Footer";
import { useIsMobile } from "../../hooks/useIsMobile";

/* ─────────────────────────────────────────
   Shared animation helpers
───────────────────────────────────────── */
const revealStyle = (delay: number): React.CSSProperties => ({
  opacity: 0,
  transform: "translateY(40px)",
  animation: `revealUp 1.0s cubic-bezier(0.25, 0.1, 0.1, 1) ${delay}s forwards`,
});

/* ─────────────────────────────────────────
   PRODUCT GALLERY (hero carousel)
───────────────────────────────────────── */
const heroImages = [
  "/images/aq-pdp/hero.jpg",
  "/images/aq-pdp/gallery-2.jpg",
  "/images/aq-pdp/gallery-3.jpg",
];
const thumbImages = [
  "/images/aq-pdp/thumb-1.jpg",
  "/images/aq-pdp/thumb-2.jpg",
  "/images/aq-pdp/thumb-3.jpg",
];

function AquanautProductGallery({ isMobile }: { isMobile: boolean }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () =>
    setActiveIndex((i) => (i - 1 + heroImages.length) % heroImages.length);
  const next = () =>
    setActiveIndex((i) => (i + 1) % heroImages.length);

  if (isMobile) {
    return (
      <section
        id="hero"
        style={{
          position: "relative",
          width: "100%",
          height: 750,
          overflow: "hidden",
          ...revealStyle(0.1),
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          src="/images/aq-pdp/hero-video.mp4"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center center",
            display: "block",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.2)",
          }}
        />
      </section>
    );
  }

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        width: "100%",
        height: 776,
        overflow: "hidden",
        ...revealStyle(0.1),
      }}
    >
      {/* Hero media — video first, then images with crossfade */}
      <video
        autoPlay
        loop
        muted
        playsInline
        src="/images/aq-pdp/hero-video.mp4"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: activeIndex === 0 ? 1 : 0,
          transition: "opacity 0.8s cubic-bezier(0.25, 0.1, 0.1, 1)",
          zIndex: activeIndex === 0 ? 1 : 0,
        }}
      />
      {heroImages.slice(1).map((src, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={src}
          src={src}
          alt={`Aquanaut 5164G-001 view ${i + 2}`}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: i + 1 === activeIndex ? 1 : 0,
            transition: "opacity 0.8s cubic-bezier(0.25, 0.1, 0.1, 1)",
            zIndex: i + 1 === activeIndex ? 1 : 0,
          }}
        />
      ))}

      {/* Navigation overlay — bottom right: thumbnails LEFT, arrows RIGHT */}
      <div
        style={{
          position: "absolute",
          bottom: 80,
          right: 64,
          display: "flex",
          alignItems: "center",
          zIndex: 2,
        }}
      >
        {/* Thumbnails */}
        <div style={{ display: "flex", gap: 12 }}>
          {thumbImages.map((thumb, i) => (
            <div
              key={thumb}
              onClick={() => setActiveIndex(i)}
              style={{
                width: 72,
                height: 56,
                position: "relative",
                cursor: "pointer",
                overflow: "hidden",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={thumb}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              {i !== activeIndex && (
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "rgba(0,0,0,0.2)",
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Arrow buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginLeft: 25 }}>
          <button
            onClick={prev}
            style={{
              width: 53,
              height: 39,
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 0,
            }}
          >
            <svg width="9" height="16" viewBox="0 0 9 16" fill="none">
              <path
                d="M8 1L1 8L8 15"
                stroke="#FFFFFF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={next}
            style={{
              width: 53,
              height: 39,
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 0,
            }}
          >
            <svg width="9" height="16" viewBox="0 0 9 16" fill="none">
              <path
                d="M1 1L8 8L1 15"
                stroke="#FFFFFF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   PRODUCT INFO
───────────────────────────────────────── */
function AquanautProductInfo({ isMobile }: { isMobile: boolean }) {
  const [hovered, setHovered] = useState(false);

  if (isMobile) {
    return (
      <section
        style={{
          width: "100%",
          padding: "40px 24px",
          display: "flex",
          flexDirection: "column",
          gap: 24,
          ...revealStyle(0.25),
        }}
      >
        {/* Name + Model row */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-open-sans), sans-serif",
              fontSize: 16,
              fontWeight: 400,
              letterSpacing: "0.12em",
              lineHeight: "110%",
              color: "#8C7A66",
              textTransform: "uppercase",
            }}
          >
            Aquanaut
          </span>
          <span
            style={{
              fontFamily: "var(--font-open-sans), sans-serif",
              fontSize: 24,
              fontWeight: 400,
              letterSpacing: "0.12em",
              lineHeight: "100%",
              color: "#8C7A66",
            }}
          >
            5164G-001
          </span>
        </div>

        {/* Specs row */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <span
              style={{
                fontFamily: "var(--font-open-sans), sans-serif",
                fontSize: 12,
                fontWeight: 400,
                letterSpacing: "0.12em",
                lineHeight: "110%",
                color: "#626262",
                textTransform: "uppercase" as const,
              }}
            >
              Case Size
            </span>
            <span
              style={{
                fontFamily: "var(--font-open-sans), sans-serif",
                fontSize: 12,
                fontWeight: 400,
                letterSpacing: "0.12em",
                lineHeight: "110%",
                color: "#626262",
                textTransform: "uppercase" as const,
              }}
            >
              Case Material
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <span
              style={{
                fontFamily: "var(--font-lora), serif",
                fontSize: 12,
                fontWeight: 400,
                lineHeight: "100%",
                color: "#626262",
              }}
            >
              42.2mm
            </span>
            <span
              style={{
                fontFamily: "var(--font-lora), serif",
                fontSize: 12,
                fontWeight: 400,
                lineHeight: "100%",
                color: "#626262",
              }}
            >
              White Gold
            </span>
          </div>
        </div>

        {/* CTA Button — full width */}
        <button
          style={{
            width: "100%",
            height: 68,
            borderRadius: 2,
            backgroundColor: "#533833",
            border: "none",
            cursor: "pointer",
            fontFamily: "var(--font-open-sans), sans-serif",
            fontSize: 16,
            fontWeight: 400,
            letterSpacing: "0.12em",
            lineHeight: "20px",
            color: "#FFFFFF",
            textTransform: "uppercase",
          }}
        >
          Schedule an Appointment
        </button>
      </section>
    );
  }

  return (
    <section
      style={{
        width: "100%",
        padding: "32px 64px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        ...revealStyle(0.25),
      }}
    >
      {/* Left: Name + Model */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <span
          style={{
            fontFamily: "var(--font-open-sans), sans-serif",
            fontSize: 16,
            fontWeight: 400,
            letterSpacing: "0.12em",
            lineHeight: "140%",
            color: "#8C7A66",
            textTransform: "uppercase",
          }}
        >
          Aquanaut
        </span>
        <span
          style={{
            fontFamily: "var(--font-open-sans), sans-serif",
            fontSize: 40,
            fontWeight: 300,
            letterSpacing: "0.12em",
            lineHeight: "100%",
            color: "#8C7A66",
          }}
        >
          5164G-001
        </span>
      </div>

      {/* Right: Specs + CTA */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 206,
        }}
      >
        {/* Specs Grid */}
        <div style={{ display: "flex", flexDirection: "row", gap: 8 }}>
          {/* Labels column */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              width: 180,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-open-sans), sans-serif",
                fontSize: 12,
                fontWeight: 400,
                letterSpacing: "0.12em",
                lineHeight: "100%",
                color: "#626262",
                opacity: 0.8,
                textTransform: "uppercase",
              }}
            >
              Case Size
            </span>
            <span
              style={{
                fontFamily: "var(--font-open-sans), sans-serif",
                fontSize: 12,
                fontWeight: 400,
                letterSpacing: "0.12em",
                lineHeight: "100%",
                color: "#626262",
                opacity: 0.8,
                textTransform: "uppercase",
              }}
            >
              Case Material
            </span>
          </div>

          {/* Values column */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              width: 180,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-lora), serif",
                fontSize: 12,
                fontWeight: 400,
                lineHeight: "100%",
                color: "#626262",
              }}
            >
              42.2mm
            </span>
            <span
              style={{
                fontFamily: "var(--font-lora), serif",
                fontSize: 12,
                fontWeight: 400,
                lineHeight: "100%",
                color: "#626262",
              }}
            >
              White Gold
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            width: 353,
            height: 68,
            borderRadius: 4,
            backgroundColor: hovered ? "#2B1C1A" : "#533833",
            border: "none",
            cursor: "pointer",
            fontFamily: "var(--font-open-sans), sans-serif",
            fontSize: 16,
            fontWeight: 400,
            letterSpacing: "0.12em",
            color: "#FFFFFF",
            textTransform: "uppercase",
            transition: "background-color 0.4s cubic-bezier(0.25, 0.1, 0.1, 1)",
          }}
        >
          Schedule an Appointment
        </button>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   GALLERY FULL (full-bleed image + caption)
───────────────────────────────────────── */
interface GalleryFullProps {
  image: string;
  caption: string;
  mobileObjectPosition?: string;
  mobileObjectFit?: "cover" | "contain";
}

function AquanautGalleryFull({
  image,
  caption,
  mobileObjectPosition,
  mobileObjectFit,
}: GalleryFullProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <section
        ref={ref}
        style={{
          width: "100%",
          height: 600,
          overflow: "hidden",
          backgroundColor:
            mobileObjectFit === "contain" ? "#f0ede8" : undefined,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
          transition:
            "opacity 1.0s cubic-bezier(0.25, 0.1, 0.1, 1), transform 1.0s cubic-bezier(0.25, 0.1, 0.1, 1)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: mobileObjectFit || "cover",
            objectPosition: mobileObjectPosition || "center center",
            display: "block",
          }}
        />
      </section>
    );
  }

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        width: "100%",
        height: 776,
        overflow: "hidden",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition:
          "opacity 1.0s cubic-bezier(0.25, 0.1, 0.1, 1), transform 1.0s cubic-bezier(0.25, 0.1, 0.1, 1)",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt=""
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      {/* Bottom gradient overlay */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 340,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)",
        }}
      />
      {/* Caption */}
      <div
        style={{
          position: "absolute",
          bottom: 60,
          left: 80,
          maxWidth: 349,
          zIndex: 1,
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-lora), serif",
            fontSize: 16,
            fontWeight: 400,
            lineHeight: "20px",
            color: "#FFFFFF",
            margin: 0,
            whiteSpace: "pre-line",
          }}
        >
          {caption}
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   WATCH CHARACTERISTICS (accordion)
───────────────────────────────────────── */
const SPEC_ROWS = [
  {
    label: "Dial",
    content:
      "Blue-gray, horizontally embossed with \"Aquanaut\" pattern. White gold applied baton-style hour markers with white luminescent coating. Local time hand: white gold rounded baton-style with white luminescent coating. Home time hand: white gold skeletonized rounded baton-style.",
  },
  {
    label: "Case",
    content:
      "White gold. Sapphire-crystal case back. Water resistant to 120\u00A0m. Diameter: 42.2\u00A0mm. Height: 11.27\u00A0mm.",
  },
  {
    label: "Bracelet",
    content:
      "Blue-gray composite strap with Aquanaut pattern. White gold patented fold-over clasp. Integrated design ensuring seamless visual continuity between case and strap.",
  },
  {
    label: "Movement",
    content:
      "Caliber 324 S C FUS. Self-winding mechanical movement. Dual time zone with Travel Time display — local and home time with date indexed to local time. Gyromax\u00AE balance wheel. Parachutor\u2122 shock absorber.",
  },
  {
    label: "Instruction for Use",
    content:
      "Crown position 0: winding. Crown position 1: date correction. Crown position 2: time setting. Pushers at 10 o\u2019clock: local time zone adjustment forward. Pushers at 8 o\u2019clock: local time zone adjustment backward.",
  },
];

function AccordionRow({
  row,
  isOpen,
  onToggle,
  style,
}: {
  row: { label: string; content: string };
  isOpen: boolean;
  onToggle: () => void;
  style?: React.CSSProperties;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  const measure = useCallback(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  return (
    <div style={{ display: "flex", flexDirection: "column", ...style }}>
      {/* Label row */}
      <button
        onClick={onToggle}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          background: "none",
          border: "none",
          padding: 0,
          cursor: "pointer",
          width: "100%",
          textAlign: "left",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-open-sans), sans-serif",
            fontSize: 16,
            fontWeight: 400,
            letterSpacing: "0.12em",
            lineHeight: "110%",
            color: "#8C7A66",
            textTransform: "uppercase",
          }}
        >
          {row.label}
        </span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.4s cubic-bezier(0.25, 0.1, 0.1, 1)",
            flexShrink: 0,
          }}
        >
          <path
            d="M5 8L10 13L15 8"
            stroke="#8C7A66"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Expanding content */}
      <div
        style={{
          height: isOpen ? height : 0,
          overflow: "hidden",
          transition: "height 0.6s cubic-bezier(0.25, 0.1, 0.1, 1)",
        }}
      >
        <div ref={contentRef} style={{ paddingTop: 16 }}>
          <p
            style={{
              fontFamily: "var(--font-lora), serif",
              fontSize: 16,
              fontWeight: 400,
              lineHeight: "110%",
              color: "#8C7A66",
              margin: 0,
              maxWidth: 596,
            }}
          >
            {row.content}
          </p>
        </div>
      </div>

      {/* Divider */}
      <div
        style={{
          width: "100%",
          height: 1,
          backgroundColor: "#8C7A66",
          opacity: 0.3,
          marginTop: 16,
        }}
      />
    </div>
  );
}

function AquanautWatchCharacteristics({ isMobile }: { isMobile: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const itemStyle = (delay: number): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(40px)",
    transition: `opacity 1.0s cubic-bezier(0.25, 0.1, 0.1, 1) ${delay}s, transform 1.0s cubic-bezier(0.25, 0.1, 0.1, 1) ${delay}s`,
  });

  return (
    <section
      ref={ref}
      style={{
        width: "100%",
        backgroundColor: "#EDEDED",
        padding: isMobile ? "80px 24px" : "80px 80px",
      }}
    >
      {/* Heading */}
      <div style={{ marginBottom: 40, ...itemStyle(0) }}>
        <h2
          style={{
            fontFamily: "var(--font-open-sans), sans-serif",
            fontSize: 24,
            fontWeight: 400,
            letterSpacing: "0.12em",
            lineHeight: "110%",
            color: "#8C7A66",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          Watch Characteristics
        </h2>
      </div>

      {/* Accordion */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 40,
          maxWidth: 674,
        }}
      >
        {SPEC_ROWS.map((row, i) => (
          <AccordionRow
            key={row.label}
            row={row}
            isOpen={i === openIndex}
            onToggle={() => setOpenIndex(i === openIndex ? -1 : i)}
            style={itemStyle(0.1 + i * 0.08)}
          />
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   PRODUCT DESCRIPTION
───────────────────────────────────────── */
function AquanautProductDescription({ isMobile }: { isMobile: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const itemStyle = (delay: number): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(40px)",
    transition: `opacity 1.0s cubic-bezier(0.25, 0.1, 0.1, 1) ${delay}s, transform 1.0s cubic-bezier(0.25, 0.1, 0.1, 1) ${delay}s`,
  });

  return (
    <section
      ref={ref}
      style={{
        width: "100%",
        backgroundColor: "#FFFFFF",
        padding: isMobile ? "80px 24px" : "80px 80px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 16,
          maxWidth: 1352,
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-open-sans), sans-serif",
            fontSize: isMobile ? 32 : 40,
            fontWeight: 400,
            letterSpacing: "0.12em",
            lineHeight: "110%",
            color: "#8C7A66",
            textTransform: "uppercase",
            textAlign: "center",
            margin: 0,
            ...itemStyle(0),
          }}
        >
          Time here and elsewhere
        </h2>
        <p
          style={{
            fontFamily: "var(--font-lora), serif",
            fontSize: isMobile ? 14 : 16,
            fontWeight: 400,
            lineHeight: "140%",
            color: "#8C7A66",
            textAlign: "center",
            margin: 0,
            maxWidth: 700,
            ...itemStyle(0.15),
          }}
        >
          This self-winding travel watch with its elegantly relaxed, contemporary
          style is distinguished by its exclusive Travel Time mechanism ensuring
          the simple display of a second time zone with date indexed to local
          time. The white gold case is teamed with an elegant blue-gray dial and
          strap.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   GALLERY 2 (split panel / stacked mobile)
───────────────────────────────────────── */
function AquanautGallery2({ isMobile }: { isMobile: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const itemStyle = (delay: number): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(40px)",
    transition: `opacity 1.0s cubic-bezier(0.25, 0.1, 0.1, 1) ${delay}s, transform 1.0s cubic-bezier(0.25, 0.1, 0.1, 1) ${delay}s`,
  });

  if (isMobile) {
    return (
      <section
        ref={ref}
        style={{ display: "flex", flexDirection: "column", gap: 8, width: "100%" }}
      >
        {[
          {
            src: "/images/aq-pdp/split-left.jpg",
            objectPosition: "center center",
          },
          {
            src: "/images/aq-pdp/split-right.jpg",
            objectPosition: "center center",
          },
          {
            src: "/images/aq-pdp/hero-full.jpg",
            objectPosition: "center center",
          },
        ].map((img, i) => (
          <div
            key={img.src}
            style={{
              width: "100%",
              height: 600,
              overflow: "hidden",
              ...itemStyle(i * 0.1),
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img.src}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: img.objectPosition,
                display: "block",
              }}
            />
          </div>
        ))}
      </section>
    );
  }

  return (
    <section
      ref={ref}
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 8,
        width: "100%",
        height: 776,
      }}
    >
      {/* Left Panel */}
      <div
        style={{
          flex: 1,
          height: 776,
          overflow: "hidden",
          ...itemStyle(0),
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/aq-pdp/split-left.jpg"
          alt="Aquanaut detail"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>

      {/* Right Panel */}
      <div
        style={{
          flex: 1,
          height: 776,
          overflow: "hidden",
          ...itemStyle(0.15),
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/aq-pdp/split-right.jpg"
          alt="Aquanaut strap detail"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   HERO FULL (982px full-bleed, desktop only)
───────────────────────────────────────── */
function AquanautHeroFull() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        width: "100%",
        height: 982,
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition:
          "opacity 1.0s cubic-bezier(0.25, 0.1, 0.1, 1), transform 1.0s cubic-bezier(0.25, 0.1, 0.1, 1)",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/aq-pdp/hero-full.jpg"
        alt="Aquanaut 5164G-001 full view"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
    </section>
  );
}

/* ─────────────────────────────────────────
   PAGE
───────────────────────────────────────── */
export default function Aquanaut5164GPage() {
  const isMobile = useIsMobile();

  return (
    <>
      <Nav />
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          gap: isMobile ? 0 : 8,
          backgroundColor: "#FFFFFF",
        }}
      >
        <AquanautProductGallery isMobile={isMobile} />
        <AquanautProductInfo isMobile={isMobile} />

        {isMobile ? (
          <AquanautGalleryFull
            image="/images/aq-pdp/gallery-1.jpg"
            caption=""
            mobileObjectPosition="center center"
          />
        ) : (
          <>
            <AquanautGalleryFull
              image="/images/aq-pdp/gallery-1.jpg"
              caption="Integrated blue-gray composite strap with Aquanaut pattern and white gold patented fold-over clasp."
            />
            <AquanautGalleryFull
              image="/images/aq-pdp/gallery-3.jpg"
              caption=""
            />
          </>
        )}

        <div style={{ marginTop: isMobile ? 0 : -8 }}>
          <AquanautWatchCharacteristics isMobile={isMobile} />
        </div>
        <AquanautProductDescription isMobile={isMobile} />
        <AquanautGallery2 isMobile={isMobile} />
        {!isMobile && <AquanautHeroFull />}
        <div style={{ marginTop: isMobile ? 0 : -8 }}>
          <AppointmentCTA />
        </div>
        <div style={{ marginTop: isMobile ? 0 : -8 }}>
          <Footer />
        </div>
      </main>
    </>
  );
}
