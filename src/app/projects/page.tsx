"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";
import { projects } from "@/lib/projects";
import { FadeIn } from "@/components/FadeIn";
import { ArrowRight } from "lucide-react";

export default function ProjectsPage() {
  const { t, lang } = useLanguage();

  return (
    <main
      style={{ backgroundColor: "#0C0C0C", overflowX: "clip" }}
      className="min-h-screen pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 px-3 sm:px-5 md:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Title */}
        <FadeIn>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-12 sm:mb-16 lg:mb-20"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            {t.projects.title}
          </h2>
        </FadeIn>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {projects.map((project, i) => (
            <FadeIn key={project.n} delay={i * 0.1}>
              <Link
                href={`/projects/${project.slug}`}
                className="group block rounded-[28px] sm:rounded-[40px] lg:rounded-[50px] border-2 overflow-hidden transition-all duration-300 hover:border-[rgba(215,226,234,0.4)]"
                style={{
                  borderColor: "rgba(215, 226, 234, 0.12)",
                  backgroundColor: "#0C0C0C",
                }}
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.col2}
                    alt={project.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent 40%, rgba(12,12,12,0.9) 100%)",
                    }}
                  />
                  <span
                    className="absolute top-4 left-4 sm:top-6 sm:left-6 font-black"
                    style={{
                      color: "#D7E2EA",
                      fontSize: "clamp(2rem, 5vw, 4rem)",
                      lineHeight: 1,
                      textShadow: "0 2px 20px rgba(0,0,0,0.5)",
                    }}
                  >
                    {project.n}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-7 lg:p-8 flex flex-col gap-3">
                  <div className="flex items-center justify-between gap-4">
                    <span
                      className="uppercase tracking-widest font-light text-xs sm:text-sm"
                      style={{ color: "rgba(215, 226, 234, 0.6)" }}
                    >
                      {project.category === "client"
                        ? t.projects.categories.client
                        : t.projects.categories.personal}
                    </span>
                    <span
                      className="text-xs sm:text-sm font-light"
                      style={{ color: "rgba(215, 226, 234, 0.5)" }}
                    >
                      {project.year}
                    </span>
                  </div>
                  <h3
                    className="font-medium uppercase"
                    style={{
                      color: "#D7E2EA",
                      fontSize: "clamp(1.2rem, 3vw, 2rem)",
                      lineHeight: 1.1,
                    }}
                  >
                    {project.name}
                  </h3>
                  <p
                    className="text-sm sm:text-base font-light leading-relaxed line-clamp-2"
                    style={{ color: "rgba(215, 226, 234, 0.7)" }}
                  >
                    {project.description[lang === "ua" ? "ua" : "en"]}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <span
                      className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest transition-colors duration-200 group-hover:text-[#D7E2EA]"
                      style={{ color: "rgba(215, 226, 234, 0.8)" }}
                    >
                      {t.projects.viewMore}
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-0.5"
                      />
                    </span>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </main>
  );
}