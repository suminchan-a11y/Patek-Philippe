"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useIsMobile } from "../hooks/useIsMobile";

const SPEC_ROWS = [
  {
    label: "Dial",
    content:
      "Sunburst blue, horizontally embossed, rose gold applied baton-style hour markers with white luminescent coating. Local time hand: rose gold rounded baton-style with white luminescent coating. Home time hand: rose gold skeletonized rounded baton-style.",
  },
  {
    label: "Case",
    content:
      "Rose gold. Sapphire-crystal case back. Water resistant to 120\u00A0m. Diameter: 42.2\u00A0mm. Height: 12.53\u00A0mm.",
  },
  {
    label: "Bracelet",
    content:
      "Rose gold Nautilus bracelet with fold-over clasp. Patented integrated design ensuring seamless visual continuity between case and bracelet.",
  },
  {
    label: "Movement",
    content:
      "Caliber CH 28-520 C FUS. Self-winding mechanical flyback chronograph movement. Dual time zone with local and home time display. Column-wheel chronograph mechanism with vertical disk clutch.",
  },
  {
    label: "Instruction for Use",
    content:
      "Crown position 0: winding and time setting. Crown position 1: date correction. Pushers at 9 o\u2019clock: local time zone adjustment. Chronograph pushers at 2 and 4 o\u2019clock: start, stop, and flyback reset.",
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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        ...style,
      }}
    >
      {/* Label row — clickable */}
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

      {/* Expanding content wrapper */}
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

      {/* Divider line */}
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

export default function WatchCharacteristics() {
  const isMobile = useIsMobile();
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

      {/* Accordion Rows */}
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
