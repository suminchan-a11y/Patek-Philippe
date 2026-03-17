"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { collections } from "../data/collections";

const menuItems = [
  { label: "Collections", href: "/collections", expandable: true },
  { label: "The Boutique", href: "/boutique", expandable: false },
  { label: "Services", href: "/services", expandable: false },
];

export default function MenuOverlay({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [collectionsExpanded, setCollectionsExpanded] = useState(false);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{
            position: "fixed",
            inset: 0,
            background: "var(--dk)",
            zIndex: 200,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "72px 48px 48px",
            overflowY: "auto",
          }}
        >
          <nav
            style={{
              maxWidth: 600,
              marginLeft: "clamp(48px, 10vw, 160px)",
            }}
          >
            {menuItems.map((item, i) => (
              <div key={item.label}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1.4,
                    delay: 0.12 * i,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  style={{ marginBottom: 8 }}
                >
                  {item.expandable ? (
                    <button
                      onClick={() => setCollectionsExpanded(!collectionsExpanded)}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        fontFamily: "var(--font-serif)",
                        fontSize: "clamp(2rem, 4.5vw, 3.8rem)",
                        fontWeight: 400,
                        lineHeight: 1.08,
                        color: "var(--dkt)",
                        padding: "16px 0",
                        display: "flex",
                        alignItems: "center",
                        gap: 20,
                        transition: "color 0.8s ease-in-out",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#fff";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "var(--dkt)";
                      }}
                    >
                      {item.label}
                      <motion.span
                        animate={{ rotate: collectionsExpanded ? 180 : 0 }}
                        transition={{ duration: 0.5 }}
                        style={{
                          fontSize: "0.5em",
                          opacity: 0.5,
                        }}
                      >
                        ▼
                      </motion.span>
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={onClose}
                      style={{
                        display: "block",
                        fontFamily: "var(--font-serif)",
                        fontSize: "clamp(2rem, 4.5vw, 3.8rem)",
                        fontWeight: 400,
                        lineHeight: 1.08,
                        color: "var(--dkt)",
                        padding: "16px 0",
                        transition: "color 0.8s ease-in-out",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#fff";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "var(--dkt)";
                      }}
                    >
                      {item.label}
                    </Link>
                  )}
                </motion.div>

                {/* Collections sub-links */}
                {item.expandable && (
                  <AnimatePresence>
                    {collectionsExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        style={{
                          overflow: "hidden",
                          paddingLeft: 8,
                          marginBottom: 16,
                        }}
                      >
                        {collections.map((c, ci) => (
                          <motion.div
                            key={c.slug}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 1.4,
                              delay: 0.12 * ci,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                          >
                            <Link
                              href={`/collections/${c.slug}`}
                              onClick={onClose}
                              style={{
                                display: "block",
                                fontFamily: "var(--font-serif)",
                                fontSize: "clamp(1rem, 1.8vw, 1.3rem)",
                                fontWeight: 400,
                                color: "var(--dkd)",
                                padding: "10px 0",
                                transition: "color 0.8s ease-in-out",
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.color = "var(--dkt)";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.color = "var(--dkd)";
                              }}
                            >
                              {c.name}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}

            {/* Book an Appointment — text link CTA */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.4,
                delay: 0.12 * 3,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{ marginTop: 40 }}
            >
              <Link
                href="/services"
                onClick={onClose}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.7rem",
                  fontWeight: 400,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--dkd)",
                  borderBottom: "1px solid rgba(255,255,255,0.15)",
                  paddingBottom: 3,
                  transition: "color 0.8s ease-in-out, border-color 0.8s ease-in-out",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--dkt)";
                  e.currentTarget.style.borderColor = "var(--dkt)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--dkd)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                }}
              >
                Book an Appointment
              </Link>
            </motion.div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
