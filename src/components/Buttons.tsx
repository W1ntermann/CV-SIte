"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { ArrowRight, ExternalLink, Send, Eye, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

/* ── ContactButton (gradient CTA, scrolls to #contact) ──────────── */

export function ContactButton({ className = "" }: { className?: string }) {
  const { t } = useLanguage();
  return (
    <Button
      onClick={() => {
        const el = document.getElementById("contact");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }}
      variant="gradient"
      size="lg"
      className={className}
    >
      <span>{t.buttons.contact}</span>
      <motion.span
        animate={{ y: [0, 3, 0] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="h-4 w-4" />
      </motion.span>
    </Button>
  );
}

/* ── PrimaryLinkButton (gradient, for href-based CTAs) ───────────── */

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
  const icon = isExternal ? (
    <motion.span
      whileHover={{ x: 2, y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <ExternalLink className="h-4 w-4" />
    </motion.span>
  ) : (
    <motion.span
      whileHover={{ x: 4 }}
      transition={{ duration: 0.2 }}
    >
      <ArrowRight className="h-4 w-4" />
    </motion.span>
  );

  if (isExternal) {
    return (
      <Button asChild variant="gradient" size="default" className={className}>
        <a href={href} target="_blank" rel="noopener noreferrer" onClick={onClick}>
          {children}
          {icon}
        </a>
      </Button>
    );
  }

  return (
    <Button asChild variant="gradient" size="default" className={className}>
      <Link href={href} onClick={onClick}>
        {children}
        {icon}
      </Link>
    </Button>
  );
}

/* ── SecondaryLinkButton (outline, for href-based secondary CTAs) ─── */

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
  const icon = isExternal ? (
    <ExternalLink className="h-3.5 w-3.5" />
  ) : (
    <ArrowRight className="h-3.5 w-3.5" />
  );

  if (isExternal) {
    return (
      <Button asChild variant="outline" size="sm" className={className}>
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
          {icon}
        </a>
      </Button>
    );
  }

  return (
    <Button asChild variant="outline" size="sm" className={className}>
      <Link href={href}>
        {children}
        {icon}
      </Link>
    </Button>
  );
}

/* ── LiveProjectButton (glass for dark sections, outline for light) ── */

export function LiveProjectButton({
  href,
  variant = "outline",
}: {
  href?: string;
  variant?: "outline" | "glass";
}) {
  const { t } = useLanguage();

  if (href) {
    return (
      <Button asChild size="sm" variant={variant}>
        <a href={href} target="_blank" rel="noopener noreferrer" aria-label={t.projects.live}>
          <span>{t.projects.live}</span>
          <motion.span
            whileHover={{ x: 2, y: -1 }}
            transition={{ duration: 0.15 }}
          >
            <ExternalLink className="h-3.5 w-3.5" />
          </motion.span>
        </a>
      </Button>
    );
  }

  return (
    <Button size="sm" variant={variant} isDisabled>
      <span>{t.projects.live}</span>
      <ExternalLink className="h-3.5 w-3.5" />
    </Button>
  );
}

/* ── ViewProjectButton (ghost, internal link to project detail) ───── */

export function ViewProjectButton({ slug }: { slug: string }) {
  const { t } = useLanguage();
  return (
    <Button asChild size="sm" variant="ghost">
      <Link href={`/projects/${slug}`} aria-label={t.projects.viewMore}>
        <span>{t.projects.viewMore}</span>
        <motion.span
          whileHover={{ x: 4 }}
          transition={{ duration: 0.15 }}
        >
          <Eye className="h-3.5 w-3.5" />
        </motion.span>
      </Link>
    </Button>
  );
}