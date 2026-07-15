"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

export function LangToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLanguage();
  const isEn = lang === "en";

  const toggle = () => setLang(isEn ? "ua" : "en");

  return (
    <button
      type="button"
      onClick={toggle}
      className={`relative flex items-center justify-between w-[68px] sm:w-[72px] h-[32px] sm:h-[34px] rounded-full cursor-pointer select-none transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D7E2EA] hover:border-[rgba(215,226,234,0.35)] ${className}`}
      style={{
        backgroundColor: "rgba(215, 226, 234, 0.03)",
        border: "1px solid rgba(215, 226, 234, 0.25)",
      }}
      role="switch"
      aria-checked={isEn}
      aria-label="Switch language"
    >
      {/* Active pill background */}
      <motion.span
        layoutId="langPill"
        className="absolute top-[2px] bottom-[2px] rounded-full"
        style={{
          left: isEn ? "2px" : "calc(50% + 0px)",
          width: "calc(50% - 2px)",
          backgroundColor: "#D7E2EA",
        }}
        transition={{ type: "spring", stiffness: 500, damping: 35 }}
      />

      {/* EN */}
      <span
        className="relative z-10 w-1/2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-center transition-colors duration-200"
        style={{
          color: isEn ? "#0C0C0C" : "rgba(215, 226, 234, 0.5)",
        }}
      >
        en
      </span>

      {/* UA */}
      <span
        className="relative z-10 w-1/2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-center transition-colors duration-200"
        style={{
          color: !isEn ? "#0C0C0C" : "rgba(215, 226, 234, 0.5)",
        }}
      >
        ua
      </span>
    </button>
  );
}