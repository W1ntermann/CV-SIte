"use client";

import { Mail, Camera, Send, GitBranch } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const socialIconStyles =
  "transition-colors duration-200 group-hover:text-transparent group-hover:bg-clip-text";

const gradientHoverBg =
  "group hover:bg-gradient-to-br hover:from-[#B600A8] hover:via-[#7621B0] hover:to-[#BE4C00] hover:bg-clip-text";

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
      className="relative z-10 px-6 md:px-10 py-14 sm:py-18 md:py-24 lg:py-28"
      style={{ backgroundColor: "#0C0C0C" }}
    >
      {/* Top divider */}
      <div
        className="max-w-7xl mx-auto mb-10 sm:mb-14 h-px"
        style={{ backgroundColor: "rgba(215,226,234,0.08)" }}
      />

      <div className="max-w-7xl mx-auto flex w-full flex-col justify-between gap-12 lg:flex-row lg:items-start lg:text-left">
        {/* Brand column */}
        <div className="flex w-full flex-col justify-between gap-6 lg:items-start lg:max-w-[420px] xl:max-w-[480px]">
          <div className="flex items-center gap-2 lg:justify-start">
            <span
              className="text-lg sm:text-xl lg:text-2xl font-bold uppercase tracking-tight"
              style={{ color: "#D7E2EA" }}
            >
              Bohdan
            </span>
            <span
              className="text-lg sm:text-xl lg:text-2xl font-bold"
              style={{ color: "rgba(215,226,234,0.4)" }}
            >
              .
            </span>
          </div>
          <p
            className="text-sm lg:text-base leading-relaxed max-w-[300px]"
            style={{ color: "rgba(215,226,234,0.5)" }}
          >
            {t.hero.tagline}
          </p>

          {/* Social icons row — visible on mobile below brand, on desktop as well */}
          <ul className="flex items-center gap-5 md:gap-4 lg:gap-5">
            {socials.map((social, idx) => {
              const Icon = social.icon;
              return (
                <li key={idx}>
                  <a
                    href={social.href}
                    aria-label={social.name}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-center justify-center transition-all duration-200 hover:scale-110"
                    style={{ color: "rgba(215,226,234,0.65)" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#D7E2EA")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(215,226,234,0.65)")
                    }
                  >
                    <Icon className="size-5 lg:size-6" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Navigation columns */}
        <div className="grid w-full grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-20" style={{ maxWidth: "none" }}>
          {/* Navigation */}
          <div>
            <h3
              className="mb-5 text-[10px] sm:text-xs lg:text-sm uppercase tracking-[0.15em] font-medium"
              style={{ color: "rgba(215,226,234,0.3)" }}
            >
              Navigation
            </h3>
            <ul className="space-y-3.5 lg:space-y-4 text-sm lg:text-base">
              {navLinks.map((link, linkIdx) => (
                <li key={linkIdx}>
                  <a
                    href={link.href}
                    className="relative inline-block font-medium uppercase tracking-wider transition-all duration-200 w-fit group"
                    style={{ color: "rgba(215,226,234,0.65)" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#D7E2EA")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(215,226,234,0.65)")
                    }
                  >
                    {link.label}
                    <span
                      className="absolute -bottom-0.5 left-0 w-0 h-px transition-all duration-200 group-hover:w-full"
                      style={{ backgroundColor: "#D7E2EA" }}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3
              className="mb-5 text-[10px] sm:text-xs lg:text-sm uppercase tracking-[0.15em] font-medium"
              style={{ color: "rgba(215,226,234,0.3)" }}
            >
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
                      className="group inline-flex items-center gap-3 uppercase tracking-wider transition-all duration-200"
                      style={{ color: "rgba(215,226,234,0.65)" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#D7E2EA";
                        const icon = e.currentTarget.querySelector("svg");
                        if (icon) icon.style.color = "#D7E2EA";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "rgba(215,226,234,0.65)";
                        const icon = e.currentTarget.querySelector("svg");
                        if (icon) icon.style.color = "rgba(215,226,234,0.65)";
                      }}
                    >
                      <Icon
                        size={14}
                        className="transition-colors duration-200 shrink-0 lg:size-4"
                        style={{ color: "rgba(215,226,234,0.65)" }}
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

      {/* Bottom divider */}
      <div
        className="max-w-7xl mx-auto my-10 sm:my-12 h-px"
        style={{ backgroundColor: "rgba(215,226,234,0.06)" }}
      />

      {/* Copyright row */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left">
        <p
          className="text-[11px] sm:text-xs font-light tracking-wider"
          style={{ color: "rgba(215,226,234,0.35)" }}
        >
          &copy; {currentYear} Bohdan Hembatiuk. All rights reserved.
        </p>
        <p
          className="text-[10px] sm:text-[11px] font-light tracking-wider"
          style={{ color: "rgba(215,226,234,0.25)" }}
        >
          Built with{" "}
          <span className="text-[rgba(215,226,234,0.45)]">Next.js</span>
          {" & "}
          <span className="text-[rgba(215,226,234,0.45)]">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}