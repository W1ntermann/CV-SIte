"use client";

import { motion } from "framer-motion";
import { MapPin, ChevronDown, Sparkles } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { FadeIn } from "./FadeIn";
import { ContactButton, SecondaryLinkButton } from "./Buttons";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-black px-4 pt-24 pb-16 md:px-6 md:pt-28">
      {/* Background image */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "url('/forHero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.18,
          mixBlendMode: "screen" as React.CSSProperties["mixBlendMode"],
        }}
      />
      {/* Subtle overlay to maintain readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

      {/* Animated background elements */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(255,255,255,0.12),transparent_55%)]" />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px]"
        style={{
          maskImage: "radial-gradient(circle at center, black 20%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(circle at center, black 20%, transparent 75%)",
        }}
      />

      {/* Floating blur orbs with enhanced animation */}
      <motion.div
        className="pointer-events-none absolute top-1/4 right-1/4 h-64 w-64 rounded-full bg-white/5 blur-[100px]"
        animate={{ y: [0, -30, 0], scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-1/4 left-1/4 h-48 w-48 rounded-full bg-white/5 blur-[80px]"
        animate={{ y: [0, 20, 0], scale: [1, 1.12, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Additional accent orb */}
      <motion.div
        className="pointer-events-none absolute top-1/3 left-1/3 h-56 w-56 rounded-full bg-blue-500/10 blur-[120px]"
        animate={{ y: [-20, 20, -20], scale: [0.9, 1.1, 0.9] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Geometric rings */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 right-[-15%] sm:right-[-10%] lg:right-[-5%] -translate-y-1/2 opacity-[0.04] hidden md:block"
        style={{
          width: "clamp(400px, 50vw, 700px)",
          height: "clamp(400px, 50vw, 700px)",
          borderRadius: "50%",
          border: "2px solid rgba(215,226,234,0.5)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 right-[-12%] sm:right-[-8%] lg:right-[-3%] -translate-y-1/2 opacity-[0.025] hidden md:block"
        style={{
          width: "clamp(500px, 60vw, 840px)",
          height: "clamp(500px, 60vw, 840px)",
          borderRadius: "50%",
          border: "1.5px solid rgba(215,226,234,0.4)",
        }}
      />

      {/* Content */}
      <div className="relative mx-auto w-full max-w-7xl">
        <div className="flex flex-col items-start gap-6 md:gap-8">
          {/* Badge with animation */}
          <FadeIn delay={0} y={20} duration={0.6} animateOnMount>
            <motion.div
              className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur-sm"
              whileHover={{
                borderColor: "rgba(215,226,234,0.3)",
                backgroundColor: "rgba(215,226,234,0.1)",
              }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles size={14} className="text-white/60" />
              </motion.div>
              <p className="text-xs font-medium tracking-wide text-white/70">
                Available for work
              </p>
            </motion.div>
          </FadeIn>

          {/* Greeting */}
          <FadeIn delay={0.1} y={20} duration={0.6} animateOnMount>
            <p
              className="text-sm tracking-wide md:text-base"
              style={{ color: "rgba(215,226,234,0.55)" }}
            >
              — {t.hero.greeting}
            </p>
          </FadeIn>

          {/* Main heading with enhanced gradient */}
          <FadeIn delay={0.2} y={30} duration={0.7} animateOnMount>
            <motion.h1
              className="font-light leading-tight"
              style={{
                fontSize: "clamp(2.5rem, 7vw, 5rem)",
                background: "linear-gradient(180deg, #8a9ba8 0%, #d7e2ea 60%, #e8f0f8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
              }}
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
            >
              {t.hero.tagline}
            </motion.h1>
          </FadeIn>

          {/* Subtext with better readability */}
          <FadeIn delay={0.35} y={20} duration={0.6} animateOnMount>
            <p
              className="max-w-2xl leading-relaxed"
              style={{
                color: "rgba(215,226,234,0.65)",
                fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
              }}
            >
              {t.hero.subtext}
            </p>
          </FadeIn>

          {/* Enhanced tech stack pills */}
          <FadeIn delay={0.5} y={20} duration={0.6} animateOnMount>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {t.hero.techStack.map((tech, index) => (
                <motion.span
                  key={tech}
                  className="cursor-default rounded-full px-4 py-1.5 text-xs font-medium tracking-wide md:text-sm transition-all duration-300"
                  style={{
                    background: "rgba(215, 226, 234, 0.06)",
                    border: "1px solid rgba(215, 226, 234, 0.15)",
                    color: "rgba(215, 226, 234, 0.8)",
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.05, duration: 0.4 }}
                  whileHover={{
                    background: "rgba(215, 226, 234, 0.15)",
                    borderColor: "rgba(215, 226, 234, 0.4)",
                    color: "#D7E2EA",
                    scale: 1.08,
                    boxShadow: "0 0 20px rgba(215,226,234,0.1)",
                    y: -2,
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </FadeIn>

          {/* Location & response time with better styling */}
          <FadeIn delay={0.6} y={20} duration={0.6} animateOnMount>
            <div
              className="flex flex-wrap items-center gap-4 text-sm"
              style={{ color: "rgba(215,226,234,0.55)" }}
            >
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <MapPin size={16} style={{ color: "rgba(215,226,234,0.8)" }} />
                </motion.div>
                <span>{t.contact.locationValue}</span>
              </div>
              <span className="hidden text-gray-600 md:inline">/</span>
              <div className="flex items-center gap-2">
                <motion.div
                  className="w-2 h-2 rounded-full bg-green-400/60"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span>{t.contact.responseValue}</span>
              </div>
            </div>
          </FadeIn>

          {/* CTA buttons with enhanced styling */}
          <FadeIn delay={0.7} y={20} duration={0.6} animateOnMount>
            <div className="flex flex-col gap-4 sm:flex-row">
              <ContactButton />
              <SecondaryLinkButton href="#projects">
                {t.hero.ctaSecondary}
              </SecondaryLinkButton>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 12, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-gray-500 tracking-wide">Scroll to explore</span>
          <ChevronDown size={20} className="text-gray-500" strokeWidth={1.5} />
        </div>
      </motion.div>
    </section>
  );
}