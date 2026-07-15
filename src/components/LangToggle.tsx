"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

export function LangToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLanguage();

  const setEn = () => setLang("en");
  const setUa = () => setLang("ua");

  return (
    <div
      className={`relative flex items-center w-[84px] sm:w-[92px] h-[34px] sm:h-[38px] rounded-full p-[3px] select-none ${className}`}
      style={{
        backgroundColor: "rgba(215, 226, 234, 0.04)",
        border: "1px solid rgba(215, 226, 234, 0.18)",
      }}
      role="group"
      aria-label="Switch language"
    >
      {/* Active pill background */}
      <motion.span
        layoutId="langPill"
        className="absolute top-[3px] bottom-[3px] rounded-full"
        style={{
          left: lang === "en" ? "3px" : "calc(50% - 1px)",
          width: "calc(50% + 1px)",
          backgroundColor: "#D7E2EA",
        }}
        transition={{ type: "spring", stiffness: 500, damping: 35 }}
      />

      {/* EN */}
      <button
        type="button"
        onClick={setEn}
        className="relative z-10 flex-1 h-full text-[11px] sm:text-xs font-semibold uppercase tracking-wider rounded-full transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D7E2EA]"
        style={{
          color: lang === "en" ? "#0C0C0C" : "rgba(215, 226, 234, 0.55)",
        }}
        aria-pressed={lang === "en"}
      >
        en
      </button>

      {/* UA */}
      <button
        type="button"
        onClick={setUa}
        className="relative z-10 flex-1 h-full text-[11px] sm:text-xs font-semibold uppercase tracking-wider rounded-full transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D7E2EA]"
        style={{
          color: lang === "ua" ? "#0C0C0C" : "rgba(215, 226, 234, 0.55)",
        }}
        aria-pressed={lang === "ua"}
      >
        ua
      </button>
    </div>
  );
}
