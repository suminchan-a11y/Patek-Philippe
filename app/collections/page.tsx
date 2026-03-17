"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { collections } from "../data/collections";
import SectionLabel from "../components/SectionLabel";
import TextLink from "../components/TextLink";

function CollectionCard({
  collection,
  index,
}: {
  collection: (typeof collections)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 1.4,
        delay: (index % 2) * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 40,
        marginBottom: 80,
      }}
    >
      <div
        style={{
          overflow: "hidden",
          aspectRatio: "16 / 10",
          background: "var(--warm)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={collection.heroImage}
          alt={collection.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "20px 0",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
            fontWeight: 400,
            lineHeight: 1.2,
            color: "var(--t1)",
            marginBottom: 12,
          }}
        >
          {collection.name}
        </h2>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(0.92rem, 1.05vw, 1rem)",
            fontWeight: 300,
            lineHeight: 1.95,
            color: "var(--t3)",
            marginBottom: 24,
            maxWidth: 400,
          }}
        >
          {collection.descriptor}
        </p>
        <TextLink href={`/collections/${collection.slug}`}>
          Explore
        </TextLink>
      </div>
    </motion.div>
  );
}

export default function CollectionsPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <>
      {/* Hero */}
      <section
        ref={heroRef}
        style={{
          paddingTop: 200,
          paddingBottom: 120,
          paddingLeft: 48,
          paddingRight: 48,
          background: "var(--ow)",
        }}
      >
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ marginBottom: 20 }}
          >
            <SectionLabel>Collections</SectionLabel>
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
              letterSpacing: "-0.03em",
              color: "var(--t1)",
              maxWidth: 620,
            }}
          >
            Ten families, one philosophy
          </motion.h1>
        </div>
      </section>

      {/* Grid */}
      <section
        style={{
          padding: "0 48px 160px",
          background: "var(--ow)",
        }}
      >
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          {collections.map((c, i) => (
            <CollectionCard key={c.slug} collection={c} index={i} />
          ))}
        </div>
      </section>

      {/* Mobile responsive */}
      <style>{`
        @media (max-width: 1024px) {
          section > div > div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
