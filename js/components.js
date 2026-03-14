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
      <li><a href="${base}pages/about.html"${active('about.html')}>회사소개</a></li>
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
        <div id="userDropdown" style="position:absolute;right:0;top:calc(100% + 10px);background:white;border:1px solid #E5E7EB;border-radius:14px;box-shadow:0 12px 32px rgba(10,37,64,0.14);min-width:196px;padding:8px;z-index:9999;display:none;">
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
    <a href="${base}pages/about.html">🏢 회사소개</a>
    <a href="${base}pages/courses.html">📚 교육과정</a>
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
        <li><a href="mailto:jaiwshim@gmail.com">이메일 문의</a></li>
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
        <div id="ax-pwd-modal" style="display:none;position:fixed;inset:0;z-index:99999;background:rgba(10,37,64,0.55);backdrop-filter:blur(4px);align-items:center;justify-content:center;">
          <div style="background:white;border-radius:20px;padding:36px 32px;width:100%;max-width:360px;margin:16px;box-shadow:0 24px 64px rgba(10,37,64,0.22);border-top:4px solid #FF6B35;text-align:center;">
            <div style="font-size:2rem;margin-bottom:12px;">🔐</div>
            <div style="font-size:1.1rem;font-weight:800;color:#0A2540;margin-bottom:6px;">접근 제한</div>
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
