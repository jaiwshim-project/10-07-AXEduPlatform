# S4SC1: RLS(Row Level Security) 정책 설정

## Task 정보
- **Task ID**: S4SC1
- **Task Name**: RLS(Row Level Security) 정책 설정
- **Stage**: S4 (Supabase 실 연동 & 배포)
- **Area**: SC (Security)
- **Dependencies**: S4DB1
- **Execution Type**: AI-Only
- **Task Agent**: security-specialist-기본

## Task 목표
Supabase 테이블에 Row Level Security 정책을 설정하여 사용자별 데이터 접근 제어 구현

## AI 작업
1. 각 테이블별 RLS 정책 SQL 작성:
   - users: 본인 데이터만 읽기/수정
   - enrollments: 본인 수강 정보만 접근
   - course_progress: 본인 학습 진도만 접근
   - ai_interactions: 본인 AI 대화만 접근
2. RLS SQL 파일 생성 (`assets/js/rls_policies.sql`)
3. Supabase에서 실행 가이드 제공

## 생성/수정 파일
- `Process/S4_개발_마무리/Security/rls_policies.sql`
- `assets/js/rls_policies.sql` (Production용)

## 완료 기준
- [ ] 모든 주요 테이블에 RLS 활성화
- [ ] 정책 SQL 파일 생성
- [ ] 권한 테스트 케이스 작성
- [ ] Supabase 실행 가이드 포함
