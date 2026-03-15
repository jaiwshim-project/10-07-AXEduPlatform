# S4EX1: Supabase Storage 설정 (파일 업로드)

## Task 정보
- **Task ID**: S4EX1
- **Stage**: S4 | **Area**: EX | **Dependencies**: S4BI1
- **Execution Type**: AI-Only
- **Task Agent**: backend-developer-기본

## Task 목표
Supabase Storage 버킷 설정 및 파일 업로드/다운로드 기능 구현

## 세부 작업
1. Supabase Storage 버킷 생성:
   - `avatars` — 사용자 프로필 이미지
   - `certificates` — 자격증 파일
   - `course-materials` — 강의 자료
2. Storage 정책 설정 (인증된 사용자만 업로드)
3. `assets/js/storage.js` 신규 생성:
   - 파일 업로드 함수
   - 파일 URL 조회 함수
   - 파일 삭제 함수

## 생성/수정 파일
- `assets/js/storage.js` (신규)
- Stage 저장: `SAL_Grid_Dev_Suite/Process/S4_개발_마무리/External/storage.js`

## 완료 기준
- [ ] Storage 버킷 3개 생성
- [ ] 파일 업로드 테스트 성공
- [ ] 공개 URL 접근 확인
