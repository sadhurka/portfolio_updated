"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, type RefObject } from "framer-motion";
import LiveProjectButton from "./LiveProjectButton";

interface Project {
  num: string;
  name: string;
  category: string;
  img1: string;
  img2: string;
  img3: string;
  link?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  total: number;
  containerRef: RefObject<HTMLElement | null>;
}

const RADIUS = "clamp(32px, 4vw, 60px)";

export default function ProjectCard({
  project,
  index,
  total,
  containerRef,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: containerRef });

  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(
    scrollYProgress,
    [index / total, 1],
    [1, targetScale]
  );

  return (
    <div
      style={{
        height: "85vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        position: "sticky",
        top: `${24 + index * 28}px`,
      }}
    >
      <motion.div
        ref={cardRef}
        style={{
          scale,
          width: "100%",
          maxWidth: "1100px",
          borderRadius: RADIUS,
          border: "2px solid #D7E2EA",
          background: "#0C0C0C",
          padding: "clamp(16px, 2.5vw, 32px)",
          transformOrigin: "top center",
          willChange: "transform",
        }}
      >
        {/* ── Top row ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "clamp(16px, 2vw, 24px)",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "clamp(12px, 2vw, 28px)",
            }}
          >
            <span
              style={{
                fontWeight: 900,
                fontSize: "clamp(2.5rem, 8vw, 120px)",
                lineHeight: 0.9,
                color: "rgba(215,226,234,0.2)",
                fontFamily: "'Kanit', sans-serif",
              }}
            >
              {project.num}
            </span>
            <div>
              <p
                style={{
                  color: "rgba(215,226,234,0.5)",
                  fontSize: "clamp(0.7rem, 1.2vw, 1rem)",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  fontFamily: "'Kanit', sans-serif",
                  marginBottom: "4px",
                }}
              >
                {project.category}
              </p>
              <p
                style={{
                  color: "#D7E2EA",
                  fontWeight: 700,
                  fontSize: "clamp(1rem, 2.5vw, 2rem)",
                  textTransform: "uppercase",
                  fontFamily: "'Kanit', sans-serif",
                  letterSpacing: "-0.01em",
                }}
              >
                {project.name}
              </p>
            </div>
          </div>
          <LiveProjectButton link={project.link} />
        </div>

        {/* ── Image grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "40% 60%",
            gap: "clamp(8px, 1vw, 12px)",
          }}
        >
          {/* Left column: 2 stacked images */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "clamp(8px, 1vw, 12px)",
            }}
          >
            <Image
              src={project.img1}
              alt={`${project.name} screenshot 1`}
              width={600}
              height={230}
              style={{
                width: "100%",
                height: "clamp(130px, 16vw, 230px)",
                objectFit: "cover",
                borderRadius: RADIUS,
              }}
            />
            <Image
              src={project.img2}
              alt={`${project.name} screenshot 2`}
              width={600}
              height={340}
              style={{
                width: "100%",
                height: "clamp(160px, 22vw, 340px)",
                objectFit: "cover",
                borderRadius: RADIUS,
              }}
            />
          </div>

          {/* Right column: tall image */}
          <Image
            src={project.img3}
            alt={`${project.name} screenshot 3`}
            width={800}
            height={580}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: RADIUS,
              minHeight: "clamp(300px, 40vw, 580px)",
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}
