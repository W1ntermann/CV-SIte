"use client";
import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { LangToggle } from "./LangToggle";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = useMemo(
    () => [
      { label: t.nav.about, href: "#about" },
      { label: t.nav.services, href: "#services" },
      { label: t.nav.projects, href: "#projects" },
    ],
    [t.nav.about, t.nav.services, t.nav.projects],
  );

  const menuVariants: Variants = {
    hidden: { opacity: 0, x: 300 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 } as any,
    },
    exit: { opacity: 0, x: 300 },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.4 },
    }),
  };

  return (
    <>
      {/* Main header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-black/90 backdrop-blur-md border-b border-white/5"
            : "bg-gradient-to-b from-black/40 to-transparent backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6 md:py-5">
          {/* Logo */}
          <motion.a
            href="/"
            className="group transition-all duration-300 hover:scale-105 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Home"
          >
            <img
              src="/logo.png"
              alt=""
              className="h-20 sm:h-28 lg:h-32 w-auto"
            />
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="relative text-sm text-gray-300 transition-colors duration-300 hover:text-white"
                whileHover="hover"
                initial="initial"
              >
                {item.label}
                <motion.span
                  className="absolute -bottom-1 left-0 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </nav>

          {/* Right section - LangToggle, Contact button & Mobile menu toggle */}
          <div className="flex items-center gap-4">
            <LangToggle className="hidden md:flex" />
            <motion.a
              href="#contact"
              className="group hidden items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-white transition-all duration-300 hover:border-white/50 hover:bg-white/5 sm:flex"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Contact</span>
              <motion.div
                className="transition-transform duration-300"
                whileHover={{ x: 2, y: -2 }}
              >
                <ArrowUpRight size={16} strokeWidth={1.5} />
              </motion.div>
            </motion.a>

            {/* Mobile menu button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-lg p-2 text-gray-300 transition-colors duration-300 hover:bg-white/10 hover:text-white md:hidden"
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? (
                <X size={24} strokeWidth={1.5} />
              ) : (
                <Menu size={24} strokeWidth={1.5} />
              )}
            </motion.button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
              {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-20 bg-black/40 backdrop-blur-sm md:hidden"
            />

            {/* Mobile menu */}
            <motion.nav
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed right-0 top-0 z-30 h-screen w-4/5 bg-black/95 backdrop-blur-md border-l border-white/10 pt-24 px-6 md:hidden"
            >
              <div className="space-y-6">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    custom={i}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    className="block text-lg font-light text-gray-300 transition-colors duration-300 hover:text-white"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>

              <motion.div
                custom={3}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className="mt-8 border-t border-white/10 pt-6"
              >
                <a
                  href="#contact"
                  className="group flex items-center gap-2 rounded-full border border-white/20 px-4 py-3 text-white transition-all duration-300 hover:border-white/50 hover:bg-white/5 w-fit"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>{t.nav.contact}</span>
                  <ArrowUpRight size={16} strokeWidth={1.5} />
                </a>
              </motion.div>

              <motion.div
                custom={4}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                className="mt-6"
              >
                <LangToggle />
              </motion.div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}