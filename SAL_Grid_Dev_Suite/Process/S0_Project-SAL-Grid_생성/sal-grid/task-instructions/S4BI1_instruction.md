# S4BI1: Supabase 프로젝트 설정 및 환경변수 적용

## Task 정보
- **Task ID**: S4BI1
- **Task Name**: Supabase 프로젝트 설정 및 환경변수 적용
- **Stage**: S4 (Supabase 실 연동 & 배포)
- **Area**: BI (Backend Infrastructure)
- **Dependencies**: S3DB1
- **Execution Type**: Human-AI (PO 참여 필요)
- **Task Agent**: backend-developer-기본

## Task 목표
Supabase 프로젝트의 실제 URL과 API 키를 config.js에 적용하여 백엔드 인프라를 실제 운영 상태로 전환

## PO 필요 작업
1. Supabase 대시보드 접속 (https://supabase.com/dashboard)
2. 프로젝트 선택 → Settings → API
3. 다음 값 확인 및 제공:
   - `SUPABASE_URL`: https://[프로젝트ID].supabase.co
   - `SUPABASE_ANON_KEY`: eyJ... (anon public key)

## AI 작업
1. `assets/js/config.js` 수정:
   - SUPABASE_URL, SUPABASE_ANON_KEY 실제 값으로 교체
   - Mock 설정 제거
2. `.env.local` 파일 생성 (환경변수 관리)
3. `.gitignore`에 `.env.local` 추가 확인

## 생성/수정 파일
- `assets/js/config.js` (수정)
- `.env.local` (신규, gitignore됨)

## 완료 기준
- [ ] config.js에 실제 Supabase URL/Key 적용
- [ ] Supabase 연결 테스트 성공 (ping)
- [ ] .env.local 생성 완료
- [ ] .gitignore에 .env.local 포함 확인
