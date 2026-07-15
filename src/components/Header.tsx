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
        className="fixed top-0 left-0 right-0 z-50 h-16 sm:h-18 lg:h-20 transition-all duration-300"
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
        <nav className="mx-auto flex h-full max-w-[1400px] items-center justify-between px-8 md:px-12 lg:px-16">
          {/* Logo */}
          <button
            type="button"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              setMobileMenuOpen(false);
            }}
            className="flex-shrink-0 flex items-center gap-3 sm:gap-3.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D7E2EA] rounded group"
          >
            <img
              src="/logo.png"
              alt=""
              className="h-8 sm:h-10 lg:h-11 w-auto"
            />
            <span
              className="hidden sm:inline text-sm md:text-base lg:text-lg font-bold uppercase tracking-[0.25em] transition-colors duration-200"
              style={{
                color: "#D7E2EA",
                letterSpacing: "0.3em",
              }}
            >
              Bohdan
            </span>
          </button>

          {/* Desktop navigation */}
          <ul className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_ITEMS.map((key) => (
              <li key={key}>
                <button
                  type="button"
                  onClick={() => scrollTo(key)}
                  className="relative px-3 lg:px-4 py-2 text-xs lg:text-sm font-medium uppercase tracking-widest rounded-full transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D7E2EA]"
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
          <div className="flex items-center gap-5 sm:gap-6">
            <LangToggle />

            {/* Mobile hamburger */}
            <button
              type="button"
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D7E2EA] transition-colors duration-200 hover:bg-white/5"
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
      {mobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="fixed top-16 sm:top-18 lg:top-20 left-0 right-0 bottom-0 z-40 bg-black/95 backdrop-blur-xl md:hidden overflow-y-auto"
        >
          <div className="flex flex-col items-center justify-start pt-12 px-6 gap-2">
            {NAV_ITEMS.map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => scrollTo(key)}
                className="w-full max-w-sm py-4 text-center text-sm font-medium uppercase tracking-widest rounded-xl transition-all duration-200 hover:bg-white/5 active:scale-95"
                style={{ color: "rgba(215, 226, 234, 0.8)" }}
              >
                {t.nav[key]}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}