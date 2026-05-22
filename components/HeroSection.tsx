"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import FadeIn from "./FadeIn";
import Magnet from "./Magnet";
import ContactButton from "./ContactButton";
import { NAV_LINKS } from "@/lib/data";

const SKILLS = [
  { name: "React" },
  { name: "Next.js" },
  { name: "Node.js" },
  { name: "Tailwind" },
  { name: "MySQL" },
  { name: "MongoDB" },
  { name: "HTML" },
  { name: "CSS" },
  { name: "JavaScript" },
  { name: "PHP" },
  { name: "Java" },
   { name: "Figma" },
];



// Wraps Magnet but passes children straight through on touch devices
function MagnetOrPassthrough({
  children,
  isMobile,
}: {
  children: React.ReactNode;
  isMobile: boolean;
}) {
  if (isMobile) return <>{children}</>;
  return (
    <Magnet padding={40} strength={5}>
      {children}
    </Magnet>
  );
}

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <section
      className="hero-section"
      style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        position: "relative",
        background: "#0C0C0C",
        padding: "0 clamp(20px, 5vw, 40px)",
      }}
    >


      {/* ── Navbar ── */}
      <FadeIn delay={0} y={-20}>
        <nav
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            padding: "clamp(14px, 2.5vw, 24px) 0",
            zIndex: 30,
            position: "relative",
          }}
        >
          {/* Nav links — hidden on mobile */}
          <div
            className="nav-links"
            style={{
              display: isMobile ? "none" : "flex",
              gap: "clamp(16px, 3vw, 44px)",
              flexWrap: "wrap",
              justifyContent: "flex-end",
            }}
          >
            {NAV_LINKS.map((link) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                whileHover={{ opacity: 0.55 }}
                style={{
                  color: "#D7E2EA",
                  fontFamily: "'Kanit', sans-serif",
                  fontWeight: 400,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  textDecoration: "none",
                  fontSize: "clamp(0.7rem, 1vw, 1rem)",
                  opacity: 0.75,
                  transition: "opacity 0.2s",
                }}
              >
                {link}
              </motion.a>
            ))}
          </div>
        </nav>
      </FadeIn>

      {/* ── Main layout: side-by-side on md+, stacked on mobile ── */}
      <div
        className="hero-grid"
        style={{
          flex: 1,
          display: "grid",
          /* single column on mobile, two-col on desktop */
          gridTemplateColumns: "1fr",
          gap: "clamp(24px, 4vw, 60px)",
          alignItems: "center",
          position: "relative",
          zIndex: 20,
          paddingBottom: "clamp(28px, 4vw, 48px)",
          paddingTop: "clamp(8px, 2vw, 0px)",
        }}
      >
        {/* ══ Portrait — rendered FIRST in DOM so it appears at top on mobile ══ */}
        <div
          className="hero-portrait"
          style={{
            width: "100%",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            /* On mobile: constrain height so text still fits */
            maxHeight: isMobile ? "42svh" : "none",
            overflow: isMobile ? "visible" : "visible",
          }}
        >
          {/* ellipse halo */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: "-10%",
              borderRadius: "50%",
              background:
                "radial-gradient(ellipse at 60% 40%, rgba(182,0,168,0.22) 0%, transparent 70%)",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />

          <FadeIn delay={isMobile ? 0.1 : 0.6} y={30}>
            <MagnetOrPassthrough isMobile={isMobile}>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: isMobile ? "240px" : "clamp(260px, 32vw, 420px)",
                  borderRadius: "clamp(16px, 3vw, 40px)",
                  overflow: "hidden",
                  border: "1px solid rgba(215,226,234,0.10)",
                  background:
                    "linear-gradient(160deg, rgba(182,0,168,0.06) 0%, rgba(118,33,176,0.06) 60%, rgba(190,76,0,0.04) 100%)",
                  zIndex: 1,
                  margin: "0 auto",
                }}
              >
                <Image
                  src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
                  alt="Sadhurka — Software Engineer"
                  width={440}
                  height={540}
                  priority
                  style={{
                    width: "100%",
                    height: "auto",
                    maxHeight: isMobile ? "36svh" : "58vh",
                    objectFit: "contain",
                    display: "block",
                  }}
                />
                <div
                  aria-hidden
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "30%",
                    background: "linear-gradient(to top, #0C0C0C 0%, transparent 100%)",
                    pointerEvents: "none",
                  }}
                />
              </div>
            </MagnetOrPassthrough>
          </FadeIn>

          {/* Floating pills — hidden on mobile to avoid overflow clutter */}
          {!isMobile && (
            <>
              <FadeIn delay={0.75} x={20} y={0}>
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    position: "absolute",
                    bottom: "18%",
                    left: "-8%",
                    background: "rgba(12,12,12,0.82)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(215,226,234,0.12)",
                    borderRadius: "14px",
                    padding: "12px 18px",
                    zIndex: 10,
                  }}
                >
                  <p style={{ color: "rgba(215,226,234,0.45)", fontFamily: "'Kanit', sans-serif", fontSize: "0.6rem", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 2px" }}>
                    Projects completed
                  </p>
                  <p style={{ color: "#D7E2EA", fontFamily: "'Kanit', sans-serif", fontWeight: 700, fontSize: "1.4rem", lineHeight: 1, margin: 0, letterSpacing: "-0.02em" }}>
                    10+
                  </p>
                </motion.div>
              </FadeIn>

              <FadeIn delay={0.85} x={-20} y={0}>
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  style={{
                    position: "absolute",
                    top: "12%",
                    right: "-4%",
                    background: "rgba(12,12,12,0.82)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(215,226,234,0.10)",
                    borderRadius: "14px",
                    padding: "10px 16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    zIndex: 10,
                  }}
                >
                  <span style={{ position: "relative", display: "inline-block", width: "8px", height: "8px" }}>
                    <span style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "#4ade80", animation: "ping 1.6s cubic-bezier(0,0,0.2,1) infinite" }} />
                    <span style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "#22c55e" }} />
                  </span>
                  <p style={{ color: "rgba(215,226,234,0.8)", fontFamily: "'Kanit', sans-serif", fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.12em", margin: 0, fontWeight: 500 }}>
                    Open to work
                  </p>
                </motion.div>
              </FadeIn>
            </>
          )}
        </div>

        {/* ══ LEFT COLUMN — text content ══ */}
        <div
          className="hero-text"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "clamp(16px, 2.5vw, 28px)",
            /* On mobile, center-align everything */
            alignItems: isMobile ? "center" : "flex-start",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          {/* Role badge */}
          <FadeIn delay={0.1} y={16}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                color: "rgba(215,226,234,0.55)",
                fontFamily: "'Kanit', sans-serif",
                fontSize: "clamp(0.62rem, 1vw, 0.72rem)",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.18em",
              }}
            >
              {!isMobile && (
                <span
                  style={{
                    display: "inline-block",
                    width: "28px",
                    height: "1px",
                    background: "linear-gradient(90deg, #B600A8, rgba(182,0,168,0))",
                    flexShrink: 0,
                  }}
                />
              )}
              Software Engineer Intern
            </div>
          </FadeIn>

          {/* Heading */}
          <div style={{ overflow: "hidden", width: "100%" }}>
            <FadeIn delay={0.18} y={50}>
              <h1
                style={{
                  fontWeight: 900,
                  textTransform: "uppercase",
                  lineHeight: 0.88,
                  fontSize: "clamp(2.8rem, 9vw, 160px)",
                  fontFamily: "'Kanit', 'Impact', sans-serif",
                  color: "#D7E2EA",
                  margin: 0,
                  letterSpacing: "-0.03em",
                }}
              >
                Hi, I&apos;m
                <br />
                <span
                  style={{
                    background: "linear-gradient(123deg, #D7E2EA 0%, #B600A8 55%, #BE4C00 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Sadhurka
                </span>
              </h1>
            </FadeIn>
          </div>

          {/* Bio */}
          <FadeIn delay={0.3} y={20}>
            <p
              style={{
                color: "rgba(215,226,234,0.55)",
                fontWeight: 300,
                letterSpacing: "0.06em",
                lineHeight: 1.5,
                fontSize: "clamp(0.78rem, 1.2vw, 1.05rem)",
                maxWidth: "400px",
                fontFamily: "'Kanit', sans-serif",
                margin: 0,
                textTransform: "uppercase",
              }}
            >
              Passionate about building clean, impact-focused websites — turning ideas into polished digital experiences.
            </p>
          </FadeIn>

          {/* CTA */}
          <FadeIn delay={0.44} y={20}>
            <ContactButton size="md" text="Download CV" />
          </FadeIn>

          {/* On mobile: inline availability pill instead of floating */}
          {isMobile && (
            <FadeIn delay={0.5} y={12}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "rgba(215,226,234,0.04)",
                  border: "1px solid rgba(215,226,234,0.09)",
                  borderRadius: "9999px",
                  padding: "6px 14px",
                }}
              >
                <span style={{ position: "relative", display: "inline-block", width: "7px", height: "7px" }}>
                  <span style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "#4ade80", animation: "ping 1.6s cubic-bezier(0,0,0.2,1) infinite" }} />
                  <span style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "#22c55e" }} />
                </span>
                <span style={{ color: "rgba(215,226,234,0.7)", fontFamily: "'Kanit', sans-serif", fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.14em", fontWeight: 500 }}>
                  Open to work
                </span>
              </div>
            </FadeIn>
          )}

          {/* Stack row */}
          <FadeIn delay={0.56} y={16}>
            <div
              style={{
                borderTop: "1px solid rgba(215,226,234,0.07)",
                paddingTop: "clamp(12px, 2vw, 20px)",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "clamp(6px, 1.2vw, 14px)",
                justifyContent: isMobile ? "center" : "flex-start",
                width: "100%",
              }}
            >
              <span
                style={{
                  color: "rgba(215,226,234,0.35)",
                  fontFamily: "'Kanit', sans-serif",
                  fontSize: "0.6rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                }}
              >
                Stack //
              </span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", justifyContent: isMobile ? "center" : "flex-start" }}>
                {SKILLS.map((skill, index) => (
                  <span
                    key={index}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "5px",
                      color: "rgba(215,226,234,0.7)",
                      fontFamily: "'Kanit', sans-serif",
                      fontSize: "clamp(0.62rem, 0.9vw, 0.82rem)",
                      fontWeight: 400,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      background: "rgba(215,226,234,0.04)",
                      padding: "3px 9px",
                      borderRadius: "6px",
                      border: "1px solid rgba(215,226,234,0.07)",
                    }}
                  >
                    
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      <style>{`
        @keyframes ping {
          75%, 100% { transform: scale(2.2); opacity: 0; }
        }

        /* ── Desktop: two-column side-by-side ── */
        @media (min-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr clamp(280px, 32vw, 420px) !important;
          }
          /* portrait goes to the right on desktop */
          .hero-portrait {
            order: 2;
            max-height: none !important;
          }
          .hero-text {
            order: 1;
          }
        }

        /* ── Mobile: single column, portrait on top ── */
        @media (max-width: 767px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            padding-top: 0 !important;
          }
          .hero-portrait {
            order: 1;
          }
          .hero-text {
            order: 2;
          }
        }

        /* Hide most nav links on very small screens, keep 2 */
        @media (max-width: 400px) {
          .nav-links a:nth-child(n+3) {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}