// AX교육플랫폼 설정
const CONFIG = {
  SUPABASE_URL: 'https://your-project-ref.supabase.co',
  SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.your-anon-key-here',
  GEMINI_API_KEY: 'AIzaSy-your-gemini-api-key-here',
  GEMINI_MODEL: 'gemini-1.5-flash',
  GEMINI_API_URL: 'https://generativelanguage.googleapis.com/v1beta/models/',
  APP_NAME: 'AX교육플랫폼',
  APP_VERSION: '1.0.0',
  IS_DEMO: true // 더미 키 사용 중일 때 true
};

// Supabase 클라이언트 초기화
let supabaseClient = null;
function getSupabase() {
  if (supabaseClient) return supabaseClient;
  if (typeof window !== 'undefined' && window.supabase && !CONFIG.IS_DEMO) {
    supabaseClient = window.supabase.createClient(CONFIG.SUPABASE_URL, CONFIG.SUPABASE_ANON_KEY);
  }
  return supabaseClient;
}
