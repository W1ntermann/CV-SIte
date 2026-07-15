"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";
import { getProjectBySlug, projects } from "@/lib/projects";
import { FadeIn } from "@/components/FadeIn";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const { t, lang } = useLanguage();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <main
        style={{ backgroundColor: "#0C0C0C", overflowX: "clip" }}
        className="min-h-screen flex items-center justify-center px-4"
      >
        <div className="text-center">
          <h1
            className="hero-heading font-black uppercase mb-6"
            style={{ fontSize: "clamp(2rem, 8vw, 6rem)" }}
          >
            404
          </h1>
          <p
            className="text-lg mb-8"
            style={{ color: "rgba(215, 226, 234, 0.6)" }}
          >
            {t.projects.detail.notFound}
          </p>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium uppercase tracking-widest transition-all duration-200"
            style={{
              background: "rgba(215, 226, 234, 0.08)",
              border: "1px solid rgba(215, 226, 234, 0.25)",
              color: "#D7E2EA",
            }}
          >
            <ArrowLeft size={16} />
            {t.projects.backToProjects}
          </Link>
        </div>
      </main>
    );
  }

  const description = project.description[lang === "ua" ? "ua" : "en"];
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main
      style={{ backgroundColor: "#0C0C0C", overflowX: "clip" }}
      className="min-h-screen pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20"
    >
      <div className="mx-auto max-w-[1400px] px-3 sm:px-5 md:px-8 lg:px-10">
        {/* Hero section */}
        <FadeIn>
          <div className="flex flex-col gap-4 mb-10 sm:mb-14">
            <div className="flex items-center gap-4 sm:gap-6">
              <span
                className="font-black"
                style={{ color: "#D7E2EA", fontSize: "clamp(3rem, 10vw, 8rem)", lineHeight: 1 }}
              >
                {project.n}
              </span>
              <div className="flex flex-col gap-1 sm:gap-2">
                <span
                  className="uppercase tracking-widest font-light text-xs sm:text-sm md:text-base"
                  style={{ color: "rgba(215, 226, 234, 0.6)" }}
                >
                  {project.category === "client"
                    ? t.projects.categories.client
                    : t.projects.categories.personal}
                </span>
                <h1
                  className="font-medium uppercase"
                  style={{
                    color: "#D7E2EA",
                    fontSize: "clamp(1.5rem, 5vw, 4rem)",
                    lineHeight: 1.1,
                  }}
                >
                  {project.name}
                </h1>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Main image */}
        <FadeIn delay={0.1}>
          <div className="rounded-[28px] sm:rounded-[40px] lg:rounded-[50px] overflow-hidden border-2 mb-10 sm:mb-14 lg:mb-20" style={{ borderColor: "rgba(215, 226, 234, 0.12)" }}>
            <img
              src={project.col2}
              alt={project.name}
              className="w-full h-auto object-cover"
              style={{ maxHeight: "70vh" }}
            />
          </div>
        </FadeIn>

        {/* Info grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 mb-12 sm:mb-16 lg:mb-20">
          {/* Overview */}
          <FadeIn delay={0.15} className="lg:col-span-2">
            <div>
              <h2
                className="uppercase tracking-widest font-light text-sm sm:text-base mb-4"
                style={{ color: "rgba(215, 226, 234, 0.6)" }}
              >
                {t.projects.detail.overview}
              </h2>
              <p
                className="text-base sm:text-lg font-light leading-relaxed"
                style={{ color: "rgba(215, 226, 234, 0.85)" }}
              >
                {description}
              </p>
            </div>
          </FadeIn>

          {/* Meta sidebar */}
          <FadeIn delay={0.2}>
            <div className="flex flex-col gap-6">
              {/* Category */}
              <div>
                <span
                  className="uppercase tracking-widest font-light text-xs block mb-1"
                  style={{ color: "rgba(215, 226, 234, 0.5)" }}
                >
                  {t.projects.detail.category}
                </span>
                <span className="text-base font-medium" style={{ color: "#D7E2EA" }}>
                  {project.category === "client"
                    ? t.projects.categories.client
                    : t.projects.categories.personal}
                </span>
              </div>
              {/* Year */}
              <div>
                <span
                  className="uppercase tracking-widest font-light text-xs block mb-1"
                  style={{ color: "rgba(215, 226, 234, 0.5)" }}
                >
                  {t.projects.detail.year}
                </span>
                <span className="text-base font-medium" style={{ color: "#D7E2EA" }}>
                  {project.year}
                </span>
              </div>
              {/* Role */}
              <div>
                <span
                  className="uppercase tracking-widest font-light text-xs block mb-1"
                  style={{ color: "rgba(215, 226, 234, 0.5)" }}
                >
                  {t.projects.detail.role}
                </span>
                <span className="text-base font-medium" style={{ color: "#D7E2EA" }}>
                  {project.role}
                </span>
              </div>
              {/* Tech Stack */}
              <div>
                <span
                  className="uppercase tracking-widest font-light text-xs block mb-2"
                  style={{ color: "rgba(215, 226, 234, 0.5)" }}
                >
                  {t.projects.detail.techStack}
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full px-3 py-1 text-xs font-medium"
                      style={{
                        background: "rgba(215, 226, 234, 0.08)",
                        border: "1px solid rgba(215, 226, 234, 0.2)",
                        color: "#D7E2EA",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {/* Live link */}
              {project.href && (
                <div>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium uppercase tracking-widest transition-all duration-200"
                    style={{
                      background: "rgba(215, 226, 234, 0.08)",
                      border: "1px solid rgba(215, 226, 234, 0.25)",
                      color: "#D7E2EA",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(215, 226, 234, 0.15)";
                      e.currentTarget.style.borderColor = "rgba(215, 226, 234, 0.4)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(215, 226, 234, 0.08)";
                      e.currentTarget.style.borderColor = "rgba(215, 226, 234, 0.25)";
                    }}
                  >
                    {t.projects.detail.visitLive}
                    <ExternalLink size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                  </a>
                </div>
              )}
            </div>
          </FadeIn>
        </div>

        {/* Gallery */}
        <FadeIn delay={0.25}>
          <div className="mb-12 sm:mb-16 lg:mb-20">
            <h2
              className="uppercase tracking-widest font-light text-sm sm:text-base mb-6"
              style={{ color: "rgba(215, 226, 234, 0.6)" }}
            >
              {t.projects.detail.gallery}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {project.gallery.map((img, i) => (
                <div
                  key={i}
                  className={`rounded-[24px] sm:rounded-[36px] lg:rounded-[48px] overflow-hidden border-2 ${i === 0 ? "sm:col-span-2" : ""}`}
                  style={{ borderColor: "rgba(215, 226, 234, 0.12)" }}
                >
                  <img
                    src={img}
                    alt={`${project.name} — ${i + 1}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                    style={{ aspectRatio: i === 0 ? "16/9" : "4/3" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Next project */}
        <FadeIn delay={0.3}>
          <div
            className="rounded-[28px] sm:rounded-[40px] lg:rounded-[50px] border-2 p-6 sm:p-8 lg:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
            style={{ borderColor: "rgba(215, 226, 234, 0.12)" }}
          >
            <div className="flex items-center gap-4 sm:gap-6">
              <span
                className="font-black"
                style={{ color: "rgba(215, 226, 234, 0.4)", fontSize: "clamp(2rem, 6vw, 5rem)", lineHeight: 1 }}
              >
                {nextProject.n}
              </span>
              <div className="flex flex-col gap-1">
                <span
                  className="uppercase tracking-widest font-light text-xs"
                  style={{ color: "rgba(215, 226, 234, 0.5)" }}
                >
                  {nextProject.category === "client"
                    ? t.projects.categories.client
                    : t.projects.categories.personal}
                </span>
                <span
                  className="font-medium uppercase"
                  style={{ color: "#D7E2EA", fontSize: "clamp(1.2rem, 3vw, 2rem)", lineHeight: 1.1 }}
                >
                  {nextProject.name}
                </span>
              </div>
            </div>
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium uppercase tracking-widest transition-all duration-200"
              style={{
                background: "rgba(215, 226, 234, 0.08)",
                border: "1px solid rgba(215, 226, 234, 0.25)",
                color: "#D7E2EA",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(215, 226, 234, 0.15)";
                e.currentTarget.style.borderColor = "rgba(215, 226, 234, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(215, 226, 234, 0.08)";
                e.currentTarget.style.borderColor = "rgba(215, 226, 234, 0.25)";
              }}
            >
              {t.projects.viewMore}
              <ArrowLeft size={16} className="rotate-180 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}