"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export function ContactButton({ className = "" }: { className?: string }) {
  const { t } = useLanguage();
  return (
    <button
      type="button"
      className={`rounded-full text-white font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base transition-transform duration-200 hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${className}`}
      style={{
        background:
          "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
        boxShadow:
          "0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset",
        outline: "2px solid #ffffff",
        outlineOffset: "-3px",
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
