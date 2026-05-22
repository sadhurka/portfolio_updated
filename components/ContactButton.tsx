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
}

export default function ContactButton({ size = "md", text = "Contact Me" }: ContactButtonProps) {
  return (
    <motion.button
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
        ...sizes[size],
      }}
    >
      {text}
    </motion.button>
  );
}
