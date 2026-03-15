# S4BA1: auth.js Supabase 실 인증 연결

## Task 정보
- **Task ID**: S4BA1
- **Task Name**: auth.js Supabase 실 인증 연결
- **Stage**: S4 (Supabase 실 연동 & 배포)
- **Area**: BA (Backend APIs)
- **Dependencies**: S4BI1, S4DB1
- **Execution Type**: AI-Only
- **Task Agent**: backend-developer-기본

## Task 목표
기존 mock/하드코딩된 auth.js를 실제 Supabase 인증 (Supabase Auth)과 연결

## AI 작업
1. `api/Security/auth.js` 검토
2. Supabase 클라이언트 import 및 실 인증 연결:
   - supabase.auth.signInWithOAuth (Google)
   - supabase.auth.signOut
   - supabase.auth.getSession
   - supabase.auth.onAuthStateChange
3. Mock 인증 로직 제거
4. 에러 처리 강화

## 생성/수정 파일
- `Process/S4_개발_마무리/Backend_APIs/auth.js` (수정)
- `api/Security/auth.js` (자동 복사됨)

## 완료 기준
- [ ] Supabase Auth 실제 연결 완료
- [ ] Google OAuth 플로우 작동
- [ ] 세션 관리 정상 작동
- [ ] Mock 코드 완전 제거
