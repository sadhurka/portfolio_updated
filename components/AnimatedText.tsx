"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { CSSProperties } from "react";

interface AnimatedTextProps {
  text: string;
  style?: CSSProperties;
  className?: string;
}

function AnimatedChar({
  char,
  index,
  total,
  scrollYProgress,
}: {
  char: string;
  index: number;
  total: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

  return (
    <span style={{ position: "relative", display: "inline" }}>
      {/* invisible placeholder preserves width */}
      <span style={{ opacity: 0 }}>{char}</span>
      <motion.span
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          opacity,
        }}
      >
        {char}
      </motion.span>
    </span>
  );
}

export default function AnimatedText({ text, style, className }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  const chars = text.split("");

  return (
    <p ref={ref} style={{ ...style, position: "relative" }} className={className}>
      {chars.map((char, i) => (
        <AnimatedChar
          key={i}
          char={char}
          index={i}
          total={chars.length}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </p>
  );
}
