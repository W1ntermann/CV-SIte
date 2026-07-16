"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

/* ── Base button styles (Tailwind-based, high-contrast) ─────────── */

const BASE_BTN =
  "inline-flex items-center justify-center gap-2 sm:gap-3 rounded-md font-semibold tracking-wide transition transform duration-150 disabled:opacity-40 disabled:cursor-not-allowed min-w-0 max-w-[8rem] sm:max-w-[14rem] truncate";

const SIZES = "px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base lg:px-10 lg:py-4";

const PRIMARY_CLASSES =
  "bg-blue-600 text-white border border-transparent hover:bg-blue-700 active:bg-blue-800 shadow-sm sm:shadow-lg sm:hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500";

const SECONDARY_CLASSES =
  "bg-white text-blue-600 border border-blue-600/20 hover:bg-blue-50 shadow-sm sm:hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-300";

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
      <Button asChild size="sm" variant="secondary" className={className}>
        <a href={href} target="_blank" rel="noopener noreferrer" aria-label={t.projects.live}>
          <span className="flex items-center gap-2">
            {t.projects.live}
            <motion.span whileHover={{ x: 2, y: -1 }} transition={{ duration: 0.2 }}>
              <ExternalLink size={14} strokeWidth={1.5} />
            </motion.span>
          </span>
        </a>
      </Button>
    );
  }

  return (
    <Button size="sm" variant="secondary" isDisabled>
      <span className="flex items-center gap-2">
        {t.projects.live}
        <ExternalLink size={14} strokeWidth={1.5} />
      </span>
    </Button>
  );
}

/* ── ViewProjectButton (secondary, internal link) ──────────────────── */

export function ViewProjectButton({ slug }: { slug: string }) {
  const { t } = useLanguage();
  return (
    <Button asChild size="sm" variant="secondary">
      <Link href={`/projects/${slug}`} aria-label={t.projects.viewMore}>
        <span className="flex items-center gap-2">
          {t.projects.viewMore}
          <motion.span whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
            <ArrowRight size={14} strokeWidth={1.5} />
          </motion.span>
        </span>
      </Link>
    </Button>
  );
}