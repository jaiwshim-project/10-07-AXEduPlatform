# S4DV1: Vercel 배포 최적화 및 환경변수 설정

## Task 정보
- **Task ID**: S4DV1
- **Stage**: S4 | **Area**: DV | **Dependencies**: S4BI1
- **Execution Type**: Human-AI (PO의 Vercel 계정 필요)
- **Task Agent**: devops-troubleshooter-기본

## PO 필요 작업
1. Vercel 계정 준비 (https://vercel.com)
2. GitHub 레포지토리 연결
3. 환경변수 설정:
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`
   - `GEMINI_API_KEY`

## AI 작업
1. `vercel.json` 설정 파일 생성:
   - 정적 파일 라우팅 설정
   - API 함수 설정 (필요 시)
2. `scripts/sync-to-root.js` 경로 검증
3. 배포 전 최종 파일 점검:
   - 404.html 존재 확인
   - assets/ 최적화 확인

## 생성/수정 파일
- `vercel.json` (신규)
- Stage 저장: `SAL_Grid_Dev_Suite/Process/S4_개발_마무리/DevOps/`

## 완료 기준
- [ ] vercel.json 설정 완료
- [ ] Vercel 배포 성공
- [ ] 환경변수 Vercel에 설정
- [ ] 프로덕션 URL에서 정상 작동 확인
