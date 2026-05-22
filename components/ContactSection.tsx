"use client";

import { useState, useEffect, useRef } from "react";
import FadeIn from "./FadeIn";
import ContactButton from "./ContactButton";

/* ─── FloatingField ─────────────────────────────────────────────────────────
   Each input/textarea gets a floating label that rises on focus or when
   the field has a value.  The container draws its own animated border so we
   can control the gradient sweep on focus.
──────────────────────────────────────────────────────────────────────────── */
type FloatingFieldProps = {
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  disabled?: boolean;
  required?: boolean;
  multiline?: boolean;
  rows?: number;
  icon?: React.ReactNode;
};

function FloatingField({
  label,
  type = "text",
  value,
  onChange,
  disabled,
  required,
  multiline,
  rows = 5,
  icon,
}: FloatingFieldProps) {
  const [focused, setFocused] = useState(false);
  const lifted = focused || value.length > 0;
  const uid = label.toLowerCase().replace(/\s+/g, "-");

  const sharedStyle: React.CSSProperties = {
    width: "100%",
    background: "transparent",
    border: "none",
    outline: "none",
    color: "#D7E2EA",
    fontFamily: "'Kanit', sans-serif",
    fontSize: "1rem",
    fontWeight: 300,
    padding: multiline ? "28px 20px 12px 20px" : "0",
    resize: "none",
    lineHeight: 1.6,
    WebkitTextFillColor: "#D7E2EA",
  };

  return (
    <div style={{ position: "relative", width: "100%" }}>
      {/* Outer glow ring — only visible when focused */}
      <div style={{
        position: "absolute",
        inset: "-1px",
        borderRadius: "18px",
        background: focused
          ? "linear-gradient(135deg, rgba(182,0,168,0.55) 0%, rgba(119,33,177,0.45) 50%, rgba(190,76,0,0.35) 100%)"
          : "transparent",
        transition: "opacity 0.35s ease",
        opacity: focused ? 1 : 0,
        filter: "blur(6px)",
        pointerEvents: "none",
        zIndex: 0,
      }} />

      {/* Card surface */}
      <div style={{
        position: "relative",
        zIndex: 1,
        borderRadius: "16px",
        border: focused
          ? "1px solid rgba(182,0,168,0.5)"
          : value.length > 0
            ? "1px solid rgba(215,226,234,0.18)"
            : "1px solid rgba(215,226,234,0.08)",
        background: focused
          ? "rgba(255,255,255,0.04)"
          : "rgba(255,255,255,0.025)",
        transition: "border-color 0.3s ease, background 0.3s ease",
        overflow: "hidden",
        height: multiline ? "auto" : "64px",
        display: "flex",
        alignItems: multiline ? "flex-start" : "center",
        paddingLeft: icon ? "16px" : "20px",
        paddingRight: "20px",
      }}>
        {/* Leading icon */}
        {icon && (
          <span style={{
            marginRight: "10px",
            marginTop: multiline ? "20px" : "0",
            opacity: focused ? 0.7 : 0.3,
            transition: "opacity 0.2s",
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
          }}>
            {icon}
          </span>
        )}

        {/* Floating label + input stacked */}
        <div style={{ flex: 1, position: "relative", height: multiline ? "auto" : "100%" }}>
          <label
            htmlFor={uid}
            style={{
              position: multiline ? "absolute" : "absolute",
              left: 0,
              top: multiline
                ? (lifted ? "10px" : "50%")
                : (lifted ? "10px" : "50%"),
              transform: (!lifted) ? "translateY(-50%)" : "none",
              fontSize: lifted ? "0.7rem" : "0.95rem",
              color: focused
                ? "rgba(182,0,168,0.85)"
                : lifted
                  ? "rgba(215,226,234,0.4)"
                  : "rgba(215,226,234,0.35)",
              fontFamily: "'Kanit', sans-serif",
              fontWeight: lifted ? 500 : 300,
              letterSpacing: lifted ? "0.08em" : "0.01em",
              textTransform: lifted ? "uppercase" : "none",
              transition: "all 0.22s cubic-bezier(0.4, 0, 0.2, 1)",
              pointerEvents: "none",
              whiteSpace: "nowrap",
            }}
          >
            {label}
          </label>

          {multiline ? (
            <textarea
              id={uid}
              rows={rows}
              value={value}
              required={required}
              disabled={disabled}
              onChange={e => onChange(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              style={{
                ...sharedStyle,
                paddingTop: "32px",
                paddingLeft: 0,
                paddingRight: 0,
                paddingBottom: "12px",
                minHeight: "140px",
              }}
            />
          ) : (
            <input
              id={uid}
              type={type}
              value={value}
              required={required}
              disabled={disabled}
              onChange={e => onChange(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              style={{
                ...sharedStyle,
                position: "absolute",
                bottom: "10px",
                left: 0,
                width: "100%",
                padding: "0",
              }}
            />
          )}
        </div>

        {/* Trailing checkmark when filled */}
        {!focused && value.length > 0 && !multiline && (
          <span style={{
            marginLeft: "10px",
            flexShrink: 0,
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            background: "rgba(168,230,150,0.12)",
            border: "1px solid rgba(168,230,150,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
              <path d="M1 4L3.5 6.5L9 1" stroke="#A8E696" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        )}
      </div>

      {/* Underline shimmer on focus */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: "10%",
        right: "10%",
        height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(182,0,168,0.5), transparent)",
        transform: focused ? "scaleX(1)" : "scaleX(0)",
        transition: "transform 0.35s ease",
        borderRadius: "1px",
      }} />
    </div>
  );
}

/* ─── Character counter for textarea ─────────────────────────────────────── */
function CharCounter({ value, max }: { value: string; max: number }) {
  const pct = value.length / max;
  const color = pct > 0.9 ? "rgba(255,140,100,0.7)" : "rgba(215,226,234,0.25)";
  return (
    <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "8px", marginTop: "-12px" }}>
      <div style={{ flex: 1, height: "2px", borderRadius: "2px", background: "rgba(215,226,234,0.06)", overflow: "hidden" }}>
        <div style={{ height: "100%", width: `${Math.min(pct * 100, 100)}%`, background: pct > 0.9 ? "rgba(255,140,100,0.6)" : "rgba(182,0,168,0.4)", transition: "width 0.1s, background 0.3s", borderRadius: "2px" }} />
      </div>
      <span style={{ fontSize: "0.7rem", color, fontFamily: "'Kanit', sans-serif", minWidth: "52px", textAlign: "right" }}>
        {value.length}/{max}
      </span>
    </div>
  );
}

/* ─── Icons ───────────────────────────────────────────────────────────────── */
const IconUser = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(215,226,234,0.6)" strokeWidth="1.5" strokeLinecap="round">
    <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
  </svg>
);
const IconMail = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(215,226,234,0.6)" strokeWidth="1.5" strokeLinecap="round">
    <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 7l10 7 10-7" />
  </svg>
);
const IconChat = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(215,226,234,0.6)" strokeWidth="1.5" strokeLinecap="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

