"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import SectionLabel from "../components/SectionLabel";
import TextLink from "../components/TextLink";

const CDN_BASE = "https://cd.patek.com/dfsmedia/0906caea301d42b3b8bd23bd656d1711";

const boutiques = [
  {
    name: "ION Orchard",
    city: "Singapore",
    retailer: "Cortina Watch",
    image: `${CDN_BASE}/274414-source/pp-pos-singapore-ion-orchard-cortina-watch-interior-1`,
  },
  {
    name: "Marina Bay Sands",
    city: "Singapore",
    retailer: "Cortina Watch",
    image: `${CDN_BASE}/274419-source/pp-pos-singapore-marina-bay-sands-cortina-watch-interior-1`,
  },
  {
    name: "Ngee Ann City",
    city: "Singapore",
    retailer: "The Hour Glass",
    image: `${CDN_BASE}/289702-source/pp-pos-singapore-ann-city-the-hour-glass-interior-1`,
  },
  {
    name: "Raffles Hotel",
    city: "Singapore",
    retailer: "The Hour Glass",
    image: `${CDN_BASE}/274430-source/pp-pos-singapore-raffles-hotel-the-hour-glass-interior-1`,
  },
  {
    name: "Suria KLCC",
    city: "Kuala Lumpur",
    retailer: "Cortina Watch",
    image: `${CDN_BASE}/273999-source/pp-pos-malaysia-kuala-lumpur-city-centre-cortina-watch-interior-1`,
  },
  {
    name: "Pavilion KL",
    city: "Kuala Lumpur",
    retailer: "The Hour Glass",
    image: `${CDN_BASE}/273984-source/pp-pos-malaysia-kuala-lumpur-pavilion-shopping-mall-the-hour-glass-interior-1`,
  },
  {
    name: "Siam Paragon",
    city: "Bangkok",
    retailer: "Patek Philippe",
    image: `${CDN_BASE}/393434-source/pp-pos-thailand-bangkok-patek-philippe-boutique-bangkok-siam-paragon-interior-1`,
  },
  {
    name: "ICONSIAM",
    city: "Bangkok",
    retailer: "THG Prima Times",
    image: `${CDN_BASE}/279491-source/pp-pos-thailand-bangkok-iconsiam-thg-prima-times-interior-1`,
  },
  {
    name: "Central Embassy",
    city: "Bangkok",
    retailer: "Cortina Watch",
    image: `${CDN_BASE}/274584-source/pp-pos-thailand-bangkok-central-embassy-cortina-watch-interior-1`,
  },
];

