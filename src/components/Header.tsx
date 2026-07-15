"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { LangToggle } from "./LangToggle";
import { X, Mail, Camera, Send, GitBranch } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = ["about", "services", "projects", "contact"] as const;

const SOCIALS = [
  { icon: Mail, href: "mailto:bogdangembatyuk@gmail.com", label: "Email" },
  { icon: Camera, href: "https://instagram.com/bohdan_codes", label: "Instagram" },
  { icon: Send, href: "https://t.me/badan_badanowycz", label: "Telegram" },
  { icon: GitBranch, href: "https://github.com/W1ntermann", label: "GitHub" },
];

export function Header() {
  const { t, lang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

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
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileMenuOpen(false);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "h-[72px] sm:h-20 lg:h-24" : "h-22 sm:h-24 lg:h-28"
        }`}
        style={{
          backgroundColor: scrolled ? "rgba(12, 12, 12, 0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(215, 226, 234, 0.06)" : "1px solid transparent",
        }}
      >
        <nav className="mx-auto flex h-full max-w-[1400px] items-center justify-between px-6 md:px-10 lg:px-16">
          {/* Logo */}
          <button
            type="button"
            onClick={scrollToTop}
            className="flex-shrink-0 flex items-center rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D7E2EA] group"
          >
            <img
              src="/logo.png"
              alt=""
              className="h-20 sm:h-28 lg:h-32 w-auto transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </button>

          {/* Desktop navigation */}
          <ul className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_ITEMS.map((key) => (
              <li key={key}>
                <button
                  type="button"
                  onClick={() => scrollTo(key)}
                  className="relative px-4 lg:px-5 py-2.5 text-sm font-medium tracking-wide rounded-full transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D7E2EA] hover:bg-white/[0.06]"
                  style={{ color: "rgba(215, 226, 234, 0.75)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#D7E2EA";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(215, 226, 234, 0.75)";
                  }}
                >
                  {t.nav[key]}
                </button>
              </li>
            ))}
          </ul>

          {/* Right side: LangToggle + CTA + mobile menu button */}
          <div className="flex items-center gap-3 sm:gap-5">
            <LangToggle />

            {/* Desktop CTA */}
            <button
              type="button"
              onClick={() => scrollTo("contact")}
              className="hidden md:inline-flex items-center rounded-full px-6 py-2.5 text-sm font-medium tracking-wide transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D7E2EA] hover:bg-white/[0.08] active:scale-[0.98]"
              style={{
                background: "transparent",
                color: "#D7E2EA",
                border: "1px solid rgba(215, 226, 234, 0.35)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(215, 226, 234, 0.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(215, 226, 234, 0.35)";
              }}
            >
              {t.buttons.contact}
            </button>

            {/* Mobile menu toggle: hamburger / close */}
            <button
              type="button"
              className="md:hidden relative flex items-center justify-center w-11 h-11 rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D7E2EA] transition-colors duration-200 hover:bg-white/5"
              style={{
                border: "1px solid rgba(215, 226, 234, 0.2)",
                backgroundColor: "transparent",
              }}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X size={20} color="#D7E2EA" />
              ) : (
                <HamburgerIcon />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-40 md:hidden flex flex-col"
            style={{ backgroundColor: "rgba(9, 9, 9, 0.98)", backdropFilter: "blur(24px)" }}
          >
            {/* Top bar inside menu */}
            <div className="flex items-center justify-between px-6 h-20 sm:h-24">
              <button
                type="button"
                onClick={scrollToTop}
                className="flex items-center rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D7E2EA]"
              >
                <img src="/logo.png" alt="" className="h-12 sm:h-14 w-auto" />
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center w-11 h-11 rounded-full transition-colors duration-200 hover:bg-white/5"
                style={{ border: "1px solid rgba(215, 226, 234, 0.2)" }}
                aria-label="Close menu"
              >
                <X size={20} color="#D7E2EA" />
              </button>
            </div>

            {/* Menu items */}
            <div className="flex-1 flex flex-col items-start justify-center px-8 sm:px-12 gap-2">
              {NAV_ITEMS.map((key, i) => (
                <motion.button
                  key={key}
                  type="button"
                  onClick={() => scrollTo(key)}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                  className="group flex items-center gap-4 py-3 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D7E2EA] rounded-xl"
                >
                  <span
                    className="text-xs font-medium uppercase tracking-widest transition-colors duration-200"
                    style={{ color: "rgba(215, 226, 234, 0.35)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="text-3xl sm:text-4xl font-medium tracking-tight transition-colors duration-200 group-hover:text-[#D7E2EA]"
                    style={{ color: "rgba(215, 226, 234, 0.9)" }}
                  >
                    {t.nav[key]}
                  </span>
                </motion.button>
              ))}
            </div>

            {/* Bottom bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              className="px-8 sm:px-12 pb-10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
              style={{ borderTop: "1px solid rgba(215, 226, 234, 0.08)" }}
            >
              <a
                href="mailto:bogdangembatyuk@gmail.com"
                className="text-sm font-medium tracking-wide transition-colors duration-200 hover:text-[#D7E2EA]"
                style={{ color: "rgba(215, 226, 234, 0.6)" }}
              >
                bogdangembatyuk@gmail.com
              </a>
              <div className="flex items-center gap-4">
                {SOCIALS.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      aria-label={social.label}
                      className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 hover:bg-white/5 hover:text-[#D7E2EA]"
                      style={{ color: "rgba(215, 226, 234, 0.6)", border: "1px solid rgba(215, 226, 234, 0.12)" }}
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function HamburgerIcon() {
  return (
    <div className="relative w-5 h-4 flex flex-col justify-between">
      <span className="block h-[2px] w-full rounded-full bg-[#D7E2EA]" />
      <span className="block h-[2px] w-full rounded-full bg-[#D7E2EA]" />
      <span className="block h-[2px] w-full rounded-full bg-[#D7E2EA]" />
    </div>
  );
}
