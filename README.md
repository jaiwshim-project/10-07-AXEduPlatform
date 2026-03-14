# AX교육플랫폼

AI 전환(AX) 전문가 양성 생태계 플랫폼

## 개요

교육 → 인증 → 커뮤니티 → AX 프로젝트까지 이어지는 한국 최초 AX 전문가 생태계 플랫폼.

한국형 Palantir + Accenture + 교육 플랫폼 결합 모델.

## 기술 스택

- **Frontend**: Vanilla HTML/CSS/JavaScript
- **Database/Auth**: Supabase (PostgreSQL + Auth + Storage)
- **AI**: Google Gemini API (1.5-flash)
- **배포**: Vercel
- **디자인**: 커스텀 CSS 디자인 시스템

## 프로젝트 구조

```
10-7 AX교육플랫폼/
├── index.html              # 메인 랜딩 페이지
├── pages/
│   ├── auth.html           # 로그인/회원가입
│   ├── dashboard.html      # 사용자 대시보드
│   ├── courses.html        # 강의 목록
│   ├── course-detail.html  # 강의 상세
│   ├── projects.html       # 프로젝트
│   ├── certification.html  # AX 인증
│   ├── workshops.html      # 오프라인 워크숍
│   ├── ai-tutor.html       # AI 튜터 챗봇
│   ├── community.html      # 커뮤니티
│   ├── expert-profile.html # 전문가 프로필
│   ├── enterprise.html     # 기업 서비스
│   ├── manual.html         # 매뉴얼
│   └── sitemap.html        # 사이트맵
├── css/
│   ├── variables.css       # CSS 변수 시스템
│   └── main.css            # 메인 스타일시트
├── js/
│   ├── config.js           # Supabase/Gemini 설정
│   ├── utils.js            # 공통 유틸리티
│   ├── auth.js             # 인증 모듈
│   ├── ai-tutor.js         # AI 튜터 모듈
│   ├── lms.js              # LMS 모듈
│   └── theme.js            # 테마 관리
├── images/
│   ├── architecture.svg    # 시스템 아키텍처 SVG
│   └── ecosystem.svg       # 생태계 플로우 SVG
├── supabase/
│   └── schema.sql          # DB 스키마 + 샘플 데이터
├── .env.example            # 환경변수 예시
├── vercel.json             # Vercel 배포 설정
└── README.md               # 이 파일
```

## 시작하기

### 1. 환경 설정

```bash
# .env.example을 복사
cp .env.example .env

# .env 파일에 실제 키 입력:
# - SUPABASE_URL
# - SUPABASE_ANON_KEY
# - GEMINI_API_KEY
```

### 2. Supabase 설정

1. [Supabase](https://supabase.com)에서 새 프로젝트 생성
2. SQL 에디터에서 `supabase/schema.sql` 실행
3. Authentication > Providers에서 Google OAuth 활성화 (선택)
4. `.env`에 URL과 Anon Key 입력

### 3. js/config.js 수정

```javascript
const CONFIG = {
  SUPABASE_URL: 'your-actual-supabase-url',
  SUPABASE_ANON_KEY: 'your-actual-anon-key',
  GEMINI_API_KEY: 'your-actual-gemini-key',
  IS_DEMO: false  // 실제 키 사용 시 false로 변경
};
```

### 4. 로컬 실행

```bash
# Node.js serve
npx serve .

# 또는 Python
python -m http.server 3000

# 브라우저에서 http://localhost:3000 접속
```

### 5. Vercel 배포

```bash
# Vercel CLI
npx vercel

# 또는 GitHub 연동 후 자동 배포
```

## 주요 기능

| 기능 | 설명 |
|------|------|
| 🎓 LMS | 50개 강의, 진도 추적, 과제 제출 |
| 🤖 AI 튜터 | Gemini API + RAG 기반 맞춤 학습 지원 |
| 🏅 인증 | 4단계 AX 전문가 인증 시스템 |
| 👥 커뮤니티 | 게시판, Q&A, 프로젝트 모집 |
| 🏢 기업 서비스 | AX 프로젝트 의뢰 + 전문가 매칭 |
| 🌙 다크 모드 | 라이트/다크 테마 전환 |
| 📱 반응형 | 모바일 완전 대응 |

## 개발 기간

2026년 3월 14일 — VCOS 기반 AI 팀 개발

## 라이선스

© 2026 AX교육플랫폼. All rights reserved.
