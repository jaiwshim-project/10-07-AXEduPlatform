/**
 * AX교육플랫폼 — AI 튜터 JavaScript
 * Gemini API 연동 + RAG 지식베이스 + 채팅 UI 관리
 */

// ============================================================
// 상수: 토픽 레이블
// ============================================================
const TOPICS = {
  'ax-basics':          'AX 기초 개념',
  'ai-tools':           'AI 도구 활용',
  'vibe-coding':        '바이브 코딩',
  'platform-design':    'AI 플랫폼 설계',
  'ax-consulting':      'AX 컨설팅',
  'prompt-engineering': '프롬프트 엔지니어링',
  'ai-ethics':          'AI 윤리 & 거버넌스',
  'rag-systems':        'RAG & 지식 시스템',
};

// ============================================================
// RAG 지식베이스 — 토픽별 상세 한국어 응답
// ============================================================
const RAG_KB = {

  // ── AX 기초 개념 ─────────────────────────────────────────
  'ax-basics': {
    '정의': `**AX(AI Transformation)란 무엇인가요?**

AX는 단순히 AI 도구를 도입하는 것이 아니라, AI를 핵심 동력으로 삼아 **조직·프로세스·비즈니스 모델 전체를 근본적으로 혁신**하는 것을 의미합니다.

**디지털 전환(DX) vs AI 전환(AX)**
- DX: 아날로그 프로세스를 디지털화 (예: 종이 → Excel)
- AX: 디지털 프로세스를 AI로 자동화·지능화 (예: Excel → AI 자동 분석)

**AX 4단계 로드맵**
1. **인식** — AI 도구를 개인 업무에 활용 (ChatGPT, Claude)
2. **자동화** — 반복 업무를 AI로 대체 (RPA + AI)
3. **증강** — AI가 의사결정을 보조 (RAG, 예측 모델)
4. **혁신** — AI 기반 새로운 비즈니스 모델 창출

**실무 예시**
- 🏭 제조: AI 불량 검출 → 불량률 80% 감소
- 🏦 금융: AI 신용 심사 → 처리 시간 95% 단축
- 🏥 의료: AI 영상 판독 보조 → 진단 정확도 향상

AX는 기술이 아닌 **전략**입니다. 올바른 문제 정의와 변화관리가 핵심입니다.`,

    '로드맵': `**AX 학습 로드맵**

**Level 1 — AX Practitioner (4주)**
- AX 개념과 산업 사례 이해
- AI 도구 기초 활용 (ChatGPT, Claude, Gemini)
- 프롬프트 엔지니어링 기초

**Level 2 — AX Builder (8주)**
- 바이브 코딩으로 AI 앱 개발
- API 연동 및 자동화 파이프라인 구축
- 미니 AX 프로젝트 완성

**Level 3 — AX Architect (12주)**
- AI 플랫폼 아키텍처 설계
- RAG 시스템 및 벡터 DB 구축
- 기업 AX 프로젝트 참여

**Level 4 — AX Strategist (계속)**
- AX 컨설팅 방법론
- 변화관리 및 ROI 측정
- 기업 AX 프로젝트 리드

어느 레벨부터 시작하고 싶으신가요?`,
  },

  // ── AI 도구 활용 ──────────────────────────────────────────
  'ai-tools': {
    'claude': `**Claude (Anthropic) 활용 가이드**

Claude는 AX 실무에서 가장 많이 활용되는 AI 중 하나입니다.

**Claude의 강점**
- 📄 긴 문서 분석 (최대 200K 토큰 컨텍스트)
- 💻 코드 생성·리뷰·디버깅 (Claude Code)
- 🧠 논리적 추론과 구조화된 분석
- 🔒 안전성과 정확성 우선 설계

**비교: Claude vs ChatGPT vs Gemini**
| 항목 | Claude | ChatGPT | Gemini |
|------|--------|---------|--------|
| 코드 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| 문서분석 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| 창의성 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| 속도 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |

**실무 활용 팁**
- 바이브 코딩: Claude Code 사용
- 문서 요약: 전체 파일 첨부 후 질의
- 코드 리뷰: 구체적인 개선 포인트 요청`,

    '비교': `**주요 AI 도구 비교 & 선택 가이드**

**🤖 ChatGPT (OpenAI)**
- 가장 널리 알려진 AI, 생태계 풍부
- GPT-4o: 이미지·음성 멀티모달
- 플러그인과 GPTs로 확장성 높음
- 추천: 일반 업무, 콘텐츠 생성, 이미지 분석

**🔷 Claude (Anthropic)**
- 긴 문서 처리와 코드 생성 최강
- 안전성과 정직성 중심 설계
- Claude Code로 바이브 코딩 지원
- 추천: 개발, 문서 분석, 복잡한 추론

**✨ Gemini (Google)**
- Google 서비스와 깊은 통합
- Google Docs, Gmail 연동
- 빠른 응답 속도 (Flash 모델)
- 추천: Google Workspace 사용자, API 개발

**⚡ 실무 조합 추천**
- 기획·문서: Claude 또는 ChatGPT
- 개발·코딩: Claude Code
- API 연동: Gemini 1.5 Flash (비용 효율)
- 이미지 생성: ChatGPT(DALL-E), Midjourney`,
  },

  // ── 바이브 코딩 ──────────────────────────────────────────
  'vibe-coding': {
    '정의': `**바이브 코딩(Vibe Coding)이란?**

바이브 코딩은 2025년 Andrej Karpathy(전 Tesla AI 디렉터)가 제안한 개념으로, **AI에게 코드 작성을 위임하고 사람은 의도(vibe)와 방향 설정에 집중**하는 새로운 개발 패러다임입니다.

**전통 개발 vs 바이브 코딩**
| 구분 | 전통 개발 | 바이브 코딩 |
|------|----------|------------|
| 코드 작성 | 개발자가 직접 | AI가 생성 |
| 필요 지식 | 언어·문법 숙달 | 문제 정의 능력 |
| 속도 | 느림 | 10-100배 빠름 |
| 집중점 | 구현 방법 | 비즈니스 가치 |

**바이브 코딩 핵심 도구**
- **Claude Code**: 가장 강력한 코딩 AI 에이전트
- **Cursor AI**: AI 내장 코드 에디터
- **v0 (Vercel)**: UI 컴포넌트 생성
- **Replit Agent**: 풀스택 앱 자동 생성

**바이브 코딩 프로세스 (3단계)**
1. **의도 정의**: "무엇을 만들고 싶은가?" 명확히 기술
2. **AI 협업**: Claude Code에 지시, 결과 검토·피드백
3. **반복 개선**: 작동하는 것 확인 후 점진적 기능 추가

개발 경험 없어도 시작할 수 있습니다! 🚀`,

    '시작법': `**바이브 코딩 시작하기 — 실전 가이드**

**Step 1: 환경 준비 (30분)**
\`\`\`
1. Claude.ai 계정 생성 (또는 Claude Code 설치)
2. Node.js 설치 (https://nodejs.org)
3. VS Code 설치 + Cursor AI 확장
\`\`\`

**Step 2: 첫 번째 프로젝트 (1-2시간)**

Claude Code에 이렇게 말하세요:
> "간단한 할일 관리 웹앱을 만들어줘. HTML, CSS, JavaScript만 사용하고, 로컬 스토리지에 저장되게 해줘."

**Step 3: 점진적 확장**
- 기능 추가: "다크모드 버튼 추가해줘"
- 디자인 개선: "더 모던하게 스타일링해줘"
- 백엔드 연결: "Supabase로 데이터베이스 연동해줘"

**바이브 코딩 황금률**
- ✅ 작은 단위로 요청하기
- ✅ 결과물 항상 테스트하기
- ✅ 코드를 이해하려 노력하기 (맹목적 수용 금지)
- ✅ 버전 관리(Git) 사용하기

**추천 첫 프로젝트**
- 개인 포트폴리오 사이트
- 간단한 계산기 앱
- 날씨 정보 대시보드 (API 연동)`,
  },

  // ── AI 플랫폼 설계 ────────────────────────────────────────
  'platform-design': {
    '아키텍처': `**AI 플랫폼 아키텍처 설계 가이드**

**AX교육플랫폼 7-Layer 아키텍처**

**Layer 1 — 사용자 레이어**
- Web Browser, Mobile App, PWA
- 반응형 디자인, 오프라인 지원

**Layer 2 — CDN/Edge 레이어**
- Vercel Edge Network (전 세계 배포)
- 정적 자산 캐싱, 지연시간 최소화

**Layer 3 — 정적 파일 레이어**
- HTML5, CSS3 Variables, Vanilla JS
- 빌드 도구 없는 단순 구조

**Layer 4 — API 레이어**
- Gemini API: AI 기능
- Supabase REST API: 데이터 CRUD
- Edge Functions: 서버리스 로직

**Layer 5 — 데이터 레이어**
- PostgreSQL: 관계형 데이터
- pgvector: AI 임베딩 저장
- Supabase Storage: 파일·미디어

**Layer 6 — 인증 레이어**
- Supabase Auth (JWT)
- Google OAuth 2.0
- Row Level Security (RLS)

**Layer 7 — AI 레이어**
- Gemini 1.5 Flash: 빠른 추론
- RAG 파이프라인: 지식 검색
- 프롬프트 엔지니어링 최적화

이 아키텍처의 핵심은 **서버 없이(Serverless)** 운영되어 초기 비용이 거의 0원이라는 점입니다.`,

    'rag': `**RAG(Retrieval-Augmented Generation) 시스템 설계**

**RAG란?**
AI가 답변 생성 시 **외부 지식베이스에서 관련 정보를 검색해 참고**하는 기법입니다. AI의 환각(Hallucination)을 줄이고 최신·전문 정보 기반 답변이 가능합니다.

**RAG 파이프라인**

\`\`\`
문서 입력 → 청킹(Chunking) → 임베딩 생성
→ 벡터 DB 저장 → [쿼리 시] 유사도 검색
→ 컨텍스트 주입 → LLM 생성 → 답변 출력
\`\`\`

**핵심 컴포넌트**
- **임베딩 모델**: text-embedding-004 (Google)
- **벡터 DB**: pgvector (PostgreSQL), Pinecone, Weaviate
- **청킹 전략**: 500-1000 토큰 단위, 오버랩 20%
- **검색 방식**: 코사인 유사도, MMR(다양성 보장)

**Supabase + pgvector로 구현**
\`\`\`sql
-- 벡터 테이블 생성
CREATE TABLE documents (
  id uuid PRIMARY KEY,
  content text,
  embedding vector(768),
  metadata jsonb
);

-- 유사도 검색
SELECT content
FROM documents
ORDER BY embedding <=> query_embedding
LIMIT 5;
\`\`\`

**AX플랫폼 RAG 활용 사례**
- AI 튜터: 강의 콘텐츠 기반 Q&A
- 자격증 시험: 문제 풀이 해설 검색
- 컨설팅 보고서: 사례 DB 검색`,
  },

  // ── AX 컨설팅 ────────────────────────────────────────────
  'ax-consulting': {
    '방법론': `**AX 컨설팅 방법론**

**1단계: 현황 진단 (AS-IS 분석)**

**SPIN 기법으로 문제 발굴**
- **S**ituation: 현재 업무 프로세스 파악
- **P**roblem: 비효율·병목 지점 식별
- **I**mplication: 문제의 비즈니스 영향 정량화
- **N**eed-payoff: AI 도입 시 기대 효과 도출

**AX 성숙도 평가 5단계**
1. 초기 (Ad-hoc): AI 도구 산발적 사용
2. 관리 (Managed): 부서별 AI 도입
3. 정의 (Defined): 전사 AI 전략 수립
4. 정량화 (Quantified): AI ROI 측정 체계
5. 최적화 (Optimizing): AI 자기 학습·개선

**2단계: TO-BE 설계**
- AI 도입 로드맵 (단기/중기/장기)
- 파일럿 프로젝트 선정 기준
  - 임팩트 높음 × 실현 가능성 높음 → 즉시 시작
  - 임팩트 높음 × 실현 가능성 낮음 → 역량 구축 후
- 변화관리 계획 (Change Management)

**3단계: 실행 & 측정**

**AX ROI 측정 공식**
\`\`\`
AX ROI = (절감 비용 + 증가 매출 - AI 도입 비용)
         ÷ AI 도입 비용 × 100%
\`\`\`

**핵심 KPI 예시**
- 업무 처리 시간 단축률 (목표: -50%)
- 오류율 감소 (목표: -80%)
- 직원 생산성 향상 (목표: +30%)
- 고객 만족도 변화 (NPS 기준)`,

    'roi': `**AX 프로젝트 ROI 측정 가이드**

**비용 항목 (Cost)**
- AI API 사용료 (Gemini, OpenAI 등)
- 플랫폼 구독료 (Supabase, Vercel 등)
- 내부 개발·운영 인력 비용
- 교육·컨설팅 비용

**효익 항목 (Benefit)**

**직접 효익**
- 인력 절감: 자동화로 대체된 업무 시간 × 인건비
- 오류 감소: 재작업 비용 절감
- 처리 속도: 업무 처리 시간 단축

**간접 효익**
- 고객 경험 향상 → 이탈률 감소 → 매출 유지
- 직원 만족도 향상 → 이직률 감소 → 채용비 절감
- 신규 비즈니스 모델 창출 → 추가 매출

**실전 사례: 고객센터 AX**
- Before: 상담사 20명, 평균 응대 시간 8분
- After: AI 1차 응대 + 상담사 5명, 평균 응대 2분
- 연간 절감: 15명 × 평균연봉 3,500만원 = **5.25억 원**
- AI 운영비: 연 3,000만원
- **연간 ROI: 1,650% (5.25억 ÷ 3천만 × 100)**

변화관리 없이는 ROI가 절반으로 줄어듭니다. 사람과 조직에 대한 투자를 잊지 마세요.`,
  },

  // ── 프롬프트 엔지니어링 ────────────────────────────────────
  'prompt-engineering': {
    '원칙': `**프롬프트 엔지니어링 핵심 원칙**

**CLEAR 프레임워크**
- **C**ontext: 배경 맥락을 충분히 제공
- **L**ength: 적절한 출력 길이 지정
- **E**xamples: 예시로 원하는 형식 보여주기
- **A**udience: 독자/용도 명시
- **R**ole: AI에게 역할 부여

**5가지 핵심 기법**

**1. 역할 프롬프팅 (Role Prompting)**
> "당신은 10년 경력의 AX 컨설턴트입니다. 중소기업 CEO 입장에서..."

**2. 체인 오브 소트 (Chain-of-Thought)**
> "단계별로 생각하면서 답변해주세요."

**3. Few-Shot 예시 제공**
> "다음 예시처럼 작성해주세요: [예시1] [예시2]"

**4. 구조화 출력 요청**
> "마크다운 표 형식으로, 항목은 5개로 정리해주세요."

**5. 반복 정제 (Iterative Refinement)**
> "이전 답변에서 ROI 부분을 더 구체적인 수치로 보완해주세요."

**황금률: 좋은 프롬프트 = 좋은 지시서**
모호한 지시: "마케팅 전략 알려줘"
명확한 지시: "B2B SaaS 스타트업(직원 50명)의 LinkedIn 콘텐츠 마케팅 전략을 3개월 실행 계획과 함께 알려주세요."`,
  },

  // ── AI 윤리 ───────────────────────────────────────────────
  'ai-ethics': {
    '거버넌스': `**AI 윤리 & 거버넌스 핵심 개념**

**AX 실무자가 알아야 할 AI 윤리 6원칙**

1. **공정성 (Fairness)**: AI 의사결정에 차별 없어야 함
   - 예: 채용 AI가 특정 성별·나이·출신 지역 차별 금지

2. **투명성 (Transparency)**: AI 판단 근거를 설명할 수 있어야 함
   - XAI(설명 가능한 AI) 기술 적용

3. **책임성 (Accountability)**: AI 오류 발생 시 책임 소재 명확화
   - 인간 감독(Human-in-the-Loop) 체계 구축

4. **프라이버시 (Privacy)**: 개인정보 최소 수집·활용
   - GDPR, 개인정보보호법 준수

5. **안전성 (Safety)**: 의도치 않은 피해 방지
   - Red Teaming, 모델 테스트

6. **포용성 (Inclusivity)**: 모든 사람이 AI 혜택 받을 수 있어야 함

**기업 AI 거버넌스 체계**
- AI 윤리 위원회 설립
- AI 사용 정책·가이드라인 수립
- 정기적 AI 감사(Audit) 실시
- AI 리터러시 교육 의무화

**한국 관련 규제**
- 개인정보보호법 (PIPA)
- AI 기본법 (2024년 제정)
- EU AI Act 영향 (글로벌 기업)`,
  },

  // ── RAG 시스템 ────────────────────────────────────────────
  'rag-systems': {
    '구축': `**RAG 시스템 구축 실전 가이드**

**RAG vs Fine-tuning 선택 기준**

| 기준 | RAG | Fine-tuning |
|------|-----|-------------|
| 최신 정보 | ✅ 실시간 업데이트 | ❌ 재학습 필요 |
| 비용 | ✅ 저렴 | ❌ 고비용 |
| 투명성 | ✅ 출처 제공 | ❌ 불투명 |
| 정확성 | ✅ 높음 | ✅ 높음 |
| 구축 복잡도 | 중간 | 높음 |

**RAG 구축 단계별 가이드**

**Phase 1: 데이터 준비**
- 문서 수집 (PDF, Word, Web 등)
- 전처리: OCR, 텍스트 정제
- 청킹 전략 결정 (고정 크기 / 의미 단위)

**Phase 2: 임베딩 생성**
\`\`\`javascript
// Google Embedding API 활용
const response = await fetch(
  'https://generativelanguage.googleapis.com/v1beta/models/text-embedding-004:embedContent',
  {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'models/text-embedding-004',
      content: { parts: [{ text: chunk }] }
    })
  }
);
\`\`\`

**Phase 3: 벡터 저장 (Supabase pgvector)**
\`\`\`sql
CREATE EXTENSION IF NOT EXISTS vector;
CREATE TABLE ax_knowledge (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  title text,
  content text,
  embedding vector(768),
  topic text,
  created_at timestamptz DEFAULT now()
);
\`\`\`

**Phase 4: 검색 & 생성**
- 질문 임베딩 → 유사도 검색 → 상위 5개 컨텍스트
- Gemini에 컨텍스트 주입 → 답변 생성
- 출처(Source) 함께 반환

**Phase 5: 평가 & 최적화**
- RAGAS 지표: Faithfulness, Answer Relevancy, Context Recall
- A/B 테스트로 청킹 전략 최적화`,
  },
};