/* ─── Main section ────────────────────────────────────────────────────────── */
const MESSAGE_MAX = 600;

export default function ContactSection() {
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSending(true);
    setStatusMessage(null);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = (await response.json().catch(() => null)) as { error?: string } | null;
      if (!response.ok) throw new Error(result?.error ?? "Failed to send email.");
      setStatusMessage("Message sent successfully.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatusMessage(error instanceof Error ? error.message : "Email could not be sent.");
    } finally {
      setIsSending(false);
    }
  };

  const success = statusMessage?.includes("successfully");

  return (
    <section
      id="contact"
      style={{
        background: "#0C0C0C",
        padding: "clamp(80px, 8vw, 120px) clamp(20px, 4vw, 40px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "40px",
        textAlign: "center",
        borderTop: "1px solid rgba(215,226,234,0.06)",
      }}
    >
      {/* Kill browser autofill white/yellow background */}
      <style dangerouslySetInnerHTML={{ __html: `
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        input:-webkit-autofill:active,
        textarea:-webkit-autofill,
        textarea:-webkit-autofill:hover,
        textarea:-webkit-autofill:focus {
          -webkit-box-shadow: 0 0 0 1000px transparent inset !important;
          box-shadow: 0 0 0 1000px transparent inset !important;
          -webkit-text-fill-color: #D7E2EA !important;
          caret-color: #D7E2EA;
          transition: background-color 9999s ease-in-out 0s;
        }
        input, textarea { color-scheme: dark; }
      `}} />

      {/* Heading */}
      <FadeIn delay={0} y={30}>
        <h2
          className="hero-heading"
          style={{
            fontWeight: 900,
            textTransform: "uppercase",
            fontSize: "clamp(2.5rem, 8vw, 100px)",
            lineHeight: 0.95,
            letterSpacing: "-0.03em",
            fontFamily: "'Kanit', sans-serif",
          }}
        >
          Let&apos;s talk
        </h2>
      </FadeIn>

      <FadeIn delay={0.15} y={20}>
        <p style={{
          color: "rgba(215,226,234,0.45)",
          fontSize: "clamp(0.95rem, 1.6vw, 1.1rem)",
          maxWidth: "420px",
          fontFamily: "'Kanit', sans-serif",
          fontWeight: 300,
          lineHeight: 1.6,
        }}>
          Ready to bring your vision to life? Let&apos;s create something unforgettable together.
        </p>
      </FadeIn>

      {/* ── Form ── */}
      <FadeIn delay={0.3} y={20} style={{ width: "100%", maxWidth: "560px" }}>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

          {/* Row: name + email side by side on ≥500px */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "16px",
          }}>
            <FloatingField
              label="Your name"
              value={formData.name}
              onChange={v => setFormData(f => ({ ...f, name: v }))}
              disabled={isSending}
              required
              icon={<IconUser />}
            />
            <FloatingField
              label="Email address"
              type="email"
              value={formData.email}
              onChange={v => setFormData(f => ({ ...f, email: v }))}
              disabled={isSending}
              required
              icon={<IconMail />}
            />
          </div>

          {/* Message */}
          <FloatingField
            label="Your message"
            value={formData.message}
            onChange={v => v.length <= MESSAGE_MAX && setFormData(f => ({ ...f, message: v }))}
            disabled={isSending}
            required
            multiline
            rows={5}
            icon={<IconChat />}
          />
          <CharCounter value={formData.message} max={MESSAGE_MAX} />

          {/* Submit */}
          <div style={{ marginTop: "4px" }}>
            <ContactButton
              size="lg"
              text={isSending ? "Sending…" : "Send Message"}
              type="submit"
              disabled={isSending}
            />
          </div>
        </form>
      </FadeIn>

      {/* Status toast */}
      {statusMessage && (
        <FadeIn delay={0} y={10}>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "12px 20px",
            borderRadius: "12px",
            background: success ? "rgba(168,230,150,0.07)" : "rgba(255,120,100,0.07)",
            border: `1px solid ${success ? "rgba(168,230,150,0.2)" : "rgba(255,120,100,0.2)"}`,
          }}>
            {success ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(168,230,150,0.8)" strokeWidth="2" strokeLinecap="round">
                <circle cx="12" cy="12" r="10" /><path d="M8 12l3 3 5-5" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,120,100,0.8)" strokeWidth="2" strokeLinecap="round">
                <circle cx="12" cy="12" r="10" /><path d="M12 8v4m0 4h.01" />
              </svg>
            )}
            <span style={{
              color: success ? "rgba(168,230,150,0.85)" : "rgba(255,120,100,0.85)",
              fontSize: "0.88rem",
              fontFamily: "'Kanit', sans-serif",
              fontWeight: 400,
            }}>
              {statusMessage}
            </span>
          </div>
        </FadeIn>
      )}

      {/* Footer */}
      <p style={{
        color: "rgba(215,226,234,0.18)",
        fontSize: "0.72rem",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        fontFamily: "'Kanit', sans-serif",
        marginTop: "32px",
      }}>
        © {currentYear ?? "…"} Sadhurka Devadas
      </p>
    </section>
  );
}