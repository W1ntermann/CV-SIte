"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { LangToggle } from "./LangToggle";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const NAV_ITEMS = ["about", "services", "projects", "contact"] as const;

export function Header() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Закриття мобільного меню при кліку поза ним
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  }, []);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 h-16 sm:h-20 lg:h-24 transition-all duration-300"
        style={{
          backgroundColor: scrolled
            ? "rgba(12, 12, 12, 0.82)"
            : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(215, 226, 234, 0.06)"
            : "1px solid transparent",
        }}
      >
        <nav className="mx-auto flex h-full max-w-[1400px] items-center justify-between px-5 sm:px-8 md:px-12 lg:px-16">
          {/* Logo */}
          <button
            type="button"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              setMobileMenuOpen(false);
            }}
            className="flex-shrink-0 flex items-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D7E2EA] rounded-lg group"
          >
            <img
              src="/logo.png"
              alt=""
              className="h-9 sm:h-10 lg:h-11 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </button>

          {/* Desktop navigation */}
          <ul className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_ITEMS.map((key) => (
              <li key={key}>
                <button
                  type="button"
                  onClick={() => scrollTo(key)}
                  className="relative px-4 lg:px-5 py-2.5 text-[11px] lg:text-xs font-medium uppercase tracking-[0.15em] rounded-full transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D7E2EA] hover:bg-white/[0.06]"
                  style={{ color: "rgba(215, 226, 234, 0.7)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#D7E2EA";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(215, 226, 234, 0.7)";
                  }}
                >
                  {t.nav[key]}
                </button>
              </li>
            ))}
          </ul>

          {/* Right side: LangToggle + mobile menu button */}
          <div className="flex items-center gap-3 sm:gap-4">
            <LangToggle />

            {/* Mobile hamburger */}
            <button
              type="button"
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D7E2EA] transition-colors duration-200 hover:bg-white/5"
              style={{
                border: "1px solid rgba(215, 226, 234, 0.2)",
                backgroundColor: "transparent",
              }}
              aria-label="Toggle menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X size={18} color="#D7E2EA" />
              ) : (
                <svg
                  width="16"
                  height="12"
                  viewBox="0 0 16 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="0" width="16" height="1.5" rx="0.75" fill="#D7E2EA" />
                  <rect y="5.25" width="16" height="1.5" rx="0.75" fill="#D7E2EA" />
                  <rect y="10.5" width="16" height="1.5" rx="0.75" fill="#D7E2EA" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        ref={mobileMenuRef}
        className={`fixed top-16 sm:top-20 lg:top-24 left-0 right-0 bottom-0 z-40 md:hidden overflow-y-auto transition-all duration-300 ease-out ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ backgroundColor: "rgba(9, 9, 9, 0.98)", backdropFilter: "blur(24px)" }}
      >
        <div className="flex flex-col items-center justify-start pt-16 sm:pt-20 px-6 gap-3">
          {NAV_ITEMS.map((key, i) => (
            <button
              key={key}
              type="button"
              onClick={() => scrollTo(key)}
              className="w-full max-w-sm py-4 text-center text-sm sm:text-base font-medium uppercase tracking-widest rounded-2xl transition-all duration-200 hover:bg-white/5 active:scale-95"
              style={{
                color: "rgba(215, 226, 234, 0.85)",
                transform: mobileMenuOpen ? "translateY(0)" : "translateY(12px)",
                opacity: mobileMenuOpen ? 1 : 0,
                transition: `all 0.35s ease-out ${i * 0.05}s`,
              }}
            >
              {t.nav[key]}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}