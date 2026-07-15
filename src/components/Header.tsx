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
  const [scrollProgress, setScrollProgress] = useState(0);

  const navLinks = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);

    // Calculate scroll progress (0 to 1)
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? Math.min(latest / docHeight, 1) : 0;
    setScrollProgress(progress);
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
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.15, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 md:px-6 md:pt-5"
      >
        {/* Floating glass pill */}
        <div
          className={`relative mx-auto flex max-w-5xl items-center justify-between rounded-full px-5 py-3 transition-all duration-500 md:px-7 md:py-3.5 ${
            scrolled
              ? "border border-[rgba(215,226,234,0.10)] bg-[rgba(18,18,20,0.7)] shadow-[0_8px_32px_rgba(0,0,0,0.45)] backdrop-blur-[20px]"
              : "border border-[rgba(215,226,234,0.07)] bg-[rgba(18,18,20,0.45)] shadow-[0_4px_24px_rgba(0,0,0,0.25)] backdrop-blur-[14px]"
          }`}
        >
          {/* Scroll progress track */}
          <div className="absolute bottom-[5px] left-6 right-6 h-[2px] overflow-hidden rounded-full bg-[rgba(215,226,234,0.06)]">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500"
              style={{ width: `${scrollProgress * 100}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>

          <nav className="flex w-full items-center justify-between">
            {/* Left: logo */}
            <div className="flex items-center gap-6 md:gap-8">
              <a
                href="#"
                className="group relative text-xl font-bold tracking-tight text-[#D7E2EA] transition-all duration-300 hover:scale-105 md:text-2xl"
                aria-label="Home"
              >
                <span className="bg-gradient-to-r from-[#D7E2EA] to-[#9fb0bd] bg-clip-text transition-all duration-300 group-hover:from-white group-hover:to-[#cfe0ec]">
                  BH
                </span>
              </a>

              {/* Desktop navigation links */}
              <ul className="hidden items-center gap-6 md:gap-8 lg:gap-10 md:flex">
                {navLinks.map((l) => {
                  const isActive = activeSection === l.href;
                  return (
                    <li key={l.href}>
                       <button
                         onClick={() => handleNavClick(l.href)}
                         className="relative cursor-pointer font-medium uppercase tracking-wider text-sm transition-colors duration-300 lg:text-base focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D7E2EA] rounded"
                        style={{
                          color: isActive ? "#FFFFFF" : "rgba(215,226,234,0.5)",
                        }}
                        onMouseEnter={(e) => {
                          if (!isActive) e.currentTarget.style.color = "rgba(215,226,234,0.85)";
                        }}
                        onMouseLeave={(e) => {
                          if (!isActive) e.currentTarget.style.color = "rgba(215,226,234,0.5)";
                        }}
                      >
                        {l.label}
                        {isActive && (
                          <motion.span
                            layoutId="activeNav"
                            className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-gradient-to-r from-purple-400 to-pink-400"
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
            <div className="hidden items-center gap-4 md:flex lg:gap-5">
              <ContactButton className="!px-6 !py-2.5 !text-xs lg:!px-7 lg:!py-3 lg:!text-sm" />
              <LangToggle />
            </div>

            {/* Mobile: hamburger */}
            <div className="flex items-center gap-3 md:hidden">
              <LangToggle />
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                className="p-1 text-[#D7E2EA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D7E2EA] rounded"
                aria-label="Open menu"
              >
                <Menu className="size-6" />
              </button>
            </div>
          </nav>
        </div>
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
                className="p-1 text-[#D7E2EA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D7E2EA] rounded"
                aria-label="Close menu"
              >
                <X className="size-6" />
              </button>
            </div>

            {/* Nav links */}
            <div className="flex flex-1 flex-col items-center justify-center gap-6 px-6">
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
                      className="cursor-pointer text-2xl font-bold uppercase tracking-[0.08em] transition-colors duration-200 sm:text-3xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D7E2EA] rounded"
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