export default function BoutiquePage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true });
  const detailsRef = useRef<HTMLDivElement>(null);
  const detailsInView = useInView(detailsRef, { once: true, margin: "-80px" });

  return (
    <>
      {/* Hero — Dishoom-style interactive section */}
      <section
        ref={heroRef}
        style={{
          position: "relative",
          minHeight: "100vh",
          overflow: "hidden",
          background: "var(--dk)",
        }}
      >
        {/* Background image with crossfade */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{ position: "absolute", inset: 0 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={boutiques[activeIndex].image}
              alt={`${boutiques[activeIndex].name} boutique interior`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Dark overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(14,13,12,0.4)",
            zIndex: 1,
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "160px 48px",
            maxWidth: 1400,
            margin: "0 auto",
          }}
        >
          {/* Left — heading */}
          <div style={{ maxWidth: 400 }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              style={{ marginBottom: 20 }}
            >
              <SectionLabel light>The Boutiques</SectionLabel>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.4, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2rem, 4.5vw, 3.8rem)",
                fontWeight: 400,
                lineHeight: 1.08,
                color: "var(--dkt)",
              }}
            >
              A room for every city
            </motion.h1>
          </div>

          {/* Right — boutique names list */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: 0,
            }}
          >
            {boutiques.map((b, i) => (
              <motion.div
                key={b.name}
                initial={{ opacity: 0, x: 30 }}
                animate={heroInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 1.4,
                  delay: 0.12 * i,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onMouseEnter={() => setActiveIndex(i)}
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                  fontWeight: activeIndex === i ? 500 : 400,
                  lineHeight: 1.2,
                  color: activeIndex === i ? "#fff" : "var(--dkd)",
                  cursor: "pointer",
                  padding: "10px 0",
                  textAlign: "right",
                  transition: "color 0.8s ease-in-out, transform 0.8s ease-in-out",
                  transform: activeIndex === i ? "translateX(-10px)" : "translateX(0)",
                }}
              >
                {b.name}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom-left — active boutique info */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`info-${activeIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              position: "absolute",
              bottom: 48,
              left: 48,
              zIndex: 2,
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.75rem",
                fontWeight: 400,
                letterSpacing: "0.1em",
                color: "rgba(255,255,255,0.7)",
                marginBottom: 4,
              }}
            >
              {boutiques[activeIndex].city}
            </p>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 9,
                letterSpacing: 5,
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
              }}
            >
              {boutiques[activeIndex].retailer}
            </p>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Additional boutique interiors — BoutiqueSpace */}
      <section
        style={{
          padding: "160px 48px",
          background: "var(--ow)",
        }}
      >
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div style={{ maxWidth: 620, marginBottom: 80 }}>
            <SectionLabel style={{ marginBottom: 20 }}>The Space</SectionLabel>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                fontWeight: 400,
                lineHeight: 1.2,
                color: "var(--t1)",
                marginBottom: 24,
              }}
            >
              Where architecture serves reverence
            </h2>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(0.92rem, 1.05vw, 1rem)",
                fontWeight: 300,
                lineHeight: 1.95,
                color: "var(--t3)",
              }}
            >
              Each boutique is shaped around the moment of encounter — the light,
              the silence, the careful geometry of a room designed so that nothing
              competes with the timepiece placed before you.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr",
              gap: 24,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${CDN_BASE}/274430-source/pp-pos-singapore-raffles-hotel-the-hour-glass-interior-1`}
              alt="Raffles Hotel boutique interior"
              style={{
                width: "100%",
                height: 500,
                objectFit: "cover",
              }}
            />
            <div style={{ display: "grid", gap: 24 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${CDN_BASE}/274419-source/pp-pos-singapore-marina-bay-sands-cortina-watch-interior-1`}
                alt="Marina Bay Sands boutique interior"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${CDN_BASE}/393434-source/pp-pos-thailand-bangkok-patek-philippe-boutique-bangkok-siam-paragon-interior-1`}
                alt="Siam Paragon boutique interior"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* BoutiqueTeam */}
      <section
        style={{
          padding: "120px 48px",
          background: "var(--warm)",
        }}
      >
        <div
          style={{
            maxWidth: 620,
            marginLeft: "clamp(48px, 10vw, 160px)",
          }}
        >
          <SectionLabel style={{ marginBottom: 20 }}>The Team</SectionLabel>
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
              fontWeight: 400,
              fontStyle: "italic",
              lineHeight: 1.55,
              color: "var(--t2)",
              marginBottom: 24,
            }}
          >
            Our watch specialists are not salespeople. They are custodians of
            knowledge — trained in Geneva, fluent in the language of complications
            and craft.
          </p>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(0.92rem, 1.05vw, 1rem)",
              fontWeight: 300,
              lineHeight: 1.95,
              color: "var(--t3)",
            }}
          >
            Whether you are selecting your first timepiece or adding to a
            collection built over decades, the conversation begins with listening.
          </p>
        </div>
      </section>

      {/* BoutiqueDetails */}
      <section
        ref={detailsRef}
        style={{
          padding: "160px 48px",
          background: "var(--ow)",
        }}
      >
        <div
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
          }}
        >
          <div>
            <SectionLabel style={{ marginBottom: 20 }}>Primary Boutique</SectionLabel>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                fontWeight: 400,
                lineHeight: 1.2,
                color: "var(--t1)",
                marginBottom: 32,
              }}
            >
              Ngee Ann City
            </h2>
            <div
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(0.92rem, 1.05vw, 1rem)",
                fontWeight: 300,
                lineHeight: 1.95,
                color: "var(--t3)",
              }}
            >
              <p style={{ marginBottom: 8 }}>The Hour Glass</p>
              <p style={{ marginBottom: 8 }}>391 Orchard Road, #01-03</p>
              <p style={{ marginBottom: 8 }}>Ngee Ann City</p>
              <p style={{ marginBottom: 24 }}>Singapore 238872</p>
              <p style={{ marginBottom: 8 }}>+65 6732 2420</p>
              <p style={{ marginBottom: 32 }}>
                Monday – Sunday, 10:30 am – 8:30 pm
              </p>
              <TextLink href="/services">Request an Appointment</TextLink>
            </div>
          </div>

          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${CDN_BASE}/289702-source/pp-pos-singapore-ann-city-the-hour-glass-interior-1`}
              alt="Ngee Ann City boutique"
              style={{
                width: "100%",
                height: 400,
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </section>

      {/* Mobile responsive */}
      <style>{`
        @media (max-width: 1024px) {
          section > div[style*="grid-template-columns: 2fr"] {
            grid-template-columns: 1fr !important;
          }
          section > div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
