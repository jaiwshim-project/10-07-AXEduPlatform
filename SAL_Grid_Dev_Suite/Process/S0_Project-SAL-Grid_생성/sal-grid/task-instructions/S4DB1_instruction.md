# S4DB1: Supabase schema.sql 마이그레이션 실행

## Task 정보
- **Task ID**: S4DB1
- **Task Name**: Supabase schema.sql 마이그레이션 실행
- **Stage**: S4 (Supabase 실 연동 & 배포)
- **Area**: DB (Database)
- **Dependencies**: S4BI1
- **Execution Type**: Human-AI (PO 참여 필요)
- **Task Agent**: database-developer-기본

## Task 목표
기존 `assets/js/schema.sql` 파일을 Supabase SQL Editor에서 실행하여 DB 테이블 및 인덱스를 생성

## PO 필요 작업
1. Supabase 대시보드 → SQL Editor 접속
2. `assets/js/schema.sql` 파일 내용 전체 복사
3. SQL Editor에 붙여넣기 후 실행
4. 테이블 생성 확인 (Table Editor에서 확인)

## AI 작업
1. `assets/js/schema.sql` 파일 검토 및 필요 시 수정
2. 마이그레이션 가이드 문서 작성
3. 실행 후 테이블 구조 검증 쿼리 제공

## 생성/수정 파일
- `Process/S4_개발_마무리/Database/S4DB1_migration_guide.md` (가이드 문서)

## 완료 기준
- [ ] schema.sql 파일 존재 및 유효성 확인
- [ ] Supabase에 모든 테이블 생성 완료
- [ ] 인덱스 및 RLS 기본 설정 확인
- [ ] 마이그레이션 가이드 문서 생성
