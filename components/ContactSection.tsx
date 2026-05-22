"use client";

import FadeIn from "./FadeIn";
import ContactButton from "./ContactButton";

export default function ContactSection() {
  return (
    <section
      id="contact"
      style={{
        background: "#0C0C0C",
        padding:
          "clamp(80px, 8vw, 120px) clamp(20px, 4vw, 40px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "32px",
        textAlign: "center",
        borderTop: "1px solid rgba(215,226,234,0.08)",
      }}
    >
      <FadeIn delay={0} y={30}>
        <h2
          className="hero-heading"
          style={{
            fontWeight: 900,
            textTransform: "uppercase",
            fontSize: "clamp(2.5rem, 10vw, 120px)",
            lineHeight: 1,
            letterSpacing: "-0.02em",
            fontFamily: "'Kanit', sans-serif",
          }}
        >
          Let&apos;s talk
        </h2>
      </FadeIn>

      <FadeIn delay={0.2} y={20}>
        <p
          style={{
            color: "rgba(215,226,234,0.6)",
            fontSize: "clamp(0.9rem, 1.8vw, 1.3rem)",
            maxWidth: "480px",
            fontFamily: "'Kanit', sans-serif",
            fontWeight: 300,
          }}
        >
          Ready to bring your vision to life? Let&apos;s create something
          unforgettable together.
        </p>
      </FadeIn>

      <FadeIn delay={0.35} y={20}>
        <ContactButton size="lg" text="send email"/>
      </FadeIn>

      <p
        style={{
          color: "rgba(215,226,234,0.25)",
          fontSize: "0.78rem",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          fontFamily: "'Kanit', sans-serif",
          marginTop: "32px",
        }}
      >
        © {new Date().getFullYear()} Sadhurka Devadas
      </p>
    </section>
  );
}
