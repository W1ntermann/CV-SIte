"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative z-10 -mt-10 sm:-mt-12 md:-mt-14 rounded-t-[32px] sm:rounded-t-[40px] md:rounded-t-[50px] lg:rounded-t-[60px] px-3 sm:px-5 md:px-8 lg:px-10 pt-16 sm:pt-20 md:pt-28 lg:pt-32 pb-6 sm:pb-8 md:pb-10 scroll-mt-24"
      style={{ backgroundColor: "#0C0C0C" }}
    >
      <h2
        className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-24"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        {t.projects.title}
      </h2>
      <div>
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
}: {
  project: Project;
  index: number;
  targetScale: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number];
}) {
  const { t } = useLanguage();
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div
      className="h-[78vh] sm:h-[82vh] lg:h-[90vh] sticky flex items-start justify-center"
      style={{ top: `${80 + index * 50}px` }}
    >
      <motion.div
        style={{ scale, backgroundColor: "#0C0C0C", transformOrigin: "top center" }}
        className="w-full max-h-[calc(78vh-16px)] sm:max-h-[calc(82vh-16px)] lg:max-h-[calc(90vh-16px)] overflow-hidden rounded-[28px] sm:rounded-[40px] md:rounded-[50px] lg:rounded-[60px] border-2 p-3 sm:p-5 md:p-7 lg:p-8 flex flex-col gap-3 sm:gap-5 md:gap-6"
      >
        {/* Header: number, category, name + buttons */}
        <div className="flex items-start sm:items-center justify-between gap-4 flex-col sm:flex-row flex-shrink-0">
          <div className="flex items-center gap-3 sm:gap-5 md:gap-8">
            <span
              className="font-black"
              style={{ color: "#D7E2EA", fontSize: "clamp(2.5rem, 8vw, 120px)", lineHeight: 1 }}
            >
              {project.n}
            </span>
            <div className="flex flex-col gap-0.5 sm:gap-2">
              <span
                className="uppercase tracking-widest font-light text-[10px] sm:text-xs md:text-sm"
                style={{ color: "#D7E2EA", opacity: 0.6 }}
              >
                {project.category === "client"
                  ? t.projects.categories.client
                  : t.projects.categories.personal}
              </span>
              <h3
                className="font-medium uppercase"
                style={{ color: "#D7E2EA", fontSize: "clamp(0.9rem, 2vw, 2rem)", lineHeight: 1.1 }}
              >
                {project.name}
              </h3>
            </div>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <ViewProjectButton slug={project.slug} />
            <LiveProjectButton href={project.href} />
          </div>
        </div>
        {/* Images grid — flex-1 + min-h-0 so it fills remaining space without overflow */}
        <div className="flex items-stretch gap-2 sm:gap-3 md:gap-5 lg:gap-6 flex-1 min-h-0">
          <div className="flex flex-col gap-2 sm:gap-3 md:gap-5 lg:gap-6 min-h-0" style={{ width: "40%" }}>
            <img
              src={project.col1[0]}
              alt=""
              loading="lazy"
              decoding="async"
              className="w-full flex-1 min-h-0 object-cover rounded-[24px] sm:rounded-[36px] md:rounded-[48px] lg:rounded-[60px]"
            />
            <img
              src={project.col1[1]}
              alt=""
              loading="lazy"
              decoding="async"
              className="w-full flex-1 min-h-0 object-cover rounded-[24px] sm:rounded-[36px] md:rounded-[48px] lg:rounded-[60px]"
            />
          </div>
          <div className="flex min-h-0" style={{ width: "60%" }}>
            <img
              src={project.col2}
              alt=""
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover rounded-[24px] sm:rounded-[36px] md:rounded-[48px] lg:rounded-[60px]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}