/* =============================================
   AX교육플랫폼 - Theme Manager (Dark/Light Mode)
   Charlie / 3분대장 - Task #10
   ============================================= */

const ThemeManager = {
  current: localStorage.getItem('ax-theme') || 'light',

  init() {
    document.documentElement.setAttribute('data-theme', this.current);
    this.updateToggleBtn();

    // Listen for system preference changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    if (!localStorage.getItem('ax-theme')) {
      this.current = mediaQuery.matches ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', this.current);
      this.updateToggleBtn();
    }

    mediaQuery.addEventListener('change', (e) => {
      if (!localStorage.getItem('ax-theme')) {
        this.current = e.matches ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', this.current);
        this.updateToggleBtn();
      }
    });
  },

  toggle() {
    this.current = this.current === 'light' ? 'dark' : 'light';
    localStorage.setItem('ax-theme', this.current);
    document.documentElement.setAttribute('data-theme', this.current);
    this.updateToggleBtn();

    // Smooth transition
    document.documentElement.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    setTimeout(() => {
      document.documentElement.style.transition = '';
    }, 300);
  },

  updateToggleBtn() {
    const btn = document.getElementById('themeToggle');
    if (btn) {
      btn.textContent = this.current === 'light' ? '🌙' : '☀️';
      btn.title = this.current === 'light' ? '다크 모드로 전환' : '라이트 모드로 전환';
    }
  },

  setLight() {
    this.current = 'light';
    localStorage.setItem('ax-theme', 'light');
    document.documentElement.setAttribute('data-theme', 'light');
    this.updateToggleBtn();
  },

  setDark() {
    this.current = 'dark';
    localStorage.setItem('ax-theme', 'dark');
    document.documentElement.setAttribute('data-theme', 'dark');
    this.updateToggleBtn();
  }
};

// Initialize immediately to prevent flash
ThemeManager.init();

/* === Toast Notification System === */
const Toast = {
  container: null,

  init() {
    if (!document.getElementById('toast-container')) {
      this.container = document.createElement('div');
      this.container.id = 'toast-container';
      document.body.appendChild(this.container);
    } else {
      this.container = document.getElementById('toast-container');
    }
  },

  show(message, type = 'info', duration = 3500) {
    if (!this.container) this.init();

    const icons = {
      success: '✅',
      error: '❌',
      warning: '⚠️',
      info: 'ℹ️'
    };

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
      <span class="toast-icon">${icons[type] || icons.info}</span>
      <div class="toast-content">
        <div class="toast-message">${message}</div>
      </div>
    `;

    this.container.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('removing');
      toast.addEventListener('animationend', () => toast.remove());
    }, duration);
  },

  success(msg, duration) { this.show(msg, 'success', duration); },
  error(msg, duration) { this.show(msg, 'error', duration); },
  warning(msg, duration) { this.show(msg, 'warning', duration); },
  info(msg, duration) { this.show(msg, 'info', duration); }
};

/* === Hamburger Menu === */
function initHamburger() {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });

  // Close on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* === Scroll Reveal Animation === */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(el => observer.observe(el));
}

/* === Navbar Scroll Effect === */
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
  });
}

/* === Number Counter Animation === */
function animateCounter(el) {
  const target = parseInt(el.dataset.target || el.textContent.replace(/[^0-9]/g, ''));
  const suffix = el.dataset.suffix || '';
  const duration = parseInt(el.dataset.duration || 2000);
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // cubic ease-out
    const current = Math.round(target * eased);
    el.textContent = current.toLocaleString('ko-KR') + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}

/* === Sidebar Mobile Toggle === */
function initSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.sidebar-overlay');
  const toggleBtn = document.querySelector('.sidebar-mobile-toggle');

  if (!sidebar) return;

  function openSidebar() {
    sidebar.classList.add('mobile-open');
    if (overlay) overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeSidebar() {
    sidebar.classList.remove('mobile-open');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (toggleBtn) toggleBtn.addEventListener('click', openSidebar);
  if (overlay) overlay.addEventListener('click', closeSidebar);

  // Sidebar submenu toggle
  document.querySelectorAll('.sidebar-item.has-submenu > a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      link.closest('.sidebar-item').classList.toggle('open');
    });
  });
}

/* === Help Button / Manual Modal === */
function openManual() {
  window.location.href = '../pages/manual.html';
}

/* === Init on DOM Ready === */
document.addEventListener('DOMContentLoaded', () => {
  Toast.init();
  initHamburger();
  initScrollReveal();
  initNavbarScroll();
  initCounters();
  initSidebar();
});

// Export for module use
if (typeof module !== 'undefined') {
  module.exports = { ThemeManager, Toast };
}
