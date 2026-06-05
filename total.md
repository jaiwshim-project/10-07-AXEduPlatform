# AX EDU GROUP 교육플랫폼 - 종합 분석 자료

> 작성일: 2026-04-04 | 총 21개 HTML + 8개 JS + 3개 CSS + 1개 SQL

---

## 1. 플랫폼 개요

**AX EDU GROUP**은 한국 최초의 AI 전환(AX) 전문가 생태계 플랫폼이다. 온라인/오프라인 교육, AI 튜터, 자격 인증, 프로젝트 마켓플레이스, 커뮤니티, 기업 서비스를 통합 제공한다.

### 핵심 기술 스택

| 구분 | 기술 |
|------|------|
| Frontend | Vanilla JS + HTML5 + CSS3 (프레임워크 없음) |
| Backend | Supabase (PostgreSQL + Auth + Storage) |
| AI Engine | Google Gemini 1.5 Flash API |
| 지식 베이스 | RAG (Retrieval-Augmented Generation) |
| 배포 | Vercel (Serverless, JAMstack) |
| 인증 | Supabase Auth + Google OAuth |
| 이메일 | EmailJS (기업 문의) |

### 플랫폼 통계 (목표치)

| 지표 | 수치 |
|------|------|
| 수강생 | 1,200+ |
| 강의 수 | 50+ |
| 프로젝트 | 100+ |
| 만족도 | 98% |

---

## 2. 전체 파일 구조

```
AX교육플랫폼/
├── index.html                      # 랜딩 페이지 (28KB)
├── pages/
│   ├── about.html                  # 회사 소개 (21KB)
│   ├── ai-tutor.html               # AI 튜터 챗봇 (17KB)
│   ├── auth.html                   # 로그인/회원가입 (13KB)
│   ├── books.html                  # 신간 서적 (13KB)
│   ├── ceo.html                    # CEO 소개 (28KB)
│   ├── certification.html          # AX 자격증 (35KB)
│   ├── community.html              # 커뮤니티 포럼 (37KB)
│   ├── course-detail.html          # 강의 상세 (45KB)
│   ├── courses.html                # 강의 목록 (24KB)
│   ├── dashboard.html              # 사용자 대시보드 (16KB)
│   ├── enterprise.html             # 기업 서비스 (43KB)
│   ├── expert-profile.html         # 전문가 디렉토리 (36KB)
│   ├── manual.html                 # 사용자 매뉴얼 (54KB)
│   ├── offline-courses.html        # 오프라인 교육 (14KB)
│   ├── online-courses.html         # 온라인 교육 (15KB)
│   ├── online-projects.html        # 온라인 프로젝트 (12KB)
│   ├── projects.html               # 프로젝트 마켓플레이스 (54KB)
│   ├── qna.html                    # Q&A / FAQ (21KB)
│   ├── sitemap.html                # 사이트맵 (6KB)
│   └── workshops.html              # 라이브 워크숍 (23KB)
├── js/
│   ├── ai-tutor.js                 # AI 튜터 엔진 (861줄)
│   ├── auth.js                     # 인증 모듈 (122줄)
│   ├── ax-knowledge.js             # RAG 지식 베이스 (364줄)
│   ├── components.js               # 공통 컴포넌트 (455줄)
│   ├── config.js                   # 설정/API키 (21줄)
│   ├── lms.js                      # LMS 엔진 (621줄)
│   ├── theme.js                    # 테마 관리 (251줄)
│   └── utils.js                    # 유틸리티 (126줄)
├── css/
│   ├── variables.css               # 디자인 토큰 (74줄)
│   ├── main.css                    # 메인 스타일 (1,916줄)
│   └── sidebar.css                 # 사이드바/대시보드 (710줄)
├── supabase/
│   └── schema.sql                  # DB 스키마 (269줄)
├── scripts/
│   ├── generate-manual-pdf.js      # PDF 매뉴얼 생성 (278줄)
│   ├── setup-hooks.js              # Git 훅 설정 (122줄)
│   └── sync-to-root.js             # 스테이지 동기화 (154줄)
├── downloads/
│   └── AX교육플랫폼_사용자매뉴얼.pdf  # 사용자 매뉴얼 PDF (4.3MB)
├── images/                         # 이미지 리소스 (8MB)
│   ├── architecture.svg            # 시스템 아키텍처도
│   ├── ecosystem.svg               # 생태계 다이어그램
│   ├── ceo-profile.jpg             # CEO 프로필 사진
│   ├── book-vibe-coding.jpg        # 도서 표지
│   ├── logo-*.png                  # 로고 파일들
│   └── pdf-pages/                  # PDF 슬라이드 이미지
├── SAL_Grid_Dev_Suite/             # SAL Grid 개발 도구 (별도 모듈)
├── vercel.json                     # Vercel 배포 설정
├── 안내자료.pptx                    # 소개 프레젠테이션 (28MB)
└── 로고-*.png                      # 브랜드 로고 파일들
```

