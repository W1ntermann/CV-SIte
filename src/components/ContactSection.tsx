"use client";

import { Mail, Camera, Send, GitBranch } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { useLanguage } from "@/i18n/LanguageContext";

export function ContactSection() {
  const { t } = useLanguage();
  const socials = [
    { icon: Mail, label: t.contact.labels.email, value: "bogdangembatyuk@gmail.com", href: "mailto:bogdangembatyuk@gmail.com" },
    { icon: Camera, label: t.contact.labels.instagram, value: "@bohdan_codes", href: "https://instagram.com/bohdan_codes" },
    { icon: Send, label: t.contact.labels.telegram, value: "@badan_badanowycz", href: "https://t.me/badan_badanowycz" },
    { icon: GitBranch, label: t.contact.labels.github, value: "@W1ntermann", href: "https://github.com/W1ntermann" },
  ];
  return (
    <section
      id="contact"
      className="relative z-10 -mt-10 sm:-mt-12 md:-mt-14 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-20 sm:pb-24 md:pb-32"
      style={{ backgroundColor: "#0C0C0C" }}
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-12 sm:gap-16">
        <FadeIn y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            {t.contact.title}
          </h2>
        </FadeIn>
        <FadeIn delay={0.15} y={30}>
          <p
            className="font-light uppercase tracking-wide text-center max-w-[560px]"
            style={{ color: "#D7E2EA", fontSize: "clamp(0.95rem, 1.6vw, 1.25rem)" }}
          >
            {t.contact.intro}
          </p>
        </FadeIn>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mt-4">
          {socials.map((s, i) => {
            const Icon = s.icon;
            return (
              <FadeIn key={s.label} delay={0.1 + i * 0.08} y={30}>
                <a
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 sm:gap-6 rounded-full border-2 px-5 sm:px-7 py-4 sm:py-5 transition-colors hover:bg-white/5"
                  style={{ borderColor: "#D7E2EA" }}
                >
                  <span
                    className="flex items-center justify-center rounded-full w-11 h-11 sm:w-12 sm:h-12 flex-shrink-0"
                    style={{ backgroundColor: "rgba(215,226,234,0.08)" }}
                  >
                    <Icon size={20} color="#D7E2EA" />
                  </span>
                  <span className="flex flex-col min-w-0">
                    <span
                      className="uppercase tracking-widest text-xs sm:text-sm font-light"
                      style={{ color: "#D7E2EA", opacity: 0.6 }}
                    >
                      {s.label}
                    </span>
                    <span
                      className="font-medium truncate"
                      style={{ color: "#D7E2EA", fontSize: "clamp(0.95rem, 1.4vw, 1.15rem)" }}
                    >
                      {s.value}
                    </span>
                  </span>
                </a>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}