-- 바이브코딩 초보자 과정 사전 설문 테이블
CREATE TABLE IF NOT EXISTS public.pre_survey_vibecoding (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT now(),
  
  -- 1. 기본 정보
  name TEXT NOT NULL,
  organization TEXT NOT NULL,
  position TEXT,
  email TEXT NOT NULL,
  want_to_build TEXT NOT NULL,
  laptop_os TEXT NOT NULL,
  
  -- 2. 코딩 경험
  coding_experience TEXT,
  terminal_experience TEXT,
  git_experience TEXT,
  coding_confidence INTEGER,
  
  -- 3. 바이브코딩 경험
  vibecoding_awareness TEXT,
  vibecoding_tools JSONB,
  vibecoding_outputs JSONB,
  
  -- 4. AI 서비스 사용 현황
  claude_plan TEXT,
  chatgpt_plan TEXT,
  gemini_plan TEXT,
  cursor_plan TEXT,
  copilot_plan TEXT,
  perplexity_plan TEXT,
  ms_copilot_plan TEXT,
  grok_plan TEXT,
  other_service TEXT,
  other_plan TEXT,
  monthly_spend TEXT,
  
  -- 5. 개발 환경
  installed JSONB,
  setup_confidence TEXT,
  
  -- 6. 학습 목표
  expectations JSONB,
  motivations JSONB,
  additional TEXT
);

-- RLS 활성화
ALTER TABLE public.pre_survey_vibecoding ENABLE ROW LEVEL SECURITY;

-- 누구나 삽입 가능 (설문 제출)
CREATE POLICY "Anyone can insert survey" ON public.pre_survey_vibecoding
  FOR INSERT WITH CHECK (true);

-- 읽기는 인증된 사용자만
CREATE POLICY "Authenticated users can read" ON public.pre_survey_vibecoding
  FOR SELECT USING (auth.role() = 'authenticated');