---

## 3. 페이지별 상세 분석

### 3.1 메인/소개 페이지

#### index.html — 랜딩 페이지
- **용량**: 28KB
- **구성**: 히어로(미션+통계) → AX EDU GROUP 소개 → 생태계 흐름도 → 핵심 가치 3카드 → 팀 소개 → 연혁(2026~2028) → CTA → 푸터
- **특징**: 다크/라이트 테마 토글, 카운터 애니메이션, 그라디언트 배경 (퍼플/블랙)
- **스크립트**: components.js, config.js, utils.js, auth.js, theme.js

#### pages/about.html — 회사 소개
- **용량**: 21KB
- **구성**: 히어로 → 미션(AX 전문가 생태계) → 핵심 가치 3가지 → 팀 4명 소개 → 연혁 타임라인 5건 → CTA
- **핵심 가치**: 실전 중심, 지속 성장, 파트너십
- **팀**: 그라디언트 아바타 카드

#### pages/ceo.html — CEO 소개
- **용량**: 28KB
- **구성**: 히어로(CEO 사진+통계) → 프로필(경력/수상) → 경영 철학 3가지 → 최신 저서 → 그룹사 로고 → 미디어 언급 → CTA
- **특징**: 수상 뱃지, 경력 타임라인, 이미지 hover 효과

#### pages/books.html — 신간 서적
- **용량**: 13KB
- **구성**: 히어로 → 도서 카드(표지/메타/하이라이트) → 인용문 → 바이브코딩 가이드 인포그래픽 → PDF 뷰어(10페이지) → 다운로드
- **특징**: 인터랙티브 PDF 뷰어 (터치 제스처, 키보드 네비게이션, 페이지 인디케이터)

---

### 3.2 교육 과정

#### pages/courses.html — 강의 목록
- **용량**: 24KB
- **구성**: 히어로+검색 → 카테고리 필터 탭 → 정렬 옵션 → 강의 그리드(3열) → 페이지네이션
- **필터**: 카테고리(5종), 레벨(입문~고급), 무료/유료
- **카드**: 썸네일, 레벨 뱃지, 강사명, 평점, 수강생 수, 가격

#### pages/course-detail.html — 강의 상세
- **용량**: 45KB (최대급)
- **구성**: 히어로 배너(브레드크럼+뱃지) → 등록 카드(스티키 사이드바) → 탭(개요/커리큘럼/강사/리뷰) → 커리큘럼(펼침/접힘) → 강사 프로필 → 수강 후기 → 유사 강의 추천 → FAQ
- **특징**: 스티키 등록 카드, 할인 가격 표시, 별점 리뷰, 반응형

#### pages/online-courses.html — 온라인 교육
- **용량**: 15KB
- **구성**: 히어로 → 카테고리 필터 → 통계 4개 → 인기 강의 → 강의 그리드 → 페이지네이션
- **특징**: 레벨별 컬러 코딩, 무료 강의 필터, 그라디언트 썸네일

#### pages/offline-courses.html — 오프라인 교육
- **용량**: 14KB
- **구성**: 히어로 → 워크숍 목록(날짜박스+상세) → 가격/등록 → 태그(장소/유형/잔여) → FAQ
- **특징**: 달력 스타일 날짜 표시, 장소/정원 정보

#### pages/workshops.html — 라이브 워크숍
- **용량**: 23KB
- **구성**: 히어로 → 통계 4개 → 필터 탭(전체/라이브/녹화/무료) → 워크숍 그리드(3열) → 페이지네이션
- **카드**: 날짜박스, 강사, 온/오프 뱃지, 긴급도 표시, 가격, 등록 버튼

---

### 3.3 프로젝트/인증

#### pages/online-projects.html — 온라인 프로젝트
- **용량**: 12KB
- **구성**: 히어로 → 참여 프로세스 4단계 → 프로젝트 그리드 → 상태 뱃지(모집중/진행중/완료) → 스킬 태그 → 지원 버튼
- **메타**: 기간, 팀 규모, 기술 스택

#### pages/projects.html — 프로젝트 마켓플레이스
- **용량**: 54KB (최대)
- **구성**: 히어로 → 검색+필터 → 프로젝트 그리드 → 상세 모달 → 사이드바 필터(스킬/예산/기간) → 지원 시스템 → FAQ
- **특징**: 고급 필터링, 예산 정보, 클라이언트 평가, 프로젝트 타임라인

#### pages/certification.html — AX 자격증
- **용량**: 35KB
- **구성**: 히어로 → 4단계 자격증 카드 → 시험 정보 3카드 → 샘플 문제(인터랙티브) → 합격자 후기 → FAQ → 지원 버튼
- **자격 등급**: Practitioner(동) → Expert/Builder(은) → Master/Architect(금) → Strategist(백금)
- **특징**: 컬러 코딩, 인터랙티브 퀴즈, 어코디언 FAQ

---

