"use client";

import { useState } from "react";
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

const serviceLinks = ["Reserve An Appointment", "Maintenance"];

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

export default function Footer() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <footer
        style={{
          backgroundColor: "#050608",
          padding: "64px 32px",
          display: "flex",
          flexDirection: "column",
          gap: 40,
        }}
      >
        {/* Visit Us */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <h3 style={headerStyle}>VISIT US</h3>
          <p style={{ fontFamily: "var(--font-lora), serif", fontSize: 14, fontWeight: 400, lineHeight: "20px", color: "#D9D9D9", margin: 0 }}>
            Lot G226-227, Ground Floor
            <br />
            The Gardens Mall, Medan Syed Putra
            <br />
            Utara, 59200 Kuala Lumpur, Malaysia
          </p>
          <p style={{ fontFamily: "var(--font-lora), serif", fontSize: 14, fontWeight: 400, lineHeight: "22px", color: "#D9D9D9", margin: 0 }}>
            Visit us today
            <br />
            10:00am - 5:00pm
          </p>
        </div>

        {/* Collections */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <h3 style={headerStyle}>COLLECTIONS</h3>
          {collectionLinks.map((link) => (
            <FooterLink key={link}>{link}</FooterLink>
          ))}
        </div>

        {/* Services */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <h3 style={headerStyle}>SERVICES</h3>
          {serviceLinks.map((link) => (
            <FooterLink key={link} style={{ lineHeight: "20px" }}>{link}</FooterLink>
          ))}
        </div>

        {/* Divider */}
        <div style={{ width: "100%", height: 0.5, backgroundColor: "#8C7A66" }} />

        {/* Copyright */}
        <span style={{ fontFamily: "var(--font-open-sans), sans-serif", fontSize: 14, fontWeight: 400, lineHeight: "22px", color: "#FFFFFF" }}>
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
        alignItems: "flex-end",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 24, width: 1352 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 64 }}>
          {/* Top row */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 24, width: 253 }}>
              <h3 style={headerStyle}>VISIT US</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <p style={{ fontFamily: "var(--font-lora), serif", fontSize: 14, fontWeight: 400, lineHeight: "20px", color: "#D9D9D9", margin: 0, maxWidth: 253 }}>
                  Lot G226-227, Ground Floor<br />The Gardens Mall, Medan Syed Putra<br />Utara, 59200 Kuala Lumpur, Malaysia
                </p>
                <p style={{ fontFamily: "var(--font-lora), serif", fontSize: 14, fontWeight: 400, lineHeight: "22px", color: "#D9D9D9", margin: 0 }}>
                  Visit us today<br />10:00am - 5:00pm
                </p>
              </div>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logos/pp-footer-logo.png" alt="Patek Philippe" style={{ width: 180, height: 99, objectFit: "contain" }} />
          </div>

          {/* Columns */}
          <div style={{ position: "relative", width: 1352, height: 350 }}>
            <div style={{ display: "flex", gap: 40, position: "absolute", top: 0, left: 0 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 24, width: 199 }}>
                <h3 style={headerStyle}>COLLECTIONS</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {collectionLinks.map((link) => (<FooterLink key={link}>{link}</FooterLink>))}
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 24, width: 210 }}>
                <h3 style={headerStyle}>SERVICES</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {serviceLinks.map((link) => (<FooterLink key={link} style={{ lineHeight: "20px" }}>{link}</FooterLink>))}
                </div>
              </div>
            </div>
          </div>

          <div style={{ width: 1352, height: 0.5, backgroundColor: "#8C7A66" }} />
        </div>

        <span style={{ fontFamily: "var(--font-open-sans), sans-serif", fontSize: 14, fontWeight: 400, lineHeight: "22px", color: "#FFFFFF", letterSpacing: 0 }}>
          © 2026 Patek Philippe Boutique The Gardens Mall. All rights reserved
        </span>
      </div>
    </footer>
  );
}
