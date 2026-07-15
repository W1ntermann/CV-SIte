"use client";

import { FadeIn } from "./FadeIn";
import { Magnet } from "./Magnet";
import { ContactButton } from "./Buttons";
import { useLanguage } from "@/i18n/LanguageContext";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="min-h-dvh flex flex-col relative pt-28 sm:pt-32 lg:pt-36" style={{ overflowX: "clip" }}>

      <div className="flex-1 flex flex-col justify-between px-6 md:px-10 relative">
        <div
          className="relative left-0 right-0 z-10 flex justify-center pointer-events-none mb-8 md:mb-12"
          style={{ top: "auto", bottom: "auto" }}
        >
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
          className="w-[60vw] max-w-[300px] sm:w-[42vw] sm:max-w-[380px] md:w-[40vw] lg:w-[34vw] lg:max-w-[480px] pointer-events-auto"
        >
          <FadeIn delay={0.6} y={30}>
            <img
              src="/hero-portrait.jpg"
              alt="Bohdan Hembatiuk portrait"
              className="w-full h-auto"
            />
          </FadeIn>
        </Magnet>
        </div>

        <div className="overflow-hidden relative z-20 pt-8 md:pt-0">
          <FadeIn delay={0.15} y={40}>
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none w-full text-[clamp(2.5rem,10vw,6rem)] sm:text-[clamp(3rem,11vw,7rem)] md:text-[clamp(3.5rem,12vw,8rem)] text-balance mt-0">
              {t.hero.greeting}
            </h1>
          </FadeIn>
        </div>

        <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 relative z-20">
          <FadeIn delay={0.35} y={20}>
            <p
              className="font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[300px] lg:max-w-[400px]"
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