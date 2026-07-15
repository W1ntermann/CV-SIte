"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";
import { ArrowRight } from "lucide-react";

export function ContactButton({ className = "" }: { className?: string }) {
  const { t } = useLanguage();
  return (
    <button
      type="button"
      className={`rounded-full font-medium uppercase tracking-widest px-5 py-2 text-xs sm:px-6 sm:py-2.5 sm:text-xs lg:px-7 lg:py-3 lg:text-sm transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D7E2EA] ${className}`}
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
      onClick={() => {
        const el = document.getElementById("contact");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }}
    >
      {t.buttons.contact}
    </button>
  );
}

export function LiveProjectButton({ href }: { href?: string }) {
  const { t } = useLanguage();
  const className = `inline-flex items-center justify-center rounded-full font-medium uppercase tracking-widest transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D7E2EA] ${
    href
      ? "px-5 py-2 text-xs sm:px-7 sm:py-3 sm:text-sm lg:px-8 lg:py-3.5 lg:text-base"
      : "px-5 py-2 text-xs sm:px-7 sm:py-3 sm:text-sm lg:px-8 lg:py-3.5 lg:text-base opacity-40 cursor-not-allowed"
  }`;
  const style = {
    borderColor: "rgba(215, 226, 234, 0.25)",
    color: "#D7E2EA",
    border: "1px solid rgba(215, 226, 234, 0.25)",
    background: "rgba(215, 226, 234, 0.08)",
  } as React.CSSProperties;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        style={style}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "rgba(215,226,234,0.15)";
          e.currentTarget.style.borderColor = "rgba(215,226,234,0.4)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "rgba(215,226,234,0.08)";
          e.currentTarget.style.borderColor = "rgba(215,226,234,0.25)";
        }}
      >
        {t.projects.live}
      </a>
    );
  }

  return (
    <button
      type="button"
      disabled
      className={className}
      style={style}
      aria-disabled="true"
    >
      {t.projects.live}
    </button>
  );
}

export function ViewProjectButton({ slug }: { slug: string }) {
  const { t } = useLanguage();
  return (
    <Link
      href={`/projects/${slug}`}
      className="group inline-flex items-center justify-center gap-2 rounded-full font-medium uppercase tracking-widest px-5 py-2 text-xs sm:px-7 sm:py-3 sm:text-sm lg:px-8 lg:py-3.5 lg:text-base transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D7E2EA]"
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
      {t.projects.viewMore}
      <ArrowRight
        size={16}
        className="transition-transform duration-300 group-hover:translate-x-0.5"
      />
    </Link>
  );
}