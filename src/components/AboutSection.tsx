"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Monitor, Cloud, Database, Code } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { AnimatedText } from "./AnimatedText";
import { ContactButton } from "./Buttons";
import { useLanguage } from "@/i18n/LanguageContext";

const roleIcons = [Monitor, Database, Cloud, Code];

export function AboutSection() {
  const { t, lang } = useLanguage();
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center gap-10 sm:gap-14 md:gap-20 overflow-hidden scroll-mt-24 px-4 sm:px-6 md:px-8 lg:px-10 py-16 sm:py-20 md:py-28"
    >
      {/* Background geometric decorations — pure CSS, no external CDN */}
      {/* Large subtle ring */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-[10%] left-[5%] w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:w-[550px] lg:h-[550px] rounded-full opacity-[0.03]"
        style={{
          border: "1px solid rgba(215,226,234,0.5)",
        }}
      />
      {/* Smaller ring offset */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-[14%] left-[9%] w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] lg:w-[440px] lg:h-[440px] rounded-full opacity-[0.04]"
        style={{
          border: "1px solid rgba(215,226,234,0.4)",
        }}
      />
      {/* Dot grid accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[15%] right-[5%] w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(215,226,234,0.8) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      {/* Large blur orb */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-1/3 right-1/4 w-72 h-72 sm:w-96 sm:h-96 rounded-full opacity-[0.03]"
        style={{
          background: "radial-gradient(circle, rgba(215,226,234,0.5) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{ scale: [1, 1.15, 1], x: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 sm:gap-12 md:gap-16 w-full max-w-6xl mx-auto">
        {/* Eyebrow + Title */}
        <div className="flex flex-col items-center gap-4 sm:gap-6">
          <FadeIn delay={0} y={20}>
            <span
              className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-medium"
              style={{ color: "rgba(215,226,234,0.4)" }}
            >
              — {t.about.eyebrow}
            </span>
          </FadeIn>

          <FadeIn delay={0.1} y={40}>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight text-center"
              style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)" }}
            >
              {t.about.title}
            </h2>
          </FadeIn>

          <AnimatedText
            key={lang}
            text={t.about.body}
            className="font-medium text-center leading-relaxed max-w-[90%] sm:max-w-[540px] md:max-w-[640px]"
            style={{ color: "#D7E2EA", fontSize: "clamp(0.95rem, 1.9vw, 1.35rem)" }}
          />
        </div>

        {/* Stats Row */}
        <FadeIn delay={0.3} y={30}>
          <div
            ref={statsRef}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6 w-full max-w-[640px] sm:max-w-[720px] lg:max-w-[800px]"
          >
            {t.about.stats.map((stat, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center gap-2 rounded-2xl px-4 py-5 sm:px-6 sm:py-6 backdrop-blur-sm"
                style={{
                  background: "rgba(215,226,234,0.03)",
                  border: "1px solid rgba(215,226,234,0.08)",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                whileHover={{
                  borderColor: "rgba(215,226,234,0.2)",
                  background: "rgba(215,226,234,0.05)",
                  y: -4,
                }}
              >
                <span
                  className="font-black"
                  style={{
                    color: "#D7E2EA",
                    fontSize: "clamp(1.4rem, 3.5vw, 2.5rem)",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-[10px] sm:text-xs uppercase tracking-wider font-medium text-center leading-tight"
                  style={{ color: "rgba(215,226,234,0.45)" }}
                >
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </FadeIn>

        {/* Roles Grid */}
        <FadeIn delay={0.4} y={30}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 w-full max-w-[960px]">
            {t.about.roles.map((role, i) => {
              const Icon = roleIcons[i];
              return (
                <motion.div
                  key={role.name}
                  className="group flex flex-col items-start gap-3 rounded-2xl px-5 py-5 sm:px-6 sm:py-6 transition-colors duration-300"
                  style={{
                    background: "rgba(215,226,234,0.02)",
                    border: "1px solid rgba(215,226,234,0.06)",
                  }}
                  whileHover={{
                    borderColor: "rgba(215,226,234,0.18)",
                    background: "rgba(215,226,234,0.04)",
                    y: -3,
                  }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <span
                    className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl transition-colors duration-300"
                    style={{
                      background: "rgba(215,226,234,0.05)",
                      color: "rgba(215,226,234,0.6)",
                    }}
                  >
                    <Icon size={18} className="sm:size-5" strokeWidth={1.5} />
                  </span>
                  <div className="flex flex-col gap-1.5">
                    <span
                      className="text-sm sm:text-base font-semibold uppercase tracking-wide"
                      style={{ color: "#D7E2EA" }}
                    >
                      {role.name}
                    </span>
                    <span
                      className="text-xs sm:text-sm leading-relaxed"
                      style={{ color: "rgba(215,226,234,0.45)" }}
                    >
                      {role.desc}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </FadeIn>

        {/* CTA */}
        <div className="relative z-10 pt-2">
          <ContactButton />
        </div>
      </div>
    </section>
  );
}