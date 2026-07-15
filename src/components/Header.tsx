"use client"

import React, { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/i18n/LanguageContext"
import { LangToggle } from "@/components/LangToggle"

const NAV_ITEMS = ["about", "services", "projects", "contact"] as const

export const Header: React.FC = () => {
  const { t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Nav items from i18n
  const navItems = NAV_ITEMS.map((key) => ({
    label: t.nav[key],
    href: key === "about" ? "#about" : key === "services" ? "#services" : key === "projects" ? "#projects" : "#contact",
  }))

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-2 sm:p-4">
      <div
        className={`max-w-7xl mx-auto transition-all duration-500 ease-out rounded-full px-4 sm:px-8 py-3 sm:py-4 ${
          scrolled
            ? "bg-[#0C0C0C]/95 backdrop-blur-xl shadow-2xl shadow-black/40 border border-[#D7E2EA]/[0.08]"
            : "bg-[#0C0C0C]/80 backdrop-blur-lg shadow-xl shadow-black/20 border border-[#D7E2EA]/[0.06]"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
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

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[#D7E2EA]/70 hover:text-[#D7E2EA] transition-all duration-300 font-medium text-sm px-4 py-2 rounded-full hover:bg-[#D7E2EA]/[0.06] hover:shadow-[0_0_20px_rgba(215,226,234,0.03)]"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center gap-3">
            <LangToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2.5 rounded-full hover:bg-[#D7E2EA]/[0.08] transition-all duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
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
          <div className="lg:hidden mt-4 sm:mt-6 pb-4 space-y-1 border-t border-[#D7E2EA]/[0.08] pt-4 max-h-[70vh] overflow-y-auto">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block w-full text-left px-5 py-3 text-[#D7E2EA]/80 hover:text-[#D7E2EA] hover:bg-[#D7E2EA]/[0.06] rounded-full transition-all duration-200 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile Language Switcher */}
            <div className="flex items-center justify-center mt-4 pt-4 border-t border-[#D7E2EA]/[0.08]">
              <LangToggle />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}