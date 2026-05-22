"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import FadeIn from "./FadeIn";
import { SERVICES } from "@/lib/data";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1.0] as const },
  },
};

const arrowVariants = {
  initial: { opacity: 0.15, rotate: -45, x: 0 },
  hover: {
    opacity: 1,
    rotate: 0,
    x: 4,
    transition: { duration: 0.3, ease: "easeOut" as const },
  },
};

export default function ServicesSection() {
  return (
    <section
      id="price"
      style={{
        background: "#FFFFFF",
        borderRadius:
          "clamp(40px, 5vw, 60px) clamp(40px, 5vw, 60px) 0 0",
        padding:
          "clamp(80px, 8vw, 128px) clamp(20px, 4vw, 40px)",
      }}
    >
      {/* ── Heading ── */}
      <FadeIn delay={0} y={40}>
        <h2
          style={{
            fontWeight: 900,
            textTransform: "uppercase",
            fontSize: "clamp(3rem, 12vw, 160px)",
            color: "#0C0C0C",
            textAlign: "center",
            lineHeight: 1,
            letterSpacing: "-0.02em",
            marginBottom: "clamp(64px, 8vw, 112px)",
            fontFamily: "'Kanit', sans-serif",
          }}
        >
          Services
        </h2>
      </FadeIn>

      {/* ── List ── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        style={{ maxWidth: "900px", margin: "0 auto" }}
      >
        {SERVICES.map((service, i) => (
          <motion.div
            key={service.num}
            variants={itemVariants}
            whileHover="hover"
            initial="initial"
            style={{
              borderTop:
                i === 0 ? "1px solid rgba(12,12,12,0.15)" : "none",
              borderBottom: "1px solid rgba(12,12,12,0.15)",
              overflow: "hidden",
            }}
          >
            <motion.div
              whileHover={{ backgroundColor: "rgba(12,12,12,0.025)" }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "clamp(16px, 3vw, 40px)",
                padding:
                  "clamp(24px, 3vw, 36px) clamp(12px, 2vw, 24px)",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
            >
              {/* Number + text */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "clamp(16px, 3vw, 40px)",
                  flex: 1,
                }}
              >
                <motion.span
                  variants={{
                    initial: { color: "rgba(12,12,12,0.4)", y: 0 },
                    hover: { color: "#0C0C0C", y: -4 },
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  style={{
                    fontWeight: 900,
                    fontSize: "clamp(3rem, 10vw, 140px)",
                    lineHeight: 0.9,
                    flexShrink: 0,
                    fontFamily: "'Kanit', sans-serif",
                  }}
                >
                  {service.num}
                </motion.span>

                <div style={{ paddingTop: "clamp(4px, 1vw, 16px)" }}>
                  <motion.p
                    variants={{
                      initial: {
                        x: 0,
                        color: "rgba(12,12,12,0.85)",
                      },
                      hover: { x: 8, color: "#0C0C0C" },
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    style={{
                      fontWeight: 500,
                      textTransform: "uppercase",
                      fontSize: "clamp(1rem, 2.2vw, 2.1rem)",
                      fontFamily: "'Kanit', sans-serif",
                      marginBottom: "8px",
                    }}
                  >
                    {service.name}
                  </motion.p>
                  <p
                    style={{
                      fontWeight: 300,
                      lineHeight: 1.6,
                      maxWidth: "700px",
                      fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)",
                      color: "#0C0C0C",
                      opacity: 0.6,
                      fontFamily: "'Kanit', sans-serif",
                    }}
                  >
                    {service.desc}
                  </p>
                </div>
              </div>

              {/* Arrow */}
              <motion.div
                variants={arrowVariants}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <ArrowUpRight size={40} strokeWidth={1.5} color="#0C0C0C" />
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
