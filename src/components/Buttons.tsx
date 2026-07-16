"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { ArrowRight, ExternalLink } from "lucide-react";

/* ── Base button styles (Tailwind-based, high-contrast) ─────────── */

const BASE_BTN =
  "inline-flex items-center justify-center gap-3 rounded-md font-semibold tracking-wide transition transform duration-150 disabled:opacity-40 disabled:cursor-not-allowed";

const SIZES = "px-6 py-3 text-base sm:px-8 sm:py-3.5 lg:px-10 lg:py-4";

const PRIMARY_CLASSES =
  "bg-blue-600 text-white border border-transparent hover:bg-blue-700 active:bg-blue-800 shadow-lg hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500";

const SECONDARY_CLASSES =
  "bg-white text-blue-600 border border-blue-600/20 hover:bg-blue-50 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-300";

/* ── ContactButton (primary CTA, scrolls to #contact) ────────────── */

export function ContactButton({ className = "" }: { className?: string }) {
  const { t } = useLanguage();
  return (
    <motion.button
      type="button"
      className={`${BASE_BTN} ${SIZES} ${PRIMARY_CLASSES} ${className}`}
      onClick={() => {
        const el = document.getElementById("contact");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {t.buttons.contact}
    </motion.button>
  );
}

/* ── PrimaryLinkButton (solid, for href-based CTAs) ───────────────── */

export function PrimaryLinkButton({
  href,
  children,
  className = "",
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");
  const MotionComponent = motion.create(isExternal ? "a" : Link);
  
  return (
    <MotionComponent
      href={href}
      {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
      className={`${BASE_BTN} ${SIZES} ${PRIMARY_CLASSES} ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </MotionComponent>
  );
}

/* ── SecondaryLinkButton (outline, for href-based secondary CTAs) ──── */

export function SecondaryLinkButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");
  const MotionComponent = motion.create(isExternal ? "a" : Link);
  
  return (
    <MotionComponent
      href={href}
      {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
      className={`group ${BASE_BTN} ${SIZES} ${SECONDARY_CLASSES} ${className}`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </MotionComponent>
  );
}

/* ── LiveProjectButton (secondary, external link) ─────────────────── */

export function LiveProjectButton({ href }: { href?: string }) {
  const { t } = useLanguage();
  const className = `${BASE_BTN} ${SIZES}`;
  
  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`group ${className} ${SECONDARY_CLASSES}`}
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.97 }}
      >
        {t.projects.live}
        <motion.div whileHover={{ x: 2, y: -1 }} transition={{ duration: 0.2 }}>
          <ExternalLink size={14} strokeWidth={1.5} />
        </motion.div>
      </motion.a>
    );
  }
  
  return (
    <motion.button
      type="button"
      disabled
      className={`${className} ${SECONDARY_CLASSES}`}
      aria-disabled="true"
    >
      {t.projects.live}
      <ExternalLink size={14} strokeWidth={1.5} />
    </motion.button>
  );
}

/* ── ViewProjectButton (secondary, internal link) ──────────────────── */

export function ViewProjectButton({ slug }: { slug: string }) {
  const { t } = useLanguage();
  return (
    <Link
      href={`/projects/${slug}`}
      className={`group ${BASE_BTN} ${SIZES} ${SECONDARY_CLASSES}`}
    >
      <motion.div
        className="flex items-center gap-2"
        whileHover={{ gap: "0.75rem" }}
      >
        {t.projects.viewMore}
        <motion.div
          whileHover={{ x: 3 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowRight size={14} strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </Link>
  );
}