### 3.4 커뮤니티/전문가

#### pages/community.html — 커뮤니티 포럼
- **용량**: 37KB
- **구성**: 히어로+검색 → 커뮤니티 통계 → 메인(게시글 목록+사이드바) → 탭(최신/인기/질문/프로젝트) → 정렬 → 사이드바(트렌딩/전문가) → 글쓰기 → 페이지네이션
- **카테고리**: Q&A, 프로젝트모집, 스터디, 사례공유, 자유
- **특징**: 좋아요/댓글, 태그 시스템, 전문가 디렉토리

#### pages/expert-profile.html — 전문가 디렉토리
- **용량**: 36KB
- **구성**: 히어로(검색+필터) → 전문가 통계 → 전문가 그리드(3열) → 상세 모달 → 레벨/스킬/경력 필터 → 연락/메시지 버튼
- **뱃지**: Practitioner, Expert, Architect
- **특징**: 검색/필터, 스킬 표시, 프로필 모달, 평가/리뷰

#### pages/qna.html — Q&A / FAQ
- **용량**: 21KB
- **구성**: 히어로+검색 → 카테고리 필터 6개 → 어코디언 Q&A → 연락처 CTA
- **카테고리**: 가입/인증, 강의, 프로젝트, 자격증, 기업서비스, 기술지원
- **특징**: 어코디언 토글, 카테고리 필터, 검색

---

### 3.5 기업 서비스

#### pages/enterprise.html — 기업 서비스
- **용량**: 43KB
- **구성**: 히어로 → 통계바 → 서비스 그리드(3~4개) → 프로젝트 사례 → 프로세스 5단계 → 기업 후기 → 문의 폼(EmailJS) → FAQ → 가격
- **서비스 5종**: AX 전략 수립, AI 플랫폼 구축, 업무 자동화, AI 분석, AI 개발
- **특징**: EmailJS 폼 연동, 프로세스 플로우차트, 사례 쇼케이스

---

### 3.6 사용자 기능

#### pages/auth.html — 로그인/회원가입
- **용량**: 13KB
- **구성**: 중앙 정렬 폼 → 탭(로그인/가입) → 이메일/비밀번호 → 비밀번호 표시 토글 → 기억하기 → Google OAuth → 회원가입 추가 필드(이름/조직/경력) → 약관 동의
- **인증**: Supabase Auth + Google OAuth + 데모 모드 폴백
- **특징**: 탭 전환, 폼 유효성 검사, 에러 알림

#### pages/dashboard.html — 사용자 대시보드
- **용량**: 16KB
- **구성**: 사이드바(8개 메뉴) → 상단바(환영 메시지+사용자 메뉴) → 통계 카드 4개 → 수강 중 강의 → AI 추천 → 최근 활동 → 최신 LMS 강의 → 예정 워크숍 → 로그아웃
- **데이터**: localStorage + Supabase LMS
- **특징**: 사이드바 네비게이션, 진도 추적, AI 추천

#### pages/ai-tutor.html — AI 튜터
- **용량**: 17KB
- **구성**: 2컬럼(사이드바+채팅) → 사이드바(학습 주제 8개, 최근 대화) → 채팅 영역(메시지, 입력, 빠른 질문) → 주제 선택 패널
- **주제**: AX 기초, AI 도구, 바이브 코딩, 플랫폼 설계, AX 컨설팅, 프롬프트 엔지니어링, AI 윤리, RAG 시스템
- **특징**: Gemini API 실시간 대화, RAG 폴백, 마크다운 렌더링, 세션 기록, 대화 저장/공유

#### pages/manual.html — 사용자 매뉴얼
- **용량**: 54KB (최대)
- **구성**: PDF 다운로드 바(스티키) → 검색 가능 사이드바(8+ 섹션) → 메인 문서 영역 → 코드 예시 → 스크린샷 → FAQ
- **특징**: 검색 가능 네비게이션, 코드 하이라이팅, PDF 내보내기

#### pages/sitemap.html — 사이트맵
- **용량**: 6KB (최소)
- **구성**: 히어로 → 8개 섹션 그리드 (메인/교육/프로젝트/인증/커뮤니티/기업서비스/지원/보호)
- **특징**: 전체 페이지 링크 + 설명

---

## 4. 네비게이션 구조

```
index.html (랜딩)
 │
 ├─ 회사소개 ─┬─ about.html (회사 소개)
 │            ├─ ceo.html (CEO 소개)
 │            └─ books.html (신간 서적)
 │
 ├─ 교육과정 ─┬─ courses.html (강의 목록)
 │            ├─ online-courses.html (온라인)
 │            ├─ offline-courses.html (오프라인)
 │            ├─ course-detail.html (강의 상세)
 │            └─ workshops.html (라이브 워크숍)
 │
 ├─ 프로젝트 ─┬─ projects.html (마켓플레이스)
 │            └─ online-projects.html (온라인 프로젝트)
 │
 ├─ 인증 ────── certification.html (AX 자격증)
 │
 ├─ 커뮤니티 ─┬─ community.html (포럼)
 │            └─ expert-profile.html (전문가 디렉토리)
 │
 ├─ 기업서비스 ── enterprise.html (기업 서비스)
 │
 ├─ 매뉴얼 ──── manual.html (사용자 매뉴얼)
 │
 ├─ 지원 ────┬─ qna.html (Q&A)
 │           ├─ ai-tutor.html (AI 튜터)
 │           └─ sitemap.html (사이트맵)
 │
 └─ 사용자 ──┬─ auth.html (로그인/가입)
             └─ dashboard.html (대시보드)
```

