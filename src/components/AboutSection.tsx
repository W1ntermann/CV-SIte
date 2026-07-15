"use client";

import { FadeIn } from "./FadeIn";
import { AnimatedText } from "./AnimatedText";
import { ContactButton } from "./Buttons";
import { useLanguage } from "@/i18n/LanguageContext";

export function AboutSection() {
  const { t, lang } = useLanguage();
  return (
    <section
      id="about"
      className="min-h-screen relative px-4 sm:px-6 md:px-8 lg:px-10 py-16 sm:py-20 md:py-24 flex flex-col items-center justify-center gap-12 sm:gap-16 md:gap-20 overflow-hidden scroll-mt-24"
    >
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="hidden sm:block absolute top-[4%] left-[1%] sm:left-[2%] lg:left-[4%] w-[100px] sm:w-[130px] md:w-[170px] lg:w-[220px] xl:w-[260px] opacity-90 pointer-events-none">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png" alt="" className="w-full h-auto" />
      </FadeIn>
      <FadeIn delay={0.25} x={-80} y={0} duration={0.9} className="hidden sm:block absolute bottom-[8%] left-[3%] sm:left-[6%] lg:left-[10%] w-[80px] sm:w-[110px] md:w-[150px] lg:w-[190px] xl:w-[230px] opacity-90 pointer-events-none">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png" alt="" className="w-full h-auto" />
      </FadeIn>
      <FadeIn delay={0.15} x={80} y={0} duration={0.9} className="hidden sm:block absolute top-[4%] right-[1%] sm:right-[2%] lg:right-[4%] w-[100px] sm:w-[130px] md:w-[170px] lg:w-[220px] xl:w-[260px] opacity-90 pointer-events-none">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png" alt="" className="w-full h-auto" />
      </FadeIn>
      <FadeIn delay={0.3} x={80} y={0} duration={0.9} className="hidden sm:block absolute bottom-[8%] right-[3%] sm:right-[6%] lg:right-[10%] w-[100px] sm:w-[140px] md:w-[180px] lg:w-[220px] xl:w-[260px] opacity-90 pointer-events-none">
        <img src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png" alt="" className="w-full h-auto" />
      </FadeIn>

      <div className="flex flex-col items-center gap-8 sm:gap-12 md:gap-16 relative z-10">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            {t.about.title}
          </h2>
        </FadeIn>
        <AnimatedText
          key={lang}
          text={t.about.body}
          className="font-medium text-center leading-relaxed max-w-[90%] sm:max-w-[540px] md:max-w-[600px] lg:max-w-[640px]"
          style={{ color: "#D7E2EA", fontSize: "clamp(0.95rem, 1.9vw, 1.35rem)" }}
        />
      </div>
      <div className="relative z-10">
        <ContactButton />
      </div>
    </section>
  );
}