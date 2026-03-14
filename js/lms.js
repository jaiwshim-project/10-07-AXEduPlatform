/* =============================================
   AX교육플랫폼 LMS 모듈
   완전한 LMS 기능 — 강의, 수강, 진도, 필터
   ============================================= */

const LMS = {

  /* ── 강의 목록 (12개 대표 강의) ── */
  courses: [
    {
      id: 1,
      title: 'AX 전환 완전 정복',
      category: 'ax-basics',
      categoryLabel: 'AX이해',
      instructor: '김전환',
      rating: 4.9,
      reviews: 892,
      hours: 12,
      students: 2341,
      level: '입문',
      price: 0,
      emoji: '🎯',
      bg: 'linear-gradient(135deg,rgba(59,130,246,0.12),rgba(99,102,241,0.12))',
      tags: ['AX', '전략', '비즈니스'],
      updatedAt: '2026-02-01',
      totalLessons: 18,
      sections: 4
    },
    {
      id: 2,
      title: 'Claude 마스터 클래스',
      category: 'ai-tools',
      categoryLabel: 'AI도구',
      instructor: '이클로드',
      rating: 4.8,
      reviews: 634,
      hours: 8,
      students: 1892,
      level: '초급',
      price: 49000,
      emoji: '🤖',
      bg: 'linear-gradient(135deg,rgba(16,185,129,0.12),rgba(6,182,212,0.12))',
      tags: ['Claude', 'LLM', '프롬프트'],
      updatedAt: '2026-02-15',
      totalLessons: 22,
      sections: 5
    },
    {
      id: 3,
      title: '바이브코딩 입문',
      category: 'vibe-coding',
      categoryLabel: '바이브코딩',
      instructor: '박비코',
      rating: 4.9,
      reviews: 1102,
      hours: 10,
      students: 3120,
      level: '입문',
      price: 0,
      emoji: '💻',
      bg: 'linear-gradient(135deg,rgba(255,107,53,0.12),rgba(251,146,60,0.12))',
      tags: ['바이브코딩', '코딩', 'Claude Code'],
      updatedAt: '2026-01-20',
      totalLessons: 16,
      sections: 4
    },
    {
      id: 4,
      title: 'ChatGPT 비즈니스 활용',
      category: 'ai-tools',
      categoryLabel: 'AI도구',
      instructor: '최GPT',
      rating: 4.7,
      reviews: 978,
      hours: 6,
      students: 2847,
      level: '입문',
      price: 49000,
      emoji: '💬',
      bg: 'linear-gradient(135deg,rgba(16,185,129,0.12),rgba(5,150,105,0.12))',
      tags: ['ChatGPT', '업무자동화', 'AI'],
      updatedAt: '2025-12-10',
      totalLessons: 14,
      sections: 3
    },
    {
      id: 5,
      title: 'AI 플랫폼 설계 실전',
      category: 'platform-design',
      categoryLabel: 'AI플랫폼설계',
      instructor: '정아키',
      rating: 4.8,
      reviews: 312,
      hours: 20,
      students: 891,
      level: '고급',
      price: 99000,
      emoji: '🏗️',
      bg: 'linear-gradient(135deg,rgba(139,92,246,0.12),rgba(109,40,217,0.12))',
      tags: ['아키텍처', 'MLOps', '시스템설계'],
      updatedAt: '2026-01-30',
      totalLessons: 30,
      sections: 6
    },
    {
      id: 6,
      title: '프롬프트 엔지니어링',
      category: 'ai-tools',
      categoryLabel: 'AI도구',
      instructor: '한프롬',
      rating: 4.9,
      reviews: 1432,
      hours: 8,
      students: 4201,
      level: '초급',
      price: 49000,
      emoji: '✍️',
      bg: 'linear-gradient(135deg,rgba(59,130,246,0.12),rgba(37,99,235,0.12))',
      tags: ['프롬프트', '엔지니어링', 'LLM'],
      updatedAt: '2026-02-10',
      totalLessons: 20,
      sections: 5
    },
    {
      id: 7,
      title: 'RAG 시스템 구축',
      category: 'platform-design',
      categoryLabel: 'AI플랫폼설계',
      instructor: '이래그',
      rating: 4.7,
      reviews: 234,
      hours: 15,
      students: 672,
      level: '중급',
      price: 99000,
      emoji: '🔗',
      bg: 'linear-gradient(135deg,rgba(6,182,212,0.12),rgba(14,165,233,0.12))',
      tags: ['RAG', '벡터DB', 'LangChain'],
      updatedAt: '2026-01-15',
      totalLessons: 24,
      sections: 5
    },
    {
      id: 8,
      title: 'AX 컨설팅 방법론',
      category: 'ax-consulting',
      categoryLabel: 'AX컨설팅',
      instructor: '강컨설',
      rating: 4.8,
      reviews: 198,
      hours: 12,
      students: 542,
      level: '고급',
      price: 99000,
      emoji: '📋',
      bg: 'linear-gradient(135deg,rgba(245,158,11,0.12),rgba(217,119,6,0.12))',
      tags: ['컨설팅', '전략', 'B2B'],
      updatedAt: '2025-12-20',
      totalLessons: 18,
      sections: 4
    },
    {
      id: 9,
      title: 'Notion AI 완전 가이드',
      category: 'ai-tools',
      categoryLabel: 'AI도구',
      instructor: '노션녀',
      rating: 4.6,
      reviews: 1289,
      hours: 4,
      students: 3891,
      level: '입문',
      price: 0,
      emoji: '📝',
      bg: 'linear-gradient(135deg,rgba(100,116,139,0.12),rgba(71,85,105,0.12))',
      tags: ['Notion', '생산성', 'AI도구'],
      updatedAt: '2025-11-30',
      totalLessons: 10,
      sections: 3
    },
    {
      id: 10,
      title: 'Claude Code 실전',
      category: 'vibe-coding',
      categoryLabel: '바이브코딩',
      instructor: '코드왕',
      rating: 4.9,
      reviews: 445,
      hours: 16,
      students: 1234,
      level: '중급',
      price: 99000,
      emoji: '⚡',
      bg: 'linear-gradient(135deg,rgba(255,107,53,0.15),rgba(239,68,68,0.12))',
      tags: ['Claude Code', '바이브코딩', '웹개발'],
      updatedAt: '2026-02-20',
      totalLessons: 26,
      sections: 6
    },
    {
      id: 11,
      title: 'AI 윤리와 거버넌스',
      category: 'ax-basics',
      categoryLabel: 'AX이해',
      instructor: '윤리사',
      rating: 4.7,
      reviews: 312,
      hours: 6,
      students: 891,
      level: '중급',
      price: 49000,
      emoji: '⚖️',
      bg: 'linear-gradient(135deg,rgba(239,68,68,0.1),rgba(220,38,38,0.08))',
      tags: ['AI윤리', '거버넌스', '컴플라이언스'],
      updatedAt: '2026-01-05',
      totalLessons: 12,
      sections: 3
    },
    {
      id: 12,
      title: '기업 AX 전략 수립',
      category: 'ax-consulting',
      categoryLabel: 'AX컨설팅',
      instructor: '전략가',
      rating: 4.9,
      reviews: 167,
      hours: 18,
      students: 423,
      level: '고급',
      price: 99000,
      emoji: '🗺️',
      bg: 'linear-gradient(135deg,rgba(245,158,11,0.12),rgba(234,88,12,0.12))',
      tags: ['전략', 'C레벨', '기업AX'],
      updatedAt: '2026-02-05',
      totalLessons: 28,
      sections: 6
    }
  ],

  /* ── 수강 중인 강의 (로컬스토리지 기반) ── */
  _getEnrolled() {
    try {
      return JSON.parse(localStorage.getItem('ax-enrolled') || '[]');
    } catch {
      return [];
    }
  },

  _saveEnrolled(list) {
    localStorage.setItem('ax-enrolled', JSON.stringify(list));
  },

  /* ── 수강 진도 (로컬스토리지 기반) ── */
  _getProgress() {
    try {
      return JSON.parse(localStorage.getItem('ax-progress') || '{}');
    } catch {
      return {};
    }
  },

  _saveProgress(data) {
    localStorage.setItem('ax-progress', JSON.stringify(data));
  },

  /* ── 수강 신청 ── */
  async enroll(courseId) {
    const course = this.courses.find(c => c.id === courseId);
    if (!course) throw new Error(`강의를 찾을 수 없습니다 (id: ${courseId})`);

    const enrolled = this._getEnrolled();
    if (enrolled.includes(courseId)) {
      console.warn(`[LMS] 이미 수강 중인 강의입니다: ${course.title}`);
      return { success: false, message: '이미 수강 신청된 강의입니다.', course };
    }

    // 유료 강의라면 결제 처리 (실제 연동 필요)
    if (course.price > 0) {
      const paid = await this._processPayment(course);
      if (!paid) return { success: false, message: '결제가 취소되었습니다.', course };
    }

    enrolled.push(courseId);
    this._saveEnrolled(enrolled);

    // 진도 초기화
    const progress = this._getProgress();
    progress[courseId] = { enrolledAt: new Date().toISOString(), lessons: {}, overallPercent: 0 };
    this._saveProgress(progress);

    console.log(`[LMS] 수강 신청 완료: ${course.title}`);
    return { success: true, message: `"${course.title}" 수강 신청이 완료되었습니다!`, course };
  },

  /* ── 결제 처리 (플레이스홀더) ── */
  async _processPayment(course) {
    // 실제 환경에서는 PG 결제 모듈 연동
    const confirmed = window.confirm(
      `결제를 진행합니다.\n\n강의: ${course.title}\n금액: ₩${course.price.toLocaleString('ko-KR')}\n\n결제하시겠습니까?`
    );
    return confirmed;
  },

  /* ── 수강 진도 업데이트 ── */
  async updateProgress(courseId, lessonId, completed = true) {
    const course = this.courses.find(c => c.id === courseId);
    if (!course) throw new Error(`강의를 찾을 수 없습니다 (id: ${courseId})`);

    const enrolled = this._getEnrolled();
    if (!enrolled.includes(courseId)) {
      throw new Error('수강 신청이 필요합니다.');
    }

    const progress = this._getProgress();
    if (!progress[courseId]) {
      progress[courseId] = { enrolledAt: new Date().toISOString(), lessons: {}, overallPercent: 0 };
    }

    const lessonKey = String(lessonId);
    progress[courseId].lessons[lessonKey] = {
      completed,
      completedAt: completed ? new Date().toISOString() : null,
      watchedAt: new Date().toISOString()
    };

    // 전체 진도율 계산
    const completedCount = Object.values(progress[courseId].lessons).filter(l => l.completed).length;
    progress[courseId].overallPercent = Math.round((completedCount / course.totalLessons) * 100);

    this._saveProgress(progress);

    console.log(`[LMS] 진도 업데이트 — 강의: ${course.title}, 레슨: ${lessonId}, 완료: ${completed}, 전체: ${progress[courseId].overallPercent}%`);
    return progress[courseId];
  },

  /* ── 특정 강의의 진도 조회 ── */
  getCourseProgress(courseId) {
    const progress = this._getProgress();
    return progress[courseId] || null;
  },

  /* ── 내 수강 강의 목록 ── */
  getMyCourses() {
    const enrolled = this._getEnrolled();
    const progress = this._getProgress();
    return this.courses
      .filter(c => enrolled.includes(c.id))
      .map(c => ({
        ...c,
        progress: progress[c.id] || { overallPercent: 0, lessons: {} }
      }));
  },

  /* ── 수강 여부 확인 ── */
  isEnrolled(courseId) {
    return this._getEnrolled().includes(courseId);
  },

  /* ── 강의 필터링 ── */
  filterCourses(options = {}) {
    const {
      category    = null,    // 'ax-basics' | 'ai-tools' | 'vibe-coding' | 'platform-design' | 'ax-consulting'
      searchQuery = '',
      level       = null,    // '입문' | '초급' | '중급' | '고급'
      priceType   = null,    // 'free' | 'paid'
      sortBy      = 'default' // 'default' | 'popular' | 'rating' | 'level' | 'newest'
    } = options;

    const q = searchQuery.toLowerCase().trim();

    let result = this.courses.filter(c => {
      const matchCat   = !category    || c.category === category;
      const matchLevel = !level       || c.level === level;
      const matchPrice = !priceType   || (priceType === 'free' ? c.price === 0 : c.price > 0);
      const matchQ     = !q           || c.title.toLowerCase().includes(q)
                                      || c.instructor.toLowerCase().includes(q)
                                      || c.tags.some(t => t.toLowerCase().includes(q))
                                      || c.categoryLabel.toLowerCase().includes(q);
      return matchCat && matchLevel && matchPrice && matchQ;
    });

    // 정렬
    const LEVEL_ORDER = { '입문': 1, '초급': 2, '중급': 3, '고급': 4 };
    switch (sortBy) {
      case 'popular': result = [...result].sort((a,b) => b.students - a.students); break;
      case 'rating':  result = [...result].sort((a,b) => b.rating - a.rating);    break;
      case 'level':   result = [...result].sort((a,b) => LEVEL_ORDER[a.level] - LEVEL_ORDER[b.level]); break;
      case 'newest':  result = [...result].sort((a,b) => new Date(b.updatedAt) - new Date(a.updatedAt)); break;
      default: break; // 기본: 등록 순
    }

    return result;
  },

  /* ── ID로 강의 조회 ── */
  getCourseById(id) {
    return this.courses.find(c => c.id === id) || null;
  },

  /* ── 카테고리별 집계 ── */
  getCategoryStats() {
    const stats = {};
    this.courses.forEach(c => {
      stats[c.categoryLabel] = (stats[c.categoryLabel] || 0) + 1;
    });
    return stats;
  },

  /* ── 별점 렌더 ── */
  renderStars(rating, maxStars = 5) {
    const full    = Math.floor(rating);
    const hasHalf = (rating % 1) >= 0.5;
    const empty   = maxStars - full - (hasHalf ? 1 : 0);

    const fullStar  = '<span style="color:#F59E0B;">★</span>';
    const halfStar  = '<span style="color:#F59E0B;">½</span>';
    const emptyStar = '<span style="color:#D1D5DB;">☆</span>';

    return fullStar.repeat(full) + (hasHalf ? halfStar : '') + emptyStar.repeat(Math.max(0, empty));
  },

  /* ── 가격 포맷 ── */
  formatPrice(price) {
    if (price === 0) return '무료';
    return `₩${price.toLocaleString('ko-KR')}`;
  },

  /* ── 레벨 뱃지 색상 ── */
  getLevelColor(level) {
    const map = {
      '입문': { bg: '#EFF6FF', color: '#2563EB' },
      '초급': { bg: '#F0FDF4', color: '#16A34A' },
      '중급': { bg: '#FFF7ED', color: '#C2410C' },
      '고급': { bg: '#FDF4FF', color: '#7C3AED' }
    };
    return map[level] || { bg: '#F3F4F6', color: '#374151' };
  },

  /* ── 진도 바 HTML 생성 ── */
  renderProgressBar(percent, height = 6, color = '#FF6B35') {
    return `
      <div style="width:100%;height:${height}px;background:#E5E7EB;border-radius:999px;overflow:hidden;">
        <div style="width:${Math.min(100,Math.max(0,percent))}%;height:100%;background:${color};border-radius:999px;transition:width 0.4s ease;"></div>
      </div>`;
  },

  /* ── 최근 업데이트 강의 ── */
  getRecentlyUpdated(n = 3) {
    return [...this.courses]
      .sort((a,b) => new Date(b.updatedAt) - new Date(a.updatedAt))
      .slice(0, n);
  },

  /* ── 인기 강의 ── */
  getPopular(n = 6) {
    return [...this.courses]
      .sort((a,b) => b.students - a.students)
      .slice(0, n);
  },

  /* ── 무료 강의만 ── */
  getFreeCourses() {
    return this.courses.filter(c => c.price === 0);
  },

  /* ── 강의 통계 요약 ── */
  getSummary() {
    const total     = this.courses.length;
    const free      = this.courses.filter(c => c.price === 0).length;
    const paid      = total - free;
    const avgRating = (this.courses.reduce((s,c) => s+c.rating, 0) / total).toFixed(2);
    const totalStudents = this.courses.reduce((s,c) => s+c.students, 0);
    const categories = [...new Set(this.courses.map(c => c.categoryLabel))];

    return {
      total,
      free,
      paid,
      avgRating: parseFloat(avgRating),
      totalStudents,
      categories,
      categoryCount: categories.length
    };
  },

  /* ── 학습 완료 체크 (80% 이상) ── */
  isCompleted(courseId) {
    const p = this.getCourseProgress(courseId);
    return p && p.overallPercent >= 80;
  },

  /* ── 수료증 발급 가능 여부 ── */
  canGetCertificate(courseId) {
    return this.isEnrolled(courseId) && this.isCompleted(courseId);
  },

  /* ── 즐겨찾기 (로컬스토리지) ── */
  toggleWishlist(courseId) {
    let list = [];
    try { list = JSON.parse(localStorage.getItem('ax-wishlist') || '[]'); } catch {}
    const idx = list.indexOf(courseId);
    if (idx === -1) list.push(courseId);
    else list.splice(idx, 1);
    localStorage.setItem('ax-wishlist', JSON.stringify(list));
    return list.includes(courseId);
  },

  getWishlist() {
    try { return JSON.parse(localStorage.getItem('ax-wishlist') || '[]'); } catch { return []; }
  },

  isWishlisted(courseId) {
    return this.getWishlist().includes(courseId);
  }
};

/* ── 글로벌 노출 ── */
if (typeof window !== 'undefined') {
  window.LMS = LMS;
}

/* ── Node.js 환경용 ── */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = LMS;
}