### 네비바 구조 (components.js)

**드롭다운 메뉴:**
- 회사소개: 회사 소개 / CEO 소개 / 신간 서적
- 교육과정: 온라인 강의 / 오프라인 교육 / 라이브 워크숍

**직접 링크:** 프로젝트 / 인증 / 커뮤니티 / 기업서비스 / 매뉴얼

**우측:** 테마 토글 / 로그인 버튼 (또는 프로필 드롭다운)

---

## 5. JavaScript 모듈 상세

### 5.1 js/config.js (21줄) — 중앙 설정

```javascript
CONFIG = {
  SUPABASE_URL: 'https://your-project-ref.supabase.co',
  SUPABASE_ANON_KEY: 'JWT token',
  GEMINI_API_KEY: 'AIzaSy-...',
  GEMINI_MODEL: 'gemini-1.5-flash',
  APP_NAME: 'AX교육플랫폼',
  IS_DEMO: true   // 데모 모드 토글
}
```

### 5.2 js/auth.js (122줄) — 인증 모듈

| 함수 | 용도 |
|------|------|
| `Auth.init()` | localStorage에서 인증 상태 초기화 |
| `Auth.signIn(email, password)` | 이메일/비밀번호 로그인 (Supabase + 데모 폴백) |
| `Auth.signUp(email, password, userData)` | 회원가입 (역할 포함) |
| `Auth.signInWithGoogle()` | Google OAuth 로그인 |
| `Auth.signOut()` | 로그아웃 + 리다이렉트 |
| `Auth.getCurrentUser()` | 현재 사용자 객체 반환 |
| `Auth.requireAuth()` | 페이지 보호 (미인증 시 리다이렉트) |
| `Auth.updateNavUI()` | 네비바 프로필/아바타 업데이트 |
| `Auth.translateError(msg)` | 영문 에러 → 한국어 번역 |

**사용자 구조:**
```javascript
currentUser: { id, email, name, role, avatar }
// role: student | expert | mentor | admin
```

### 5.3 js/utils.js (126줄) — 유틸리티

| 함수 | 용도 |
|------|------|
| `showToast(message, type, duration)` | 토스트 알림 (success/error/info/warning) |
| `showLoading(container, text)` | 로딩 스피너 표시 |
| `formatDate(date, format)` | 날짜 포맷 (YYYY-MM-DD) |
| `timeAgo(date)` | 상대 시간 ("2시간 전") |
| `formatNumber(num)` | 숫자 포맷 (1000 → 1k) |
| `truncate(text, maxLen)` | 텍스트 말줄임 |
| `debounce(fn, wait)` | 디바운스 |
| `getParam(name)` | URL 파라미터 추출 |
| `storage.get/set/remove(key)` | localStorage 래퍼 (ax_ 접두사) |
| `getInitials(name)` | 아바타 이니셜 생성 |
| `animateCounter(el, target)` | 카운터 애니메이션 |
| `openModal(id)` / `closeModal(id)` | 모달 제어 |

### 5.4 js/theme.js (251줄) — 테마 관리

| 객체/함수 | 용도 |
|-----------|------|
| `ThemeManager.init()` | localStorage/시스템 설정에서 테마 초기화 |
| `ThemeManager.toggle()` | 라이트/다크 전환 |
| `ThemeManager.setLight/Dark()` | 테마 강제 설정 |
| `Toast.show/success/error/warning/info()` | 토스트 알림 |
| `initHamburger()` | 모바일 메뉴 토글 |
| `initScrollReveal()` | IntersectionObserver 기반 스크롤 애니메이션 |
| `initNavbarScroll()` | 네비바 스크롤 효과 |
| `initCounters()` | data-counter 요소 카운터 애니메이션 |
| `initSidebar()` | 사이드바 모바일 동작 |

### 5.5 js/components.js (455줄) — 공통 컴포넌트

- `Components.getBase()` — 페이지 위치 감지 (root vs pages/)
- `Components.currentPage()` — 현재 페이지 파일명
- `Components.navbarHTML(base)` — 전체 네비바 HTML 생성
  - 로고, 드롭다운 메뉴, 네비 링크, 테마 토글, 로그인/프로필
  - 모바일 햄버거 메뉴 + 접힘 섹션
