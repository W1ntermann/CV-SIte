"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Eye } from "lucide-react";
import { LiveProjectButton, ViewProjectButton } from "./Buttons";
import { useLanguage } from "@/i18n/LanguageContext";
import { projects, type Project } from "@/lib/projects";

export function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative z-10 -mt-8 sm:-mt-10 md:-mt-14 rounded-t-[24px] sm:rounded-t-[32px] md:rounded-t-[40px] lg:rounded-t-[50px] px-3 sm:px-5 md:px-8 lg:px-10 pt-8 sm:pt-12 md:pt-20 lg:pt-24 pb-4 sm:pb-6 md:pb-10 scroll-mt-24"
      style={{ backgroundColor: "#0C0C0C" }}
    >
      {/* Section eyebrow */}
      <motion.div
        className="text-center mb-3 sm:mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "50px" }}
      >
        <span
          className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-medium"
          style={{ color: "rgba(215,226,234,0.35)" }}
        >
          — {t.projects.title === "Project" ? "Selected Work" : "Вибрані роботи"}
        </span>
      </motion.div>

      <motion.h2
        className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20"
        style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)" }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true, margin: "50px" }}
      >
        {t.projects.title}
      </motion.h2>

      <div className="flex flex-col gap-4 sm:gap-6 md:gap-0">
        {projects.map((p, i) => {
          const targetScale = 1 - (projects.length - 1 - i) * 0.05;
          const range = [i / projects.length, 1];
          return (
            <ProjectCard
              key={p.n}
              project={p}
              index={i}
              targetScale={targetScale}
              progress={scrollYProgress}
              range={range as [number, number]}
              isMobile={isMobile}
            />
          );
        })}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  targetScale,
  progress,
  range,
  isMobile,
}: {
  project: Project;
  index: number;
  targetScale: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number];
  isMobile: boolean;
}) {
  const { t } = useLanguage();
  const scale = useTransform(progress, range, [1, targetScale]);
  const [isHovered, setIsHovered] = useState(false);
  const isFirst = index === 0;

  return (
    <div
      className={
        isMobile
          ? "h-auto flex items-start justify-center"
          : "h-[60vh] md:h-[65vh] lg:h-[70vh] sticky flex items-start justify-center"
      }
      style={isMobile ? undefined : { top: `${80 + index * 50}px` }}
    >
      <motion.div
        style={
          isMobile
            ? { backgroundColor: "#0C0C0C" }
            : { scale, backgroundColor: "#0C0C0C", transformOrigin: "top center" }
        }
        className={
          isMobile
            ? "w-full overflow-hidden rounded-[20px] sm:rounded-[28px] md:rounded-[40px] lg:rounded-[50px] p-[1px] flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6"
            : "w-full max-h-[calc(60vh-16px)] md:max-h-[calc(65vh-16px)] lg:max-h-[calc(70vh-16px)] overflow-hidden rounded-[20px] sm:rounded-[28px] md:rounded-[40px] lg:rounded-[50px] p-[1px] flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6"
        }
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Gradient border via pseudo-element approach — inner wrapper */}
        <div
          className="relative w-full h-full overflow-hidden rounded-[20px] sm:rounded-[28px] md:rounded-[40px] lg:rounded-[50px] flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6 p-3 sm:p-4 md:p-6 lg:p-8"
          style={{
            background: "#0C0C0C",
            border: "1px solid rgba(215,226,234,0.1)",
            boxShadow: isHovered
              ? "0 0 40px rgba(215,226,234,0.06), 0 0 80px rgba(215,226,234,0.02)"
              : "0 0 20px rgba(215,226,234,0.02)",
            transition: "box-shadow 0.4s ease, border-color 0.4s ease",
            borderColor: isHovered ? "rgba(215,226,234,0.25)" : "rgba(215,226,234,0.1)",
          }}
        >
          {/* Featured indicator for first project */}
          {isFirst && (
            <motion.div
              className="absolute top-4 right-4 sm:top-5 sm:right-5 md:top-6 md:right-6 z-10"
              initial={{ opacity: 0, x: 10, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 300, damping: 25 }}
            >
              <motion.span
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] sm:text-xs font-medium uppercase tracking-wider"
                style={{
                  background: "rgba(215,226,234,0.08)",
                  border: "1px solid rgba(215,226,234,0.15)",
                  color: "rgba(215,226,234,0.7)",
                }}
                whileHover={{
                  background: "rgba(215,226,234,0.15)",
                  borderColor: "rgba(215,226,234,0.3)",
                }}
              >
                <motion.span
                  className="w-1.5 h-1.5 rounded-full bg-green-400"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                Featured
              </motion.span>
            </motion.div>
          )}

          {/* Header row */}
          <div className="flex items-start sm:items-center justify-between gap-3 sm:gap-4 flex-col sm:flex-row flex-shrink-0">
            <div className="flex items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8">
              <motion.span
                className="font-black"
                style={{ color: "#D7E2EA", fontSize: "clamp(1.6rem, 5vw, 3.5rem)", lineHeight: 1 }}
                animate={isHovered ? { scale: 1.05, color: "#E8F0F8" } : { scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {project.n}
              </motion.span>
              <div className="flex flex-col gap-1.5 sm:gap-2">
                {/* Category badge */}
                <motion.span
                  className="inline-flex self-start uppercase tracking-wider font-medium text-[10px] sm:text-xs px-2.5 py-0.5 rounded-full"
                  style={{
                    background: "rgba(215,226,234,0.06)",
                    border: "1px solid rgba(215,226,234,0.1)",
                    color: "rgba(215,226,234,0.55)",
                  }}
                  whileHover={{
                    background: "rgba(215,226,234,0.12)",
                    borderColor: "rgba(215,226,234,0.25)",
                  }}
                >
                  {project.category === "client"
                    ? t.projects.categories.client
                    : t.projects.categories.personal}
                </motion.span>
                <h3
                  className="font-semibold uppercase"
                  style={{ color: "#D7E2EA", fontSize: "clamp(0.85rem, 2vw, 2rem)", lineHeight: 1.1 }}
                >
                  {project.name}
                </h3>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {project.techStack.slice(0, 4).map((tech, idx) => (
                    <motion.span
                      key={tech}
                      className="text-[10px] sm:text-[11px] font-medium px-2 py-0.5 rounded-md cursor-default"
                      style={{
                        background: "rgba(215,226,234,0.04)",
                        color: "rgba(215,226,234,0.5)",
                        border: "1px solid rgba(215,226,234,0.06)",
                      }}
                      initial={{ opacity: 0, y: 5 }}
                      animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05, duration: 0.3 }}
                      whileHover={{
                        background: "rgba(215,226,234,0.1)",
                        borderColor: "rgba(215,226,234,0.15)",
                        color: "rgba(215,226,234,0.7)",
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 w-full sm:w-auto sm:justify-end min-w-0">
              <ViewProjectButton slug={project.slug} />
              <LiveProjectButton href={project.href} />
            </div>
          </div>

          {/* Images row */}
          <div className="flex items-stretch gap-2 sm:gap-3 md:gap-4 lg:gap-6 flex-1 min-h-0 h-[40vh] sm:h-[45vh] md:h-auto">
            <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-6 min-h-0" style={{ width: "40%" }}>
              <motion.div
                className="relative w-full flex-1 min-h-0 overflow-hidden rounded-[16px] sm:rounded-[24px] md:rounded-[36px] lg:rounded-[48px] group/img"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={project.col1[0]}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                />
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(to top, rgba(12,12,12,0.4) 0%, transparent 50%)",
                  }}
                  animate={{ opacity: isHovered ? 0.3 : 0.55 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
              <motion.div
                className="relative w-full flex-1 min-h-0 overflow-hidden rounded-[16px] sm:rounded-[24px] md:rounded-[36px] lg:rounded-[48px] group/img"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={project.col1[1]}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                />
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(to top, rgba(12,12,12,0.4) 0%, transparent 50%)",
                  }}
                  animate={{ opacity: isHovered ? 0.3 : 0.55 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            </div>
            <motion.div
              className="relative flex min-h-0 overflow-hidden rounded-[16px] sm:rounded-[24px] md:rounded-[36px] lg:rounded-[48px] group/img"
              style={{ width: "60%" }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={project.col2}
                alt=""
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
              />
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "linear-gradient(to top, rgba(12,12,12,0.4) 0%, transparent 50%)",
                }}
                animate={{ opacity: isHovered ? 0.3 : 0.55 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          </div>

          {/* Corner decorative accents */}
          <div
            aria-hidden
            className="absolute top-0 left-0 w-12 h-12 sm:w-16 sm:h-16 pointer-events-none"
            style={{
              background: "radial-gradient(circle at top left, rgba(215,226,234,0.04) 0%, transparent 70%)",
              borderTopLeftRadius: "inherit",
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}