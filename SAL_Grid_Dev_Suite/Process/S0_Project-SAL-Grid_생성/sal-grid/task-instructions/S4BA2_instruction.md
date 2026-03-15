# S4BA2: Gemini API 실 연결 (ai-tutor.js 업데이트)

## Task 정보
- **Task ID**: S4BA2
- **Task Name**: Gemini API 실 연결 (ai-tutor.js 업데이트)
- **Stage**: S4 (Supabase 실 연동 & 배포)
- **Area**: BA (Backend APIs)
- **Dependencies**: S4BI1
- **Execution Type**: Human-AI (PO 참여 필요)
- **Task Agent**: backend-developer-기본

## Task 목표
기존 mock/하드코딩된 AI 튜터 기능을 실제 Google Gemini 1.5 Flash API와 연결

## PO 필요 작업
1. Google AI Studio (aistudio.google.com) 접속
2. API 키 발급
3. `config.js`에 `GEMINI_API_KEY` 추가

## AI 작업
1. `api/External/ai-tutor.js` (또는 유사 파일) 검토
2. Gemini 1.5 Flash API 실 연결:
   - `@google/generative-ai` 패키지 또는 fetch API 사용
   - 시스템 프롬프트 설정 (AI 전환 교육 전문가)
   - 스트리밍 응답 처리
3. Mock 데이터 제거
4. Rate limiting 및 에러 처리 추가

## 생성/수정 파일
- `Process/S4_개발_마무리/Backend_APIs/ai-tutor.js` (수정)
- `api/External/ai-tutor.js` (자동 복사됨)

## 완료 기준
- [ ] Gemini API 실제 연결 완료
- [ ] AI 튜터 대화 기능 작동
- [ ] Mock 코드 완전 제거
- [ ] 에러 처리 및 Rate limit 적용