- `Components.footerHTML(base)` — 전체 푸터 HTML 생성
  - 브랜드, 4열 푸터 (교육/커뮤니티/지원), 저작권

### 5.6 js/lms.js (621줄) — LMS 엔진

**LMS 객체 — 강의 관리:**

| 함수 | 용도 |
|------|------|
| `LMS.enroll(courseId)` | 수강 등록 (결제 처리) |
| `LMS.updateProgress(courseId, lessonId)` | 레슨 완료 업데이트 |
| `LMS.getCourseProgress(courseId)` | 강의 진도 조회 |
| `LMS.getMyCourses()` | 내 수강 목록 + 진도 |
| `LMS.filterCourses(options)` | 필터 (카테고리/레벨/가격/검색/정렬) |
| `LMS.getCategoryStats()` | 카테고리별 강의 수 |
| `LMS.renderStars(rating)` | 별점 HTML |
| `LMS.formatPrice(price)` | 가격 포맷 (무료 or ₩) |
| `LMS.toggleWishlist(courseId)` | 찜하기 |
| `LMS.canGetCertificate(courseId)` | 수료증 자격 확인 (80%+) |

**내장 강의 12개:**

| ID | 강의명 | 카테고리 | 레벨 | 가격 |
|----|--------|----------|------|------|
| 1 | AX 전환 핵심 개념 | AX이해 | 입문 | 무료 |
| 2 | Claude 마스터 클래스 | AI도구 | 중급 | ₩89,000 |
| 3 | 바이브 코딩 입문 | 바이브코딩 | 초급 | ₩59,000 |
| 4 | AI 플랫폼 설계 실전 | AI플랫폼설계 | 고급 | ₩149,000 |
| 5 | ChatGPT 실무 활용 | AI도구 | 초급 | 무료 |
| 6 | AX 컨설팅 방법론 | AX컨설팅 | 중급 | ₩119,000 |
| 7 | Gemini API 개발 | 바이브코딩 | 중급 | ₩79,000 |
| 8 | AI 윤리와 거버넌스 | AX이해 | 초급 | 무료 |
| 9 | RAG 시스템 구축 | AI플랫폼설계 | 고급 | ₩169,000 |
| 10 | 프롬프트 엔지니어링 | AI도구 | 초급 | ₩49,000 |
| 11 | AI 기반 데이터 분석 | AI플랫폼설계 | 중급 | ₩99,000 |
| 12 | AX 전략 수립 워크숍 | AX컨설팅 | 고급 | ₩199,000 |

**AXLMS 객체 — 진도 추적:**

| 함수 | 용도 |
|------|------|
| `AXLMS.updateProgress(courseId, title, progress)` | 0~100% 진도 업데이트 |
| `AXLMS.completeCourse(courseId, title)` | 수료 처리 (100%) |
| `AXLMS.getStats()` | 통계 (총/진행중/완료/평균진도) |
| `AXLMS.renderProgressBar(progress)` | 진도바 HTML |
| `AXLMS.renderStatusBadge(status)` | 상태 뱃지 HTML |

### 5.7 js/ax-knowledge.js (364줄) — RAG 지식 베이스

AI 튜터가 참조하는 한국어 지식 베이스 (Markdown 형식):

| 섹션 | 주요 내용 |
|------|----------|
| AX이해 | 플랫폼 소개, 성장 경로, 통계, 자격 등급, 동문 후기 |
| 회사소개 | 미션, 팀 구조, 연혁, 서비스 |
| CEO 소개 | 프로필, 자격, 경력, 경영 철학 |
| 온라인 강의 | 50+ 강의 카탈로그, 설명, 가격, 평점 |
| 오프라인 교육 | 워크숍 일정 (서울/부산), 가격, FAQ |
| 온라인 프로젝트 | 4개 활성 프로젝트, 팀 구성, 목표 |
| 인증 제도 | 4단계 자격 체계, 요건, 유효기간 |
| 기업 서비스 | 5개 서비스 패키지, 사례 연구, ROI |
| AI 도구 비교 | ChatGPT vs Claude vs Gemini 분석 |
| 바이브 코딩 | 정의, 3단계 프로세스, 추천 프로젝트 |
| AI 플랫폼 설계 | 7계층 아키텍처, RAG 시스템, 벡터 DB |
| AX 컨설팅 | SPIN 방법론, 성숙도 레벨, ROI 계산 |
| 프롬프트 엔지니어링 | CLEAR 프레임워크, 5가지 핵심 기법 |
| AI 윤리 | 6대 원칙, 거버넌스 체계, 한국 규제 |

### 5.8 js/ai-tutor.js (861줄) — AI 튜터 엔진

**8개 학습 주제:**

| 키 | 주제명 |
|----|--------|
| ax-basics | AX 기초 개념 |
| ai-tools | AI 도구 활용 |
| vibe-coding | 바이브 코딩 |
| platform-design | AI 플랫폼 설계 |
| ax-consulting | AX 컨설팅 |
| prompt-engineering | 프롬프트 엔지니어링 |
| ai-ethics | AI 윤리 & 거버넌스 |
| rag-systems | RAG & 지식 시스템 |

