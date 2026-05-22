"use client";

import { useRef } from "react";
import FadeIn from "./FadeIn";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "@/lib/data";

export default function ProjectsSection() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section
      id="projects"
      ref={containerRef}
      style={{
        background: "#0C0C0C",
        borderRadius:
          "clamp(40px, 5vw, 60px) clamp(40px, 5vw, 60px) 0 0",
        marginTop: "clamp(-40px, -3vw, -56px)",
        position: "relative",
        zIndex: 10,
        padding:
          "clamp(80px, 8vw, 128px) clamp(20px, 4vw, 40px) 120px",
      }}
    >
      {/* ── Heading ── */}
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading"
          style={{
            fontWeight: 900,
            textTransform: "uppercase",
            lineHeight: 1,
            letterSpacing: "-0.02em",
            fontSize: "clamp(3rem, 12vw, 160px)",
            textAlign: "center",
            marginBottom: "clamp(64px, 8vw, 100px)",
            fontFamily: "'Kanit', sans-serif",
          }}
        >
          Project
        </h2>
      </FadeIn>

      {/* ── Sticky stacking cards ── */}
      {PROJECTS.map((project, i) => (
        <ProjectCard
          key={project.num}
          project={project}
          index={i}
          total={PROJECTS.length}
          containerRef={containerRef}
        />
      ))}
    </section>
  );
}
