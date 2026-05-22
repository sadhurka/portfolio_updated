"use client";

import { motion } from "framer-motion";

interface LiveProjectButtonProps {
  link?: string;
}

export default function LiveProjectButton({ link }: LiveProjectButtonProps) {
  const handleClick = () => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      disabled={!link}
      whileHover={link ? { backgroundColor: "rgba(215,226,234,0.1)" } : {}}
      style={{
        borderRadius: "9999px",
        border: "2px solid #D7E2EA",
        color: "#D7E2EA",
        fontFamily: "'Kanit', sans-serif",
        fontWeight: 500,
        textTransform: "uppercase",
        letterSpacing: "0.12em",
        padding: "10px 28px",
        fontSize: "0.82rem",
        background: "transparent",
        cursor: link ? "pointer" : "not-allowed",
        whiteSpace: "nowrap",
        transition: "background-color 0.2s ease",
        opacity: link ? 1 : 0.5,
      }}
    >
      Live Project
    </motion.button>
  );
}
