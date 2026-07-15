"use client"

import React, { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/i18n/LanguageContext"
import { LangToggle } from "@/components/LangToggle"

const NAV_KEYS = ["about", "services", "projects", "contact"] as const

export const Header: React.FC = () => {
  const { t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (typeof window === "undefined") return

    const sections = NAV_KEYS.map((k) => document.getElementById(k))
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    )

    sections.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const navItems = NAV_KEYS.map((key) => ({
    label: t.nav[key],
    href: `#${key}`,
    isActive: activeSection === key,
  }))

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-2 sm:p-4">
      <div
        className={`mx-auto max-w-6xl transition-all duration-500 ease-out rounded-full ${
          scrolled
            ? "bg-[#0C0C0C]/95 backdrop-blur-xl shadow-2xl shadow-black/40 border border-[#D7E2EA]/[0.08] py-2.5 sm:py-3"
            : "bg-[#0C0C0C]/80 backdrop-blur-lg shadow-xl shadow-black/20 border border-[#D7E2EA]/[0.06] py-3 sm:py-3.5"
        }`}
      >
        {/* Desktop layout — 3-column grid */}
        <div className="hidden lg:grid items-center px-3 sm:px-5" style={{ gridTemplateColumns: "1fr auto 1fr" }}>
          {/* Logo — left */}
          <Link
            href="/"
            className="flex items-center shrink-0 justify-self-start pl-1 sm:pl-2"
            aria-label="Home"
          >
            <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full shadow-lg shadow-[#2a6553]/20 ring-1 ring-[#D7E2EA]/10 hover:scale-105 transition-transform duration-300 cursor-pointer overflow-hidden">
              <Image
                src="/logo.png"
                alt="Logo"
                width={100}
                height={100}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </Link>

          {/* Navigation — center */}
          <nav className="flex items-center gap-1 justify-self-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 ${
                  item.isActive
                    ? "text-[#D7E2EA] bg-[#D7E2EA]/[0.08] shadow-[0_0_20px_rgba(215,226,234,0.04)]"
                    : "text-[#D7E2EA]/60 hover:text-[#D7E2EA] hover:bg-[#D7E2EA]/[0.05]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side — LangToggle */}
          <div className="flex items-center gap-3 justify-self-end pr-1 sm:pr-2">
            <LangToggle />
          </div>
        </div>

        {/* Mobile layout — same row */}
        <div className="flex lg:hidden items-center justify-between px-3 sm:px-5">
          <Link
            href="/"
            className="flex items-center shrink-0 pl-1 sm:pl-2"
            aria-label="Home"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-lg shadow-[#2a6553]/20 ring-1 ring-[#D7E2EA]/10 hover:scale-105 transition-transform duration-300 cursor-pointer overflow-hidden">
              <Image
                src="/logo.png"
                alt="Logo"
                width={100}
                height={100}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </Link>

          <button
            className="p-2.5 rounded-full hover:bg-[#D7E2EA]/[0.08] transition-all duration-200 pr-1 sm:pr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X size={22} className="text-[#D7E2EA]" />
            ) : (
              <Menu size={22} className="text-[#D7E2EA]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 sm:mt-4 pb-4 space-y-1 border-t border-[#D7E2EA]/[0.08] pt-4 max-h-[70vh] overflow-y-auto px-3 sm:px-5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block w-full text-left px-5 py-3 rounded-full transition-all duration-200 font-medium ${
                  item.isActive
                    ? "text-[#D7E2EA] bg-[#D7E2EA]/[0.08]"
                    : "text-[#D7E2EA]/70 hover:text-[#D7E2EA] hover:bg-[#D7E2EA]/[0.05]"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <div className="flex items-center justify-center mt-4 pt-4 border-t border-[#D7E2EA]/[0.08]">
              <LangToggle />
            </div>
          </div>
        )}
      </div>
    </header>
  )
}