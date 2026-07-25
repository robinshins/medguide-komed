// 溫齋 Onjae 홈 — 한지와 먹, 활판의 판면. 겹괘선 마스트헤드, 세로쓰기 기둥 히어로,
// 책 차례식 진료 분야 색인, 4단 조판 증상 색인, 한자 번호 분석 방법, 번호 색인 최신 글.
// 다른 사이트와 구조 자체가 다르다: 그라데이션·그림자·둥근 모서리·아이콘 타일·카드가
// 하나도 없고, 모든 구획은 1px 괘선으로만 나눈다.
import Link from 'next/link';
import { getBaseUrl } from '@/lib/site-url';
import { SITE } from '@/lib/site.config';
import { getLatestArticles } from '@/lib/articles';
import { SealStamp, DoubleRule } from '@/app/components/decor/SealStamp';

export const revalidate = 21600;

const baseUrl = getBaseUrl();

const HANJA_NUM = ['一', '二', '三', '四'];

const PROCESS = [
  { title: '수집', body: '네이버 플레이스 방문자 리뷰와 카카오맵·구글맵 평점을 지역 단위로 수집한다.' },
  { title: '교차 검증', body: '같은 한의원을 세 플랫폼에서 찾아 평점과 리뷰 수를 나란히 놓고 대조한다.' },
  { title: '등록 정보 확인', body: '건강보험심사평가원에 등록된 한의사 수와 진료과목을 확인한다.' },
  { title: '기록', body: '수집한 데이터만으로 쓴다. 데이터에 없는 경력과 수상 이력은 쓰지 않는다.' },
];

// 증상 색인 — 신문 4단 조판. 증상에서 출발해 해당 진료 분야로 이동한다.
const SYMPTOMS: { label: string; slug: string; name: string }[] = [
  { label: '목·어깨가 늘 뭉쳐 있다', slug: 'chuna', name: '추나요법' },
  { label: '자세가 틀어진 것 같다', slug: 'chuna', name: '추나요법' },
  { label: '오래 앉으면 허리가 아프다', slug: 'back-pain', name: '허리통증' },
  { label: '허리를 굽히기가 어렵다', slug: 'back-pain', name: '허리통증' },
  { label: '사고 뒤 몸살처럼 아프다', slug: 'car-accident', name: '교통사고' },
  { label: '사고 후 목이 뻣뻣하다', slug: 'car-accident', name: '교통사고' },
  { label: '재채기·콧물이 멎지 않는다', slug: 'rhinitis', name: '비염' },
  { label: '환절기마다 코가 막힌다', slug: 'rhinitis', name: '비염' },
  { label: '머리카락이 눈에 띄게 빠진다', slug: 'hair-loss', name: '탈모' },
  { label: '두피가 예민해졌다', slug: 'hair-loss', name: '탈모' },
  { label: '월경통이 심하다', slug: 'womens', name: '한방부인과' },
  { label: '갱년기 증상이 힘들다', slug: 'womens', name: '한방부인과' },
  { label: '임신을 준비하고 있다', slug: 'infertility', name: '난임' },
  { label: '출산 후 관절이 시리다', slug: 'postpartum', name: '산후조리' },
  { label: '산후 붓기가 오래 간다', slug: 'postpartum', name: '산후조리' },
  { label: '아이가 또래보다 작다', slug: 'pediatric', name: '소아한의원' },
  { label: '아이가 밥을 잘 안 먹는다', slug: 'pediatric', name: '소아한의원' },
  { label: '체중 관리가 필요하다', slug: 'diet', name: '한방다이어트' },
  { label: '손발이 차고 저리다', slug: 'acupuncture', name: '침치료' },
  { label: '무릎이 시큰거린다', slug: 'acupuncture', name: '침치료' },
  { label: '소화가 늘 더부룩하다', slug: 'general', name: '한의원 전체' },
  { label: '늘 피로하고 기운이 없다', slug: 'general', name: '한의원 전체' },
];

