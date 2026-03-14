-- AX교육플랫폼 데이터베이스 스키마 v1.0
-- 생성일: 2026-03-14

-- UUID 확장
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ===== 사용자 테이블 =====
CREATE TABLE IF NOT EXISTS public.users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  auth_id UUID UNIQUE,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  role VARCHAR(20) DEFAULT 'student' CHECK (role IN ('student', 'expert', 'mentor', 'admin')),
  organization VARCHAR(200),
  experience_level VARCHAR(20) DEFAULT 'beginner' CHECK (experience_level IN ('beginner','intermediate','advanced','expert')),
  avatar_url TEXT,
  bio TEXT,
  phone VARCHAR(20),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ===== 강의 테이블 =====
CREATE TABLE IF NOT EXISTS public.courses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(200) NOT NULL,
  description TEXT,
  category VARCHAR(50) NOT NULL CHECK (category IN ('AX이해','AI도구','바이브코딩','AI플랫폼설계','AX컨설팅')),
  level VARCHAR(20) DEFAULT 'beginner' CHECK (level IN ('beginner','intermediate','advanced')),
  instructor_id UUID REFERENCES public.users(id),
  thumbnail_url TEXT,
  price INTEGER DEFAULT 0,
  is_free BOOLEAN DEFAULT TRUE,
  is_published BOOLEAN DEFAULT FALSE,
  total_lessons INTEGER DEFAULT 0,
  total_students INTEGER DEFAULT 0,
  rating DECIMAL(3,2) DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ===== 강의 레슨 테이블 =====
CREATE TABLE IF NOT EXISTS public.lessons (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  course_id UUID NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
  title VARCHAR(200) NOT NULL,
  description TEXT,
  video_url TEXT,
  duration_minutes INTEGER DEFAULT 0,
  lesson_order INTEGER NOT NULL,
  is_free_preview BOOLEAN DEFAULT FALSE,
  materials_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ===== 수강 신청 테이블 =====
CREATE TABLE IF NOT EXISTS public.enrollments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  course_id UUID NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
  progress DECIMAL(5,2) DEFAULT 0,
  completed BOOLEAN DEFAULT FALSE,
  completed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, course_id)
);

-- ===== 레슨 진도 테이블 =====
CREATE TABLE IF NOT EXISTS public.lesson_progress (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  lesson_id UUID NOT NULL REFERENCES public.lessons(id) ON DELETE CASCADE,
  completed BOOLEAN DEFAULT FALSE,
  completed_at TIMESTAMPTZ,
  UNIQUE(user_id, lesson_id)
);

-- ===== 과제 테이블 =====
CREATE TABLE IF NOT EXISTS public.assignments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  course_id UUID NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
  title VARCHAR(200) NOT NULL,
  description TEXT,
  deadline TIMESTAMPTZ,
  max_score INTEGER DEFAULT 100,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ===== 과제 제출 테이블 =====
CREATE TABLE IF NOT EXISTS public.submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  assignment_id UUID NOT NULL REFERENCES public.assignments(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  content TEXT,
  file_url TEXT,
  score INTEGER,
  feedback TEXT,
  submitted_at TIMESTAMPTZ DEFAULT NOW(),
  reviewed_at TIMESTAMPTZ,
  UNIQUE(assignment_id, user_id)
);

-- ===== 프로젝트 테이블 =====
CREATE TABLE IF NOT EXISTS public.projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(200) NOT NULL,
  description TEXT,
  type VARCHAR(20) DEFAULT 'practice' CHECK (type IN ('practice','enterprise')),
  status VARCHAR(20) DEFAULT 'open' CHECK (status IN ('open','in_progress','completed','closed')),
  max_members INTEGER DEFAULT 5,
  current_members INTEGER DEFAULT 0,
  tech_stack TEXT[],
  creator_id UUID REFERENCES public.users(id),
  deadline TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ===== 프로젝트 참여자 테이블 =====
