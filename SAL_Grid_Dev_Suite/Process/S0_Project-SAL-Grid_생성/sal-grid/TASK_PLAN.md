# AX교육플랫폼 - Task Plan

> **작성일**: 2026-03-15
> **수정일**: 2026-03-15
> **버전**: v1.0
> **프로젝트**: AX교육플랫폼 (AI 전환 전문가 양성 생태계)
> **총 Task 수**: 29개
> **아키텍처**: Vanilla (HTML/CSS/JavaScript)
> **도입 방식**: 소급 도입 (S1~S3 소급 Completed, S4 신규 개발)

---

## Stage별 Task 수

| Stage | 한글명 | Task 수 | 상태 |
|-------|--------|---------|------|
| S0 | Project SAL Grid 생성 | - | 소급 |
| S1 | 디자인시스템 & 기반구조 | 5 | 소급 Completed |
| S2 | 정적 페이지 구현 | 8 | 소급 Completed |
| S3 | 기능 모듈 & DB 설계 | 8 | 소급 Completed |
| S4 | Supabase 실 연동 & 배포 | 8 | 신규 Pending |
| **합계** | | **29** | |

---

## Area별 분포

| Area | S1 | S2 | S3 | S4 | 합계 |
|------|----|----|----|----|------|
| FE (Frontend) | 1 | 5 | 5 | 0 | 11 |
| BA (Backend APIs) | 1 | 2 | 2 | 2 | 7 |
| DB (Database) | 0 | 0 | 1 | 1 | 2 |
| SC (Security) | 0 | 0 | 0 | 1 | 1 |
| BI (Backend Infra) | 1 | 0 | 0 | 2 | 3 |
| EX (External) | 0 | 0 | 0 | 1 | 1 |
| TS (Testing) | 0 | 0 | 0 | 1 | 1 |
| DV (DevOps) | 0 | 0 | 0 | 1 | 1 |
| DS (Design) | 2 | 1 | 0 | 0 | 3 |
| DC (Documentation) | 0 | 0 | 0 | 0 | 0 |
| CS (Content System) | 0 | 0 | 0 | 0 | 0 |
| **합계** | **5** | **8** | **8** | **8** | **29** |

---

## S1 — 디자인시스템 & 기반구조 (소급 Completed)

| Task ID | Task명 | Area | Dependencies | 상태 |
|---------|--------|------|-------------|------|
| S1DS1 | CSS 변수 시스템 구축 (variables.css) | DS | - | 소급 Completed |
| S1DS2 | 공통 레이아웃 구현 (main.css, sidebar.css) | DS | S1DS1 | 소급 Completed |
| S1FE1 | 공통 컴포넌트 라이브러리 (components.js) | FE | S1DS1 | 소급 Completed |
| S1BA1 | 핵심 유틸리티 모듈 (utils.js, theme.js) | BA | - | 소급 Completed |
| S1BI1 | 설정 및 Supabase 클라이언트 초기화 (config.js) | BI | - | 소급 Completed |

---

## S2 — 정적 페이지 구현 (소급 Completed)

| Task ID | Task명 | Area | Dependencies | 상태 |
|---------|--------|------|-------------|------|
| S2FE1 | 메인 홈 페이지 (index.html) | FE | S1DS2, S1FE1 | 소급 Completed |
| S2FE2 | 인증 페이지 (auth.html) | FE | S1DS2, S1FE1 | 소급 Completed |
| S2FE3 | 강의 목록 페이지 (courses.html, online/offline) | FE | S1DS2, S1FE1 | 소급 Completed |
| S2FE4 | 강의 상세 & 워크숍 (course-detail.html, workshops.html) | FE | S1DS2, S1FE1 | 소급 Completed |
| S2FE5 | 대시보드 (dashboard.html) | FE | S1DS2, S1FE1 | 소급 Completed |
| S2DS1 | 로고 & 이미지 에셋 | DS | S1DS1 | 소급 Completed |
| S2BA1 | LMS 모듈 (lms.js) | BA | S1BA1, S1BI1 | 소급 Completed |
| S2BA2 | 인증 모듈 (auth.js) | BA | S1BA1, S1BI1 | 소급 Completed |

---

## S3 — 기능 모듈 & DB 설계 (소급 Completed)

| Task ID | Task명 | Area | Dependencies | 상태 |
|---------|--------|------|-------------|------|
| S3FE1 | AI 튜터 페이지 (ai-tutor.html) | FE | S1DS2, S1FE1 | 소급 Completed |
| S3FE2 | 인증/자격증 페이지 (certification.html) | FE | S1DS2, S1FE1 | 소급 Completed |
| S3FE3 | 커뮤니티 & Q&A (community.html, qna.html) | FE | S1DS2, S1FE1 | 소급 Completed |
| S3FE4 | 전문가/프로젝트 (expert-profile.html, projects.html, online-projects.html) | FE | S1DS2, S1FE1 | 소급 Completed |
| S3FE5 | 기업/회사소개 & 기타 (enterprise.html, about.html, ceo.html, manual.html, sitemap.html) | FE | S1DS2, S1FE1 | 소급 Completed |
| S3BA1 | AI 튜터 모듈 (ai-tutor.js) | BA | S1BA1, S1BI1 | 소급 Completed |
| S3BA2 | AX Knowledge 모듈 (ax-knowledge.js) | BA | S1BA1 | 소급 Completed |
| S3DB1 | Supabase 데이터베이스 스키마 설계 (schema.sql) | DB | S1BI1 | 소급 Completed |

---

## S4 — Supabase 실 연동 & 배포 (신규 Pending)

| Task ID | Task명 | Area | Dependencies | 상태 |
|---------|--------|------|-------------|------|
| S4BI1 | Supabase 프로젝트 설정 및 환경변수 적용 | BI | S3DB1 | Pending |
| S4DB1 | Supabase schema.sql 마이그레이션 실행 | DB | S4BI1 | Pending |
| S4SC1 | RLS(Row Level Security) 정책 설정 | SC | S4DB1 | Pending |
| S4BA1 | auth.js Supabase 실 인증 연결 | BA | S4BI1, S4DB1 | Pending |
| S4BA2 | Gemini API 실 연결 (ai-tutor.js 업데이트) | BA | S4BI1 | Pending |
| S4EX1 | Supabase Storage 설정 (파일 업로드) | EX | S4BI1 | Pending |
| S4TS1 | 핵심 기능 통합 테스트 | TS | S4BA1, S4BA2 | Pending |
| S4DV1 | Vercel 배포 최적화 및 환경변수 설정 | DV | S4BI1 | Pending |

---

## 의존성 검증 (DAG)

```
S1DS1 -> S1DS2 -> S2FE1~5, S3FE1~5
S1FE1 -> S2FE1~5, S3FE1~5
S1BA1 -> S2BA1, S2BA2, S3BA1, S3BA2
S1BI1 -> S2BA1, S2BA2, S3BA1, S3DB1

S3DB1 -> S4BI1 -> S4DB1 -> S4SC1
                         -> S4BA1
               -> S4BA2
               -> S4EX1
               -> S4DV1

S4BA1, S4BA2 -> S4TS1
```

- 역방향 의존성 없음
- 순환 의존성 없음
- 모든 참조 Task 존재

---

## 변경 이력

| 버전 | 날짜 | 변경 내용 |
|------|------|----------|
| v1.0 | 2026-03-15 | 최초 생성 (소급 도입 모드) |