export default async function HomePage() {
  let latest: Awaited<ReturnType<typeof getLatestArticles>> = [];
  try { latest = await getLatestArticles(6); } catch { /* not seeded yet */ }

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE.siteName,
      url: baseUrl,
      description: SITE.siteDescription,
      inLanguage: 'ko',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: SITE.siteName,
      url: baseUrl,
      logo: { '@type': 'ImageObject', url: `${baseUrl}/logo-512.png` },
    },
  ];

  return (
    <div>
      {jsonLd.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      {/* ── 마스트헤드: 겹괘선 사이의 중앙 워드마크 판면 ── */}
      <section className="max-w-5xl mx-auto px-4 pt-12">
        <DoubleRule />
        <div className="py-10 text-center">
          <p className="text-[0.6875rem] tracking-[0.35em] text-ink-soft">
            溫齋 · {SITE.trustBadge}
          </p>
          <p className="mt-5 font-display text-5xl md:text-6xl font-bold text-ink tracking-[0.04em]">
            온재 한방안내
            <SealStamp className="inline-block w-5 h-5 md:w-6 md:h-6 ml-3 align-baseline" />
          </p>
          <p className="mt-5 font-display text-ink-muted tracking-[0.08em]">
            {SITE.siteTagline}
          </p>
        </div>
        <DoubleRule flip />
      </section>

      {/* ── 히어로: 본문 + 세로쓰기 기둥 ── */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="flex items-stretch gap-10 py-16 border-b border-line">
          <div className="flex-1 min-w-0">
            <h1 className="font-display text-3xl md:text-[2.5rem] md:leading-[1.35] font-bold text-ink">
              동네 한의원,
              <br />
              광고가 아니라 <span className="text-accent-600">기록</span>으로 고릅니다
            </h1>
            <p className="mt-7 max-w-xl text-ink-muted leading-loose">
              {SITE.siteDescription}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <Link
                href="/s/general"
                className="rounded-sm border border-ink px-6 py-3 text-sm font-semibold text-ink hover:bg-ink hover:text-ink-onDark transition-colors"
              >
                지역별 한의원 기록 보기
              </Link>
              <Link
                href="/pricing"
                className="text-sm font-semibold text-accent-600 underline decoration-dotted underline-offset-4 hover:text-accent-700"
              >
                진료비·보험 안내
              </Link>
            </div>
          </div>

          <div aria-hidden="true" className="hidden sm:flex flex-none items-start gap-5 border-l border-line pl-8">
            <div className="flex flex-col items-center gap-5">
              <span
                className="font-display text-4xl text-accent-600 tracking-[0.5em]"
                style={{ writingMode: 'vertical-rl' }}
              >
                韓醫
              </span>
              <SealStamp className="w-5 h-5" />
            </div>
            <span
              className="font-display text-lg text-accent-400 tracking-[0.6em] pt-1"
              style={{ writingMode: 'vertical-rl' }}
            >
              온재
            </span>
          </div>
        </div>
      </section>

      {/* ── 진료 분야: 책 차례식 색인 (2단, 번호·이름·설명·화살표) ── */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <header className="flex items-baseline justify-between border-b border-ink pb-3">
          <h2 className="font-display text-2xl font-bold text-ink">진료 분야</h2>
          <span className="text-[0.6875rem] tracking-[0.3em] text-ink-soft">차례 · CONTENTS</span>
        </header>
        <div className="grid md:grid-cols-2 md:gap-x-14">
          {SITE.specialties.map((s, i) => (
            <Link
              key={s.slug || 'general'}
              href={`/s/${s.slug || 'general'}`}
              className="group flex items-baseline gap-4 border-b border-line py-4"
            >
              <span className="flex-none w-7 font-display text-sm text-accent-600">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="flex-none font-display font-bold text-ink group-hover:text-accent-700 transition-colors">
                {s.label || s.name}
              </span>
              {s.blurb ? (
                <span className="min-w-0 flex-1 truncate text-sm text-ink-soft">
                  <span className="mx-1 text-line-strong">·</span>
                  {s.blurb}
                </span>
              ) : (
                <span className="flex-1" />
              )}
              <span className="flex-none text-ink-soft group-hover:text-accent-600 transition-colors">→</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── 증상으로 찾기: 신문 4단 조판 (단 사이 1px 괘선) ── */}
      <section className="border-y border-line bg-surface-sunk">
        <div className="max-w-5xl mx-auto px-4 py-14">
          <header className="flex items-baseline justify-between border-b border-ink pb-3 mb-8">
            <h2 className="font-display text-2xl font-bold text-ink">증상으로 찾기</h2>
            <span className="text-[0.6875rem] tracking-[0.3em] text-ink-soft">증상 색인</span>
          </header>
          <div className="columns-1 sm:columns-2 lg:columns-4 gap-x-10 [column-rule:1px_solid_var(--line-base)]">
            {SYMPTOMS.map((s, i) => (
              <Link
                key={i}
                href={`/s/${s.slug}`}
                className="group block break-inside-avoid py-2 text-[0.9375rem] leading-relaxed text-ink-muted hover:text-accent-700 transition-colors"
              >
                {s.label}
                <span className="block text-xs text-ink-soft group-hover:text-accent-600 transition-colors">
                  → {s.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 분석 방법: 한자 번호(一二三四)의 평문 목록 ── */}
      <section className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="font-display text-2xl font-bold text-ink text-center">이렇게 기록합니다</h2>
        <ol className="mt-12 space-y-9">
          {PROCESS.map((step, i) => (
            <li key={i} className="flex gap-6">
              <span className="flex-none w-9 pt-0.5 text-center font-display text-2xl text-accent-600" aria-hidden="true">
                {HANJA_NUM[i]}
              </span>
              <div className="border-b border-line pb-9 flex-1">
                <h3 className="font-display font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* ── 최신 글: 번호 색인 목록 (01–06, 우측 정렬 날짜) ── */}
      {latest.length > 0 ? (
        <section className="max-w-5xl mx-auto px-4 pb-16">
          <header className="flex items-baseline justify-between border-b border-ink pb-3">
            <h2 className="font-display text-2xl font-bold text-ink">최신 기록</h2>
            <Link href="/s/general" className="text-sm font-semibold text-accent-600 hover:text-accent-700">
              전체 보기 →
            </Link>
          </header>
          <ol>
            {latest.map((a, i) => (
              <li key={a.slug}>
                <Link href={`/${a.slug}`} className="group flex items-baseline gap-5 border-b border-line py-5">
                  <span className="flex-none w-7 font-display text-sm text-accent-600">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="font-display font-bold text-ink leading-snug line-clamp-2 group-hover:text-accent-700 transition-colors">
                      {a.title}
                    </span>
                    <span className="mt-1 block text-xs text-ink-soft">
                      {a.region} · {a.specialty}
                    </span>
                  </span>
                  <time dateTime={a.publishedAt} className="flex-none text-xs text-ink-soft tabular-nums">
                    {new Date(a.publishedAt).toLocaleDateString('ko')}
                  </time>
                </Link>
              </li>
            ))}
          </ol>
        </section>
      ) : null}

      {/* ── 각주 ── */}
      <section className="max-w-3xl mx-auto px-4 pb-8 text-center">
        <p className="text-xs leading-loose text-ink-soft">
          ※ 온재의 모든 글은 공개 데이터를 수집해 정리한 기록이며, 의학적 진단이나 치료 판단을
          대신하지 않습니다. 진료는 반드시 한의사와 상담해 결정하시기 바랍니다.
        </p>
      </section>
    </div>
  );
}
