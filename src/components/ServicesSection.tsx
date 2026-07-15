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
      className="relative px-4 sm:px-6 md:px-8 lg:px-10 py-16 sm:py-20 md:py-28 lg:py-32 rounded-t-[32px] sm:rounded-t-[40px] md:rounded-t-[50px] lg:rounded-t-[60px] overflow-hidden scroll-mt-24"
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
        className="font-black uppercase text-center mb-12 sm:mb-16 md:mb-24 lg:mb-28 relative z-10"
        style={{ color: "#0C0C0C", fontSize: "clamp(2.5rem, 11vw, 150px)", lineHeight: 1 }}
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
                  className="relative flex items-start gap-4 sm:gap-8 md:gap-12 lg:gap-14 py-6 sm:py-8 md:py-10 lg:py-12"
                  animate={{
                    color: isHovered ? "#FFFFFF" : "#0C0C0C",
                    paddingLeft: isHovered ? 16 : 0,
                    paddingRight: isHovered ? 16 : 0,
                  }}
                  transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
                >
                  {/* Number — scale up and shift on hover */}
                  <motion.span
                    className="font-black flex-shrink-0 select-none"
                    style={{ fontSize: "clamp(2.2rem, 8vw, 120px)", lineHeight: 1 }}
                    animate={{
                      opacity: isHovered ? 0.3 : 1,
                      scale: isHovered ? 1.1 : 1,
                      x: isHovered ? 6 : 0,
                    }}
                    transition={{ duration: 0.4, ease: [0.65, 0, 0.35, 1] }}
                  >
                    {n}
                  </motion.span>

                  {/* Title + description */}
                  <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 pt-1 sm:pt-2 flex-1 min-w-0">
                    <motion.h3
                      className="font-medium uppercase"
                      style={{ fontSize: "clamp(0.9rem, 2vw, 2rem)", lineHeight: 1.15 }}
                      animate={{
                        x: isHovered ? 3 : 0,
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

                  {/* Arrow — more expressive animation */}
                  <motion.span
                    aria-hidden
                    className="flex-shrink-0 self-center pr-0 sm:pr-1 md:pr-2"
                    initial={false}
                    animate={{
                      opacity: isHovered ? 1 : 0,
                      x: isHovered ? 0 : -20,
                      y: isHovered ? 0 : -6,
                      rotate: isHovered ? 0 : -45,
                      scale: isHovered ? 1 : 0.6,
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