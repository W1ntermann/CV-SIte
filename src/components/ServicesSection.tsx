"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export function ServicesSection() {
  const { t } = useLanguage();
  const items = t.services.items;
  const [hovered, setHovered] = useState<number | null>(null);

  // Parallax effect on the whole section
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  // Staggered slide-in variants for each row
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
      className="relative px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] overflow-hidden"
      style={{ backgroundColor: "#FFFFFF", color: "#0C0C0C" }}
    >
      {/* Parallax decorative gradient balls (subtle) */}
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

      {/* Title */}
      <motion.h2
        className="font-black uppercase text-center mb-16 sm:mb-20 md:mb-28 relative z-10"
        style={{ color: "#0C0C0C", fontSize: "clamp(3rem, 12vw, 160px)", lineHeight: 1 }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {t.services.title}
      </motion.h2>

      <div className="max-w-5xl mx-auto relative z-10">
        {items.map((s, i) => {
          const n = String(i + 1).padStart(2, "0");
          const isHovered = hovered === i;
          const isLast = i === items.length - 1;

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
                className="relative"
              >
                {/* Black fill that slides in on hover */}
                <motion.div
                  aria-hidden
                  className="absolute inset-0"
                  style={{ backgroundColor: "#0C0C0C", transformOrigin: "left" }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
                />

                <motion.div
                  className="relative flex items-start gap-6 sm:gap-10 md:gap-14 py-8 sm:py-10 md:py-12"
                  animate={{
                    color: isHovered ? "#FFFFFF" : "#0C0C0C",
                    paddingLeft: isHovered ? 32 : 0,
                    paddingRight: isHovered ? 32 : 0,
                  }}
                  transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
                >
                  {/* Number — scale up and shift on hover */}
                  <motion.span
                    className="font-black flex-shrink-0 select-none"
                    style={{ fontSize: "clamp(3rem, 10vw, 140px)", lineHeight: 1 }}
                    animate={{
                      opacity: isHovered ? 0.3 : 1,
                      scale: isHovered ? 1.15 : 1,
                      x: isHovered ? 8 : 0,
                    }}
                    transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
                  >
                    {n}
                  </motion.span>

                  {/* Title + description */}
                  <div className="flex flex-col gap-3 sm:gap-4 pt-2 flex-1 min-w-0">
                    <motion.h3
                      className="font-medium uppercase"
                      style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)", lineHeight: 1.1 }}
                      animate={{
                        x: isHovered ? 4 : 0,
                      }}
                      transition={{ duration: 0.3, ease: [0.65, 0, 0.35, 1] }}
                    >
                      {s.name}
                    </motion.h3>

                    <AnimatePresence initial={false} mode="wait">
                      {isHovered ? (
                        <motion.p
                          key="desc"
                          className="font-light leading-relaxed max-w-2xl"
                          style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)" }}
                          initial={{ opacity: 0, y: 12, x: -8 }}
                          animate={{ opacity: 0.85, y: 0, x: 0 }}
                          exit={{ opacity: 0, y: 12, x: -8 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          {s.desc}
                        </motion.p>
                      ) : (
                        <motion.p
                          key="desc-idle"
                          className="font-light leading-relaxed max-w-2xl"
                          style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)", opacity: 0.6 }}
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

                  {/* Arrow — more expressive animation */}
                  <motion.span
                    aria-hidden
                    className="flex-shrink-0 self-center pr-0 sm:pr-1 md:pr-2"
                    initial={false}
                    animate={{
                      opacity: isHovered ? 1 : 0,
                      x: isHovered ? 0 : -24,
                      y: isHovered ? 0 : -8,
                      rotate: isHovered ? 0 : -45,
                      scale: isHovered ? 1 : 0.6,
                    }}
                    transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
                  >
                    <ArrowUpRight size={44} strokeWidth={1.5} />
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