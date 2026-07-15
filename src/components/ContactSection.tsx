"use client";
import { Mail, Camera, Send, GitFork, ArrowUpRight, MapPin, Clock, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeIn } from "./FadeIn";
import { useLanguage } from "@/i18n/LanguageContext";

const EMAIL = "bogdangembatyuk@gmail.com";

export function ContactSection() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const titleX = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  const socials = [
    { icon: Mail, label: t.contact.labels.email, value: EMAIL, href: `mailto:${EMAIL}` },
    { icon: Camera, label: t.contact.labels.instagram, value: "@bohdan_codes", href: "https://instagram.com/bohdan_codes" },
    { icon: Send, label: t.contact.labels.telegram, value: "@badan_badanowycz", href: "https://t.me/badan_badanowycz" },
    { icon: GitFork, label: t.contact.labels.github, value: "@W1ntermann", href: "https://github.com/W1ntermann" },
  ];

  return (
    <section
      ref={ref}
      id="contact"
      className="relative z-10 -mt-10 sm:-mt-12 md:-mt-14 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-12 pt-20 sm:pt-28 md:pt-36 pb-16 sm:pb-20 md:pb-24 overflow-hidden"
      style={{ backgroundColor: "#0C0C0C" }}
    >
      {/* Ambient glow */}
      <motion.div
        aria-hidden
        style={{ y: bgY }}
        className="pointer-events-none absolute inset-0 opacity-60"
      >
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(215,226,234,0.10) 0%, rgba(215,226,234,0) 60%)" }}
        />
      </motion.div>

      <div className="relative max-w-6xl mx-auto">
        {/* Eyebrow + availability */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 sm:mb-14">
          <FadeIn y={20}>
            <span
              className="uppercase tracking-[0.3em] text-xs sm:text-sm font-light"
              style={{ color: "#D7E2EA", opacity: 0.55 }}
            >
              — {t.contact.eyebrow}
            </span>
          </FadeIn>
          <FadeIn y={20} delay={0.1}>
            <span
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs sm:text-sm uppercase tracking-widest"
              style={{ borderColor: "rgba(215,226,234,0.25)", color: "#D7E2EA" }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping" style={{ backgroundColor: "#4ade80" }} />
                <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: "#4ade80" }} />
              </span>
              {t.contact.availability}
            </span>
          </FadeIn>
        </div>

        {/* Title */}
        <motion.div style={{ x: titleX }} className="mb-10 sm:mb-14">
          <FadeIn y={40}>
            <h2
              className="hero-heading font-black uppercase leading-[0.9] tracking-tight"
              style={{ fontSize: "clamp(3rem, 11vw, 180px)" }}
            >
              {t.contact.title}
            </h2>
          </FadeIn>
        </motion.div>

        {/* Intro + primary CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-16 items-end mb-16 sm:mb-20">
          <FadeIn y={30} delay={0.1}>
            <p
              className="font-light max-w-[560px]"
              style={{ color: "#D7E2EA", opacity: 0.75, fontSize: "clamp(1rem, 1.5vw, 1.25rem)", lineHeight: 1.5 }}
            >
              {t.contact.intro}
            </p>
          </FadeIn>
          <FadeIn y={30} delay={0.2}>
            <a
              href={`mailto:${EMAIL}`}
              className="group relative flex items-center justify-between gap-4 rounded-full border-2 pl-6 pr-2 py-2 overflow-hidden w-full lg:w-auto"
              style={{ borderColor: "#D7E2EA" }}
            >
              <span
                className="absolute inset-0 rounded-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"
                style={{ backgroundColor: "#D7E2EA" }}
              />
              <span
                className="relative uppercase tracking-widest text-sm sm:text-base font-medium transition-colors duration-500"
                style={{ color: "#D7E2EA" }}
              >
                <span className="group-hover:text-[#0C0C0C] transition-colors duration-500">{t.contact.cta}</span>
              </span>
              <span
                className="relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full transition-transform duration-500 group-hover:rotate-45"
                style={{ backgroundColor: "#D7E2EA" }}
              >
                <ArrowUpRight size={20} color="#0C0C0C" />
              </span>
            </a>
          </FadeIn>
        </div>

        {/* Meta strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-b py-6 sm:py-8 mb-14 sm:mb-20 gap-6 sm:gap-4" style={{ borderColor: "rgba(215,226,234,0.15)" }}>
          {[
            { icon: MapPin, label: t.contact.location, value: t.contact.locationValue },
            { icon: Clock, label: t.contact.responseTime, value: t.contact.responseValue },
            { icon: Sparkles, label: t.contact.labels.email, value: EMAIL },
          ].map((m, i) => {
            const Icon = m.icon;
            return (
              <FadeIn key={m.label} delay={i * 0.08} y={20}>
                <div className="flex items-start gap-3">
                  <Icon size={18} color="#D7E2EA" className="mt-1 opacity-60" />
                  <div className="flex flex-col min-w-0">
                    <span
                      className="uppercase tracking-widest text-[10px] sm:text-xs font-light"
                      style={{ color: "#D7E2EA", opacity: 0.55 }}
                    >
                      {m.label}
                    </span>
                    <span className="font-medium truncate" style={{ color: "#D7E2EA", fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)" }}>
                      {m.value}
                    </span>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Socials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {socials.map((s, i) => {
            const Icon = s.icon;
            const external = s.href.startsWith("http");
            return (
              <FadeIn key={s.label} delay={0.05 + i * 0.06} y={30}>
                <a
                  href={s.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="group relative flex items-center gap-4 sm:gap-5 rounded-2xl border px-5 sm:px-6 py-4 sm:py-5 overflow-hidden transition-colors"
                  style={{ borderColor: "rgba(215,226,234,0.18)" }}
                >
                  <span
                    className="absolute inset-0 origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out"
                    style={{ backgroundColor: "rgba(215,226,234,0.06)" }}
                  />
                  <span
                    className="relative flex items-center justify-center rounded-xl w-11 h-11 flex-shrink-0 transition-transform duration-500 group-hover:-rotate-6"
                    style={{ backgroundColor: "rgba(215,226,234,0.08)" }}
                  >
                    <Icon size={20} color="#D7E2EA" />
                  </span>
                  <span className="relative flex flex-col min-w-0 flex-1">
                    <span
                      className="uppercase tracking-widest text-[10px] sm:text-xs font-light"
                      style={{ color: "#D7E2EA", opacity: 0.55 }}
                    >
                      {s.label}
                    </span>
                    <span
                      className="font-medium truncate"
                      style={{ color: "#D7E2EA", fontSize: "clamp(0.95rem, 1.3vw, 1.1rem)" }}
                    >
                      {s.value}
                    </span>
                  </span>
                  <ArrowUpRight
                    size={18}
                    color="#D7E2EA"
                    className="relative opacity-40 group-hover:opacity-100 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </a>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}