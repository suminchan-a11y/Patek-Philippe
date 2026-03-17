"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Logo from "./Logo";

const footerLinks = [
  {
    title: "Collections",
    links: [
      { label: "Twenty~4", href: "/collections/twenty-4" },
      { label: "Calatrava", href: "/collections/calatrava" },
      { label: "Nautilus", href: "/collections/nautilus" },
      { label: "Aquanaut", href: "/collections/aquanaut" },
      { label: "Grand Complications", href: "/collections/grand-complications" },
    ],
  },
  {
    title: "Experience",
    links: [
      { label: "The Boutique", href: "/boutique" },
      { label: "Services", href: "/services" },
      { label: "All Collections", href: "/collections" },
    ],
  },
];

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <footer
      style={{
        padding: "160px 48px 48px",
        background: "var(--dk)",
        color: "var(--dkd)",
      }}
    >
      <div
        ref={ref}
        style={{
          maxWidth: 1400,
          margin: "0 auto",
        }}
      >
        {/* Top — logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            marginBottom: 80,
          }}
        >
          <Logo variant="white" height={28} />
        </motion.div>

        {/* Link columns */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.4, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))",
            gap: 48,
            marginBottom: 80,
          }}
        >
          {footerLinks.map((group) => (
            <div key={group.title}>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 9,
                  letterSpacing: 5,
                  textTransform: "uppercase",
                  color: "var(--dkd)",
                  marginBottom: 24,
                }}
              >
                {group.title}
              </p>
              <ul style={{ listStyle: "none" }}>
                {group.links.map((link) => (
                  <li key={link.label} style={{ marginBottom: 12 }}>
                    <Link
                      href={link.href}
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.8rem",
                        fontWeight: 300,
                        color: "var(--dkd)",
                        transition: "color 0.8s ease-in-out",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "var(--dkt)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "var(--dkd)")
                      }
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Address column */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 9,
                letterSpacing: 5,
                textTransform: "uppercase",
                color: "var(--dkd)",
                marginBottom: 24,
              }}
            >
              Visit
            </p>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.8rem",
                fontWeight: 300,
                lineHeight: 1.95,
                color: "var(--dkd)",
              }}
            >
              The Hourglass
              <br />
              391 Orchard Road
              <br />
              #01-03 Ngee Ann City
              <br />
              Singapore 238872
              <br />
              <br />
              +65 6732 2420
            </p>
          </div>
        </motion.div>

        {/* Legal */}
        <div
          style={{
            paddingTop: 28,
            borderTop: "1px solid var(--dkb)",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 12,
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.65rem",
              fontWeight: 300,
              color: "rgba(255,255,255,0.15)",
            }}
          >
            &copy; {new Date().getFullYear()} The Hourglass. Patek Philippe is a
            registered trademark of Patek Philippe SA.
          </p>
          <div
            style={{
              display: "flex",
              gap: 20,
              fontFamily: "var(--font-sans)",
              fontSize: "0.65rem",
              fontWeight: 300,
              color: "rgba(255,255,255,0.15)",
            }}
          >
            <a href="#" style={{ color: "inherit" }}>
              Privacy
            </a>
            <a href="#" style={{ color: "inherit" }}>
              Legal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
