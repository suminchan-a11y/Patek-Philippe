"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionLabel from "../components/SectionLabel";
import ConciergeForm from "../components/ConciergeForm";

export default function ServicesPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true });
  const levelsRef = useRef<HTMLDivElement>(null);
  const levelsInView = useInView(levelsRef, { once: true, margin: "-80px" });
  const specialistRef = useRef<HTMLDivElement>(null);
  const specialistInView = useInView(specialistRef, { once: true, margin: "-80px" });
  const contactRef = useRef<HTMLDivElement>(null);
  const contactInView = useInView(contactRef, { once: true, margin: "-80px" });

  return (
    <>
      {/* Hero */}
      <section
        ref={heroRef}
        style={{
          position: "relative",
          height: "60vh",
          overflow: "hidden",
          background: "var(--dk)",
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.6,
          }}
        >
          <source
            src="https://patek-res.cloudinary.com/video/upload/f_auto:video/dfsmedia/7bfbf155971a477a89e3de9ec33f1af2/357729-source/pp-savoir-faire-banner-16-9-7118-1450r-gemsetting"
            type="video/mp4"
          />
        </video>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(14,13,12,0.6), transparent)",
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
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ marginBottom: 16 }}
          >
            <SectionLabel light>Services</SectionLabel>
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
              color: "#fff",
            }}
          >
            A lifetime of care
          </motion.h1>
        </div>
      </section>

      {/* Service Levels */}
      <section
        ref={levelsRef}
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
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={levelsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionLabel style={{ marginBottom: 20 }}>Minor Service</SectionLabel>
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
              Maintenance
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
              A minor service includes a complete diagnostic assessment, movement
              regulation, water resistance testing, and case and bracelet
              refinishing. Recommended every three to five years to maintain
              optimal performance and preserve the original finish.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={levelsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.4, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionLabel style={{ marginBottom: 20 }}>Major Service</SectionLabel>
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
              Complete Restoration
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
              A major service involves complete disassembly of the movement,
              ultrasonic cleaning of every component, replacement of worn parts
              with genuine Patek Philippe calibre components, reassembly,
              lubrication, timing regulation, and full case restoration. This is
              the service that ensures your timepiece can be passed to the next
              generation in the condition it deserves.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Specialist */}
      <section
        ref={specialistRef}
        style={{
          padding: "120px 48px",
          background: "var(--warm)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={specialistInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            maxWidth: 620,
            marginLeft: "clamp(48px, 10vw, 160px)",
          }}
        >
          <SectionLabel style={{ marginBottom: 20 }}>
            Service After Sales
          </SectionLabel>
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
            SAV-Certified Care
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
            Every service is carried out by watchmakers trained and certified
            through Patek Philippe&apos;s own SAV (Service Après-Vente) programme in
            Geneva. This certification ensures that the standards applied to your
            timepiece during service are identical to those applied during its
            original manufacture.
          </p>
        </motion.div>
      </section>

      {/* Contact + Form */}
      <section
        ref={contactRef}
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
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={contactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionLabel style={{ marginBottom: 20 }}>
              Request an Appointment
            </SectionLabel>
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
              We look forward to receiving you.
            </h2>
            <ConciergeForm />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={contactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.4, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              paddingBottom: 40,
            }}
          >
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
              <p style={{ marginBottom: 8 }}>service@thehourglass.com</p>
              <p>Monday – Sunday, 10:30 am – 8:30 pm</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mobile responsive */}
      <style>{`
        @media (max-width: 1024px) {
          section > div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
