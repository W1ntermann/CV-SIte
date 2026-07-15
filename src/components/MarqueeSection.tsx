"use client";

const IMAGES = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
  "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
  "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
  "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
  "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
  "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
  "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
  "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif",
];

const row1 = IMAGES.slice(0, 11);
const row2 = IMAGES.slice(11);

const CARD_W = "clamp(220px, 26vw, 480px)";
const CARD_H = "clamp(140px, 16vw, 300px)";

function MarqueeRow({ images, reverse }: { images: string[]; reverse?: boolean }) {
  // Duplicate the set so the CSS animation can loop seamlessly.
  const loop = [...images, ...images];
  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex gap-2 sm:gap-3 w-max"
        style={{
          animation: `marquee-scroll ${reverse ? "60s" : "50s"} linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {loop.map((src, i) => (
          <img
            key={`${reverse ? "r2" : "r1"}-${i}`}
            src={src}
            alt=""
            loading="lazy"
            className="rounded-xl sm:rounded-2xl object-cover flex-shrink-0"
            style={{ width: CARD_W, height: CARD_H }}
          />
        ))}
      </div>
    </div>
  );
}

export function MarqueeSection() {
  return (
    <section
      className="pt-20 sm:pt-28 md:pt-36 pb-8 sm:pb-10 flex flex-col gap-2 sm:gap-3 overflow-hidden"
      style={{ backgroundColor: "#0C0C0C" }}
    >
      <MarqueeRow images={row1} />
      <MarqueeRow images={row2} reverse />
      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .flex.gap-2[style*="marquee-scroll"],
          .flex.gap-3[style*="marquee-scroll"] { animation: none !important; }
        }
      `}</style>
    </section>
  );
}
