import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import { Providers } from "@/components/Providers";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-kanit",
});

export const metadata: Metadata = {
  title: "Bohdan Hembatiuk — FullStack .NET & React Developer",
  description:
    "Portfolio of Bohdan Hembatiuk — FullStack Developer specialising in C#, .NET, ASP.NET Core, React and Next.js. Building scalable APIs and modern web applications.",
  authors: [{ name: "Bohdan Hembatiuk" }],
  openGraph: {
    title: "Bohdan Hembatiuk — FullStack .NET & React Developer",
    description:
      "FullStack Developer building scalable web apps with C#, .NET, React and Next.js.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${kanit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}