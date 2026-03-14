// AX교육플랫폼 공통 유틸리티

const Utils = {
  // 토스트 알림
  showToast(message, type = 'info', duration = 3000) {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.style.cssText = 'position:fixed;top:80px;right:24px;z-index:9999;display:flex;flex-direction:column;gap:8px;';
      document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    const icons = { success: '✅', error: '❌', info: 'ℹ️', warning: '⚠️' };
    const colors = { success: '#10B981', error: '#EF4444', info: '#3B82F6', warning: '#F59E0B' };
    toast.style.cssText = `
      padding:12px 20px;border-radius:8px;background:white;
      box-shadow:0 4px 16px rgba(0,0,0,0.15);border-left:4px solid ${colors[type]};
      font-family:'Noto Sans KR',sans-serif;font-size:14px;
      animation:slideInToast 0.3s ease;max-width:300px;
    `;
    toast.textContent = `${icons[type]} ${message}`;
    container.appendChild(toast);
    setTimeout(() => { toast.style.opacity='0'; toast.style.transition='opacity 0.3s'; setTimeout(() => toast.remove(), 300); }, duration);
  },

  // 로딩 표시
  showLoading(container, text = '로딩 중...') {
    const el = typeof container === 'string' ? document.querySelector(container) : container;
    if (el) el.innerHTML = `<div style="text-align:center;padding:48px;color:#6B7280;"><div style="width:32px;height:32px;border:3px solid #E5E7EB;border-top-color:#FF6B35;border-radius:50%;animation:spin 0.8s linear infinite;margin:0 auto 16px;"></div><p>${text}</p></div>`;
  },

  hideLoading(container) {
    const el = typeof container === 'string' ? document.querySelector(container) : container;
    if (el) el.innerHTML = '';
  },

  // 날짜 포맷
  formatDate(date, format = 'YYYY-MM-DD') {
    const d = new Date(date);
    const pad = n => String(n).padStart(2, '0');
    return format
      .replace('YYYY', d.getFullYear())
      .replace('MM', pad(d.getMonth()+1))
      .replace('DD', pad(d.getDate()))
      .replace('HH', pad(d.getHours()))
      .replace('mm', pad(d.getMinutes()));
  },

  // 상대 시간
  timeAgo(date) {
    const diff = (Date.now() - new Date(date)) / 1000;
    if (diff < 60) return '방금 전';
    if (diff < 3600) return `${Math.floor(diff/60)}분 전`;
    if (diff < 86400) return `${Math.floor(diff/3600)}시간 전`;
    return `${Math.floor(diff/86400)}일 전`;
  },

  // 숫자 포맷
  formatNumber(num) {
    if (num >= 1000) return (num/1000).toFixed(1) + 'k';
    return String(num);
  },

  // 텍스트 자르기
  truncate(text, maxLen = 100) {
    return text.length > maxLen ? text.slice(0, maxLen) + '...' : text;
  },

  // 디바운스
  debounce(fn, wait = 300) {
    let t;
    return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), wait); };
  },

  // URL 파라미터
  getParam(name) {
    return new URLSearchParams(window.location.search).get(name);
  },

  // 로컬스토리지 래퍼
  storage: {
    get(key) { try { return JSON.parse(localStorage.getItem('ax_' + key)); } catch { return null; } },
    set(key, val) { try { localStorage.setItem('ax_' + key, JSON.stringify(val)); } catch {} },
    remove(key) { localStorage.removeItem('ax_' + key); }
  },

  // 이니셜 아바타
  getInitials(name) {
    return name ? name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2) : '?';
  },

  // 애니메이션 카운터
  animateCounter(el, target, duration = 2000) {
    const start = 0;
    const step = (timestamp) => {
      const progress = Math.min((timestamp - startTime) / duration, 1);
      el.textContent = Math.floor(progress * target).toLocaleString();
      if (progress < 1) requestAnimationFrame(step);
    };
    let startTime;
    requestAnimationFrame(ts => { startTime = ts; step(ts); });
  },

  // 스크롤 탑
  scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); },

  // 모달 제어
  openModal(id) {
    const m = document.getElementById(id);
    if (m) { m.classList.add('active'); document.body.style.overflow = 'hidden'; }
  },
  closeModal(id) {
    const m = document.getElementById(id);
    if (m) { m.classList.remove('active'); document.body.style.overflow = ''; }
  }
};

// 전역 CSS 애니메이션
const style = document.createElement('style');
style.textContent = `
  @keyframes slideInToast { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
  @keyframes spin { to { transform: rotate(360deg); } }
  @keyframes fadeIn { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
`;
document.head.appendChild(style);
