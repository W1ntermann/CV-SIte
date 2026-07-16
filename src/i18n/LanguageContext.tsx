"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "ua";

type Dict = {
  nav: { about: string; services: string; projects: string; contact: string };
  hero: {
    greeting: string;
    tagline: string;
    subtext: string;
    ctaPrimary: string;
    ctaSecondary: string;
    techStack: string[];
  };
  about: {
    eyebrow: string;
    title: string;
    body: string;
    stats: { value: string; label: string }[];
    roles: { name: string; desc: string }[];
  };
  services: {
    title: string;
    items: { name: string; desc: string }[];
  };
  projects: {
    title: string;
    live: string;
    viewMore: string;
    backToProjects: string;
    categories: { client: string; personal: string };
    detail: {
      overview: string;
      techStack: string;
      year: string;
      role: string;
      category: string;
      gallery: string;
      visitLive: string;
      notFound: string;
    };
  };
  contact: {
    eyebrow: string;
    availability: string;
    title: string;
    intro: string;
    cta: string;
    location: string;
    locationValue: string;
    responseTime: string;
    responseValue: string;
    labels: { email: string; instagram: string; telegram: string; github: string };
  };
  buttons: { contact: string };
};

const en: Dict = {
  nav: { about: "About", services: "Services", projects: "Projects", contact: "Contact" },
  hero: {
    greeting: "Hi, i'm bohdan",
    tagline: "a fullstack developer building scalable web apps with c#, .net, react & next.js",
    subtext:
      "Clean architecture, transparent communication, and maintainable code — from idea to working product, focused on your business results.",
    ctaPrimary: "Discuss a Project",
    ctaSecondary: "View Work",
    techStack: ["C#", ".NET", "React", "Next.js"],
  },
  about: {
    eyebrow: "Who I Am",
    title: "About me",
    body:
      "I'm Bohdan Hembatiuk — a passionate Full Stack Developer with expertise in React, TypeScript, C#, .NET, and REST APIs. I build scalable, high-performance digital solutions with clean architecture, robust ASP.NET Core backends, and modern React/Next.js frontends. Let's build something incredible together!",
    stats: [
      { value: "3+", label: "Years Experience" },
      { value: "15+", label: "Projects Delivered" },
      { value: "100%", label: "Client Satisfaction" },
      { value: "24/7", label: "Availability" },
    ],
    roles: [
      { name: "Frontend", desc: "React, Next.js, TypeScript, Tailwind CSS" },
      { name: "Backend", desc: "C#, .NET, ASP.NET Core, REST APIs" },
      { name: "Database", desc: "SQL Server, Entity Framework, PostgreSQL" },
      { name: "DevOps", desc: "Docker, CI/CD, Azure, Vercel" },
    ],
  },
  services: {
    title: "Services",
    items: [
      { name: "FullStack .NET Development", desc: "End-to-end solutions built with ASP.NET Core, Entity Framework, and modern React/Next.js frontends — clean architecture, tested, production-ready." },
      { name: "C# / .NET Backend", desc: "Robust backend systems with ASP.NET Core: authentication, business logic, background jobs, and integrations following clean architecture principles." },
      { name: "REST API Design", desc: "Well-structured, documented, and secure RESTful APIs in C# — versioning, validation, and performance built in from day one." },
      { name: "React & Next.js Frontends", desc: "Fast, accessible, and responsive UIs with React, Next.js, and TypeScript — pixel-precise implementations of your designs." },
      { name: "Database Design", desc: "SQL Server schemas modelled with Entity Framework — efficient migrations, indexes, and query patterns that scale with your product." },
    ],
  },
  projects: {
    title: "Project",
    live: "Live Project",
    viewMore: "View Details",
    backToProjects: "Back to Projects",
    categories: { client: "Client", personal: "Personal" },
    detail: {
      overview: "Overview",
      techStack: "Tech Stack",
      year: "Year",
      role: "Role",
      category: "Category",
      gallery: "Gallery",
      visitLive: "Visit Live Site",
      notFound: "Project not found",
    },
  },
  contact: {
    eyebrow: "Get in Touch",
    availability: "Available for work",
    title: "Let's talk",
    intro: "Got a project in mind or just want to say hi? Reach out on any of the channels below.",
    cta: "Send an Email",
    location: "Location",
    locationValue: "Ukraine, Worldwide",
    responseTime: "Response Time",
    responseValue: "Within 24 hours",
    labels: { email: "Email", instagram: "Instagram", telegram: "Telegram", github: "GitHub" },
  },
  buttons: { contact: "Contact Me" },
};