**핵심 함수:**

| 함수 | 용도 |
|------|------|
| `selectTopic(topicId)` | 주제 전환 + UI 업데이트 |
| `sendMessage(userMessage)` | 메시지 전송 → API 호출 → 응답 렌더링 |
| `callGeminiAPI(userMessage)` | Gemini API 호출 (시스템 프롬프트 포함) |
| `generateSystemPrompt()` | RAG 지식 기반 컨텍스트 프롬프트 생성 |
| `generateQuickQuestions()` | 추천 후속 질문 생성 |
| `renderMarkdown(markdown)` | 마크다운 → HTML 변환 |
| `renderChatMessage(role, content)` | 채팅 메시지 버블 렌더링 |
| `clearChat()` / `startNewChat()` | 대화 초기화 |
| `saveChat()` | 대화 .txt 파일 다운로드 |
| `shareChat()` | URL 클립보드 복사 |

**RAG 구현:**
1. `AX_KNOWLEDGE_BASE`에서 주제별 키워드 매칭으로 관련 지식 검색
2. 검색된 컨텍스트를 시스템 프롬프트에 주입
3. Gemini API 호출 (실패 시 정적 RAG 폴백)

---

## 6. CSS 디자인 시스템

### 6.1 css/variables.css — 디자인 토큰 (74줄)

**브랜드 컬러:**

| 용도 | 라이트 | 다크 |
|------|--------|------|
| Primary | #000000 | #FFFFFF |
| Accent | #FF6B35 (오렌지) | #FF6B35 |
| Accent Green | #00C896 | #00E6AA |
| Background | #FFFFFF | #0A0A0A |
| Surface | #F5F5F5 | #1A1A1A |
| Text Primary | #111111 | #F5F5F5 |
| Text Secondary | #666666 | #999999 |
| Border | #E5E5E5 | #333333 |

**상태 컬러:**

| 상태 | 색상 |
|------|------|
| Success | #10B981 |
| Warning | #F59E0B |
| Error | #EF4444 |
| Info | #3B82F6 |

**레이아웃:**

| 속성 | 값 |
|------|-----|
| Max Width | 1200px |
| Nav Height | 64px |
| Sidebar Width | 220px |
| Font | Noto Sans KR, Inter |

### 6.2 css/main.css — 메인 스타일 (1,916줄)

**주요 컴포넌트:**

| 클래스 | 용도 |
|--------|------|
| `.navbar`, `.nav-links`, `.nav-dropdown` | 네비게이션바 |
| `.mobile-menu`, `.hamburger` | 모바일 메뉴 |
| `.footer`, `.footer-grid`, `.footer-brand` | 푸터 |
| `.btn`, `.btn-primary`, `.btn-outline` | 버튼 |
| `.card`, `.widget` | 카드/위젯 |
| `.modal`, `.modal-content` | 모달 |
| `.alert`, `.badge`, `.tag` | 알림/뱃지/태그 |
| `.progress-bar` | 진도바 |

**반응형 브레이크포인트:** 1024px (태블릿), 768px (모바일), 480px (소형 모바일)

### 6.3 css/sidebar.css — 사이드바/대시보드 (710줄)

**주요 컴포넌트:**

| 클래스 | 용도 |
|--------|------|
| `.sidebar` | 220px 사이드바 (다크 배경) |
| `.sidebar-nav`, `.sidebar-item` | 사이드바 네비게이션 |
| `.sidebar-submenu` | 하위 메뉴 |
| `.app-layout`, `.app-main` | 앱 레이아웃 |
| `.app-header` | 스티키 상단바 |
| `.dashboard-grid` | 대시보드 그리드 (4열/3열/2열) |
| `.stat-widget` | 통계 위젯 |
| `.course-progress-item` | 강의 진도 아이템 |
| `.activity-item` | 활동 피드 아이템 |

---

## 7. 데이터베이스 스키마 (Supabase)

### 15개 테이블

#### users — 사용자
```sql
id              UUID PRIMARY KEY
auth_id         UUID          -- Supabase Auth 참조
name            TEXT
email           TEXT
role            TEXT          -- student | expert | mentor | admin
organization    TEXT
experience_level TEXT         -- beginner | intermediate | advanced | expert
avatar_url      TEXT
bio             TEXT
phone           TEXT
created_at, updated_at TIMESTAMPTZ
```

#### courses — 강의
```sql
id              SERIAL PRIMARY KEY
title           TEXT
description     TEXT
category        TEXT          -- AX이해 | AI도구 | 바이브코딩 | AI플랫폼설계 | AX컨설팅
level           TEXT          -- 입문 | 초급 | 중급 | 고급
instructor_id   UUID FK → users
thumbnail_url   TEXT
price           INTEGER
is_free         BOOLEAN
is_published    BOOLEAN
total_lessons   INTEGER
total_students  INTEGER
rating          DECIMAL
created_at, updated_at TIMESTAMPTZ
```

