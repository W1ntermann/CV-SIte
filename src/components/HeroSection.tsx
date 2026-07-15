"use client";

import { FadeIn } from "./FadeIn";
import { Magnet } from "./Magnet";
import { ContactButton } from "./Buttons";
import { useLanguage } from "@/i18n/LanguageContext";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section
      className="min-h-[auto] md:min-h-dvh flex flex-col relative pt-24 sm:pt-28 md:pt-32 lg:pt-36"
      style={{ overflowX: "clip" }}
    >
      <div className="flex-1 flex flex-col justify-between px-4 sm:px-6 md:px-10 relative gap-3 sm:gap-5 md:gap-0">
        {/* Portrait image */}
        <div className="relative left-0 right-0 z-10 flex justify-center pointer-events-none mb-3 sm:mb-6 md:mb-10">
          {/* Magnet only on md+ to avoid mobile touch glitches */}
          <Magnet
            padding={80}
            strength={4}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="hidden md:block w-[48vw] max-w-[300px] md:w-[38vw] md:max-w-[420px] lg:w-[32vw] lg:max-w-[480px] pointer-events-auto"
          >
            <FadeIn delay={0.6} y={30} animateOnMount>
              <img
                src="/hero.png"
                alt="Bohdan Hembatiuk portrait"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="w-full h-auto"
              />
            </FadeIn>
          </Magnet>
          <div className="md:hidden w-[42vw] max-w-[200px] sm:w-[40vw] sm:max-w-[280px]">
            <FadeIn delay={0.4} y={20} animateOnMount>
              <img
                src="/hero.png"
                alt="Bohdan Hembatiuk portrait"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="w-full h-auto"
              />
            </FadeIn>
          </div>
        </div>

        {/* Heading */}
        <div className="overflow-hidden relative z-20 pt-2 sm:pt-4 md:pt-0">
          <FadeIn delay={0.15} y={40} animateOnMount>
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none w-full text-[clamp(2rem,9vw,5.5rem)] sm:text-[clamp(2.75rem,10vw,7rem)] md:text-[clamp(3.5rem,11vw,8rem)] text-balance mt-0">
              {t.hero.greeting}
            </h1>
          </FadeIn>
        </div>

        {/* Tagline + CTA */}
        <div className="flex justify-between items-end pb-4 sm:pb-6 md:pb-10 relative z-20 gap-3 sm:gap-4">
          <FadeIn delay={0.35} y={20} animateOnMount>
            <p
              className="font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[240px] md:max-w-[300px] lg:max-w-[400px]"
              style={{ color: "#D7E2EA", fontSize: "clamp(0.7rem, 1.4vw, 1.5rem)" }}
            >
              {t.hero.tagline}
            </p>
          </FadeIn>
          <FadeIn delay={0.5} y={20} animateOnMount>
            <ContactButton />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}