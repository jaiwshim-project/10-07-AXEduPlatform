# S4BI1 검증: Supabase 프로젝트 설정

## 검증 에이전트: devops-troubleshooter-기본

## 검증 항목
- [ ] config.js에 실제 Supabase URL 설정 (placeholder 제거)
- [ ] Supabase 연결 테스트: `supabase.from('users').select('count')` → 200 응답
- [ ] .env.local 파일 생성 및 값 설정
- [ ] .gitignore에 .env.local 포함

## 결과 형식
```json
{
  "task_id": "S4BI1",
  "verification_result": "Verified/Needs Fix",
  "blockers": { "count": 0, "items": [] }
}
```
