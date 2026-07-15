"use client";

import { FadeIn } from "./FadeIn";
import { useLanguage } from "@/i18n/LanguageContext";
import { Mail, Camera, Send, GitBranch, Copy, Check } from "lucide-react";
import { useState } from "react";

/* ---------- social data ---------- */

type SocialEntry = {
  icon: React.FC<{ className?: string; size?: number }>;
  label: string;
  href: string;
  brandGlow: string;
};

/* ---------- component ---------- */

export function ContactSection() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const emailAddress = "bogdangembatyuk@gmail.com";

  const socials: SocialEntry[] = [
    {
      icon: Mail,
      label: t.contact.labels.email,
      href: `mailto:${emailAddress}`,
      brandGlow: "0 0 20px rgba(168,85,247,0.4)",
    },
    {
      icon: Camera,
      label: t.contact.labels.instagram,
      href: "https://instagram.com/bohdan_codes",
      brandGlow: "0 0 20px rgba(225,48,108,0.4)",
    },
    {
      icon: Send,
      label: t.contact.labels.telegram,
      href: "https://t.me/badan_badanowycz",
      brandGlow: "0 0 20px rgba(30,150,200,0.4)",
    },
    {
      icon: GitBranch,
      label: t.contact.labels.github,
      href: "https://github.com/W1ntermann",
      brandGlow: "0 0 20px rgba(100,100,100,0.4)",
    },
  ];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const input = document.createElement("input");
      input.value = emailAddress;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section
      id="contact"
      className="relative z-10 px-4 sm:px-6 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-20 sm:pb-24 md:pb-32 overflow-x-hidden scroll-mt-24"
      style={{ backgroundColor: "#0C0C0C" }}
    >
      {/* ---------- decorative background glow ---------- */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full opacity-[0.05] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, #a855f7 0%, #ec4899 35%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto flex flex-col items-center w-full">
        {/* ---------- top gradient divider ---------- */}
        <FadeIn y={20} className="w-full max-w-4xl">
          <div
            className="mx-auto mb-12 sm:mb-16"
            style={{
              height: "2px",
              background:
                "linear-gradient(90deg, transparent 0%, rgba(168,85,247,0.5) 25%, rgba(236,72,153,0.5) 50%, rgba(248,113,113,0.5) 75%, transparent 100%)",
              boxShadow: "0 0 20px rgba(168,85,247,0.25), 0 0 40px rgba(236,72,153,0.15)",
            }}
          />
        </FadeIn>

        {/* ---------- heading ---------- */}
        <FadeIn y={40} className="w-full">
          <h2
            className="font-black uppercase leading-none tracking-tight text-center text-balance w-full mb-6 sm:mb-8"
            style={{
              fontSize: "clamp(2.5rem, 8vw, 5.5rem)",
              background: "linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #f87171 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {t.contact.title}
          </h2>
        </FadeIn>

        {/* ---------- subtitle ---------- */}
        <FadeIn delay={0.15} y={25} className="w-full">
          <p
            className="font-light uppercase tracking-wide text-center max-w-[520px] mx-auto mb-12 sm:mb-16"
            style={{
              color: "rgba(215, 226, 234, 0.5)",
              fontSize: "clamp(0.9rem, 1.4vw, 1.1rem)",
            }}
          >
            {t.contact.intro}
          </p>
        </FadeIn>

        {/* ---------- main email CTA card ---------- */}
        <FadeIn delay={0.25} y={40} className="w-full">
          <div
            className="relative rounded-2xl border border-[rgba(215,226,234,0.08)] backdrop-blur-xl overflow-hidden px-6 sm:px-10 md:px-14 py-8 sm:py-10 md:py-12 w-full max-w-2xl mx-auto mb-8 sm:mb-10 group/cta cursor-pointer transition-all duration-500"
            style={{
              background: "linear-gradient(135deg, rgba(31,31,31,0.7) 0%, rgba(17,17,17,0.8) 100%)",
              boxShadow:
                "0 0 40px rgba(139,92,246,0.06), 0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(215,226,234,0.03)",
            }}
            onClick={handleCopy}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(168,85,247,0.3)";
              e.currentTarget.style.boxShadow =
                "0 0 60px rgba(139,92,246,0.12), 0 8px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(168,85,247,0.06)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(215,226,234,0.08)";
              e.currentTarget.style.boxShadow =
                "0 0 40px rgba(139,92,246,0.06), 0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(215,226,234,0.03)";
            }}
          >
            {/* Subtle top glow line */}
            <div
              className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover/cta:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(168,85,247,0.6) 25%, rgba(236,72,153,0.6) 50%, rgba(248,113,113,0.6) 75%, transparent 100%)",
              }}
            />

            <div className="flex flex-col items-center gap-4 sm:gap-5">
              {/* Email icon ring */}
              <span
                className="relative inline-flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 rounded-full transition-all duration-500 group-hover/cta:scale-110"
                style={{
                  background: "rgba(215, 226, 234, 0.04)",
                  border: "1px solid rgba(215, 226, 234, 0.08)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                }}
              >
                <Mail
                  size={28}
                  className="relative z-10 text-[#D7E2EA] transition-all duration-500 group-hover/cta:text-[#a855f7]"
                />
                {/* Glow on hover */}
                <span
                  className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 group-hover/cta:opacity-100"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(168,85,247,0.15) 0%, rgba(236,72,153,0.15) 100%)",
                    boxShadow: "0 0 24px rgba(168,85,247,0.2)",
                  }}
                />
              </span>

              {/* Email address */}
              <div className="flex items-center gap-3 sm:gap-4">
                <span
                  className="font-semibold tracking-wide text-center transition-all duration-500 group-hover/cta:text-[#a855f7]"
                  style={{
                    color: "#D7E2EA",
                    fontSize: "clamp(1.05rem, 2.5vw, 1.5rem)",
                  }}
                >
                  {emailAddress}
                </span>
                {/* Copy button */}
                <span
                  className="relative inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full transition-all duration-300 shrink-0"
                  style={{
                    background: copied
                      ? "rgba(168,85,247,0.15)"
                      : "rgba(215,226,234,0.06)",
                    border: copied
                      ? "1px solid rgba(168,85,247,0.3)"
                      : "1px solid rgba(215,226,234,0.1)",
                  }}
                >
                  {copied ? (
                    <Check size={16} className="text-[#a855f7]" />
                  ) : (
                    <Copy size={15} className="text-[rgba(215,226,234,0.5)] group-hover/cta:text-[#D7E2EA] transition-colors duration-300" />
                  )}
                </span>
              </div>

              {/* CTA hint */}
              <p
                className="text-xs sm:text-sm font-light uppercase tracking-[0.15em] transition-all duration-500"
                style={{ color: "rgba(215,226,234,0.35)" }}
              >
                {copied ? "✓ Copied" : "Click to copy"}
              </p>
            </div>
          </div>
        </FadeIn>

        {/* ---------- social links row ---------- */}
        <FadeIn delay={0.35} y={30} className="w-full">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-2xl mx-auto">
            {socials.map((s) => {
              const Icon = s.icon;
              const isEmail = s.href.startsWith("mailto:");
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target={isEmail ? undefined : "_blank"}
                  rel={isEmail ? undefined : "noopener noreferrer"}
                  className="group/social relative inline-flex items-center gap-2.5 sm:gap-3 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full no-underline transition-all duration-400"
                  style={{
                    background: "rgba(215,226,234,0.04)",
                    border: "1px solid rgba(215,226,234,0.07)",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(215,226,234,0.08)";
                    e.currentTarget.style.borderColor = "rgba(168,85,247,0.3)";
                    e.currentTarget.style.boxShadow = s.brandGlow;
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(215,226,234,0.04)";
                    e.currentTarget.style.borderColor = "rgba(215,226,234,0.07)";
                    e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.15)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  {/* Icon */}
                  <span className="relative shrink-0">
                    <Icon
                      size={16}
                      className="transition-all duration-400 text-[rgba(215,226,234,0.55)] group-hover/social:text-[#D7E2EA] sm:size-[18px]"
                    />
                  </span>
                  {/* Label */}
                  <span
                    className="text-xs sm:text-sm font-medium transition-all duration-400 group-hover/social:text-[#D7E2EA] whitespace-nowrap"
                    style={{ color: "rgba(215,226,234,0.55)" }}
                  >
                    {s.label}
                  </span>
                </a>
              );
            })}
          </div>
        </FadeIn>

        {/* ---------- bottom subtle note ---------- */}
        <FadeIn delay={0.5} y={20} className="w-full">
          <p
            className="text-center mt-10 sm:mt-12 text-[10px] sm:text-xs font-light uppercase tracking-[0.15em]"
            style={{ color: "rgba(215,226,234,0.2)" }}
          >
            &mdash; {t.contact.title} &mdash;
          </p>
        </FadeIn>
      </div>
    </section>
  );
}