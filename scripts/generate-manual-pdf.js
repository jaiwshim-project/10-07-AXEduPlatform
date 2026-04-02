/**
 * AX교육플랫폼 매뉴얼 PDF 생성 스크립트
 * Puppeteer로 manual.html의 모든 섹션을 펼쳐서 고품질 PDF로 변환
 */
const puppeteer = require(require('path').join(process.env.APPDATA || '', 'npm/node_modules/puppeteer-core'));
const path = require('path');
const fs = require('fs');

async function generateManualPDF() {
  const manualPath = path.resolve(__dirname, '../pages/manual.html');
  const outputPath = path.resolve(__dirname, '../downloads/AX교육플랫폼_사용자매뉴얼.pdf');
  const outputDir = path.dirname(outputPath);

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log('🚀 PDF 생성 시작...');
  console.log(`   입력: ${manualPath}`);
  console.log(`   출력: ${outputPath}`);

  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 900 });

    const fileUrl = `file:///${manualPath.replace(/\\/g, '/')}`;
    await page.goto(fileUrl, { waitUntil: 'networkidle0', timeout: 30000 });

    // 모든 섹션 표시 + 인쇄용 스타일 주입
    await page.evaluate(() => {
      // 모든 manual-section을 표시
      document.querySelectorAll('.manual-section').forEach(s => {
        s.classList.add('active');
        s.style.display = 'block';
        s.style.pageBreakBefore = 'always';
      });
      // 첫 번째 섹션은 page-break 없음
      const first = document.querySelector('.manual-section');
      if (first) first.style.pageBreakBefore = 'auto';

      // 사이드바, 네비게이션, 도움말 버튼 숨기기
      const hide = [
        '.navbar', '.manual-sidebar', '.manual-mobile-nav',
        '.help-btn', '#toast-container', '.hamburger',
        '.sidebar-search', '.pdf-download-bar'
      ];
      hide.forEach(sel => {
        document.querySelectorAll(sel).forEach(el => el.style.display = 'none');
      });

      // wrapper를 단일 컬럼으로 변경
      const wrapper = document.querySelector('.manual-wrapper');
      if (wrapper) {
        wrapper.style.display = 'block';
      }

      // 콘텐츠 영역 확장
      const content = document.querySelector('.manual-content');
      if (content) {
        content.style.maxWidth = '100%';
        content.style.padding = '0 40px';
      }

      // breadcrumb 숨기기 (PDF에서는 불필요)
      document.querySelectorAll('.manual-breadcrumb').forEach(b => {
        b.style.display = 'none';
      });

      // FAQ 전부 열기
      document.querySelectorAll('.faq-item').forEach(faq => {
        faq.classList.add('open');
      });
    });

    // 커버 페이지 삽입
    await page.evaluate(() => {
      const cover = document.createElement('div');
      cover.id = 'pdf-cover';
      cover.innerHTML = `
        <div style="
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 85vh;
          text-align: center;
          padding: 60px 40px;
        ">
          <div style="
            font-size: 64px;
            margin-bottom: 24px;
          ">📘</div>
          <h1 style="
            font-size: 36px;
            font-weight: 900;
            color: #1a1a2e;
            margin-bottom: 12px;
            letter-spacing: -0.5px;
          ">AX교육플랫폼</h1>
          <h2 style="
            font-size: 24px;
            font-weight: 600;
            color: #FF6B35;
            margin-bottom: 40px;
          ">사용자 매뉴얼</h2>
          <div style="
            width: 80px;
            height: 3px;
            background: linear-gradient(90deg, #FF6B35, #1a1a2e);
            margin-bottom: 40px;
          "></div>
          <p style="
            font-size: 16px;
            color: #666;
            line-height: 1.8;
            max-width: 500px;
          ">
            교육 → 인증 → 커뮤니티 → 실전 프로젝트<br>
            AI 전환(AX) 전문가를 양성하는 통합 생태계 플랫폼
          </p>
          <div style="
            margin-top: 60px;
            font-size: 14px;
            color: #999;
          ">
            <p>Version 1.0</p>
            <p>${new Date().toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
        </div>
      `;
      cover.style.pageBreakAfter = 'always';

      const wrapper = document.querySelector('.manual-wrapper');
      if (wrapper) {
        wrapper.parentNode.insertBefore(cover, wrapper);
      }
    });

    // 목차 페이지 삽입
    await page.evaluate(() => {
      const toc = document.createElement('div');
      toc.id = 'pdf-toc';
      toc.innerHTML = `
        <div style="padding: 40px; min-height: 60vh;">
          <h2 style="
            font-size: 28px;
            font-weight: 900;
            color: #1a1a2e;
            margin-bottom: 32px;
            padding-bottom: 12px;
            border-bottom: 3px solid #FF6B35;
          ">목 차</h2>
          <div style="display:flex;flex-direction:column;gap:6px;">
            <div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px dotted #ddd;">
              <span style="font-weight:800;color:#FF6B35;min-width:36px;">1.</span>
              <span style="font-weight:700;color:#1a1a2e;">시작하기</span>
            </div>
            <div style="display:flex;align-items:center;gap:12px;padding:6px 0 6px 36px;color:#555;font-size:14px;">
              <span>1-1. 플랫폼 소개</span>
            </div>
            <div style="display:flex;align-items:center;gap:12px;padding:6px 0 6px 36px;color:#555;font-size:14px;">
              <span>1-2. 회원가입 / 로그인</span>
            </div>
            <div style="display:flex;align-items:center;gap:12px;padding:6px 0 6px 36px;color:#555;font-size:14px;border-bottom:1px dotted #ddd;">
              <span>1-3. 첫 강의 시작하기</span>
            </div>
            <div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px dotted #ddd;">
              <span style="font-weight:800;color:#FF6B35;min-width:36px;">2.</span>
              <span style="font-weight:700;color:#1a1a2e;">학습자 가이드</span>
            </div>
            <div style="display:flex;align-items:center;gap:12px;padding:6px 0 6px 36px;color:#555;font-size:14px;">
              <span>2-1. 강의 수강 방법</span>
            </div>
            <div style="display:flex;align-items:center;gap:12px;padding:6px 0 6px 36px;color:#555;font-size:14px;">
              <span>2-2. 과제 제출</span>
            </div>
            <div style="display:flex;align-items:center;gap:12px;padding:6px 0 6px 36px;color:#555;font-size:14px;border-bottom:1px dotted #ddd;">
              <span>2-3. 프로젝트 참여</span>
            </div>
            <div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px dotted #ddd;">
              <span style="font-weight:800;color:#FF6B35;min-width:36px;">3.</span>
              <span style="font-weight:700;color:#1a1a2e;">전문가 인증 가이드</span>
            </div>
            <div style="display:flex;align-items:center;gap:12px;padding:6px 0 6px 36px;color:#555;font-size:14px;">
              <span>3-1. 인증 단계 소개</span>
            </div>
            <div style="display:flex;align-items:center;gap:12px;padding:6px 0 6px 36px;color:#555;font-size:14px;">
              <span>3-2. 시험 응시 방법</span>
            </div>
            <div style="display:flex;align-items:center;gap:12px;padding:6px 0 6px 36px;color:#555;font-size:14px;border-bottom:1px dotted #ddd;">
              <span>3-3. 인증서 발급</span>
            </div>
            <div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px dotted #ddd;">
              <span style="font-weight:800;color:#FF6B35;min-width:36px;">4.</span>
              <span style="font-weight:700;color:#1a1a2e;">AI 튜터 사용법</span>
            </div>
            <div style="display:flex;align-items:center;gap:12px;padding:6px 0 6px 36px;color:#555;font-size:14px;">
              <span>4-1. AI 튜터 소개</span>
            </div>
            <div style="display:flex;align-items:center;gap:12px;padding:6px 0 6px 36px;color:#555;font-size:14px;border-bottom:1px dotted #ddd;">
              <span>4-2. 효과적인 질문 방법</span>
            </div>
            <div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px dotted #ddd;">
              <span style="font-weight:800;color:#FF6B35;min-width:36px;">5.</span>
              <span style="font-weight:700;color:#1a1a2e;">강사 / 멘토 가이드</span>
            </div>
            <div style="display:flex;align-items:center;gap:12px;padding:6px 0 6px 36px;color:#555;font-size:14px;">
              <span>5-1. 강의 개설 방법</span>
            </div>
            <div style="display:flex;align-items:center;gap:12px;padding:6px 0 6px 36px;color:#555;font-size:14px;border-bottom:1px dotted #ddd;">
              <span>5-2. 프로젝트 멘토링</span>
            </div>
            <div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px dotted #ddd;">
              <span style="font-weight:800;color:#FF6B35;min-width:36px;">6.</span>
              <span style="font-weight:700;color:#1a1a2e;">기업 서비스 가이드</span>
            </div>
            <div style="display:flex;align-items:center;gap:12px;padding:6px 0 6px 36px;color:#555;font-size:14px;">
              <span>6-1. 프로젝트 의뢰</span>
            </div>
            <div style="display:flex;align-items:center;gap:12px;padding:6px 0 6px 36px;color:#555;font-size:14px;">
              <span>6-2. 전문가 매칭 프로세스</span>
            </div>
          </div>
        </div>
      `;
      toc.style.pageBreakAfter = 'always';

      const wrapper = document.querySelector('.manual-wrapper');
      const cover = document.getElementById('pdf-cover');
      if (wrapper && cover) {
        wrapper.parentNode.insertBefore(toc, wrapper);
      }
    });

    // PDF 생성
    await page.pdf({
      path: outputPath,
      format: 'A4',
      margin: {
        top: '24mm',
        bottom: '24mm',
        left: '18mm',
        right: '18mm',
      },
      displayHeaderFooter: true,
      headerTemplate: `
        <div style="font-size:8px; width:100%; text-align:center; color:#999; font-family:sans-serif;">
          AX교육플랫폼 사용자 매뉴얼
        </div>`,
      footerTemplate: `
        <div style="font-size:8px; width:100%; text-align:center; color:#999; font-family:sans-serif;">
          <span class="pageNumber"></span> / <span class="totalPages"></span>
        </div>`,
      printBackground: true,
      preferCSSPageSize: false,
    });

    const stats = fs.statSync(outputPath);
    const sizeMB = (stats.size / 1024 / 1024).toFixed(2);
    console.log(`✅ PDF 생성 완료!`);
    console.log(`   파일: ${outputPath}`);
    console.log(`   크기: ${sizeMB} MB`);

  } finally {
    await browser.close();
  }
}

generateManualPDF().catch(err => {
  console.error('❌ PDF 생성 실패:', err.message);
  process.exit(1);
});
