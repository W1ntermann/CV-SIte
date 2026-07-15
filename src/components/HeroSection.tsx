"use client";

import { FadeIn } from "./FadeIn";
import { Magnet } from "./Magnet";
import { ContactButton } from "./Buttons";
import { useLanguage } from "@/i18n/LanguageContext";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="min-h-dvh flex flex-col relative pt-28 sm:pt-32 md:pt-36 lg:pt-40" style={{ overflowX: "clip" }}>

      <div className="flex-1 flex flex-col justify-start md:justify-between px-4 sm:px-6 md:px-10 relative gap-4 sm:gap-6 md:gap-0">
        <div
          className="relative left-0 right-0 z-10 flex justify-center pointer-events-none mb-5 sm:mb-8 md:mb-12"
          style={{ top: "auto", bottom: "auto" }}
        >
          {/* Magnet only on md+ to avoid mobile touch glitches */}
          <Magnet
            padding={80}
            strength={4}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="hidden md:block w-[48vw] max-w-[300px] md:w-[38vw] md:max-w-[420px] lg:w-[32vw] lg:max-w-[480px] pointer-events-auto"
          >
            <FadeIn delay={0.6} y={30}>
              <img
                src="/hero.png"
                alt="Bohdan Hembatiuk portrait"
                className="w-full h-auto"
              />
            </FadeIn>
          </Magnet>
          <div className="md:hidden w-[62vw] max-w-[280px] sm:w-[50vw] sm:max-w-[360px]">
            <FadeIn delay={0.6} y={30}>
              <img
                src="/hero.png"
                alt="Bohdan Hembatiuk portrait"
                className="w-full h-auto"
              />
            </FadeIn>
          </div>
        </div>

        <div className="overflow-hidden relative z-20 pt-6 sm:pt-8 md:pt-0">
          <FadeIn delay={0.15} y={40}>
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none w-full text-[clamp(2rem,9vw,5.5rem)] sm:text-[clamp(2.75rem,10vw,7rem)] md:text-[clamp(3.5rem,11vw,8rem)] text-balance mt-0">
              {t.hero.greeting}
            </h1>
          </FadeIn>
        </div>

        <div className="flex justify-between items-end pb-6 sm:pb-8 md:pb-10 relative z-20 gap-4">
          <FadeIn delay={0.35} y={20}>
            <p
              className="font-light uppercase tracking-wide leading-snug max-w-[180px] sm:max-w-[240px] md:max-w-[300px] lg:max-w-[400px]"
              style={{ color: "#D7E2EA", fontSize: "clamp(0.7rem, 1.4vw, 1.5rem)" }}
            >
              {t.hero.tagline}
            </p>
          </FadeIn>
          <FadeIn delay={0.5} y={20}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}