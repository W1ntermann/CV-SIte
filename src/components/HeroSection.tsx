"use client";
import { MapPin } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-4 pt-20 md:px-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(255,255,255,0.12),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_center,black_20%,transparent_75%)]" />
      <div className="pointer-events-none absolute top-1/4 right-1/4 h-64 w-64 rounded-full bg-white/5 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-1/4 left-1/4 h-48 w-48 rounded-full bg-white/5 blur-[80px]" />

      <div className="relative max-w-4xl">
        <p className="mb-4 text-sm tracking-wide text-gray-400 md:text-base">
          — Привіт, я Богдан
        </p>

        <h1 className="text-3xl leading-tight font-light text-white md:text-5xl lg:text-6xl">
          Розробляю надійні веб-рішення на{" "}
          <span className="text-4xl font-semibold md:text-6xl lg:text-7xl">c#</span>,{" "}
          <span className="text-4xl font-semibold md:text-6xl lg:text-7xl">.net</span>,{" "}
          <span className="text-4xl font-semibold md:text-6xl lg:text-7xl">react</span> та{" "}
          <span className="text-4xl font-semibold md:text-6xl lg:text-7xl">next.js</span>
        </h1>

        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-gray-400 md:text-base">
          Чиста архітектура, прозора комунікація та код, який легко підтримувати.
          Від ідеї до робочого продукту — з фокусом на результат вашого бізнесу.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-white" />
            <span>Україна / Віддалено по всьому світу</span>
          </div>
          <span className="hidden text-gray-600 md:inline">/</span>
          <span>Відповідаю протягом 24 годин</span>
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-white px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-white hover:text-black"
          >
            Обговорити проєкт
          </a>
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full border border-white px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-white hover:text-black"
          >
            Переглянути роботи
          </a>
        </div>
      </div>
    </section>
  );
}