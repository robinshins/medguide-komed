import type { SiteConfig } from './site.types';

// 한의원 — "溫齋 Onjae". Hanji and ink: serif body, hairline rules, no gradient,
// no shadow, no rounded corners. The one site that pays for a Korean webfont.
export const SITE: SiteConfig = {
  key: 'komed',

  categoryKo: '한의원',
  siteName: '온재 한방안내',
  siteTagline: '지역 한의원을 기록으로 고르다',
  siteDescription:
    '전국 한의원을 네이버·카카오·구글 리뷰와 건강보험심사평가원 등록 정보로 교차 분석했습니다. 추나요법, 교통사고 한방치료, 한방부인과, 비염, 탈모까지 지역별로 정리했습니다.',
  trustBadge: '리뷰 3개 플랫폼 교차검증',
  // 5개 사이트가 같은 키를 쓴다. IndexNow는 키 공유를 허용하며, 각 도메인 루트에
  // <키>.txt만 있으면 된다(public 오버레이로 배치). 다만 제출은 도메인별로 따로
  // 해야 한다 — 요청의 host는 하나이고 urlList가 전부 그 host여야 하기 때문이다.
  indexNowKey: '9153a4ab80a3c5357ff7aeffea4749af',

  specialties: [
    { name: '', slug: '', label: '한의원 전체', blurb: '지역 한의원을 리뷰·진료과목 기준으로 한눈에' },
    { name: '추나요법', slug: 'chuna', blurb: '건강보험이 적용되는 한방 수기 교정 치료' },
    { name: '교통사고', slug: 'car-accident', blurb: '자동차보험으로 받는 침·약침·추나' },
    { name: '한방다이어트', slug: 'diet', blurb: '한약과 침을 병행하는 체중 관리' },
    { name: '한방부인과', slug: 'womens', blurb: '월경통·갱년기·자궁 질환의 한방 접근' },
    { name: '난임', slug: 'infertility', blurb: '착상 환경을 돕는 한방 치료와 지자체 지원' },
    { name: '비염', slug: 'rhinitis', blurb: '알레르기성 비염의 체질 개선 치료' },
    { name: '탈모', slug: 'hair-loss', blurb: '두피 약침과 한약을 병행하는 탈모 관리' },
    { name: '허리통증', slug: 'back-pain', blurb: '침·부항·추나로 접근하는 요통' },
    { name: '산후조리', slug: 'postpartum', blurb: '산후풍 예방과 회복을 위한 한방 관리' },
    { name: '소아한의원', slug: 'pediatric', blurb: '성장·식욕부진·잦은 감기의 소아 한방' },
    { name: '침치료', slug: 'acupuncture', blurb: '통증과 기능 회복을 위한 기본 침 치료' },
  ],

  categoryHints: ['한의원', '한방병원', '한방'],
  clinicNameSuffixes: ['한의원', '한방병원', '한방의원'],

  // 한의사는 건강보험심사평가원 스키마상 '전문의'로 집계되지 않는다.
  // 전문의 수를 물으면 대부분 빈 값이 나오므로 프롬프트 문구를 바꾼다.
  credentialLabel: '한의사 수 및 진료과목',

  priceContext: {
    chuna:
      '추나요법: 2019년부터 건강보험 급여 대상입니다. 단순추나 본인부담 약 5~7천원, 복잡추나 1~2만원, 특수(탈구)추나 2~3만원 수준이며 연간 20회까지 적용됩니다. 한도를 넘기면 비급여로 회당 3~7만원.',
    'car-accident':
      '교통사고 한방치료: 자동차보험 적용 시 본인부담금이 없습니다. 침·약침·부항·추나·한약(첩약)까지 대상이며, 정형외과 치료와 병행할 수 있습니다. 사고 접수번호만 있으면 됩니다.',
    infertility:
      '한방 난임치료: 지자체별 한방 난임 지원사업이 있어 한약·침 치료비의 상당액을 지원받을 수 있습니다(대상·금액은 지자체마다 다름). 자비 부담 시 3개월 과정 기준 150~300만원 선.',
    diet:
      '한방 다이어트: 전액 비급여입니다. 한약 1개월분 30~60만원, 침·약침 병행 시 월 40~80만원 수준. 식욕억제 성분이 포함된 처방은 부작용 상담이 필요합니다.',
    acupuncture:
      '침 치료: 건강보험 급여로 1회 본인부담 약 4~8천원(초진료 별도). 약침은 비급여로 회당 1~5만원입니다.',
  },
};
