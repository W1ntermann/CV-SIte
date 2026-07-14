"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { LangToggle } from "./LangToggle";
import { ContactButton } from "./Buttons";

export function Header() {
  const { t } = useLanguage();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px 0px 0px" }
    );

    const sections = navLinks
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter(Boolean);

    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, [navLinks]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.getElementById(href.slice(1));
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-3 md:py-4 transition-all duration-300 ${
          scrolled
            ? "bg-[rgba(12,12,12,0.85)] backdrop-blur-[16px] border-b border-[rgba(215,226,234,0.08)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Left: logo */}
          <div className="flex items-center gap-8 md:gap-12">
            <a
              href="#"
              className="text-lg md:text-xl font-bold tracking-tight text-[#D7E2EA] select-none"
              aria-label="Home"
            >
              BH
            </a>

            {/* Desktop navigation links */}
            <ul className="hidden md:flex items-center gap-5 md:gap-8">
              {navLinks.map((l) => {
                const isActive = activeSection === l.href;
                return (
                  <li key={l.href}>
                    <button
                      onClick={() => handleNavClick(l.href)}
                      className="relative font-medium uppercase tracking-wider text-xs md:text-sm transition-colors duration-300 cursor-pointer"
                      style={{
                        color: isActive ? "#FFFFFF" : "rgba(215,226,234,0.6)",
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) e.currentTarget.style.color = "rgba(215,226,234,0.85)";
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) e.currentTarget.style.color = "rgba(215,226,234,0.6)";
                      }}
                    >
                      {l.label}
                      {isActive && (
                        <motion.span
                          layoutId="activeNav"
                          className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-[#D7E2EA]"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right: CTA + LangToggle (desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <ContactButton className="!px-5 !py-2 !text-[11px]" />
            <LangToggle />
          </div>

          {/* Mobile: hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <LangToggle />
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="text-[#D7E2EA] p-1"
              aria-label="Open menu"
            >
              <Menu className="size-6" />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] flex flex-col"
            style={{ backgroundColor: "#0C0C0C" }}
          >
            {/* Close button */}
            <div className="flex items-center justify-end px-6 pt-3 pb-2">
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="text-[#D7E2EA] p-1"
                aria-label="Close menu"
              >
                <X className="size-6" />
              </button>
            </div>

            {/* Nav links */}
            <div className="flex-1 flex flex-col items-center justify-center gap-6 px-6">
              {navLinks.map((l, idx) => {
                const isActive = activeSection === l.href;
                return (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.08, duration: 0.3 }}
                  >
                    <button
                      onClick={() => handleNavClick(l.href)}
                      className="text-2xl sm:text-3xl font-bold uppercase tracking-[0.08em] transition-colors duration-200 cursor-pointer"
                      style={{
                        color: isActive ? "#FFFFFF" : "rgba(215,226,234,0.5)",
                      }}
                    >
                      {l.label}
                    </button>
                  </motion.div>
                );
              })}

              {/* CTA in mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08 + 0.1, duration: 0.3 }}
                className="mt-6"
              >
                <ContactButton className="!text-sm !px-10 !py-4" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}