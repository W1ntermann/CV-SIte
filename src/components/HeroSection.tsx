"use client";

import { FadeIn } from "./FadeIn";
import { Magnet } from "./Magnet";
import { ContactButton } from "./Buttons";
import { useLanguage } from "@/i18n/LanguageContext";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="h-screen flex flex-col relative" style={{ overflowX: "clip" }}>

      <div className="flex-1 flex flex-col justify-end px-6 md:px-10 relative">
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
          className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]"
        >
          <FadeIn delay={0.6} y={30}>
            <img
              src="/hero-portrait.jpg"
              alt="Bohdan Hembatiuk portrait"
              className="w-full h-auto"
            />
          </FadeIn>
        </Magnet>

        <div className="overflow-hidden relative z-20">
          <FadeIn delay={0.15} y={40}>
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none w-full text-[clamp(2.5rem,10vw,6rem)] sm:text-[clamp(3rem,11vw,7rem)] md:text-[clamp(3.5rem,12vw,8rem)] text-balance mt-6 sm:mt-4 md:-mt-5">
              {t.hero.greeting}
            </h1>
          </FadeIn>
        </div>

        <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 relative z-20">
          <FadeIn delay={0.35} y={20}>
            <p
              className="font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
              style={{ color: "#D7E2EA", fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}
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