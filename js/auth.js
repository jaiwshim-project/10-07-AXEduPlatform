// AX교육플랫폼 인증 모듈

const Auth = {
  // 현재 사용자
  currentUser: null,

  // 초기화
  async init() {
    const saved = Utils.storage.get('user');
    if (saved) this.currentUser = saved;
    this.updateNavUI();
    return this.currentUser;
  },

  // 로그인
  async signIn(email, password) {
    const sb = getSupabase();
    if (sb) {
      const { data, error } = await sb.auth.signInWithPassword({ email, password });
      if (error) throw new Error(this.translateError(error.message));
      this.currentUser = { id: data.user.id, email: data.user.email, name: data.user.user_metadata?.name || email.split('@')[0] };
    } else {
      // 더미 로그인
      if (!email || !password) throw new Error('이메일과 비밀번호를 입력해주세요.');
      this.currentUser = { id: 'demo-user', email, name: email.split('@')[0], role: 'student' };
    }
    Utils.storage.set('user', this.currentUser);
    this.updateNavUI();
    return this.currentUser;
  },

  // 회원가입
  async signUp(email, password, userData) {
    const sb = getSupabase();
    if (sb) {
      const { data, error } = await sb.auth.signUp({ email, password, options: { data: userData } });
      if (error) throw new Error(this.translateError(error.message));
      this.currentUser = { id: data.user?.id, email, name: userData.name, role: 'student' };
    } else {
      this.currentUser = { id: 'demo-' + Date.now(), email, ...userData, role: 'student' };
    }
    Utils.storage.set('user', this.currentUser);
    this.updateNavUI();
    return this.currentUser;
  },

  // Google 로그인
  async signInWithGoogle() {
    const sb = getSupabase();
    if (sb) {
      const { error } = await sb.auth.signInWithOAuth({ provider: 'google' });
      if (error) throw new Error(error.message);
    } else {
      this.currentUser = { id: 'google-demo', email: 'demo@gmail.com', name: 'Google 사용자', role: 'student' };
      Utils.storage.set('user', this.currentUser);
      this.updateNavUI();
      return this.currentUser;
    }
  },

  // 로그아웃
  async signOut() {
    const sb = getSupabase();
    if (sb) await sb.auth.signOut();
    this.currentUser = null;
    Utils.storage.remove('user');
    this.updateNavUI();
    window.location.href = '../index.html';
  },

  // 현재 사용자
  getCurrentUser() { return this.currentUser; },

  // 보호된 페이지 체크
  requireAuth() {
    if (!this.currentUser) {
      Utils.showToast('로그인이 필요합니다.', 'warning');
      setTimeout(() => window.location.href = 'auth.html', 1000);
      return false;
    }
    return true;
  },

  // 네비 UI 업데이트
  updateNavUI() {
    const loginBtn = document.getElementById('loginBtn');
    const dashBtn = document.getElementById('dashboardBtn');
    const userInfo = document.getElementById('userInfo');
    if (this.currentUser) {
      if (loginBtn) loginBtn.style.display = 'none';
      if (dashBtn) dashBtn.style.display = 'inline-block';
      if (userInfo) userInfo.textContent = this.currentUser.name;
    } else {
      if (loginBtn) loginBtn.style.display = 'inline-block';
      if (dashBtn) dashBtn.style.display = 'none';
    }
  },

  // 에러 번역
  translateError(msg) {
    const map = {
      'Invalid login credentials': '이메일 또는 비밀번호가 올바르지 않습니다.',
      'Email not confirmed': '이메일 인증이 필요합니다. 메일함을 확인해주세요.',
      'User already registered': '이미 등록된 이메일 주소입니다.',
      'Password should be at least 6 characters': '비밀번호는 6자 이상이어야 합니다.',
    };
    return map[msg] || msg;
  }
};

// 자동 초기화
document.addEventListener('DOMContentLoaded', () => Auth.init());
