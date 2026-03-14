/**
 * AX EDU GROUP — Shared Navbar & Footer Components
 * 모든 페이지에 동일한 네비게이션 바와 푸터를 주입합니다.
 */
const Components = {

  // 현재 페이지가 /pages/ 하위인지 감지하여 기본 경로 반환
  getBase() {
    return window.location.pathname.includes('/pages/') ? '../' : './';
  },

  // 현재 페이지 파일명 (active 링크 표시용)
  currentPage() {
    return window.location.pathname.split('/').pop() || 'index.html';
  },

  // ── 공통 네비게이션 바 ──────────────────────────────────────────
  navbarHTML(base) {
    const page = this.currentPage();
    const active = (file) => page === file ? ' class="active"' : '';
    return `
<nav class="navbar">
  <div class="nav-container">
    <a href="${base}index.html" class="logo">
      <img src="${base}images/logo.png" alt="AX EDU GROUP">
    </a>
    <ul class="nav-links">
      <li class="nav-dropdown">
        <a href="${base}pages/about.html"${active('about.html')} class="nav-dropdown-toggle">회사소개 <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style="vertical-align:middle;margin-left:2px;"><path d="M2 3.5l3 3 3-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
        <ul class="nav-submenu">
          <li><a href="${base}pages/about.html"${active('about.html')}>🏢 회사 소개</a></li>
          <li><a href="${base}pages/ceo.html"${active('ceo.html')}>👤 CEO 소개</a></li>
        </ul>
      </li>
      <li class="nav-dropdown">
        <a href="${base}pages/courses.html"${active('courses.html')} class="nav-dropdown-toggle">교육과정 <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style="vertical-align:middle;margin-left:2px;"><path d="M2 3.5l3 3 3-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
        <ul class="nav-submenu">
          <li><a href="${base}pages/online-courses.html"${active('online-courses.html')}>🖥️ 온라인 교육</a></li>
          <li><a href="${base}pages/online-projects.html"${active('online-projects.html')}>💻 온라인 프로젝트</a></li>
          <li><a href="${base}pages/offline-courses.html"${active('offline-courses.html')}>🏫 오프라인 교육</a></li>
        </ul>
      </li>
      <li><a href="${base}pages/projects.html"${active('projects.html')}>프로젝트</a></li>
      <li><a href="${base}pages/certification.html"${active('certification.html')}>인증</a></li>
      <li><a href="${base}pages/community.html"${active('community.html')}>커뮤니티</a></li>
      <li><a href="${base}pages/enterprise.html"${active('enterprise.html')}>기업서비스</a></li>
      <li><a href="${base}pages/manual.html"${active('manual.html')}>매뉴얼</a></li>
    </ul>
    <div class="nav-actions">
      <button id="themeToggle" onclick="ThemeManager && ThemeManager.toggle()" title="테마 전환">🌙</button>
      <a href="${base}pages/auth.html" class="btn btn-outline btn-sm" id="loginBtn">로그인</a>
      <div id="userProfile" style="display:none;position:relative;">
        <button id="userProfileBtn" onclick="document.getElementById('userDropdown').classList.toggle('show')" style="display:flex;align-items:center;gap:6px;background:rgba(255,107,53,0.12);border:1.5px solid rgba(255,107,53,0.4);border-radius:20px;padding:5px 10px 5px 5px;cursor:pointer;transition:all 0.2s;">
          <span id="userAvatar" style="width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,#FF6B35,#e85d20);display:flex;align-items:center;justify-content:center;color:white;font-weight:700;font-size:0.8rem;flex-shrink:0;">U</span>
          <span id="userName" style="font-weight:700;font-size:0.85rem;color:#FF6B35;max-width:80px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"></span>
          <svg id="userDropArrow" width="12" height="12" viewBox="0 0 12 12" fill="none" style="flex-shrink:0;transition:transform 0.2s;"><path d="M2 4l4 4 4-4" stroke="#FF6B35" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
        <div id="userDropdown" style="position:absolute;right:0;top:calc(100% + 10px);background:white;border:1px solid #E5E7EB;border-radius:14px;box-shadow:0 12px 32px rgba(45,27,105,0.14);min-width:196px;padding:8px;z-index:9999;display:none;">
          <div id="userEmailLabel" style="padding:8px 12px 10px;border-bottom:1px solid #F3F4F6;margin-bottom:6px;">
            <div id="userFullName" style="font-weight:700;font-size:0.875rem;color:#111827;"></div>
            <div id="userEmailText" style="font-size:0.75rem;color:#9CA3AF;margin-top:2px;"></div>
          </div>
          <a href="${base}pages/dashboard.html" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:8px;color:#374151;text-decoration:none;font-size:0.875rem;font-weight:500;">
            <span style="font-size:1rem;">📊</span> 마이페이지
          </a>
          <a href="${base}pages/dashboard.html#courses" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:8px;color:#374151;text-decoration:none;font-size:0.875rem;font-weight:500;">
            <span style="font-size:1rem;">📚</span> 내 강의
          </a>
          <a href="${base}pages/dashboard.html#cert" style="display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:8px;color:#374151;text-decoration:none;font-size:0.875rem;font-weight:500;">
            <span style="font-size:1rem;">🏅</span> 인증 현황
          </a>
          <div style="border-top:1px solid #F3F4F6;margin:6px 0;"></div>
          <button onclick="Auth && Auth.signOut()" style="display:flex;align-items:center;gap:10px;width:100%;padding:9px 12px;border-radius:8px;color:#EF4444;background:none;border:none;cursor:pointer;font-size:0.875rem;font-weight:600;font-family:inherit;">
            <span style="font-size:1rem;">🚪</span> 로그아웃
          </button>
        </div>
      </div>
    </div>
    <button class="hamburger" id="hamburger" aria-label="메뉴" aria-expanded="false"
      onclick="this.classList.toggle('open');this.setAttribute('aria-expanded',this.classList.contains('open'));document.getElementById('mobileMenu').classList.toggle('active')">
      <span></span><span></span><span></span>
    </button>
  </div>
  <div class="mobile-menu" id="mobileMenu">
    <div class="mob-group">
      <button class="mob-group-toggle" onclick="this.parentElement.classList.toggle('open')">🏢 회사소개 <span class="mob-arrow">▾</span></button>
      <div class="mob-sub">
        <a href="${base}pages/about.html">🏢 회사 소개</a>
        <a href="${base}pages/ceo.html">👤 CEO 소개</a>
      </div>
    </div>
    <div class="mob-group">
      <button class="mob-group-toggle" onclick="this.parentElement.classList.toggle('open')">📚 교육과정 <span class="mob-arrow">▾</span></button>
      <div class="mob-sub">
        <a href="${base}pages/online-courses.html">🖥️ 온라인 교육</a>
        <a href="${base}pages/online-projects.html">💻 온라인 프로젝트</a>
        <a href="${base}pages/offline-courses.html">🏫 오프라인 교육</a>
      </div>
    </div>
    <a href="${base}pages/projects.html">📁 프로젝트</a>
    <a href="${base}pages/certification.html">🏅 인증</a>
    <a href="${base}pages/community.html">💬 커뮤니티</a>
    <a href="${base}pages/enterprise.html">🏢 기업서비스</a>
    <a href="${base}pages/manual.html">📖 매뉴얼</a>
    <a href="${base}pages/auth.html" class="btn btn-primary btn-block" style="margin-top:12px">로그인 / 회원가입</a>
  </div>
</nav>`;
  },

  // ── 공통 푸터 ────────────────────────────────────────────────────
  footerHTML(base) {
    return `
<footer class="footer">
  <div class="footer-grid">
    <div class="footer-brand">
      <a href="${base}index.html">
        <img src="${base}images/logo.png" alt="AX EDU GROUP" style="height:48px;width:auto;margin-bottom:14px;display:block;">
      </a>
      <p>AI 전환(AX) 전문가를 발굴하고 교육하고<br>프로젝트에 투입하는 한국 최초 AX 인재 생태계 플랫폼입니다.</p>
      <div style="margin-top:16px;display:flex;gap:10px;">
        <a href="#" aria-label="Facebook" style="width:36px;height:36px;background:rgba(255,255,255,0.1);border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;text-decoration:none;font-size:0.9rem;">f</a>
        <a href="#" aria-label="LinkedIn" style="width:36px;height:36px;background:rgba(255,255,255,0.1);border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;text-decoration:none;font-size:0.9rem;">in</a>
        <a href="#" aria-label="YouTube" style="width:36px;height:36px;background:rgba(255,255,255,0.1);border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;text-decoration:none;font-size:0.9rem;">▶</a>
      </div>
    </div>
    <div>
      <h4>교육</h4>
      <ul class="footer-links">
        <li><a href="${base}pages/courses.html">전체 강의</a></li>
        <li><a href="${base}pages/courses.html#ax">AX 이해</a></li>
        <li><a href="${base}pages/courses.html#coding">바이브코딩</a></li>
        <li><a href="${base}pages/workshops.html">오프라인 워크숍</a></li>
        <li><a href="${base}pages/ai-tutor.html">AI 튜터</a></li>
      </ul>
    </div>
    <div>
      <h4>커뮤니티</h4>
      <ul class="footer-links">
        <li><a href="${base}pages/community.html">게시판</a></li>
        <li><a href="${base}pages/projects.html">프로젝트</a></li>
        <li><a href="${base}pages/expert-profile.html">전문가 찾기</a></li>
        <li><a href="${base}pages/certification.html">AX 인증</a></li>
        <li><a href="${base}pages/enterprise.html">기업 서비스</a></li>
      </ul>
    </div>
    <div>
      <h4>지원</h4>
      <ul class="footer-links">
        <li><a href="${base}pages/manual.html">이용 가이드</a></li>
        <li><a href="${base}pages/sitemap.html">사이트맵</a></li>
        <li><a href="#" onclick="axProtectedOpen('${base}images/architecture.svg');return false;">시스템 구조도</a></li>
        <li><a href="#" onclick="axProtectedOpen('${base}images/ecosystem.svg');return false;">에코시스템</a></li>
        <li><a href="${base}pages/qna.html">Q&amp;A</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom" style="max-width:1200px;margin:0 auto;padding-top:24px;text-align:center;">
    <p style="color:rgba(255,255,255,0.65);">© 2026 AX EDU GROUP. All rights reserved. | 서울특별시 중구</p>
  </div>
</footer>`;
  },

  // ── 초기화 ────────────────────────────────────────────────────────
  init() {
    const base = this.getBase();

    // 1. 기존 nav.navbar 교체
    const nav = document.querySelector('nav.navbar');
    if (nav) {
      // nav 바깥에 있는 mobile-menu div가 있으면 함께 제거
      const adjacentMobile = nav.nextElementSibling;
      if (adjacentMobile && adjacentMobile.classList.contains('mobile-menu')) {
        adjacentMobile.remove();
      }
      nav.outerHTML = this.navbarHTML(base);
    }

    // 2. 기존 footer 교체 (없으면 body 끝에 추가)
    const footer = document.querySelector('footer');
    if (footer) {
      footer.outerHTML = this.footerHTML(base);
    } else {
      document.body.insertAdjacentHTML('beforeend', this.footerHTML(base));
    }

    // 3. 드롭다운 바깥 클릭 닫힘
    document.addEventListener('click', (e) => {
      const profile = document.getElementById('userProfile');
      const dropdown = document.getElementById('userDropdown');
      if (dropdown && profile && !profile.contains(e.target)) {
        dropdown.style.display = 'none';
        const arrow = document.getElementById('userDropArrow');
        if (arrow) arrow.style.transform = '';
      }
    });

    // 4. 드롭다운 toggle 함수 전역 등록
    window._axToggleUserDrop = function() {
      const dd = document.getElementById('userDropdown');
      const arrow = document.getElementById('userDropArrow');
      if (!dd) return;
      const isOpen = dd.style.display === 'block';
      dd.style.display = isOpen ? 'none' : 'block';
      if (arrow) arrow.style.transform = isOpen ? '' : 'rotate(180deg)';
    };

    // 5. 드롭다운 버튼에 올바른 핸들러 연결
    const profileBtn = document.getElementById('userProfileBtn');
    if (profileBtn) {
      profileBtn.setAttribute('onclick', 'window._axToggleUserDrop()');
    }

    // 6. 비밀번호 모달 삽입 (1회)
    if (!document.getElementById('ax-pwd-modal')) {
      document.body.insertAdjacentHTML('beforeend', `
        <div id="ax-pwd-modal" style="display:none;position:fixed;inset:0;z-index:99999;background:rgba(45,27,105,0.55);backdrop-filter:blur(4px);align-items:center;justify-content:center;">
          <div style="background:white;border-radius:20px;padding:36px 32px;width:100%;max-width:360px;margin:16px;box-shadow:0 24px 64px rgba(45,27,105,0.22);border-top:4px solid #FF6B35;text-align:center;">
            <div style="font-size:2rem;margin-bottom:12px;">🔐</div>
            <div style="font-size:1.1rem;font-weight:800;color:#2D1B69;margin-bottom:6px;">접근 제한</div>
            <div style="font-size:0.875rem;color:#6B7280;margin-bottom:20px;">비밀번호를 입력하세요</div>
            <input id="ax-pwd-input" type="password" maxlength="20"
              style="width:100%;padding:11px 14px;border:1.5px solid #D1D5DB;border-radius:10px;font-size:1.1rem;text-align:center;letter-spacing:6px;outline:none;font-family:monospace;box-sizing:border-box;"
              placeholder="••••"
              onkeydown="if(event.key==='Enter')axPwdConfirm()">
            <div id="ax-pwd-error" style="color:#EF4444;font-size:0.8rem;margin-top:8px;display:none;">비밀번호가 틀렸습니다.</div>
            <div style="display:flex;gap:10px;margin-top:20px;">
              <button onclick="axPwdClose()" style="flex:1;padding:11px;border:1.5px solid #E5E7EB;border-radius:10px;background:white;font-size:0.9rem;font-weight:600;cursor:pointer;font-family:inherit;color:#6B7280;">취소</button>
              <button onclick="axPwdConfirm()" style="flex:1;padding:11px;border:none;border-radius:10px;background:linear-gradient(135deg,#FF6B35,#e85d20);color:white;font-size:0.9rem;font-weight:700;cursor:pointer;font-family:inherit;">확인</button>
            </div>
          </div>
        </div>
      `);
    }

    // 7. 드롭다운 hover 스타일 (동적 삽입)
    if (!document.getElementById('ax-dropdown-style')) {
      const st = document.createElement('style');
      st.id = 'ax-dropdown-style';
      st.textContent = `
        #userProfileBtn:hover { background: rgba(255,107,53,0.18) !important; }
        #userDropdown a:hover, #userDropdown button:hover { background: #F9FAFB; }
        .mob-group { display:flex; flex-direction:column; }
        .mob-group-toggle { display:flex; align-items:center; justify-content:space-between; width:100%; padding:12px 16px; background:none; border:none; border-bottom:1px solid rgba(255,255,255,0.1); color:inherit; font-size:0.95rem; font-weight:600; font-family:inherit; cursor:pointer; text-align:left; }
        .mob-arrow { font-size:0.8rem; transition:transform 0.2s; }
        .mob-group.open .mob-arrow { transform:rotate(180deg); }
        .mob-sub { display:none; flex-direction:column; background:rgba(0,0,0,0.15); }
        .mob-group.open .mob-sub { display:flex; }
        .mob-sub a { padding:10px 16px 10px 32px !important; font-size:0.875rem !important; border-bottom:1px solid rgba(255,255,255,0.06) !important; }
        [data-theme="dark"] #userDropdown { background: #1e293b !important; border-color: #334155 !important; }
        [data-theme="dark"] #userDropdown a, [data-theme="dark"] #userDropdown button { color: #e2e8f0 !important; }
        [data-theme="dark"] #userDropdown a:hover, [data-theme="dark"] #userDropdown button:hover { background: #334155 !important; }
        [data-theme="dark"] #userDropdown .logout-btn { color: #f87171 !important; }
        [data-theme="dark"] #userName { color: #FF6B35 !important; }
        [data-theme="dark"] #userFullName { color: #f1f5f9 !important; }
        [data-theme="dark"] #userDropdown { border-color: #334155 !important; }
      `;
      document.head.appendChild(st);
    }

    // 8. ax-knowledge.js 동적 로드
    const _ks = document.createElement('script');
    const _isP = window.location.pathname.includes('/pages/');
    _ks.src = _isP ? '../js/ax-knowledge.js' : './js/ax-knowledge.js';
    document.head.appendChild(_ks);

    // 9. AI 봇 플로팅 버튼 + 챗봇 패널 삽입
    document.body.insertAdjacentHTML('beforeend', `
      <button id="ax-bot-btn" onclick="axBotToggle()" title="AI 봇" style="position:fixed;bottom:24px;right:24px;z-index:1000;width:60px;height:60px;border-radius:50%;background:linear-gradient(135deg,#7c3aed,#5b21b6);color:white;border:none;cursor:pointer;box-shadow:0 4px 20px rgba(124,58,237,0.4);font-size:1.5rem;display:flex;align-items:center;justify-content:center;transition:transform 0.2s;">🤖</button>
      <div id="ax-bot-panel" style="position:fixed;bottom:96px;right:24px;z-index:999;width:340px;height:720px;max-height:85vh;background:white;border-radius:20px;box-shadow:0 8px 40px rgba(45,27,105,0.2);display:none;flex-direction:column;overflow:hidden;border:1px solid rgba(124,58,237,0.2);">
        <div style="background:linear-gradient(135deg,#2D1B69,#4A1D96);color:white;padding:16px 20px;display:flex;justify-content:space-between;align-items:center;flex-shrink:0;">
          <div><div style="font-weight:700;font-size:0.95rem;">🤖 AX 봇</div><div style="font-size:0.75rem;opacity:0.8;">AX EDU GROUP 안내 도우미</div></div>
          <button onclick="axBotToggle()" style="background:none;border:none;color:white;cursor:pointer;font-size:1.2rem;line-height:1;">✕</button>
        </div>
        <div id="ax-bot-messages" style="flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:12px;"></div>
        <div style="padding:12px 16px;border-top:1px solid #e5e7eb;display:flex;gap:8px;flex-shrink:0;">
          <input id="ax-bot-input" type="text" placeholder="궁금한 점을 입력하세요..." style="flex:1;padding:10px 14px;border:1px solid #e5e7eb;border-radius:20px;font-size:0.875rem;outline:none;font-family:inherit;" onkeydown="if(event.key==='Enter')axBotSend()">
          <button onclick="axBotSend()" style="padding:10px 16px;background:linear-gradient(135deg,#7c3aed,#5b21b6);color:white;border:none;border-radius:20px;cursor:pointer;font-size:0.875rem;font-weight:600;">전송</button>
        </div>
      </div>
    `);
    axBotAddMsg('안녕하세요! AX EDU GROUP 안내 봇입니다. 수강료, 인증, 강의, 기업 서비스 등 궁금한 점을 물어보세요 😊', true);
    axBotApplyTheme();
    const _themeObs = new MutationObserver(axBotApplyTheme);
    _themeObs.observe(document.documentElement, {attributes:true, attributeFilter:['data-theme']});
  }
};

