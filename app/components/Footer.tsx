"use client";

import { useState, useRef, useEffect } from "react";
import { useIsMobile } from "../hooks/useIsMobile";

function FooterLink({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href="#"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...linkStyle,
        ...style,
        color: hovered ? "#8C7A66" : "#D9D9D9",
        transition: "color 0.3s ease",
      }}
    >
      {children}
    </a>
  );
}

const collectionLinks = [
  "Aquanaut", "Calatrava", "Complications", "Cubitus",
  "Golden Ellipse", "Gondolo", "Grand Complications", "Nautilus", "Twenty-4",
];

const headerStyle: React.CSSProperties = {
  fontFamily: "var(--font-open-sans), sans-serif",
  fontSize: 12,
  fontWeight: 400,
  letterSpacing: "0.12em",
  lineHeight: "110%",
  color: "#8C7A66",
  textTransform: "uppercase",
  margin: 0,
};

const linkStyle: React.CSSProperties = {
  fontFamily: "var(--font-lora), serif",
  fontSize: 14,
  fontWeight: 400,
  color: "#D9D9D9",
  textDecoration: "none",
  lineHeight: "auto",
};

const bodyTextStyle: React.CSSProperties = {
  fontFamily: "var(--font-lora), serif",
  fontSize: 14,
  fontWeight: 400,
  lineHeight: "20px",
  color: "#D9D9D9",
  margin: 0,
};

function FooterAccordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (open && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [open]);

  return (
    <div>
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
        }}
      >
        <span style={headerStyle}>{title}</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          style={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.4s cubic-bezier(0.25, 0.1, 0.1, 1)",
          }}
        >
          <path d="M4 6L8 10L12 6" stroke="#8C7A66" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div
        ref={contentRef}
        style={{
          overflow: "hidden",
          height,
          transition: "height 0.4s cubic-bezier(0.25, 0.1, 0.1, 1)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 16, paddingTop: 16 }}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  const isMobile = useIsMobile();

  if (isMobile) {
    const mobileNavItems = ["Our Boutique", "Our Partnership", "Collections", "Services"];

    return (
      <footer
        style={{
          backgroundColor: "#050608",
          padding: "64px 32px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Visit Us */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24, width: 253 }}>
          <h3 style={{ ...headerStyle, letterSpacing: "0.10em" }}>VISIT US</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <p style={bodyTextStyle}>
              Lot G226-227, Ground Floor
              <br />
              The Gardens Mall, Medan Syed Putra
              <br />
              Utara, 59200 Kuala Lumpur, Malaysia
            </p>
            <p style={{ ...bodyTextStyle, lineHeight: "22px" }}>
              Visit us today
              <br />
              10:00am - 5:00pm
            </p>
          </div>
        </div>

        {/* Nav links with arrows */}
        <div style={{ display: "flex", flexDirection: "column", gap: 40, marginTop: 40 }}>
          {mobileNavItems.map((item) => (
            <a
              key={item}
              href="#"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: 155,
                textDecoration: "none",
              }}
            >
              <span style={{ ...headerStyle, letterSpacing: "0.10em" }}>{item.toUpperCase()}</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7 5L13 10L7 15" stroke="#8C7A66" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          ))}
        </div>

        {/* Logos — left aligned */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 16, marginTop: 64 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logos/thg-logo.png" alt="The Hour Glass" style={{ width: 100, objectFit: "contain" }} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logos/pp-authorized-retailer.png" alt="Patek Philippe Authorized Retailer" style={{ width: 100, height: 73, objectFit: "contain" }} />
        </div>

        {/* Divider */}
        <div style={{ width: "100%", height: 0.5, backgroundColor: "rgba(140,122,102,0.5)", marginTop: 40 }} />

        {/* Copyright — Open Sans 12px, 140% line-height */}
        <span style={{ fontFamily: "var(--font-open-sans), sans-serif", fontSize: 12, fontWeight: 400, lineHeight: "140%", color: "#FFFFFF", marginTop: 40 }}>
          © 2026 Patek Philippe Boutique The Gardens Mall. All rights reserved
        </span>
      </footer>
    );
  }

  return (
    <footer
      style={{
        backgroundColor: "#050608",
        padding: 80,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Top line — 6% white opacity */}
      <div style={{ width: 1352, height: 0.5, backgroundColor: "rgba(255,255,255,0.06)", marginBottom: 16 }} />

      {/* Main content wrapper — 1352px */}
      <div style={{ width: 1352, display: "flex", flexDirection: "column" }}>

        {/* Top row: Visit Us (left) + THG/PP logos (right) */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", width: "100%" }}>
          {/* Visit Us */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24, width: 253 }}>
            <h3 style={headerStyle}>VISIT US</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <p style={bodyTextStyle}>
                Lot G226-227, Ground Floor
                <br />
                The Gardens Mall, Medan Syed Putra
                <br />
                Utara, 59200 Kuala Lumpur, Malaysia
              </p>
              <p style={{ ...bodyTextStyle, lineHeight: "22px" }}>
                Visit us today
                <br />
                10:00am - 5:00pm
              </p>
            </div>
          </div>

          {/* Right: THG logo + PP Authorized Retailer */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", paddingLeft: 64 }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24, width: 138 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logos/thg-logo.png" alt="The Hour Glass" style={{ width: 138, height: 12, objectFit: "contain" }} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logos/pp-authorized-retailer.png" alt="Patek Philippe Authorized Retailer" style={{ width: 138, height: 100, objectFit: "contain" }} />
            </div>
          </div>
        </div>

        {/* Bottom section: Nav links (left col) + Collections (right col) */}
        <div style={{ display: "flex", gap: 40, marginTop: 64, width: "100%" }}>
          {/* Left column: Our boutique, Our partnership, Contact, Services */}
          <div style={{ display: "flex", flexDirection: "column", gap: 40, width: 199 }}>
            <span style={headerStyle}>OUR BOUTIQUE</span>
            <span style={headerStyle}>OUR PARTNERSHIP</span>
            <span style={headerStyle}>CONTACT</span>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <span style={headerStyle}>SERVICES</span>
            </div>
          </div>

          {/* Right column: Collections */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24, width: 199 }}>
            <h3 style={headerStyle}>COLLECTIONS</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {collectionLinks.map((link) => (
                <FooterLink key={link}>{link}</FooterLink>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom divider — #8C7A66 at 50% */}
        <div style={{ width: "100%", height: 0.5, backgroundColor: "rgba(140,122,102,0.5)", marginTop: 64 }} />

        {/* Copyright — Open Sans 14px, white */}
        <span
          style={{
            fontFamily: "var(--font-open-sans), sans-serif",
            fontSize: 14,
            fontWeight: 400,
            lineHeight: "22px",
            color: "#FFFFFF",
            marginTop: 16,
          }}
        >
          © 2026 Patek Philippe Boutique The Gardens Mall. All rights reserved
        </span>
      </div>
    </footer>
  );
}
