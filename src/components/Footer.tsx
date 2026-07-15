"use client";

import { Mail, Camera, Send, GitBranch } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.contact, href: "#contact" },
  ];

  const socials = [
    { icon: Mail, name: t.contact.labels.email, href: "mailto:bogdangembatyuk@gmail.com" },
    { icon: Camera, name: t.contact.labels.instagram, href: "https://instagram.com/bohdan_codes" },
    { icon: Send, name: t.contact.labels.telegram, href: "https://t.me/badan_badanowycz" },
    { icon: GitBranch, name: t.contact.labels.github, href: "https://github.com/W1ntermann" },
  ];

  return (
    <footer
      className="relative z-10 px-6 md:px-10 py-14 sm:py-18 md:py-24 lg:py-28 overflow-hidden"
      style={{ backgroundColor: "#090909" }}
    >
      {/* Subtle gradient glow behind the logo */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-[0.04] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, #a855f7 0%, #ec4899 40%, transparent 70%)",
        }}
      />

      {/* Top gradient divider — thicker, brighter glow for separation */}
      <div
        className="max-w-7xl mx-auto mb-10 sm:mb-14"
        style={{
          height: "2px",
          background:
            "linear-gradient(90deg, transparent 0%, rgba(168,85,247,0.5) 25%, rgba(236,72,153,0.5) 50%, rgba(248,113,113,0.5) 75%, transparent 100%)",
          boxShadow: "0 0 20px rgba(168,85,247,0.25), 0 0 40px rgba(236,72,153,0.15)",
        }}
      />

      <div className="max-w-7xl mx-auto flex w-full flex-col justify-between gap-12 lg:flex-row lg:items-start lg:text-left">
        {/* Brand column */}
        <div className="flex w-full flex-col justify-between gap-6 lg:items-start lg:max-w-[420px] xl:max-w-[480px]">
          <div className="flex items-center gap-2 lg:justify-start">
            <span className="text-lg sm:text-xl lg:text-2xl font-bold uppercase tracking-tight text-[#D7E2EA]">
              Bohdan
            </span>
            <span className="text-lg sm:text-xl lg:text-2xl font-bold text-[rgba(215,226,234,0.4)]">
              .
            </span>
          </div>
          <p
            className="text-sm lg:text-base leading-relaxed max-w-[300px]"
            style={{ color: "rgba(215,226,234,0.5)" }}
          >
            {t.hero.tagline}
          </p>
        </div>

        {/* Navigation columns */}
        <div
          className="grid w-full grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-20"
          style={{ maxWidth: "none" }}
        >
          {/* Navigation */}
          <div>
            <h3 className="mb-5 text-[10px] sm:text-xs lg:text-sm uppercase tracking-[0.15em] font-medium text-[rgba(215,226,234,0.3)]">
              Navigation
            </h3>
            <ul className="space-y-3.5 lg:space-y-4 text-sm lg:text-base">
              {navLinks.map((link, linkIdx) => (
                <li key={linkIdx}>
                  <a
                    href={link.href}
                    className="relative inline-block font-medium uppercase tracking-wider transition-all duration-200 w-fit group text-[rgba(215,226,234,0.65)] hover:text-[#D7E2EA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D7E2EA] rounded"
                  >
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px transition-all duration-200 group-hover:w-full bg-[#D7E2EA]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-5 text-[10px] sm:text-xs lg:text-sm uppercase tracking-[0.15em] font-medium text-[rgba(215,226,234,0.3)]">
              Social
            </h3>
            <ul className="space-y-3.5 lg:space-y-4 text-sm lg:text-base">
              {socials.map((social, linkIdx) => {
                const Icon = social.icon;
                return (
                  <li key={linkIdx}>
                    <a
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group inline-flex items-center gap-3 uppercase tracking-wider transition-all duration-200 text-[rgba(215,226,234,0.65)] hover:text-[#D7E2EA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D7E2EA] rounded"
                    >
                      <Icon
                        size={14}
                        className="shrink-0 lg:size-4 transition-colors duration-200 text-[rgba(215,226,234,0.65)] group-hover:text-[#D7E2EA]"
                      />
                      <span>{social.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom gradient divider */}
      <div
        className="max-w-7xl mx-auto my-10 sm:my-12 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(215,226,234,0.08) 25%, rgba(215,226,234,0.12) 50%, rgba(215,226,234,0.08) 75%, transparent 100%)",
        }}
      />

      {/* Copyright row */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left">
        <p className="text-[11px] sm:text-xs font-light tracking-wider text-[rgba(215,226,234,0.35)]">
          &copy; {currentYear} Bohdan Hembatiuk. All rights reserved.
        </p>
        <p className="text-[10px] sm:text-[11px] font-light tracking-wider text-[rgba(215,226,234,0.25)]">
          Built with{" "}
          <span className="text-[rgba(215,226,234,0.45)]">Next.js</span>
          {" & "}
          <span className="text-[rgba(215,226,234,0.45)]">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}