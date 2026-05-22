"use client";

import { useEffect, useRef, useState, useCallback, type ReactNode } from "react";
import { motion, useMotionValue } from "framer-motion";

interface MagnetProps {
  children: ReactNode;
  padding?: number;
  strength?: number;
}

export default function Magnet({
  children,
  padding = 150,
  strength = 3,
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMove = useCallback(
    (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;

      const inRange =
        dx > -rect.width / 2 - padding &&
        dx < rect.width / 2 + padding &&
        dy > -rect.height / 2 - padding &&
        dy < rect.height / 2 + padding;

      if (inRange) {
        setActive(true);
        x.set(dx / strength);
        y.set(dy / strength);
      } else {
        setActive(false);
        x.set(0);
        y.set(0);
      }
    },
    [padding, strength, x, y]
  );

  useEffect(() => {
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [handleMove]);

  return (
    <motion.div
      ref={ref}
      style={{
        x,
        y,
        transition: active
          ? "transform 0.3s ease-out"
          : "transform 0.6s ease-in-out",
        willChange: "transform",
      }}
    >
      {children}
    </motion.div>
  );
}
