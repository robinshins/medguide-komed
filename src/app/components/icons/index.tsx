// Onjae icon grammar: 1px hairline strokes, square (butt) caps, no fills, no dots,
// no rounded-cap softness — glyphs drawn like fine brush-ruled diagrams.
import type { SVGProps } from 'react';

type Icon = (p: SVGProps<SVGSVGElement>) => React.ReactElement;

const base = { fill: 'none', stroke: 'currentColor', strokeWidth: 1 } as const;

/* 침 — a needle at 45 degrees, three coil ticks for the handle, a skin line. */
const Acupuncture: Icon = p => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <path d="M4.5 19.5 17.5 6.5" {...base} />
    <path d="M14.5 6.5l2.5 2.5M16 5l2.5 2.5M17.5 3.5 20 6" {...base} />
    <path d="M3.5 21.5h7" {...base} />
  </svg>
);

/* 추나 — an S-curved spine with vertebra ticks and a pressing hand arc. */
const Chuna: Icon = p => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <path d="M14.5 3c-2.6 1.9-3.3 4-1.9 6.2 1.3 2.1 1.1 4.2-.6 6.2-1.3 1.6-1.7 3.5-1 5.6" {...base} />
    <path d="M12.5 6.5h3M12.8 12h3M10.8 17.5h3" {...base} />
    <path d="M4 9.5c1.9-1.4 4-1.6 6-.6" {...base} />
  </svg>
);

/* 교통사고 — a car in side profile, hairline wheels. */
const CarAccident: Icon = p => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <path d="M2.5 16v-3.2l2.6-4.3h8.4l3.6 4.3h4.4V16h-2" {...base} />
    <path d="M9.2 16.5h5.4" {...base} />
    <circle cx="7" cy="16.5" r="2" {...base} />
    <circle cx="16.8" cy="16.5" r="2" {...base} />
    <path d="M6.2 12.5h7.2M10 8.5v4" {...base} />
  </svg>
);

/* 한방다이어트 — a cinched herb pouch (약낭). */
const Diet: Icon = p => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <path d="M12 7.5c-3.9 0-6.5 2.8-6.5 6.3S8.6 20 12 20s6.5-2.7 6.5-6.2-2.6-6.3-6.5-6.3Z" {...base} />
    <path d="M9.6 7.8C10 5.6 11 4 12 4s2 1.6 2.4 3.8" {...base} />
    <path d="M9 7.5h6" {...base} />
    <path d="M12 11v5M9.8 13.5h4.4" {...base} />
  </svg>
);

/* 한방부인과 — a five-petal blossom, stroke only. */
const Womens: Icon = p => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
    {Array.from({ length: 5 }, (_, i) => (
      <g key={i} transform={`rotate(${i * 72} 12 12)`}>
        <path d="M12 10.4C10.7 8.9 10.6 6.4 12 4.6c1.4 1.8 1.3 4.3 0 5.8Z" {...base} />
      </g>
    ))}
    <circle cx="12" cy="12" r="1.4" {...base} />
  </svg>
);

/* 난임 — a seedling with two cotyledon leaves above a ground line. */
const Infertility: Icon = p => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <path d="M12 20v-7" {...base} />
    <path d="M12 13c0-3.2-2.1-5.3-5.3-5.3 0 3.2 2.1 5.3 5.3 5.3Z" {...base} />
    <path d="M12 13c0-3.2 2.1-5.3 5.3-5.3 0 3.2-2.1 5.3-5.3 5.3Z" {...base} />
    <path d="M6.5 20h11" {...base} />
  </svg>
);

/* 비염 — a face in profile, nose forward, with a breath line. */
const Rhinitis: Icon = p => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <path d="M14.8 3.5c-3.6.4-5.6 2.5-5.6 5.5 0 1.6-.7 2.7-1.7 3.9-.3.4-.2.8.3.9l1.6.4-.3 1.9c-.1.5.2.9.7.9h1.5l.4 3.6" {...base} />
    <path d="M17 12.5c1.2.4 2.5.4 3.7 0" {...base} />
  </svg>
);

/* 탈모 — a scalp dome with rising strands and one falling aside. */
const HairLoss: Icon = p => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <path d="M5 17a7 7 0 0 1 14 0" {...base} />
    <path d="M9 10.5c-.6-1.6-.4-3.2.5-4.7M12 10c0-1.7.3-3.2 1-4.6M15 10.5c.5-1.5.4-3-.3-4.4" {...base} />
    <path d="M19.5 8.5c.8 1 .9 2.2.4 3.5" {...base} />
    <path d="M3.5 20.5h17" {...base} />
  </svg>
);

/* 허리통증 — the lumbar curve with two radiating strain marks. */
const BackPain: Icon = p => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <path d="M13.5 3c-2.6 2-3.6 4.4-3 7 .5 2.2 1.8 4.2 1.5 6.5-.2 1.7-1.1 3.2-2.7 4.5" {...base} />
    <path d="M15.5 11.5 18 10M16 14.3l2.8-.4" {...base} />
    <path d="M8.5 6.5h3M8 12h2.4" {...base} />
  </svg>
);

/* 산후조리 — a cradle: rim, basket, rocker arc. */
const Postpartum: Icon = p => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <path d="M4.5 10h15" {...base} />
    <path d="M6 10c0 4.2 2.4 6.8 6 6.8s6-2.6 6-6.8" {...base} />
    <path d="M6.8 19.5c3.2 1.6 7.2 1.6 10.4 0" {...base} />
    <path d="M13 10c0-2.9 1.8-4.7 4.6-4.7.2 1.9-1.2 4.3-4.6 4.7Z" {...base} />
  </svg>
);

/* 소아 — a small standing figure, arms open. */
const Pediatric: Icon = p => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <circle cx="12" cy="6.8" r="2.8" {...base} />
    <path d="M12 9.6v5.4" {...base} />
    <path d="M12 10.8c-1.9.3-3.5 1.3-4.7 3M12 10.8c1.9.3 3.5 1.3 4.7 3" {...base} />
    <path d="M12 15 9 20M12 15l3 5" {...base} />
  </svg>
);

/* 한의원 전체 — two abstract rotating curves (motion, balance; not a flag motif). */
const General: Icon = p => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <path d="M18.2 8.2c-1.1-2.5-3.4-4-6.2-3.9C8.4 4.4 5.8 7.1 5.8 10.6" {...base} />
    <path d="M5.8 15.8c1.1 2.5 3.4 4 6.2 3.9 3.6-.1 6.2-2.8 6.2-6.3" {...base} />
    <path d="M15.4 8.6a2.4 2.4 0 1 1-2 3.9" {...base} />
    <path d="M8.6 15.4a2.4 2.4 0 1 1 2-3.9" {...base} />
  </svg>
);

const REGISTRY: Record<string, Icon> = {
  general: General,
  chuna: Chuna,
  'car-accident': CarAccident,
  diet: Diet,
  womens: Womens,
  infertility: Infertility,
  rhinitis: Rhinitis,
  'hair-loss': HairLoss,
  'back-pain': BackPain,
  postpartum: Postpartum,
  pediatric: Pediatric,
  acupuncture: Acupuncture,
};

export function SpecialtyIcon({ slug, className }: { slug: string; className?: string }) {
  const C = REGISTRY[slug] ?? General;
  return <C className={className} focusable="false" />;
}