// DOM 준비 즉시 실행
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => Components.init());
} else {
  Components.init();
}

// ── 비밀번호 보호 함수 ────────────────────────────────────────
let _axPwdTarget = null;

function axProtectedOpen(url) {
  _axPwdTarget = url;
  const modal = document.getElementById('ax-pwd-modal');
  const input = document.getElementById('ax-pwd-input');
  const err   = document.getElementById('ax-pwd-error');
  if (!modal) return;
  err.style.display = 'none';
  input.value = '';
  modal.style.display = 'flex';
  setTimeout(() => input.focus(), 100);
}

function axPwdConfirm() {
  const input = document.getElementById('ax-pwd-input');
  const err   = document.getElementById('ax-pwd-error');
  if (input.value === '9633') {
    axPwdClose();
    window.open(_axPwdTarget, '_blank', 'noopener');
  } else {
    err.style.display = 'block';
    input.value = '';
    input.focus();
  }
}

function axPwdClose() {
  const modal = document.getElementById('ax-pwd-modal');
  if (modal) modal.style.display = 'none';
  _axPwdTarget = null;
}

// ── AI 봇 기능 ──
// ── Gemini API 설정 ──
const GEMINI_API_KEY = 'AIzaSyD2gFf6e5yw3sRPYW0nPxUcw369Qwl2j6k';
const GEMINI_MODEL = 'gemini-2.0-flash';
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`;

const AX_FAQ = [
  {q:['수강료','가격','얼마','비용','요금','플랜'],a:'강의별로 다르지만 월 구독 플랜(49,000원~)과 개별 강의 구매 방식을 제공합니다. 무료 체험도 가능합니다.'},
  {q:['인증','자격증','ax 전문','practitioner','strategist','자격'],a:'AX 전문가 인증은 Practitioner → Associate → Professional → Strategist 4단계로 구성됩니다. 시험 합격 시 인증서를 발급합니다.'},
  {q:['강의','커리큘럼','과정','수업','강좌','학습','배우'],a:'온라인 강의, 오프라인 워크숍, 팀 프로젝트 세 가지 형태로 제공됩니다. 현재 50개+ 강의를 운영 중입니다.'},
  {q:['기업','법인','b2b','회사','단체','조직'],a:'기업 AX 컨설팅 및 전문가 매칭 서비스를 제공합니다. 📞 010-2397-5734 또는 📧 jaiwshim@gmail.com으로 문의주세요.'},
  {q:['오프라인','워크숍','대면','집합','현장'],a:'월 1~2회 오프라인 워크숍을 운영합니다. 집중 실습 위주로 진행되며 일정은 온라인교육 메뉴에서 확인 가능합니다.'},
  {q:['환불','취소','반환'],a:'수강 시작 7일 이내 100% 환불, 30% 미만 수강 시 70% 환불 정책을 적용합니다. 문의: jaiwshim@gmail.com'},
  {q:['로그인','회원가입','계정','가입','등록'],a:'상단 오른쪽 로그인 버튼을 클릭하거나 로그인 페이지를 통해 가입하실 수 있습니다.'},
  {q:['프로젝트','포트폴리오','실습','팀'],a:'팀 프로젝트를 통해 실제 기업 과제를 해결하며 포트폴리오를 만들 수 있습니다. 수료 시 인증서도 발급됩니다.'},
  {q:['가치','차별','특징','장점','다른점','왜','선택','좋은','강점','어떤'],a:'AX EDU GROUP의 3가지 차별점: ① 이론이 아닌 실제 기업 과제 중심 교육 ② 교육→인증→프로젝트→취업까지 완전한 성장 경로 ③ 30년 경력 심재우 대표가 직접 설계한 실전 커리큘럼입니다.'},
  {q:['ax란','ai 전환','ai전환','인공지능','ax가','뭔가요','무엇','ax는','소개'],a:'AX(AI Transformation)는 AI를 업무에 실제 적용해 조직을 혁신하는 것입니다. AX EDU GROUP은 이 AX 역량을 갖춘 전문가를 양성하는 플랫폼입니다.'},
  {q:['추천','입문','처음','시작','초보','초급','어디서'],a:'처음이시라면 "AI 이해와 활용" 입문 강의부터 시작하세요. 비개발자도 쉽게 따라올 수 있는 실무 중심 커리큘럼입니다.'},
  {q:['취업','채용','일자리','커리어','경력','직업'],a:'AX 인증 취득 후 기업 AX 프로젝트 매칭 서비스를 통해 실제 프리랜서 수익 창출 및 경력 개발이 가능합니다.'},
  {q:['기간','얼마나','몇 달','몇달','단기','장기','시간'],a:'강의별로 다르지만 입문 과정은 4주, 전문가 과정은 8~12주 내외입니다. 자기 페이스대로 학습 가능합니다.'},
  {q:['안녕','반가워','hello','hi','도움','질문','처음'],a:'안녕하세요! AX EDU GROUP 안내 봇입니다 😊 수강료, 강의, 인증, 기업 서비스 등 궁금한 점을 물어보세요!'},
  {q:['연락','문의','상담','전화','이메일','카카오'],a:'📞 010-2397-5734 (평일 9~18시) 📧 jaiwshim@gmail.com 으로 연락주시면 빠르게 답변드립니다.'},
  {q:['플랫폼','서비스','ax edu','axedu','이곳','여기'],a:'AX EDU GROUP은 한국 최초 AI 전환(AX) 전문가 생태계 플랫폼입니다. 교육 → 인증 → 프로젝트 → 취업까지 완전한 성장 경로를 제공합니다. 누적 수강생 1,200명+, 만족도 98%.'},
];
window.axBotReply = function(input){
  const lower = input.toLowerCase();
  for(const item of AX_FAQ){
    if(item.q.some(k=>lower.includes(k))) return item.a;
  }
  return '죄송합니다, 해당 내용은 상담원을 통해 안내드리겠습니다. 📧 jaiwshim@gmail.com 또는 📞 010-2397-5734로 문의해 주세요.';
};
window.axBotAddMsg = function(text, isBot, id){
  const area = document.getElementById('ax-bot-messages');
  if(!area) return;
  const div = document.createElement('div');
  if(id) div.id = id;
  div.style.cssText = 'max-width:85%;padding:10px 14px;border-radius:'+(isBot?'4px 14px 14px 14px':'14px 4px 14px 14px')+';font-size:0.875rem;line-height:1.5;word-break:break-word;'+(isBot?'background:#f3f0ff;color:#2D1B69;align-self:flex-start;':'background:linear-gradient(135deg,#7c3aed,#5b21b6);color:white;align-self:flex-end;margin-left:auto;');
  div.textContent = text;
  area.appendChild(div);
  area.scrollTop = area.scrollHeight;
};
window.axBotApplyTheme = function(){
  const panel = document.getElementById('ax-bot-panel');
  if(!panel) return;
  const dark = document.documentElement.getAttribute('data-theme')==='dark';
  panel.style.background = dark?'#1e293b':'white';
  panel.style.borderColor = dark?'rgba(124,58,237,0.3)':'rgba(124,58,237,0.2)';
  const msgArea = document.getElementById('ax-bot-messages');
  if(msgArea) msgArea.style.background = dark?'#1e293b':'white';
  const input = document.getElementById('ax-bot-input');
  if(input){input.style.background=dark?'#334155':'white';input.style.color=dark?'#f1f5f9':'#111827';input.style.borderColor=dark?'#475569':'#e5e7eb';}
};
window.axBotToggle = function(){
  const panel = document.getElementById('ax-bot-panel');
  if(!panel) return;
  const open = panel.style.display==='flex';
  panel.style.display = open?'none':'flex';
  if(!open){axBotApplyTheme();document.getElementById('ax-bot-input').focus();}
};
window.axBotSend = async function(){
  const input = document.getElementById('ax-bot-input');
  if(!input||!input.value.trim()) return;
  const text = input.value.trim();
  input.value = '';
  input.disabled = true;
  axBotAddMsg(text, false);

  // 로딩 메시지
  const loadingId = 'ax-bot-loading-' + Date.now();
  axBotAddMsg('⏳ 답변을 생성 중입니다...', true, loadingId);

  try {
    const knowledgeBase = window.AX_KNOWLEDGE_BASE || '';
    const systemInstruction = `너는 AX EDU GROUP 교육 플랫폼의 친절한 AI 안내 봇이야. 아래 플랫폼 정보를 바탕으로만 답변해줘.