CREATE TABLE IF NOT EXISTS public.project_members (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID NOT NULL REFERENCES public.projects(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  role VARCHAR(50) DEFAULT 'member' CHECK (role IN ('leader','developer','analyst','strategist','member')),
  joined_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(project_id, user_id)
);

-- ===== 인증 테이블 =====
CREATE TABLE IF NOT EXISTS public.certifications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  level VARCHAR(30) NOT NULL CHECK (level IN ('AX_Practitioner','AX_Builder','AX_Architect','AX_Strategist')),
  status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending','in_progress','passed','failed')),
  score INTEGER,
  issued_at TIMESTAMPTZ,
  expires_at TIMESTAMPTZ,
  certificate_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ===== 워크숍 테이블 =====
CREATE TABLE IF NOT EXISTS public.workshops (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(200) NOT NULL,
  description TEXT,
  type VARCHAR(30) DEFAULT 'offline' CHECK (type IN ('offline','online','hybrid')),
  location VARCHAR(300),
  start_date TIMESTAMPTZ NOT NULL,
  end_date TIMESTAMPTZ NOT NULL,
  capacity INTEGER DEFAULT 30,
  registered_count INTEGER DEFAULT 0,
  price INTEGER DEFAULT 0,
  instructor_id UUID REFERENCES public.users(id),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ===== 워크숍 신청 테이블 =====
CREATE TABLE IF NOT EXISTS public.workshop_registrations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  workshop_id UUID NOT NULL REFERENCES public.workshops(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending','confirmed','cancelled')),
  payment_status VARCHAR(20) DEFAULT 'unpaid' CHECK (payment_status IN ('unpaid','paid','refunded')),
  registered_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(workshop_id, user_id)
);

-- ===== 전문가 프로필 테이블 =====
CREATE TABLE IF NOT EXISTS public.expert_profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID UNIQUE NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  title VARCHAR(200),
  skills TEXT[],
  experience_years INTEGER DEFAULT 0,
  portfolio_url TEXT,
  github_url TEXT,
  linkedin_url TEXT,
  hourly_rate INTEGER,
  availability VARCHAR(20) DEFAULT 'available' CHECK (availability IN ('available','busy','unavailable')),
  project_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ===== 기업 프로젝트 테이블 =====
CREATE TABLE IF NOT EXISTS public.enterprise_projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  company_name VARCHAR(200) NOT NULL,
  contact_name VARCHAR(100),
  contact_email VARCHAR(255),
  project_title VARCHAR(300) NOT NULL,
  description TEXT,
  project_types TEXT[],
  budget_range VARCHAR(50),
  timeline VARCHAR(50),
  status VARCHAR(20) DEFAULT 'submitted' CHECK (status IN ('submitted','reviewing','matched','in_progress','completed')),
  assigned_experts UUID[],
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ===== 커뮤니티 게시글 테이블 =====
CREATE TABLE IF NOT EXISTS public.posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  author_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
  category VARCHAR(30) NOT NULL CHECK (category IN ('QA','프로젝트모집','스터디','사례공유','자유')),
  title VARCHAR(300) NOT NULL,
  content TEXT NOT NULL,
  views INTEGER DEFAULT 0,
  likes INTEGER DEFAULT 0,
  comment_count INTEGER DEFAULT 0,
  tags TEXT[],
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ===== 인덱스 =====
CREATE INDEX IF NOT EXISTS idx_users_email ON public.users(email);
CREATE INDEX IF NOT EXISTS idx_users_role ON public.users(role);
CREATE INDEX IF NOT EXISTS idx_courses_category ON public.courses(category);
CREATE INDEX IF NOT EXISTS idx_courses_is_published ON public.courses(is_published);
CREATE INDEX IF NOT EXISTS idx_lessons_course_id ON public.lessons(course_id);
CREATE INDEX IF NOT EXISTS idx_enrollments_user_id ON public.enrollments(user_id);
CREATE INDEX IF NOT EXISTS idx_enrollments_course_id ON public.enrollments(course_id);
CREATE INDEX IF NOT EXISTS idx_projects_status ON public.projects(status);
CREATE INDEX IF NOT EXISTS idx_certifications_user_id ON public.certifications(user_id);
CREATE INDEX IF NOT EXISTS idx_posts_category ON public.posts(category);
CREATE INDEX IF NOT EXISTS idx_posts_created_at ON public.posts(created_at DESC);

-- ===== Row Level Security (RLS) =====
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.certifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;

-- 사용자: 본인만 수정 가능
CREATE POLICY "users_select_all" ON public.users FOR SELECT USING (true);
CREATE POLICY "users_update_own" ON public.users FOR UPDATE USING (auth.uid() = auth_id);

-- 강의: 발행된 것만 공개
CREATE POLICY "courses_select_published" ON public.courses FOR SELECT USING (is_published = true OR auth.uid() IS NOT NULL);

-- 수강: 본인 것만
CREATE POLICY "enrollments_own" ON public.enrollments USING (user_id IN (SELECT id FROM public.users WHERE auth_id = auth.uid()));

-- 인증: 본인 것만
CREATE POLICY "certifications_own" ON public.certifications USING (user_id IN (SELECT id FROM public.users WHERE auth_id = auth.uid()));

-- 게시글: 전체 조회, 본인만 수정
CREATE POLICY "posts_select_all" ON public.posts FOR SELECT USING (true);
CREATE POLICY "posts_insert_auth" ON public.posts FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);
CREATE POLICY "posts_update_own" ON public.posts FOR UPDATE USING (author_id IN (SELECT id FROM public.users WHERE auth_id = auth.uid()));

-- ===== 샘플 데이터 =====
-- 강의 50개 샘플
INSERT INTO public.courses (title, category, level, description, is_free, is_published, total_lessons, total_students, rating) VALUES
('AI 시대 산업 변화', 'AX이해', 'beginner', 'AI가 제조, 금융, 의료, 유통 산업에 미치는 변화를 분석합니다.', true, true, 5, 1203, 4.8),
('AX 개념과 정의', 'AX이해', 'beginner', 'AI 전환(AX)의 정확한 개념과 기업 AX 전략을 학습합니다.', true, true, 4, 987, 4.7),
('기업 AX 성공 사례', 'AX이해', 'beginner', '국내외 기업 AX 성공 사례를 분석하고 인사이트를 도출합니다.', true, true, 6, 876, 4.9),
('ChatGPT 비즈니스 활용', 'AI도구', 'beginner', 'ChatGPT를 업무에 전략적으로 활용하는 방법을 배웁니다.', true, true, 8, 1456, 4.8),
('Claude 프롬프트 엔지니어링', 'AI도구', 'intermediate', 'Claude AI를 활용한 고급 프롬프트 작성 기법을 학습합니다.', false, true, 10, 823, 4.9),
('바이브코딩 시작하기', '바이브코딩', 'beginner', 'AI에게 코드를 맡기는 바이브코딩의 개념과 워크플로우를 배웁니다.', true, true, 6, 1102, 4.7),
('AI로 웹서비스 만들기', '바이브코딩', 'intermediate', 'Claude Code로 완전한 웹 서비스를 30분 안에 구축합니다.', false, true, 12, 734, 4.8),
('AI 플랫폼 아키텍처 설계', 'AI플랫폼설계', 'advanced', '기업 AI 플랫폼의 전체 아키텍처를 설계하는 방법을 배웁니다.', false, true, 15, 456, 4.9),
('RAG 시스템 구축', 'AI플랫폼설계', 'advanced', 'Retrieval-Augmented Generation 시스템을 실제로 구축합니다.', false, true, 10, 389, 4.8),
('기업 문제 진단 방법', 'AX컨설팅', 'advanced', 'SPIN 기법을 활용한 기업 AX 문제 진단 방법론을 배웁니다.', false, true, 8, 312, 4.9)
ON CONFLICT DO NOTHING;