// ============================================================
// 상태 관리
// ============================================================
let currentTopic = 'ax-basics';
let isTyping = false;
let chatHistory = [];

// ============================================================
// 더미 응답 생성기 (RAG KB 기반)
// ============================================================
function getDummyResponse(message, topic) {
  const msg = message.toLowerCase();
  const topicData = RAG_KB[topic] || {};

  // 토픽 내 키워드 매칭
  for (const [key, content] of Object.entries(topicData)) {
    if (msg.includes(key)) return content;
  }

  // 전체 KB 키워드 매칭
  const globalKeywords = {
    'ax': RAG_KB['ax-basics']['정의'],
    '전환': RAG_KB['ax-basics']['정의'],
    '로드맵': RAG_KB['ax-basics']['로드맵'],
    '바이브': RAG_KB['vibe-coding']['정의'],
    '코딩': RAG_KB['vibe-coding']['정의'],
    '시작': RAG_KB['vibe-coding']['시작법'],
    'claude': RAG_KB['ai-tools']['claude'],
    'chatgpt': RAG_KB['ai-tools']['비교'],
    'gemini': RAG_KB['ai-tools']['비교'],
    '비교': RAG_KB['ai-tools']['비교'],
    '차이': RAG_KB['ai-tools']['비교'],
    '아키텍처': RAG_KB['platform-design']['아키텍처'],
    '설계': RAG_KB['platform-design']['아키텍처'],
    'rag': RAG_KB['rag-systems']['구축'],
    '벡터': RAG_KB['rag-systems']['구축'],
    '컨설팅': RAG_KB['ax-consulting']['방법론'],
    'roi': RAG_KB['ax-consulting']['roi'],
    '프롬프트': RAG_KB['prompt-engineering']['원칙'],
    '윤리': RAG_KB['ai-ethics']['거버넌스'],
    '자격': `**AX 자격증 준비 가이드**\n\n**AX Practitioner (Level 1)** 취득 방법:\n1. AX 기초 개념 강의 10강 수강\n2. AI 도구 활용 실습 완료\n3. 온라인 시험 응시 (70점 이상 합격)\n4. 디지털 배지 발급\n\n준비 기간: 약 4주 (주 10시간 기준)\n\n강의 목록을 보려면 [강의 페이지](courses.html)를 방문하세요!`,
    '인증': `**AX 인증 체계**\n\n- 🥉 Level 1: AX Practitioner\n- 🥈 Level 2: AX Builder\n- 🥇 Level 3: AX Architect\n- 👑 Level 4: AX Strategist\n\n각 레벨은 이전 레벨 인증 후 응시 가능합니다.`,
  };

  for (const [keyword, response] of Object.entries(globalKeywords)) {
    if (msg.includes(keyword)) return response;
  }

  // 기본 응답
  return `**"${message}"** 에 대한 답변입니다.\n\n현재 선택하신 주제는 **${TOPICS[topic] || topic}** 입니다.\n\n이 주제와 관련된 구체적인 질문을 해주시면 더 정확한 답변을 드릴 수 있습니다. 예를 들어:\n- "${TOPICS[topic]}의 핵심 개념은 무엇인가요?"\n- "${TOPICS[topic]} 실무 적용 방법을 알려주세요"\n\n왼쪽 패널에서 다른 주제를 선택하거나 빠른 질문 버튼을 활용해보세요! 😊`;
}

