"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { collections } from "../../data/collections";
import TextLink from "../TextLink";

const featured = collections.filter((c) => c.featured);

/*
  Alter Geneva–inspired: each collection is a full-bleed cinematic moment.
  One dominant image fills the viewport. Text is minimal, placed asymmetrically.
  The image IS the story — everything else defers to it.
*/

function CollectionSection({
  collection,
  index,
  layout,
}: {
  collection: (typeof featured)[0];
  index: number;
  layout: "left" | "right" | "full";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);

  if (layout === "full") {
    // Full-bleed: image fills viewport, text overlaid at bottom
    return (
      <section
        ref={ref}
        style={{
          position: "relative",
          height: "100vh",
          overflow: "hidden",
          background: "var(--dk)",
        }}
      >
        <motion.div
          style={{ position: "absolute", inset: "-4%", scale: imgScale }}
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
        </motion.div>

        {/* Gradient overlay at bottom */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, transparent 40%, rgba(14,13,12,0.7) 100%)",
            zIndex: 1,
          }}
        />

        {/* Text overlay — bottom left */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 2,
            padding: "0 48px 80px",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 9,
                letterSpacing: 5,
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                marginBottom: 16,
              }}
            >
              {collection.descriptor}
            </p>
            <Link
              href={`/collections/${collection.slug}`}
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.4rem, 5vw, 4.5rem)",
                fontWeight: 400,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: "#fff",
                display: "block",
                transition: "opacity 0.8s ease-in-out",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.7";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
              }}
            >
              {collection.name}
            </Link>
          </motion.div>
        </div>
      </section>
    );
  }

  // Asymmetric layout: huge image on one side, text column on the other
  const imageOnLeft = layout === "left";

  return (
    <section
      ref={ref}
      style={{
        display: "grid",
        gridTemplateColumns: imageOnLeft ? "1.6fr 1fr" : "1fr 1.6fr",
        minHeight: "100vh",
        background: "var(--dk)",
        overflow: "hidden",
      }}
    >
      {/* Image side */}
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          order: imageOnLeft ? 0 : 1,
        }}
      >
        <motion.div
          style={{
            position: "absolute",
            inset: "-4%",
            scale: imgScale,
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
        </motion.div>
      </div>

      {/* Text side */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: imageOnLeft ? "120px 48px 80px 64px" : "120px 64px 80px 48px",
          order: imageOnLeft ? 1 : 0,
          background: "var(--dk)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 9,
              letterSpacing: 5,
              textTransform: "uppercase",
              color: "var(--dkd)",
              marginBottom: 20,
            }}
          >
            {collection.descriptor}
          </p>

          <Link
            href={`/collections/${collection.slug}`}
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "var(--dkt)",
              display: "block",
              marginBottom: 32,
              transition: "color 0.8s ease-in-out",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--dkt)";
            }}
          >
            {collection.name}
          </Link>

          <TextLink href={`/collections/${collection.slug}`} light>
            Explore
          </TextLink>
        </motion.div>
      </div>

      {/* Mobile: stack vertically */}
      <style>{`
        @media (max-width: 1024px) {
          section[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
          section > div:first-child {
            min-height: 60vh;
          }
        }
      `}</style>
    </section>
  );
}

export default function HomeCollections() {
  // Alternate layouts: full → left → right → full → left
  const layouts: ("full" | "left" | "right")[] = [
    "full",
    "left",
    "right",
    "full",
    "left",
  ];

  return (
    <>
      {featured.map((c, i) => (
        <CollectionSection
          key={c.slug}
          collection={c}
          index={i}
          layout={layouts[i]}
        />
      ))}
    </>
  );
}
