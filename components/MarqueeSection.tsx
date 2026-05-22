"use client";

import { useEffect, useRef, useState } from "react";
import { MARQUEE_ROW1, MARQUEE_ROW2 } from "@/lib/data";

// Triple each row for seamless looping
const ROW1 = [...MARQUEE_ROW1, ...MARQUEE_ROW1, ...MARQUEE_ROW1];
const ROW2 = [...MARQUEE_ROW2, ...MARQUEE_ROW2, ...MARQUEE_ROW2];

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(200);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const val =
        (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(val);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const rows = [
    { images: ROW1, direction: 1 },
    { images: ROW2, direction: -1 },
  ];

  return (
    <section
      ref={sectionRef}
      style={{
        background: "#0C0C0C",
        padding: "clamp(80px, 10vw, 160px) 0 40px",
        overflow: "hidden",
      }}
    >
      {rows.map(({ images, direction }, rowIndex) => (
        <div
          key={rowIndex}
          style={{
            marginBottom: rowIndex === 0 ? "12px" : 0,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "12px",
              transform: `translateX(${offset * direction - 200 * direction}px)`,
              willChange: "transform",
              transition: "transform 0.05s linear",
            }}
          >
            {images.map((src, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={i}
                src={src}
                alt=""
                loading="lazy"
                style={{
                  width: "420px",
                  height: "270px",
                  flexShrink: 0,
                  borderRadius: "16px",
                  objectFit: "cover",
                }}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
