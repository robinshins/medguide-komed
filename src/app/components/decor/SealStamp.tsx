// 낙관(落款) — the signature stamp closing a piece of calligraphy. Same geometry as
// the LogoMark, exported as decor so pages can set it after vertical text or titles.
import type { SVGProps } from 'react';

export function SealStamp(props: SVGProps<SVGSVGElement>) {
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

/* 겹괘선 — the double rule that frames the masthead: one ink line, one hairline. */
export function DoubleRule({ flip = false, className }: { flip?: boolean; className?: string }) {
  return flip ? (
    <div className={className} aria-hidden="true">
      <div className="border-t border-line" />
      <div className="border-t border-ink mt-[3px]" />
    </div>
  ) : (
    <div className={className} aria-hidden="true">
      <div className="border-t border-ink" />
      <div className="border-t border-line mt-[3px]" />
    </div>
  );
}
