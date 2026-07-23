// 한의원 — "溫齋 Onjae". 한지와 먹: hanji paper surfaces, ink text, a pine/celadon
// brand scale and a 낙관(seal) vermilion accent. Letterpress discipline — radius is
// 2px everywhere, and both shadow tokens are 1px hairline rings (no real shadows).
//
// Literal hexes, NOT `rgb(var(--x) / <alpha-value>)`. Each site has exactly one fixed
// theme, so runtime indirection buys nothing — and sharp/satori cannot resolve CSS
// variables, which would break SVG and OG generation.

export const brand = {
  50: '#F3F7F2', 100: '#E2ECDF', 200: '#C3D8BE', 300: '#9BBE94', 400: '#719D69',
  500: '#517F49', 600: '#3D6537', 700: '#32502D', 800: '#2A4126', 900: '#233620', 950: '#111C10',
} as const;

export const accent = {
  50: '#FBF1EE', 100: '#F6E0DA', 200: '#ECC2B7', 300: '#E19685', 400: '#D6644A',
  500: '#C0472B', 600: '#A63A21', 700: '#872D19', 800: '#6E2515', 900: '#571D11',
} as const;

export const surface = {
  page: '#FAF7F0', card: '#FFFDF8', sunk: '#F2EDE1', inverse: '#1C1A16',
} as const;

export const line = {
  DEFAULT: '#E5DDCC', strong: '#D3C7AE', inverse: 'rgba(241,235,221,0.16)',
} as const;

export const ink = {
  DEFAULT: '#1C1A16', muted: '#4A453C', soft: '#857C6C', onDark: '#F1EBDD',
} as const;

// Platform chips are semantic, never re-themed per site.
export const platform = {
  naverBg: '#E9F7EE', naverFg: '#127A3C',
  kakaoBg: '#FEF6DC', kakaoFg: '#8A6A00',
  googleBg: '#EAF1FE', googleFg: '#1A56C4',
} as const;

// 2px everywhere — the one non-negotiable of the Onjae look.
export const radius = { sm: '2px', md: '2px', lg: '2px', xl: '2px' } as const;

// No shadows on hanji. Shared components rely on shadow-card/shadow-lift, so both
// resolve to a 1px hairline ring instead (lift uses the stronger rule for hover).
export const shadow = {
  card: '0 0 0 1px #E5DDCC',
  lift: '0 0 0 1px #D3C7AE',
} as const;

export const typeTokens = {
  sans: ['var(--font-sans)', '-apple-system', 'BlinkMacSystemFont', 'Apple SD Gothic Neo',
         'Pretendard', 'Malgun Gothic', 'sans-serif'],
  display: ['var(--font-display)', 'Nanum Myeongjo', 'AppleMyungjo', 'Batang', 'serif'],
  mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
  articleMeasure: '60ch',
  articleLeading: '2.05',
  articleSize: '1.0625rem',
} as const;

export function toCssVars(): Record<string, string> {
  const out: Record<string, string> = {};
  const put = (prefix: string, obj: Record<string, string>) => {
    for (const [k, v] of Object.entries(obj)) {
      out[`--${prefix}-${k === 'DEFAULT' ? 'base' : k}`] = v;
    }
  };
  put('brand', brand as unknown as Record<string, string>);
  put('accent', accent as unknown as Record<string, string>);
  put('surface', surface as unknown as Record<string, string>);
  put('line', line as unknown as Record<string, string>);
  put('ink', ink as unknown as Record<string, string>);
  put('platform', platform as unknown as Record<string, string>);
  put('radius', radius as unknown as Record<string, string>);
  out['--article-measure'] = typeTokens.articleMeasure;
  out['--article-leading'] = typeTokens.articleLeading;
  out['--article-size'] = typeTokens.articleSize;
  return out;
}
