"use client";
import { ArrowUpRight } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 md:px-6">
        <a
          href="/"
          className="text-sm font-light tracking-[0.2em] text-white uppercase transition-opacity duration-300 hover:opacity-70 md:text-base"
        >
          BOHDAN HEMBATIUK
        </a>

        <a
          href="#contact"
          className="group flex items-center gap-2 text-sm text-white transition-opacity duration-300 hover:opacity-70"
        >
          <span className="hidden md:inline">Зв'язатися</span>
          <ArrowUpRight
            size={18}
            strokeWidth={1.5}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </div>
    </header>
  );
}