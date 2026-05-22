"use client";

import { motion } from "framer-motion";

type Size = "sm" | "md" | "lg";

const sizes: Record<Size, { padding: string; fontSize: string }> = {
  sm: { padding: "10px 28px", fontSize: "0.72rem" },
  md: { padding: "14px 36px", fontSize: "0.85rem" },
  lg: { padding: "16px 44px", fontSize: "1rem" },
};

interface ContactButtonProps {
  size?: Size;
  text?: string;
  href?: string;
  target?: "_blank" | "_self";
  download?: boolean | string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function ContactButton({
  size = "md",
  text = "Contact Me",
  href,
  target = "_blank",
  download,
  type = "button",
  disabled = false,
}: ContactButtonProps) {
  if (href) {
    return (
      <motion.a
        href={href}
        target={download ? "_self" : target}
        download={download}
        rel={target === "_blank" && !download ? "noreferrer noopener" : undefined}
        aria-disabled={disabled}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        style={{
          borderRadius: "9999px",
          background:
            "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
          boxShadow:
            "0px 4px 4px rgba(181,1,167,0.25), inset 4px 4px 12px #7721B1",
          outline: "2px solid white",
          outlineOffset: "-3px",
          color: "white",
          fontFamily: "'Kanit', sans-serif",
          fontWeight: 500,
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          border: "none",
          cursor: "pointer",
          textDecoration: "none",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: disabled ? "none" : "auto",
          opacity: disabled ? 0.6 : 1,
          ...sizes[size],
        }}
      >
        {text}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      style={{
        borderRadius: "9999px",
        background:
          "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
        boxShadow:
          "0px 4px 4px rgba(181,1,167,0.25), inset 4px 4px 12px #7721B1",
        outline: "2px solid white",
        outlineOffset: "-3px",
        color: "white",
        fontFamily: "'Kanit', sans-serif",
        fontWeight: 500,
        textTransform: "uppercase",
        letterSpacing: "0.12em",
        border: "none",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.6 : 1,
        ...sizes[size],
      }}
    >
      {text}
    </motion.button>
  );
}
