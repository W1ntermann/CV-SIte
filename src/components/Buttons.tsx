"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export function ContactButton({ className = "" }: { className?: string }) {
  const { t } = useLanguage();
  return (
    <button
      type="button"
      className={`rounded-full font-medium uppercase tracking-widest px-6 py-2.5 text-xs lg:px-7 lg:py-3 lg:text-sm transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D7E2EA] ${className}`}
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
  const className =
    "inline-flex items-center justify-center rounded-full border-2 font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D7E2EA]";
  const style = { borderColor: "#D7E2EA", color: "#D7E2EA" } as React.CSSProperties;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        style={style}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(215,226,234,0.1)")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
      >
        {t.projects.live}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={className}
      style={style}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(215,226,234,0.1)")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
    >
      {t.projects.live}
    </button>
  );
}