답변은 한국어로, 친절하게 해줘. 핵심을 4~6문장으로 답변해줘. 필요하면 항목별로 줄바꿈해서 읽기 쉽게 작성해.
모르는 내용이나 정보에 없는 내용은 "자세한 내용은 📞 010-2397-5734 또는 📧 jaiwshim@gmail.com으로 문의해주세요"라고 안내해줘.

[플랫폼 정보]
${knowledgeBase}`;

    const response = await fetch(GEMINI_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: systemInstruction }] },
        contents: [{ role: 'user', parts: [{ text: text }] }],
        generationConfig: { temperature: 0.7, maxOutputTokens: 600 }
      })
    });

    // 로딩 메시지 제거
    const loadingEl = document.getElementById(loadingId);
    if(loadingEl) loadingEl.remove();

    if(!response.ok) {
      const errBody = await response.json().catch(()=>({}));
      console.error('[AX봇 API 오류 상세]', errBody);
      throw new Error('API 오류: ' + response.status + ' ' + (errBody.error?.message || ''));
    }
    const data = await response.json();
    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || '답변을 가져오지 못했습니다.';
    axBotAddMsg(reply, true);

  } catch(e) {
    const loadingEl = document.getElementById(loadingId);
    if(loadingEl) loadingEl.remove();
    console.error('[AX봇 오류]', e);
    // API 키 미설정이면 FAQ 폴백
    if(GEMINI_API_KEY === 'YOUR_GEMINI_API_KEY') {
      axBotAddMsg(axBotReply(text), true);
    } else {
      axBotAddMsg('일시적인 오류가 발생했습니다. (오류: ' + e.message + ') 📞 010-2397-5734로 문의해주세요.', true);
    }
  } finally {
    input.disabled = false;
    input.focus();
  }
};