#### lessons — 레슨
```sql
id              SERIAL PRIMARY KEY
course_id       INTEGER FK → courses
title           TEXT
description     TEXT
video_url       TEXT
duration_minutes INTEGER
lesson_order    INTEGER
is_free_preview BOOLEAN
materials_url   TEXT
```

#### enrollments — 수강 등록
```sql
user_id         UUID FK → users
course_id       INTEGER FK → courses
progress        INTEGER (0-100)  -- 진도율
completed       BOOLEAN
completed_at    TIMESTAMPTZ
UNIQUE(user_id, course_id)
```

#### lesson_progress — 레슨 진도
```sql
user_id         UUID FK → users
lesson_id       INTEGER FK → lessons
completed       BOOLEAN
completed_at    TIMESTAMPTZ
UNIQUE(user_id, lesson_id)
```

#### assignments — 과제
```sql
id              SERIAL PRIMARY KEY
course_id       INTEGER FK → courses
title           TEXT
description     TEXT
deadline        TIMESTAMPTZ
max_score       INTEGER DEFAULT 100
```

#### submissions — 과제 제출
```sql
assignment_id   INTEGER FK → assignments
user_id         UUID FK → users
content         TEXT
file_url        TEXT
score           INTEGER
feedback        TEXT
submitted_at, reviewed_at TIMESTAMPTZ
UNIQUE(assignment_id, user_id)
```

#### projects — 프로젝트
```sql
id              SERIAL PRIMARY KEY
title           TEXT
description     TEXT
type            TEXT          -- practice | enterprise
status          TEXT          -- open | in_progress | completed | closed
max_members     INTEGER
current_members INTEGER
tech_stack      TEXT[]        -- 배열
creator_id      UUID FK → users
deadline        TIMESTAMPTZ
```

#### project_members — 프로젝트 멤버
```sql
project_id      INTEGER FK → projects
user_id         UUID FK → users
role            TEXT          -- leader | developer | analyst | strategist | member
joined_at       TIMESTAMPTZ
UNIQUE(project_id, user_id)
```

#### certifications — 자격 인증
```sql
id              SERIAL PRIMARY KEY
user_id         UUID FK → users
level           TEXT          -- AX_Practitioner | AX_Builder | AX_Architect | AX_Strategist
status          TEXT          -- pending | in_progress | passed | failed
score           INTEGER
issued_at       TIMESTAMPTZ
expires_at      TIMESTAMPTZ   -- 2년 유효
certificate_url TEXT
```

#### workshops — 워크숍
```sql
id              SERIAL PRIMARY KEY
title           TEXT
description     TEXT
type            TEXT          -- offline | online | hybrid
location        TEXT
start_date, end_date TIMESTAMPTZ
capacity        INTEGER
registered_count INTEGER
price           INTEGER
instructor_id   UUID FK → users
```

#### workshop_registrations — 워크숍 등록
```sql
workshop_id     INTEGER FK → workshops
user_id         UUID FK → users
status          TEXT          -- pending | confirmed | cancelled
payment_status  TEXT          -- unpaid | paid | refunded
UNIQUE(workshop_id, user_id)
```

#### expert_profiles — 전문가 프로필
```sql
user_id         UUID FK → users (UNIQUE)
title           TEXT
skills          TEXT[]        -- 배열
experience_years INTEGER
portfolio_url   TEXT
github_url      TEXT
linkedin_url    TEXT
hourly_rate     INTEGER
availability    TEXT          -- available | busy | unavailable
project_count   INTEGER
```

#### enterprise_projects — 기업 프로젝트
```sql
id              SERIAL PRIMARY KEY
company_name    TEXT
contact_name    TEXT
contact_email   TEXT
project_title   TEXT
description     TEXT
project_types   TEXT[]        -- 배열
budget_range    TEXT
timeline        TEXT
status          TEXT          -- submitted | reviewing | matched | in_progress | completed
assigned_experts UUID[]       -- 배열
```

#### posts — 커뮤니티 게시글
```sql
id              SERIAL PRIMARY KEY
author_id       UUID FK → users
category        TEXT          -- QA | 프로젝트모집 | 스터디 | 사례공유 | 자유
title           TEXT
content         TEXT
views           INTEGER DEFAULT 0
likes           INTEGER DEFAULT 0
comment_count   INTEGER DEFAULT 0
tags            TEXT[]        -- 배열
created_at, updated_at TIMESTAMPTZ
```

### 인덱스 (10개)

| 인덱스 | 대상 |
|--------|------|
| idx_users_email | users.email |
| idx_users_role | users.role |
| idx_courses_category | courses.category |
| idx_courses_published | courses.is_published |
| idx_lessons_course | lessons.course_id |
| idx_enrollments_user | enrollments.user_id |
| idx_enrollments_course | enrollments.course_id |
| idx_projects_status | projects.status |
| idx_certifications_user | certifications.user_id |
| idx_posts_category_date | posts(category, created_at DESC) |