// ============================================================
// Gemini API 호출
// ============================================================
async function callGeminiAPI(message, topic) {
  const apiKey = (typeof CONFIG !== 'undefined') ? CONFIG.GEMINI_API_KEY : '';
  if (!apiKey || (typeof CONFIG !== 'undefined' && CONFIG.IS_DEMO) || apiKey.includes('your-')) {
    // 데모 모드: 딜레이 후 RAG 응답
    await new Promise(r => setTimeout(r, 800 + Math.random() * 800));
    return getDummyResponse(message, topic);
  }

  const url = `${CONFIG.GEMINI_API_URL}${CONFIG.GEMINI_MODEL}:generateContent?key=${apiKey}`;
  const systemPrompt = `당신은 AX(AI Transformation) 교육 전문 AI 튜터입니다.
현재 주제: ${TOPICS[topic] || '일반'}.
한국어로 친절하고 명확하게 답변하세요.
실무 예시를 포함하고, 마크다운을 적절히 활용하세요.
답변은 500자 내외로 간결하게 유지하되, 필요하면 구조화된 목록을 활용하세요.
출처나 참고 링크가 있으면 포함하세요.`;

  const conversationContext = chatHistory
    .slice(-6) // 최근 3턴(6개 메시지)
    .map(m => `${m.role === 'user' ? '사용자' : 'AI'}: ${m.content}`)
    .join('\n');

  const fullPrompt = conversationContext
    ? `${systemPrompt}\n\n이전 대화:\n${conversationContext}\n\n사용자: ${message}`
    : `${systemPrompt}\n\n사용자: ${message}`;

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: fullPrompt }] }],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        },
        safetySettings: [
          { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
          { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
        ],
      }),
    });

    if (!res.ok) {
      console.warn('Gemini API error:', res.status);
      return getDummyResponse(message, topic);
    }

    const data = await res.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
    return text || getDummyResponse(message, topic);

  } catch (err) {
    console.error('Gemini API 호출 실패:', err);
    return getDummyResponse(message, topic);
  }
}