const ua: Dict = {
  nav: { about: "Про мене", services: "Послуги", projects: "Проєкти", contact: "Контакти" },
  hero: {
    greeting: "привіт, я богдан",
    tagline: "fullstack розробник, який будує масштабовані веб-додатки на c#, .net, react та next.js",
    subtext:
      "Чиста архітектура, прозора комунікація та код, який легко підтримувати — від ідеї до робочого продукту, з фокусом на результат вашого бізнесу.",
    ctaPrimary: "Обговорити проєкт",
    ctaSecondary: "Переглянути роботи",
    techStack: ["C#", ".NET", "React", "Next.js"],
  },
  about: {
    eyebrow: "Хто я",
    title: "Про мене",
    body:
      "Я Богдан Гембатюк — захоплений Full Stack розробник з експертизою у React, TypeScript, C#, .NET та REST API. Створюю масштабовані, високопродуктивні цифрові рішення з чистою архітектурою, надійними бекендами на ASP.NET Core та сучасними фронтендами на React/Next.js. Давайте створимо щось неймовірне разом!",
    stats: [
      { value: "3+", label: "Років досвіду" },
      { value: "15+", label: "Виконаних проєктів" },
      { value: "100%", label: "Задоволених клієнтів" },
      { value: "24/7", label: "Доступність" },
    ],
    roles: [
      { name: "Frontend", desc: "React, Next.js, TypeScript, Tailwind CSS" },
      { name: "Backend", desc: "C#, .NET, ASP.NET Core, REST API" },
      { name: "Database", desc: "SQL Server, Entity Framework, PostgreSQL" },
      { name: "DevOps", desc: "Docker, CI/CD, Azure, Vercel" },
    ],
  },
  services: {
    title: "Послуги",
    items: [
      { name: "FullStack .NET розробка", desc: "Комплексні рішення на ASP.NET Core, Entity Framework та сучасних фронтендах React/Next.js — чиста архітектура, покрито тестами, готово до продакшену." },
      { name: "Бекенд на C# / .NET", desc: "Надійні бекенд-системи на ASP.NET Core: автентифікація, бізнес-логіка, фонові задачі та інтеграції за принципами чистої архітектури." },
      { name: "Проєктування REST API", desc: "Добре структуровані, задокументовані та безпечні RESTful API на C# — версіонування, валідація та продуктивність з першого дня." },
      { name: "Фронтенди React та Next.js", desc: "Швидкі, доступні та адаптивні інтерфейси на React, Next.js та TypeScript — піксельно точна реалізація ваших дизайнів." },
      { name: "Проєктування баз даних", desc: "Схеми SQL Server, змодельовані через Entity Framework — ефективні міграції, індекси та патерни запитів, що масштабуються разом із продуктом." },
    ],
  },
  projects: {
    title: "Проєкти",
    live: "Переглянути",
    viewMore: "Детальніше",
    backToProjects: "Назад до проєктів",
    categories: { client: "Клієнт", personal: "Особистий" },
    detail: {
      overview: "Опис",
      techStack: "Технології",
      year: "Рік",
      role: "Роль",
      category: "Категорія",
      gallery: "Галерея",
      visitLive: "Відкрити сайт",
      notFound: "Проєкт не знайдено",
    },
  },
  contact: {
    eyebrow: "Зв'язок",
    availability: "Доступний для роботи",
    title: "Зв'язатись",
    intro: "Маєте ідею для проєкту чи просто хочете привітатися? Пишіть будь-де нижче.",
    cta: "Написати на пошту",
    location: "Локація",
    locationValue: "Україна, Worldwide",
    responseTime: "Час відповіді",
    responseValue: "Протягом 24 годин",
    labels: { email: "Пошта", instagram: "Instagram", telegram: "Telegram", github: "GitHub" },
  },
  buttons: { contact: "Написати" },
};

const DICTS: Record<Lang, Dict> = { en, ua };

const LanguageContext = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: Dict } | null>(
  null,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("lang") as Lang | null;
      if (saved === "en" || saved === "ua") setLangState(saved);
    } catch {
      /* ignore */
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem("lang", l);
      document.documentElement.lang = l === "ua" ? "uk" : "en";
    } catch {
      /* ignore */
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: DICTS[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}