### RLS (Row Level Security) 정책

| 테이블 | SELECT | INSERT | UPDATE |
|--------|--------|--------|--------|
| users | 전체 허용 | — | 본인만 |
| courses | 발행됨 or 인증됨 | — | — |
| enrollments | 본인만 | — | — |
| certifications | 본인만 | — | — |
| posts | 전체 허용 | 인증됨 | 본인만 |

---

## 8. AX 자격 인증 체계

| 등급 | 이름 | 색상 | 요건 |
|------|------|------|------|
| Level 1 | AX Practitioner | 동 (Bronze) | 입문 과정 이수 + 시험 60점+ |
| Level 2 | AX Builder | 은 (Silver) | Level 1 + 중급 과정 + 프로젝트 1개 + 시험 70점+ |
| Level 3 | AX Architect | 금 (Gold) | Level 2 + 고급 과정 + 프로젝트 3개 + 시험 80점+ |
| Level 4 | AX Strategist | 백금 (Platinum) | Level 3 + 기업 프로젝트 + 포트폴리오 + 면접 |

- **유효기간**: 2년
- **갱신**: CPE (Continuing Professional Education) 이수

---

## 9. 기업 서비스 5종

| 서비스 | 내용 |
|--------|------|
| AX 전략 수립 | 기업 AX 로드맵 설계, 성숙도 진단 |
| AI 플랫폼 구축 | 맞춤형 AI 시스템 개발, RAG 시스템 |
| 업무 자동화 | RPA + AI 기반 프로세스 자동화 |
| AI 분석 | 데이터 분석, 예측 모델링 |
| AI 개발 | 커스텀 AI 모델/앱 개발 |

- **전문가 매칭**: 247+ 전문가 디렉토리
- **문의**: EmailJS 통합 폼
- **ROI 보증**: 투자 대비 성과 보장

---

## 10. 배포 및 인프라

### Vercel 설정 (vercel.json)

```json
{
  "name": "ax-education-platform",
  "cleanUrls": true,
  "trailingSlash": false,
  "headers": [보안 헤더, Cache-Control],
  "rewrites": [/app/ → /pages/ 리라이트 3건]
}
```

### 빌드 스크립트

| 스크립트 | 용도 |
|----------|------|
| `scripts/generate-manual-pdf.js` | Puppeteer로 매뉴얼 HTML → PDF 변환 |
| `scripts/setup-hooks.js` | Git pre-commit 훅 자동 설치 |
| `scripts/sync-to-root.js` | 스테이지 폴더(S1~S5) → 루트 자동 동기화 |

---

## 11. 페이지 용량 현황

| 파일 | 용량 | 비고 |
|------|------|------|
| pages/manual.html | 54KB | 최대 (문서) |
| pages/projects.html | 54KB | 최대 (마켓플레이스) |
| pages/course-detail.html | 45KB | |
| pages/enterprise.html | 43KB | |
| pages/community.html | 37KB | |
| pages/expert-profile.html | 36KB | |
| pages/certification.html | 35KB | |
| pages/ceo.html | 28KB | |
| index.html | 28KB | |
| pages/courses.html | 24KB | |
| pages/workshops.html | 23KB | |
| pages/about.html | 21KB | |
| pages/qna.html | 21KB | |
| pages/ai-tutor.html | 17KB | |
| pages/dashboard.html | 16KB | |
| pages/online-courses.html | 15KB | |
| pages/offline-courses.html | 14KB | |
| pages/auth.html | 13KB | |
| pages/books.html | 13KB | |
| pages/online-projects.html | 12KB | |
| pages/sitemap.html | 6KB | 최소 |
| **HTML 합계** | **~525KB** | 21개 파일 |
| js/ (8개 파일) | ~200KB | 2,821줄 |
| css/ (3개 파일) | ~150KB | 2,700줄 |
| supabase/schema.sql | ~10KB | 269줄 |

---

## 12. SAL Grid Dev Suite (별도 모듈)

`SAL_Grid_Dev_Suite/` 디렉토리에 포함된 프로젝트 관리 도구:

- **manual/**: 매뉴얼 HTML (데스크톱 + 모바일)
- **viewer/**: JSON 뷰어
- **method/json/data/**: 그리드 레코드 (S1~S4 스테이지별 태스크)
- **sal-grid/**: 참조 데이터 (ChatGPT 생성 + DevPackage 제공)
- **Human_ClaudeCode_Bridge/**: 브릿지 서버 (bridge_server.js)

---

## 13. 저작권 및 라이선스

- **플랫폼명**: AX EDU GROUP
- **저작자**: 심재우
- **저작권**: (c) 2026 AX EDU GROUP. All Rights Reserved.
- **관련 브랜드**: AC에듀그룹, 질문수학
