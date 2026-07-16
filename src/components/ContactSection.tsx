"use client";

import { motion } from "framer-motion";
import { Mail, Camera, Send, GitBranch, ArrowUpRight } from "lucide-react";
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
      className="relative min-h-screen px-4 sm:px-6 md:px-8 lg:px-10 py-16 sm:py-20 md:py-32 flex flex-col items-center justify-center gap-12 md:gap-16 overflow-hidden scroll-mt-24"
    >
      {/* Enhanced decorative background elements */}
      {/* Top-right gradient blob */}
      <motion.div
        className="pointer-events-none absolute top-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full opacity-[0.08]"
        style={{ background: "radial-gradient(circle, rgba(215,226,234,0.3) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.12, 0.08] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Bottom-left gradient blob */}
      <motion.div
        className="pointer-events-none absolute bottom-[-8%] left-[-5%] w-[350px] h-[350px] rounded-full opacity-[0.06]"
        style={{ background: "radial-gradient(circle, rgba(215,226,234,0.3) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.06, 0.1, 0.06] }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
      />

      {/* Decorative grid lines */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(215,226,234,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(215,226,234,0.015)_1px,transparent_1px)] bg-[size:80px_80px] opacity-50"
      />

      {/* Content */}
      <motion.div
        className="flex flex-col items-center gap-8 md:gap-12 relative z-10 w-full max-w-[800px] text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Section eyebrow */}
        <FadeIn delay={0} y={20} duration={0.6}>
          <span
            className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-medium"
            style={{ color: "rgba(215,226,234,0.35)" }}
          >
            — {t.contact.eyebrow}
          </span>
        </FadeIn>

        {/* Availability status badge */}
        <FadeIn delay={0.1} y={20} duration={0.6}>
          <motion.div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium uppercase tracking-wider cursor-default"
            style={{
              background: "rgba(34,197,94,0.1)",
              border: "1px solid rgba(34,197,94,0.25)",
              color: "#4ade80",
            }}
            whileHover={{
              background: "rgba(34,197,94,0.15)",
              borderColor: "rgba(34,197,94,0.4)",
            }}
          >
            <motion.span
              className="relative flex h-2 w-2 rounded-full bg-green-400"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span>{t.contact.availability}</span>
          </motion.div>
        </FadeIn>

        {/* Main title */}
        <FadeIn delay={0.2} y={40} duration={0.7}>
          <motion.h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)" }}
          >
            {t.contact.title}
          </motion.h2>
        </FadeIn>

        {/* Subtitle/intro text */}
        <FadeIn delay={0.3} y={30} duration={0.6}>
          <AnimatedText
            key={lang}
            text={t.contact.intro}
            className="font-light leading-relaxed max-w-[90%] sm:max-w-[600px]"
            style={{ color: "rgba(215,226,234,0.7)", fontSize: "clamp(0.95rem, 2vw, 1.2rem)" }}
          />
        </FadeIn>

        {/* Contact links grid */}
        <FadeIn delay={0.4} y={30} duration={0.6}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6 w-full mt-4">
            {contactLinks.map((link, idx) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="group flex flex-col items-center gap-2 sm:gap-3 rounded-2xl px-4 py-5 sm:px-6 sm:py-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D7E2EA] transition-all duration-300"
                  style={{
                    background: "rgba(215,226,234,0.04)",
                    border: "1px solid rgba(215,226,234,0.1)",
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + idx * 0.08, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{
                    background: "rgba(215,226,234,0.12)",
                    borderColor: "rgba(215,226,234,0.25)",
                    y: -6,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl transition-all duration-300"
                    style={{
                      background: "rgba(215,226,234,0.06)",
                      border: "1px solid rgba(215,226,234,0.12)",
                    }}
                    whileHover={{
                      scale: 1.15,
                      background: "rgba(215,226,234,0.15)",
                      borderColor: "rgba(215,226,234,0.25)",
                    }}
                  >
                    <motion.div whileHover={{ rotate: 12, scale: 1.2 }}>
                      <Icon
                        size={20}
                        className="sm:size-6"
                        style={{ color: "rgba(215,226,234,0.7)" }}
                      />
                    </motion.div>
                  </motion.div>
                  <span
                    className="text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold leading-tight transition-colors duration-300"
                    style={{ color: "rgba(215,226,234,0.6)" }}
                  >
                    {link.name}
                  </span>
                </motion.a>
              );
            })}
          </div>
        </FadeIn>

        {/* Info cards section */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 md:gap-8 w-full mt-8 md:mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <FadeIn delay={0.5} y={20} duration={0.6} className="flex-1">
            <motion.div
              className="flex flex-col gap-3 rounded-2xl px-6 py-8 sm:px-8 sm:py-10"
              style={{
                background: "rgba(215,226,234,0.04)",
                border: "1px solid rgba(215,226,234,0.1)",
              }}
              whileHover={{
                background: "rgba(215,226,234,0.08)",
                borderColor: "rgba(215,226,234,0.2)",
                y: -4,
              }}
              transition={{ duration: 0.3 }}
            >
              <span
                className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-medium"
                style={{ color: "rgba(215,226,234,0.45)" }}
              >
                {t.contact.location}
              </span>
              <span
                className="text-base sm:text-lg font-semibold"
                style={{ color: "#D7E2EA" }}
              >
                {t.contact.locationValue}
              </span>
            </motion.div>
          </FadeIn>

          <FadeIn delay={0.55} y={20} duration={0.6} className="flex-1">
            <motion.div
              className="flex flex-col gap-3 rounded-2xl px-6 py-8 sm:px-8 sm:py-10"
              style={{
                background: "rgba(215,226,234,0.04)",
                border: "1px solid rgba(215,226,234,0.1)",
              }}
              whileHover={{
                background: "rgba(215,226,234,0.08)",
                borderColor: "rgba(215,226,234,0.2)",
                y: -4,
              }}
              transition={{ duration: 0.3 }}
            >
              <span
                className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-medium"
                style={{ color: "rgba(215,226,234,0.45)" }}
              >
                {t.contact.responseTime}
              </span>
              <span
                className="text-base sm:text-lg font-semibold"
                style={{ color: "#D7E2EA" }}
              >
                {t.contact.responseValue}
              </span>
            </motion.div>
          </FadeIn>
        </motion.div>

        {/* Primary CTA Button */}
        <FadeIn delay={0.6} y={30} duration={0.6}>
          <motion.a
            href="mailto:bogdangembatyuk@gmail.com"
            className="inline-flex items-center gap-2 rounded-full font-semibold uppercase tracking-widest px-8 py-4 text-xs sm:px-10 sm:py-4.5 sm:text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D7E2EA] mt-4 md:mt-8"
            style={{
              background: "#D7E2EA",
              color: "#0C0C0C",
              border: "1px solid #D7E2EA",
            }}
            whileHover={{
              background: "#C8D4DD",
              borderColor: "#C8D4DD",
              scale: 1.08,
              boxShadow: "0 8px 40px rgba(215,226,234,0.15)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {t.contact.cta}
            <motion.div whileHover={{ x: 2, y: -1 }} transition={{ duration: 0.2 }}>
              <ArrowUpRight size={16} strokeWidth={1.5} />
            </motion.div>
          </motion.a>
        </FadeIn>

        {/* Secondary CTA */}
        <FadeIn delay={0.7} y={20} duration={0.6}>
          <span
            className="text-xs sm:text-sm"
            style={{ color: "rgba(215,226,234,0.5)" }}
          >
            or email directly to{" "}
            <motion.a
              href="mailto:bogdangembatyuk@gmail.com"
              className="font-semibold transition-colors duration-200"
              style={{ color: "#D7E2EA" }}
              whileHover={{ color: "rgba(215,226,234,0.9)" }}
            >
              bogdangembatyuk@gmail.com
            </motion.a>
          </span>
        </FadeIn>
      </motion.div>
    </section>
  );
}