// ============================================================
// 마크다운 → HTML 변환 (경량)
// ============================================================
function markdownToHtml(text) {
  return text
    // 코드 블록
    .replace(/```[\w]*\n([\s\S]*?)```/g, '<pre style="background:rgba(0,0,0,0.06);border-radius:6px;padding:10px 12px;overflow-x:auto;font-family:\'Courier New\',monospace;font-size:12px;margin:8px 0;white-space:pre;"><code>$1</code></pre>')
    // 인라인 코드
    .replace(/`([^`]+)`/g, '<code style="background:rgba(0,0,0,0.07);padding:2px 5px;border-radius:3px;font-family:\'Courier New\',monospace;font-size:12px;">$1</code>')
    // 굵게
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // 기울임
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // 링크
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" style="color:var(--color-accent);font-weight:500;text-decoration:underline;" target="_blank">$1</a>')
    // 표 (간단한 마크다운 표)
    .replace(/\|(.+)\|\n\|[-| :]+\|\n((\|.+\|\n?)+)/g, (match) => {
      const rows = match.trim().split('\n').filter(r => !/^[\|:- ]+$/.test(r));
      let html = '<table style="width:100%;border-collapse:collapse;margin:8px 0;font-size:13px;">';
      rows.forEach((row, i) => {
        const cells = row.split('|').slice(1, -1);
        const tag = i === 0 ? 'th' : 'td';
        const style = i === 0
          ? 'background:rgba(45,27,105,0.07);padding:6px 10px;border:1px solid var(--color-border);font-weight:600;'
          : 'padding:6px 10px;border:1px solid var(--color-border);';
        html += `<tr>${cells.map(c => `<${tag} style="${style}">${c.trim()}</${tag}>`).join('')}</tr>`;
      });
      html += '</table>';
      return html;
    })
    // 줄바꿈
    .replace(/\n\n/g, '</p><p style="margin-top:8px;">')
    .replace(/\n/g, '<br>');
}

// ============================================================
// UI 헬퍼 함수
// ============================================================
function getTimestamp() {
  return new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' });
}

function appendMessage(role, rawContent) {
  const container = document.getElementById('chatMessages');
  if (!container) return;

  const div = document.createElement('div');
  div.className = `message ${role}`;
  const timestamp = getTimestamp();

  if (role === 'user') {
    div.innerHTML = `
      <div class="message-avatar">나</div>
      <div>
        <div class="message-bubble">${rawContent.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>
        <div style="font-size:11px;color:var(--color-text-tertiary);margin-top:4px;padding-right:4px;text-align:right;">${timestamp}</div>
      </div>`;
  } else {
    const html = markdownToHtml(rawContent);
    div.innerHTML = `
      <div class="message-avatar">🤖</div>
      <div>
        <div class="message-bubble"><p>${html}</p></div>
        <div style="font-size:11px;color:var(--color-text-tertiary);margin-top:4px;padding-left:4px;">AI 튜터 · ${timestamp}</div>
      </div>`;
  }

  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
  chatHistory.push({ role, content: rawContent });
}

function showTypingIndicator() {
  const container = document.getElementById('chatMessages');
  if (!container) return;

  const div = document.createElement('div');
  div.className = 'message ai';
  div.id = 'typingMsg';
  div.innerHTML = `
    <div class="message-avatar">🤖</div>
    <div class="message-bubble" style="padding:12px 16px;">
      <div class="typing-indicator">
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
      </div>
    </div>`;

  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function removeTypingIndicator() {
  const el = document.getElementById('typingMsg');
  if (el) el.remove();
}

function setSendState(disabled) {
  const btn = document.getElementById('sendBtn');
  const input = document.getElementById('chatInput');
  if (btn) btn.disabled = disabled;
  if (input) input.disabled = disabled;
}

// ============================================================
// 메시지 전송 핵심 로직
// ============================================================
async function sendMessage(overrideText) {
  if (isTyping) return;

  const input = document.getElementById('chatInput');
  const text = (overrideText || input.value).trim();
  if (!text) return;

  // 초기화
  if (!overrideText) input.value = '';
  autoResizeTextarea(input);
  isTyping = true;
  setSendState(true);

  // 사용자 메시지 추가
  appendMessage('user', text);

  // 타이핑 인디케이터
  showTypingIndicator();

  try {
    const response = await callGeminiAPI(text, currentTopic);
    removeTypingIndicator();
    appendMessage('ai', response);
  } catch (err) {
    removeTypingIndicator();
    appendMessage('ai', '죄송합니다. 일시적인 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.');
    console.error('메시지 전송 오류:', err);
  } finally {
    isTyping = false;
    setSendState(false);
    if (input) {
      input.focus();
      autoResizeTextarea(input);
    }
  }
}

// ============================================================
// Textarea 자동 높이 조절
// ============================================================
function autoResizeTextarea(el) {
  if (!el) return;
  el.style.height = 'auto';
  el.style.height = Math.min(el.scrollHeight, 120) + 'px';
}

// ============================================================
// 토픽 선택 처리
// ============================================================
function selectTopic(topicKey) {
  currentTopic = topicKey;

  // UI 업데이트
  document.querySelectorAll('.topic-item').forEach(el => {
    el.classList.toggle('active', el.dataset.topic === topicKey);
  });

  // 토픽 변경 안내 메시지
  const topicLabel = TOPICS[topicKey] || topicKey;
  appendMessage('ai', `**${topicLabel}** 주제로 전환했습니다. 🎯\n\n이 주제에 대해 무엇이든 질문해보세요! 실무 중심으로 상세히 설명해 드리겠습니다.`);
}

// ============================================================
// 새 대화 시작
// ============================================================
function startNewChat() {
  const container = document.getElementById('chatMessages');
  if (!container) return;

  chatHistory = [];
  container.innerHTML = '';

  appendMessage('ai', '새 대화를 시작합니다! 🆕\n\nAX 교육, AI 도구, 바이브 코딩 등 어떤 주제든 질문해보세요.');
}

// ============================================================
// 대화 저장
// ============================================================
function saveChat() {
  if (chatHistory.length === 0) {
    alert('저장할 대화가 없습니다.');
    return;
  }

  const content = chatHistory
    .map(m => `[${m.role === 'user' ? '나' : 'AI 튜터'}]\n${m.content}`)
    .join('\n\n---\n\n');

  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `ax-tutor-chat-${new Date().toISOString().slice(0,10)}.txt`;
  a.click();
  URL.revokeObjectURL(url);
}

// ============================================================
// 대화 공유 (URL 클립보드)
// ============================================================
function shareChat() {
  const url = window.location.href;
  navigator.clipboard.writeText(url).then(() => {
    alert('링크가 클립보드에 복사되었습니다!');
  }).catch(() => {
    prompt('이 링크를 복사하세요:', url);
  });
}

// ============================================================
// 이벤트 바인딩 & 초기화
// ============================================================
document.addEventListener('DOMContentLoaded', () => {

  // Send 버튼
  const sendBtn = document.getElementById('sendBtn');
  if (sendBtn) sendBtn.addEventListener('click', () => sendMessage());

  // Textarea Enter 키 처리
  const chatInput = document.getElementById('chatInput');
  if (chatInput) {
    chatInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    });
    chatInput.addEventListener('input', () => autoResizeTextarea(chatInput));
  }

  // 토픽 선택
  document.querySelectorAll('.topic-item').forEach(el => {
    el.addEventListener('click', () => {
      const topic = el.dataset.topic;
      if (topic && topic !== currentTopic) selectTopic(topic);
    });
  });

  // 빠른 질문 버튼
  document.querySelectorAll('.quick-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const q = btn.dataset.q;
      if (q) sendMessage(q);
    });
  });

  // 최근 대화 항목 클릭
  document.querySelectorAll('.session-item').forEach(item => {
    item.addEventListener('click', () => {
      const text = item.textContent.trim();
      sendMessage(text);
    });
  });

  // 새 대화 버튼
  const newChatBtn = document.getElementById('newChatBtn');
  if (newChatBtn) newChatBtn.addEventListener('click', startNewChat);

  // 대화 저장 버튼
  const saveChatBtn = document.getElementById('saveChatBtn');
  if (saveChatBtn) saveChatBtn.addEventListener('click', saveChat);

  // 공유 버튼
  const shareChatBtn = document.getElementById('shareChatBtn');
  if (shareChatBtn) shareChatBtn.addEventListener('click', shareChat);

  // 테마 토글 (theme.js 없을 때 폴백)
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle && typeof ThemeManager === 'undefined') {
    themeToggle.addEventListener('click', () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
      themeToggle.textContent = isDark ? '🌙' : '☀️';
    });
  }
});
