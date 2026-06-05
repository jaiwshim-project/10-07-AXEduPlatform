const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  console.log('🔍 Starting verification...\n');

  const browser = await puppeteer.launch({
    headless: false,  // 실제 브라우저 창 열기
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--start-maximized']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  // 캐시 완전 비활성화
  await page.setCacheEnabled(false);

  console.log('📡 Navigating to http://localhost:8081/index.html...');
  await page.goto('http://localhost:8081/index.html', {
    waitUntil: 'networkidle0',
    timeout: 15000
  });

  await new Promise(resolve => setTimeout(resolve, 2000));

  // 섹션 존재 여부 확인
  const sectionExists = await page.evaluate(() => {
    const headings = Array.from(document.querySelectorAll('h2'));
    return headings.some(h => h.textContent.includes('선명AX 교육과정 — 4단계 학습 경로'));
  });

  console.log(`✅ Section exists: ${sectionExists}`);

  // 4개 과정 링크 확인
  const courseLinks = await page.evaluate(() => {
    const links = Array.from(document.querySelectorAll('a[href*="course-"]'));
    return links.map(link => ({
      href: link.getAttribute('href'),
      text: link.textContent.trim().substring(0, 50)
    }));
  });

  console.log(`\n📚 Found ${courseLinks.length} course links:`);
  courseLinks.forEach((link, i) => {
    console.log(`   ${i+1}. ${link.href} - ${link.text}`);
  });

  // 스크린샷 저장
  const screenshotPath = path.join(__dirname, 'screenshot-final-verified.png');
  await page.screenshot({ path: screenshotPath, fullPage: true });
  console.log(`\n📸 Screenshot saved: ${screenshotPath}`);

  console.log('\n⏳ Browser will stay open for 10 seconds for manual inspection...');
  await new Promise(resolve => setTimeout(resolve, 10000));

  await browser.close();
  console.log('\n✅ Verification complete!');
})();
