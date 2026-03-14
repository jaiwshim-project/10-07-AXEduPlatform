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
      <li><a href="${base}pages/courses.html"${active('courses.html')}>교육과정</a></li>
      <li><a href="${base}pages/projects.html"${active('projects.html')}>프로젝트</a></li>
      <li><a href="${base}pages/certification.html"${active('certification.html')}>인증</a></li>
      <li><a href="${base}pages/community.html"${active('community.html')}>커뮤니티</a></li>
      <li><a href="${base}pages/enterprise.html"${active('enterprise.html')}>기업서비스</a></li>
      <li><a href="${base}pages/manual.html"${active('manual.html')}>매뉴얼</a></li>
    </ul>
    <div class="nav-actions">
      <button id="themeToggle" onclick="ThemeManager && ThemeManager.toggle()" title="테마 전환">🌙</button>
      <a href="${base}pages/auth.html" class="btn btn-outline btn-sm" id="loginBtn">로그인</a>
      <a href="${base}pages/dashboard.html" class="btn btn-primary btn-sm" id="dashboardBtn" style="display:none">대시보드</a>
    </div>
    <button class="hamburger" id="hamburger" aria-label="메뉴" aria-expanded="false"
      onclick="this.classList.toggle('open');this.setAttribute('aria-expanded',this.classList.contains('open'));document.getElementById('mobileMenu').classList.toggle('active')">
      <span></span><span></span><span></span>
    </button>
  </div>
  <div class="mobile-menu" id="mobileMenu">
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
        <li><a href="mailto:contact@ax-edu.co.kr">이메일 문의</a></li>
        <li><a href="#">개인정보처리방침</a></li>
        <li><a href="#">이용약관</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom" style="max-width:1200px;margin:0 auto;padding-top:24px;text-align:center;">
    <p>© 2026 AX EDU GROUP. All rights reserved. | 사업자등록번호: 000-00-00000 | 서울특별시 강남구</p>
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
  }
};

// DOM 준비 즉시 실행
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => Components.init());
} else {
  Components.init();
}
