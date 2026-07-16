"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Server, Cpu, Globe, Database, Code2 } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const serviceIcons = [Cpu, Server, Globe, Code2, Database];

export function ServicesSection() {
  const { t } = useLanguage();
  const items = t.services.items;
  const [hovered, setHovered] = useState<number | null>(null);
  const [tapped, setTapped] = useState<number | null>(null);

  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  const ease = [0.25, 0.1, 0.25, 1] as const;
  const rowVariants = {
    hidden: (i: number) => ({
      opacity: 0,
      x: -80,
    }),
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1 + i * 0.12,
        duration: 0.7,
        ease: ease as [number, number, number, number],
      },
    }),
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative px-4 sm:px-6 md:px-8 lg:px-10 py-10 sm:py-14 md:py-20 lg:py-24 rounded-t-[32px] sm:rounded-t-[40px] md:rounded-t-[50px] lg:rounded-t-[60px] overflow-hidden scroll-mt-24"
      style={{ backgroundColor: "#FFFFFF", color: "#0C0C0C" }}
    >
      {/* Background parallax orbs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-[30%] -right-[20%] w-[600px] h-[600px] rounded-full opacity-[0.04]"
        style={{
          backgroundColor: "#0C0C0C",
          y: parallaxY,
          filter: "blur(80px)",
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-[30%] -left-[20%] w-[500px] h-[500px] rounded-full opacity-[0.03]"
        style={{
          backgroundColor: "#0C0C0C",
          y: useTransform(scrollYProgress, [0, 1], [-60, 60]),
          filter: "blur(80px)",
        }}
      />

      {/* Section eyebrow */}
      <div className="text-center mb-3 sm:mb-6 relative z-10">
        <span
          className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-medium"
          style={{ color: "rgba(12,12,12,0.35)" }}
        >
          — What I Offer
        </span>
      </div>

      <motion.h2
        className="font-black uppercase text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 relative z-10"
        style={{ color: "#0C0C0C", fontSize: "clamp(2rem, 6vw, 4.5rem)", lineHeight: 1 }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {t.services.title}
      </motion.h2>

      <div className="max-w-6xl mx-auto relative z-10">
        {items.map((s, i) => {
          const n = String(i + 1).padStart(2, "0");
          const isHovered = hovered === i;
          const isTapped = tapped === i;
          const isActive = isHovered || isTapped;
          const isLast = i === items.length - 1;
          const Icon = serviceIcons[i];

          return (
            <motion.div
              key={n}
              custom={i}
              variants={rowVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="relative overflow-hidden group cursor-pointer"
              style={{
                borderTop: "1px solid rgba(12,12,12,0.15)",
                ...(isLast ? { borderBottom: "1px solid rgba(12,12,12,0.15)" } : {}),
              }}
            >
              <div
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setTapped(tapped === i ? null : i)}
                className="relative"
              >
                {/* Slide-in dark background */}
                <motion.div
                  aria-hidden
                  className="absolute inset-0"
                  style={{ backgroundColor: "#0C0C0C", transformOrigin: "left" }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isActive ? 1 : 0 }}
                  transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
                />

                <motion.div
                  className="relative flex items-center gap-3 sm:gap-5 md:gap-8 lg:gap-10 py-4 sm:py-5 md:py-6 lg:py-8"
                  animate={{
                    color: isActive ? "#FFFFFF" : "#0C0C0C",
                    paddingLeft: isActive ? 16 : 0,
                    paddingRight: isActive ? 16 : 0,
                  }}
                  transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
                >
                  {/* Number */}
                  <motion.span
                    className="font-black flex-shrink-0 select-none"
                    style={{ fontSize: "clamp(1.8rem, 5vw, 4rem)", lineHeight: 1 }}
                    animate={{
                      opacity: isActive ? 0.3 : 1,
                      scale: isActive ? 1.1 : 1,
                      x: isActive ? 6 : 0,
                    }}
                    transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
                  >
                    {n}
                  </motion.span>

                  {/* Service icon */}
                  <motion.span
                    className="flex-shrink-0 hidden sm:flex items-center justify-center w-9 h-9 md:w-11 md:h-11 rounded-xl"
                    style={{
                      background: isActive
                        ? "rgba(255,255,255,0.1)"
                        : "rgba(12,12,12,0.06)",
                      color: isActive ? "rgba(255,255,255,0.7)" : "rgba(12,12,12,0.5)",
                    }}
                    animate={{
                      scale: isActive ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon size={16} className="md:size-5" strokeWidth={1.5} />
                  </motion.span>

                  <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 pt-1 sm:pt-2 flex-1 min-w-0">
                    <motion.h3
                      className="font-medium uppercase"
                      style={{ fontSize: "clamp(0.9rem, 2vw, 2rem)", lineHeight: 1.15 }}
                      animate={{
                        x: isActive ? 3 : 0,
                      }}
                      transition={{ duration: 0.3, ease: [0.65, 0, 0.35, 1] }}
                    >
                      {s.name}
                    </motion.h3>

                    <AnimatePresence initial={false} mode="wait">
                      {isActive ? (
                        <motion.p
                          key="desc"
                          className="font-light leading-relaxed max-w-2xl"
                          style={{ fontSize: "clamp(0.8rem, 1.5vw, 1.2rem)" }}
                          initial={{ opacity: 0, y: 10, x: -6 }}
                          animate={{ opacity: 0.85, y: 0, x: 0 }}
                          exit={{ opacity: 0, y: 10, x: -6 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          {s.desc}
                        </motion.p>
                      ) : (
                        <motion.p
                          key="desc-idle"
                          className="font-light leading-relaxed max-w-2xl hidden sm:block"
                          style={{ fontSize: "clamp(0.8rem, 1.5vw, 1.2rem)", opacity: 0.6 }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 0.6 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {s.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  <motion.span
                    aria-hidden
                    className="flex-shrink-0 self-center pr-0 sm:pr-1 md:pr-2"
                    initial={false}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      x: isActive ? 0 : -20,
                      y: isActive ? 0 : -6,
                      rotate: isActive ? 0 : -45,
                      scale: isActive ? 1 : 0.6,
                    }}
                    transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
                  >
                    <ArrowUpRight size={32} className="sm:w-9 md:w-10 lg:w-11" strokeWidth={1.5} />
                  </motion.span>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}