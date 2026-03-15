# S4TS1: 핵심 기능 통합 테스트

## Task 정보
- **Task ID**: S4TS1
- **Stage**: S4 | **Area**: TS | **Dependencies**: S4BA1, S4BA2
- **Execution Type**: AI-Only
- **Task Agent**: test-runner-기본

## Task 목표
Supabase 실 연동 후 핵심 기능의 End-to-End 통합 테스트 수행

## 테스트 범위
1. 인증 플로우:
   - 회원가입 → 이메일 확인 → 로그인 → 로그아웃
   - Google OAuth 로그인
2. 강의 수강:
   - 강의 목록 조회 (DB에서 로드)
   - 수강 신청
   - 대시보드에서 수강 현황 확인
3. AI 튜터:
   - 질문 입력 → Gemini API 응답 확인
4. 자격증:
   - 수료 조건 완료 → 자격증 발급 확인

## 생성 파일
- `SAL_Grid_Dev_Suite/Process/S4_개발_마무리/Testing/integration-test-report.md`

## 완료 기준
- [ ] 인증 플로우 E2E 통과
- [ ] DB CRUD 작동 확인
- [ ] AI 튜터 응답 확인
- [ ] 자격증 발급 확인
