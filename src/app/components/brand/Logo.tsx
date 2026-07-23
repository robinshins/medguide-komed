// 溫齋 — 낙관(落款) seal mark. A vermilion square with an inner hairline border and
// 井-like grid strokes in ivory. Pure paths, no font glyphs in the mark.
import type { SVGProps } from 'react';

export function LogoMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <rect width="32" height="32" rx="2" fill="#C0472B" />
      <rect x="2.5" y="2.5" width="27" height="27" rx="1" stroke="#F1EBDD" strokeWidth="1" />
      <path
        d="M12.4 6.8v18.4M19.6 6.8v18.4M6.8 12.4h18.4M6.8 19.6h18.4"
        stroke="#F1EBDD"
        strokeWidth="2"
      />
    </svg>
  );
}

export function Wordmark(props: SVGProps<SVGSVGElement>) {
  // Browser-rendered (never rasterized), so <text> with the site serif is safe here.
  return (
    <svg viewBox="0 0 94 20" aria-hidden="true" {...props}>
      <text
        x="0" y="15.5"
        fontFamily="'Nanum Myeongjo',AppleMyungjo,Batang,serif"
        fontSize="16" fontWeight="800" letterSpacing="0.06em"
        fill="currentColor"
      >온재</text>
      <text
        x="41" y="15"
        fontFamily="'Nanum Myeongjo',AppleMyungjo,Batang,serif"
        fontSize="10.5" fontWeight="500" letterSpacing="0.14em"
        fill="currentColor" opacity="0.72"
      >한방안내</text>
    </svg>
  );
}
