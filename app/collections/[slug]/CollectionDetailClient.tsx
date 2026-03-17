"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { getCollectionBySlug } from "../../data/collections";
import { getWatchesByCollection } from "../../data/watches";
import SectionLabel from "../../components/SectionLabel";
import TextLink from "../../components/TextLink";

function WatchCard({
  watch,
  index,
}: {
  watch: ReturnType<typeof getWatchesByCollection>[0];
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
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{
        background: "var(--warm)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          aspectRatio: "1",
          overflow: "hidden",
          background: "var(--warm)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 40,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={watch.image}
          alt={`${watch.name} Ref. ${watch.reference}`}
          style={{
            maxWidth: "80%",
            maxHeight: "80%",
            objectFit: "contain",
          }}
        />
      </div>
      <div style={{ padding: "32px 32px 40px" }}>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 9,
            letterSpacing: 5,
            textTransform: "uppercase",
            color: "var(--t4)",
            marginBottom: 12,
          }}
        >
          Ref. {watch.reference}
        </p>
        <h3
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
            fontWeight: 400,
            lineHeight: 1.2,
            color: "var(--t1)",
            marginBottom: 20,
          }}
        >
          {watch.name}
        </h3>
        <div
          style={{
            display: "grid",
            gap: 8,
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(0.92rem, 1.05vw, 1rem)",
            fontWeight: 300,
            lineHeight: 1.95,
            color: "var(--t3)",
          }}
        >
          <p>{watch.movement}</p>
          <p>{watch.materials}</p>
          <p>{watch.diameter}</p>
          <p>{watch.complications}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function CollectionDetailClient({ slug }: { slug: string }) {
  const collection = getCollectionBySlug(slug);
  const watchList = getWatchesByCollection(slug);

  const bannerRef = useRef<HTMLDivElement>(null);
  const bannerInView = useInView(bannerRef, { once: true });
  const narrativeRef = useRef<HTMLDivElement>(null);
  const narrativeInView = useInView(narrativeRef, { once: true, margin: "-80px" });

  if (!collection) {
    return (
      <section style={{ padding: "200px 48px", textAlign: "center" }}>
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "2rem",
            color: "var(--t1)",
          }}
        >
          Collection not found
        </h1>
      </section>
    );
  }

  return (
    <>
      {/* Banner */}
      <section
        ref={bannerRef}
        style={{
          position: "relative",
          height: "70vh",
          overflow: "hidden",
          background: "var(--dk)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={collection.heroImage}
          alt={collection.name}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.7,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(14,13,12,0.6) 0%, transparent 50%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 80,
            left: 48,
            zIndex: 2,
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={bannerInView ? { opacity: 1 } : {}}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ marginBottom: 16 }}
          >
            <SectionLabel light>Collection</SectionLabel>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={bannerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.4, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(3rem, 7vw, 6.5rem)",
              fontWeight: 400,
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              color: "#fff",
            }}
          >
            {collection.name}
          </motion.h1>
        </div>
      </section>

      {/* Narrative */}
      <section
        ref={narrativeRef}
        style={{
          padding: "160px 48px",
          background: "var(--ow)",
        }}
      >
        <div style={{ maxWidth: 620, marginLeft: "clamp(48px, 10vw, 160px)" }}>
          {collection.narrative.map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={narrativeInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 1.4,
                delay: i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(0.92rem, 1.05vw, 1rem)",
                fontWeight: 400,
                lineHeight: 1.95,
                color: "var(--t2)",
                marginBottom: 28,
              }}
            >
              {para}
            </motion.p>
          ))}
        </div>
      </section>

      {/* Models */}
      {watchList.length > 0 && (
        <section
          style={{
            padding: "0 48px 160px",
            background: "var(--ow)",
          }}
        >
          <div style={{ maxWidth: 1400, margin: "0 auto" }}>
            <div style={{ marginBottom: 60 }}>
              <SectionLabel>Models</SectionLabel>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 380px), 1fr))",
                gap: 40,
              }}
            >
              {watchList.map((w, i) => (
                <WatchCard key={w.reference} watch={w} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section
        style={{
          padding: "120px 48px",
          background: "var(--warm)",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
            fontWeight: 400,
            fontStyle: "italic",
            lineHeight: 1.55,
            color: "var(--t2)",
            marginBottom: 32,
          }}
        >
          We invite you to discover the {collection.name} in person.
        </p>
        <TextLink href="/services">Request an Appointment</TextLink>
      </section>
    </>
  );
}
