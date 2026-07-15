"use client";

import { Mail, Camera, Send, GitBranch } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { AnimatedText } from "./AnimatedText";
import { useLanguage } from "@/i18n/LanguageContext";

export function ContactSection() {
  const { t, lang } = useLanguage();

  const contactLinks = [
    {
      icon: Mail,
      name: t.contact.labels.email,
      href: "mailto:bogdangembatyuk@gmail.com",
    },
    {
      icon: Camera,
      name: t.contact.labels.instagram,
      href: "https://instagram.com/bohdan_codes",
      external: true,
    },
    {
      icon: Send,
      name: t.contact.labels.telegram,
      href: "https://t.me/badan_badanowycz",
      external: true,
    },
    {
      icon: GitBranch,
      name: t.contact.labels.github,
      href: "https://github.com/W1ntermann",
      external: true,
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen relative px-5 sm:px-8 md:px-10 py-20 flex flex-col items-center justify-center gap-12 sm:gap-16 md:gap-20 overflow-hidden scroll-mt-24"
    >
      {/* Decorative images — same as AboutSection for visual consistency */}
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="hidden sm:block absolute bottom-[8%] left-[3%] sm:left-[6%] lg:left-[10%] w-[100px] sm:w-[140px] md:w-[180px] lg:w-[220px] xl:w-[260px]"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt=""
          className="w-full h-auto"
        />
      </FadeIn>
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="hidden sm:block absolute bottom-[8%] right-[3%] sm:right-[6%] lg:right-[10%] w-[130px] sm:w-[170px] md:w-[220px] lg:w-[260px] xl:w-[300px]"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt=""
          className="w-full h-auto"
        />
      </FadeIn>

      <div className="flex flex-col items-center gap-8 sm:gap-12 md:gap-14 relative z-10 w-full max-w-[720px]">
        {/* Eyebrow */}
        <FadeIn delay={0} y={20}>
          <span
            className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-medium"
            style={{ color: "rgba(215,226,234,0.45)" }}
          >
            {t.contact.eyebrow}
          </span>
        </FadeIn>

        {/* Availability badge */}
        <FadeIn delay={0.05} y={20}>
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-wider"
            style={{
              background: "rgba(34,197,94,0.08)",
              border: "1px solid rgba(34,197,94,0.2)",
              color: "#4ade80",
            }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>
            {t.contact.availability}
          </span>
        </FadeIn>

        {/* Title */}
        <FadeIn delay={0.1} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            {t.contact.title}
          </h2>
        </FadeIn>

        {/* Intro */}
        <AnimatedText
          key={lang}
          text={t.contact.intro}
          className="font-medium text-center leading-relaxed max-w-[520px]"
          style={{ color: "#D7E2EA", fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
        />

        {/* Contact links */}
        <FadeIn delay={0.4} y={30}>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-10">
            {contactLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="group flex flex-col items-center gap-2.5 transition-all duration-200 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D7E2EA] rounded-lg"
                  style={{ color: "rgba(215,226,234,0.55)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#D7E2EA";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(215,226,234,0.55)";
                  }}
                >
                  <span
                    className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full transition-all duration-200"
                    style={{
                      background: "rgba(215,226,234,0.06)",
                      border: "1px solid rgba(215,226,234,0.12)",
                    }}
                  >
                    <Icon size={18} className="sm:size-5" />
                  </span>
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-wider font-medium">
                    {link.name}
                  </span>
                </a>
              );
            })}
          </div>
        </FadeIn>

        {/* Info cards */}
        <FadeIn delay={0.5} y={30}>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
            <div
              className="flex flex-col items-center gap-1 rounded-2xl px-6 py-4 sm:px-8 sm:py-5"
              style={{
                background: "rgba(215,226,234,0.04)",
                border: "1px solid rgba(215,226,234,0.08)",
              }}
            >
              <span
                className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] font-medium"
                style={{ color: "rgba(215,226,234,0.35)" }}
              >
                {t.contact.location}
              </span>
              <span
                className="text-sm sm:text-base font-medium"
                style={{ color: "#D7E2EA" }}
              >
                {t.contact.locationValue}
              </span>
            </div>
            <div
              className="flex flex-col items-center gap-1 rounded-2xl px-6 py-4 sm:px-8 sm:py-5"
              style={{
                background: "rgba(215,226,234,0.04)",
                border: "1px solid rgba(215,226,234,0.08)",
              }}
            >
              <span
                className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] font-medium"
                style={{ color: "rgba(215,226,234,0.35)" }}
              >
                {t.contact.responseTime}
              </span>
              <span
                className="text-sm sm:text-base font-medium"
                style={{ color: "#D7E2EA" }}
              >
                {t.contact.responseValue}
              </span>
            </div>
          </div>
        </FadeIn>

        {/* CTA Button */}
        <FadeIn delay={0.6} y={30}>
          <a
            href="mailto:bogdangembatyuk@gmail.com"
            className="inline-flex rounded-full font-medium uppercase tracking-widest px-7 py-3 text-xs lg:px-8 lg:py-3.5 lg:text-sm transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D7E2EA]"
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
            {t.contact.cta}
          </a>
        </FadeIn>
      </div>
    </section>
  );
}