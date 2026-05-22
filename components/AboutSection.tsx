"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";
import AnimatedText from "./AnimatedText";
import ContactButton from "./ContactButton";
import { ABOUT_DECORATIONS, ABOUT_TEXT } from "@/lib/data";

export default function AboutSection() {
  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(80px, 8vw, 128px) clamp(20px, 4vw, 40px)",
        background: "#0C0C0C",
        overflow: "hidden",
      }}
    >
      {/* ── Decorative corner images ── */}
      {ABOUT_DECORATIONS.map((item, i) => (
        <FadeIn
          key={i}
          delay={item.delay}
          x={item.dx}
          y={0}
          duration={0.9}
          style={{
            position: "absolute",
            ...item.position,
            zIndex: 1,
          }}
        >
          <Image
            src={item.src}
            alt={item.alt}
            width={220}
            height={220}
            style={{ width: item.width, height: "auto", display: "block" }}
          />
        </FadeIn>
      ))}

      {/* ── Main content ── */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "clamp(36px, 5vw, 56px)",
          position: "relative",
          zIndex: 2,
          maxWidth: "700px",
          width: "100%",
        }}
      >
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading"
            style={{
              fontWeight: 900,
              textTransform: "uppercase",
              lineHeight: 1,
              letterSpacing: "-0.02em",
              fontSize: "clamp(3rem, 12vw, 140px)",
              textAlign: "center",
              fontFamily: "'Kanit', sans-serif",
              color: "#D7E2EA",
            }}
          >
            About me
          </h2>
        </FadeIn>

        <AnimatedText
          text={ABOUT_TEXT}
          style={{
            color: "#D7E2EA",
            fontWeight: 500,
            textAlign: "center",
            lineHeight: 1.65,
            maxWidth: "560px",
            fontSize: "clamp(1rem, 2vw, 1.35rem)",
            fontFamily: "'Kanit', sans-serif",
          }}
        />

        <div style={{ marginTop: "clamp(24px, 4vw, 48px)" }}>
          <ContactButton size="lg" />
        </div>
      </div>
    </section>
  );
}